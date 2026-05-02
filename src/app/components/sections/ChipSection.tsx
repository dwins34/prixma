'use client';
import { Chip } from '../ui/Chip';
import DemoBox from '../ui/DemoBox';
import Playground from '../ui/Playground';
import PageToc from '../ui/PageToc';
import styles from '../docs.module.css';

const VARIANTS_CODE_REACT = `import { Chip } from 'prixma';

<Chip variant="default">Default</Chip>
<Chip variant="purple" dot>Active</Chip>
<Chip variant="green" dot>Success</Chip>
<Chip variant="red" dot>Error</Chip>`;

const VARIANTS_CODE_NEXTJS = `'use client';
import { Chip } from 'prixma';

export default function Page() {
  return (
    <div style={{ display: 'flex', gap: 8 }}>
      <Chip variant="default">Label</Chip>
      <Chip variant="purple" dot>Active</Chip>
      <Chip variant="green" dot>Published</Chip>
      <Chip variant="red" dot>Error</Chip>
    </div>
  );
}`;

const VARIANTS_CODE_JS = `<span class="fp-chip">Default</span>
<span class="fp-chip fp-chip--purple">
  <span class="fp-chip__dot"></span>
  Active
</span>
<span class="fp-chip fp-chip--green">
  <span class="fp-chip__dot"></span>
  Success
</span>
<span class="fp-chip fp-chip--red">
  <span class="fp-chip__dot"></span>
  Error
</span>`;

const PROPS = [
  ['variant',  "'default' | 'purple' | 'green' | 'red'", "'default'", 'Color variant'],
  ['dot',      'boolean', 'false', 'Shows a colored status dot before the label'],
  ['children', 'ReactNode', '—',  'Label content'],
];

export default function ChipPage() {
  return (
    <>
      <PageToc items={[
        { href: '#overview',  label: 'Overview' },
        { href: '#playground',label: 'Playground', sub: true },
        { href: '#variants',  label: 'Variants',   sub: true },
        { href: '#api',       label: 'API Reference' },
      ]} />

      <section id="overview" className={styles.section}>
        <h1 className={styles.sectionTitle}>Chip</h1>
        <p className={styles.sectionDesc}>
          Compact labels for status, tags, categories, or filters. Use the dot prop to add a colored status indicator.
        </p>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          <Chip variant="default">Default</Chip>
          <Chip variant="purple" dot>Active</Chip>
          <Chip variant="green"  dot>Success</Chip>
          <Chip variant="red"    dot>Error</Chip>
        </div>
      </section>

      <section id="playground" className={styles.section}>
        <h2 className={styles.subTitle}>Playground</h2>
        <Playground
          componentName="Chip"
          component={(props) => <Chip {...props}>{props.children}</Chip>}
          defaultProps={{ children: 'Active Status', variant: 'purple', dot: true }}
          controls={[
            { name: 'variant',  type: 'select', options: ['default', 'purple', 'green', 'red'] },
            { name: 'children', type: 'text',   label: 'Label' },
            { name: 'dot',      type: 'boolean' },
          ]}
        />
      </section>

      <div className={styles.divider} />

      <section id="variants" className={styles.section}>
        <h2 className={styles.subTitle}>Variants</h2>
        <p className={styles.sectionDesc}>Four semantic color variants for different status contexts.</p>
        <DemoBox
          preview={
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
              <Chip variant="default">Default</Chip>
              <Chip variant="purple" dot>Active</Chip>
              <Chip variant="green"  dot>Success</Chip>
              <Chip variant="red"    dot>Error</Chip>
            </div>
          }
          tabs={[
            { label: 'React',      code: VARIANTS_CODE_REACT,  filename: 'Chip.tsx' },
            { label: 'Next.js',    code: VARIANTS_CODE_NEXTJS, filename: 'page.tsx' },
            { label: 'JavaScript', code: VARIANTS_CODE_JS,     filename: 'index.html' },
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
