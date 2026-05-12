'use client';
import { useState } from 'react';
import { Select } from '../ui/Select';
import DemoBox from '../ui/DemoBox';
import Playground from '../ui/Playground';
import PageToc from '../ui/PageToc';
import styles from '../docs.module.css';

const LocationIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
    <circle cx="12" cy="9" r="2.5" />
  </svg>
);

const BASIC_OPTIONS = [
  { value: 'react',   label: 'React' },
  { value: 'vue',     label: 'Vue' },
  { value: 'angular', label: 'Angular' },
  { value: 'svelte',  label: 'Svelte' },
  { value: 'solid',   label: 'SolidJS' },
];

const GROUPED_OPTIONS = [
  {
    group: 'Frontend',
    options: [
      { value: 'react',   label: 'React' },
      { value: 'vue',     label: 'Vue' },
      { value: 'svelte',  label: 'Svelte' },
    ],
  },
  {
    group: 'Backend',
    options: [
      { value: 'node',    label: 'Node.js' },
      { value: 'django',  label: 'Django' },
      { value: 'rails',   label: 'Rails', disabled: true },
    ],
  },
];

/* ── Code snippets ───────────────────────────── */
const BASIC_CODE_REACT = `import { Select } from 'prixma-beta';

const options = [
  { value: 'react',   label: 'React' },
  { value: 'vue',     label: 'Vue' },
  { value: 'angular', label: 'Angular' },
];

<Select label="Framework" options={options} placeholder="Pick a framework" />`;

const BASIC_CODE_NEXTJS = `'use client';
import { useState } from 'react';
import { Select } from 'prixma-beta';

const options = [
  { value: 'react', label: 'React' },
  { value: 'vue',   label: 'Vue' },
];

export default function Page() {
  const [val, setVal] = useState('');
  return (
    <Select
      label="Framework"
      options={options}
      value={val}
      onChange={setVal}
      placeholder="Pick a framework"
    />
  );
}`;

const BASIC_CODE_JS = `<div class="fp-select-group">
  <label class="fp-select-label">Framework</label>
  <select class="fp-select">
    <option value="">Pick a framework</option>
    <option value="react">React</option>
    <option value="vue">Vue</option>
  </select>
</div>`;

const STATES_CODE_REACT = `// Error state
<Select label="Country" options={options} error="Please select a country." />

// Success state
<Select label="Country" options={options} success defaultValue="react" />

// Disabled
<Select label="Country" options={options} disabled />

// Required / Optional
<Select label="Country" options={options} required />
<Select label="Country" options={options} optional />`;

const SIZES_CODE_REACT = `<Select options={options} size="sm" placeholder="Small — 32px" />
<Select options={options} size="md" placeholder="Medium — 40px" />
<Select options={options} size="lg" placeholder="Large — 48px" />`;

const GROUPED_CODE_REACT = `const options = [
  {
    group: 'Frontend',
    options: [
      { value: 'react',  label: 'React' },
      { value: 'vue',    label: 'Vue' },
    ],
  },
  {
    group: 'Backend',
    options: [
      { value: 'node',   label: 'Node.js' },
      { value: 'rails',  label: 'Rails', disabled: true },
    ],
  },
];

<Select label="Stack" options={options} placeholder="Choose a technology" />`;

const SEARCHABLE_CODE_REACT = `<Select
  label="Framework"
  options={options}
  searchable
  placeholder="Search and select..."
/>`;

const MULTI_CODE_REACT = `import { Select } from 'prixma-beta';

// Basic multi select — selected values appear as chips
<Select
  multi
  label="Technologies"
  options={options}
  placeholder="Pick technologies..."
  hint="Select as many as you need."
/>

// Multi + searchable — type to filter, chips stay visible
<Select
  multi
  searchable
  label="Tech stack"
  options={options}
  placeholder="Search and select..."
/>

// Controlled multi select
const [values, setValues] = useState([]);
<Select
  multi
  label="Technologies"
  options={options}
  value={values}
  onChange={setValues}
/>`;

