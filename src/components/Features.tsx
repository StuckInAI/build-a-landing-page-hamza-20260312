import styles from './Features.module.css';

const features = [
  {
    icon: '⚡',
    title: 'Blazing Fast',
    description:
      'Built on Next.js 14 with server-side rendering and edge optimization for unmatched performance scores.',
  },
  {
    icon: '🔒',
    title: 'Secure by Default',
    description:
      'Enterprise-grade security with built-in authentication, CSRF protection, and encrypted data storage.',
  },
  {
    icon: '📦',
    title: 'Ready to Deploy',
    description:
      'Docker-ready configuration with multi-stage builds so you can ship to any cloud provider in minutes.',
  },
  {
    icon: '🎨',
    title: 'Fully Customizable',
    description:
      'Clean, modular CSS architecture that makes theming and branding a breeze with CSS variables.',
  },
  {
    icon: '📊',
    title: 'Analytics Built-in',
    description:
      'Track user behavior, form submissions, and engagement metrics right out of the box with zero setup.',
  },
  {
    icon: '🌍',
    title: 'Global CDN',
    description:
      'Content delivered from 200+ edge locations worldwide ensuring sub-100ms load times for every user.',
  },
];

export default function Features() {
  return (
    <section id="features" className={`section ${styles.features}`}>
      <div className="container">
        <h2 className="section-title">Everything You Need</h2>
        <p className="section-subtitle">
          A complete toolkit to build, launch, and scale your product without the headache.
        </p>
        <div className={styles.grid}>
          {features.map((feature) => (
            <div key={feature.title} className={styles.card}>
              <div className={styles.cardIcon}>{feature.icon}</div>
              <h3 className={styles.cardTitle}>{feature.title}</h3>
              <p className={styles.cardDesc}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
