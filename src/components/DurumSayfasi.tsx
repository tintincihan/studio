import Link from "next/link";
import type { ReactNode } from "react";

/**
 * 404 (app/not-found.tsx) ve hata (app/error.tsx) sayfalarının ortak çerçevesi.
 * Palet Hero ve FinalCTA ile aynı: deniz zemin, terracotta vurgu.
 *
 * Navbar/Footer BİLİNÇLİ OLARAK YOK: ikisindeki "#hizmetler" gibi çapa bağlantıları
 * ana sayfaya göre yazılmış; bu sayfalarda var olmayan adrese göre çözülür, boşa çıkar.
 *
 * Metin kuralı (ABDULZAHIR değişmezleri): iddia, sayı, fiyat yok; hata ayrıntısı
 * (mesaj, digest, yığın) ekrana yazılmaz.
 */
export const birincilDugme =
  "inline-flex items-center justify-center gap-2 rounded-full bg-terracotta px-8 py-4 font-semibold text-white shadow-lg transition-colors hover:bg-terracotta-dark";

export const ikincilDugme =
  "inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-8 py-4 font-semibold text-white transition-colors hover:bg-white/20";

export default function DurumSayfasi({
  etiket,
  baslik,
  aciklama,
  children,
}: {
  etiket: string;
  baslik: string;
  aciklama: string;
  children: ReactNode;
}) {
  return (
    <main className="relative flex min-h-screen flex-1 items-center overflow-hidden bg-deniz">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -right-24 h-[28rem] w-[28rem] rounded-full bg-terracotta/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 -top-40 h-[24rem] w-[24rem] rounded-full bg-ege/30 blur-3xl"
      />

      <div className="relative z-10 mx-auto w-full max-w-3xl px-4 py-24 sm:px-6 lg:px-8">
        <Link href="/" className="mb-16 inline-flex flex-col leading-tight">
          <span className="text-lg font-bold tracking-tight text-white">Cihan Tintin</span>
          <span className="text-xs font-medium uppercase tracking-wider text-white/80">
            İnşaat · Mühendislik
          </span>
        </Link>

        <p className="mb-4 flex items-center gap-3 text-sm font-semibold uppercase tracking-widest text-white/80">
          <span aria-hidden="true" className="h-0.5 w-8 rounded-full bg-terracotta" />
          {etiket}
        </p>
        <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-[-0.02em] text-white sm:text-5xl">
          {baslik}
        </h1>
        <p className="mb-10 max-w-2xl text-lg leading-relaxed text-white/80">{aciklama}</p>

        <div className="flex flex-col gap-4 sm:flex-row">{children}</div>
      </div>
    </main>
  );
}
