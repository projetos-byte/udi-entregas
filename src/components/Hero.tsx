import React from 'react';
import { MessageCircle } from 'lucide-react';

interface HeroProps {
  onOpenQuoteModal?: () => void;
}

export const Hero: React.FC<HeroProps> = () => {
  const whatsappNumber = '5534991671026';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Olá! Vim pelo site da UDI Entregas e preciso cotar um envio urgente.')}`;

  return (
    <section id="home" className="relative min-h-[88vh] flex items-center justify-center pt-32 pb-20 overflow-hidden bg-slate-950">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1920&q=80"
          alt="Avião de carga DHL Express em operação logística internacional"
          className="w-full h-full object-cover object-center opacity-30"
        />
        {/* Gradients for optimal text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/80 to-slate-950" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        <div className="flex flex-col items-center space-y-8">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 bg-slate-900/90 border border-slate-700/80 rounded-full px-4 sm:px-5 py-2 text-slate-200 text-xs sm:text-sm font-medium shadow-xl backdrop-blur-md">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFCC00] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#FFCC00]"></span>
            </span>
            <span className="font-extrabold text-[#FFCC00] uppercase tracking-wider">UDI Entregas</span>
            <span className="text-slate-500">•</span>
            <span className="text-white font-semibold">Agente Autorizado DHL Express</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white tracking-tight leading-[1.15] max-w-4xl">
            Envie para o mundo com a <br className="hidden sm:inline" />
            <span className="text-[#FFCC00]">
              rapidez da DHL Express
            </span>
          </h1>

          {/* Supporting Paragraph - High contrast & crisp readability */}
          <p className="text-base sm:text-lg lg:text-xl text-slate-100 font-medium leading-relaxed max-w-3xl drop-shadow-sm">
            A UDI Entregas é Agente Autorizado DHL Express em Uberlândia, oferecendo soluções completas para envios nacionais e internacionais com rapidez, segurança, rastreamento em tempo real e suporte especializado em todas as etapas do processo.
          </p>

          {/* Single Focused CTA */}
          <div className="pt-4 w-full sm:w-auto">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 bg-[#FFCC00] hover:bg-[#E6B800] text-slate-950 font-extrabold px-8 sm:px-12 py-4 sm:py-5 rounded-2xl shadow-2xl hover:shadow-[#FFCC00]/30 transition-all transform hover:-translate-y-1 text-center text-base sm:text-lg lg:text-xl border-b-4 border-amber-600 w-full sm:w-auto"
            >
              <MessageCircle className="w-6 h-6 fill-slate-950 text-[#FFCC00] transition-transform group-hover:scale-110 shrink-0" />
              <span>Solicite sua cotação via WhatsApp</span>
            </a>
          </div>

        </div>
      </div>

      {/* Subtle, Low-Profile Concave Curve Transition to Section 2 (bg-slate-50) */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none z-20 pointer-events-none">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-5 sm:h-8 lg:h-10 text-slate-50 fill-current"
        >
          <path d="M0,0 C380,45 820,45 1200,0 L1200,120 L0,120 Z" />
        </svg>
      </div>
    </section>
  );
};

