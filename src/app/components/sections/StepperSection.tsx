'use client';
import { useState } from 'react';
import Button from '../ui/Button';
import { Stepper, Step } from '../ui/Stepper';
import DemoBox from '../ui/DemoBox';
import Playground from '../ui/Playground';
import PageToc from '../ui/PageToc';
import styles from '../docs.module.css';

const DEMO_CODE_REACT = `import { Stepper } from 'prixma';

const steps = [
  { title: 'Account',  subheader: 'Your profile details', status: 'completed' },
  { title: 'Payment',  subheader: 'Billing information',  status: 'active' },
  { title: 'Review',   subheader: 'Final confirmation',   status: 'default' },
];

<Stepper steps={steps} variant="number" size="md" />`;

const DEMO_CODE_NEXTJS = `'use client';
import { useState } from 'react';
import { Stepper } from 'prixma';

const STEPS = ['Account', 'Payment', 'Review'];

export default function Page() {
  const [current, setCurrent] = useState(1);
  const steps = STEPS.map((title, i) => ({
    title,
    status: i < current ? 'completed' : i === current ? 'active' : 'default',
  }));
  return (
    <>
      <Stepper steps={steps} variant="number" size="md" />
      <button onClick={() => setCurrent(c => Math.min(c + 1, STEPS.length - 1))}>
        Next
      </button>
    </>
  );
}`;

const DEMO_CODE_JS = `<div class="fp-stepper fp-stepper--horizontal fp-stepper--md">
  <div class="fp-step fp-step--completed">
    <div class="fp-step__indicator">✓</div>
    <div class="fp-step__content">
      <span class="fp-step__title">Account</span>
    </div>
    <div class="fp-step__connector"></div>
  </div>
  <div class="fp-step fp-step--active">
    <div class="fp-step__indicator">2</div>
    <div class="fp-step__content">
      <span class="fp-step__title">Payment</span>
    </div>
  </div>
</div>`;

function StepperDemo() {
  const [step, setStep] = useState(2);
  const steps: Step[] = [
    { title: 'Account', subheader: 'Your profile details', status: step > 1 ? 'completed' : step === 1 ? 'active' : 'default' },
    { title: 'Payment', subheader: 'Billing information',  status: step > 2 ? 'completed' : step === 2 ? 'active' : 'default' },
    { title: 'Review',  subheader: 'Final confirmation',   status: step > 3 ? 'completed' : step === 3 ? 'active' : 'default' },
  ];
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 40, width: '100%' }}>
      <div>
        <p style={{ fontSize: 13, color: 'var(--text-secondary)', marginBottom: 16 }}>Horizontal (Medium)</p>
        <Stepper steps={steps} variant="number" size="md" />
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40 }}>
        <div>
          <p style={{ fontSize: 13, color: 'var(--text-secondary)', marginBottom: 16 }}>Vertical (Small)</p>
          <Stepper steps={steps} orientation="vertical" size="sm" variant="dot" />
        </div>
        <div>
          <p style={{ fontSize: 13, color: 'var(--text-secondary)', marginBottom: 16 }}>Number (Large)</p>
          <Stepper steps={steps} variant="number" size="lg" />
        </div>
      </div>
      <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
        <Button variant="secondary" size="md" onClick={() => setStep(s => Math.max(1, s - 1))}>Previous</Button>
        <Button variant="primary"   size="md" onClick={() => setStep(s => Math.min(3, s + 1))}>Next</Button>
      </div>
    </div>
  );
}

const PROPS = [
  ['steps',       'Step[]',                          '[]',           'Array of step objects'],
  ['orientation', "'horizontal' | 'vertical'",       "'horizontal'", 'Layout direction'],
  ['size',        "'sm' | 'md' | 'lg'",              "'md'",         'Size of step indicators'],
  ['variant',     "'number' | 'dot'",                "'number'",     'Style of the step indicator'],
];

export default function StepperPage() {
  return (
    <>
      <PageToc items={[
        { href: '#overview',   label: 'Overview' },
        { href: '#interactive',label: 'Interactive Demo', sub: true },
        { href: '#playground', label: 'Playground',      sub: true },
        { href: '#api',        label: 'API Reference' },
      ]} />

      <section id="overview" className={styles.section}>
        <h1 className={styles.sectionTitle}>Stepper</h1>
        <p className={styles.sectionDesc}>
          Multi-step navigation indicator for wizards, onboarding flows, and checkout processes.
        </p>
      </section>

      <section id="interactive" className={styles.section}>
        <h2 className={styles.subTitle}>Interactive Demo</h2>
        <p className={styles.sectionDesc}>Click Next / Previous to step through the flow.</p>
        <DemoBox
          preview={<StepperDemo />}
          tabs={[
            { label: 'React',      code: DEMO_CODE_REACT,  filename: 'Stepper.tsx' },
            { label: 'Next.js',    code: DEMO_CODE_NEXTJS, filename: 'page.tsx' },
            { label: 'JavaScript', code: DEMO_CODE_JS,     filename: 'index.html' },
          ]}
        />
      </section>

      <div className={styles.divider} />

      <section id="playground" className={styles.section}>
        <h2 className={styles.subTitle}>Playground</h2>
        <Playground
          componentName="Stepper"
          component={(props) => <Stepper {...props} />}
          defaultProps={{
            steps: [
              { title: 'Personal', subheader: 'Details',  status: 'completed' },
              { title: 'Payment',  subheader: 'Card info', status: 'active' },
              { title: 'Done',     status: 'default' },
            ],
            size: 'md', variant: 'number', orientation: 'horizontal',
          }}
          controls={[
            { name: 'orientation', type: 'select', options: ['horizontal', 'vertical'] },
            { name: 'size',        type: 'select', options: ['sm', 'md', 'lg'] },
            { name: 'variant',     type: 'select', options: ['number', 'dot'] },
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
