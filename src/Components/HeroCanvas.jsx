import React, { useEffect, useRef, useState } from 'react';
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion';

export default function HeroCanvas() {
  const canvasRef = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    const lowMemory = typeof navigator !== 'undefined' && navigator.deviceMemory && navigator.deviceMemory < 4;
    const lowCores = typeof navigator !== 'undefined' && navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4;
    const shouldDisable = prefersReducedMotion || lowMemory || lowCores;

    setDisabled(shouldDisable);
    if (shouldDisable) {
      return undefined;
    }

    const canvas = canvasRef.current;
    if (!canvas) {
      return undefined;
    }

    const context = canvas.getContext('2d');
    if (!context) {
      return undefined;
    }

    let rafId;
    let width = 0;
    let height = 0;
    let time = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      context.setTransform(1, 0, 0, 1, 0, 0);
      context.scale(dpr, dpr);
    };

    const draw = () => {
      time += 0.004;
      context.clearRect(0, 0, width, height);

      const cx = width * 0.5 + Math.cos(time * 0.8) * width * 0.12;
      const cy = height * 0.45 + Math.sin(time * 0.6) * height * 0.1;
      const g1 = context.createRadialGradient(cx, cy, 0, cx, cy, width * 0.6);
      g1.addColorStop(0, 'rgba(200, 143, 90, 0.55)');
      g1.addColorStop(0.45, 'rgba(88, 196, 170, 0.18)');
      g1.addColorStop(1, 'rgba(11, 11, 13, 0)');
      context.fillStyle = g1;
      context.fillRect(0, 0, width, height);

      const orbX = width * 0.75 + Math.sin(time * 1.4) * width * 0.08;
      const orbY = height * 0.3 + Math.cos(time * 1.1) * height * 0.1;
      const g2 = context.createRadialGradient(orbX, orbY, 0, orbX, orbY, width * 0.4);
      g2.addColorStop(0, 'rgba(88, 196, 170, 0.35)');
      g2.addColorStop(0.5, 'rgba(200, 143, 90, 0.1)');
      g2.addColorStop(1, 'rgba(11, 11, 13, 0)');
      context.fillStyle = g2;
      context.fillRect(0, 0, width, height);

      const edgeX = width * 0.2 + Math.sin(time * 1.7) * width * 0.12;
      const edgeY = height * 0.75 + Math.cos(time * 1.3) * height * 0.1;
      const g3 = context.createRadialGradient(edgeX, edgeY, 0, edgeX, edgeY, width * 0.35);
      g3.addColorStop(0, 'rgba(200, 143, 90, 0.25)');
      g3.addColorStop(0.6, 'rgba(88, 196, 170, 0.08)');
      g3.addColorStop(1, 'rgba(11, 11, 13, 0)');
      context.fillStyle = g3;
      context.fillRect(0, 0, width, height);

      rafId = window.requestAnimationFrame(draw);
    };

    resize();
    draw();

    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, [prefersReducedMotion]);

  if (disabled) {
    return <div className="hero-canvas-fallback" aria-hidden="true" />;
  }

  return <canvas className="hero-canvas" ref={canvasRef} aria-hidden="true" />;
}
