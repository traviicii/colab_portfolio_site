import React, { useEffect, useRef, useState } from 'react';
import './Home.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Navbar from '../Components/Navbar';
import Section from '../Components/Section';
import ProjectCard from '../Components/ProjectCard';
import MagneticButton from '../Components/MagneticButton';
import HeroCanvas from '../Components/HeroCanvas';
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion';
import scrollToSection from '../utils/scrollToSection';

import headshot from '../static/headshot.jpg';
import githubMark from '../static/github_mark.svg';
import linkedinMark from '../static/linkedin.png';
import TRAVIS_PECK_RESUME from '../static/TRAVIS_PECK_RESUME.pdf';

import teamupMarketing from '../static/teamup_marketing.png';
import myGuest from '../static/myGuest.png';
import traviiciiWeather from '../static/traviicii_weather.png';
import pokebattle from '../static/pokebattle.png';

const API_KEY = process.env.REACT_APP_API_KEY;

const getEmbedUrl = (url) => {
  if (!url) {
    return null;
  }

  try {
    const parsed = new URL(url);
    const host = parsed.hostname.replace('www.', '');

    if (host === 'youtube.com' || host === 'm.youtube.com') {
      const id = parsed.searchParams.get('v');
      if (id) {
        return `https://www.youtube.com/embed/${id}`;
      }
      if (parsed.pathname.startsWith('/embed/')) {
        const embedId = parsed.pathname.split('/').pop();
        if (embedId) {
          return `https://www.youtube.com/embed/${embedId}`;
        }
      }
    }

    if (host === 'youtu.be') {
      const id = parsed.pathname.replace('/', '');
      if (id) {
        return `https://www.youtube.com/embed/${id}`;
      }
    }

    if (host === 'vimeo.com') {
      const id = parsed.pathname.split('/').filter(Boolean)[0];
      if (id) {
        return `https://player.vimeo.com/video/${id}`;
      }
    }

    if (host === 'player.vimeo.com' && parsed.pathname.startsWith('/video/')) {
      return `https://player.vimeo.com${parsed.pathname}`;
    }
  } catch (error) {
    return null;
  }

  return null;
};

