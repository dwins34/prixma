'use client';
import { useEffect, useState } from 'react';
import styles from './Sidebar.module.css';

const nav = [
  {
    label: 'Getting Started',
    items: [
      { href: '#installation', label: 'Installation' },
      { href: '#usage', label: 'Usage' },
      { href: '#tokens', label: 'Design Tokens' },
    ],
  },
  {
    label: 'Components',
    items: [
      { href: '#button',   label: 'Button',       badge: '4 variants' },
      { href: '#input',    label: 'Input Field' },
      { href: '#chip',     label: 'Chip',         isNew: true },
      { href: '#progress', label: 'Progress Bar' },
      { href: '#stepper',  label: 'Stepper' },
      { href: '#uploader', label: 'Uploader' },
    ],
  },
  {
    label: 'Resources',
    items: [
      { href: 'https://figma.com/design/4THILk0BZ2HLgL2dBU7uBJ', label: 'Figma Design File', external: true },
      { href: '#', label: 'Changelog' },
      { href: '#', label: 'Contributing' },
    ],
  },
];

export default function Sidebar() {
  const [active, setActive] = useState('#button');

  useEffect(() => {
    const handler = () => {
      const ids = ['installation','button','input','chip','progress','stepper','uploader'];
      let cur = '';
      ids.forEach(id => {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) cur = '#' + id;
      });
      if (cur) setActive(cur);
    };
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <nav className={styles.sidebar}>
      <div className={styles.brandTag}>
        <span className={styles.brandDot} />
        prixma.design
      </div>
      {nav.map(section => (
        <div className={styles.section} key={section.label}>
          <div className={styles.label}>{section.label}</div>
          {section.items.map(item => (
            <a
              key={item.href}
              className={`${styles.link} ${active === item.href ? styles.active : ''}`}
              href={item.href}
              target={item.external ? '_blank' : undefined}
              rel={item.external ? 'noopener noreferrer' : undefined}
              onClick={() => setActive(item.href)}
            >
              {item.label}
              {item.badge && <span className={styles.badge}>{item.badge}</span>}
              {item.isNew && <span className={styles.newBadge}>new</span>}
            </a>
          ))}
        </div>
      ))}
    </nav>
  );
}
