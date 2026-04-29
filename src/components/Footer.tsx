import { useState } from 'react';

const Footer = () => {
  const [language, setLanguage] = useState('en-ID');

  const footerLinks = [
    { text: 'FAQ', href: '#' },
    { text: 'Help Center', href: '#' },
    { text: 'Terms of Use', href: '#' },
    { text: 'Privacy', href: '#' },
    { text: 'Cookie Preferences', href: '#' },
    { text: 'Corporate Information', href: '#' },
  ];

  // Definisi warna dan gaya umum agar mudah dikelola
  const textGray = '#737373';

  return (
    <footer style={{
      width: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.75)', // Hitam transparan khas Netflix
      borderTop: '1px solid #333',
      padding: '30px 0 50px 0',
      marginTop: 'auto', // Memastikan footer tetap di bawah
      color: textGray,
      fontFamily: 'sans-serif'
    }}>
      
      {/* Kontainer Utama - Dibatasi lebarnya dan ditaruh di tengah */}
      <div style={{
        maxWidth: '900px',
        margin: '0 auto',
        padding: '0 20px',
        boxSizing: 'border-box'
      }}>
        
        {/* 1. Baris Pertanyaan/Telepon */}
        <p style={{ fontSize: '16px', marginBottom: '30px' }}>
          Questions? Call{' '}
          <a href="tel:007-803-321-8275" style={{ color: textGray, textDecoration: 'none' }}>
            007-803-321-8275 (Toll-Free)
          </a>
        </p>

        {/* 2. Grid Link Footer (4 Kolom) */}
        <ul style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)', // Membagi rata 4 kolom
          gap: '12px 0',
          padding: 0,
          margin: '0 0 30px 0',
          listStyle: 'none',
          fontSize: '13px'
        }}>
          {footerLinks.map((link) => (
            <li key={link.text}>
              <a href={link.href} style={{ 
                color: textGray, 
                textDecoration: 'none' 
              }}>
                {link.text}
              </a>
            </li>
          ))}
        </ul>

        {/* 3. Selector Bahasa yang Dipercantik */}
        <div style={{ position: 'relative', display: 'inline-block' }}>
          {/* Ikon Globe (Posisi Absolut di dalam kotak) */}
          <div style={{
            position: 'absolute',
            left: '12px',
            top: '50%',
            transform: 'translateY(-50%)',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center'
          }}>
            <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor">
              <path d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
              <path d="M12.33 5h-2.12c-.22-1.33-.59-2.52-1.07-3.43a6.5 6.5 0 0 1 3.19 3.43m-3.15 0H6.82c-.2-1.3-.53-2.43-.95-3.26a6.5 6.5 0 0 1 3.3 0c-.42.83-.75 1.96-.95 3.26M4.94 1.57c-.48.91-.85 2.1-1.07 3.43h2.12c.18-1.12.48-2.11.84-2.88a6.5 6.5 0 0 0-1.89-.55M3.6 6c-.06.64-.1 1.3-.1 2s.04 1.36.1 2h3.05V6zm4.15 0v4h3.05c.06-.64.1-1.3.1-2s-.04-1.36-.1-2zm0 5v2.85c.42-.83.75-1.96.95-3.26h2.24a6.5 6.5 0 0 1-3.19 3.41m-1.1 0H4.41a6.5 6.5 0 0 1 3.19-3.41c-.2.9-.53 1.9-.95 3.26M3.33 11c.22 1.33.59 2.52 1.07 3.43a6.5 6.5 0 0 1-1.89-.55c.36-.77.66-1.76.84-2.88h-2.12zM3.1 10c-.06-.64-.1-1.3-.1-2s.04-1.36.1-2H1.05a6.5 6.5 0 0 0 0 4zm11.85 0a6.5 6.5 0 0 0 0-4h-2.05c.06.64.1 1.3.1 2s-.04 1.36-.1 2z" />
            </svg>
          </div>

          {/* Tag Select */}
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            style={{
              backgroundColor: 'rgba(0,0,0,0.4)',
              color: 'white',
              border: '1px solid #737373',
              borderRadius: '2px',
              padding: '12px 35px 12px 35px',
              fontSize: '14px',
              appearance: 'none', // Menghilangkan panah default browser
              cursor: 'pointer',
              minWidth: '130px'
            }}
          >
            <option value="id-ID" style={{backgroundColor: '#000'}}>Bahasa Indonesia</option>
            <option value="en-ID" style={{backgroundColor: '#000'}}>English</option>
          </select>

          {/* Ikon Panah Bawah (Caret) */}
          <div style={{
            position: 'absolute',
            right: '12px',
            top: '50%',
            transform: 'translateY(-50%)',
            pointerEvents: 'none'
          }}>
            <svg viewBox="0 0 24 24" width="18" height="18" fill="white">
              <path d="M7 10l5 5 5-5z" />
            </svg>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;