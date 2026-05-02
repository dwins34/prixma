'use client';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import styles from '../docs.module.css';

interface TocItem {
  href: string;
  label: string;
  sub?: boolean;
}

export default function PageToc({ items }: { items: TocItem[] }) {
  const [active, setActive] = useState(items[0]?.href ?? '');
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    const ids = items.map(i => i.href.replace('#', ''));
    const handler = () => {
      let cur = ids[0];
      ids.forEach(id => {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 100) cur = id;
      });
      setActive('#' + cur);
    };
    window.addEventListener('scroll', handler, { passive: true });
    handler();
    return () => window.removeEventListener('scroll', handler);
  }, [items]);

  const toc = (
    <>
      <div className={styles.tocTitle}>On this page</div>
      {items.map(item => (
        <a
          key={item.href}
          href={item.href}
          className={[styles.tocLink, item.sub ? styles.tocSub : '', active === item.href ? styles.tocLinkActive : ''].join(' ')}
        >
          {item.label}
        </a>
      ))}
    </>
  );

  if (!mounted) return null;
  const target = document.getElementById('toc-aside');
  return target ? createPortal(toc, target) : null;
}
