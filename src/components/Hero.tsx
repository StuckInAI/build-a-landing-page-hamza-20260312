import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.badge}>🚀 Now in Public Beta</div>
        <h1 className={styles.heading}>
          Launch Your Product
          <span className={styles.headingAccent}> Faster Than Ever</span>
        </h1>
        <p className={styles.subheading}>
          NexLaunch is the all-in-one platform that helps startups and developers
          ship beautiful products with confidence. Stop wasting time on boilerplate
          and focus on what matters.
        </p>
        <div className={styles.actions}>
          <a href="#contact" className="btn-primary">Start for Free</a>
          <a href="#features" className="btn-secondary">See Features</a>
        </div>
        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statNumber}>10K+</span>
            <span className={styles.statLabel}>Developers</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statNumber}>500+</span>
            <span className={styles.statLabel}>Products Shipped</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statNumber}>99.9%</span>
            <span className={styles.statLabel}>Uptime</span>
          </div>
        </div>
      </div>
      <div className={styles.bgBlob1} />
      <div className={styles.bgBlob2} />
    </section>
  );
}
