'use client';
import { useState } from 'react';
import CodeBlock from './CodeBlock';
import styles from './DemoBox.module.css';

interface Tab { label: string; code: string; filename: string; }
interface DemoBoxProps {
  preview: React.ReactNode;
  tabs: Tab[];
  previewStyle?: React.CSSProperties;
}

export default function DemoBox({ preview, tabs, previewStyle }: DemoBoxProps) {
  const [active, setActive] = useState(0);

  return (
    <div className={styles.box}>
      <div className={styles.preview} style={previewStyle}>
        {preview}
      </div>

      {tabs.length > 1 && (
        <div className={styles.tabs}>
          {tabs.map((t, i) => (
            <button
              key={t.label}
              className={`${styles.tab} ${i === active ? styles.activeTab : ''}`}
              onClick={() => setActive(i)}
            >
              {t.label}
            </button>
          ))}
        </div>
      )}

      <CodeBlock
        code={tabs[active].code}
        filename={tabs[active].filename}
      />
    </div>
  );
}
