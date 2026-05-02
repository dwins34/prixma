'use client';
import { Input } from '../ui/Input';
import DemoBox from '../ui/DemoBox';
import Playground from '../ui/Playground';
import PageToc from '../ui/PageToc';
import styles from '../docs.module.css';

const MailIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

/* ── Code snippets ───────────────────────── */
const TOP_CODE_REACT = `import { Input } from 'prixma-beta';

// Default
<Input label="Work email" placeholder="you@example.com" hint="We'll use this to send updates." />

// With leading icon
<Input label="Email" placeholder="you@example.com" leadingIcon={<MailIcon />} />

// Error state
<Input label="Account ID" error="Enter a valid Account ID." />

// Disabled
<Input label="Account ID" placeholder="ABCDE12345" disabled />`;

const TOP_CODE_NEXTJS = `'use client';
import { Input } from 'prixma-beta';

export default function Page() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <Input
        label="Work email"
        placeholder="you@example.com"
        hint="We'll use this to send updates."
        required
      />
      <Input
        label="Account ID"
        placeholder="ABCDE12345"
        error="Enter a valid Account ID."
      />
    </div>
  );
}`;

const TOP_CODE_JS = `<!-- Default -->
<div class="fp-input-group">
  <label class="fp-input-label">Work email</label>
  <div class="fp-input-field">
    <input class="fp-input" type="text" placeholder="you@example.com" />
  </div>
  <span class="fp-input-hint">We'll use this to send updates.</span>
</div>

<!-- Error -->
<div class="fp-input-group fp-input-group--error">
  <label class="fp-input-label">Account ID</label>
  <div class="fp-input-field">
    <input class="fp-input" type="text" />
  </div>
  <span class="fp-input-error">Enter a valid Account ID.</span>
</div>`;

const FLOATING_CODE_REACT = `import { Input } from 'prixma-beta';

// Floating label — label moves up on focus/fill
<Input variant="floating" label="Email" hint="We'll use this to send updates." />
<Input variant="floating" label="Password" type="password" />
<Input variant="floating" label="Account ID" error="Enter a valid Account ID." />`;

const FLOATING_CODE_NEXTJS = `'use client';
import { useState } from 'react';
import { Input } from 'prixma-beta';

export default function Page() {
  const [email, setEmail] = useState('');
  return (
    <Input
      variant="floating"
      label="Email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      hint="We'll use this to send updates."
    />
  );
}`;

const FLOATING_CODE_JS = `<div class="fp-input-group fp-input--floating">
  <div class="fp-input-field">
    <label class="fp-input-floating-label">Email</label>
    <input class="fp-input" type="text" />
  </div>
  <span class="fp-input-hint">We'll use this to send updates.</span>
</div>`;

const INLINE_CODE_REACT = `import { Input } from 'prixma-beta';

// Inline label — label stays inside as small text above value
<Input variant="inline" label="Email" placeholder="you@example.com" />
<Input variant="inline" label="Account ID" error="Enter a valid Account ID." />`;

const INLINE_CODE_NEXTJS = `'use client';
import { Input } from 'prixma-beta';

export default function Page() {
  return (
    <Input
      variant="inline"
      label="Work email"
      placeholder="you@example.com"
      hint="We'll use this to send updates."
    />
  );
}`;

const INLINE_CODE_JS = `<div class="fp-input-group fp-input--inline">
  <div class="fp-input-field">
    <span class="fp-input-inline-label">Email</span>
    <input class="fp-input" type="text" placeholder="you@example.com" />
  </div>
</div>`;

/* ── Props table ─────────────────────────── */
const PROPS = [
  ['variant',      "'top' | 'floating' | 'inline'", "'top'",   'Label style variant'],
  ['label',        'string',   '—',       'Label text'],
  ['placeholder',  'string',   '—',       'Placeholder text'],
  ['hint',         'string',   '—',       'Helper text shown below (11px, secondary)'],
  ['error',        'string',   '—',       'Error message in red; applies error border'],
  ['success',      'boolean',  'false',   'Applies green success border'],
  ['required',     'boolean',  'false',   'Appends * to label'],
  ['optional',     'boolean',  'false',   'Appends (optional) to label'],
  ['size',         "'sm' | 'md' | 'lg'", "'md'", 'Height — 32px / 40px / 48px'],
  ['leadingIcon',  'ReactNode','—',       'Icon inside field, left side'],
  ['trailingIcon', 'ReactNode','—',       'Icon inside field, right side'],
  ['disabled',     'boolean',  'false',   'Disables interaction, applies disabled bg'],
];

