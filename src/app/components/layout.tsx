import Header from './ui/Header';
import Sidebar from './ui/Sidebar';
import styles from './docs.module.css';

export default function ComponentsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header activePage="components" />
      <div className={styles.layout}>
        <Sidebar />
        <main className={styles.main}>
          {children}
        </main>
        <aside className={styles.toc} id="toc-aside" />
      </div>
    </>
  );
}
