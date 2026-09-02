import React, { useEffect, useRef } from 'react';
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion';

export default function ProjectCard({
  title,
  image,
  role,
  summary,
  impact,
  stack,
  links,
  className = '',
  imagePosition = 'center center',
  imageAlt,
}) {
  const cardRef = useRef(null);
  const shineResetTimeoutRef = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const hasDashWeatherShine = className.includes('project-card--dash-weather');

  useEffect(
    () => () => {
      if (shineResetTimeoutRef.current) {
        window.clearTimeout(shineResetTimeoutRef.current);
      }
    },
    []
  );

  const handleEnter = () => {
    if (!cardRef.current || prefersReducedMotion || !hasDashWeatherShine) {
      return;
    }

    const card = cardRef.current;
    card.classList.remove('project-card--shine-exit');
    card.classList.remove('project-card--shine-hold');
    void card.offsetWidth;
    card.classList.add('project-card--shine-hold');

    if (shineResetTimeoutRef.current) {
      window.clearTimeout(shineResetTimeoutRef.current);
      shineResetTimeoutRef.current = null;
    }
  };

  const handleMove = (event) => {
    if (!cardRef.current || prefersReducedMotion) {
      return;
    }

    const rect = cardRef.current.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const rotateY = ((x / rect.width) - 0.5) * 8;
    const rotateX = ((y / rect.height) - 0.5) * -8;

    cardRef.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    cardRef.current.style.setProperty('--mx', `${x}px`);
    cardRef.current.style.setProperty('--my', `${y}px`);
  };

  const handleLeave = () => {
    if (!cardRef.current) {
      return;
    }

    const card = cardRef.current;
    card.style.transform = 'rotateX(0deg) rotateY(0deg)';

    if (prefersReducedMotion || !hasDashWeatherShine) {
      return;
    }

    card.classList.remove('project-card--shine-hold');
    card.classList.add('project-card--shine-exit');

    if (shineResetTimeoutRef.current) {
      window.clearTimeout(shineResetTimeoutRef.current);
    }

    shineResetTimeoutRef.current = window.setTimeout(() => {
      card.classList.remove('project-card--shine-exit');
      shineResetTimeoutRef.current = null;
    }, 950);
  };

  return (
    <article
      className={`project-card ${className}`.trim()}
      ref={cardRef}
      onMouseEnter={handleEnter}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      <div className="project-media">
        <img
          src={image}
          alt={imageAlt || `${title} screenshot`}
          loading="lazy"
          style={{ objectPosition: imagePosition }}
        />
      </div>
      <div className="project-content">
        <div className="project-header">
          <h3>{title}</h3>
          <span className="project-role">{role}</span>
        </div>
        <p className="project-summary">{summary}</p>
        <p className="project-impact">{impact}</p>
        <div className="project-stack">
          {stack.map((item) => (
            <span key={item} className="chip">
              {item}
            </span>
          ))}
        </div>
        <div className="project-links">
          {links.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}
