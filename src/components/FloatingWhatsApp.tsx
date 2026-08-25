import React from 'react';
import { MessageCircle } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const whatsappNumber = '5534999999999';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Olá! Gostaria de tirar uma dúvida sobre envios com a UDI Entregas.')}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center group">
      {/* Tooltip text */}
      <span className="hidden sm:inline-block mr-3 bg-slate-900 text-white text-xs font-bold px-3 py-1.5 rounded-xl shadow-xl border border-slate-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Fale no WhatsApp!
      </span>

      {/* Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative bg-emerald-500 hover:bg-emerald-600 text-white p-4 rounded-full shadow-2xl transition-all transform hover:scale-110 flex items-center justify-center border-2 border-white/20"
        aria-label="Atendimento WhatsApp"
      >
        {/* Pulse ring animation */}
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>

        <MessageCircle className="w-7 h-7 relative z-10 fill-white text-emerald-500" />
      </a>
    </div>
  );
};
