'use client';
import { useState } from 'react';
import Header from './components/ui/Header';
import Sidebar from './components/ui/Sidebar';
import Button from './components/ui/Button';
import DemoBox from './components/ui/DemoBox';
import styles from './page.module.css';

/* ── Mail icon ─────────────────────────────────────────── */
const MailIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);
const PlusIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
  </svg>
);
const DownloadIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
    <polyline points="7,10 12,15 17,10"/>
    <line x1="12" y1="15" x2="12" y2="3"/>
  </svg>
);

/* ── Code snippets ─────────────────────────────────────── */
const BTN_REACT = `import { Button } from 'prixma';

export default function Example() {
  return (
    <div style={{ display: 'flex', gap: 12 }}>
      <Button variant="primary">Button</Button>
      <Button variant="secondary">Button</Button>
      <Button variant="text">Button</Button>
      <Button variant="destructive">Button</Button>
    </div>
  );
}`;

const BTN_NEXT = `'use client';
import { Button } from 'prixma';

export default function Page() {
  return (
    <div className="flex gap-3">
      <Button variant="primary">Button</Button>
      <Button variant="secondary">Button</Button>
      <Button variant="text">Button</Button>
      <Button variant="destructive">Button</Button>
    </div>
  );
}`;

const BTN_JS = `<!-- Import CSS -->
<link rel="stylesheet" href="prixma/dist/index.css">

<button class="fp-btn fp-btn-primary fp-btn-md">Button</button>
<button class="fp-btn fp-btn-secondary fp-btn-md">Button</button>
<button class="fp-btn fp-btn-text fp-btn-md">Button</button>
<button class="fp-btn fp-btn-destructive fp-btn-md">Button</button>`;

const BTN_SIZES = `<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>`;

const BTN_STATES = `/* Disabled */
<Button variant="primary" disabled>Button</Button>

/* Loading */
<Button variant="primary" loading>Button</Button>`;

const BTN_ICONS = `import { Button, MailIcon, PlusIcon } from 'prixma';

/* Leading icon */
<Button variant="primary" leadingIcon={<MailIcon />}>
  Send email
</Button>

/* Trailing icon */
<Button variant="secondary" trailingIcon={<PlusIcon />}>
  Add new
</Button>

/* Icon only */
<Button variant="secondary" iconButton size="md">
  <MailIcon />
</Button>`;

const INPUT_REACT = `import { Input } from 'prixma';
import { MailIcon } from 'prixma/icons';

export default function Form() {
  return (
    <Input
      label="Email address"
      type="email"
      placeholder="you@example.com"
      leadingIcon={<MailIcon />}
      hint="We'll never share your email."
      required
    />
  );
}`;

const INPUT_NEXT = `'use client';
import { Input } from 'prixma';
import { useState } from 'react';

export default function Page() {
  const [email, setEmail] = useState('');
  return (
    <Input
      label="Email address"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      type="email"
      placeholder="you@example.com"
      required
    />
  );
}`;

const CHIP_CODE = `import { Chip } from 'prixma';

<Chip>Default</Chip>
<Chip color="purple" dot>Active</Chip>
<Chip color="green" dot>Success</Chip>
<Chip color="red" dot>Error</Chip>
<Chip color="purple" onDismiss={() => {}}>React</Chip>`;

const PROGRESS_CODE = `import { ProgressBar } from 'prixma';

<ProgressBar value={62} label="Upload progress" size="md" />

{/* Animated / indeterminate */}
<ProgressBar indeterminate label="Loading…" />`;

const STEPPER_CODE = `import { Stepper, Step } from 'prixma';

const [step, setStep] = useState(1);

<Stepper activeStep={step}>
  <Step label="Account" />
  <Step label="Profile" />
  <Step label="Payment" />
  <Step label="Review" />
</Stepper>`;

const UPLOADER_CODE = `import { Uploader } from 'prixma';

<Uploader
  accept=".png,.jpg,.pdf,.svg"
  maxSize={10 * 1024 * 1024} // 10 MB
  onUpload={(files) => console.log(files)}
  multiple
/>`;

