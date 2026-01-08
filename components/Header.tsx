import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Settings, ArrowLeft } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'الرئيسية', href: '#hero' },
    { name: 'من نحن', href: '#about' },
    { name: 'خدماتنا', href: '#services' },
    { name: 'لماذا نحن', href: '#why-us' },
    { name: 'المشاريع', href: '#projects' },
    { name: 'اتصل بنا', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-500 border-b ${
        isScrolled 
          ? 'bg-primary/95 backdrop-blur-md border-white/10 py-3 shadow-lg' 
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo Area */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="bg-accent p-2.5 rounded-sm shadow-lg shadow-accent/20 group-hover:scale-110 transition-transform duration-300">
            <Settings className="text-white w-7 h-7 animate-[spin_10s_linear_infinite]" strokeWidth={2.5} />
          </div>
          <div>
            <h1 className="text-2xl font-black leading-none text-white tracking-tight">
              العريقي
            </h1>
            <p className="text-[10px] font-bold tracking-[0.2em] text-gray-300 uppercase mt-1">
              للخدمات الصناعية
            </p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-sm font-bold text-gray-200 transition-colors duration-300 hover:text-accent-yellow py-2 group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-yellow transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <a
            href="tel:777403614"
            className={`flex items-center gap-2 px-5 py-2.5 rounded-sm font-bold transition-all text-sm shadow-md hover:shadow-xl ${
               isScrolled 
               ? 'bg-white text-primary hover:bg-gray-100' 
               : 'bg-accent text-white hover:bg-accent-hover'
            }`}
          >
            <Phone size={18} />
            <span>777 403 614</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white hover:text-accent transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 bg-primary/95 backdrop-blur-xl transition-transform duration-300 md:hidden flex flex-col justify-center items-center gap-8 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-2xl font-bold text-white hover:text-accent"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
             href="tel:777403614"
             className="flex items-center gap-3 bg-accent text-white px-8 py-4 rounded-full font-bold text-xl mt-4"
          >
             <Phone size={24} />
             <span>اتصل الآن</span>
          </a>
      </div>
    </header>
  );
};

export default Header;