const MULTI_CODE_NEXTJS = `'use client';
import { useState } from 'react';
import { Select } from 'prixma-beta';

const options = [
  { value: 'react',   label: 'React' },
  { value: 'vue',     label: 'Vue' },
  { value: 'node',    label: 'Node.js' },
  { value: 'python',  label: 'Python' },
];

export default function Page() {
  const [stack, setStack] = useState<string[]>([]);
  return (
    <Select
      multi
      searchable
      label="Your tech stack"
      options={options}
      value={stack}
      onChange={setStack}
      placeholder="Search and select..."
      hint={\`\${stack.length} selected\`}
    />
  );
}`;

const PROPS = [
  ['options',      '(SelectOption | SelectGroup)[]', '[]',       'Flat options or grouped options'],
  ['multi',        'boolean',         'false',        'Enables multi-select mode with chips'],
  ['value',        'string | string[]', '—',          'Controlled value (string for single, string[] for multi)'],
  ['defaultValue', 'string | string[]', '—',          'Initial value for uncontrolled usage'],
  ['onChange',     '(value) => void', '—',            'Called on change — value type matches mode'],
  ['placeholder',  'string',          "'Select an option'", 'Placeholder text'],
  ['label',        'string',          '—',            'Label above the select'],
  ['hint',         'string',          '—',            'Helper text below'],
  ['error',        'string',          '—',            'Error message; applies red border'],
  ['success',      'boolean',         'false',        'Applies green border'],
  ['required',     'boolean',         'false',        'Appends * to label'],
  ['optional',     'boolean',         'false',        'Appends (optional) to label'],
  ['disabled',     'boolean',         'false',        'Disables the select'],
  ['searchable',   'boolean',         'false',        'Enables inline search / filter'],
  ['maxChips',     'number',          '—',            'Collapse chips beyond this count into "+N more"'],
  ['size',         "'sm' | 'md' | 'lg'", "'md'",     'Height — 32 / 40 / 48px'],
  ['leadingIcon',  'ReactNode',       '—',            'Icon inside trigger, left side'],
];

