import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Media', path: '/media' },
    { name: 'Login', path: '/login' },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 transition-all duration-500"
      style={{
        zIndex: 9999,                          // ← tinggi banget biar ga ketutup apapun
        background: scrolled
          ? 'rgba(10,10,10,0.97)'
          : 'linear-gradient(to bottom, rgba(0,0,0,0.75) 0%, transparent 100%)',
        backdropFilter: scrolled ? 'blur(8px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : 'none',
        pointerEvents: 'auto',                 // ← pastikan navbar selalu bisa diklik
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-center">

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className="relative px-4 py-2 text-sm font-medium rounded transition-all duration-200"
                style={{
                  color: isActive ? '#fff' : '#b3b3b3',
                  background: isActive ? 'rgba(255,255,255,0.08)' : 'transparent',
                  letterSpacing: '0.3px',
                  pointerEvents: 'auto',       // ← tiap link juga pastikan bisa diklik
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = '#fff';
                  if (!isActive)
                    (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.06)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = isActive ? '#fff' : '#b3b3b3';
                  if (!isActive)
                    (e.currentTarget as HTMLElement).style.background = 'transparent';
                }}
              >
                {link.name}
                {/* Active dot */}
                {isActive && (
                  <span
                    className="absolute left-1/2 -translate-x-1/2 rounded-full"
                    style={{ width: '4px', height: '4px', background: '#E50914', bottom: '4px' }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Burger — mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5 rounded"
          style={{ background: 'rgba(255,255,255,0.05)', pointerEvents: 'auto' }}
          aria-label="Toggle menu"
        >
          <span className="block w-5 h-0.5 bg-white transition-all duration-300 origin-center"
            style={{ transform: isOpen ? 'translateY(8px) rotate(45deg)' : 'none' }} />
          <span className="block w-5 h-0.5 bg-white transition-all duration-300"
            style={{ opacity: isOpen ? 0 : 1 }} />
          <span className="block w-5 h-0.5 bg-white transition-all duration-300 origin-center"
            style={{ transform: isOpen ? 'translateY(-8px) rotate(-45deg)' : 'none' }} />
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300"
        style={{
          maxHeight: isOpen ? '300px' : '0px',
          background: 'rgba(10,10,10,0.98)',
          borderTop: isOpen ? '1px solid rgba(255,255,255,0.07)' : 'none',
        }}
      >
        <div className="px-6 py-4 flex flex-col items-center gap-1">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                onClick={closeMenu}
                className="w-full text-center px-4 py-3 rounded-md text-sm font-medium transition-colors duration-200"
                style={{
                  color: isActive ? '#fff' : '#b3b3b3',
                  background: isActive ? 'rgba(255,255,255,0.08)' : 'transparent',
                  borderLeft: isActive ? '3px solid #E50914' : '3px solid transparent',
                }}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;