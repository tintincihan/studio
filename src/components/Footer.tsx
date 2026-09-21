const footerLinks = [
  {
    heading: "Hizmetler",
    links: [
      { label: "Villa İnşaatı", href: "#hizmetler" },
      { label: "Yapı Ruhsat Projesi", href: "#hizmetler" },
      { label: "Kentsel Dönüşüm", href: "#hizmetler" },
      { label: "Tinvestin Gayrimenkul", href: "#hizmetler" },
    ],
  },
  {
    heading: "Bölgeler",
    links: [
      { label: "Dardanos", href: "#bolgeler" },
      { label: "Güzelyalı", href: "#bolgeler" },
      { label: "Geyikli", href: "#bolgeler" },
      { label: "Assos · Behramkale", href: "#bolgeler" },
    ],
  },
  {
    heading: "Şirket",
    links: [
      { label: "Nasıl Çalışırız", href: "#surec" },
      { label: "Neden Biz", href: "#neden-biz" },
      { label: "İletişim", href: "#iletisim" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-metin text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-12 mb-12">
          {/* Marka */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <span className="font-bold text-xl tracking-tight">Cihan Tintin</span>
              <br />
              <span className="text-xs font-medium tracking-wider uppercase text-white/50">
                Mimarlık · Mühendislik · Gayrimenkul
              </span>
            </div>
            <p className="text-white/55 text-sm leading-relaxed mb-5 max-w-xs">
              Mimarlık, mühendislik ve gayrimenkul hizmetleri tek çatı altında.
              Vekâletnamenizi bırakın; arsadan anahtar teslimine kadar tek bir
              muhatapla ilerleyin, inşaatınızı 7/24 canlı kameradan kendiniz izleyin.
            </p>
            <p className="text-ege font-semibold text-sm italic">
              "Çanakkale'de Yapanın Adresi."
            </p>
          </div>

          {/* İletişim */}
          <div className="lg:col-span-2 lg:hidden xl:block">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4">İletişim</h4>
            <ul className="flex flex-col gap-3">
              <li>
                <a href="tel:+905326348664" className="text-sm text-white/60 hover:text-white transition-colors flex items-center gap-2">
                  <svg className="w-4 h-4 text-ege" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  0532 634 86 64
                </a>
              </li>
              <li>
                <a href="mailto:cihantintin@gmail.com" className="text-sm text-white/60 hover:text-white transition-colors flex items-center gap-2">
                  <svg className="w-4 h-4 text-ege" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  cihantintin@gmail.com
                </a>
              </li>
              <li>
                <a href="https://wa.me/905326348664" target="_blank" rel="noopener noreferrer" className="text-sm text-white/60 hover:text-white transition-colors flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>

          {/* Linkler */}
          {footerLinks.map((col) => (
            <div key={col.heading}>
              <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4">
                {col.heading}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-sm text-white/60 hover:text-white transition-colors"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Alt bant */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/35">
            © {new Date().getFullYear()} Cihan Tintin Mimarlık Mühendislik Gayrimenkul İnşaat San. ve Tic. Ltd. Şti.
            Tüm hakları saklıdır.
            <span className="mx-2 text-white/20">·</span>
            <a
              href="/gizlilik"
              className="text-white/55 hover:text-white underline underline-offset-2 transition-colors"
            >
              Gizlilik ve KVKK
            </a>
          </p>
          <div className="flex items-center gap-2 text-xs text-white/35">
            <span>Alt marka:</span>
            <span className="text-zeytin font-semibold">Tinvestin Gayrimenkul</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
