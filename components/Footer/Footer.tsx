import { Logo } from '@/components/Logo/Logo';
import { footerColumns } from '@/content/navigation';
import styles from './Footer.module.scss';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <Logo className={styles.logo} />
          <p className={styles.about}>
            Social media validation business model canvas graphical user interface launch party
            creative facebook iPad twitter.
          </p>
        </div>

        <nav className={styles.columns} aria-label="Footer">
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h2 className={styles.heading}>{column.title}</h2>
              <ul className={styles.links}>
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href}>{link.label}</a>
                    {link.badge && <span className={styles.badge}>{link.badge}</span>}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        <p className={styles.copyright}>All rights reserved.</p>
      </div>
    </footer>
  );
}