export default function InputPage() {
  return (
    <>
      <PageToc items={[
        { href: '#overview',  label: 'Overview' },
        { href: '#playground',label: 'Playground',     sub: true },
        { href: '#top',       label: 'Top Label',      sub: true },
        { href: '#floating',  label: 'Floating Label', sub: true },
        { href: '#inline',    label: 'Inline Label',   sub: true },
        { href: '#api',       label: 'API Reference' },
      ]} />

      <section id="overview" className={styles.section}>
        <h1 className={styles.sectionTitle}>Input</h1>
        <p className={styles.sectionDesc}>
          Three label variants — Top, Floating, and Inline — each with full state coverage: default, hover, focus, error, success, and disabled. Built from the Form Primitives design system.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 360 }}>
          <Input label="Work email" placeholder="you@example.com" hint="We'll use this to send updates." required />
          <Input variant="floating" label="Password" type="password" hint="At least 8 characters." />
          <Input variant="inline" label="Account ID" placeholder="ABCDE12345" />
        </div>
      </section>

      {/* ── Playground ── */}
      <section id="playground" className={styles.section}>
        <h2 className={styles.subTitle}>Playground</h2>
        <Playground
          componentName="Input"
          component={(props) => (
            <Input {...props} style={{ maxWidth: 320, width: '100%' }} />
          )}
          defaultProps={{ label: 'Work email', placeholder: 'you@example.com', hint: "We'll use this to send updates.", required: true }}
          controls={[
            { name: 'variant',     type: 'select',  options: ['top', 'floating', 'inline'] },
            { name: 'label',       type: 'text' },
            { name: 'placeholder', type: 'text' },
            { name: 'hint',        type: 'text' },
            { name: 'error',       type: 'text' },
            { name: 'required',    type: 'boolean' },
            { name: 'optional',    type: 'boolean' },
            { name: 'disabled',    type: 'boolean' },
            { name: 'success',     type: 'boolean' },
          ]}
        />
      </section>

      <div className={styles.divider} />

      {/* ── Top Label ── */}
      <section id="top" className={styles.section}>
        <h2 className={styles.subTitle}>Top Label</h2>
        <p className={styles.sectionDesc}>
          Label sits above the field (12px, weight 500). Helper text is 11px below. All interactive states shown.
        </p>
        <DemoBox
          preview={
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16, width: '100%', maxWidth: 360 }}>
              <Input label="Work email" placeholder="you@example.com" hint="We'll use this to send updates." />
              <Input label="With icon" placeholder="you@example.com" leadingIcon={<MailIcon />} hint="We'll use this to send updates." />
              <Input label="Error state" placeholder="ABCDE12345" error="Enter a valid Account ID." />
              <Input label="Success state" placeholder="you@example.com" success defaultValue="valid@email.com" hint="Looks good!" />
              <Input label="Disabled (empty)" placeholder="ABCDE12345" disabled />
              <Input label="Disabled (filled)" defaultValue="HYRTV56473" disabled />
            </div>
          }
          tabs={[
            { label: 'React',      code: TOP_CODE_REACT,  filename: 'Input.tsx' },
            { label: 'Next.js',    code: TOP_CODE_NEXTJS, filename: 'page.tsx' },
            { label: 'JavaScript', code: TOP_CODE_JS,     filename: 'index.html' },
          ]}
        />
      </section>

      {/* ── Floating Label ── */}
      <section id="floating" className={styles.section}>
        <h2 className={styles.subTitle}>Floating Label</h2>
        <p className={styles.sectionDesc}>
          Label lives inside the field and floats to the top when focused or filled. Click any field below to see it animate.
        </p>
        <DemoBox
          preview={
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16, width: '100%', maxWidth: 360 }}>
              <Input variant="floating" label="Email" hint="We'll use this to send updates." />
              <Input variant="floating" label="Password" type="password" />
              <Input variant="floating" label="Error state" error="Enter a valid Account ID." />
              <Input variant="floating" label="Disabled" disabled />
            </div>
          }
          tabs={[
            { label: 'React',      code: FLOATING_CODE_REACT,  filename: 'Input.tsx' },
            { label: 'Next.js',    code: FLOATING_CODE_NEXTJS, filename: 'page.tsx' },
            { label: 'JavaScript', code: FLOATING_CODE_JS,     filename: 'index.html' },
          ]}
        />
      </section>

      {/* ── Inline Label ── */}
      <section id="inline" className={styles.section}>
        <h2 className={styles.subTitle}>Inline Label</h2>
        <p className={styles.sectionDesc}>
          Label is stacked inside the field box as small secondary text above the input value. Ideal for compact forms.
        </p>
        <DemoBox
          preview={
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16, width: '100%', maxWidth: 360 }}>
              <Input variant="inline" label="Email" placeholder="you@example.com" hint="We'll use this to send updates." />
              <Input variant="inline" label="Account ID" placeholder="ABCDE12345" />
              <Input variant="inline" label="Error state" placeholder="ABCDE12345" error="Enter a valid Account ID." />
              <Input variant="inline" label="Disabled" placeholder="ABCDE12345" disabled />
            </div>
          }
          tabs={[
            { label: 'React',      code: INLINE_CODE_REACT,  filename: 'Input.tsx' },
            { label: 'Next.js',    code: INLINE_CODE_NEXTJS, filename: 'page.tsx' },
            { label: 'JavaScript', code: INLINE_CODE_JS,     filename: 'index.html' },
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
