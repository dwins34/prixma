'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Sidebar.module.css';

const nav = [
  {
    label: 'Getting Started',
    items: [
      { href: '/components/installation', label: 'Installation' },
    ],
  },
  {
    label: 'Components',
    items: [
      { href: '/components/button',   label: 'Button',   badge: '4 variants' },
      { href: '/components/input',    label: 'Input' },
      { href: '/components/checkbox', label: 'Checkbox', isNew: true },
      { href: '/components/chip',     label: 'Chip' },
      { href: '/components/progress', label: 'Progress' },
      { href: '/components/stepper',  label: 'Stepper' },
      { href: '/components/switch',   label: 'Switch' },
      { href: '/components/toggle',   label: 'Toggle',   isNew: true },
      { href: '/components/uploader', label: 'Uploader' },
    ],
  },
  {
    label: 'Resources',
    items: [
      { href: 'https://figma.com', label: 'Figma Design File', external: true },
      { href: '#', label: 'Changelog' },
    ],
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <nav className={styles.sidebar}>
      <div className={styles.brandTag}>
        <span className={styles.brandDot} />
        prixma.design
      </div>

      {nav.map(section => (
        <div className={styles.section} key={section.label}>
          <div className={styles.label}>{section.label}</div>
          {section.items.map(item => {
            const isActive = pathname === item.href;
            const isExternal = 'external' in item && item.external;

            if (isExternal) {
              return (
                <a
                  key={item.href}
                  className={styles.link}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.label}
                </a>
              );
            }

            if (item.href === '#') {
              return (
                <a key={item.href} className={styles.link} href="#">
                  {item.label}
                </a>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`${styles.link} ${isActive ? styles.active : ''}`}
              >
                {item.label}
                {'badge' in item && item.badge && (
                  <span className={styles.badge}>{item.badge}</span>
                )}
                {'isNew' in item && item.isNew && (
                  <span className={styles.newBadge}>new</span>
                )}
              </Link>
            );
          })}
        </div>
      ))}
    </nav>
  );
}
