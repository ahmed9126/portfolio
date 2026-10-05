import React from 'react';
// استيراد ملف الـ CV مباشرة لضمان الحصول على المسار الصحيح
import resumePdf from '../assets/Ahmed_Salehin_CV.pdf';

export default function Hero() {
  return (
    <section style={{ padding: '80px 0 40px' }}>
      <div className="container">
        <span
          style={{
            backgroundColor: 'var(--accent-light)',
            color: 'var(--accent-color)',
            padding: '6px 14px',
            borderRadius: '20px',
            fontSize: '0.85rem',
            fontWeight: '600',
            display: 'inline-block',
            marginBottom: '16px',
          }}
        >
          Junior Flutter Developer
        </span>

        <h1
          style={{
            fontSize: '2.8rem',
            fontWeight: '800',
            marginBottom: '16px',
            lineHeight: 1.2,
          }}
        >
          Ahmed Salehin Shawky
        </h1>

        <p
          style={{
            fontSize: '1.1rem',
            color: 'var(--text-secondary)',
            maxWidth: '650px',
            lineHeight: 1.6,
          }}
        >
          Junior Flutter Developer with hands-on experience building mobile
          applications using Flutter, Dart, REST APIs, BLoC/Cubit, and Git.
        </p>

        {/* الأزرار الرئيسية */}
        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">
            View Projects
          </a>

          {/* زر تحميل الـ CV المحدث */}
          <a
            href={resumePdf}
            download="Ahmed_Salehin_CV.pdf"
            className="btn btn-secondary"
          >
            Download CV
          </a>

          {/* زر التواصل */}
          <a href="#contact" className="btn btn-outline">
            Contact Me
          </a>
        </div>

        {/* روابط السوشيال المباشرة */}
        <div className="social-links" style={{ marginTop: '24px' }}>
          <a
            href="https://github.com/ahmed9126"
            target="_blank"
            rel="noreferrer"
            style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.95rem' }}
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.95rem' }}
          >
            LinkedIn
          </a>
          <a
            href="mailto:ahmedh9122006@gmail.com"
            style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.95rem' }}
          >
            Email
          </a>
        </div>
      </div>
    </section>
  );
}