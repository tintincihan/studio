import type { NextConfig } from "next";

/**
 * Content-Security-Policy — sitenin GERÇEKTEN yüklediği kaynaklardan çıkarıldı
 * (2026-09-27, canlı / ve /gizlilik HTML'i + kaynak kod taraması):
 *
 * - Betik, stil, yazı tipi, favicon: yalnız aynı kaynak (/_next/static/…).
 *   Yazı tipi next/font ile derlemede indirilip kendi sunucumuzdan verilir;
 *   tarayıcı Google Fonts'a gitmez.
 * - Satır içi <script>'ler (Next RSC verisi `self.__next_f.push` + 2 JSON-LD)
 *   → script-src 'unsafe-inline'. Nonce yolu seçilmedi: Next 16 belgesine göre
 *   nonce, TÜM sayfaları dinamik render'a zorlar (statik önbellek kaybolur).
 * - style="" öznitelikleri (framer-motion başlangıç durumları, Hero gradyanları)
 *   → style-src 'unsafe-inline'.
 * - FinalCTA arka plan dokusu data:image/svg+xml → img-src data:.
 * - Harita iframe'i, analitik, piksel, Vercel araç çubuğu YOK.
 *   wa.me / tel: / mailto: / tinvestin.com yalnız bağlantıdır (gezinme);
 *   CSP gezinmeyi kısıtlamaz, bu yüzden listede yer almazlar.
 *
 * BİLİNÇLİ OLARAK YOK:
 * - upgrade-insecure-requests → yerel sunucu (PM2 :3005, nginx 4040) HTTP;
 *   eklenirse yerelde tüm varlıklar https'e zorlanıp kırılır. Canlıda HTTPS'i
 *   Vercel'in HSTS başlığı zaten zorluyor, sitede http:// alt kaynak yok.
 * - 'unsafe-eval' üretimde yok; yalnız `next dev` için gerekli (React hata yığını).
 *
 * frame-ancestors 'self' = aşağıdaki X-Frame-Options: SAMEORIGIN ile aynı davranış.
 *
 * ⚠️ Siteye yeni dış kaynak (harita, analitik, video, form arka ucu, dış görsel)
 * eklenirse ÖNCE bu liste güncellenir, yoksa tarayıcı onu sessizce engeller.
 * Aynı anda KVKK metni (/gizlilik) de yeniden denetlenir.
 */
const gelistirme = process.env.NODE_ENV === "development";

const icerikGuvenligi = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${gelistirme ? " 'unsafe-eval'" : ""}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data:",
  "font-src 'self'",
  "connect-src 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'self'",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: icerikGuvenligi },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "X-XSS-Protection", value: "1; mode=block" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];

const nextConfig: NextConfig = {
  async headers() {
    return [{ source: "/(.*)", headers: securityHeaders }];
  },
};

export default nextConfig;
