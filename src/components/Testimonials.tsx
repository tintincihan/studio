"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const testimonials = [
  {
    quote:
      "Dardanos'taki arsam için 6 farklı büroyla uğraşacaktım. Cihan Bey vekaletname aldı, 5 ay sonra anahtarı teslim etti. Hiç arama gerekmedi.",
    author: "Mehmet K.",
    project: "Dardanos · Müstakil Villa",
    initials: "MK",
    color: "bg-ege/10 text-ege",
  },
  {
    quote:
      "İl Özel İdaresi'nde dosyanın nasıl ilerlediğini biz değil onlar takip etti. Ruhsat sürecinde tek bir kez bile randevuya gitmek zorunda kalmadım.",
    author: "Selin T.",
    project: "Çanakkale Merkez · Ruhsat Projesi",
    initials: "ST",
    color: "bg-zeytin/10 text-zeytin",
  },
  {
    quote:
      "Geyikli'de arsa değerlendirmesi için Tinvestin'le görüştük. Aldığımız teknik analiz, 3 ayrı danışmandan aldığımızdan çok daha somuttu.",
    author: "Ahmet & Ayşe D.",
    project: "Geyikli · Arsa Yatırımı",
    initials: "AD",
    color: "bg-terracotta/10 text-terracotta",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: {
    x: 30,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  },
};

export default function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section className="bg-kumsal py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14 md:mb-18">
          <span className="block text-terracotta uppercase tracking-widest text-xs font-semibold mb-4">
            Müşteri Deneyimleri
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-metin leading-tight mb-4">
            Yaptık, Teslim Ettik —{" "}
            <span className="text-ege">Söyleyen Onlar</span>
          </h2>
          <p className="text-metin-hafif text-base md:text-lg max-w-xl mx-auto">
            İnşaat sürecinde tek muhatabınız biz olduk. Sonuçlar ortada.
          </p>
        </div>

        {/* Testimonial Cards */}
        <motion.div
          ref={sectionRef}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {testimonials.map((item) => (
            <motion.div
              key={item.author}
              variants={cardVariants}
              className="bg-white rounded-2xl p-7 flex flex-col justify-between"
              style={{
                boxShadow:
                  "0 4px 6px -1px rgba(0, 150, 199, 0.07), 0 10px 30px -5px rgba(2, 62, 138, 0.10)",
              }}
            >
              {/* Quote Icon */}
              <div>
                <div className="text-ege/20 mb-4">
                  <svg
                    width="48"
                    height="36"
                    viewBox="0 0 48 36"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path d="M0 36V22.08C0 9.696 7.2 2.976 21.6 0L23.76 4.032C17.28 5.472 12.816 7.92 10.368 11.376C7.92 14.736 6.864 18.864 7.2 23.76H14.4V36H0ZM24 36V22.08C24 9.696 31.2 2.976 45.6 0L47.76 4.032C41.28 5.472 36.816 7.92 34.368 11.376C31.92 14.736 30.864 18.864 31.2 23.76H38.4V36H24Z" />
                  </svg>
                </div>

                {/* Quote Text */}
                <p className="text-metin-hafif text-sm md:text-base leading-relaxed">
                  {item.quote}
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 mt-6 pt-6 border-t border-gray-100">
                {/* Avatar Initials */}
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${item.color}`}
                >
                  {item.initials}
                </div>

                {/* Name & Project */}
                <div>
                  <p className="text-metin font-semibold text-sm">
                    {item.author}
                  </p>
                  <p className="text-metin-hafif text-xs mt-0.5">
                    {item.project}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
