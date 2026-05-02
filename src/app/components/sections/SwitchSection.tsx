'use client';
import { Switch } from '../ui/Switch';
import DemoBox from '../ui/DemoBox';
import Playground from '../ui/Playground';
import PageToc from '../ui/PageToc';
import styles from '../docs.module.css';

const STATES_CODE_REACT = `import { Switch } from 'prixma';

<Switch label="Notifications enabled" checked onChange={() => {}} />
<Switch label="Dark mode" />
<Switch label="Disabled on" checked disabled />`;

const STATES_CODE_NEXTJS = `'use client';
import { useState } from 'react';
import { Switch } from 'prixma';

export default function Page() {
  const [enabled, setEnabled] = useState(false);
  return (
    <Switch
      label="Enable notifications"
      checked={enabled}
      onChange={(e) => setEnabled(e.target.checked)}
    />
  );
}`;

const STATES_CODE_JS = `<label class="fp-switch">
  <div class="fp-switch__track">
    <input type="checkbox" class="fp-switch__input" checked />
    <span class="fp-switch__slider"></span>
  </div>
  <span class="fp-switch__label">Notifications enabled</span>
</label>`;

const PROPS = [
  ['label',    'string',  '—',    'Label displayed next to the switch'],
  ['checked',  'boolean', 'false','Whether the switch is on'],
  ['disabled', 'boolean', 'false','Disables interaction'],
  ['onChange', '() => void','—',  'Called when the switch is toggled'],
];

export default function SwitchPage() {
  return (
    <>
      <PageToc items={[
        { href: '#overview',  label: 'Overview' },
        { href: '#playground',label: 'Playground', sub: true },
        { href: '#states',    label: 'States',     sub: true },
        { href: '#api',       label: 'API Reference' },
      ]} />

      <section id="overview" className={styles.section}>
        <h1 className={styles.sectionTitle}>Switch</h1>
        <p className={styles.sectionDesc}>
          Toggle switch for binary choices like settings, preferences, and feature flags. Fully accessible with keyboard support.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <Switch label="Notifications enabled" checked={true}  onChange={() => {}} />
          <Switch label="Dark mode"             checked={false} onChange={() => {}} />
          <Switch label="Disabled state"        checked={true}  onChange={() => {}} disabled />
        </div>
      </section>

      <section id="playground" className={styles.section}>
        <h2 className={styles.subTitle}>Playground</h2>
        <Playground
          componentName="Switch"
          component={(props) => <Switch {...props} />}
          defaultProps={{ label: 'Enable notifications', checked: true }}
          controls={[
            { name: 'label',    type: 'text' },
            { name: 'checked',  type: 'boolean' },
            { name: 'disabled', type: 'boolean' },
          ]}
        />
      </section>

      <section id="states" className={styles.section}>
        <h2 className={styles.subTitle}>States</h2>
        <p className={styles.sectionDesc}>On, off, disabled on, and disabled off states.</p>
        <DemoBox
          preview={
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <Switch label="Notifications enabled" checked onChange={() => {}} />
              <Switch label="Dark mode" onChange={() => {}} />
              <Switch label="Disabled (on)"  checked disabled />
              <Switch label="Disabled (off)" disabled />
            </div>
          }
          tabs={[
            { label: 'React',      code: STATES_CODE_REACT,  filename: 'Switch.tsx' },
            { label: 'Next.js',    code: STATES_CODE_NEXTJS, filename: 'page.tsx' },
            { label: 'JavaScript', code: STATES_CODE_JS,     filename: 'index.html' },
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
