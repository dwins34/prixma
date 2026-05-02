'use client';
import Button from '../ui/Button';
import DemoBox from '../ui/DemoBox';
import PageToc from '../ui/PageToc';
import styles from '../docs.module.css';

export default function InstallationPage() {
  return (
    <>
      <PageToc items={[
        { href: '#installation', label: 'Installation' },
        { href: '#usage',        label: 'Usage' },
        { href: '#tokens',       label: 'Design Tokens' },
      ]} />

      <h1 className={styles.pageTitle}>Prixma</h1>
      <p className={styles.pageSubtitle}>
        A beautifully crafted, accessible component library built directly from your Figma design system.
        Purple-forward, token-driven, and drop-in ready for React, Next.js, and vanilla JavaScript.
      </p>
      <div className={styles.badgeRow}>
        {['⚡ Zero dependency', '🎨 Figma token synced', '✓ Accessible (WCAG 2.1 AA)', 'TypeScript ready'].map(b => (
          <span key={b} className={`${styles.chip} ${b.includes('⚡') || b.includes('🎨') ? styles.chipPurple : b.includes('✓') ? styles.chipGreen : ''}`}>{b}</span>
        ))}
      </div>

      <section id="installation" className={styles.section}>
        <h2 className={styles.sectionTitle}>Installation</h2>
        <p className={styles.sectionDesc}>Install the package with your favourite package manager.</p>
        <DemoBox
          tabs={[
            { label: 'npm',  code: 'npm install prixma',  filename: 'terminal' },
            { label: 'yarn', code: 'yarn add prixma',     filename: 'terminal' },
            { label: 'pnpm', code: 'pnpm add prixma',     filename: 'terminal' },
          ]}
          preview={<span style={{ color: 'var(--text-secondary)', fontSize: 14 }}>Choose a package manager tab below →</span>}
          previewStyle={{ minHeight: 60, padding: '16px 24px' }}
        />
      </section>

      <div className={styles.divider} />

      <section id="usage" className={styles.section}>
        <h2 className={styles.sectionTitle}>Usage</h2>
        <p className={styles.sectionDesc}>Import styles in your root layout and start using components.</p>
        <DemoBox
          tabs={[{ label: 'Next.js', code: "import { Button } from 'prixma';\nimport 'prixma/dist/index.css';", filename: 'layout.tsx' }]}
          preview={<Button>Default Prixma Button</Button>}
        />
      </section>

      <div className={styles.divider} />

      <section id="tokens" className={styles.section}>
        <h2 className={styles.sectionTitle}>Design Tokens</h2>
        <p className={styles.sectionDesc}>Prixma is built on a robust set of CSS variables that you can override to match your brand.</p>
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead><tr><th>Token</th><th>Value</th><th>Variable</th></tr></thead>
            <tbody>
              <tr><td>Purple 500</td><td><span style={{ display:'inline-block', width:12, height:12, background:'#6037d3', borderRadius:2, marginRight:8 }} />#6037D3</td><td><code>--purple-500</code></td></tr>
              <tr><td>Surface</td><td>#FFFFFF</td><td><code>--surface-default</code></td></tr>
              <tr><td>Radius</td><td>8px</td><td><code>--radius-m</code></td></tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
