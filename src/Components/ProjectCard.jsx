import React, { useRef } from 'react';
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion';

export default function ProjectCard({ title, image, role, summary, impact, stack, links }) {
  const cardRef = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

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
    cardRef.current.style.transform = 'rotateX(0deg) rotateY(0deg)';
  };

  return (
    <article
      className="project-card"
      ref={cardRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      <div className="project-media">
        <img src={image} alt={`${title} screenshot`} loading="lazy" />
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
