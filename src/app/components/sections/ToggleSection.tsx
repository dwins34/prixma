'use client';
import { Toggle } from '../ui/Toggle';
import DemoBox from '../ui/DemoBox';
import Playground from '../ui/Playground';
import PageToc from '../ui/PageToc';
import styles from '../docs.module.css';

const DEMO_CODE_REACT = `import { Toggle } from 'prixma';

<Toggle options={['List', 'Grid']} value="List" onChange={(v) => console.log(v)} />
<Toggle options={['Monthly', 'Annual']} value="Annual" onChange={(v) => console.log(v)} />
<Toggle options={['Off', 'On']} value="Off" disabled />`;

const DEMO_CODE_NEXTJS = `'use client';
import { useState } from 'react';
import { Toggle } from 'prixma';

export default function Page() {
  const [view, setView] = useState('List');
  return (
    <Toggle
      options={['List', 'Grid']}
      value={view}
      onChange={setView}
    />
  );
}`;

const DEMO_CODE_JS = `<div class="fp-toggle">
  <div class="fp-toggle__slider"></div>
  <button class="fp-toggle__option fp-toggle__option--active">List</button>
  <button class="fp-toggle__option">Grid</button>
</div>`;

const PROPS = [
  ['options',  'string[]', '[]',    'Array of option labels (exactly 2)'],
  ['value',    'string',   '—',     'Currently selected option'],
  ['disabled', 'boolean',  'false', 'Disables interaction'],
  ['onChange', '(v: string) => void','—', 'Called when selection changes'],
];

export default function TogglePage() {
  return (
    <>
      <PageToc items={[
        { href: '#overview',  label: 'Overview' },
        { href: '#playground',label: 'Playground', sub: true },
        { href: '#demo',      label: 'Examples',   sub: true },
        { href: '#api',       label: 'API Reference' },
      ]} />

      <section id="overview" className={styles.section}>
        <h1 className={styles.sectionTitle}>Toggle Button</h1>
        <p className={styles.sectionDesc}>
          A segmented control to switch between two distinct choices. Common in view-type selectors, mode pickers, and binary settings.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <Toggle options={['List', 'Grid']}  value="List"  onChange={() => {}} />
          <Toggle options={['Monthly', 'Annual']} value="Annual" onChange={() => {}} />
          <Toggle options={['Off', 'On']} value="Off" onChange={() => {}} disabled />
        </div>
      </section>

      <section id="playground" className={styles.section}>
        <h2 className={styles.subTitle}>Playground</h2>
        <Playground
          componentName="Toggle"
          component={(props) => <Toggle {...props} />}
          defaultProps={{ options: ['Off', 'On'], value: 'On' }}
          controls={[
            { name: 'value',    type: 'select', options: ['Off', 'On'] },
            { name: 'disabled', type: 'boolean' },
          ]}
        />
      </section>

      <section id="demo" className={styles.section}>
        <h2 className={styles.subTitle}>Examples</h2>
        <p className={styles.sectionDesc}>Common use cases for view switching, billing period selection, and binary settings.</p>
        <DemoBox
          preview={
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <Toggle options={['List', 'Grid']}     value="List"    onChange={() => {}} />
              <Toggle options={['Monthly', 'Annual']} value="Annual" onChange={() => {}} />
              <Toggle options={['Off', 'On']}         value="Off"    onChange={() => {}} disabled />
            </div>
          }
          tabs={[
            { label: 'React',      code: DEMO_CODE_REACT,  filename: 'Toggle.tsx' },
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
