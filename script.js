/* =========================================================
   SAJJAN ADHIKARI — CYBERSECURITY PORTFOLIO
   script.js
   ========================================================= */

// ── Nav: add "scrolled" class on scroll ──
const nav = document.getElementById('nav');
const onScroll = () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
};
window.addEventListener('scroll', onScroll, { passive: true });

// ── Mobile menu toggle ──
const toggle = document.getElementById('navToggle');
const links  = document.getElementById('navLinks');

toggle.addEventListener('click', () => {
  const open = links.classList.toggle('open');
  toggle.classList.toggle('open', open);
  toggle.setAttribute('aria-expanded', open);
});

// Close mobile nav when a link is clicked
links.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    links.classList.remove('open');
    toggle.classList.remove('open');
    toggle.setAttribute('aria-expanded', false);
  });
});

// ── Scroll-in fade-up animations ──
const animTargets = document.querySelectorAll(
  '.section__header, .proj-card, .cert-card, .skills__tab-content, ' +
  '.edu__item, .stat-card, .contact-card, .about__text, .hero__inner'
);

animTargets.forEach(el => el.classList.add('fade-up'));

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
);

animTargets.forEach(el => observer.observe(el));

// Stagger card animations in grids
document.querySelectorAll('.proj-card, .cert-card, .contact-card, .stat-card')
  .forEach((card, i) => {
    card.style.transitionDelay = `${(i % 4) * 60}ms`;
  });

// ── Skills tab switching ──
document.querySelectorAll('.skills__tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const tabId = btn.dataset.tab;
    document.querySelectorAll('.skills__tab-btn').forEach(b => {
      b.classList.remove('active');
      b.setAttribute('aria-selected', 'false');
    });
    document.querySelectorAll('.skills__tab-panel').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    btn.setAttribute('aria-selected', 'true');
    document.getElementById('tab-' + tabId).classList.add('active');
  });
});
