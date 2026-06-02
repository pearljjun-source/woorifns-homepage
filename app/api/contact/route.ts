import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { createClient } from "@supabase/supabase-js";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      companyName,
      contactName,
      phone,
      mealCount,
      breakfastPerWeek,
      lunchPerWeek,
      dinnerPerWeek,
      message,
    } = body;

    // Supabase 저장
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (supabaseUrl && supabaseKey) {
      const supabase = createClient(supabaseUrl, supabaseKey);
      await supabase.from("inquiries").insert([
        {
          company_name: companyName,
          contact_name: contactName,
          phone,
          meal_count: mealCount ? parseInt(mealCount) : null,
          breakfast_per_week: parseInt(breakfastPerWeek),
          lunch_per_week: parseInt(lunchPerWeek),
          dinner_per_week: parseInt(dinnerPerWeek),
          message,
        },
      ]);
    }

    // 이메일 발송
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    if (!smtpUser || !smtpPass) {
      console.error("SMTP credentials not configured");
      return NextResponse.json({ success: true, emailSent: false });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const mealInfo = [
      breakfastPerWeek !== "0" ? `조식 ${breakfastPerWeek}회` : null,
      lunchPerWeek !== "0" ? `중식 ${lunchPerWeek}회` : null,
      dinnerPerWeek !== "0" ? `석식 ${dinnerPerWeek}회` : null,
    ]
      .filter(Boolean)
      .join(", ");

    const htmlContent = `
      <div style="font-family: 'Malgun Gothic', sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background-color: #228B22; padding: 20px; text-align: center;">
          <h1 style="color: #fff; margin: 0; font-size: 20px;">새로운 급식 상담 문의</h1>
        </div>
        <div style="padding: 24px; background: #f9f9f9;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px; border-bottom: 1px solid #ddd; font-weight: bold; width: 120px;">회사명</td>
              <td style="padding: 12px; border-bottom: 1px solid #ddd;">${companyName}</td>
            </tr>
            <tr>
              <td style="padding: 12px; border-bottom: 1px solid #ddd; font-weight: bold;">담당자명</td>
              <td style="padding: 12px; border-bottom: 1px solid #ddd;">${contactName}</td>
            </tr>
            <tr>
              <td style="padding: 12px; border-bottom: 1px solid #ddd; font-weight: bold;">연락처</td>
              <td style="padding: 12px; border-bottom: 1px solid #ddd;">${phone}</td>
            </tr>
            <tr>
              <td style="padding: 12px; border-bottom: 1px solid #ddd; font-weight: bold;">식수</td>
              <td style="padding: 12px; border-bottom: 1px solid #ddd;">${mealCount ? mealCount + "명" : "미입력"}</td>
            </tr>
            <tr>
              <td style="padding: 12px; border-bottom: 1px solid #ddd; font-weight: bold;">주간 식사</td>
              <td style="padding: 12px; border-bottom: 1px solid #ddd;">${mealInfo || "미선택"}</td>
            </tr>
            <tr>
              <td style="padding: 12px; font-weight: bold; vertical-align: top;">문의 내용</td>
              <td style="padding: 12px; white-space: pre-wrap;">${message || "없음"}</td>
            </tr>
          </table>
        </div>
        <div style="padding: 16px; text-align: center; color: #888; font-size: 12px;">
          (주)우리푸드앤드서비스 홈페이지에서 발송된 문의입니다.
        </div>
      </div>
    `;

    await transporter.sendMail({
      from: `"(주)우리푸드앤드서비스 홈페이지" <${smtpUser}>`,
      to: "stormroller@hanmail.net",
      subject: `[급식 상담] ${companyName} - ${contactName}`,
      html: htmlContent,
    });

    return NextResponse.json({ success: true, emailSent: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { success: false, error: "문의 접수 중 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}
