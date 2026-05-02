'use client';
import Button from '../ui/Button';
import DemoBox from '../ui/DemoBox';
import PageToc from '../ui/PageToc';
import styles from '../docs.module.css';
import { PACKAGE_NAME, INSTALL_COMMANDS, CSS_IMPORT } from '../../../config';

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
        An open-source React component library with a built-in design system. Copy, install, and ship.
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
            { label: 'npm',  code: INSTALL_COMMANDS.npm,  filename: 'terminal' },
            { label: 'yarn', code: INSTALL_COMMANDS.yarn, filename: 'terminal' },
            { label: 'pnpm', code: INSTALL_COMMANDS.pnpm, filename: 'terminal' },
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
          tabs={[{ label: 'Next.js', code: `import { Button } from '${PACKAGE_NAME}';\nimport '${CSS_IMPORT}';`, filename: 'layout.tsx' }]}
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
