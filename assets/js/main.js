/* ============================================================
   MAIN.JS — PNGToolzRent
   Handles: mobile menu, scroll reveal, stagger animations,
            navbar scroll effect, image fallbacks
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── MOBILE MENU ── */
  const hamburger  = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');

  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
  });

  // Close when a menu link is tapped
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => mobileMenu.classList.remove('open'));
  });

  // Close when clicking outside
  document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
      mobileMenu.classList.remove('open');
    }
  });


  /* ── SCROLL REVEAL ── */
  const reveals = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  reveals.forEach(el => revealObserver.observe(el));


  /* ── STAGGER CHILD REVEALS IN GRIDS ── */
  const staggerContainers = document.querySelectorAll(
    '.tools-grid, .steps-wrap, .payment-grid, .reviews-grid, .contact-links'
  );

  staggerContainers.forEach(container => {
    container.querySelectorAll('.reveal').forEach((child, i) => {
      child.style.transitionDelay = `${i * 0.08}s`;
    });
  });


  /* ── NAVBAR SCROLL TINT ── */
  const nav = document.querySelector('nav');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      nav.style.borderBottomColor = 'rgba(255,140,0,0.15)';
    } else {
      nav.style.borderBottomColor = 'rgba(255,255,255,0.08)';
    }
  }, { passive: true });


  /* ── IMAGE FALLBACKS ──
     If a logo/tool/payment image file is missing, hide the
     broken <img> and show the fallback emoji span instead.
  ── */
  document.querySelectorAll('img[data-fallback]').forEach(img => {
    img.addEventListener('error', () => {
      img.style.display = 'none';
      const fallbackId = img.dataset.fallback;
      const fallbackEl = document.getElementById(fallbackId);
      if (fallbackEl) fallbackEl.style.display = 'inline';
    });
  });

});
