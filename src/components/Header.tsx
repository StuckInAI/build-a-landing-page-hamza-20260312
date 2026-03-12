'use client';
import { useState } from 'react';
import styles from './Header.module.css';

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'About', href: '#about' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <a href="#" className={styles.logo}>
          <span className={styles.logoIcon}>✦</span>
          <span>NexLaunch</span>
        </a>

        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={styles.navLink}
              onClick={handleNavClick}
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" className={`btn-primary ${styles.navCta}`} onClick={handleNavClick}>
            Get Started
          </a>
        </nav>

        <button
          className={styles.menuBtn}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`${styles.menuBar} ${menuOpen ? styles.menuBarOpen1 : ''}`} />
          <span className={`${styles.menuBar} ${menuOpen ? styles.menuBarOpen2 : ''}`} />
          <span className={`${styles.menuBar} ${menuOpen ? styles.menuBarOpen3 : ''}`} />
        </button>
      </div>
    </header>
  );
}
