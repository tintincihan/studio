import type { Metadata } from "next";
import { GOVDE, SSS_LD } from "./govde";

// Ana sayfa — Abdulzahir/arastirma/kage-deneme/kage_seo.py üretir, yayina_tasi.py taşır; ELLE DÜZENLENMEZ. İçerik sunucu HTML'inde; iframe yok.
// Firma şeması (GeneralContractor) kök düzende (YapilandirilmisVeri); burada yalnız SSS şeması.
// 2026-10-30: başlık bizi tanımayanın yazdığı ifadeyle başlar (anahtar kelime seti 30.10)
const BASLIK = "Çanakkale İnşaat Firması, Müteahhit, Proje ve Ruhsat | Cihan Tintin";
// 2026-10-15: ücret/süre çağrışımı yok (kullanıcı kararı 13.10) — arama sonucundaki açıklama dahil
const ACIKLAMA =
  "Çanakkale'de inşaat firması ve müteahhit: villa, müstakil ev ve taş ev yapımı, mimari proje ve yapı ruhsatı, kentsel dönüşüm, tadilat. Vekaletname ile tek muhatap, 7/24 canlı şantiye kamerası.";
export const metadata: Metadata = {
  title: { absolute: BASLIK },
  description: ACIKLAMA,
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  // paylaşım önizlemesi (WhatsApp, sosyal medya): kök düzendeki görsel korunur, metin yeni sayfaya uyar
  openGraph: {
    title: BASLIK, description: ACIKLAMA, url: "https://cihantintin.com", siteName: "Cihan Tintin İnşaat & Mühendislik",
    locale: "tr_TR", type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Cihan Tintin İnşaat & Mühendislik — Çanakkale" }],
  },
};
// telefonda adres çubuğu sayfanın koyu rengini alır
export const viewport = { themeColor: "#05070a" };

export default function Home() {
  return (
    <>
      <link rel="preload" as="image" href="/kage-seo/foto/bg-0-hero.webp" fetchPriority="high" />
      <link rel="stylesheet" href="/kage-seo/fonts.css" precedence="default" />
      <link rel="stylesheet" href="/kage-seo/kage-seo.css" precedence="default" />
      <noscript>
        <style>{`.kage-kok [data-rv]{opacity:1!important;transform:none!important}.kage-kok .mask-line>span{transform:none!important}`}</style>
      </noscript>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SSS_LD) }} />
      <div
        className="kage-kok no-webgl"
        data-layout-hero="b" data-layout-story="b" data-layout-gallery="b"
        data-layout-curriculum="b" data-layout-closing="b" data-layout-footer="b"
        // kage-seo.js React devralmadan önce belirme sınıfı/arka plan ekler; bu kapsayıcıda içerik karşılaştırması kapalı
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: GOVDE }}
      />
      <script src="/kage-seo/kage-seo.js" defer />
    </>
  );
}
