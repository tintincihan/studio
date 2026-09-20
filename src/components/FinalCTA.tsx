"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const topics = [
  "Kıyı Villası İnşaatı",
  "Ruhsat & Proje",
  "Arsa Değerlendirmesi",
  "Kentsel Dönüşüm",
  "Diğer",
];

export default function FinalCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [selected, setSelected] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("https://formspree.io/f/xdkobqvw", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          topic: selected,
          message: form.message,
          _replyto: "cihantintin@gmail.com",
        }),
      });
      if (res.ok) setSent(true);
    } catch {
      // WhatsApp fallback
      window.open("https://wa.me/905326348664", "_blank");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="iletisim" className="py-20 lg:py-28 bg-deniz relative overflow-hidden" ref={ref}>
      {/* Arka plan doku */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      {/* Terracotta ışık efekti */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 pointer-events-none"
        style={{
          background: "radial-gradient(circle, #E07A5F 0%, transparent 70%)",
          transform: "translate(30%, -30%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Sol: Metin */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-terracotta font-semibold text-sm uppercase tracking-widest mb-3 block">
              İletişim
            </span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-6 leading-tight">
              Projeniz Kafanızda{" "}
              <span className="text-terracotta">Takılı Kaldı mı?</span>
            </h2>
            <p className="text-white/75 leading-relaxed mb-8 text-lg">
              Ruhsat mı, inşaat mı, arsa mı, dönüşüm mü — hangi adımda olduğunuz
              önemli değil. 15 dakikalık ücretsiz bir görüşmeyle nerede durduğunuzu
              ve nereden ilerlemeniz gerektiğini birlikte çözelim.
            </p>
            <div className="flex flex-col gap-4">
              <a
                href="https://wa.me/905326348664"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-white/80 hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-white/10 group-hover:bg-white/20 flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5 text-zeytin" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <span className="font-medium">WhatsApp'tan hemen yaz</span>
              </a>
              <a
                href="tel:+905326348664"
                className="inline-flex items-center gap-3 text-white/80 hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-white/10 group-hover:bg-white/20 flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5 text-ege" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="font-medium">0532 634 86 64</span>
              </a>
              <a
                href="mailto:cihantintin@gmail.com"
                className="inline-flex items-center gap-3 text-white/80 hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-white/10 group-hover:bg-white/20 flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5 text-ege" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="font-medium">cihantintin@gmail.com</span>
              </a>
            </div>
          </motion.div>

          {/* Sağ: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="bg-white rounded-3xl p-8 shadow-2xl"
          >
            {sent ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-zeytin/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-zeytin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-deniz mb-2">Mesajınız Ulaştı!</h3>
                <p className="text-metin-hafif">En kısa sürede size dönüş yapacağız.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label className="block text-sm font-semibold text-metin mb-2">
                    Konu
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {topics.map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setSelected(t)}
                        className={`text-xs font-semibold px-4 py-1.5 rounded-full border transition-all ${
                          selected === t
                            ? "bg-ege text-white border-ege"
                            : "bg-white text-metin-hafif border-gray-200 hover:border-ege hover:text-ege"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-metin mb-1.5">
                    Ad Soyad *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-ege focus:ring-2 focus:ring-ege/20 outline-none transition-all text-metin text-sm"
                    placeholder="Adınız Soyadınız"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-metin mb-1.5">
                    Telefon *
                  </label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-ege focus:ring-2 focus:ring-ege/20 outline-none transition-all text-metin text-sm"
                    placeholder="0 5XX XXX XX XX"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-metin mb-1.5">
                    Kısa Notunuz
                  </label>
                  <textarea
                    rows={3}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-ege focus:ring-2 focus:ring-ege/20 outline-none transition-all text-metin text-sm resize-none"
                    placeholder="Projeniz hakkında kısaca bilgi verin..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-terracotta hover:bg-terracotta-dark disabled:opacity-70 disabled:cursor-not-allowed text-white font-semibold py-3.5 rounded-xl transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                      Gönderiliyor...
                    </>
                  ) : (
                    <>
                      15 Dakikalık Ücretsiz Görüşme Al
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </>
                  )}
                </button>
                <p className="text-center text-xs text-metin-hafif">
                  Bilgileriniz yalnızca sizinle iletişim için kullanılır.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
