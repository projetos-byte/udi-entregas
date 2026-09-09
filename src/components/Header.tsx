import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { InstagramIcon, FacebookIcon } from './SocialIcons';

interface HeaderProps {
  onOpenQuoteModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenQuoteModal }) => {
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
    { name: 'Home', href: '#home' },
    { name: 'Serviços', href: '#services' },
    { name: 'Quem Somos', href: '#about' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contato', href: '#contact' },
  ];

  const whatsappNumber = '5534999999999';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Olá! Gostaria de solicitar uma cotação de envio pela UDI Entregas.')}`;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-slate-900/90 backdrop-blur-sm py-4 border-b border-slate-800'
    }`}>
      {/* Top Bar Contacts (Desktop only) */}
      <div className={`hidden lg:block overflow-hidden border-b text-xs text-slate-400 transition-all duration-300 ${
        isScrolled
          ? 'max-h-0 border-transparent pb-0 mb-0 opacity-0 pointer-events-none'
          : 'max-h-12 border-slate-800/80 pb-2 mb-2 opacity-100'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center">
            <span className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5" />
              Telefone / Atendimento:
              (34) 3233-0000 / (34) 99999-9999
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-slate-400">Siga a UDI Entregas:</span>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Instagram">
              <InstagramIcon className="w-4 h-4" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Facebook">
              <FacebookIcon className="w-4 h-4" />
            </a>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white flex items-center gap-1 transition-colors" aria-label="WhatsApp Atendimento">
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Brand */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="bg-dhl-yellow text-slate-950 font-black tracking-tighter text-xl sm:text-2xl px-3 py-1.5 rounded-lg shadow-md border-b-2 border-dhl-yellow-hover flex items-center gap-1.5">
              <span>UDI</span>
              <span className="bg-dhl-red text-white text-xs px-2 py-0.5 rounded font-extrabold tracking-widest uppercase">ENTREGAS</span>
            </div>
            <div className="hidden sm:flex flex-col">
              <span className={`text-xs font-bold tracking-wider uppercase ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
                Agente Autorizado
              </span>
              <span className="text-xs font-black tracking-widest text-dhl-red flex items-center gap-1">
                DHL <span className={isScrolled ? 'text-red-600' : 'text-dhl-yellow'}>EXPRESS</span>
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-semibold tracking-wide transition-colors ${
                  isScrolled ? 'text-slate-800 hover:text-black' : 'text-white hover:text-slate-200'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA & Actions Header */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={onOpenQuoteModal}
              className="bg-dhl-yellow hover:bg-dhl-yellow-hover text-slate-950 font-bold px-5 py-2.5 rounded-xl shadow-lg hover:shadow-dhl-yellow/30 transition-all transform hover:-translate-y-0.5 text-sm flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-slate-950 text-dhl-yellow" />
              Solicitar Cotação
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex md:hidden items-center space-x-3">
            <button
              onClick={onOpenQuoteModal}
              className="bg-dhl-yellow text-slate-950 font-bold px-3 py-1.5 rounded-lg text-xs flex items-center gap-1"
            >
              Cotação
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg ${isScrolled ? 'text-slate-900 hover:bg-slate-100' : 'text-white hover:bg-slate-800'}`}
              aria-label="Alternar Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className={`md:hidden border-b px-4 pt-4 pb-6 space-y-4 animate-in slide-in-from-top duration-200 ${
          isScrolled ? 'bg-white text-slate-800 border-slate-200' : 'bg-slate-900 text-white border-slate-800'
        }`}>
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-base font-medium py-2 border-b transition-colors ${
                  isScrolled
                    ? 'text-slate-800 hover:text-black border-slate-200'
                    : 'text-white hover:text-dhl-yellow border-slate-800'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-2 space-y-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 shadow-md"
            >
              <MessageCircle className="w-5 h-5" />
              Atendimento WhatsApp
            </a>

            <div className={`flex justify-center space-x-6 pt-3 ${isScrolled ? 'text-slate-500' : 'text-slate-400'}`}>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={isScrolled ? 'hover:text-black' : 'hover:text-white'} aria-label="Instagram">
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={isScrolled ? 'hover:text-black' : 'hover:text-white'} aria-label="Facebook">
                <FacebookIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
