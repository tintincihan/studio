/**
 * schema.org JSON-LD — Google ve AI arama motorları için makine-okunur firma kimliği.
 *
 * KAYNAK: Abdulzahir/bilgi/FIRMA_BILGI_KARTI.md. Buraya yalnız teyitli bilgi girer.
 *
 * NAP (ad/adres/telefon) karttakiyle BİREBİR: legalName, adres, iki telefon, e-posta, VKN.
 * Ad kararı (2026-09-28 akşam, kullanıcı): kısa ad "Cihan Tintin İnşaat & Mühendislik", legalName tam unvan — sitenin
 * başlığı/OG/menüsüyle aynı; eski "Mimarlık Mühendislik" kısa adı kullanılmaz. Ad değişirse
 * önce FIRMA_BILGI_KARTI, sonra burası ve layout.tsx birlikte güncellenir.
 *
 * BİLİNÇLİ OLARAK YOK (eklemeden önce oku):
 * - aggregateRating / review  → gerçek, doğrulanabilir yorum yok. Uydurma puan
 *   Google'ın yapılandırılmış veri politikasını ihlal eder ve manuel işlem getirir.
 * - priceRange                → fiyat/oran dışa dönük yazılmaz (ABDULZAHIR değişmezi #1).
 * - geo (enlem/boylam)        → ölçülmedi; tahmini koordinat yazılmaz.
 * - sameAs (eksik kalanlar)   → Meta/Facebook, YouTube, LinkedIn henüz yok (kullanıcı 2026-10-15: "sonra bakacağız").
 *                               Teyitli olanlar aşağıda — kullanıcı verdi, açıldığı doğrulandı (2026-10-15).
 * - FAQPage                   → burada değil: ana sayfanın kendisi (src/app/page.tsx) görünen SSS'yle birlikte basar.
 * - areaServed (2026-10-15)   → kart "Hizmet BÖLGESİ": proje/ruhsat Çanakkale'nin tüm ilçeleri (il + 12 ilçe);
 *                               inşaat Çardak–Küçükkuyu kıyı bandı + 30 km — bant metinde/llms.txt'te anlatılır.
 */
const SITE = "https://cihantintin.com";

const firma = {
  "@context": "https://schema.org",
  // 2026-10-15: "Organization" de yazılır — bazı AI hazırlık tarayıcıları (MessGEO) GeneralContractor alt türünü
  // kuruluş saymıyor; GeneralContractor ⊂ LocalBusiness ⊂ Organization olduğundan anlam değişmez.
  "@type": ["GeneralContractor", "Organization"],
  "@id": `${SITE}/#firma`,
  // logo: firmanın kendi logosu (00 Şirket Evrakları/02 Logo/MİMAR.png → public/logo.png, 1248x528)
  logo: { "@type": "ImageObject", url: `${SITE}/logo.png`, width: 1248, height: 528 },
  // image: tamamlanmış iş (Uluköy, Ezine — kullanım izni kullanıcıda, 15.10) + paylaşım görseli
  image: [`${SITE}/kage-seo/foto/kart-3-teslim.webp`, `${SITE}/og.png`],
  name: "Cihan Tintin İnşaat & Mühendislik",
  legalName:
    "CİHAN TİNTİN MİMARLIK MÜHENDİSLİK GAYRİMENKUL İNŞAAT SANAYİ VE TİCARET LİMİTED ŞİRKETİ",
  url: SITE,
  // Google İşletme Profili (cid = kullanıcının verdiği paylaşım linkinin çözüldüğü kayıt), Yandex, Instagram — 2026-10-15
  sameAs: [
    "https://www.google.com/maps?cid=7710785214648308947",
    "https://yandex.com.tr/maps/org/cihan_tintin_insaat_muhendislik/72854076554",
    "https://www.instagram.com/cihantintin/",
  ],
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
  // Proje/ruhsat il geneli (kullanıcı kararı 2026-10-15); inşaat kıyı bandı ayrımı açıklama metninde
  areaServed: [
    { "@type": "AdministrativeArea", name: "Çanakkale" },
    ...[
      "Çanakkale Merkez", "Ayvacık", "Bayramiç", "Biga", "Bozcaada", "Çan",
      "Eceabat", "Ezine", "Gelibolu", "Gökçeada", "Lapseki", "Yenice",
    ].map((ad) => ({ "@type": "AdministrativeArea", name: ad })),
    ...["Dardanos", "Güzelyalı", "Geyikli", "Assos–Behramkale", "Küçükkuyu", "Çardak"].map((ad) => ({
      "@type": "Place",
      name: ad,
    })),
  ],
  // Kullanıcı teyidi 2026-09-29 — GBP ve Yandex'teki saatlerle aynı.
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "08:00",
      closes: "13:00",
    },
  ],
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
  name: "Cihan Tintin İnşaat & Mühendislik",
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
