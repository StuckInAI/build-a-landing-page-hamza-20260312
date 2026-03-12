import styles from './CallToAction.module.css';

export default function CallToAction() {
  return (
    <section id="cta" className={`section ${styles.cta}`}>
      <div className="container">
        <div className={styles.card}>
          <div className={styles.blob1} />
          <div className={styles.blob2} />
          <div className={styles.content}>
            <h2 className={styles.heading}>
              Ready to ship your next big idea?
            </h2>
            <p className={styles.text}>
              Join thousands of developers and startups who are already building
              faster with NexLaunch. Start free — no credit card required.
            </p>
            <div className={styles.actions}>
              <a href="#contact" className={styles.btnWhite}>
                Get Started Free
              </a>
              <a href="#features" className={styles.btnOutline}>
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
