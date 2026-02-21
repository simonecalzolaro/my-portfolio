import { useState, useEffect } from 'react';
import type { MouseEvent } from 'react';
import logo from '../assets/code.png';

// 1. Define the shape of your links OUTSIDE the component
interface NavLinkItem {
  name: string;
  href: string;
  isExternal?: boolean;
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
  }, [isOpen]);

  // 2. Tell TypeScript this array uses your new interface
  const navLinks: NavLinkItem[] = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Stack', href: '#stack' },
    { name: 'Projects', href: '#projects' },
    { name: 'CV', href: '/simone_calzolaro_cv.pdf', isExternal: true }, 
    { name: 'Contact', href: '#contacts' }
  ];

  // 3. Use the imported MouseEvent directly
  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, link: NavLinkItem) => {
    if (link.isExternal) {
      setIsOpen(false);
      return; 
    }
    
    setIsOpen(false);
    if (link.href === '#') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 px-6 md:px-12 
        ${scrolled || isOpen ? 'py-4 bg-black/90 backdrop-blur-xl border-b border-[#dc2626]/20' : 'py-8 bg-transparent'}`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          
          <div 
            className="flex items-center z-[120] cursor-pointer group" 
            onClick={() => { window.scrollTo({top: 0, behavior: 'smooth'}); setIsOpen(false); }}
          >
            <img src={logo} alt="Logo" className="w-10 h-10 md:w-12 md:h-12 object-contain drop-shadow-[0_0_10px_rgba(220,38,38,0.5)]" />
            <div className="ml-4 flex flex-col leading-[0.85]">
              <span className="text-[#FDF5E6] font-black text-lg md:text-xl uppercase tracking-tighter">Simone</span>
              <span className="text-[#FDF5E6] font-black text-lg md:text-xl uppercase tracking-tighter">Calzolaro</span>
            </div>
          </div>

          <button className="md:hidden z-[120] flex flex-col gap-2 p-3" onClick={() => setIsOpen(!isOpen)}>
            <div className={`w-7 h-0.5 bg-[#dc2626] transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2.5' : ''}`} />
            <div className={`w-7 h-0.5 bg-[#FDF5E6] transition-opacity ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
            <div className={`w-7 h-0.5 bg-[#FDF5E6] transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
          </button>

          <ul className="hidden md:flex flex-row items-center gap-10">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  target={link.isExternal ? "_blank" : "_self"}
                  rel={link.isExternal ? "noreferrer" : ""}
                  onClick={(e) => handleNavClick(e, link)}
                  className={`font-mono text-[11px] font-bold uppercase tracking-[0.4em] transition-all
                    ${link.name === 'CV' 
                      ? 'text-[#dc2626] border border-[#dc2626]/40 px-4 py-2 hover:bg-[#dc2626] hover:text-white' 
                      : 'text-[#FDF5E6]/60 hover:text-[#dc2626]'}
                  `}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <div className={`
        fixed inset-0 z-[110] bg-black/98 backdrop-blur-2xl flex flex-col items-center justify-center gap-10 transition-transform duration-500 ease-in-out md:hidden
        ${isOpen ? 'translate-y-0' : '-translate-y-full'}
      `}>
        {navLinks.map((link) => (
          <a 
            key={link.name}
            href={link.href} 
            target={link.isExternal ? "_blank" : "_self"}
            rel={link.isExternal ? "noreferrer" : ""}
            onClick={(e) => handleNavClick(e, link)}
            className="font-mono text-2xl font-black uppercase tracking-[0.5em] text-[#FDF5E6] hover:text-[#dc2626] transition-colors"
          >
            <span className="text-[#dc2626] mr-4">{link.isExternal ? '->' : '//'}</span>
            {link.name}
          </a>
        ))}
      </div>
    </>
  );
}