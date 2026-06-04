import { serve } from "https://deno.land/std@0.177.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY")!;
const NOTIFY_EMAIL = Deno.env.get("NOTIFY_EMAIL") || "stormroller@hanmail.net";

interface InquiryPayload {
  type: "INSERT";
  table: string;
  record: {
    id: string;
    company_name: string;
    contact_name: string;
    phone: string;
    meal_count: number | null;
    message: string | null;
    created_at: string;
  };
}

serve(async (req) => {
  try {
    const payload: InquiryPayload = await req.json();
    const { record } = payload;

    const emailHtml = `
      <h2>새로운 급식 위탁 문의가 접수되었습니다</h2>
      <table style="border-collapse:collapse;width:100%;max-width:600px;">
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">회사명</td><td style="padding:8px;border:1px solid #ddd;">${record.company_name}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">담당자</td><td style="padding:8px;border:1px solid #ddd;">${record.contact_name}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">연락처</td><td style="padding:8px;border:1px solid #ddd;">${record.phone}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">식수</td><td style="padding:8px;border:1px solid #ddd;">${record.meal_count ?? "미입력"}명</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">문의 내용</td><td style="padding:8px;border:1px solid #ddd;">${record.message || "없음"}</td></tr>
      </table>
      <p style="margin-top:16px;color:#666;">접수 시각: ${new Date(record.created_at).toLocaleString("ko-KR", { timeZone: "Asia/Seoul" })}</p>
    `;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "(주)우리푸드앤드서비스 홈페이지 <noreply@woorifns.kr>",
        to: [NOTIFY_EMAIL],
        subject: `[문의접수] ${record.company_name} - ${record.contact_name}`,
        html: emailHtml,
      }),
    });

    const data = await res.json();
    return new Response(JSON.stringify(data), {
      headers: { "Content-Type": "application/json" },
      status: res.ok ? 200 : 400,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: (error as Error).message }), {
      headers: { "Content-Type": "application/json" },
      status: 500,
    });
  }
});
