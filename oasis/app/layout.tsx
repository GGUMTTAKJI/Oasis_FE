import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OASIS",
  description: "나의 경력을 새롭게 꽃피우는 공간 오아시스 입니다",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
