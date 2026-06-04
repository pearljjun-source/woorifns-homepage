import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { createClient } from "@supabase/supabase-js";

// [S1] HTML 특수문자 이스케이프 — XSS 방지
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// [S3] 간단한 인메모리 Rate Limiter (IP 기반, 분당 5회)
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 5;
const requestCounts = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = requestCounts.get(ip);

  if (!entry || now > entry.resetAt) {
    requestCounts.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  entry.count++;
  return entry.count > RATE_LIMIT_MAX;
}

// [S2] 입력값 검증 — 타입 체크, 필수값 확인, 길이 제한
function validateInput(body: unknown): {
  valid: boolean;
  error?: string;
  data?: {
    companyName: string;
    contactName: string;
    phone: string;
    mealCount: string;
    message: string;
  };
} {
  if (!body || typeof body !== "object") {
    return { valid: false, error: "잘못된 요청 형식입니다." };
  }

  const b = body as Record<string, unknown>;

  // 필수값: 타입 체크 + 빈 값 거부
  const companyName = typeof b.companyName === "string" ? b.companyName.trim() : "";
  const contactName = typeof b.contactName === "string" ? b.contactName.trim() : "";
  const phone = typeof b.phone === "string" ? b.phone.trim() : "";

  if (!companyName) return { valid: false, error: "회사명은 필수 입력입니다." };
  if (!contactName) return { valid: false, error: "담당자명은 필수 입력입니다." };
  if (!phone) return { valid: false, error: "연락처는 필수 입력입니다." };

  // 길이 제한
  if (companyName.length > 100) return { valid: false, error: "회사명은 100자 이내로 입력해주세요." };
  if (contactName.length > 50) return { valid: false, error: "담당자명은 50자 이내로 입력해주세요." };
  if (phone.length > 20) return { valid: false, error: "연락처는 20자 이내로 입력해주세요." };

  // 선택값: 타입이 다르면 기본값 사용
  const mealCount = typeof b.mealCount === "string" ? b.mealCount.trim().slice(0, 10) : "";
  const message = typeof b.message === "string" ? b.message.trim().slice(0, 2000) : "";

  return {
    valid: true,
    data: { companyName, contactName, phone, mealCount, message },
  };
}

export async function POST(req: NextRequest) {
  try {
    // [S3] Rate Limiting — IP 기반, 분당 5회 제한
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { success: false, error: "요청이 너무 많습니다. 잠시 후 다시 시도해주세요." },
        { status: 429 }
      );
    }

    const body = await req.json();

    // [S2] 입력값 검증
    const validation = validateInput(body);
    if (!validation.valid || !validation.data) {
      return NextResponse.json(
        { success: false, error: validation.error },
        { status: 400 }
      );
    }

    const { companyName, contactName, phone, mealCount, message } =
      validation.data;

    // [S4] Supabase 저장 — 에러 처리 포함
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (supabaseUrl && supabaseKey) {
      const supabase = createClient(supabaseUrl, supabaseKey);
      const { error: dbError } = await supabase.from("inquiries").insert([
        {
          company_name: companyName,
          contact_name: contactName,
          phone,
          meal_count: mealCount ? parseInt(mealCount) : null,
          message,
        },
      ]);

      if (dbError) {
        console.error("Supabase insert error:", dbError);
        // DB 저장 실패해도 이메일은 발송 시도
      }
    }

    // Resend 이메일 발송
    const resendApiKey = process.env.RESEND_API_KEY;

    if (!resendApiKey) {
      console.error("Resend API key not configured");
      return NextResponse.json({ success: true, emailSent: false });
    }

    const resend = new Resend(resendApiKey);

    // [S1] 모든 사용자 입력을 escapeHtml()로 이스케이프하여 XSS 방지
    const htmlContent = `
      <div style="font-family: 'Malgun Gothic', sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background-color: #228B22; padding: 20px; text-align: center;">
          <h1 style="color: #fff; margin: 0; font-size: 20px;">새로운 급식 상담 문의</h1>
        </div>
        <div style="padding: 24px; background: #f9f9f9;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px; border-bottom: 1px solid #ddd; font-weight: bold; width: 120px;">회사명</td>
              <td style="padding: 12px; border-bottom: 1px solid #ddd;">${escapeHtml(companyName)}</td>
            </tr>
            <tr>
              <td style="padding: 12px; border-bottom: 1px solid #ddd; font-weight: bold;">담당자명</td>
              <td style="padding: 12px; border-bottom: 1px solid #ddd;">${escapeHtml(contactName)}</td>
            </tr>
            <tr>
              <td style="padding: 12px; border-bottom: 1px solid #ddd; font-weight: bold;">연락처</td>
              <td style="padding: 12px; border-bottom: 1px solid #ddd;">${escapeHtml(phone)}</td>
            </tr>
            <tr>
              <td style="padding: 12px; border-bottom: 1px solid #ddd; font-weight: bold;">식수</td>
              <td style="padding: 12px; border-bottom: 1px solid #ddd;">${mealCount ? escapeHtml(mealCount) + "명" : "미입력"}</td>
            </tr>
            <tr>
              <td style="padding: 12px; font-weight: bold; vertical-align: top;">문의 내용</td>
              <td style="padding: 12px; white-space: pre-wrap;">${message ? escapeHtml(message) : "없음"}</td>
            </tr>
          </table>
        </div>
        <div style="padding: 16px; text-align: center; color: #888; font-size: 12px;">
          (주)우리푸드앤드서비스 홈페이지에서 발송된 문의입니다.
        </div>
      </div>
    `;

    const notifyEmail = process.env.NOTIFY_EMAIL || "stormroller@hanmail.net";

    const { error: emailError } = await resend.emails.send({
      from: "(주)우리푸드앤드서비스 홈페이지 <noreply@woorifns.kr>",
      to: notifyEmail,
      subject: `[급식 상담] ${escapeHtml(companyName)} - ${escapeHtml(contactName)}`,
      html: htmlContent,
    });

    if (emailError) {
      console.error("Resend error:", emailError);
      return NextResponse.json({ success: true, emailSent: false });
    }

    return NextResponse.json({ success: true, emailSent: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { success: false, error: "문의 접수 중 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}
