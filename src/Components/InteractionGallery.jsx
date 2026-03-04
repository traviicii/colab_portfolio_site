import React from 'react';

const interactions = [
  {
    title: 'Magnetic Focus',
    description: 'Hover-responsive CTA with a clear magnetic pull and glow.',
    tag: 'cta + hover',
    preview: 'magnetic',
  },
  {
    title: 'Orbit Highlights',
    description: 'Orbital accents that feel alive without distracting.',
    tag: 'chips + motion',
    preview: 'orbit',
  },
  {
    title: 'Luxe Lift',
    description: 'Cards tilt and shimmer with depth tuned for calm motion.',
    tag: 'cards + depth',
    preview: 'lift',
  },
];

const handleMove = (event) => {
  const card = event.currentTarget;
  const rect = card.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  card.style.setProperty('--px', `${x}px`);
  card.style.setProperty('--py', `${y}px`);
  card.style.setProperty('--nx', ((x / rect.width) - 0.5).toFixed(3));
  card.style.setProperty('--ny', ((y / rect.height) - 0.5).toFixed(3));
};

const handleLeave = (event) => {
  const card = event.currentTarget;
  card.style.setProperty('--px', '50%');
  card.style.setProperty('--py', '50%');
  card.style.setProperty('--nx', '0');
  card.style.setProperty('--ny', '0');
};

export default function InteractionGallery() {
  return (
    <div className="interaction-gallery">
      <div className="interaction-header">
        <h3>Interaction Gallery</h3>
        <p>Small, tasteful experiments in motion and depth. Hover each tile.</p>
      </div>
      <div className="interaction-grid">
        {interactions.map((item) => (
          <article
            key={item.title}
            className="interaction-card"
            onMouseMove={handleMove}
            onMouseLeave={handleLeave}
          >
            <div className={`interaction-preview preview-${item.preview}`} aria-hidden="true">
              {item.preview === 'magnetic' ? (
                <div className="magnetic-demo">
                  <span>Magnetic CTA</span>
                </div>
              ) : null}
              {item.preview === 'orbit' ? (
                <>
                  <span className="orbit-ring" />
                  <span className="orbit-pulse" />
                  <span className="orbit-dot" />
                  <span className="orbit-dot alt" />
                </>
              ) : null}
              {item.preview === 'lift' ? (
                <>
                  <div className="lift-card">
                    <span>Lift + Sheen</span>
                  </div>
                  <span className="lift-sheen" />
                </>
              ) : null}
            </div>
            <div className="interaction-body">
              <h4>{item.title}</h4>
              <p>{item.description}</p>
              <span className="interaction-tag">{item.tag}</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
