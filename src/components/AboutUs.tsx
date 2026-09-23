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

        {/*
          Ana içerik: yalnız kariyer zaman çizelgesi.
          "Yetki Belgeleri & Sertifikalar" kartları kaldırıldı (kullanıcı kararı,
          2026-09-23): dördü de emlak belgesiydi (taşınmaz ticareti, MYK emlak,
          iki emlak danışmanlığı sertifikası). Bu site yapım işi ve ruhsatı anlatıyor;
          ekip kartlarıyla aynı gerekçe. Yerine bir şey konmadı.
          "5 Yıl — İl Özel İdaresi" satırı kullanıcı teyidiyle olduğu gibi kalır;
          yıl aralığı bilinçli olarak YAZILMAZ.
        */}
        <div className="max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
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
