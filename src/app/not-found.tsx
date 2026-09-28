import type { Metadata } from "next";
import Link from "next/link";
import DurumSayfasi, { birincilDugme, ikincilDugme } from "@/components/DurumSayfasi";

/**
 * Özel 404 — eşleşmeyen her adres buraya düşer. Next HTTP 404 döndürür ve
 * sayfaya kendiliğinden `noindex` ekler; arama motoru bu sayfayı dizine almaz.
 */
export const metadata: Metadata = {
  title: "Sayfa bulunamadı | Cihan Tintin İnşaat & Mühendislik",
};

export default function NotFound() {
  return (
    <DurumSayfasi
      etiket="404 · Sayfa bulunamadı"
      baslik="Aradığınız sayfa burada değil."
      aciklama="Bağlantı eskimiş ya da adres yanlış yazılmış olabilir. Ana sayfadan devam edebilir ya da doğrudan bize ulaşabilirsiniz."
    >
      <Link href="/" className={birincilDugme}>
        <svg
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
        </svg>
        Ana sayfaya dön
      </Link>
      <Link href="/#iletisim" className={ikincilDugme}>
        İletişime geçin
      </Link>
    </DurumSayfasi>
  );
}