export default function Home() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const scopeRef = useRef(null);
  const playgroundRef = useRef(null);
  const [showMore, setShowMore] = useState(false);
  const [pod, setPod] = useState(null);
  const [podStatus, setPodStatus] = useState('idle');
  const [mediaError, setMediaError] = useState(false);
  const [thumbError, setThumbError] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  const projects = [
    {
      title: 'TeamUp',
      image: teamupMarketing,
      role: 'Full-Stack Developer',
      summary:
        'Built a collaboration platform for early-career product teams with end-to-end ownership across backend, frontend, and product polish.',
      impact:
        'Shipped an MVP with a cross-functional team, aligning design and engineering to deliver a cohesive user journey.',
      stack: ['React', 'Flask', 'PostgreSQL', 'Redux', 'Tailwind'],
      links: [
        { label: 'Live', href: 'https://goteamup.vercel.app/' },
        { label: 'Frontend', href: 'https://github.com/traviicii/colab23-frontend' },
        { label: 'Backend', href: 'https://github.com/traviicii/CO.LAB23-backend' },
      ],
    },
    {
      title: 'myGuest',
      image: myGuest,
      role: 'Founder + Full-Stack',
      summary:
        'Crafted a responsive client management platform for hairstylists with appointments, notes, and rich client profiles.',
      impact:
        'Enabled stylists to centralize client data and export insights for better retention and personalization.',
      stack: ['React', 'Flask', 'PostgreSQL', 'DaisyUI', 'Tailwind'],
      links: [
        { label: 'Live', href: 'https://myguest.beauty' },
        { label: 'Frontend', href: 'https://github.com/traviicii/myguest_react' },
        { label: 'Backend', href: 'https://github.com/traviicii/myguest-flask' },
      ],
    },
    {
      title: 'Traviicii Weather',
      image: traviiciiWeather,
      role: 'Frontend Developer',
      summary:
        'Designed a playful weather experience with interactive visuals and responsive data-driven UI.',
      impact:
        'Delivered an intuitive interface that visualizes weather metrics with animated gauges.',
      stack: ['HTML', 'CSS', 'JavaScript', 'OpenWeather API'],
      links: [
        { label: 'Live', href: 'https://traviiciiweather.glitch.me/' },
        { label: 'GitHub', href: 'https://github.com/traviicii/week7-weekend-project-weather-app' },
      ],
    },
    {
      title: 'Poke Battle!',
      image: pokebattle,
      role: 'Full-Stack Developer',
      summary:
        'Built a Pokemon capture and team builder experience with custom Pokedex search and user accounts.',
      impact:
        'Created a feature-rich platform that showcases data modeling and API integration skills.',
      stack: ['Python', 'Flask', 'Jinja', 'PostgreSQL', 'CSS'],
      links: [
        { label: 'Live', href: 'https://pokemon-coding-temple-flask-project.onrender.com/' },
        { label: 'GitHub', href: 'https://github.com/traviicii/pokemon-website' },
      ],
    },
  ];

  const proofItems = [
    {
      title: 'Educator @ Coding Temple',
      body: 'Lead classes, mentor new engineers, and contribute to curriculum design.',
    },
    {
      title: 'Full-Stack Shipping',
      body: 'Deliver production-ready products from data models to polished UI.',
    },
    {
      title: 'Tech-for-Good Focus',
      body: 'Build tools that make meaningful impact and support sustainable thinking.',
    },
    {
      title: 'Cross-Functional Partner',
      body: 'Collaborate with PMs and designers to align vision and execution.',
    },
  ];

  const skills = [
    'React + Flask',
    'PostgreSQL',
    'Product thinking',
    'Teaching + mentorship',
    'UI motion design',
    'API integrations',
  ];

  useGSAP(
    () => {
      if (prefersReducedMotion) {
        return;
      }

      gsap.registerPlugin(ScrollTrigger);

      gsap.from('.hero-content', {
        y: 24,
        opacity: 0,
        duration: 1.1,
        ease: 'power3.out',
      });

      gsap.from('.hero-portrait', {
        y: 30,
        opacity: 0,
        duration: 1.2,
        delay: 0.15,
        ease: 'power3.out',
      });

      gsap.utils.toArray('.reveal').forEach((element) => {
        gsap.from(element, {
          y: 36,
          opacity: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 82%',
          },
        });
      });

      gsap.from('.proof-tile', {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: 'back.out(1.4)',
        stagger: 0.12,
        scrollTrigger: {
          trigger: '.proof-grid',
          start: 'top 80%',
        },
      });
    },
    { scope: scopeRef, dependencies: [prefersReducedMotion] }
  );

  useEffect(() => {
    if (!playgroundRef.current || !API_KEY) {
      return undefined;
    }

    let observer;

    const handleIntersect = (entries) => {
      if (!entries[0].isIntersecting) {
        return;
      }

      setPodStatus('loading');
      fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&thumbs=true`)
        .then((res) => res.json())
        .then((data) => {
          if (data && data.title) {
            setPod(data);
            setPodStatus('loaded');
          } else {
            setPodStatus('error');
          }
        })
        .catch(() => setPodStatus('error'));

      if (observer) {
        observer.disconnect();
      }
    };

    observer = new IntersectionObserver(handleIntersect, { threshold: 0.3 });
    observer.observe(playgroundRef.current);

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    setMediaError(false);
    setThumbError(false);
  }, [pod?.url]);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="page" ref={scopeRef}>
      <Navbar />

      <header id="hero" className="hero">
        <HeroCanvas />
        <div className="hero-content">
          <p className="hero-eyebrow">Software Engineer • Educator • NYC</p>
          <h1 className="hero-title">Travis Peck</h1>
          <p className="hero-subtitle">
            I build human-centered web products and teach emerging engineers how to ship clean,
            scalable software.
          </p>
          <div className="hero-cta">
            <MagneticButton
              label="View Projects"
              href="#projects"
              variant="primary"
              onClick={(event) => {
                event.preventDefault();
                scrollToSection('#projects', prefersReducedMotion);
              }}
            />
            <MagneticButton label="Download Resume" href={TRAVIS_PECK_RESUME} variant="ghost" download />
            <MagneticButton label="Email Me" href="mailto:travispeckdev@gmail.com" variant="outline" />
          </div>
          <div className="hero-meta">
            <span>Tech-for-good</span>
            <span>Full-stack</span>
            <span>Product-minded</span>
          </div>
        </div>
        <div className="hero-portrait">
          <div className="portrait-frame">
            <img src={headshot} alt="Travis Peck headshot" loading="eager" />
          </div>
        </div>
      </header>

      <section className="proof-strip reveal" aria-label="Highlights">
        <div className="proof-grid">
          {proofItems.map((item) => (
            <div key={item.title} className="proof-tile">
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <Section id="projects" title="Featured Work" eyebrow="Selected Projects">
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </Section>

      <Section id="experience" title="Teaching + Experience" eyebrow="What I do">
        <div className="experience-grid reveal">
          <div className="experience-card">
            <h3>Lead Instructor</h3>
            <p>
              Coach cohorts of engineers, design lessons, and mentor students through portfolio-ready
              projects.
            </p>
            <ul>
              <li>Curriculum development and instruction</li>
              <li>Mentorship and career prep</li>
              <li>Project reviews and code critique</li>
            </ul>
          </div>
          <div className="experience-card">
            <h3>Full-Stack Builder</h3>
            <p>
              From data modeling to motion design, I deliver cohesive experiences that connect design,
              engineering, and product goals.
            </p>
            <ul>
              <li>API design + implementation</li>
              <li>UI motion + interaction design</li>
              <li>Cross-functional collaboration</li>
            </ul>
          </div>
        </div>
        <div className="skills-row reveal">
          {skills.map((skill) => (
            <span key={skill} className="chip chip-outline">
              {skill}
            </span>
          ))}
        </div>
      </Section>

      <Section id="about" title="About" eyebrow="Story">
        <div className="about-grid reveal">
          <div className="about-text">
            <p>
              I am a software engineer and educator who loves blending product intuition with clean
              engineering. My focus is on tech-for-good and green tech, building tools that respect
              people and the planet.
            </p>
            {showMore ? (
              <p>
                Before tech, I spent 15 years as a hairstylist and educator in the professional beauty
                industry. That creative foundation sharpened my communication, empathy, and ability to
                adapt quickly, all of which now fuel my engineering and teaching.
              </p>
            ) : null}
            <button className="text-link" onClick={() => setShowMore((prev) => !prev)}>
              {showMore ? 'Show less' : 'Read more'}
            </button>
          </div>
          <div className="about-callout">
            <h3>What I value</h3>
            <p>
              Thoughtful design, elegant systems, and collaboration that makes everyone on the team
              stronger.
            </p>
            <div className="about-highlights">
              <span className="chip">Tech for good</span>
              <span className="chip">Mentorship</span>
              <span className="chip">Clean systems</span>
            </div>
          </div>
        </div>
      </Section>

      <Section id="playground" title="NASA APOD" eyebrow="Playground">
        <div className="playground" ref={playgroundRef}>
          <div className="playground-intro">
            <h3>NASA Astronomy Picture of the Day</h3>
            <p>A daily dose of wonder, pulled straight from NASA.</p>
          </div>
          {!API_KEY ? (
            <div className="playground-placeholder">
              <p>
                Add a NASA API key in <span className="mono">REACT_APP_API_KEY</span> to load the
                live APOD feed.
              </p>
            </div>
          ) : null}
          {podStatus === 'loading' ? <p className="muted">Loading today&apos;s image…</p> : null}
          {podStatus === 'error' ? <p className="muted">Unable to load APOD right now.</p> : null}
          {pod && podStatus === 'loaded' ? (
            <div className="playground-media">
              <h4>{pod.title}</h4>
              <div className="apod-frame">
                {pod.media_type === 'image' ? (
                  !mediaError ? (
                    <img
                      src={pod.url || pod.hdurl}
                      alt={pod.title}
                      loading="lazy"
                      decoding="async"
                      onError={() => setMediaError(true)}
                    />
                  ) : (
                    <div className="apod-fallback">
                      <p>Image preview unavailable.</p>
                      <a href={pod.url || pod.hdurl} target="_blank" rel="noreferrer">
                        Open on NASA
                      </a>
                    </div>
                  )
                ) : null}
                {pod.media_type === 'video' ? (
                  (() => {
                    const embedUrl = getEmbedUrl(pod.url);
                    if (embedUrl) {
                      return (
                        <iframe
                          title={pod.title}
                          src={embedUrl}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                          allowFullScreen
                        />
                      );
                    }
                    return (
                      <div className="playground-video">
                        {!thumbError ? (
                          <img
                            src={pod.thumbnail_url || pod.hdurl || pod.url}
                            alt={`${pod.title} video thumbnail`}
                            loading="lazy"
                            decoding="async"
                            onError={() => setThumbError(true)}
                          />
                        ) : (
                          <div className="apod-fallback">
                            <p>Video preview unavailable.</p>
                          </div>
                        )}
                        <a href={pod.url} target="_blank" rel="noreferrer" className="video-link">
                          Watch video
                        </a>
                      </div>
                    );
                  })()
                ) : null}
                {pod.media_type !== 'image' && pod.media_type !== 'video' ? (
                  <div className="playground-video">
                    {!thumbError ? (
                      <img
                        src={pod.thumbnail_url || pod.hdurl || pod.url}
                        alt={pod.title}
                        loading="lazy"
                        decoding="async"
                        onError={() => setThumbError(true)}
                      />
                    ) : (
                      <div className="apod-fallback">
                        <p>Preview unavailable.</p>
                      </div>
                    )}
                    <a href={pod.url} target="_blank" rel="noreferrer" className="video-link">
                      Open NASA APOD
                    </a>
                  </div>
                ) : null}
              </div>
              <div className="apod-meta">
                {pod.date ? <span>{pod.date}</span> : null}
                {pod.copyright ? <span>© {pod.copyright}</span> : null}
                {pod.hdurl ? (
                  <a href={pod.hdurl} target="_blank" rel="noreferrer">
                    Full resolution
                  </a>
                ) : (
                  <a href={pod.url} target="_blank" rel="noreferrer">
                    Open source
                  </a>
                )}
              </div>
              <p className="muted">{pod.explanation}</p>
            </div>
          ) : null}
        </div>
      </Section>

      <Section id="contact" title="Let&apos;s Build" eyebrow="Contact">
        <div className="contact-card reveal">
          <div>
            <h3>Open to collaboration and teaching opportunities.</h3>
            <p>Reach out if you want to build something thoughtful, elegant, and human-centered.</p>
          </div>
          <div className="contact-actions">
            <MagneticButton label="Email" href="mailto:travispeckdev@gmail.com" variant="primary" />
            <MagneticButton label="Resume" href={TRAVIS_PECK_RESUME} variant="ghost" download />
          </div>
          <div className="contact-links">
            <a href="https://github.com/traviicii" target="_blank" rel="noreferrer">
              <img src={githubMark} alt="GitHub" />
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/travis-peck-b8386837/" target="_blank" rel="noreferrer">
              <img src={linkedinMark} alt="LinkedIn" />
              LinkedIn
            </a>
          </div>
        </div>
      </Section>

      <button
        className={`back-to-top ${showBackToTop ? 'is-visible' : ''}`}
        type="button"
        onClick={() =>
          window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' })
        }
        aria-label="Back to top"
      >
        ↑
      </button>
    </div>
  );
}
