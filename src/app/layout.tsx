import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Cihan Tintin Mimarlık Mühendislik | Çanakkale Villa İnşaatı & Ruhsat — Tek Muhatap",
  description:
    "Çanakkale Ege kıyısında (Dardanos, Assos, Geyikli) villa inşaatı ve yapı ruhsatı. 6 mühendislik disiplini tek çatıda, vekaletname sistemiyle tam süreç yönetimi. İl Özel İdaresi uzmanı ekip. Ücretsiz keşif görüşmesi alın.",
  keywords: [
    "Çanakkale villa inşaatı",
    "yapı ruhsat projesi Çanakkale",
    "kentsel dönüşüm Çanakkale",
    "Dardanos villa taahhüt",
    "Assos villa yaptırmak",
    "Geyikli villa inşaat",
    "Çanakkale mühendislik bürosu",
    "Tinvestin Gayrimenkul",
    "vekaletname inşaat Çanakkale",
    "İl Özel İdaresi ruhsat",
  ],
  openGraph: {
    title: "Cihan Tintin Mimarlık — Vekaletnameyi Verin, Gerisini Biz Halledelim",
    description:
      "Çanakkale kıyısında villa inşaatı, ruhsat, kentsel dönüşüm. 6 mühendislik disiplini tek çatıda. İl Özel İdaresi uzmanı ekip. Ücretsiz görüşme alın.",
    locale: "tr_TR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${jakarta.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
