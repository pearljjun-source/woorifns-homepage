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
    default: "?곕━?몃뱶?ㅻ뱶?쒕퉬??| 湲됱떇?꾪긽 ?꾨Ц湲곗뾽",
    template: "%s | ?곕━?몃뱶?ㅻ뱶?쒕퉬??,
  },
  description:
    "20???꾪넻 湲됱떇?꾪긽 ?꾨Ц湲곗뾽 ?곕━?몃뱶?ㅻ뱶?쒕퉬?? ?꾪긽湲됱떇쨌?⑥껜湲됱떇쨌援щ궡?앸떦쨌?щ궡?앸떦 ?꾨Ц ?댁쁺. 湲곗뾽泥? 湲곗닕?? 愿怨듭꽌, ?붿뼇?? ?붿뼇蹂묒썝 湲됱떇??HACCP 湲곗? ?꾩깮愿由ъ? ?곸뼇???앸떒愿由щ줈 ?쒓났?⑸땲?? 異⑸궓 泥쒖븞쨌?꾩궛쨌?몄쥌 吏??移쒗솚寃??앹옱猷?湲됱떇.",
  keywords: [
    /* ?낆쥌 紐낆묶 (?꾩닔) */
    "?꾪긽湲됱떇",
    "?⑥껜湲됱떇",
    "援щ궡?앸떦",
    "?щ궡?앸떦",
    /* 怨좉컼 湲곌? (?꾩닔) */
    "湲곗뾽泥닿툒??,
    "湲곗닕?ш툒??,
    "愿怨듭꽌湲됱떇",
    "?붿뼇?먭툒??,
    "?붿뼇蹂묒썝湲됱떇",
    /* ?좊ː ?붿냼 (沅뚯옣) */
    "?곸뼇??,
    "?앸떒愿由?,
    "?꾩깮愿由?,
    "HACCP",
    "移쒗솚寃??앹옱猷?,
    /* 吏???뺤옣 (沅뚯옣) */
    "泥쒖븞湲됱떇",
    "異⑸궓湲됱떇",
    "?꾩궛湲됱떇",
    "?몄쥌湲됱떇",
    /* 釉뚮옖??*/
    "?곕━?몃뱶?ㅻ뱶?쒕퉬??,
    "湲됱떇?꾪긽 ?꾨Ц湲곗뾽",
  ],
  openGraph: {
    title: "?곕━?몃뱶?ㅻ뱶?쒕퉬??| 湲됱떇?꾪긽 ?꾨Ц湲곗뾽",
    description:
      "20???꾪넻 湲됱떇?꾪긽 ?꾨Ц湲곗뾽. ?꾪긽湲됱떇쨌?⑥껜湲됱떇쨌援щ궡?앸떦 ?꾨Ц ?댁쁺. HACCP ?꾩깮愿由? ?곸뼇???앸떒愿由? 移쒗솚寃??앹옱猷? 泥쒖븞쨌?꾩궛쨌?몄쥌.",
    type: "website",
    locale: "ko_KR",
    url: BASE_URL,
    siteName: "?곕━?몃뱶?ㅻ뱶?쒕퉬??,
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

