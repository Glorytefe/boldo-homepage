'use client';

import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/Button/Button';
import { Close, Menu } from '@/components/icons';
import { Logo } from '@/components/Logo/Logo';
import { mainNav } from '@/content/navigation';
import styles from './Navbar.module.scss';

const DESKTOP_QUERY = '(min-width: 1024px)'; // keep in sync with $lg

function NavLinks({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <>
      <ul className={styles.links}>
        {mainNav.map((link) => (
          <li key={link.label}>
            <a href={link.href} className={styles.link} onClick={onNavigate}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
      <Button
        href="#"
        variant="secondary-inverse"
        size="sm"
        className={styles.login}
        onClick={onNavigate}
      >
        Log In
      </Button>
    </>
  );
}

function HomeLink() {
  return (
    <a href="#" aria-label="Boldo home" className={styles.logo}>
      <Logo markColor="#65e4a3" />
    </a>
  );
}

export function Navbar() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const closedByLink = useRef(false);

  const open = () => {
    dialogRef.current?.showModal();
    dialogRef.current?.focus(); // otherwise the logo link gets focus and a ring on touch devices
    setIsOpen(true);
  };
  const close = () => dialogRef.current?.close();
  const closeForLink = () => {
    closedByLink.current = true; // returning focus to the toggle would scroll back to the top
    close();
  };

  useEffect(() => {
    const desktop = window.matchMedia(DESKTOP_QUERY);
    const onChange = () => desktop.matches && dialogRef.current?.close();
    desktop.addEventListener('change', onChange);
    return () => desktop.removeEventListener('change', onChange);
  }, []);

  return (
    <header className={styles.header}>
      <nav className={styles.nav} aria-label="Main">
        <HomeLink />

        <div className={styles.desktopMenu}>
          <NavLinks />
        </div>

        <button
          ref={toggleRef}
          type="button"
          className={styles.toggle}
          aria-label="Open menu"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          onClick={open}
        >
          <Menu />
        </button>
      </nav>

      <dialog
        ref={dialogRef}
        id="mobile-menu"
        aria-label="Menu"
        tabIndex={-1}
        className={styles.dialog}
        onClose={() => {
          setIsOpen(false);
          if (!closedByLink.current) toggleRef.current?.focus();
          closedByLink.current = false;
        }}
      >
        <div className={styles.dialogBar}>
          <HomeLink />
          <button type="button" className={styles.toggle} aria-label="Close menu" onClick={close}>
            <Close />
          </button>
        </div>
        <div className={styles.dialogBody}>
          <NavLinks onNavigate={closeForLink} />
        </div>
      </dialog>
    </header>
  );
}