/* ── Stepper interactive demo ──────────────────────────── */
function StepperDemo() {
  const [step, setStep] = useState(2);
  const steps = ['Account', 'Profile', 'Payment'];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20, alignItems: 'center' }}>
      <div className={styles.stepper}>
        {steps.map((label, i) => {
          const idx = i + 1;
          const done   = idx < step;
          const active = idx === step;
          return (
            <div key={label} style={{ display: 'flex', alignItems: 'center' }}>
              <div className={styles.stepItem}>
                <div className={`${styles.stepCircle} ${done ? styles.done : active ? styles.active : styles.todo}`}>
                  {done ? '✓' : idx}
                </div>
                <div className={`${styles.stepLabel} ${active ? styles.stepActive : styles.stepTodo}`}>{label}</div>
              </div>
              {i < steps.length - 1 && (
                <div className={`${styles.connector} ${done ? styles.connectorDone : ''}`} />
              )}
            </div>
          );
        })}
      </div>
      <div style={{ display: 'flex', gap: 8 }}>
        <Button variant="secondary" size="sm" onClick={() => setStep(s => Math.max(1, s - 1))}>← Back</Button>
        <Button variant="primary"   size="sm" onClick={() => setStep(s => Math.min(3, s + 1))}>Next →</Button>
      </div>
    </div>
  );
}

/* ── Progress interactive demo ─────────────────────────── */
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

/* ── Uploader demo ─────────────────────────────────────── */
function UploaderDemo() {
  const [dropped, setDropped] = useState<string[]>([]);
  return (
    <div
      className={styles.uploader}
      onDragOver={e => { e.preventDefault(); e.currentTarget.classList.add(styles.dragOver); }}
      onDragLeave={e => e.currentTarget.classList.remove(styles.dragOver)}
      onDrop={e => {
        e.preventDefault();
        e.currentTarget.classList.remove(styles.dragOver);
        setDropped([...e.dataTransfer.files].map(f => f.name));
      }}
    >
      {dropped.length > 0 ? (
        <>
          <div style={{ fontSize: 32, marginBottom: 12 }}>✅</div>
          <div style={{ fontWeight: 600, fontSize: 15 }}>{dropped.length} file{dropped.length > 1 ? 's' : ''} selected</div>
          <div style={{ fontSize: 13, color: 'var(--text-secondary)' }}>{dropped.join(', ')}</div>
        </>
      ) : (
        <>
          <div style={{ fontSize: 32, marginBottom: 12 }}>📁</div>
          <div style={{ fontWeight: 600, fontSize: 15, marginBottom: 4 }}>Drop files here or browse</div>
          <div style={{ fontSize: 13, color: 'var(--text-secondary)' }}>
            Drag &amp; drop your files, or <span style={{ color: 'var(--purple-500)' }}>click to select</span>
          </div>
          <div style={{ fontSize: 11, color: 'var(--text-disabled)', marginTop: 8 }}>
            Supports: PNG, JPG, PDF, SVG · Max 10 MB per file
          </div>
        </>
      )}
    </div>
  );
}

