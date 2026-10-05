import React from 'react';

// تعريف الـ styles في البداية لتجنب خطأ الـ ReferenceError
const linkStyle = {
  color: 'var(--text-secondary)',
  textDecoration: 'none',
  fontWeight: '500',
  fontSize: '0.95rem',
};

export default function Navbar({ darkMode, toggleDarkMode }) {
  return (
    <header
      style={{
        backgroundColor: 'var(--bg-surface)',
        borderBottom: '1px solid var(--border-color)',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        padding: '16px 0',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            fontSize: '1.25rem',
            fontWeight: '700',
            color: 'var(--text-primary)',
          }}
        >
          Ahmad <span style={{ color: 'var(--accent-color)' }}>.dev</span>
        </div>

        <nav style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <a href="#about" style={linkStyle}>
            About
          </a>
          <a href="#projects" style={linkStyle}>
            Projects
          </a>
          <a href="#skills" style={linkStyle}>
            Skills
          </a>

          {/* زر تبديل الوضع (Light / Dark) */}
          <button
            onClick={toggleDarkMode}
            style={{
              backgroundColor: 'var(--accent-light)',
              color: 'var(--accent-color)',
              border: '1px solid var(--border-color)',
              padding: '8px 14px',
              borderRadius: '20px',
              cursor: 'pointer',
              fontWeight: '600',
              fontSize: '0.85rem',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            {darkMode ? '☀️ Light' : '🌙 Dark'}
          </button>
        </nav>
      </div>
    </header>
  );
}
