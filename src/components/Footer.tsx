import styles from './Footer.module.css';

const footerLinks = [
  { label: 'Features', href: '#features' },
  { label: 'About', href: '#about' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

const socialLinks = [
  { label: 'Twitter', href: '#', icon: '𝕏' },
  { label: 'GitHub', href: '#', icon: '⌥' },
  { label: 'LinkedIn', href: '#', icon: 'in' },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <a href="#" className={styles.logo}>
              <span className={styles.logoIcon}>✦</span>
              <span>NexLaunch</span>
            </a>
            <p className={styles.tagline}>
              The fastest way to ship production-ready Next.js apps.
            </p>
          </div>
          <nav className={styles.nav}>
            <span className={styles.navTitle}>Navigation</span>
            {footerLinks.map((link) => (
              <a key={link.href} href={link.href} className={styles.navLink}>
                {link.label}
              </a>
            ))}
          </nav>
          <div className={styles.social}>
            <span className={styles.navTitle}>Follow Us</span>
            <div className={styles.socialLinks}>
              {socialLinks.map((s) => (
                <a key={s.label} href={s.href} aria-label={s.label} className={styles.socialLink}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {year} NexLaunch. All rights reserved.
          </p>
          <div className={styles.legal}>
            <a href="#" className={styles.legalLink}>Privacy Policy</a>
            <a href="#" className={styles.legalLink}>Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
