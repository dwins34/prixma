'use client';
import { useState } from 'react';
import styles from './CodeBlock.module.css';

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
}

export default function CodeBlock({ code, filename }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  };

  return (
    <div className={styles.wrap}>
      {filename && (
        <div className={styles.header}>
          <span className={styles.filename}>{filename}</span>
          <button className={styles.copyBtn} onClick={handleCopy}>
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </div>
      )}
      <pre className={styles.pre}>
        <code>{code.trim()}</code>
      </pre>
    </div>
  );
}
