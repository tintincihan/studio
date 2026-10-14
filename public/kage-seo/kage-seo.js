/* kage-seo: görünür olunca belirme, bölüme göre arka plan (sırası gelince yükleme), form ve konu doldurma */
(function () {
  var kok = document.querySelector('.kage-kok'); if (!kok) return;
  var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('rv-in'); io.unobserve(e.target); } }); },
    { rootMargin: '0px 0px -8% 0px' });
  kok.querySelectorAll('[data-rv], .mask-line').forEach(function (e) { io.observe(e); });
  var ks = kok.querySelectorAll('#fotobg .k'), secs = kok.querySelectorAll('[data-cam]'), akt = 0;
  function yukle(k) { if (k && k.dataset.bg) { k.style.backgroundImage = "url('" + k.dataset.bg + "')"; delete k.dataset.bg; } }
  function sec(n) { if (n === akt) return; akt = n; yukle(ks[n]); yukle(ks[n + 1]);
    ks.forEach(function (k) { k.classList.toggle('on', +k.dataset.k === n); }); }
  function bak() { var o = innerHeight * 0.5, en = 0;
    secs.forEach(function (b) { var r = b.getBoundingClientRect(); if (r.top <= o && r.bottom > 0) en = Math.max(en, +b.dataset.cam); });
    sec(Math.min(en, ks.length - 1)); }
  addEventListener('scroll', bak, { passive: true }); addEventListener('resize', bak);
  setTimeout(function () { yukle(ks[1]); }, 1500); bak();
  var f = document.getElementById('ilt-form');
  // telefon menüsü: düğme açar/kapar; bağlantıya dokununca, Esc'te ya da dışarı dokununca kapanır
  var nav = kok.querySelector('.nav'), bur = kok.querySelector('.nav-burger');
  function menu(ac) { if (!nav || !bur) return; nav.classList.toggle('menu-open', ac); bur.classList.toggle('active', ac);
    document.documentElement.classList.toggle('nav-open', ac); bur.setAttribute('aria-expanded', String(ac));
    bur.setAttribute('aria-label', ac ? 'Menüyü kapat' : 'Menüyü aç'); }
  if (bur) bur.addEventListener('click', function (e) { e.stopPropagation(); menu(!nav.classList.contains('menu-open')); });
  kok.querySelectorAll('.nav-links a').forEach(function (a) { a.addEventListener('click', function () { menu(false); }); });
  addEventListener('keydown', function (e) { if (e.key === 'Escape') menu(false); });
  document.addEventListener('click', function (e) { if (nav && nav.classList.contains('menu-open') && !e.target.closest('.nav-links')) menu(false); });
  kok.querySelectorAll('[data-konu]').forEach(function (a) { a.addEventListener('click', function () {
    if (f && f.konu) f.konu.value = a.getAttribute('data-konu').replace('&amp;', '&'); }); });
  if (f) f.addEventListener('submit', function (e) {
    e.preventDefault();
    var ad = f.ad.value.trim(), tel = f.tel.value.trim(), ok = true;
    [f.ad, f.tel].forEach(function (x) { x.classList.toggle('hata', !x.value.trim()); if (!x.value.trim()) ok = false; });
    if (!ok) { (f.ad.value.trim() ? f.tel : f.ad).focus(); return; }
    var n = String.fromCharCode(10);
    var metin = 'Merhaba, projemi değerlendirmek için görüşme talep ediyorum.' + n + 'Konu: ' + f.konu.value + n + 'Ad Soyad: ' + ad + n + 'Telefon: ' + tel +
      (f.not.value.trim() ? n + 'Not: ' + f.not.value.trim() : '');
    window.open('https://wa.me/905326348664?text=' + encodeURIComponent(metin), '_blank', 'noopener');
  });
})();
