import React from 'react';
import { ShieldCheck, Users, FileCheck, Sparkles, Clock, MapPin, Award, CheckCircle } from 'lucide-react';

export const About: React.FC = () => {
  const differentials = [
    {
      title: 'Atendimento Humanizado',
      desc: 'Sua empresa fala direto com especialistas dedicados. Sem menus confusos ou robôs que atrasam a sua operação.',
      icon: Users,
    },
    {
      title: 'Assessoria Especializada',
      desc: 'Orientação completa no preenchimento de faturas comerciais (Invoice), Packing List e documentação aduaneira de exportação e importação.',
      icon: FileCheck,
    },
    {
      title: 'Menor Burocracia',
      desc: 'Desembaraço simplificado com suporte proativo para garantir que sua encomenda não fique retida na fiscalização.',
      icon: ShieldCheck,
    },
    {
      title: 'Envios Simplificados',
      desc: 'Processo rápido desde a cotação até o despacho final, com sistema de embalagem e etiquetagem otimizado.',
      icon: Sparkles,
    },
    {
      title: 'Terminal 24h',
      desc: 'Estrutura operacional com recebimento e movimentação contínua para garantir embarques nos primeiros voos do dia.',
      icon: Clock,
    },
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Background Subtle Accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/70 -z-10 clip-path-polygon hidden lg:block"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Institutional Story */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="inline-flex items-center gap-2 bg-amber-100/70 border border-amber-300/60 rounded-full px-4 py-1.5 text-amber-900 text-xs sm:text-sm font-bold uppercase tracking-wider">
              <Award className="w-4 h-4 text-dhl-red" />
              Tradição & Confiança
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Mais de <span className="text-dhl-red underline decoration-dhl-yellow decoration-4 underline-offset-4">30 Anos</span> de Excelência em Logística Expressa
            </h2>

            <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
              Fundada com o compromisso de conectar Uberlândia e região às principais rotas comerciais do Brasil e do mundo, a <strong className="text-slate-900">UDI Entregas</strong> consolidou-se como referência máxima em agilidade e segurança no transporte de encomendas.
            </p>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Como <strong className="text-slate-900 font-semibold">Agente Autorizado DHL Express</strong>, contamos com <strong>sede própria estrategicamente localizada em Uberlândia</strong>, a poucos minutos do Aeroporto Ten. Cel. Av. César Bombonato. Essa posição geográfica privilegiada nos permite agilizar o transbordo e garantir o embarque imediato de cargas urgentes.
            </p>

            {/* Key Metric Highlights */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-200">
              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 text-center">
                <span className="text-2xl sm:text-3xl font-extrabold text-dhl-red block">30+</span>
                <span className="text-xs text-slate-600 font-medium">Anos de Mercado</span>
              </div>

              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 text-center">
                <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 block">100%</span>
                <span className="text-xs text-slate-600 font-medium">Sede Própria</span>
              </div>

              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 text-center">
                <span className="text-2xl sm:text-3xl font-extrabold text-dhl-yellow block shadow-dhl-yellow">220+</span>
                <span className="text-xs text-slate-600 font-medium">Países Atendidos</span>
              </div>
            </div>

            {/* Warehouse Visual Card */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 mt-6 group">
              <img
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80"
                alt="Terminal e Galpão Logístico Limpo da UDI Entregas"
                className="w-full h-48 sm:h-56 object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent flex items-end p-4">
                <div className="text-white flex items-center gap-2 text-xs sm:text-sm font-semibold">
                  <MapPin className="w-4 h-4 text-dhl-yellow shrink-0" />
                  <span>Sede Operacional própria em Uberlândia - MG (Próximo ao Aeroporto)</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Differentials Grid */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 shadow-2xl relative border border-slate-800">
              
              <div className="border-b border-slate-800 pb-6 mb-8">
                <span className="text-dhl-yellow text-xs font-extrabold uppercase tracking-widest block mb-1">
                  Por que escolher a UDI Entregas?
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Nossos Diferenciais
                </h3>
                <p className="text-slate-400 text-sm mt-2">
                  Atendimento personalizado de ponta a ponta para que seu envio ocorra sem sobressaltos.
                </p>
              </div>

              {/* List of 5 Differentials */}
              <div className="space-y-6">
                {differentials.map((item, index) => {
                  const IconComp = item.icon;
                  return (
                    <div key={index} className="flex items-start gap-4 group">
                      <div className="w-12 h-12 rounded-2xl bg-slate-800 text-dhl-yellow flex items-center justify-center shrink-0 border border-slate-700/80 group-hover:bg-dhl-red group-hover:text-white transition-colors duration-300 shadow-md">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-white group-hover:text-dhl-yellow transition-colors flex items-center gap-2">
                          {item.title}
                          {index === 4 && (
                            <span className="bg-dhl-red text-white text-[10px] uppercase font-extrabold px-2 py-0.5 rounded">
                              EXCLUSIVO
                            </span>
                          )}
                        </h4>
                        <p className="text-slate-300 text-xs sm:text-sm mt-1 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Bottom Guarantee Banner */}
              <div className="mt-8 pt-6 border-t border-slate-800 flex items-center gap-3 text-xs text-slate-300">
                <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>Garantia de atendimento especializado conforme os padrões de qualidade da <strong>DHL Express Global</strong>.</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
