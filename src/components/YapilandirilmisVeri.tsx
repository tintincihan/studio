/**
 * schema.org JSON-LD — Google ve AI arama motorları için makine-okunur firma kimliği.
 *
 * KAYNAK: Abdulzahir/bilgi/FIRMA_BILGI_KARTI.md. Buraya yalnız teyitli bilgi girer.
 *
 * BİLİNÇLİ OLARAK YOK (eklemeden önce oku):
 * - aggregateRating / review  → gerçek, doğrulanabilir yorum yok. Uydurma puan
 *   Google'ın yapılandırılmış veri politikasını ihlal eder ve manuel işlem getirir.
 * - priceRange                → fiyat/oran dışa dönük yazılmaz (ABDULZAHIR değişmezi #1).
 * - openingHoursSpecification → çalışma saatleri teyit edilmedi (GBP'de de eksik).
 * - geo (enlem/boylam)        → ölçülmedi; tahmini koordinat yazılmaz.
 * - sameAs                    → GBP/Instagram/LinkedIn adresleri henüz teyitli değil.
 * - FAQPage                   → sayfada görünen SSS yok; görünmeyen içerik için şema yazılmaz.
 * - Biga, Gelibolu, Çan       → hizmet bölgesi DEĞİL, areaServed'e girmez.
 */
const SITE = "https://cihantintin.com";

const firma = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  "@id": `${SITE}/#firma`,
  name: "Cihan Tintin Mimarlık Mühendislik",
  legalName:
    "CİHAN TİNTİN MİMARLIK MÜHENDİSLİK GAYRİMENKUL İNŞAAT SANAYİ VE TİCARET LİMİTED ŞİRKETİ",
  url: SITE,
  telephone: ["+90-286-212-68-78", "+90-532-634-86-64"],
  email: "cihantintin@gmail.com",
  taxID: "6311332207",
  address: {
    "@type": "PostalAddress",
    streetAddress: "İsmetpaşa Mah. İleri Sk. No:15/1",
    addressLocality: "Merkez",
    addressRegion: "Çanakkale",
    addressCountry: "TR",
  },
  areaServed: [
    "Çanakkale Merkez",
    "Dardanos",
    "Güzelyalı",
    "Geyikli",
    "Ezine",
    "Ayvacık",
    "Assos–Behramkale",
  ].map((ad) => ({ "@type": "Place", name: ad })),
  description:
    "Çanakkale'de konut ve villa yapım işi, yapı ruhsatı (belediye ve İl Özel İdaresi) ve kentsel dönüşüm. Vekâletname ile tek muhatap; altı mühendislik disiplini çözüm ortaklarıyla tek elden; 7/24 canlı şantiye kamerası.",
  knowsAbout: [
    "Konut ve villa inşaatı",
    "Anahtar teslim inşaat",
    "Yapı ruhsatı",
    "İl Özel İdaresi ruhsat süreçleri",
    "Mimari, statik, mekanik, elektrik, zemin etüdü ve harita projeleri",
    "Kentsel dönüşüm (6306)",
    "Vekâletname ile süreç yönetimi",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Hizmetler",
    itemListElement: [
      "Anahtar teslim konut ve villa inşaatı",
      "Yapı ruhsatı projesi ve kurum takibi",
      "Kentsel dönüşüm süreç yönetimi",
      "7/24 canlı şantiye kamerası ile uzaktan takip",
    ].map((ad) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: ad },
    })),
  },
};

const site = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE}/#site`,
  url: SITE,
  name: "Cihan Tintin Mimarlık Mühendislik",
  inLanguage: "tr-TR",
  publisher: { "@id": `${SITE}/#firma` },
};

export default function YapilandirilmisVeri() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(firma) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(site) }}
      />
    </>
  );
}