export default function SelectPage() {
  const [multiValues, setMultiValues] = useState<string[]>([]);

  return (
    <>
      <PageToc items={[
        { href: '#overview',   label: 'Overview' },
        { href: '#playground', label: 'Playground',      sub: true },
        { href: '#basic',      label: 'Basic',           sub: true },
        { href: '#states',     label: 'States',          sub: true },
        { href: '#multi',      label: 'Multi Select',    sub: true },
        { href: '#sizes',      label: 'Sizes',          sub: true },
        { href: '#grouped',    label: 'Grouped Options', sub: true },
        { href: '#searchable', label: 'Searchable',     sub: true },
        { href: '#api',        label: 'API Reference' },
      ]} />

      <section id="overview" className={styles.section}>
        <h1 className={styles.sectionTitle}>Select</h1>
        <p className={styles.sectionDesc}>
          A fully accessible dropdown select. Supports flat options, grouped options, search filtering, all interactive states, and three sizes — consistent with the rest of the Prixma input system.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 360 }}>
          <Select label="Framework" options={BASIC_OPTIONS} placeholder="Pick a framework" hint="Used for the project scaffold." />
          <Select label="Stack" options={GROUPED_OPTIONS} placeholder="Choose a technology" />
          <Select label="Search & Select" options={BASIC_OPTIONS} searchable placeholder="Search frameworks..." />
        </div>
      </section>

      {/* ── Playground ── */}
      <section id="playground" className={styles.section}>
        <h2 className={styles.subTitle}>Playground</h2>
        <Playground
          componentName="Select"
          component={(props) => (
            <Select
              {...props}
              options={BASIC_OPTIONS}
              style={{ maxWidth: 320, width: '100%' }}
            />
          )}
          defaultProps={{ label: 'Framework', placeholder: 'Pick a framework', hint: 'Choose your stack.' }}
          controls={[
            { name: 'label',       type: 'text' },
            { name: 'placeholder', type: 'text' },
            { name: 'hint',        type: 'text' },
            { name: 'error',       type: 'text' },
            { name: 'size',        type: 'select', options: ['sm', 'md', 'lg'] },
            { name: 'searchable',  type: 'boolean' },
            { name: 'required',    type: 'boolean' },
            { name: 'optional',    type: 'boolean' },
            { name: 'disabled',    type: 'boolean' },
            { name: 'success',     type: 'boolean' },
          ]}
        />
      </section>

      <div className={styles.divider} />

      {/* ── Basic ── */}
      <section id="basic" className={styles.section}>
        <h2 className={styles.subTitle}>Basic</h2>
        <p className={styles.sectionDesc}>
          Pass an array of <code>{'{ value, label }'}</code> objects. Works uncontrolled with <code>defaultValue</code> or controlled with <code>value</code> + <code>onChange</code>.
        </p>
        <DemoBox
          preview={
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16, width: '100%', maxWidth: 360 }}>
              <Select label="Framework" options={BASIC_OPTIONS} placeholder="Pick a framework" hint="We'll scaffold based on this." />
              <Select label="With icon" options={BASIC_OPTIONS} placeholder="Pick a location" leadingIcon={<LocationIcon />} />
            </div>
          }
          tabs={[
            { label: 'React',      code: BASIC_CODE_REACT,  filename: 'Select.tsx' },
            { label: 'Next.js',    code: BASIC_CODE_NEXTJS, filename: 'page.tsx' },
            { label: 'JavaScript', code: BASIC_CODE_JS,     filename: 'index.html' },
          ]}
        />
      </section>

      {/* ── States ── */}
      <section id="states" className={styles.section}>
        <h2 className={styles.subTitle}>States</h2>
        <p className={styles.sectionDesc}>
          Full state coverage: default, hover, focus, error, success, and disabled — matching the Input component system.
        </p>
        <DemoBox
          preview={
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16, width: '100%', maxWidth: 360 }}>
              <Select label="Default"   options={BASIC_OPTIONS} placeholder="Pick a framework" />
              <Select label="Error"     options={BASIC_OPTIONS} error="Please select a framework." />
              <Select label="Success"   options={BASIC_OPTIONS} success defaultValue="react" hint="Great choice!" />
              <Select label="Disabled"  options={BASIC_OPTIONS} placeholder="Not available" disabled />
              <Select label="Required"  options={BASIC_OPTIONS} placeholder="Pick a framework" required />
              <Select label="Optional"  options={BASIC_OPTIONS} placeholder="Pick a framework" optional />
            </div>
          }
          tabs={[
            { label: 'React',      code: STATES_CODE_REACT,  filename: 'Select.tsx' },
            { label: 'Next.js',    code: BASIC_CODE_NEXTJS,  filename: 'page.tsx' },
            { label: 'JavaScript', code: BASIC_CODE_JS,      filename: 'index.html' },
          ]}
        />
      </section>

      {/* ── Sizes ── */}
      <section id="sizes" className={styles.section}>
        <h2 className={styles.subTitle}>Sizes</h2>
        <p className={styles.sectionDesc}>Three sizes matching the Input and Button size system — 32px, 40px, and 48px.</p>
        <DemoBox
          preview={
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16, width: '100%', maxWidth: 360 }}>
              {(['sm', 'md', 'lg'] as const).map(s => (
                <div key={s} style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                  <Select options={BASIC_OPTIONS} size={s} placeholder={`${s === 'sm' ? 'Small' : s === 'md' ? 'Medium' : 'Large'} — ${s === 'sm' ? '32' : s === 'md' ? '40' : '48'}px`} />
                </div>
              ))}
            </div>
          }
          tabs={[
            { label: 'React',      code: SIZES_CODE_REACT, filename: 'Select.tsx' },
            { label: 'Next.js',    code: BASIC_CODE_NEXTJS, filename: 'page.tsx' },
            { label: 'JavaScript', code: BASIC_CODE_JS,     filename: 'index.html' },
          ]}
        />
      </section>

      {/* ── Grouped ── */}
      <section id="grouped" className={styles.section}>
        <h2 className={styles.subTitle}>Grouped Options</h2>
        <p className={styles.sectionDesc}>
          Pass <code>{'{ group, options[] }'}</code> objects to visually separate options into labelled categories. Individual options can be disabled within a group.
        </p>
        <DemoBox
          preview={
            <div style={{ width: '100%', maxWidth: 360 }}>
              <Select label="Technology stack" options={GROUPED_OPTIONS} placeholder="Choose a technology" hint="Rails is currently unavailable." />
            </div>
          }
          tabs={[
            { label: 'React',      code: GROUPED_CODE_REACT, filename: 'Select.tsx' },
            { label: 'Next.js',    code: BASIC_CODE_NEXTJS,  filename: 'page.tsx' },
            { label: 'JavaScript', code: BASIC_CODE_JS,      filename: 'index.html' },
          ]}
        />
      </section>

      {/* ── Multi Select ── */}
      <section id="multi" className={styles.section}>
        <h2 className={styles.subTitle}>Multi Select</h2>
        <p className={styles.sectionDesc}>
          Add <code>multi</code> to enable multi-select mode. Selected values render as removable chips inside the trigger. Type to search and filter — the dropdown stays open so you can keep picking. Press <kbd>Backspace</kbd> on an empty input to remove the last chip.
        </p>
        <DemoBox
          preview={
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16, width: '100%', maxWidth: 400 }}>
              <Select
                multi
                label="Technologies"
                options={BASIC_OPTIONS}
                placeholder="Pick technologies..."
                hint="Select as many as you need."
              />
              <Select
                multi
                searchable
                label="Tech stack (searchable)"
                options={GROUPED_OPTIONS}
                value={multiValues}
                onChange={setMultiValues}
                placeholder="Type to search and select..."
                hint={multiValues.length > 0 ? `${multiValues.length} selected` : 'Start typing to filter'}
              />
              <Select
                multi
                label="With maxChips (max 2 visible)"
                options={BASIC_OPTIONS}
                defaultValue={['react', 'vue', 'svelte']}
                maxChips={2}
                hint="Extra selections collapse into +N more."
              />
              <Select
                multi
                label="Disabled"
                options={BASIC_OPTIONS}
                defaultValue={['react', 'vue']}
                disabled
              />
            </div>
          }
          tabs={[
            { label: 'React',   code: MULTI_CODE_REACT,  filename: 'Select.tsx' },
            { label: 'Next.js', code: MULTI_CODE_NEXTJS, filename: 'page.tsx' },
          ]}
        />
      </section>

      {/* ── Searchable ── */}
      <section id="searchable" className={styles.section}>
        <h2 className={styles.subTitle}>Searchable</h2>
        <p className={styles.sectionDesc}>
          Add <code>searchable</code> to render a search input inside the dropdown. Filters both flat and grouped options in real time.
        </p>
        <DemoBox
          preview={
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16, width: '100%', maxWidth: 360 }}>
              <Select label="Framework" options={BASIC_OPTIONS} searchable placeholder="Search and select..." />
              <Select label="Stack (grouped)" options={GROUPED_OPTIONS} searchable placeholder="Search technologies..." />
            </div>
          }
          tabs={[
            { label: 'React',      code: SEARCHABLE_CODE_REACT, filename: 'Select.tsx' },
            { label: 'Next.js',    code: BASIC_CODE_NEXTJS,     filename: 'page.tsx' },
            { label: 'JavaScript', code: BASIC_CODE_JS,         filename: 'index.html' },
          ]}
        />
      </section>

      <div className={styles.divider} />

      {/* ── API ── */}
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
