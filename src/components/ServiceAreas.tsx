"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const areas = [
  {
    name: "Dardanos",
    tag: "Çanakkale merkeze yakın",
    desc: "Değer artışı hızlı kıyı şeridi — villa ve yazlık projeler için öncelikli bölge.",
    color: "from-ege/10 to-ege/5",
    accent: "text-ege",
    dot: "bg-ege",
  },
  {
    name: "Güzelyalı",
    tag: "Manzaralı parseller",
    desc: "Denize sıfır konumlar, villa projeleri için ideal yükseltili arazi.",
    color: "from-deniz/10 to-deniz/5",
    accent: "text-deniz",
    dot: "bg-deniz",
  },
  {
    name: "Geyikli",
    tag: "Sakin koy",
    desc: "Yatırımcıların yeni rotası — erken giren kazanır mantığı burada işliyor.",
    color: "from-zeytin/10 to-zeytin/5",
    accent: "text-zeytin",
    dot: "bg-zeytin",
  },
  {
    name: "Assos · Behramkale",
    tag: "Tarihi doku",
    desc: "Özel yapı izinleri, koruma alanı uzmanlığı gerektiren eşsiz bir bölge.",
    color: "from-terracotta/10 to-terracotta/5",
    accent: "text-terracotta",
    dot: "bg-terracotta",
  },
  {
    name: "Ezine",
    tag: "Kırsal & kıyı arası",
    desc: "Tarım arazisi + yapı mevzuatı kesişiminde uzman olmak şart.",
    color: "from-ege/10 to-ege/5",
    accent: "text-ege",
    dot: "bg-ege",
  },
  {
    name: "Ayvacık",
    tag: "Ege'nin kapısı",
    desc: "Deprem bölgesi deneyimi — zemin etüdü ve statik hesap hassasiyeti kritik.",
    color: "from-terracotta/10 to-terracotta/5",
    accent: "text-terracotta",
    dot: "bg-terracotta",
  },
  {
    name: "Çanakkale Merkez",
    tag: "Kentsel yoğunluk",
    desc: "Kentsel dönüşüm ve ruhsat projeleri için en hareketli bölge.",
    color: "from-deniz/10 to-deniz/5",
    accent: "text-deniz",
    dot: "bg-deniz",
  },
];

export default function ServiceAreas() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="bolgeler" className="py-20 lg:py-28 bg-kumsal" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-terracotta font-semibold text-sm uppercase tracking-widest mb-3 block">
            Hizmet Bölgelerimiz
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-deniz mb-4">
            Çanakkale Kıyı Şeridini{" "}
            <span className="text-ege">Avucumuzun İçi Gibi</span> Biliriz
          </h2>
          <p className="text-metin-hafif text-lg max-w-2xl mx-auto">
            Dardanos'tan Ayvacık'a uzanan kıyı kuşağında onlarca proje teslim ettik — her
            bölgenin imar koşullarını, zemin özelliklerini ve kurum süreçlerini bizzat biliriz.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-5">
          {areas.map((area, i) => (
            <motion.div
              key={area.name}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.1 + i * 0.07 }}
              className={`bg-gradient-to-br ${area.color} border border-white/60 rounded-2xl p-6 hover:shadow-md transition-shadow duration-300 group`}
            >
              <div className="flex items-center gap-2 mb-3">
                <span className={`w-2 h-2 rounded-full flex-shrink-0 ${area.dot}`} />
                <span className={`text-xs font-semibold uppercase tracking-wide ${area.accent}`}>
                  {area.tag}
                </span>
              </div>
              <h3 className="text-lg font-bold text-deniz mb-2 leading-snug">
                {area.name}
              </h3>
              <p className="text-metin-hafif text-sm leading-relaxed">{area.desc}</p>
            </motion.div>
          ))}

          {/* Genişletilmiş bölge kartı */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: 0.1 + areas.length * 0.07 }}
            className="bg-deniz rounded-2xl p-6 flex flex-col justify-center items-center text-center hover:shadow-lg transition-shadow duration-300"
          >
            <p className="text-white/80 text-sm mb-3">Bölgenizi görmüyor musunuz?</p>
            <p className="text-white font-bold text-base mb-4 leading-snug">
              Çanakkale genelinde her türlü projede yardımcı oluruz.
            </p>
            <a
              href="#iletisim"
              className="inline-flex items-center gap-1.5 bg-terracotta hover:bg-terracotta-dark text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors"
            >
              Sorun
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
