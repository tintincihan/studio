"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const services = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: "Ege Kıyısında Villa İnşaatı",
    description:
      "Dardanos'tan Assos'a, Geyikli'den Ayvacık'a uzanan kıyı şeridinde anahtar teslim villa inşaatı yapıyoruz. Zemin etüdünden çatı kiremidine kadar her aşamayı biz koordine eder, sizi yalnızca kararlarla ilgilendiririz.",
    cta: "Villa Projenizi Konuşalım",
    href: "#iletisim",
    tag: "Ana Hizmet",
    color: "bg-ege/10 text-ege border-ege/20",
    iconBg: "bg-ege/10 text-ege",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: "Eksiksiz Ruhsat Projesi — 6 Disiplin, 1 Muhatap",
    description:
      "Mimari, Statik, Elektrik, Mekanik, Zemin Etüdü ve Harita Mühendisliği — hepsi tek dosyada. Siz vekaletnameyi verirsiniz, ruhsat çıkana kadar tüm yazışma ve kurum takibini biz yürütürüz.",
    cta: "Ruhsat Sürecimi Başlat",
    href: "#iletisim",
    tag: "Ana Hizmet",
    color: "bg-ege/10 text-ege border-ege/20",
    iconBg: "bg-ege/10 text-ege",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Çanakkale'de Doğru Arsa, Doğru Yatırım",
    description:
      "İmar durumu belirsiz arsalara para yakmak yerine, inşaat değerini bilen gözlerle arsa ve konut alın. Tinvestin olarak satış, kiralama ve yatırım danışmanlığı yapıyor; teknik ön değerlendirmeyi birlikte sunuyoruz.",
    cta: "Portföyü İncele",
    href: "#iletisim",
    tag: "Tinvestin",
    color: "bg-zeytin/10 text-zeytin border-zeytin/20",
    iconBg: "bg-zeytin/10 text-zeytin",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: "Binanız Riskli mi? 6306 Uzmanı Yanınızda",
    description:
      "Risk tespiti Bakanlık lisanslı kuruluşla yapılır; sözleşme ve sorumluluk tek adreste, bizde. Sadece bürokratik bir süreç değil, binanızı yeniden değerlendirme fırsatı — risk tespitinden yıkım ve yeniden yapıma 6306 sürecini baştan sona yürütürüz.",
    cta: "Binamı Değerlendirin",
    href: "#iletisim",
    tag: "Kentsel Dönüşüm",
    color: "bg-terracotta/10 text-terracotta border-terracotta/20",
    iconBg: "bg-terracotta/10 text-terracotta",
  },
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="hizmetler" className="py-20 lg:py-28 bg-kumsal" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Başlık */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-ege font-semibold text-sm uppercase tracking-widest mb-3 block">
            Hizmetlerimiz
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-deniz mb-4">
            Ne İsterseniz, Tek Adresten
          </h2>
          <p className="text-metin-hafif text-lg max-w-2xl mx-auto">
            Arsa alımından ruhsata, inşaattan teslimata — tüm süreç burada.
          </p>
        </motion.div>

        {/* Kartlar */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-7 lg:p-8 shadow-[0_2px_16px_rgba(2,62,138,0.07)] hover:shadow-[0_8px_40px_rgba(2,62,138,0.14)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col group border border-gray-100/80 relative overflow-hidden"
            >
              {/* Renkli üst çizgi */}
              <div className={`absolute top-0 left-0 right-0 h-0.5 ${
                service.tag === "Ana Hizmet"
                  ? "bg-gradient-to-r from-ege/40 via-ege to-ege/40"
                  : service.tag === "Tinvestin"
                  ? "bg-gradient-to-r from-zeytin/40 via-zeytin to-zeytin/40"
                  : "bg-gradient-to-r from-terracotta/40 via-terracotta to-terracotta/40"
              }`} />

              {/* İkon + Etiket */}
              <div className="flex items-start justify-between mb-5">
                <div className={`p-3.5 rounded-xl shadow-sm ${service.iconBg} group-hover:scale-110 transition-transform duration-200`}>
                  {service.icon}
                </div>
                <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${service.color}`}>
                  {service.tag}
                </span>
              </div>

              {/* Başlık */}
              <h3 className="text-xl font-bold text-deniz mb-3 leading-snug">
                {service.title}
              </h3>

              {/* Açıklama */}
              <p className="text-metin-hafif leading-relaxed flex-1 mb-6">
                {service.description}
              </p>

              {/* CTA */}
              <a
                href={service.href}
                className="inline-flex items-center gap-2 text-ege font-semibold text-sm hover:gap-3 transition-all duration-200"
              >
                {service.cta}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
