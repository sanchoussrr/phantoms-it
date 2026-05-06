/* =====================================================
   PHANTOMS IT  —  main.js  (no cursor, no particles)
   ===================================================== */

/* ── PRELOADER ── */
window.addEventListener('load', () => {
  const pre = document.getElementById('preloader');
  if (pre) setTimeout(() => pre.classList.add('out'), 600);
});

/* ── HEADER SCROLL ── */
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 50);
  // back-to-top
  const btt = document.getElementById('btt');
  if (btt) btt.classList.toggle('show', window.scrollY > 400);
}, { passive: true });

/* ── BURGER MENU ── */
const burger = document.getElementById('burger');
const nav    = document.getElementById('nav');
if (burger && nav) {
  burger.addEventListener('click', () => {
    burger.classList.toggle('open');
    nav.classList.toggle('open');
  });
  // close on nav link click
  nav.querySelectorAll('.nav-link').forEach(l => {
    l.addEventListener('click', () => {
      burger.classList.remove('open');
      nav.classList.remove('open');
    });
  });
}

/* ── ACTIVE NAV ON SCROLL ── */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
function setActiveNav() {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 120) current = s.id;
  });
  navLinks.forEach(l => {
    l.classList.toggle('active', l.getAttribute('href') === '#' + current);
  });
}
window.addEventListener('scroll', setActiveNav, { passive: true });

/* ── SMOOTH SCROLL ── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

/* ── BACK TO TOP ── */
const bttBtn = document.getElementById('btt');
if (bttBtn) bttBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

/* ── REVEAL ON SCROLL ── */
const revealEls = document.querySelectorAll('.reveal');
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); revealObs.unobserve(e.target); } });
}, { threshold: 0.12 });
revealEls.forEach(el => revealObs.observe(el));

/* ── COUNTER ANIMATION ── */
const counterEls = document.querySelectorAll('.count[data-target]');
const counterObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    const el = e.target;
    const target = +el.dataset.target;
    const dur = 1800;
    const step = target / (dur / 16);
    let current = 0;
    const timer = setInterval(() => {
      current += step;
      if (current >= target) { current = target; clearInterval(timer); }
      el.textContent = Math.floor(current).toLocaleString();
    }, 16);
    counterObs.unobserve(el);
  });
}, { threshold: 0.5 });
counterEls.forEach(el => counterObs.observe(el));

/* ── PORTFOLIO FILTER ── */
const pfBtns  = document.querySelectorAll('.pf-btn');
const pfItems = document.querySelectorAll('.pf-item[data-cat]');
pfBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    pfBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const cat = btn.dataset.filter;
    pfItems.forEach(item => {
      const show = cat === 'all' || item.dataset.cat === cat;
      item.style.opacity = show ? '1' : '0';
      item.style.transform = show ? 'scale(1)' : 'scale(.95)';
      item.style.pointerEvents = show ? '' : 'none';
      item.style.transition = 'opacity .35s,transform .35s';
    });
  });
});

/* ── TESTIMONIALS SLIDER ── */
(function() {
  const track = document.getElementById('sliderTrack');
  const dotsWrap = document.getElementById('slDots');
  const prevBtn = document.getElementById('slPrev');
  const nextBtn = document.getElementById('slNext');
  if (!track) return;

  const slides = track.querySelectorAll('.t-slide');
  let current = 0;
  let perView = window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3;
  const total = Math.ceil(slides.length / perView);

  // build dots
  function buildDots() {
    if (!dotsWrap) return;
    dotsWrap.innerHTML = '';
    for (let i = 0; i < total; i++) {
      const d = document.createElement('button');
      d.className = 'sl-dot' + (i === 0 ? ' active' : '');
      d.setAttribute('aria-label', 'Slide ' + (i + 1));
      d.addEventListener('click', () => goTo(i));
      dotsWrap.appendChild(d);
    }
  }

  function goTo(idx) {
    current = Math.max(0, Math.min(idx, slides.length - perView));
    const slideW = slides[0].offsetWidth + 22; // gap = 22px
    track.style.transform = `translateX(-${current * slideW}px)`;
    dotsWrap && dotsWrap.querySelectorAll('.sl-dot').forEach((d, i) => {
      d.classList.toggle('active', i === Math.floor(current / perView));
    });
  }

  if (prevBtn) prevBtn.addEventListener('click', () => goTo(current - 1));
  if (nextBtn) nextBtn.addEventListener('click', () => goTo(current + perView));

  window.addEventListener('resize', () => {
    const nv = window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3;
    if (nv !== perView) { perView = nv; current = 0; buildDots(); goTo(0); }
  });

  buildDots();
})();

/* ── CONTACT FORM — sends to reflexmeapp@gmail.com via FormSubmit ── */
const contactForm = document.getElementById('contactForm');
const fSuccess    = document.getElementById('fSuccess');
const btnText     = document.getElementById('btnText');
if (contactForm) {
  contactForm.addEventListener('submit', async e => {
    e.preventDefault();
    if (btnText) btnText.textContent = 'Sending…';

    const data = new FormData(contactForm);
    // Build a readable body
    const body = {
      name:    data.get('name')    || '',
      email:   data.get('email')   || '',
      phone:   data.get('phone')   || '',
      service: data.get('service') || '',
      message: data.get('message') || ''
    };

    try {
      const res = await fetch('https://formsubmit.co/ajax/reflexmeapp@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          _subject: 'New Contact from Phantoms IT Website',
          ...body
        })
      });
      const json = await res.json();
      if (json.success === 'true' || json.success === true) {
        contactForm.reset();
        if (btnText) btnText.textContent = 'Send Message';
        if (fSuccess) { fSuccess.style.display = 'block'; setTimeout(() => fSuccess.style.display = 'none', 6000); }
      } else {
        throw new Error('Failed');
      }
    } catch {
      if (btnText) btnText.textContent = 'Send Message';
      alert('Something went wrong. Please email us directly at reflexmeapp@gmail.com');
    }
  });
}

/* ── END ── */
