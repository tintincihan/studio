"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

/**
 * Güven şeridi — SAYISAL İDDİA İÇERMEZ.
 *
 * Her madde FIRMA_BILGI_KARTI.md hizmet kapsamından doğrudan gelir ve
 * belgelenebilir. Üstünlük/kesinlik iddiası ("tek", "lider", "en iyi") ve
 * doğrulanamayan sayaç buraya yazılmaz — Ticari Reklam ve Haksız Ticari
 * Uygulamalar Yönetmeliği bu tür iddiaların belgelenmesini ister.
 *
 * Kullanıcı kararı 2026-09-20: "150+ tamamlanan proje" sayacı ve diğer
 * sayısal iddialar kaldırıldı, yerine belgelenebilir hizmet ifadeleri geldi.
 */
const pillars = [
  {
    title: "Vekâletname ile tek muhatap",
    detail:
      "Ayrı ayrı büro gezmek yok. Vekâleti bırakın, süreci baştan sona biz yürütelim.",
  },
  {
    title: "Altı mühendislik disiplini tek elden",
    detail: "Mimari · Statik · Mekanik · Elektrik · Zemin etüdü · Harita",
  },
  {
    title: "7/24 canlı şantiye kamerası",
    detail:
      "Fotoğraflı rapor değil, canlı yayın. İnşaatınızı istediğiniz an kendiniz izleyin.",
  },
  {
    title: "Belediye ve İl Özel İdaresi",
    detail:
      "Belediye sınırları içinde de, köy ve kırsal alanda da ruhsat süreci yürütüyoruz.",
  },
];

export default function TrustCounters() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-deniz py-16 lg:py-20" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="h-1 w-12 bg-terracotta rounded-full mb-4" />
              <h3 className="text-lg lg:text-xl font-bold text-white mb-2 leading-snug">
                {pillar.title}
              </h3>
              <p className="text-sm lg:text-base text-white/65 leading-relaxed">
                {pillar.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
