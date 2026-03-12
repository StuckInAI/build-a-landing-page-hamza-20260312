'use client';
import { useState, FormEvent } from 'react';
import styles from './ContactForm.module.css';

interface FormState {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [serverMsg, setServerMsg] = useState('');

  const validate = (): FormErrors => {
    const errs: FormErrors = {};
    if (!form.name.trim() || form.name.trim().length < 2) {
      errs.name = 'Name must be at least 2 characters.';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email.trim() || !emailRegex.test(form.email.trim())) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!form.message.trim() || form.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters.';
    }
    return errs;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setStatus('loading');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus('success');
        setServerMsg(data.message);
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
        setServerMsg(data.error || 'Something went wrong.');
      }
    } catch {
      setStatus('error');
      setServerMsg('Network error. Please try again.');
    }
  };

  return (
    <section id="contact" className={`section ${styles.contact}`}>
      <div className="container">
        <h2 className="section-title">Get in Touch</h2>
        <p className="section-subtitle">
          Have a question or ready to get started? Send us a message and we&apos;ll get
          back to you within 24 hours.
        </p>
        <div className={styles.formWrap}>
          {status === 'success' ? (
            <div className={styles.successBox}>
              <div className={styles.successIcon}>✓</div>
              <h3>Message Sent!</h3>
              <p>{serverMsg}</p>
              <button
                className="btn-primary"
                onClick={() => setStatus('idle')}
              >
                Send Another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className={styles.form}>
              <div className={styles.row}>
                <div className={styles.field}>
                  <label htmlFor="name" className={styles.label}>Full Name</label>
                  <input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                  {errors.name && <span className={styles.error}>{errors.name}</span>}
                </div>
                <div className={styles.field}>
                  <label htmlFor="email" className={styles.label}>Email Address</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                  {errors.email && <span className={styles.error}>{errors.email}</span>}
                </div>
              </div>
              <div className={styles.field}>
                <label htmlFor="message" className={styles.label}>Message</label>
                <textarea
                  id="message"
                  placeholder="Tell us about your project or ask us anything..."
                  rows={5}
                  className={`${styles.input} ${styles.textarea} ${errors.message ? styles.inputError : ''}`}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
                {errors.message && <span className={styles.error}>{errors.message}</span>}
              </div>
              {status === 'error' && (
                <div className={styles.errorBox}>{serverMsg}</div>
              )}
              <button
                type="submit"
                className={`btn-primary ${styles.submitBtn}`}
                disabled={status === 'loading'}
              >
                {status === 'loading' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
