"use client";

import { startTransition } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import DurumSayfasi, { birincilDugme, ikincilDugme } from "@/components/DurumSayfasi";

/**
 * Sayfa içi hata sınırı. Kök layout'u sarmaz (o, global-error.tsx'in işidir);
 * layout yalnız yazı tipi, CSS ve JSON-LD taşıdığı için burada yeterli.
 *
 * Hata AYRINTISI ekrana yazılmaz — ne mesaj ne digest. Üretimde Next hatayı
 * tarayıcı konsoluna zaten kendisi yazıyor (next/dist/client/react-client-callbacks
 * → onCaughtError); burada ayrıca console.error yok, çift kayıt olmasın.
 *
 * "Tekrar dene" = router.refresh() + reset(): sayfayı sunucudan tazeleyip yeniden
 * çizer. Next 16.2'deki `unstable_retry` tam olarak bunu yapar; kararsız API yerine
 * kararlı iki API ile yazıldı.
 */
export default function HataSayfasi({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();

  function tekrarDene() {
    startTransition(() => {
      router.refresh();
      reset();
    });
  }

  return (
    <DurumSayfasi
      etiket="Beklenmeyen bir hata"
      baslik="Bu sayfa şu an açılamadı."
      aciklama="Geçici bir aksaklık olabilir. Sayfayı yeniden deneyebilir ya da ana sayfadan devam edebilirsiniz."
    >
      <button type="button" onClick={tekrarDene} className={birincilDugme}>
        <svg
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          />
        </svg>
        Tekrar dene
      </button>
      <Link href="/" className={ikincilDugme}>
        Ana sayfaya dön
      </Link>
    </DurumSayfasi>
  );
}
