import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "900"],
  variable: "--font-noto-sans-kr",
  display: "swap",
});

export const metadata: Metadata = {
  title: "우리푸드앤드서비스 | 급식위탁 전문기업",
  description:
    "우리푸드앤드서비스는 학교, 기업, 공공기관 등에 건강하고 안전한 급식 서비스를 제공하는 급식위탁 전문기업입니다. 신선한 식재료와 체계적인 위생 관리로 최고의 급식 품질을 약속합니다.",
  keywords: [
    "급식위탁",
    "단체급식",
    "위탁급식",
    "학교급식",
    "기업급식",
    "우리푸드앤드서비스",
  ],
  openGraph: {
    title: "우리푸드앤드서비스 | 급식위탁 전문기업",
    description:
      "건강하고 안전한 급식 서비스를 제공하는 급식위탁 전문기업",
    type: "website",
    locale: "ko_KR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={notoSansKR.variable}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
