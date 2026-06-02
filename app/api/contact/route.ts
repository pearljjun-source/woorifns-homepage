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

    // Supabase ???    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
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

    // ?대찓??諛쒖넚
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
      breakfastPerWeek !== "0" ? `議곗떇 ${breakfastPerWeek}?? : null,
      lunchPerWeek !== "0" ? `以묒떇 ${lunchPerWeek}?? : null,
      dinnerPerWeek !== "0" ? `?앹떇 ${dinnerPerWeek}?? : null,
    ]
      .filter(Boolean)
      .join(", ");

    const htmlContent = `
      <div style="font-family: 'Malgun Gothic', sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background-color: #228B22; padding: 20px; text-align: center;">
          <h1 style="color: #fff; margin: 0; font-size: 20px;">?덈줈??湲됱떇 ?곷떞 臾몄쓽</h1>
        </div>
        <div style="padding: 24px; background: #f9f9f9;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px; border-bottom: 1px solid #ddd; font-weight: bold; width: 120px;">?뚯궗紐?/td>
              <td style="padding: 12px; border-bottom: 1px solid #ddd;">${companyName}</td>
            </tr>
            <tr>
              <td style="padding: 12px; border-bottom: 1px solid #ddd; font-weight: bold;">?대떦?먮챸</td>
              <td style="padding: 12px; border-bottom: 1px solid #ddd;">${contactName}</td>
            </tr>
            <tr>
              <td style="padding: 12px; border-bottom: 1px solid #ddd; font-weight: bold;">?곕씫泥?/td>
              <td style="padding: 12px; border-bottom: 1px solid #ddd;">${phone}</td>
            </tr>
            <tr>
              <td style="padding: 12px; border-bottom: 1px solid #ddd; font-weight: bold;">?앹닔</td>
              <td style="padding: 12px; border-bottom: 1px solid #ddd;">${mealCount ? mealCount + "紐? : "誘몄엯??}</td>
            </tr>
            <tr>
              <td style="padding: 12px; border-bottom: 1px solid #ddd; font-weight: bold;">二쇨컙 ?앹궗</td>
              <td style="padding: 12px; border-bottom: 1px solid #ddd;">${mealInfo || "誘몄꽑??}</td>
            </tr>
            <tr>
              <td style="padding: 12px; font-weight: bold; vertical-align: top;">臾몄쓽 ?댁슜</td>
              <td style="padding: 12px; white-space: pre-wrap;">${message || "?놁쓬"}</td>
            </tr>
          </table>
        </div>
        <div style="padding: 16px; text-align: center; color: #888; font-size: 12px;">
          ?곕━?몃뱶?ㅻ뱶?쒕퉬???덊럹?댁??먯꽌 諛쒖넚??臾몄쓽?낅땲??
        </div>
      </div>
    `;

    await transporter.sendMail({
      from: `"?곕━?몃뱶?ㅻ뱶?쒕퉬???덊럹?댁?" <${smtpUser}>`,
      to: "stormroller@hanmail.net",
      subject: `[湲됱떇 ?곷떞] ${companyName} - ${contactName}`,
      html: htmlContent,
    });

    return NextResponse.json({ success: true, emailSent: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { success: false, error: "臾몄쓽 ?묒닔 以??ㅻ쪟媛 諛쒖깮?덉뒿?덈떎." },
      { status: 500 }
    );
  }
}

