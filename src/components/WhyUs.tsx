"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const reasons = [
  {
    n: "01",
    title: "İl Özel İdaresi'ni İçeriden Bilen Ekip",
    desc: "Cihan Tintin, Çanakkale İl Özel İdaresi İmar Müdürlüğü'nde 5 yıl bizzat çalıştı. Bir dosyanın hangi aşamada, hangi eksik yüzünden geri döndüğünü içeriden gördü — başvurunuz o eksiklerle yola çıkmaz.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    n: "02",
    title: "Vekaletname Sistemi — Gerçekten Tek Muhatap",
    desc: "Pek çok firma \"tek muhatap\" der ama dışarıdan taşeron koordinasyonu yapar. Bizde tüm disiplinler bünyemizde; vekaletname verdiğinizde gerçekten aradan çıkabilirsiniz.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
      </svg>
    ),
  },
  {
    n: "03",
    title: "Kamu Kurumuyla Tamamlanmış Sözleşme",
    desc: "Haziran 2025'te Çanakkale'de bir kamu kurumu Kentsel Dönüşüm hizmeti için doğrudan bu firmayı seçti ve proje başarıyla tamamlandı. EKAP (Kamu İhale Platformu) kayıtlı resmi sözleşme.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    n: "04",
    title: "Altı İmza Yerine Tek İmza",
    desc: "Mimari, statik, elektrik, mekanik, zemin etüdü ve harita — altısı da aynı ofiste, aynı ekipte. Büroları siz koordine etmezsiniz; aralarındaki gecikme ve \"o kısım bizden değil\" tartışması size yansımaz.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    n: "05",
    title: "Kıyı Şeridinin Kendine Has Kuralları",
    desc: "Dardanos, Güzelyalı, Geyikli, Assos–Behramkale, Ezine, Ayvacık. Her birinin kendi imar durumu, zemini ve ruhsat mercii var — kimi belediyede, kimi İl Özel İdaresi'nde. Bu ayrımı başında bilmek, dosyanın kaç ay süreceğini belirler.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    n: "06",
    title: "Arsa'dan Satışa Tam Ekosistem",
    desc: "Tinvestin Gayrimenkul ile arsa bulma, Cihan Tintin Mimarlık ile proje ve inşaat, sonrasında yeniden Tinvestin ile satış veya kiralama — döngü tamamen kapalı.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
];

export default function WhyUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="neden-biz" className="py-20 lg:py-28 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Sol: Sabit başlık */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-28"
          >
            <span className="text-terracotta font-semibold text-sm uppercase tracking-widest mb-3 block">
              Neden Biz
            </span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-deniz mb-6 leading-tight">
              Farkımız Söylemde Değil,{" "}
              <span className="text-terracotta">Yapıda</span>
            </h2>
            <p className="text-metin-hafif leading-relaxed mb-8">
              Çanakkale'de onlarca firma var. Bizi ayıran söz değil, işleyiş:
              altı mühendislik disiplini tek elden, İl Özel İdaresi'ni içeriden
              bilen deneyim ve kıyı bölgelerinin kurallarına saha bilgisi.
            </p>
            <a
              href="#iletisim"
              className="inline-flex items-center gap-2 bg-deniz hover:bg-ege text-white font-semibold px-7 py-3.5 rounded-full transition-colors duration-200"
            >
              Ücretsiz Görüşme Al
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>

          {/* Sağ: Nedenler listesi */}
          <div className="flex flex-col gap-6">
            {reasons.map((r, i) => (
              <motion.div
                key={r.n}
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
                className="flex gap-5 p-6 rounded-2xl bg-kumsal hover:bg-kumsal-dark transition-colors duration-200 group"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white text-ege flex items-center justify-center shadow-sm group-hover:bg-ege group-hover:text-white transition-colors duration-200">
                  {r.icon}
                </div>
                <div>
                  <span className="text-xs font-bold text-metin-hafif tracking-widest uppercase mb-1 block">
                    {r.n}
                  </span>
                  <h3 className="font-bold text-deniz mb-2 leading-snug">{r.title}</h3>
                  <p className="text-metin-hafif text-sm leading-relaxed">{r.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
