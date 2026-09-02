import React, { useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import './Support.css';

const ONE_TIME_TIERS = [
  {
    amount: '$5',
    note: 'A light one-time tip.',
    href: process.env.REACT_APP_SUPPORT_ONE_TIME_5_URL,
  },
  {
    amount: '$15',
    note: 'A generous thank you.',
    href: process.env.REACT_APP_SUPPORT_ONE_TIME_15_URL,
  },
  {
    amount: '$30',
    note: 'A bigger push for ongoing work.',
    href: process.env.REACT_APP_SUPPORT_ONE_TIME_30_URL,
  },
];

const MONTHLY_TIERS = [
  {
    amount: '$3/mo',
    note: 'A small monthly boost.',
    href: process.env.REACT_APP_SUPPORT_MONTHLY_3_URL,
  },
  {
    amount: '$8/mo',
    note: 'Steady monthly support.',
    href: process.env.REACT_APP_SUPPORT_MONTHLY_8_URL,
  },
];

const CUSTOMER_PORTAL_URL = process.env.REACT_APP_SUPPORT_CUSTOMER_PORTAL_URL;

const toTitleCase = (value) =>
  value
    .split(/[-_]/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');

const sourceLabelFromParam = (source) => {
  if (!source) {
    return '';
  }
  return toTitleCase(source);
};

const hasAnyConfiguredLinks = [...ONE_TIME_TIERS, ...MONTHLY_TIERS].some((tier) => Boolean(tier.href));

const TierButton = ({ amount, note, href }) => {
  if (!href) {
    return (
      <div className="support-tier support-tier-disabled" aria-disabled="true">
        <span className="support-tier-amount">{amount}</span>
        <span className="support-tier-note">Support link coming soon</span>
      </div>
    );
  }

  return (
    <a className="support-tier" href={href} target="_blank" rel="noreferrer">
      <span className="support-tier-amount">{amount}</span>
      <span className="support-tier-note">{note}</span>
    </a>
  );
};

const SupportCard = ({ title, description, tiers, accentClass }) => (
  <article className={`support-card ${accentClass}`}>
    <div className="support-card-header">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
    <div className="support-tier-grid">
      {tiers.map((tier) => (
        <TierButton key={tier.amount} {...tier} />
      ))}
    </div>
    <p className="support-card-footnote">Choose the amount that feels right. Every bit helps.</p>
  </article>
);

export default function Support() {
  const [searchParams] = useSearchParams();
  const source = searchParams.get('source');
  const entry = searchParams.get('entry');
  const sourceLabel = sourceLabelFromParam(source);

  useEffect(() => {
    const previousTitle = document.title;
    const metaDescription = document.querySelector('meta[name="description"]');
    const previousDescription = metaDescription ? metaDescription.getAttribute('content') : null;

    document.title = 'Support ongoing development | Travis Peck';
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Optional support page for independent software built and maintained by Travis Peck.'
      );
    }

    return () => {
      document.title = previousTitle;
      if (metaDescription && previousDescription) {
        metaDescription.setAttribute('content', previousDescription);
      }
    };
  }, []);

  return (
    <main
      className="support-page"
      data-support-source={source || ''}
      data-support-entry={entry || ''}
    >
      <div className="support-background" aria-hidden="true" />
      <div className="support-shell">
        <header className="support-topbar">
          <Link className="support-home-link" to="/">
            Travis Peck
          </Link>
          <span className="support-topbar-note">Shared support page</span>
        </header>

        <section className="support-hero support-panel">
          <p className="support-eyebrow">Optional support</p>
          <h1>Support ongoing development</h1>
          <p className="support-intro">
            If this software has helped you and you&apos;d like to see it continually improved and
            maintained, consider supporting development.
          </p>
          <p className="support-playful">Buy the developer a scoop of protein.</p>
          {sourceLabel ? (
            <p className="support-attribution">
              You&apos;re supporting the developer behind {sourceLabel}.
            </p>
          ) : null}
          <p className="support-reassurance">
            Totally optional. Support helps cover hosting, API costs, bug fixes, and continued
            improvements.
          </p>
        </section>

        <section className="support-grid" aria-label="Support options">
          <SupportCard
            title="One-time tip"
            description="A simple one-time show of support for ongoing maintenance and polish."
            tiers={ONE_TIME_TIERS}
            accentClass="support-card-warm"
          />
          <SupportCard
            title="Monthly support"
            description="A steady monthly contribution that helps keep improvements moving."
            tiers={MONTHLY_TIERS}
            accentClass="support-card-cool"
          />
        </section>

        <section className="support-trust support-panel">
          <div>
            <h2>Trust and transparency</h2>
            <p>
              Secure checkout by Stripe. Monthly support can be managed or canceled through Stripe.
            </p>
          </div>
          <div className="support-trust-actions">
            {CUSTOMER_PORTAL_URL ? (
              <a href={CUSTOMER_PORTAL_URL} target="_blank" rel="noreferrer">
                Manage existing monthly support
              </a>
            ) : null}
            {!hasAnyConfiguredLinks ? (
              <span className="support-muted">
                Support links are being configured. The page is ready once Stripe links are added.
              </span>
            ) : null}
          </div>
        </section>

        <footer className="support-footer">
          <p>Thank you for supporting independent software.</p>
        </footer>
      </div>
    </main>
  );
}
