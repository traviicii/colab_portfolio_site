import React, { useRef } from 'react';
import './Navbar.css';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion';
import scrollToSection from '../utils/scrollToSection';

export default function Navbar() {
  const container = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  const handleNavClick = (event) => {
    const href = event.currentTarget.getAttribute('href');
    if (!href || !href.startsWith('#')) {
      return;
    }

    event.preventDefault();

    scrollToSection(href, prefersReducedMotion);
  };

  useGSAP(
    () => {
      if (prefersReducedMotion) {
        return;
      }

      gsap.from(container.current, {
        y: -20,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
      });

      gsap.from(container.current.querySelectorAll('a'), {
        y: -10,
        opacity: 0,
        duration: 0.6,
        stagger: 0.08,
        delay: 0.2,
        ease: 'power2.out',
      });
    },
    { scope: container, dependencies: [prefersReducedMotion] }
  );

  return (
    <nav className="nav" ref={container} aria-label="Primary">
      <div className="nav-pill">
        <a href="#hero" onClick={handleNavClick}>Home</a>
        <a href="#projects" onClick={handleNavClick}>Work</a>
        <a href="#experience" onClick={handleNavClick}>Experience</a>
        <a href="#about" onClick={handleNavClick}>About</a>
        <a href="#playground" onClick={handleNavClick}>Playground</a>
        <a href="#contact" onClick={handleNavClick}>Contact</a>
      </div>
    </nav>
  );
}