/* ── Props table ─────────────────────────────────────────── */
function PropsTable({ rows }: { rows: string[][] }) {
  return (
    <div className={styles.tableWrap}>
      <table className={styles.table}>
        <thead>
          <tr>{['Prop','Type','Default','Description'].map(h => <th key={h}>{h}</th>)}</tr>
        </thead>
        <tbody>
          {rows.map(([name, type, def, desc]) => (
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
  );
}

const BUTTON_PROPS = [
  ['variant', "'primary' | 'secondary' | 'text' | 'destructive'", "'primary'", 'Visual style of the button'],
  ['size', "'sm' | 'md' | 'lg'", "'md'", 'Height and padding of the button'],
  ['disabled', 'boolean', 'false', 'Prevents interaction and applies disabled styles'],
  ['loading', 'boolean', 'false', 'Replaces label with a spinner; also sets aria-busy'],
  ['leadingIcon', 'ReactNode', '—', 'Icon rendered before the label'],
  ['trailingIcon', 'ReactNode', '—', 'Icon rendered after the label'],
  ['iconButton', 'boolean', 'false', 'Renders a square icon-only button'],
  ['fullWidth', 'boolean', 'false', 'Stretches button to fill its container'],
];

const INPUT_PROPS = [
  ['label', 'string', '—', 'Label displayed above the input'],
  ['type', 'string', "'text'", 'HTML input type'],
  ['placeholder', 'string', '—', 'Placeholder text'],
  ['hint', 'string', '—', 'Helper text shown below the input'],
  ['error', 'string', '—', 'Error message; switches input to error state'],
  ['success', 'boolean', 'false', 'Shows success state with green border'],
  ['leadingIcon', 'ReactNode', '—', 'Icon rendered inside, left side'],
  ['disabled', 'boolean', 'false', 'Disables user input'],
  ['required', 'boolean', 'false', 'Appends required asterisk to label'],
];

/* ── Main page ───────────────────────────────────────────── */
export default function Home() {
  return (
    <>
      <Header />
      <div className={styles.layout}>
        <Sidebar />

        <main className={styles.main}>

          {/* ── INSTALLATION ─────────────────────────────── */}
          <section id="installation" className={styles.section}>
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

          {/* ── BUTTON ───────────────────────────────────── */}
          <section id="button" className={styles.section}>
            <h2 className={styles.sectionTitle}>Button</h2>
            <p className={styles.sectionDesc}>Buttons communicate action priority. Choose the appropriate variant to reflect intent, risk level, and interaction context.</p>

            {/* All variants */}
            <DemoBox
              preview={
                <>
                  <Button variant="primary">Button</Button>
                  <Button variant="secondary">Button</Button>
                  <Button variant="text">Button</Button>
                  <Button variant="destructive">Button</Button>
                </>
              }
              tabs={[
                { label: 'React',      code: BTN_REACT, filename: 'Button.jsx' },
                { label: 'Next.js',    code: BTN_NEXT,  filename: 'page.tsx'   },
                { label: 'JavaScript', code: BTN_JS,    filename: 'index.html' },
              ]}
            />

            {/* Sizes */}
            <h3 className={styles.subTitle} id="btn-sizes">Sizes</h3>
            <p className={styles.sectionDesc}>Three sizes to match layout density.</p>
            <DemoBox
              preview={
                <div style={{ display: 'flex', gap: 24, alignItems: 'flex-end' }}>
                  {(['sm','md','lg'] as const).map(s => (
                    <div key={s} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
                      <Button variant="primary" size={s}>{s === 'sm' ? 'Small' : s === 'md' ? 'Medium' : 'Large'}</Button>
                      <span style={{ fontSize: 11, color: 'var(--text-secondary)' }}>{s} — {s === 'sm' ? '32px' : s === 'md' ? '40px' : '48px'}</span>
                    </div>
                  ))}
                </div>
              }
              tabs={[{ label: 'React', code: BTN_SIZES, filename: 'sizes.jsx' }]}
            />

            {/* States */}
            <h3 className={styles.subTitle} id="btn-states">States</h3>
            <p className={styles.sectionDesc}>All interactive states are baked in. Hover, focus, disabled, and loading states come out of the box.</p>
            <DemoBox
              preview={
                <div style={{ display: 'flex', flexDirection: 'column', gap: 20, alignItems: 'flex-start' }}>
                  <div style={{ display: 'flex', gap: 16, alignItems: 'flex-end', flexWrap: 'wrap' }}>
                    {['Default','Hover','Pressed','Focus','Disabled','Loading'].map(s => (
                      <div key={s} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
                        <Button
                          variant="primary" size="md"
                          disabled={s === 'Disabled'}
                          loading={s === 'Loading'}
                          style={s === 'Hover' ? { background: 'var(--purple-400)' } : s === 'Pressed' ? { background: 'var(--purple-600)' } : s === 'Focus' ? { boxShadow: '0 0 0 2px white, 0 0 0 4px var(--purple-500)' } : {}}
                        >
                          Button
                        </Button>
                        <span style={{ fontSize: 11, color: 'var(--text-secondary)' }}>{s}</span>
                      </div>
                    ))}
                  </div>
                  <div style={{ display: 'flex', gap: 16, alignItems: 'flex-end', flexWrap: 'wrap' }}>
                    {['Default','Hover','Pressed','Disabled','Loading'].map(s => (
                      <div key={s} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
                        <Button
                          variant="secondary" size="md"
                          disabled={s === 'Disabled'}
                          loading={s === 'Loading'}
                          style={s === 'Hover' ? { borderColor: 'var(--border-default)' } : s === 'Pressed' ? { background: 'var(--surface-elevated)' } : {}}
                        >
                          Button
                        </Button>
                        <span style={{ fontSize: 11, color: 'var(--text-secondary)' }}>{s}</span>
                      </div>
                    ))}
                  </div>
                </div>
              }
              tabs={[{ label: 'React', code: BTN_STATES, filename: 'states.jsx' }]}
            />

            {/* Icons */}
            <h3 className={styles.subTitle} id="btn-icons">With Icons</h3>
            <p className={styles.sectionDesc}>Use leading or trailing icons to reinforce the action.</p>
            <DemoBox
              preview={
                <>
                  <Button variant="primary" size="md" leadingIcon={<MailIcon />}>Send email</Button>
                  <Button variant="secondary" size="md" trailingIcon={<DownloadIcon />}>Download</Button>
                  <Button variant="secondary" size="md" iconButton><MailIcon /></Button>
                </>
              }
              tabs={[{ label: 'React', code: BTN_ICONS, filename: 'with-icons.jsx' }]}
            />

            {/* API */}
            <h3 className={styles.subTitle} id="btn-api">API Reference</h3>
            <PropsTable rows={BUTTON_PROPS} />
          </section>

          <div className={styles.divider} />

          {/* ── INPUT ───────────────────────────────────── */}
          <section id="input" className={styles.section}>
            <h2 className={styles.sectionTitle}>Input Field</h2>
            <p className={styles.sectionDesc}>Text inputs with full state coverage — default, focus, error, success, and disabled — plus optional icons and helper text.</p>

            <DemoBox
              preview={
                <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', justifyContent: 'flex-start', width: '100%' }}>
                  {/* Default */}
                  <div className={styles.inputGroup}>
                    <label className={styles.inputLabel}>Email address<span style={{ color: 'var(--red-500)', marginLeft: 2 }}>*</span></label>
                    <div className={styles.inputWrap}>
                      <svg className={`${styles.inputIcon} ${styles.iconLeft}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                      <input className={`${styles.input} ${styles.inputPadLeft}`} type="email" placeholder="you@example.com" />
                    </div>
                    <span className={styles.inputHint}>We&apos;ll never share your email.</span>
                  </div>
                  {/* Error */}
                  <div className={styles.inputGroup}>
                    <label className={styles.inputLabel}>Username</label>
                    <div className={styles.inputWrap}>
                      <input className={`${styles.input} ${styles.inputError}`} type="text" defaultValue="john doe" />
                    </div>
                    <span className={styles.inputErrorMsg}>Spaces are not allowed in usernames.</span>
                  </div>
                  {/* Success */}
                  <div className={styles.inputGroup}>
                    <label className={styles.inputLabel}>Password</label>
                    <div className={styles.inputWrap}>
                      <input className={`${styles.input} ${styles.inputSuccess}`} type="text" defaultValue="Str0ng@Pass!" />
                    </div>
                    <span className={styles.inputSuccessMsg}>Password is strong.</span>
                  </div>
                </div>
              }
              previewStyle={{ justifyContent: 'flex-start', padding: '32px 40px' }}
              tabs={[
                { label: 'React',   code: INPUT_REACT, filename: 'InputField.jsx' },
                { label: 'Next.js', code: INPUT_NEXT,  filename: 'page.tsx'        },
              ]}
            />
            <h3 className={styles.subTitle}>API Reference</h3>
            <PropsTable rows={INPUT_PROPS} />
          </section>

          <div className={styles.divider} />

          {/* ── CHIP ────────────────────────────────────── */}
          <section id="chip" className={styles.section}>
            <h2 className={styles.sectionTitle}>Chip</h2>
            <p className={styles.sectionDesc}>Compact labels for status, tags, categories, or filters.</p>
            <DemoBox
              preview={
                <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'flex-start', width: '100%' }}>
                  {[
                    { label: 'Default',    cls: styles.chipDefault },
                    { label: 'Active',     cls: styles.chipPurpleComp, dot: 'var(--purple-500)' },
                    { label: 'Success',    cls: styles.chipGreenComp,  dot: '#16a34a' },
                    { label: 'Error',      cls: styles.chipRedComp,    dot: 'var(--red-500)' },
                    { label: 'React ×',    cls: styles.chipPurpleComp },
                    { label: 'Next.js ×',  cls: styles.chipDefault },
                    { label: 'TypeScript', cls: styles.chipGreenComp },
                  ].map(c => (
                    <span key={c.label} className={`${styles.chipComp} ${c.cls}`}>
                      {c.dot && <span style={{ width: 6, height: 6, borderRadius: '50%', background: c.dot, display: 'inline-block', flexShrink: 0 }} />}
                      {c.label}
                    </span>
                  ))}
                </div>
              }
              previewStyle={{ justifyContent: 'flex-start', padding: '32px 40px' }}
              tabs={[{ label: 'React', code: CHIP_CODE, filename: 'Chip.jsx' }]}
            />
          </section>

          <div className={styles.divider} />

          {/* ── PROGRESS ─────────────────────────────────── */}
          <section id="progress" className={styles.section}>
            <h2 className={styles.sectionTitle}>Progress Bar</h2>
            <p className={styles.sectionDesc}>Conveys progress through tasks, uploads, or multi-step flows. Three sizes available.</p>
            <DemoBox
              preview={<ProgressDemo />}
              previewStyle={{ flexDirection: 'column', alignItems: 'stretch', padding: '32px 48px' }}
              tabs={[{ label: 'React', code: PROGRESS_CODE, filename: 'ProgressBar.jsx' }]}
            />
          </section>

          <div className={styles.divider} />

          {/* ── STEPPER ──────────────────────────────────── */}
          <section id="stepper" className={styles.section}>
            <h2 className={styles.sectionTitle}>Stepper</h2>
            <p className={styles.sectionDesc}>Multi-step navigation indicator for wizards and onboarding flows.</p>
            <DemoBox
              preview={<StepperDemo />}
              tabs={[{ label: 'React', code: STEPPER_CODE, filename: 'Stepper.jsx' }]}
            />
          </section>

          <div className={styles.divider} />

          {/* ── UPLOADER ─────────────────────────────────── */}
          <section id="uploader" className={styles.section}>
            <h2 className={styles.sectionTitle}>Uploader</h2>
            <p className={styles.sectionDesc}>Drag-and-drop file upload zone with hover feedback, file type filtering, and size limits.</p>
            <DemoBox
              preview={<UploaderDemo />}
              previewStyle={{ padding: '24px 40px' }}
              tabs={[{ label: 'React', code: UPLOADER_CODE, filename: 'Uploader.jsx' }]}
            />
          </section>

          <footer className={styles.footer}>
            Built with ❤️ from your Figma design · <strong style={{ color: 'var(--purple-500)' }}>Prixma v1.0</strong>
          </footer>
        </main>

        {/* ── TOC ───────────────────────────────────────── */}
        <aside className={styles.toc}>
          <div className={styles.tocTitle}>On this page</div>
          {[
            { href: '#installation', label: 'Installation' },
            { href: '#button', label: 'Button' },
            { href: '#btn-sizes', label: 'Sizes', sub: true },
            { href: '#btn-states', label: 'States', sub: true },
            { href: '#btn-icons', label: 'With Icons', sub: true },
            { href: '#btn-api', label: 'API Reference', sub: true },
            { href: '#input', label: 'Input Field' },
            { href: '#chip', label: 'Chip' },
            { href: '#progress', label: 'Progress Bar' },
            { href: '#stepper', label: 'Stepper' },
            { href: '#uploader', label: 'Uploader' },
          ].map(l => (
            <a key={l.href} className={`${styles.tocLink} ${l.sub ? styles.tocSub : ''}`} href={l.href}>{l.label}</a>
          ))}
        </aside>
      </div>
    </>
  );
}
