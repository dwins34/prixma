'use client';
import { Checkbox } from '../ui/Checkbox';
import DemoBox from '../ui/DemoBox';
import Playground from '../ui/Playground';
import PageToc from '../ui/PageToc';
import styles from '../docs.module.css';

const STATES_CODE_REACT = `import { Checkbox } from 'prixma-beta';

<Checkbox label="Accept terms and conditions" />
<Checkbox label="Pre-checked" checked onChange={() => {}} />
<Checkbox label="Indeterminate" indeterminate />
<Checkbox label="Error state" error />
<Checkbox label="Disabled" disabled />`;

const STATES_CODE_NEXTJS = `'use client';
import { useState } from 'react';
import { Checkbox } from 'prixma-beta';

export default function Page() {
  const [checked, setChecked] = useState(false);
  return (
    <Checkbox
      label="Accept terms and conditions"
      checked={checked}
      onChange={(e) => setChecked(e.target.checked)}
    />
  );
}`;

const STATES_CODE_JS = `<label class="fp-checkbox">
  <input type="checkbox" class="fp-checkbox__input" />
  <span class="fp-checkbox__mark"></span>
  <span class="fp-checkbox__label">Accept terms</span>
</label>

<!-- Error state -->
<label class="fp-checkbox fp-checkbox--error">
  <input type="checkbox" class="fp-checkbox__input" />
  <span class="fp-checkbox__mark"></span>
  <span class="fp-checkbox__label">Required field</span>
</label>`;

const PROPS = [
  ['label',         'string',  '—',    'Label text next to the checkbox'],
  ['checked',       'boolean', 'false','Whether the checkbox is checked'],
  ['indeterminate', 'boolean', 'false','Shows a dash (partial selection state)'],
  ['error',         'boolean', 'false','Applies error styling'],
  ['disabled',      'boolean', 'false','Disables interaction'],
  ['onChange',      '(e: ChangeEvent) => void','—',  'Called when the value changes'],
];

export default function CheckboxPage() {
  return (
    <>
      <PageToc items={[
        { href: '#overview',  label: 'Overview' },
        { href: '#playground',label: 'Playground', sub: true },
        { href: '#states',    label: 'States',     sub: true },
        { href: '#api',       label: 'API Reference' },
      ]} />

      <section id="overview" className={styles.section}>
        <h1 className={styles.sectionTitle}>Checkbox</h1>
        <p className={styles.sectionDesc}>
          Checkboxes for single or multi-item selection. Supports checked, indeterminate, error, and disabled states with accessible keyboard interaction.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <Checkbox label="Receive marketing emails" />
          <Checkbox label="Pre-selected option" checked onChange={() => {}} />
          <Checkbox label="Partially selected" indeterminate />
        </div>
      </section>

      <section id="playground" className={styles.section}>
        <h2 className={styles.subTitle}>Playground</h2>
        <Playground
          componentName="Checkbox"
          component={(props) => <Checkbox {...props} />}
          defaultProps={{ label: 'Accept terms and conditions', checked: true }}
          controls={[
            { name: 'label',         type: 'text' },
            { name: 'checked',       type: 'boolean' },
            { name: 'indeterminate', type: 'boolean' },
            { name: 'error',         type: 'boolean' },
            { name: 'disabled',      type: 'boolean' },
          ]}
        />
      </section>

      <div className={styles.divider} />

      <section id="states" className={styles.section}>
        <h2 className={styles.subTitle}>States</h2>
        <p className={styles.sectionDesc}>All interactive states including indeterminate for partial selection.</p>
        <DemoBox
          preview={
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <Checkbox label="Default (unchecked)" />
              <Checkbox label="Checked" checked onChange={() => {}} />
              <Checkbox label="Indeterminate" indeterminate />
              <Checkbox label="Error state" error />
              <Checkbox label="Disabled unchecked" disabled />
              <Checkbox label="Disabled checked" checked disabled />
            </div>
          }
          tabs={[
            { label: 'React',      code: STATES_CODE_REACT,  filename: 'Checkbox.tsx' },
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
