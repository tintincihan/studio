"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Katman 1: Temel gradyan */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(160deg, #011F4B 0%, #023E8A 35%, #0096C7 65%, #005F8A 100%)" }} />

      {/* Katman 2: Işık huzmesi */}
      <div className="absolute inset-0 opacity-30" style={{ background: "radial-gradient(ellipse 70% 60% at 15% 20%, rgba(144,213,255,0.4) 0%, transparent 60%)" }} />

      {/* Katman 3: Kıyı ufku */}
      <div className="absolute bottom-0 left-0 right-0 h-2/3 opacity-40" style={{ background: "linear-gradient(to top, #011F4B 0%, transparent 100%)" }} />

      {/* Katman 4: Terracotta vurgusu — büyük */}
      <div className="absolute -bottom-20 -right-20 w-[500px] h-[500px] rounded-full opacity-20 pointer-events-none" style={{ background: "radial-gradient(circle, #E07A5F 0%, transparent 65%)" }} />
      <div className="absolute -top-40 -left-20 w-[400px] h-[400px] rounded-full opacity-10 pointer-events-none" style={{ background: "radial-gradient(circle, #52B788 0%, transparent 65%)" }} />

      {/* Geometrik daireler — sağ taraf */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:block pointer-events-none">
        <svg width="480" height="480" viewBox="0 0 480 480" fill="none">
          <circle cx="380" cy="240" r="200" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
          <circle cx="380" cy="240" r="150" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
          <circle cx="380" cy="240" r="100" stroke="rgba(255,255,255,0.09)" strokeWidth="1"/>
          <circle cx="380" cy="240" r="50" fill="rgba(0,150,199,0.12)"/>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
        <div className="max-w-3xl">
          {/* Lokasyon etiketi */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 80, damping: 20, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white/90 text-sm font-medium px-4 py-2 rounded-full mb-6 border border-white/20"
          >
            <span className="w-2 h-2 rounded-full bg-zeytin animate-pulse" />
            Çanakkale · Ege Kıyı Şeridi
          </motion.div>

          {/* Ana başlık */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 80, damping: 20, delay: 0.35 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.08] tracking-[-0.02em] mb-7"
          >
            Vekaletnameyi Verin,{" "}
            <span className="text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(90deg, #52B788, #7ECBA1)" }}>
              Gerisini Biz Halledelim.
            </span>
          </motion.h1>

          {/* Alt başlık */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 80, damping: 20, delay: 0.5 }}
            className="text-lg sm:text-xl text-white/85 leading-relaxed mb-10 max-w-2xl"
          >
            Mimari, Statik, Elektrik, Mekanik, Zemin ve Harita — hepsi bünyemizde.
            Siz vekaletname verirsiniz, dosyanız İl Özel İdaresi&apos;nden çıkana kadar
            biz takip ederiz.{" "}
            <strong className="text-white font-semibold">Bir kez bile randevuya gelmek zorunda kalmayabilirsiniz.</strong>
          </motion.p>

          {/* CTA butonlar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 80, damping: 20, delay: 0.65 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <div className="relative inline-flex">
              <motion.span
                className="absolute inset-0 rounded-full bg-terracotta"
                animate={{ scale: [1, 1.2, 1], opacity: [0.35, 0, 0.35] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut" }}
              />
              <a href="#iletisim" className="relative inline-flex items-center justify-center gap-2 bg-terracotta hover:bg-terracotta-dark text-white font-semibold text-base px-8 py-4 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                15 Dakikalık Ücretsiz Görüşme Al
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
            </div>
            <a
              href="tel:+905326348664"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold text-base px-8 py-4 rounded-full transition-all duration-200 border border-white/30"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Hemen Ara
            </a>
          </motion.div>

          {/* Pullquote — sosyal kanıt */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 80, damping: 20, delay: 0.8 }}
            className="mt-8 flex items-center gap-3"
          >
            <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-xs font-bold text-white flex-shrink-0">
              MK
            </div>
            <p className="text-white/70 text-sm italic leading-snug">
              &ldquo;Vekaletname aldı, 5 ay sonra anahtarı teslim etti. Hiç arama gerekmedi.&rdquo;
              <span className="not-italic font-semibold text-white/90 ml-1">— Mehmet K., Dardanos</span>
            </p>
          </motion.div>

          {/* Alt bilgi bandı */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ type: "spring", stiffness: 80, damping: 20, delay: 0.9 }}
            className="mt-16 flex flex-wrap gap-x-8 gap-y-3"
          >
            {[
              "6 Mühendislik Disiplini",
              "Vekaletname Sistemi",
              "İl Özel İdaresi Uzmanı",
              "Bakanlık Lisanslı Kentsel Dönüşüm",
            ].map((item) => (
              <span key={item} className="flex items-center gap-2 text-white/70 text-sm">
                <svg className="w-4 h-4 text-zeytin flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {item}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Aşağı kaydır oku */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ type: "spring", stiffness: 80, damping: 20, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </motion.div>

      {/* Dalga SVG geçişi */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none pointer-events-none">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-16 lg:h-20" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z" fill="#023E8A" fillOpacity="0.3"/>
          <path d="M0,50 C360,90 720,10 1080,50 C1260,70 1380,40 1440,50 L1440,80 L0,80 Z" fill="#FFF8F0"/>
        </svg>
      </div>
    </section>
  );
}
