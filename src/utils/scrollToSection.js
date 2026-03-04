const scrollToSection = (hash, prefersReducedMotion = false) => {
  if (!hash || !hash.startsWith('#')) {
    return;
  }

  const target = document.querySelector(hash);
  if (!target) {
    return;
  }

  let focus = target.querySelector ? target.querySelector('.section-header') : null;

  if (hash === '#projects') {
    focus = target.querySelector('.project-card') || target.querySelector('.projects-grid') || focus;
  } else if (hash === '#experience') {
    focus = target.querySelector('.experience-grid') || focus;
  } else if (hash === '#about') {
    focus = target.querySelector('.about-grid') || focus;
  } else if (hash === '#playground') {
    focus = target.querySelector('.playground-media') || target.querySelector('.playground') || focus;
  }

  const scrollTarget = focus || target;
  const rect = scrollTarget.getBoundingClientRect();
  const sectionRect = target.getBoundingClientRect();
  const sectionTop = sectionRect.top + window.scrollY;
  const sectionHeight = target.offsetHeight;
  const viewport = window.innerHeight;

  let top = rect.top + window.scrollY + rect.height / 2 - viewport / 2;
  const minTop = sectionTop + 8;
  const maxTop = sectionTop + Math.max(sectionHeight - viewport, 0) + 8;
  top = Math.min(Math.max(top, minTop), maxTop);

  window.scrollTo({
    top: Math.max(top, 0),
    behavior: prefersReducedMotion ? 'auto' : 'smooth',
  });
};

export default scrollToSection;
