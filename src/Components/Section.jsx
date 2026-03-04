import React from 'react';

export default function Section({ id, title, eyebrow, children }) {
  return (
    <section id={id} className="section">
      <div className="section-header">
        {eyebrow ? <p className="section-eyebrow">{eyebrow}</p> : null}
        {title ? <h2 className="section-title">{title}</h2> : null}
      </div>
      <div className="section-body">{children}</div>
    </section>
  );
}
