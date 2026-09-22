import React from 'react';
import { Plane, Truck, MapPin, Sparkles, MessageCircle } from 'lucide-react';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const whatsappNumber = '5534991671026';
  const whatsappPickupUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Olá! Gostaria de agendar uma coleta no meu endereço em Uberlândia/Região.')}`;

  return (
    <section id="services" className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-dhl-red/10 border border-dhl-red/20 rounded-full px-4 py-1.5 text-dhl-red text-xs sm:text-sm font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-dhl-red" />
            Excelência Operacional
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Nossos Serviços
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Soluções completas de transporte aéreo e rodoviário com o padrão de qualidade e segurança do agente autorizado <strong className="text-slate-900">DHL Express</strong>.
          </p>
        </div>

        {/* 2 Main Blocks / Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          
          {/* Bloco 1: Aéreo DHL */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-200/80 hover:border-[#FFCC00] transition-all duration-300 flex flex-col justify-between group">
            {/* Visual Cover */}
            <div className="relative h-60 w-full overflow-hidden bg-slate-950">
              <img
                src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1000&q=80"
                alt="Envios Aéreos Nacionais e Internacionais DHL Express"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              
              <div className="absolute bottom-5 left-6 right-6 flex items-center gap-3">
                <div className="w-12 h-12 bg-dhl-red text-white rounded-2xl flex items-center justify-center shadow-lg shrink-0">
                  <Plane className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#FFCC00]">
                  Rede Global DHL Express
                </span>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-8 sm:p-10 flex-1 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                  Envios Aéreos Nacionais e Internacionais – DHL Express
                </h3>
                
                <p className="text-slate-600 text-base leading-relaxed font-normal">
                  Como Agente Autorizado DHL Express, oferecemos soluções completas para o transporte aéreo de documentos, encomendas, mercadorias e cargas de pequenos e grandes volumes, com envios para todo o Brasil e mais de 220 países e territórios. Conte com uma das maiores redes logísticas do mundo para realizar seus envios com rapidez, rastreamento em tempo real, segurança e atendimento especializado em todas as etapas do processo.
                </p>
              </div>

              {/* Single CTA Button */}
              <div className="pt-4 border-t border-slate-100">
                <button
                  onClick={() => onSelectService('Envios Aéreos Nacionais e Internacionais – DHL Express')}
                  className="w-full bg-[#FFCC00] hover:bg-[#E6B800] text-slate-950 font-extrabold py-4 px-6 rounded-xl transition-all text-center text-base sm:text-lg shadow-md hover:shadow-lg flex items-center justify-center gap-2 border-b-2 border-amber-600"
                >
                  <span>Solicitar Cotação</span>
                </button>
              </div>
            </div>
          </div>

          {/* Bloco 2: Rodoviário Regional */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-200/80 hover:border-[#FFCC00] transition-all duration-300 flex flex-col justify-between group">
            {/* Visual Cover */}
            <div className="relative h-60 w-full overflow-hidden bg-slate-950">
              <img
                src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1000&q=80"
                alt="Entregas Rodoviárias em Uberlândia e Região"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              
              <div className="absolute bottom-5 left-6 right-6 flex items-center gap-3">
                <div className="w-12 h-12 bg-slate-900 text-[#FFCC00] border border-slate-700 rounded-2xl flex items-center justify-center shadow-lg shrink-0">
                  <Truck className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#FFCC00]">
                  Frota e Logística Regional
                </span>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-8 sm:p-10 flex-1 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                  Entregas Rodoviárias em Uberlândia e Região
                </h3>
                
                <p className="text-slate-600 text-base leading-relaxed font-normal">
                  Oferecemos soluções em transporte rodoviário para coletas e entregas em Uberlândia e diversas cidades da região, como Uberaba, Araguari, Catalão, Patos de Minas, Araxá e Patrocínio. Com uma equipe qualificada e uma logística eficiente, realizamos entregas rápidas, seguras e pontuais, atendendo empresas e pessoas físicas com um serviço personalizado e de alta confiabilidade.
                </p>
              </div>

              {/* Single CTA Button */}
              <div className="pt-4 border-t border-slate-100">
                <button
                  onClick={() => onSelectService('Entregas Rodoviárias em Uberlândia e Região')}
                  className="w-full bg-[#FFCC00] hover:bg-[#E6B800] text-slate-950 font-extrabold py-4 px-6 rounded-xl transition-all text-center text-base sm:text-lg shadow-md hover:shadow-lg flex items-center justify-center gap-2 border-b-2 border-amber-600"
                >
                  <span>Solicitar Cotação</span>
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Dark Banner - Coleta no seu endereço */}
        <div className="mt-16 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden border border-slate-800">
          <div className="absolute -right-12 -bottom-12 opacity-5 pointer-events-none">
            <Truck className="w-96 h-96 text-white" />
          </div>
          
          <div className="relative z-10 max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 bg-[#FFCC00]/10 border border-[#FFCC00]/20 rounded-full px-4 py-1.5 text-[#FFCC00] text-xs sm:text-sm font-bold uppercase tracking-wider">
              <MapPin className="w-4 h-4 text-[#FFCC00]" />
              Comodidade e Agilidade
            </div>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Coleta no seu endereço
            </h3>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-3xl">
              Para maior comodidade, realizamos a coleta em seu endereço nas cidades de Uberlândia, Uberaba, Araguari e Catalão, garantindo um processo ágil e seguro desde a origem até o destino. Atendemos diversas rotas regionais. Consulte nossa equipe sobre a disponibilidade para outras cidades.
            </p>

            <div className="pt-2">
              <a
                href={whatsappPickupUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#FFCC00] hover:bg-[#E6B800] text-slate-950 font-extrabold px-8 py-4 rounded-xl shadow-xl hover:shadow-[#FFCC00]/20 transition-all text-base sm:text-lg transform hover:-translate-y-0.5 border-b-4 border-amber-600"
              >
                <MessageCircle className="w-5 h-5 fill-slate-950 text-[#FFCC00]" />
                <span>Agendar Coleta</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
