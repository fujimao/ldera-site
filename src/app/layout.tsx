import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://ldera.co.jp",
  ),
  title: "株式会社ルデラ | 映像制作・Web制作",
  description:
    "株式会社ルデラは、映像制作とWeb制作で企業の魅力を記憶に残る体験へ変える制作会社です。",
  keywords: [
    "株式会社ルデラ",
    "映像制作",
    "Web制作",
    "動画制作",
    "コーポレートサイト制作",
    "採用動画",
    "LP制作",
  ],
  openGraph: {
    title: "株式会社ルデラ | 映像制作・Web制作",
    description:
      "映像とWebで、会社の魅力を「なんか忘れられない」に変える制作会社です。",
    url: "/",
    siteName: "株式会社ルデラ",
    images: [
      {
        url: "/images/rudera-hero.png",
        width: 1200,
        height: 630,
        alt: "株式会社ルデラのヒーロービジュアル",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "株式会社ルデラ | 映像制作・Web制作",
    description:
      "映像とWebで、会社の魅力を「なんか忘れられない」に変える制作会社です。",
    images: ["/images/rudera-hero.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
