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
