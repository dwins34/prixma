'use client';
import { useState } from 'react';
import DemoBox from '../ui/DemoBox';
import PageToc from '../ui/PageToc';
import styles from '../docs.module.css';

const DEMO_CODE_REACT = `import { ProgressBar } from 'prixma-beta';

// Determinate
<ProgressBar value={62} size="md" label="Uploading..." />

// Sizes
<ProgressBar value={35} size="sm" />
<ProgressBar value={62} size="md" />
<ProgressBar value={85} size="lg" />`;

const DEMO_CODE_NEXTJS = `'use client';
import { useState } from 'react';
import { ProgressBar } from 'prixma-beta';

export default function Page() {
  const [progress, setProgress] = useState(0);
  return <ProgressBar value={progress} size="md" label="Uploading" />;
}`;

const DEMO_CODE_JS = `<div class="fp-progress" role="progressbar" aria-valuenow="62" aria-valuemin="0" aria-valuemax="100">
  <div class="fp-progress__track fp-progress__track--md">
    <div class="fp-progress__fill" style="width: 62%"></div>
  </div>
</div>`;

function ProgressDemo() {
  const [val, setVal] = useState(62);
  return (
    <div style={{ width: '100%', maxWidth: 440, display: 'flex', flexDirection: 'column', gap: 24 }}>
      {[{ label: 'Small (4px)', h: 4, v: 35 }, { label: 'Medium (8px)', h: 8, v: 62 }, { label: 'Large (12px)', h: 12, v: 85 }].map(s => (
        <div key={s.label}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
            <span style={{ fontSize: 13, fontWeight: 500 }}>{s.label}</span>
            <span style={{ fontSize: 12, color: 'var(--text-secondary)' }}>{s.v}%</span>
          </div>
          <div className={styles.progressTrack} style={{ height: s.h }}>
            <div className={styles.progressFill} style={{ width: `${s.v}%` }} />
          </div>
        </div>
      ))}
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
          <span style={{ fontSize: 13, fontWeight: 500 }}>Interactive</span>
          <span style={{ fontSize: 12, color: 'var(--text-secondary)' }}>{val}%</span>
        </div>
        <div className={styles.progressTrack} style={{ height: 8, marginBottom: 10 }}>
          <div className={styles.progressFill} style={{ width: `${val}%` }} />
        </div>
        <input type="range" min="0" max="100" value={val} style={{ width: '100%', accentColor: 'var(--purple-500)' }}
          onChange={e => setVal(Number(e.target.value))} />
      </div>
    </div>
  );
}

const REACT_CODE = `import { ProgressBar } from 'prixma-beta';

<ProgressBar value={62} label="Processing" />
<ProgressBar indeterminate label="Loading..." />`;

const PROPS = [
  ['value',         'number',  '0',     'Current progress value (0–100)'],
  ['size',          "'sm' | 'md' | 'lg'", "'md'", 'Height of the track (4px / 8px / 12px)'],
  ['indeterminate', 'boolean', 'false', 'Shows an animated indeterminate state'],
  ['label',         'string',  '—',     'Accessible label for screen readers'],
];

export default function ProgressPage() {
  return (
    <>
      <PageToc items={[
        { href: '#overview', label: 'Overview' },
        { href: '#sizes',    label: 'Sizes & Demo', sub: true },
        { href: '#api',      label: 'API Reference' },
      ]} />

      <section id="overview" className={styles.section}>
        <h1 className={styles.sectionTitle}>Progress</h1>
        <p className={styles.sectionDesc}>
          Conveys progress through tasks, uploads, or multi-step flows. Three sizes available with a shimmer animation.
        </p>
      </section>

      <section id="sizes" className={styles.section}>
        <h2 className={styles.subTitle}>Sizes &amp; Demo</h2>
        <p className={styles.sectionDesc}>Drag the slider to see the interactive progress bar in action.</p>
        <DemoBox
          preview={<ProgressDemo />}
          tabs={[
            { label: 'React',      code: DEMO_CODE_REACT,  filename: 'ProgressBar.tsx' },
            { label: 'Next.js',    code: DEMO_CODE_NEXTJS, filename: 'page.tsx' },
            { label: 'JavaScript', code: DEMO_CODE_JS,     filename: 'index.html' },
          ]}
        />
      </section>

      <div className={styles.divider} />

      <section id="api" className={styles.section}>
        <h2 className={styles.subTitle}>API Reference</h2>
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead><tr>{['Prop', 'Type', 'Default', 'Description'].map(h => <th key={h}>{h}</th>)}</tr></thead>
            <tbody>
              {PROPS.map(([name, type, def, desc]) => (
                <tr key={name}>
                  <td><code className={styles.propName}>{name}</code></td>
                  <td><code className={styles.propType}>{type}</code></td>
                  <td><code className={styles.propDefault}>{def}</code></td>
                  <td className={styles.propDesc}>{desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
