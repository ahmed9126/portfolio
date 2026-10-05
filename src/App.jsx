import React, { useState, useEffect } from 'react';
import Navbar from './components/navbar.jsx';
import Hero from './components/hero.jsx';
import './styles/global.css';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--bg-main)' }}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <main>
        {/* قسم المقدمة */}
        <Hero />

        {/* قسم المهارات (Technical Skills) */}
        <section id="skills" style={{ padding: '60px 0' }}>
          <div className="container">
            <h2>Technical Skills</h2>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '24px',
              }}
            >
              <div style={cardStyle}>
                <h3 style={cardTitleStyle}>Core & Frameworks</h3>
                <ul style={listStyle}>
                  <li>Flutter & Dart</li>
                  <li>BLoC / Cubit State Management</li>
                  <li>REST APIs & Dio</li>
                  <li>Clean Architecture & MVVM</li>
                </ul>
              </div>

              <div style={cardStyle}>
                <h3 style={cardTitleStyle}>Tools & Databases</h3>
                <ul style={listStyle}>
                  <li>Git & GitHub</li>
                  <li>Firebase & Firestore</li>
                  <li>Hive & SQFlite</li>
                  <li>Android Studio / VS Code</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* قسم المشاريع (Featured Projects) */}
        <section id="projects" style={{ padding: '60px 0' }}>
          <div className="container">
            <h2>Featured Projects</h2>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '24px',
              }}
            >
              {/* مشروع 1: FindWork */}
              <div style={cardStyle}>
                <h3 style={cardTitleStyle}>FindWork Flutter</h3>
                <p
                  style={{
                    color: 'var(--text-secondary)',
                    fontSize: '0.95rem',
                    marginBottom: '16px',
                    lineHeight: 1.6,
                  }}
                >
                  Contributed to a job-search application. Developed candidate,
                  job, and company-related screens with localization, theming,
                  responsive UI, and reusable widgets.
                </p>
                <div
                  style={{
                    display: 'flex',
                    gap: '8px',
                    flexWrap: 'wrap',
                    marginBottom: '16px',
                  }}
                >
                  <span style={tagStyle}>Flutter</span>
                  <span style={tagStyle}>Dart</span>
                  <span style={tagStyle}>Responsive UI</span>
                  <span style={tagStyle}>Localization</span>
                </div>
                <a
                  href="https://github.com/ahmed9126"
                  target="_blank"
                  rel="noreferrer"
                  style={linkStyle}
                >
                  GitHub Repo →
                </a>
              </div>

              {/* مشروع 2: LeoClinic */}
              <div style={cardStyle}>
                <h3 style={cardTitleStyle}>LeoClinic Flutter</h3>
                <p
                  style={{
                    color: 'var(--text-secondary)',
                    fontSize: '0.95rem',
                    marginBottom: '16px',
                    lineHeight: 1.6,
                  }}
                >
                  Contributed to a team-based medical mobile application.
                  Integrated user authentication and REST APIs using BLoC/Cubit,
                  Dio, and GoRouter.
                </p>
                <div
                  style={{
                    display: 'flex',
                    gap: '8px',
                    flexWrap: 'wrap',
                    marginBottom: '16px',
                  }}
                >
                  <span style={tagStyle}>Flutter</span>
                  <span style={tagStyle}>BLoC / Cubit</span>
                  <span style={tagStyle}>Dio</span>
                  <span style={tagStyle}>GoRouter</span>
                </div>
                <a
                  href="https://github.com/ahmed9126"
                  target="_blank"
                  rel="noreferrer"
                  style={linkStyle}
                >
                  GitHub Repo →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* قسم التواصل (Get In Touch) */}
        <section
          id="contact"
          style={{ padding: '60px 0 80px', textAlign: 'center' }}
        >
          <div className="container" style={{ maxWidth: '600px' }}>
            <h2>Get In Touch</h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}>
              I am currently open for Flutter developer opportunities and
              freelance projects. Feel free to reach out!
            </p>
            <a
              href="mailto:ahmedh9122006@gmail.com"
              className="btn-primary"
              style={{ textDecoration: 'none', display: 'inline-block' }}
            >
              Send Email
            </a>
          </div>
        </section>
      </main>

      {/* الفوتر */}
      <footer
        style={{
          borderTop: '1px solid var(--border-color)',
          padding: '24px 0',
          textAlign: 'center',
          backgroundColor: 'var(--bg-surface)',
          color: 'var(--text-secondary)',
          fontSize: '0.9rem',
        }}
      >
        <div className="container">
          <p>
            © {new Date().getFullYear()} Ahmed Salehin. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

const cardStyle = {
  backgroundColor: 'var(--bg-surface)',
  border: '1px solid var(--border-color)',
  borderRadius: '12px',
  padding: '24px',
  boxShadow: 'var(--shadow-sm)',
};

const cardTitleStyle = {
  fontSize: '1.2rem',
  fontWeight: '700',
  color: 'var(--text-primary)',
  marginBottom: '12px',
};

const listStyle = {
  color: 'var(--text-secondary)',
  paddingLeft: '20px',
  lineHeight: '1.8',
  fontSize: '0.95rem',
};

const tagStyle = {
  fontSize: '0.75rem',
  fontWeight: '600',
  padding: '4px 10px',
  borderRadius: '6px',
  backgroundColor: 'var(--accent-light)',
  color: 'var(--accent-color)',
};

const linkStyle = {
  color: 'var(--accent-color)',
  fontWeight: '600',
  textDecoration: 'none',
  fontSize: '0.9rem',
};
