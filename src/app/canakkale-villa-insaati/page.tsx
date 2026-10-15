import type { Metadata } from "next";
import { GOVDE, LD } from "./icerik";

// Hizmet sayfası — Abdulzahir/arastirma/kage-deneme/villa_sayfa.py üretir; ELLE DÜZENLENMEZ.
const BASLIK = "Çanakkale Villa İnşaatı | Cihan Tintin İnşaat & Mühendislik";
const ACIKLAMA =
  "Çanakkale'de arsadan anahtar teslimine villa inşaatı: ruhsat, proje, yapım, peyzaj tek muhatapla. Şantiyeyi 7/24 canlı kameradan izleyin.";
export const metadata: Metadata = {
  title: { absolute: BASLIK },
  description: ACIKLAMA,
  alternates: { canonical: "/canakkale-villa-insaati" },
  robots: { index: true, follow: true },
  openGraph: {
    title: BASLIK, description: ACIKLAMA, url: "https://cihantintin.com/canakkale-villa-insaati",
    siteName: "Cihan Tintin İnşaat & Mühendislik", locale: "tr_TR", type: "website",
    images: [{ url: "/kage-seo/foto/kart-3-teslim.webp", width: 1536, height: 1024, alt: "Ezine, Uluköy — tamamlanmış villa" }],
  },
};
export const viewport = { themeColor: "#05070a" };

export default function VillaInsaati() {
  return (
    <>
      <link rel="stylesheet" href="/kage-seo/fonts.css" precedence="default" />
      <link rel="stylesheet" href="/kage-seo/hizmet.css" precedence="default" />
      {LD.map((ld, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      ))}
      <div className="hizmet-kok" dangerouslySetInnerHTML={{ __html: GOVDE }} />
    </>
  );
}
