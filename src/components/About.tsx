import styles from './About.module.css';

export default function About() {
  return (
    <section id="about" className={`section ${styles.about}`}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.content}>
            <span className={styles.tag}>About Us</span>
            <h2 className={styles.heading}>
              We believe great software should be accessible to everyone
            </h2>
            <p className={styles.text}>
              NexLaunch was founded in 2022 by a team of developers who were tired of
              spending weeks on boilerplate. We built the platform we always wished existed —
              one that lets you focus on your unique value proposition from day one.
            </p>
            <p className={styles.text}>
              Today, thousands of developers and startups trust NexLaunch to power their
              products. From solo indie hackers to Series A startups, we provide the
              infrastructure so you can ship with confidence.
            </p>
            <div className={styles.highlights}>
              <div className={styles.highlight}>
                <span className={styles.highlightIcon}>✓</span>
                <span>Open-source core components</span>
              </div>
              <div className={styles.highlight}>
                <span className={styles.highlightIcon}>✓</span>
                <span>Transparent pricing, no hidden fees</span>
              </div>
              <div className={styles.highlight}>
                <span className={styles.highlightIcon}>✓</span>
                <span>24/7 community & premium support</span>
              </div>
            </div>
          </div>
          <div className={styles.visual}>
            <div className={styles.visualCard}>
              <div className={styles.visualStat}>
                <span className={styles.visualNum}>2022</span>
                <span className={styles.visualLabel}>Founded</span>
              </div>
              <div className={styles.visualDivider} />
              <div className={styles.visualStat}>
                <span className={styles.visualNum}>15</span>
                <span className={styles.visualLabel}>Team Members</span>
              </div>
              <div className={styles.visualDivider} />
              <div className={styles.visualStat}>
                <span className={styles.visualNum}>40+</span>
                <span className={styles.visualLabel}>Countries</span>
              </div>
            </div>
            <div className={styles.visualBlob} />
          </div>
        </div>
      </div>
    </section>
  );
}
