import styles from './Testimonials.module.css';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'CTO at Flowbase',
    avatar: 'SC',
    color: '#6366f1',
    quote:
      '"NexLaunch cut our time-to-production in half. The boilerplate is so clean and well-structured that onboarding new devs is a breeze. Absolutely recommend it to any team."',
  },
  {
    name: 'Marcus Rivera',
    role: 'Indie Hacker & Founder',
    avatar: 'MR',
    color: '#8b5cf6',
    quote:
      '"I launched my SaaS in 3 weeks instead of 3 months. The Docker setup worked perfectly on my first deploy. This is the platform I\'ve been dreaming about."',
  },
  {
    name: 'Priya Sharma',
    role: 'Lead Engineer at DataSync',
    avatar: 'PS',
    color: '#a78bfa',
    quote:
      '"The code quality and architecture decisions are top-notch. It\'s clear the team has production experience. Our engineers love working with NexLaunch every day."',
  },
  {
    name: 'James O\'Brien',
    role: 'Product Manager at NovaCo',
    avatar: 'JO',
    color: '#7c3aed',
    quote:
      '"Our non-technical co-founders can finally understand the codebase. The structure is logical, documentation is excellent, and support is incredibly responsive."',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className={`section ${styles.testimonials}`}>
      <div className="container">
        <h2 className="section-title">Loved by Developers</h2>
        <p className="section-subtitle">
          Don&apos;t just take our word for it — hear from the teams shipping with NexLaunch.
        </p>
        <div className={styles.grid}>
          {testimonials.map((t) => (
            <div key={t.name} className={styles.card}>
              <div className={styles.stars}>★★★★★</div>
              <p className={styles.quote}>{t.quote}</p>
              <div className={styles.author}>
                <div
                  className={styles.avatar}
                  style={{ background: t.color }}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className={styles.authorName}>{t.name}</div>
                  <div className={styles.authorRole}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
