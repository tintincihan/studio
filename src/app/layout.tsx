import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import YapilandirilmisVeri from "@/components/YapilandirilmisVeri";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cihantintin.com"),
  alternates: { canonical: "/" },
  title: "Cihan Tintin Mimarlık Mühendislik | Çanakkale Villa İnşaatı & Ruhsat — Tek Muhatap",
  description:
    "Çanakkale Ege kıyısında (Dardanos, Assos, Geyikli) villa inşaatı ve yapı ruhsatı. 6 mühendislik disiplini tek muhataptan, vekaletname sistemiyle tam süreç yönetimi. İl Özel İdaresi deneyimi. Ücretsiz keşif görüşmesi alın.",
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
      "Çanakkale kıyısında villa inşaatı, ruhsat, kentsel dönüşüm. 6 mühendislik disiplini tek muhataptan. İl Özel İdaresi deneyimi. Ücretsiz görüşme alın.",
    locale: "tr_TR",
    type: "website",
    url: "https://cihantintin.com",
    siteName: "Cihan Tintin Mimarlık Mühendislik",
    // üretim: Abdulzahir/araclar/og_gorsel_uret.py
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Cihan Tintin Mimarlık Mühendislik — Çanakkale" }],
  },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
  // Google Search Console: cihantintin@gmail.com hesabı, HTML DOSYASI yöntemiyle doğrulandı
  // (public/google3c230049980a52f5.html — SİLİNMEZ). Meta etiketi gerekmiyor.
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${jakarta.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <YapilandirilmisVeri />
        {children}
      </body>
    </html>
  );
}
