import { ChevronDown, Globe } from 'lucide-react';

const footerLinks = [
  ['FAQ', 'Help Center', 'Account', 'Media Center'],
  ['Investor Relations', 'Jobs', 'Netflix Shop', 'Redeem Gift Cards'],
  ['Buy Gift Cards', 'Ways to Watch', 'Terms of Use', 'Privacy'],
  ['Cookie Preferences', 'Corporate Information', 'Contact Us', 'Speed Test'],
  ['Legal Notices', 'Only on Netflix', 'Ad Choices'],
];

export function Footer() {
  return (
    <footer className="bg-black py-12 md:py-16 px-4 md:px-8 lg:px-12 border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        {/* Phone Number */}
        <p className="text-gray-400 mb-8 text-sm md:text-base">
          Questions? Call{' '}
          <a href="tel:0078033218225" className="hover:underline">
            007-803-321-8225
          </a>
        </p>

        {/* Links Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-8">
          {footerLinks.flat().map((link) => (
            <button
              key={link}
              type="button"
              className="text-gray-400 text-sm hover:underline transition-colors text-left"
            >
              {link}
            </button>
          ))}
        </div>

        {/* Language Selector */}
        <div className="mb-4">
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-600 rounded bg-transparent text-gray-400 hover:text-white transition-colors">
            <Globe className="w-4 h-4" />
            <span>English</span>
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>

        {/* Netflix Indonesia */}
        <p className="text-gray-400 text-sm mb-6">Netflix Indonesia</p>

        {/* Copyright */}
        <p className="text-gray-500 text-sm">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
        </p>
      </div>
    </footer>
  );
}
