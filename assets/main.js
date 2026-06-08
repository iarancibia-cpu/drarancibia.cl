// ===== CLÍNICA MISURA — scripts compartidos =====

// Nav scroll + toggle móvil
(function () {
  const nav = document.querySelector('.nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 12);
    });
  }
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('open');
      links.classList.toggle('open');
    });
    links.querySelectorAll('a').forEach(a =>
      a.addEventListener('click', () => {
        toggle.classList.remove('open');
        links.classList.remove('open');
      })
    );
  }
})();

// FAQ accordion
document.querySelectorAll('.faq-q').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq-item');
    const ans = item.querySelector('.faq-a');
    const open = item.classList.contains('open');
    item.classList.toggle('open');
    ans.style.maxHeight = open ? null : ans.scrollHeight + 'px';
  });
});

// Reveal on scroll
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((el, i) => {
  el.style.transitionDelay = (i % 3) * 0.08 + 's';
  io.observe(el);
});

// Before/After sliders
document.querySelectorAll('.ba-slider').forEach(slider => {
  const after = slider.querySelector('.ba-after');
  const handle = slider.querySelector('.ba-handle');
  let dragging = false;
  const move = (x) => {
    const r = slider.getBoundingClientRect();
    let pct = ((x - r.left) / r.width) * 100;
    pct = Math.max(2, Math.min(98, pct));
    after.style.clipPath = `inset(0 0 0 ${pct}%)`;
    handle.style.left = pct + '%';
  };
  const start = () => dragging = true;
  const stop = () => dragging = false;
  slider.addEventListener('mousedown', e => { start(); move(e.clientX); });
  window.addEventListener('mousemove', e => dragging && move(e.clientX));
  window.addEventListener('mouseup', stop);
  slider.addEventListener('touchstart', e => { start(); move(e.touches[0].clientX); }, {passive:true});
  slider.addEventListener('touchmove', e => dragging && move(e.touches[0].clientX), {passive:true});
  slider.addEventListener('touchend', stop);
});
