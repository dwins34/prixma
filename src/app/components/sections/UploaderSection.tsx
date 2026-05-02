'use client';
import { useState } from 'react';
import DemoBox from '../ui/DemoBox';
import PageToc from '../ui/PageToc';
import styles from '../docs.module.css';

const DEMO_CODE_REACT = `import { Uploader } from 'prixma';

<Uploader
  accept=".png,.jpg,.pdf"
  multiple
  maxSize={10 * 1024 * 1024}
  onUpload={(files) => console.log(files)}
/>`;

const DEMO_CODE_NEXTJS = `'use client';
import { Uploader } from 'prixma';

export default function Page() {
  return (
    <Uploader
      accept=".png,.jpg,.pdf,.svg"
      multiple
      maxSize={10 * 1024 * 1024}
      onUpload={(files) => {
        // handle uploaded files
      }}
    />
  );
}`;

const DEMO_CODE_JS = `<div
  class="fp-uploader"
  id="dropzone"
  ondragover="this.classList.add('fp-uploader--drag-over'); event.preventDefault()"
  ondragleave="this.classList.remove('fp-uploader--drag-over')"
  ondrop="handleDrop(event)"
>
  <p>Drop files here or <span>browse</span></p>
</div>

<script>
function handleDrop(e) {
  e.preventDefault();
  const files = [...e.dataTransfer.files];
  console.log(files);
}
</script>`;

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
        setDropped(Array.from(e.dataTransfer.files).map(f => f.name));
      }}
    >
      {dropped.length > 0 ? (
        <>
          <div style={{ fontSize: 32, marginBottom: 12 }}>✅</div>
          <div style={{ fontWeight: 600, fontSize: 15 }}>{dropped.length} file{dropped.length > 1 ? 's' : ''} selected</div>
          <div style={{ fontSize: 13, color: 'var(--text-secondary)' }}>{dropped.join(', ')}</div>
          <button onClick={() => setDropped([])} style={{ marginTop: 12, fontSize: 12, color: 'var(--purple-500)', background: 'none', border: 'none', cursor: 'pointer' }}>Clear</button>
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

const PROPS = [
  ['accept',    'string',  '—',    'Accepted file types e.g. ".png,.jpg"'],
  ['multiple',  'boolean', 'false','Allow multiple file selection'],
  ['maxSize',   'number',  '—',    'Max file size in bytes'],
  ['onUpload',  '(files: File[]) => void','—','Called when files are selected/dropped'],
  ['disabled',  'boolean', 'false','Disables the upload zone'],
];

export default function UploaderPage() {
  return (
    <>
      <PageToc items={[
        { href: '#overview', label: 'Overview' },
        { href: '#demo',     label: 'Demo', sub: true },
        { href: '#api',      label: 'API Reference' },
      ]} />

      <section id="overview" className={styles.section}>
        <h1 className={styles.sectionTitle}>Uploader</h1>
        <p className={styles.sectionDesc}>
          Drag-and-drop file upload zone with hover feedback, file type filtering, size validation, and multi-file support.
        </p>
      </section>

      <section id="demo" className={styles.section}>
        <h2 className={styles.subTitle}>Demo</h2>
        <p className={styles.sectionDesc}>Try dropping a file onto the zone below.</p>
        <DemoBox
          preview={<UploaderDemo />}
          tabs={[
            { label: 'React',      code: DEMO_CODE_REACT,  filename: 'Uploader.tsx' },
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
