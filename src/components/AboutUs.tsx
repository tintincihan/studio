"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const timeline = [
  {
    year: "2006",
    title: "Mesleki Hayatın Başlangıcı",
    desc: "Çanakkale'de mimarlık ve mühendislik kariyeri başladı.",
  },
  {
    year: "5 Yıl",
    title: "İl Özel İdaresi İmar Müdürlüğü",
    desc: "Mimari proje kontrolü ve yapı ruhsatı süreçlerinde devlet kademesinde deneyim.",
  },
  {
    year: "3 Yıl",
    title: "İmar Barışı Teknik Hizmeti",
    desc: "Çanakkale il ve ilçelerinde kapsamlı imar barışı başvuru ve teknik danışmanlık.",
  },
  {
    year: "—",
    title: "İSKA Kentsel Dönüşüm",
    desc: "Firma ortağı ve proje yöneticisi olarak Çanakkale genelinde kentsel dönüşüm projeleri.",
  },
  {
    year: "—",
    title: "KW Meta Çanakkale",
    desc: "Keller Williams bünyesinde gayrimenkul danışmanlığı ve portföy yönetimi.",
  },
  {
    year: "2024+",
    title: "Cihan Tintin Mimarlık & Tinvestin",
    desc: "Mimarlık Mühendislik ofisi ve Tinvestin Gayrimenkul markası altında tam ekosistem hizmeti.",
  },
];

const certificates = [
  {
    title: "Taşınmaz Ticareti Yetki Belgesi",
    issuer: "Çanakkale Valiliği",
    year: "2024",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: "MYK Seviye 5 Sorumlu Emlak Danışmanı",
    issuer: "Mesleki Yeterlilik Kurumu",
    year: "2022",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
  },
  {
    title: "Emlak Danışmanlığı Sertifikası",
    issuer: "İstanbul Esenyurt Üniversitesi",
    year: "2022",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
  },
  {
    title: "Emlak Danışmanlığı Sertifikası",
    issuer: "Milli Eğitim Bakanlığı (MEB)",
    year: "2017",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
];

export default function AboutUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="hakkimizda" className="py-20 lg:py-28 bg-kumsal/30" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Bölüm başlığı */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-terracotta font-semibold text-sm uppercase tracking-widest mb-3 block">
            Hakkımızda
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-deniz leading-tight">
            20 Yıla Yakın{" "}
            <span className="text-terracotta">Saha Deneyimi</span>
          </h2>
          <p className="mt-4 text-metin-hafif max-w-2xl mx-auto leading-relaxed">
            Devlet kademesinden özel sektöre, ruhsat süreçlerinden kentsel dönüşüme — her adımı bizzat yaşadık.
          </p>
        </motion.div>

        {/* Ana içerik: Timeline + Sertifikalar */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
          {/* Sol: Kariyer Zaman Çizelgesi */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-xl font-bold text-deniz mb-8">Kariyer Zaman Çizelgesi</h3>
            <div className="relative">
              {/* Dikey çizgi */}
              <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-deniz/30 via-ege/30 to-transparent" />

              <div className="flex flex-col gap-6">
                {timeline.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
                    className="flex gap-5 relative"
                  >
                    {/* Nokta */}
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white border-2 border-ege flex items-center justify-center shadow-sm z-10">
                      <div className="w-2.5 h-2.5 rounded-full bg-ege" />
                    </div>

                    <div className="pb-2">
                      <span className="text-xs font-bold text-terracotta tracking-widest uppercase mb-0.5 block">
                        {item.year}
                      </span>
                      <h4 className="font-bold text-deniz mb-1 text-sm leading-snug">{item.title}</h4>
                      <p className="text-metin-hafif text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Sağ: Sertifika Kartları */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <h3 className="text-xl font-bold text-deniz mb-8">Yetki Belgeleri & Sertifikalar</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certificates.map((cert, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.25 + i * 0.08 }}
                  className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow duration-200 border border-kumsal"
                >
                  <div className="w-10 h-10 rounded-xl bg-kumsal text-ege flex items-center justify-center mb-3">
                    {cert.icon}
                  </div>
                  <h4 className="font-bold text-deniz text-sm leading-snug mb-1">{cert.title}</h4>
                  <p className="text-metin-hafif text-xs">{cert.issuer}</p>
                  <span className="inline-block mt-2 text-xs font-semibold text-terracotta bg-terracotta/10 px-2.5 py-0.5 rounded-full">
                    {cert.year}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/*
          "Tinvestin Ekibi" kart bölümü kaldırıldı (kullanıcı kararı, 2026-09-22).
          Üç danışman kartı gayrimenkul/Tinvestin tarafına aitti; bu site yapım işi
          ve ruhsat taahhüdünü anlatıyor, ekip vitrini konuyu dağıtıyordu.
          Kartlarda geçen kişi adları da siteden çıkmış oldu.
        */}
      </div>
    </section>
  );
}
