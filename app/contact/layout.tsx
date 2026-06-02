import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "문의하기",
  description:
    "단체급식 위탁 상담 문의. 회사명, 식수, 식사 횟수를 입력하시면 빠르게 연락드립니다. 대표전화 1899-1094.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
