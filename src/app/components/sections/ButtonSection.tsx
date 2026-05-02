'use client';
import Button from '../ui/Button';
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
const DownloadIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7,10 12,15 17,10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

const VARIANTS_CODE_REACT = `import { Button } from 'prixma-beta';

<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="text">Text link</Button>
<Button variant="destructive">Delete</Button>`;

const VARIANTS_CODE_NEXTJS = `'use client';
import { Button } from 'prixma-beta';

export default function Page() {
  return (
    <div style={{ display: 'flex', gap: 12 }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="text">Text link</Button>
      <Button variant="destructive">Delete</Button>
    </div>
  );
}`;

const VARIANTS_CODE_JS = `<button class="fp-btn fp-btn--primary">Primary</button>
<button class="fp-btn fp-btn--secondary">Secondary</button>
<button class="fp-btn fp-btn--text">Text link</button>
<button class="fp-btn fp-btn--destructive">Delete</button>`;

const SIZES_CODE_REACT = `<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>`;

const SIZES_CODE_NEXTJS = `'use client';
import { Button } from 'prixma-beta';

export default function Page() {
  return (
    <div style={{ display: 'flex', gap: 12, alignItems: 'flex-end' }}>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  );
}`;

const SIZES_CODE_JS = `<button class="fp-btn fp-btn--primary fp-btn--sm">Small</button>
<button class="fp-btn fp-btn--primary fp-btn--md">Medium</button>
<button class="fp-btn fp-btn--primary fp-btn--lg">Large</button>`;

const ICONS_CODE_REACT = `import { Button } from 'prixma-beta';

<Button variant="primary" leadingIcon={<MailIcon />}>Send email</Button>
<Button variant="secondary" trailingIcon={<DownloadIcon />}>Download</Button>
<Button variant="secondary" iconButton><MailIcon /></Button>`;

const ICONS_CODE_NEXTJS = `'use client';
import { Button } from 'prixma-beta';

export default function Page() {
  return (
    <>
      <Button variant="primary" leadingIcon={<MailIcon />}>Send email</Button>
      <Button variant="secondary" trailingIcon={<DownloadIcon />}>Download</Button>
    </>
  );
}`;

const ICONS_CODE_JS = `<button class="fp-btn fp-btn--primary">
  <svg><!-- mail icon --></svg>
  Send email
</button>
<button class="fp-btn fp-btn--secondary">
  Download
  <svg><!-- download icon --></svg>
</button>`;

const PROPS = [
  ['variant',      "'primary' | 'secondary' | 'text' | 'destructive'", "'primary'", 'Visual style of the button'],
  ['size',         "'sm' | 'md' | 'lg'",                               "'md'",      'Height and padding (32 / 40 / 48px)'],
  ['disabled',     'boolean',                                           'false',     'Prevents interaction'],
  ['loading',      'boolean',                                           'false',     'Shows spinner, sets aria-busy'],
  ['leadingIcon',  'ReactNode',                                         '—',         'Icon before the label'],
  ['trailingIcon', 'ReactNode',                                         '—',         'Icon after the label'],
  ['iconButton',   'boolean',                                           'false',     'Square icon-only button'],
  ['fullWidth',    'boolean',                                           'false',     'Stretches to fill container'],
];

export default function ButtonPage() {
  return (
    <>
      <PageToc items={[
        { href: '#overview',  label: 'Overview' },
        { href: '#playground',label: 'Playground', sub: true },
        { href: '#variants',  label: 'Variants',   sub: true },
        { href: '#sizes',     label: 'Sizes',      sub: true },
        { href: '#icons',     label: 'With Icons', sub: true },
        { href: '#api',       label: 'API Reference' },
      ]} />

      <section id="overview" className={styles.section}>
        <h1 className={styles.sectionTitle}>Button</h1>
        <p className={styles.sectionDesc}>
          Buttons communicate action priority. Choose the appropriate variant to reflect intent, risk level, and interaction context. Available in four variants and three sizes.
        </p>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="text">Text link</Button>
          <Button variant="destructive">Delete</Button>
        </div>
      </section>

      <section id="playground" className={styles.section}>
        <h2 className={styles.subTitle}>Playground</h2>
        <Playground
          componentName="Button"
          component={(props) => <Button {...props}>{props.children || 'Button'}</Button>}
          defaultProps={{ variant: 'primary', size: 'md', children: 'Button' }}
          controls={[
            { name: 'variant',  type: 'select', options: ['primary', 'secondary', 'text', 'destructive'] },
            { name: 'size',     type: 'select', options: ['sm', 'md', 'lg'] },
            { name: 'children', type: 'text',   label: 'Label' },
            { name: 'disabled', type: 'boolean' },
            { name: 'loading',  type: 'boolean' },
          ]}
        />
      </section>

      <div className={styles.divider} />

      <section id="variants" className={styles.section}>
        <h2 className={styles.subTitle}>Variants</h2>
        <p className={styles.sectionDesc}>Four variants covering the full action hierarchy.</p>
        <DemoBox
          preview={
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="text">Text link</Button>
              <Button variant="destructive">Delete</Button>
            </div>
          }
          tabs={[
            { label: 'React',      code: VARIANTS_CODE_REACT,  filename: 'Button.tsx' },
            { label: 'Next.js',    code: VARIANTS_CODE_NEXTJS, filename: 'page.tsx' },
            { label: 'JavaScript', code: VARIANTS_CODE_JS,     filename: 'index.html' },
          ]}
        />
      </section>

      <section id="sizes" className={styles.section}>
        <h2 className={styles.subTitle}>Sizes</h2>
        <p className={styles.sectionDesc}>Three sizes to match layout density — 32px, 40px, and 48px tall.</p>
        <DemoBox
          preview={
            <div style={{ display: 'flex', gap: 16, alignItems: 'flex-end' }}>
              {(['sm', 'md', 'lg'] as const).map(s => (
                <div key={s} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
                  <Button variant="primary" size={s}>{s === 'sm' ? 'Small' : s === 'md' ? 'Medium' : 'Large'}</Button>
                  <span style={{ fontSize: 11, color: 'var(--text-secondary)' }}>{s === 'sm' ? '32px' : s === 'md' ? '40px' : '48px'}</span>
                </div>
              ))}
            </div>
          }
          tabs={[
            { label: 'React',      code: SIZES_CODE_REACT,  filename: 'Button.tsx' },
            { label: 'Next.js',    code: SIZES_CODE_NEXTJS, filename: 'page.tsx' },
            { label: 'JavaScript', code: SIZES_CODE_JS,     filename: 'index.html' },
          ]}
        />
      </section>

      <section id="icons" className={styles.section}>
        <h2 className={styles.subTitle}>With Icons</h2>
        <p className={styles.sectionDesc}>Use leading or trailing icons to reinforce the action.</p>
        <DemoBox
          preview={
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
              <Button variant="primary"   size="md" leadingIcon={<MailIcon />}>Send email</Button>
              <Button variant="secondary" size="md" trailingIcon={<DownloadIcon />}>Download</Button>
              <Button variant="secondary" size="md" iconButton><MailIcon /></Button>
            </div>
          }
          tabs={[
            { label: 'React',      code: ICONS_CODE_REACT,  filename: 'Button.tsx' },
            { label: 'Next.js',    code: ICONS_CODE_NEXTJS, filename: 'page.tsx' },
            { label: 'JavaScript', code: ICONS_CODE_JS,     filename: 'index.html' },
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
