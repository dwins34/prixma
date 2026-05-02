'use client';
import { useState } from 'react';
import styles from './Header.module.css';

interface HeaderProps {
  activePage?: 'home' | 'components' | 'blog';
}

export default function Header({ activePage = 'home' }: HeaderProps) {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <header className={styles.header}>
      <a className={styles.logo} href="/">
        <div className={styles.logoIcon}>PX</div>
      </a>

      <nav className={styles.nav}>
        <a
          href="/"
          className={`${styles.navLink} ${activePage === 'home' ? styles.navActive : ''} ${hovered === 'home' ? styles.navHovered : ''}`}
          onMouseEnter={() => setHovered('home')}
          onMouseLeave={() => setHovered(null)}
        >
          Home
        </a>
        <a
          href="/components"
          className={`${styles.navLink} ${activePage === 'components' ? styles.navActive : ''} ${hovered === 'components' ? styles.navHovered : ''}`}
          onMouseEnter={() => setHovered('components')}
          onMouseLeave={() => setHovered(null)}
        >
          Components
        </a>
        <a
          href="#blog"
          className={`${styles.navLink} ${hovered === 'blog' ? styles.navHovered : ''}`}
          onMouseEnter={() => setHovered('blog')}
          onMouseLeave={() => setHovered(null)}
        >
          Blog
        </a>
      </nav>

      <a href="/components" className={styles.getStarted}>
        Get started
      </a>
    </header>
  );
}
