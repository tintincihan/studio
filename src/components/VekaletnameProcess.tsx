"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  {
    n: "01",
    title: "Ücretsiz Ön Değerlendirme",
    desc: "Parselin imar durumunu, projenin fizibilite ve ruhsat açısından taşıdığı riskleri ilk görüşmede masaya yatırırız.",
  },
  {
    n: "02",
    title: "Vekaletname & Sözleşme",
    desc: "Tek bir vekaletname ile tüm disiplinler ve kurum süreçleri için yetki alırız — siz bir daha belge koşturmak zorunda kalmazsınız.",
  },
  {
    n: "03",
    title: "Proje Hazırlığı — 6 Disiplin",
    desc: "Mimari, Statik, Elektrik, Mekanik, Zemin Etüdü ve Harita projelerini çözüm ortaklarımızla paralel olarak hazırlar, tek dosyada birleştiririz.",
  },
  {
    n: "04",
    title: "Kurum Takibi & Onaylar",
    desc: "Belediye, İl Özel İdaresi ve ilgili tüm kurumlarla yazışmayı, dosya takibini ve revizyonları biz yönetiriz.",
  },
  {
    n: "05",
    title: "Ruhsat Teslimi & İnşaat",
    desc: "Ruhsat çıktığında sizi bilgilendirir; isterseniz inşaat taahhüt sürecini de aynı muhatapla sürdürürüz.",
  },
];

export default function VekaletnameProcess() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="surec" className="py-20 lg:py-28 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Sol: Metin */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-terracotta font-semibold text-sm uppercase tracking-widest mb-3 block">
              Nasıl Çalışırız
            </span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-deniz mb-6 leading-tight">
              Vekaletnamenizi Bırakın —{" "}
              <span className="text-terracotta">Gerisine Karışmayın</span>
            </h2>
            <p className="text-metin-hafif leading-relaxed mb-6">
              Türkiye'de ruhsat ve inşaat projelerinin çoğu başarısız olmaz,{" "}
              <strong className="text-metin">koordinasyonsuzluktan çöker</strong>. Biz bunu çözdük.
            </p>
            <p className="text-metin-hafif leading-relaxed mb-8">
              Bir yapı ruhsatı için normalde mimarlık ofisi, statik büro, elektrik mühendisi,
              mekanik mühendisi, zemin etüt firması ve harita mühendisi ile{" "}
              <em>ayrı ayrı</em> muhatap olmanız gerekir. Bizim sistemimizde siz sadece bir kez
              vekaletname verirsiniz — bundan sonra tüm disiplinleri biz koordine eder,
              tüm kurum yazışmalarını biz yürütür, tüm onayları biz takip ederiz.
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                "Mimarlık",
                "Statik",
                "Elektrik",
                "Mekanik",
                "Zemin Etüdü",
                "Harita Müh.",
              ].map((d) => (
                <span
                  key={d}
                  className="bg-ege/8 text-ege text-sm font-semibold px-4 py-1.5 rounded-full border border-ege/20"
                >
                  {d}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Sağ: Adımlar */}
          <div className="relative">
            {/* Bağlantı çizgisi */}
            <div className="absolute left-6 top-8 bottom-8 w-px bg-gradient-to-b from-ege via-terracotta to-ege opacity-20 hidden sm:block" />

            <div className="flex flex-col gap-6">
              {steps.map((step, i) => (
                <motion.div
                  key={step.n}
                  initial={{ opacity: 0, x: 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className="flex gap-5 items-start"
                >
                  {/* Numara */}
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-deniz text-white font-bold text-sm flex items-center justify-center shadow-sm">
                    {step.n}
                  </div>
                  {/* İçerik */}
                  <div className="pt-1">
                    <h3 className="font-bold text-deniz mb-1">{step.title}</h3>
                    <p className="text-metin-hafif text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
