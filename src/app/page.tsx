'use client';
import Link from 'next/link';
import Header from './components/ui/Header';
import styles from './page.module.css';
import { COMPONENTS } from '../config';

/* ── Feature icon assets (from Figma, permanent via public folder approach) ──
   Two types of icons in Figma:
   - "group" icons: 24px SVG centered inside a 48px white-bordered container
   - "full" icons: 48px image that already contains the white bg styling
*/
const imgIconDark    = 'https://www.figma.com/api/mcp/asset/c9473de2-3919-47d9-bd8a-d5d9b23d1f9d'; // 24px sun — bordered
const imgIconZero    = 'https://www.figma.com/api/mcp/asset/bba8882e-d57e-40b5-a72d-2b468f51d2df'; // 48px full
const imgIconAccess  = 'https://www.figma.com/api/mcp/asset/1301eb72-519f-4738-9fec-19f30bbac5d3'; // 24px — bordered
const imgIconCompose = 'https://www.figma.com/api/mcp/asset/bc270abc-166c-4c11-b17c-1dbf1fb0d5cb'; // 24px — bordered
const imgIconFigma   = 'https://www.figma.com/api/mcp/asset/6825acb0-57f9-4f8d-9def-2f0f74c342d6'; // 24px — bordered
const imgIconTyped   = 'https://www.figma.com/api/mcp/asset/39aa3a52-d39e-4a9c-aabc-ef4717fdb257'; // 48px full

/* bordered=true  → outer #ecf0ff + inner white/bordered 48px + 24px icon centered
   bordered=false → outer #ecf0ff + 48px image directly (image has white bg built-in) */
const FEATURES = [
  { img: imgIconDark,    bordered: true,  bold: 'Dark-first',  muted: ' design',       desc: 'Every component is designed for dark interfaces first, with thoughtful light mode support baked in.' },
  { img: imgIconZero,    bordered: false, bold: 'Zero',        muted: ' dependencies', desc: 'Pure CSS and vanilla JS. No bloated runtime, no framework lock-in. Works anywhere HTML works.' },
  { img: imgIconAccess,  bordered: true,  bold: 'Accessible',  muted: ' by default',   desc: 'ARIA roles, keyboard navigation, and focus management are built into every interactive component.' },
  { img: imgIconCompose, bordered: true,  bold: 'Composable',  muted: ' tokens',       desc: 'A structured token system means colors, spacing, and radii stay consistent across your entire product.' },
  { img: imgIconFigma,   bordered: true,  bold: 'Figma',       muted: ' included',     desc: 'Every component ships with a Figma counterpart. Design and code stay perfectly in sync, always.' },
  { img: imgIconTyped,   bordered: false, bold: 'Typed &',     muted: ' documented',   desc: 'Full TypeScript definitions and inline JSDoc on every prop. Your IDE becomes a documentation browser.', swapColors: true },
];


function FeatureIcon({ img, bordered }: { img: string; bordered: boolean }) {
  return (
    <div className={styles.iconOuter}>
      {bordered ? (
        /* 48px white-bordered container with 24px icon centered inside */
        <div className={styles.iconInner}>
          <div className={styles.iconSmallWrap}>
            <div className={styles.iconSmallInset}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt="" className={styles.iconImgFull} src={img} />
            </div>
          </div>
        </div>
      ) : (
        /* 48px image fills directly — image already has white bg styling */
        <div className={styles.iconBare}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img alt="" className={styles.iconImgFull} src={img} />
        </div>
      )}
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
                    <FeatureIcon img={f.img} bordered={f.bordered} />
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
                    <FeatureIcon img={f.img} bordered={f.bordered} />
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
