import React, { useState, useEffect } from 'react';
// Mail contact removed - only GitHub and LinkedIn retained
import { FaGithub, FaLinkedin } from 'react-icons/fa6';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // 1. Apply glass effect if scrolled past top
      if (currentScrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // 2. Hide navbar when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Cleanup listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { name: 'About', href: '#hero' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Certifications', href: '#certifications' }
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      } ${
        isScrolled 
          ? 'bg-[#0a0a0a]/70 backdrop-blur-md border-b border-white/10 shadow-lg' 
          : 'bg-transparent border-b-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo / Name */}
          <div className="flex-shrink-0">
            <a href="#hero" className="text-xl font-bold text-white tracking-tight hover:opacity-80 transition-opacity">
              Mohiuddin<span className="text-teal-400">.</span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center">
            <div className="flex items-baseline space-x-6 lg:space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-300 hover:text-white hover:bg-white/5 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
            
            {/* Social Links & Primary Contact CTA */}
            <div className="flex items-center space-x-5 ml-8 pl-8 border-l border-white/10">
              <a href="https://github.com/mohiuddin7286" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-teal-400 transition-colors">
                <FaGithub size={18} />
              </a>
              <a href="https://www.linkedin.com/in/mohiuddin-ahmad-a53816380/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-teal-400 transition-colors">
                <FaLinkedin size={18} />
              </a>
            </div>
          </div>

          {/* Mobile Menu Layout */}
          <div className="md:hidden flex items-center space-x-4">
            <a href="https://github.com/mohiuddin7286" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-teal-400 transition-colors">
              <FaGithub size={20} />
            </a>
            <a href="https://www.linkedin.com/in/mohiuddin-ahmad-a53816380/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-teal-400 transition-colors">
              <FaLinkedin size={20} />
            </a>
            
            <button
              onClick={() => setMenuOpen((s) => !s)}
              aria-label="Toggle menu"
              className="text-slate-300 hover:text-white focus:outline-none ml-2"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            {menuOpen && (
              <div className="absolute right-4 top-20 w-56 bg-[#0a0a0a] border border-white/10 rounded-lg shadow-lg p-3 flex flex-col space-y-2 md:hidden">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="px-3 py-2 rounded text-slate-200 hover:bg-white/5"
                  >
                    {link.name}
                  </a>
                ))}

                <div className="pt-2 border-t border-white/5 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <a href="https://github.com/mohiuddin7286" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-teal-400 transition-colors">
                      <FaGithub size={18} />
                    </a>
                    <a href="https://www.linkedin.com/in/mohiuddin-ahmad-a53816380/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-teal-400 transition-colors">
                      <FaLinkedin size={18} />
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;