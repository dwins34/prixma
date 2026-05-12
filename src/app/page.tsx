'use client';
import React from 'react';
import Link from 'next/link';
import Header from './components/ui/Header';
import styles from './page.module.css';
import { COMPONENTS } from '../config';

/* ── Feature icons — inline SVGs, no external dependencies ── */
const IconDark = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6037D3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
  </svg>
);
const IconZero = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6037D3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>
);
const IconAccess = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6037D3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <path d="M12 8v4l3 3"/>
  </svg>
);
const IconCompose = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6037D3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/>
    <rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>
  </svg>
);
const IconFigma = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 3h5a4 4 0 0 1 0 8H8z" fill="#6037D3" fillOpacity=".15" stroke="#6037D3"/>
    <path d="M8 11h4a4 4 0 0 1 0 8H8z" fill="#6037D3" fillOpacity=".15" stroke="#6037D3"/>
    <circle cx="17" cy="15" r="4" fill="#6037D3" fillOpacity=".15" stroke="#6037D3"/>
    <path d="M8 3v18" stroke="#6037D3"/>
    <circle cx="8" cy="7" r="4" fill="#6037D3" fillOpacity=".15" stroke="#6037D3"/>
  </svg>
);
const IconTyped = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6037D3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
  </svg>
);

const FEATURES = [
  { icon: IconDark,    bold: 'Dark-first',  muted: ' design',       desc: 'Every component is designed for dark interfaces first, with thoughtful light mode support baked in.' },
  { icon: IconZero,    bold: 'Zero',        muted: ' dependencies', desc: 'Pure CSS and vanilla JS. No bloated runtime, no framework lock-in. Works anywhere HTML works.' },
  { icon: IconAccess,  bold: 'Accessible',  muted: ' by default',   desc: 'ARIA roles, keyboard navigation, and focus management are built into every interactive component.' },
  { icon: IconCompose, bold: 'Composable',  muted: ' tokens',       desc: 'A structured token system means colors, spacing, and radii stay consistent across your entire product.' },
  { icon: IconFigma,   bold: 'Figma',       muted: ' included',     desc: 'Every component ships with a Figma counterpart. Design and code stay perfectly in sync, always.' },
  { icon: IconTyped,   bold: 'Typed &',     muted: ' documented',   desc: 'Full TypeScript definitions and inline JSDoc on every prop. Your IDE becomes a documentation browser.', swapColors: true },
];


function FeatureIcon({ icon: Icon }: { icon: () => React.ReactNode }) {
  return (
    <div className={styles.iconOuter}>
      <div className={styles.iconInner}>
        <Icon />
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Header activePage="home" />

      <div className={styles.root}>

        {/* ── BLOBS — pure CSS radial gradients matching Figma exactly ── */}
        {/* Blob 1: lavender-purple, large, upper-left, rotated 64.31deg */}
        <div className={styles.blobWrap1} aria-hidden="true">
          <div className={styles.blobRotate1}>
            <div className={styles.blob1} />
          </div>
        </div>

        {/* Blob 2: blue-lavender, smaller, upper-right, rotated 115.69deg scaleY(-1) */}
        <div className={styles.blobWrap2} aria-hidden="true">
          <div className={styles.blobRotate2}>
            <div className={styles.blob2} />
          </div>
        </div>

        {/* ── MAIN CONTENT ── */}
        <div className={styles.content}>

          {/* ── HERO GROUP ── */}
          <div className={styles.heroGroup}>
            <div className={styles.heroTop}>
              <div className={styles.heroTextGroup}>
                <div className={styles.badgeTitleGroup}>
                  <span className={styles.badge}>Design system for the modern web</span>
                  <p className={styles.heroTitle}>
                    Components built with <span className={styles.accent}>precision</span>
                  </p>
                </div>
                <p className={styles.heroSub}>
                  An open-source React component library with a built-in design system. Copy, install, and ship.
                </p>
              </div>
              <div className={styles.ctaRow}>
                <a href="/components" className={styles.btnPrimary}>Browse components</a>
                <a href="/components" className={styles.btnSecondary}>Read docs</a>
              </div>
            </div>

            {/* Stat cards */}
            <div className={styles.stats}>
              {[{ num: '40+', label: 'Components' }, { num: '10+', label: 'Categories' }, { num: '∞', label: 'Customisation' }].map(s => (
                <div key={s.label} className={styles.statCard}>
                  <span className={styles.statNum}>{s.num}</span>
                  <span className={styles.statLabel}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── TAB STRIP ── */}
          <div className={styles.tabStrip}>
            {COMPONENTS.map((tab, i) => (
              <Link key={tab.slug} href={`/components/${tab.slug}`} className={`${styles.tab} ${i === 0 ? styles.tabFirst : ''}`}>
                {tab.label}
              </Link>
            ))}
          </div>

          {/* ── FEATURES ── */}
          <div className={styles.featuresSection}>
            <div className={styles.featHeadGroup}>
              <p className={styles.featTitle}>Designed for serious products</p>
              <p className={styles.featSub}>Every component is built with accessibility, performance, and developer experience as first-class concerns.</p>
            </div>

            <div className={styles.featCard}>
              <div className={styles.featRow}>
                {FEATURES.slice(0, 3).map((f, i) => (
                  <div key={f.bold} className={`${styles.featCell} ${i > 0 ? styles.featCellBorderL : ''}`}>
                    <FeatureIcon icon={f.icon} />
                    <div className={styles.featText}>
                      <p className={styles.featCardTitle}>
                        <span className={f.swapColors ? styles.featMuted : styles.featBold}>{f.bold}</span>
                        <span className={f.swapColors ? styles.featBold : styles.featMuted}>{f.muted}</span>
                      </p>
                      <p className={styles.featDesc}>{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className={`${styles.featRow} ${styles.featRowBorderT}`}>
                {FEATURES.slice(3).map((f, i) => (
                  <div key={f.bold} className={`${styles.featCell} ${i > 0 ? styles.featCellBorderL : ''}`}>
                    <FeatureIcon icon={f.icon} />
                    <div className={styles.featText}>
                      <p className={styles.featCardTitle}>
                        <span className={f.swapColors ? styles.featMuted : styles.featBold}>{f.bold}</span>
                        <span className={f.swapColors ? styles.featBold : styles.featMuted}>{f.muted}</span>
                      </p>
                      <p className={styles.featDesc}>{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── CTA BANNER ── */}
          <div className={styles.ctaBanner}>
            <div className={styles.ctaBannerTop}>
              <span className={styles.ctaBadge}>Get started</span>
              <p className={styles.ctaTitle}>Ready to build?</p>
            </div>
            <p className={styles.ctaSub}>Start with the docs or browse components directly. Everything is free and open-source.</p>
            <div className={styles.ctaRow}>
              <a href="/components" className={styles.btnPrimary}>Read the docs</a>
              <a href="/components" className={styles.btnSecondary}>Browse components</a>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
