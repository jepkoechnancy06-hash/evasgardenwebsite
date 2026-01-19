
import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { NAV_ITEMS, CONTACT_INFO } from '../constants';
import FloatingWhatsApp from './FloatingWhatsApp';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 shadow-md py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <NavLink to="/" className={`text-2xl font-bold tracking-widest transition-colors ${scrolled ? 'text-purple-900' : 'text-purple-900 md:text-white'}`}>
          EVA'S GARDEN
        </NavLink>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 items-center">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`text-sm uppercase tracking-widest hover:opacity-70 transition-all ${scrolled ? 'text-purple-900' : 'text-purple-900 md:text-white'}`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#/contact"
            className={`px-6 py-2 rounded-full text-xs uppercase tracking-widest border transition-all ${
              scrolled 
                ? 'bg-purple-900 text-white border-purple-900 hover:bg-purple-800' 
                : 'bg-white text-purple-900 border-white hover:bg-purple-50'
            }`}
          >
            Inquire
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-purple-900 focus:outline-none">
          <div className={`w-6 h-0.5 bg-current mb-1.5 transition-all ${!scrolled && 'md:bg-white'}`}></div>
          <div className={`w-6 h-0.5 bg-current mb-1.5 transition-all ${!scrolled && 'md:bg-white'}`}></div>
          <div className={`w-6 h-0.5 bg-current transition-all ${!scrolled && 'md:bg-white'}`}></div>
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-purple-950 z-50 flex flex-col items-center justify-center space-y-8">
          <button onClick={() => setIsOpen(false)} className="absolute top-6 right-6 text-white text-3xl font-light">&times;</button>
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-white text-2xl serif tracking-widest hover:text-purple-200 transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#/contact"
            onClick={() => setIsOpen(false)}
            className="mt-4 px-10 py-3 rounded-full bg-white text-purple-950 text-sm uppercase tracking-widest font-bold"
          >
            Inquire Now
          </a>
        </div>
      )}
    </header>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-purple-950 text-purple-200 py-20 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
        <div>
          <h3 className="text-white text-xl mb-6 tracking-widest uppercase serif">Eva's Garden</h3>
          <p className="text-purple-300/80 max-w-xs text-sm leading-relaxed italic serif">
            "A timeless outdoor venue nestled in the heart of Redhill, offering a breathtaking natural backdrop for life's most beautiful celebrations."
          </p>
        </div>
        <div>
          <h4 className="text-white text-sm mb-6 tracking-widest uppercase font-bold">The Venue</h4>
          <ul className="space-y-4 text-sm">
            <li>Location: {CONTACT_INFO.location}</li>
            <li>Type: {CONTACT_INFO.type}</li>
            <li>Parking: {CONTACT_INFO.parking}</li>
            
          </ul>
        </div>
        <div>
          <h4 className="text-white text-sm mb-6 tracking-widest uppercase font-bold">Connect</h4>
          <ul className="space-y-4 text-sm">
            <li><a href="#/contact" className="hover:text-white transition-colors">Contact Us</a></li>
            <li><a href={CONTACT_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">WhatsApp</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto border-t border-purple-900/50 mt-16 pt-8 text-center text-[10px] tracking-[0.3em] text-purple-400/60 uppercase">
        &copy; {new Date().getFullYear()} Eva's Garden. Designed for Elegance.
      </div>
    </footer>
  );
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col relative selection:bg-purple-100 selection:text-purple-900">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Layout;
