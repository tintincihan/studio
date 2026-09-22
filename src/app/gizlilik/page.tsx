import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/**
 * KVKK Aydınlatma Metni — /gizlilik
 *
 * ⚠️ TEYİT GEREKLİ: Bu metin sitenin GERÇEK davranışına göre yazıldı
 * (2026-09-22 denetimi: sitede analitik/çerez takibi YOK, form verisi sunucuda
 * SAKLANMIYOR, WhatsApp'a taşınıyor). Hukuki yeterliliği Abdulalim'e / bir
 * hukukçuya teyit ettirilmeden "onaylanmış metin" sayılmaz.
 *
 * Metin değişirse önce siteyi yeniden denetle: yeni bir analitik, piksel, form
 * arka ucu veya çerez eklendiği anda bu sayfa YANLIŞ olur.
 */
export const metadata: Metadata = {
  title: "Gizlilik ve KVKK Aydınlatma Metni | Cihan Tintin Mimarlık Mühendislik",
  description:
    "Cihan Tintin Mimarlık Mühendislik olarak kişisel verilerinizi nasıl işlediğimize dair KVKK aydınlatma metni.",
  robots: { index: true, follow: true },
};

const guncelleme = "22 Eylül 2026";

function Madde({
  baslik,
  children,
}: {
  baslik: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-10">
      <h2 className="text-xl lg:text-2xl font-bold text-deniz mb-3">{baslik}</h2>
      <div className="text-metin-hafif leading-relaxed space-y-3">{children}</div>
    </section>
  );
}

export default function GizlilikPage() {
  return (
    <>
      <Navbar />
      <main className="bg-kumsal">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <p className="text-sm font-semibold text-terracotta uppercase tracking-wide mb-3">
            Yasal Bilgilendirme
          </p>
          <h1 className="text-3xl lg:text-4xl font-extrabold text-deniz mb-3">
            Gizlilik ve KVKK Aydınlatma Metni
          </h1>
          <p className="text-metin-hafif mb-12">
            Son güncelleme: {guncelleme}
          </p>

          <Madde baslik="1. Veri Sorumlusu">
            <p>
              6698 sayılı Kişisel Verilerin Korunması Kanunu (&ldquo;KVKK&rdquo;)
              uyarınca veri sorumlusu:
            </p>
            <div className="bg-white rounded-xl p-5 text-metin not-italic">
              <p className="font-semibold mb-1">
                CİHAN TİNTİN MİMARLIK MÜHENDİSLİK GAYRİMENKUL İNŞAAT SANAYİ VE
                TİCARET LİMİTED ŞİRKETİ
              </p>
              <p className="text-sm text-metin-hafif">
                İsmetpaşa Mah. İleri Sk. No:15/1 Merkez / Çanakkale
                <br />
                Çanakkale Vergi Dairesi · VKN: 6311332207
                <br />
                Telefon: 0286 212 68 78 · 0532 634 86 64
                <br />
                E-posta:{" "}
                <a
                  href="mailto:cihantintin@gmail.com"
                  className="text-ege font-medium hover:underline"
                >
                  cihantintin@gmail.com
                </a>
              </p>
            </div>
          </Madde>

          <Madde baslik="2. Hangi verileri işliyoruz?">
            <p>
              Bu sitede <strong className="text-metin">çerez kullanılmıyor</strong>,{" "}
              <strong className="text-metin">
                analitik veya reklam takip kodu bulunmuyor
              </strong>
              . Ziyaretiniz izlenmiyor, profilleme yapılmıyor.
            </p>
            <p>
              İletişim formunu doldurduğunuzda girdiğiniz{" "}
              <strong className="text-metin">
                ad soyad, telefon numarası, görüşme konusu ve notunuz
              </strong>{" "}
              yalnızca kendi tarayıcınızda tutulur. &ldquo;Gönder&rdquo;e
              bastığınızda bu bilgiler hazır bir WhatsApp mesajına dönüştürülür ve
              WhatsApp penceresi açılır.{" "}
              <strong className="text-metin">
                Mesajı gönderme kararı ve eylemi size aittir
              </strong>
              ; siz göndermedikçe bize hiçbir veri ulaşmaz. Form verileri bu sitenin
              sunucusunda saklanmaz.
            </p>
          </Madde>

          <Madde baslik="3. Verileriniz nereye gidiyor?">
            <p>
              Mesajı gönderdiğinizde iletişim WhatsApp üzerinden kurulur; bu
              aşamada verileriniz WhatsApp&apos;ı işleten{" "}
              <strong className="text-metin">Meta Platforms</strong> altyapısından
              geçer ve WhatsApp&apos;ın kendi gizlilik politikasına tabi olur.
              Bize ulaşan mesaj, talebinizi karşılamak amacıyla firmamızın
              telefonunda saklanır.
            </p>
            <p>
              Sitenin barındırıldığı altyapı olan{" "}
              <strong className="text-metin">Vercel</strong>, teknik zorunluluk
              gereği standart sunucu kayıtları (IP adresi, tarayıcı bilgisi, istek
              zamanı) tutar. Bu kayıtlar pazarlama amacıyla kullanılmaz.
            </p>
            <p>
              Kişisel verileriniz bunların dışında{" "}
              <strong className="text-metin">
                hiçbir üçüncü kişiye satılmaz, kiralanmaz veya devredilmez.
              </strong>
            </p>
          </Madde>

          <Madde baslik="4. İşleme amacı ve hukuki sebep">
            <p>
              Verileriniz yalnızca{" "}
              <strong className="text-metin">
                talebinize dönüş yapmak, görüşme ayarlamak ve hizmetimiz hakkında
                bilgi vermek
              </strong>{" "}
              amacıyla işlenir. Hukuki sebep, talebinizi bize kendi iradenizle
              iletmeniz ve sözleşme öncesi görüşmelerin yürütülmesidir.
            </p>
            <p>
              Bize ulaşan iletişim bilgileriniz, ilgili iş süreci sona erdikten
              sonra makul süre içinde silinir; yasal saklama yükümlülüğü bulunan
              hâller saklıdır.
            </p>
          </Madde>

          <Madde baslik="5. Haklarınız">
            <p>
              KVKK&apos;nın 11. maddesi uyarınca; kişisel verilerinizin işlenip
              işlenmediğini öğrenme, işlenmişse bilgi talep etme, işlenme amacını
              öğrenme, yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri
              bilme, eksik veya yanlış işlenmişse düzeltilmesini isteme, silinmesini
              veya yok edilmesini isteme ve işlemenin kanuna aykırı olması hâlinde
              zararınızın giderilmesini talep etme haklarına sahipsiniz.
            </p>
            <p>
              Taleplerinizi yukarıdaki adrese yazılı olarak veya{" "}
              <a
                href="mailto:cihantintin@gmail.com"
                className="text-ege font-medium hover:underline"
              >
                cihantintin@gmail.com
              </a>{" "}
              adresine e-posta göndererek iletebilirsiniz.
            </p>
          </Madde>

          <Madde baslik="6. Değişiklikler">
            <p>
              Bu metin, sitenin işleyişi değiştiğinde güncellenir. Siteye yeni bir
              form altyapısı, analitik aracı veya çerez eklenmesi hâlinde metin
              yenilenir ve güncelleme tarihi değiştirilir.
            </p>
          </Madde>

          <div className="pt-6 border-t border-kumsal-dark">
            <Link
              href="/"
              className="text-ege font-semibold hover:underline inline-flex items-center gap-2"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7 16l-4-4m0 0l4-4m-4 4h18"
                />
              </svg>
              Ana sayfaya dön
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
