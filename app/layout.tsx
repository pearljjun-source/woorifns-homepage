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

const BASE_URL = "https://www.woorifns.kr";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "우리푸드앤드서비스 | 급식위탁 전문기업",
    template: "%s | 우리푸드앤드서비스",
  },
  description:
    "20년 전통 급식위탁 전문기업 우리푸드앤드서비스. 위탁급식·단체급식·구내식당·사내식당 전문 운영. 기업체, 기숙사, 관공서, 요양원, 요양병원 급식을 HACCP 기준 위생관리와 영양사 식단관리로 제공합니다. 충남 천안·아산·세종 지역 친환경 식재료 급식.",
  keywords: [
    /* 업종 명칭 (필수) */
    "위탁급식",
    "단체급식",
    "구내식당",
    "사내식당",
    /* 고객 기관 (필수) */
    "기업체급식",
    "기숙사급식",
    "관공서급식",
    "요양원급식",
    "요양병원급식",
    /* 신뢰 요소 (권장) */
    "영양사",
    "식단관리",
    "위생관리",
    "HACCP",
    "친환경 식재료",
    /* 지역 확장 (권장) */
    "천안급식",
    "충남급식",
    "아산급식",
    "세종급식",
    /* 브랜드 */
    "우리푸드앤드서비스",
    "급식위탁 전문기업",
  ],
  openGraph: {
    title: "우리푸드앤드서비스 | 급식위탁 전문기업",
    description:
      "20년 전통 급식위탁 전문기업. 위탁급식·단체급식·구내식당 전문 운영. HACCP 위생관리, 영양사 식단관리, 친환경 식재료. 천안·아산·세종.",
    type: "website",
    locale: "ko_KR",
    url: BASE_URL,
    siteName: "우리푸드앤드서비스",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: BASE_URL,
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
