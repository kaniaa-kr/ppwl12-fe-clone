import { useState } from 'react';

const Footer = () => {
  const [language, setLanguage] = useState('en-ID');

  const footerLinks = [
    { text: 'FAQ', href: 'https://help.netflix.com/support/412' },
    { text: 'Help Center', href: 'https://help.netflix.com' },
    { text: 'Terms of Use', href: 'https://help.netflix.com/legal/termsofuse' },
    { text: 'Privacy', href: 'https://help.netflix.com/legal/privacy' },
    { text: 'Cookie Preferences', href: 'https://help.netflix.com/cookies' },
    { text: 'Corporate Information', href: 'https://help.netflix.com/legal/corpinfo' },
  ];

  return (
    <footer className="w-full bg-black/95 py-8 px-6 md:px-12 lg:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Questions Call */}
        <p className="text-netflix-gray text-sm mb-6">
          Questions? Call{' '}
          <a
            href="tel:007-803-321-8275"
            className="text-netflix-gray hover:underline"
          >
            007-803-321-8275 (Toll-Free)
          </a>
        </p>

        {/* Links Grid */}
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-x-3 gap-y-4 mb-6 list-none">
          {footerLinks.map((link) => (
            <li key={link.text}>
              <a
                href={link.href}
                className="text-netflix-gray hover:underline text-sm"
              >
                {link.text}
              </a>
            </li>
          ))}
        </ul>

        {/* Language Selector */}
        <div className="mt-6">
          <label htmlFor="language-select" className="sr-only">Select language</label>
          <div className="relative inline-flex items-center border border-netflix-gray rounded">
            {/* Globe Icon */}
            <div className="pl-3 pr-1 text-netflix-gray">
              <svg
                viewBox="0 0 16 16"
                width="16"
                height="16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M10.77 5.33 10.5 6 9.34 8.94l-.57 1.44L7.33 14h1.78l.73-1.97h3.58l.74 1.97H16l-3.43-8.67zm-.15 4.6-.24.63h2.51l-1.26-3.35zm-1.1-5.09.1-.19h-3.2V2h-1.5v2.65H.55V6h3.77A11 11 0 0 1 0 10.43c.33.28.81.8 1.05 1.16 1.5-.91 2.85-2.36 3.88-4.02v5.1h1.49V7.52q.6.95 1.33 1.8l.57-1.43a12 12 0 0 1-1.34-1.9h2.09z"
                  clipRule="evenodd"
                />
              </svg>
            </div>

            {/* Select Dropdown */}
            <select
              id="language-select"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="bg-transparent text-netflix-gray text-sm py-2 pl-1 pr-8 appearance-none cursor-pointer focus:outline-none"
            >
              <option value="id-ID" className="bg-netflix-black text-white">Bahasa Indonesia</option>
              <option value="en-ID" className="bg-netflix-black text-white">English</option>
            </select>

            {/* Caret Down Icon */}
            <div className="absolute right-2 pointer-events-none text-netflix-gray">
              <svg
                viewBox="0 0 16 16"
                width="16"
                height="16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M11.6 6.5c.15 0 .22.18.12.28l-3.48 3.48a.33.33 0 0 1-.48 0L4.28 6.78a.17.17 0 0 1 .12-.28z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
