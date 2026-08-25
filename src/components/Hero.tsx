import React from 'react';
import { MessageCircle, ShieldCheck, Globe2, ArrowRight, Zap, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onOpenQuoteModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal }) => {
  const whatsappNumber = '5534999999999';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Olá! Vim pelo site da UDI Entregas e preciso cotar um envio urgente.')}`;

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center pt-28 pb-16 overflow-hidden bg-slate-950">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1920&q=80"
          alt="Avião de carga DHL Express em operação logística internacional"
          className="w-full h-full object-cover object-center opacity-35 scale-105 transform transition-transform duration-10000 hover:scale-100"
        />
        {/* Gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Copy */}
          <div className="lg:col-span-8 space-y-8 text-left">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-slate-900/90 border border-slate-800 rounded-full px-4 py-2 text-slate-200 text-xs sm:text-sm font-medium shadow-xl backdrop-blur-md">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-dhl-yellow opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-dhl-yellow"></span>
              </span>
              <span className="font-bold text-dhl-yellow uppercase tracking-wider">UDI Entregas</span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-300 font-medium">Agente Autorizado DHL Express</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
              Envie para o mundo com a <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-dhl-yellow via-amber-300 to-yellow-400">
                rapidez da DHL Express
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl font-normal leading-relaxed">
              A <strong className="text-white font-semibold">UDI Entregas</strong> oferece acesso direto à maior rede logística expressa do planeta. Soluções aéreas internacionais e nacionais com coleta ágil em Uberlândia e toda a região.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-dhl-yellow hover:bg-dhl-yellow-hover text-slate-950 font-extrabold px-8 py-4 rounded-xl shadow-2xl hover:shadow-dhl-yellow/30 transition-all transform hover:-translate-y-1 text-center text-base sm:text-lg flex items-center justify-center gap-3 border-b-4 border-amber-600"
              >
                <MessageCircle className="w-6 h-6 fill-slate-950 text-dhl-yellow transition-transform group-hover:scale-110" />
                <span>Solicite sua cotação via WhatsApp</span>
              </a>

              <button
                onClick={onOpenQuoteModal}
                className="bg-slate-800/80 hover:bg-slate-800 text-white font-bold px-6 py-4 rounded-xl border border-slate-700 hover:border-slate-600 transition-all text-center text-base flex items-center justify-center gap-2 backdrop-blur-sm"
              >
                <span>Cotar pelo Site</span>
                <ArrowRight className="w-5 h-5 text-dhl-yellow" />
              </button>
            </div>

            {/* Quick Benefits Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-6 border-t border-slate-800/80 text-slate-300 text-xs sm:text-sm">
              <div className="flex items-center gap-2">
                <Globe2 className="w-5 h-5 text-dhl-red shrink-0" />
                <span>+220 Países Atendidos</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-dhl-yellow shrink-0" />
                <span>Envios Expressos Urgentes</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>Assessoria Aduaneira</span>
              </div>
            </div>

          </div>

          {/* Right Floating Card Highlight */}
          <div className="lg:col-span-4 hidden lg:block">
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-2xl backdrop-blur-md relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-dhl-red/10 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none"></div>
              
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-5">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-dhl-yellow">Rede Global DHL</span>
                  <h3 className="text-lg font-bold text-white">Prontidão Logística</h3>
                </div>
                <div className="bg-dhl-red text-white p-2.5 rounded-xl shadow-lg">
                  <Globe2 className="w-6 h-6" />
                </div>
              </div>

              <ul className="space-y-3.5 text-sm text-slate-300 mb-6">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-dhl-yellow shrink-0 mt-0.5" />
                  <span><strong>Desembaraço Simplificado:</strong> Suporte completo em invoices e faturas.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-dhl-yellow shrink-0 mt-0.5" />
                  <span><strong>Atendimento Local:</strong> Unidade estratégica perto do Aeroporto de Uberlândia.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-dhl-yellow shrink-0 mt-0.5" />
                  <span><strong>Rastreamento Ponto a Ponto:</strong> Acompanhe cada etapa online.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-dhl-yellow shrink-0 mt-0.5" />
                  <span><strong>Pessoa Física e Jurídica:</strong> Envie documentos ou mercadorias com Nota Fiscal.</span>
                </li>
              </ul>

              <div className="bg-slate-800/80 rounded-xl p-3.5 text-center border border-slate-700/80">
                <p className="text-xs text-slate-400">Atendimento imediato em horário comercial</p>
                <p className="text-sm font-extrabold text-dhl-yellow mt-0.5">Segunda a Sexta • 08h às 18h</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
