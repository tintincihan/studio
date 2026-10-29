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
  // 2026-10-30 (kullanıcı: "bizi tanımayan çanakkale inşaat firması, müteahhit, proje firması diye arar"): başlık ve
  // açıklama aranan ifadeyle başlar. Kaynak: ajanlar/seo-agent/outputs/2026-10-30_anahtar-kelime-seti.md
  title: "Çanakkale İnşaat Firması, Müteahhit, Proje ve Ruhsat | Cihan Tintin İnşaat & Mühendislik",
  description:
    // 2026-10-15: ücret/süre çağrışımı yok (kullanıcı kararı 13.10)
    "Çanakkale'de inşaat firması ve müteahhit: villa, müstakil ev ve taş ev yapımı, mimari proje ve yapı ruhsatı, kentsel dönüşüm, tadilat. Proje ve ruhsat tüm ilçelerde; inşaat Çardak'tan Küçükkuyu'ya kıyı şeridinde. Vekaletname ile tek muhatap.",
  keywords: [
    "Çanakkale inşaat firması",
    "Çanakkale müteahhit",
    "Çanakkale mimari proje",
    "Çanakkale taş ev yapımı",
    "Çanakkale tadilat",
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
    title: "Cihan Tintin İnşaat & Mühendislik — Vekaletnameyi Verin, Gerisini Biz Halledelim",
    description:
      "Çanakkale kıyısında villa inşaatı, ruhsat, kentsel dönüşüm. 6 mühendislik disiplini tek muhataptan. İl Özel İdaresi deneyimi.",
    locale: "tr_TR",
    type: "website",
    url: "https://cihantintin.com",
    siteName: "Cihan Tintin İnşaat & Mühendislik",
    // üretim: Abdulzahir/araclar/og_gorsel_uret.py
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Cihan Tintin İnşaat & Mühendislik — Çanakkale" }],
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
