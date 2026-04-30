<<<<<<< HEAD
import { ChevronDown, Globe } from 'lucide-react';

const footerLinks = [
  ['FAQ', 'Account', 'Media Center', 'Investor Relations', 'Jobs', 'Ways to Watch', 'Cookie Preferences'],
  ['Help Center', 'Corporate Information', 'Contact Us', 'Speed Test', 'Netflix Shop', 'Terms of Use', 'Ad Choices'],
  ['Gift Cards', 'Investor Relations', 'Media Center', 'Only on Netflix', 'Redeem Gift Cards', 'Privacy'],
  ['Buy Gift Cards', 'Jobs', 'Ways to Watch', 'Terms of Use', 'Legal Notices'],
];

export function Footer() {
  return (
    <footer className="netflix-footer">
      <div className="footer-container">
        <p className="footer-phone">
          Questions? Call{' '}
          <a href="tel:0078033218225">007-803-321-8225</a>
        </p>

        <div className="footer-links-grid">
          {footerLinks.map((column, index) => (
            <div className="footer-column" key={index}>
              {column.map((link) => (
                <a href="#" key={link}>
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>

        <button className="footer-language">
          <Globe size={18} />
          <span>English</span>
          <ChevronDown size={18} />
        </button>

        <p className="footer-country">Netflix Indonesia</p>
      </div>
    </footer>
  );
}
=======
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

  const netflixGray = '#737373';

  return (
    <footer style={{
      width: '100%',
      // Efek "Block" abu-abu gelap agar kontras dengan bagian atas
      backgroundColor: '#101010', 
      borderTop: '1px solid #333', 
      padding: '50px 0',
      marginTop: 'auto',
      color: netflixGray,
      fontFamily: 'Arial, sans-serif',
    }}>
      
      {/* Kontainer Utama (Menengah) */}
      <div style={{
        maxWidth: '900px',
        margin: '0 auto',
        padding: '0 24px',
        boxSizing: 'border-box'
      }}>
        
        <p style={{ fontSize: '16px', marginBottom: '30px' }}>
          Questions? Call{' '}
          <a href="tel:007-803-321-8275" style={{ color: netflixGray, textDecoration: 'none' }}>
            007-803-321-8275 (Toll-Free)
          </a>
        </p>

        {/* Grid Links - 4 Kolom */}
        <ul style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '16px 0',
          padding: 0,
          margin: '0 0 40px 0',
          listStyle: 'none'
        }}>
          {footerLinks.map((link) => (
            <li key={link.text}>
              <a href={link.href} style={{ 
                color: netflixGray, 
                textDecoration: 'none',
                fontSize: '13px'
              }}>
                {link.text}
              </a>
            </li>
          ))}
        </ul>

        {/* Language Selector Box */}
        <div style={{ position: 'relative', display: 'inline-block' }}>
          
          {/* IKON TRANSLATE/GLOBE (Fixed Version) */}
          <div style={{
            position: 'absolute',
            left: '12px',
            top: '50%',
            transform: 'translateY(-50%)',
            display: 'flex',
            alignItems: 'center',
            pointerEvents: 'none',
            color: 'white'
          }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
          </div>

          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            style={{
              backgroundColor: 'rgba(0,0,0,0.4)',
              color: 'white',
              border: '1px solid #737373',
              borderRadius: '2px',
              padding: '10px 35px 10px 40px', 
              fontSize: '14px',
              appearance: 'none',
              cursor: 'pointer',
              minWidth: '140px',
              outline: 'none'
            }}
          >
            <option value="id-ID" style={{backgroundColor: '#000'}}>Bahasa Indonesia</option>
            <option value="en-ID" style={{backgroundColor: '#000'}}>English</option>
          </select>

          {/* Icon Panah Down */}
          <div style={{
            position: 'absolute',
            right: '10px',
            top: '50%',
            transform: 'translateY(-50%)',
            pointerEvents: 'none',
            color: 'white'
          }}>
            <svg width="10" height="10" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7 10l5 5 5-5z" />
            </svg>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
>>>>>>> main
