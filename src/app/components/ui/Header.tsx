'use client';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <a className={styles.logo} href="#">
        <div className={styles.logoIcon}>Px</div>
        <span className={styles.logoName}>Prixma</span>
        <span className={styles.version}>v1.0</span>
      </a>

      <div className={styles.search}>
        <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="9" cy="9" r="6"/><path d="m15 15 3 3"/>
        </svg>
        <span>Search components…</span>
        <kbd>⌘K</kbd>
      </div>

      <div className={styles.actions}>
        <a
          className={styles.actionBtn}
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub"
        >
          <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.66-.22.66-.48v-1.69C6.73 19.91 6.14 18 6.14 18c-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.6 9.6 0 0 1 12 6.84a9.6 9.6 0 0 1 2.5.34c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.16.58.67.48A10 10 0 0 0 22 12c0-5.52-4.48-10-10-10z"/>
          </svg>
        </a>
        <a
          className={styles.actionBtn}
          href="https://figma.com/design/4THILk0BZ2HLgL2dBU7uBJ"
          target="_blank"
          rel="noopener noreferrer"
          title="Figma"
        >
          <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
            <path d="M15.5 12a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z"/>
            <path d="M8.5 2H12A3.5 3.5 0 0 1 12 9H8.5A3.5 3.5 0 0 1 8.5 2zM8.5 9H12a3.5 3.5 0 0 1 0 7H8.5a3.5 3.5 0 0 1 0-7zM8.5 16H12a3.5 3.5 0 0 1-3.5 3.5A3.5 3.5 0 0 1 5 16H5a3.5 3.5 0 0 1 3.5-3.5v0zM12 2A3.5 3.5 0 1 1 15.5 5.5H12V2z"/>
          </svg>
        </a>
      </div>
    </header>
  );
}
