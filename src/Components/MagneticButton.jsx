import React, { useRef } from 'react';
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion';

export default function MagneticButton({ label, href, variant = 'primary', download = false, onClick }) {
  const buttonRef = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  const handleMouseMove = (event) => {
    if (prefersReducedMotion || !buttonRef.current) {
      return;
    }

    const rect = buttonRef.current.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;

    buttonRef.current.style.transform = `translate(${x * 0.18}px, ${y * 0.18}px)`;
  };

  const handleMouseLeave = () => {
    if (!buttonRef.current) {
      return;
    }
    buttonRef.current.style.transform = 'translate(0px, 0px)';
  };

  return (
    <a
      ref={buttonRef}
      className={`magnetic-button magnetic-${variant}`}
      href={href}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      download={download}
    >
      <span>{label}</span>
    </a>
  );
}
