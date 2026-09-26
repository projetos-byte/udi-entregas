import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { InstagramIcon } from './SocialIcons';

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

  const whatsappNumber = '5534991671026';
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
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1.5 text-slate-400">
              <Phone className="w-3.5 h-3.5 text-dhl-yellow" />
              <span>Telefone / Atendimento:</span>
            </span>
            <a
              href="tel:+553432134702"
              title="Ligar para (34) 3213-4702"
              className="text-slate-300 hover:text-dhl-yellow hover:underline transition-colors font-medium"
            >
              (34) 3213-4702
            </a>
            <span className="text-slate-600">/</span>
            <a
              href="tel:+5534991671026"
              title="Ligar para (34) 99167-1026"
              className="text-slate-300 hover:text-dhl-yellow hover:underline transition-colors font-medium"
            >
              (34) 99167-1026
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <a href="https://instagram.com/udientregasurgentes" target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center gap-1.5 transition-colors" aria-label="Instagram">
              <InstagramIcon className="w-4 h-4 text-pink-400" />
              <span>Instagram</span>
            </a>
            <span className="text-slate-700">•</span>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white flex items-center gap-1.5 transition-colors" aria-label="WhatsApp Atendimento">
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between">
          
          {/* Logo Brand */}
          <a href="#home" className="flex items-center gap-3 group focus:outline-none" aria-label="UDI Entregas - Início">
            <div className="bg-[#FFCC00] px-2.5 py-1 rounded-xl shadow-md border border-amber-400/40 flex items-center justify-center transition-transform group-hover:scale-105">
              <img
                src="/logo-udi-entregas.png"
                alt="UDI Entregas Urgente - O seu agente de cargas em Uberlândia e região"
                className="h-8 sm:h-10 w-auto object-contain"
              />
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

          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex items-center space-x-8 absolute left-1/2 -translate-x-1/2">
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

          {/* CTA & Actions Header - Minimized to focus on Hero CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={onOpenQuoteModal}
              className={`font-semibold px-4 py-2 rounded-xl text-sm transition-all border ${
                isScrolled
                  ? 'border-slate-300 text-slate-800 hover:border-slate-800 hover:bg-slate-50'
                  : 'border-slate-700 bg-slate-800/50 text-slate-200 hover:border-slate-500 hover:text-white hover:bg-slate-800'
              }`}
            >
              Solicitar Cotação
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex md:hidden items-center space-x-3">
            <button
              onClick={onOpenQuoteModal}
              className={`font-semibold px-3 py-1.5 rounded-lg text-xs border ${
                isScrolled
                  ? 'border-slate-300 text-slate-800'
                  : 'border-slate-700 bg-slate-800/60 text-slate-200'
              }`}
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

            <div className={`flex flex-col items-center gap-1.5 pt-3 border-t ${isScrolled ? 'border-slate-200 text-slate-600' : 'border-slate-800 text-slate-400'}`}>
              <span className="text-xs font-medium flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-dhl-yellow" /> Ligue para nós:
              </span>
              <div className="flex items-center gap-3 text-sm font-bold">
                <a href="tel:+553432134702" className="hover:text-dhl-yellow hover:underline transition-colors">
                  (34) 3213-4702
                </a>
                <span>•</span>
                <a href="tel:+5534991671026" className="hover:text-dhl-yellow hover:underline transition-colors">
                  (34) 99167-1026
                </a>
              </div>
            </div>

            <div className={`flex justify-center pt-2 ${isScrolled ? 'text-slate-500' : 'text-slate-400'}`}>
              <a href="https://instagram.com/udientregasurgentes" target="_blank" rel="noopener noreferrer" className={`flex items-center gap-2 text-sm font-medium ${isScrolled ? 'hover:text-black' : 'hover:text-white'}`} aria-label="Instagram">
                <InstagramIcon className="w-5 h-5 text-pink-400" />
                <span>@udientregasurgentes</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
