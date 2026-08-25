import React, { useState } from 'react';
import { Globe, Plane, Truck, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const [activeModalService, setActiveModalService] = useState<null | {
    title: string;
    icon: any;
    desc: string;
    cities?: string[];
    features: string[];
    details: string;
  }>(null);

  const servicesData = [
    {
      id: 'internacional',
      title: 'Aéreo Internacional DHL Express',
      badge: 'Global & Expresso',
      icon: Globe,
      desc: 'Solução líder mundial para envios urgentes de documentos e mercadorias para mais de 220 países e territórios com agilidade imbatível.',
      cities: ['América do Norte', 'Europa', 'Ásia & Oceania', 'América Latina & África'],
      features: [
        'Entrega porta a porta com prazo expresso garantido',
        'Desembaraço aduaneiro rápido e assessoria completa em invoices',
        'Rastreamento em tempo real 24/7 ponto a ponto',
        'Segurança máxima e seguro de transporte opcional'
      ],
      details: 'Conectamos sua empresa ou envio pessoal à malha aérea global da DHL Express. Cuidamos de todo o processo burocrático, documentos alfandegários e declarações de exportação/importação para que sua encomenda chegue com segurança em qualquer lugar do mundo.'
    },
    {
      id: 'nacional',
      title: 'Aéreo Nacional',
      badge: 'Velocidade Brasil',
      icon: Plane,
      desc: 'Transporte aéreo prioritário conectando os principais aeroportos do Brasil para cargas e documentos que não podem esperar.',
      features: [
        'Conexão direta entre capitais e grandes polos econômicos',
        'Prazos reduzidos para encomendas urgentes',
        'Monitoramento constante da carga do despacho à entrega',
        'Opções flexíveis para volumes variados'
      ],
      details: 'O serviço de Aéreo Nacional da UDI Entregas atende demandas corporativas e individuais urgentes no território brasileiro. Garantimos agilidade no embarque e tratamento prioritário para suas encomendas mais críticas.'
    },
    {
      id: 'rodoviario',
      title: 'Transporte Rodoviário Regional',
      badge: 'Frota Regional Destaque',
      icon: Truck,
      desc: 'Coletas e entregas expressas diárias operadas com frota própria em Uberlândia, Uberaba, Araguari, Catalão e toda a região.',
      cities: ['Uberlândia', 'Uberaba', 'Araguari', 'Catalão', 'Região do Triângulo & Alto Paranaíba'],
      features: [
        'Atendimento direto nas principais cidades da região',
        'Coletas agendadas no mesmo dia no seu endereço',
        'Integração direta com nosso terminal de cargas',
        'Frete rápido, seguro e sem intermediários'
      ],
      details: 'Operamos uma malha rodoviária regional ágil e eficiente. Nossa frota própria atende o Polo Industrial de Uberlândia, Uberaba, Araguari, Catalão e cidades vizinhas com suporte operacional imediato.'
    }
  ];

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

        {/* Services Grid (3 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesData.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl border border-slate-200/80 hover:border-dhl-yellow transition-all duration-300 flex flex-col justify-between group relative overflow-hidden transform hover:-translate-y-1"
              >
                {/* Top Decorative Banner */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-dhl-red via-dhl-yellow to-dhl-red opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div>
                  {/* Badge & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 bg-red-50 text-dhl-red rounded-2xl flex items-center justify-center border border-red-100 group-hover:bg-dhl-red group-hover:text-white transition-colors duration-300 shadow-sm">
                      <IconComponent className="w-7 h-7" />
                    </div>
                    <span className="text-xs font-extrabold text-slate-700 bg-slate-100 px-3 py-1 rounded-full uppercase tracking-wider border border-slate-200">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-dhl-red transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {service.desc}
                  </p>

                  {/* Regional Cities Tag if available */}
                  {service.cities && (
                    <div className="mb-6 bg-amber-50/80 border border-amber-200/60 rounded-xl p-3.5">
                      <span className="text-xs font-bold text-amber-900 uppercase block mb-1.5">
                        Área de Cobertura Principal:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {service.cities.map((city, idx) => (
                          <span key={idx} className="text-xs font-semibold text-slate-700 bg-white px-2 py-0.5 rounded border border-amber-200">
                            {city}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Key Features List */}
                  <ul className="space-y-2.5 mb-8 text-xs sm:text-sm text-slate-700">
                    {service.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-dhl-red shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Actions */}
                <div className="space-y-2.5 pt-4 border-t border-slate-100">
                  <button
                    onClick={() => setActiveModalService(service)}
                    className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 rounded-xl transition-colors text-sm flex items-center justify-center gap-2 group-hover:bg-dhl-red"
                  >
                    <span>Saiba Mais</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => onSelectService(service.title)}
                    className="w-full bg-dhl-yellow hover:bg-dhl-yellow-hover text-slate-950 font-bold py-2.5 rounded-xl transition-colors text-sm flex items-center justify-center gap-1.5 shadow-sm"
                  >
                    Cotar Este Serviço
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Regional Focus Banner */}
        <div className="mt-16 bg-slate-900 text-white rounded-2xl p-8 sm:p-10 shadow-xl relative overflow-hidden border border-slate-800">
          <div className="absolute -right-10 -bottom-10 opacity-10 pointer-events-none">
            <Truck className="w-96 h-96 text-white" />
          </div>
          <div className="relative z-10 max-w-3xl">
            <span className="text-dhl-yellow text-xs font-extrabold tracking-widest uppercase mb-2 block">
              Atendimento Regional Especializado
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
              Coletas Diárias em Uberlândia, Uberaba, Araguari e Catalão
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
              Nossa equipe operacional está presente nos principais polos industriais e comerciais da região. Agende a coleta da sua encomenda na sua empresa ou residência sem burocracia.
            </p>
            <button
              onClick={() => onSelectService('Transporte Rodoviário Regional')}
              className="bg-dhl-yellow hover:bg-dhl-yellow-hover text-slate-950 font-extrabold px-6 py-3 rounded-xl transition-all shadow-lg text-sm inline-flex items-center gap-2"
            >
              Agendar Coleta na Região
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>

      {/* Service Detail Modal */}
      {activeModalService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative border border-slate-200">
            <button
              onClick={() => setActiveModalService(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 bg-slate-100 p-2 rounded-full transition-colors"
            >
              ✕
            </button>

            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-dhl-red text-white rounded-xl flex items-center justify-center">
                <activeModalService.icon className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-dhl-red uppercase tracking-wider">Detalhes do Serviço</span>
                <h3 className="text-xl font-bold text-slate-900">{activeModalService.title}</h3>
              </div>
            </div>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
              {activeModalService.details}
            </p>

            <div className="bg-slate-50 rounded-xl p-4 mb-6 border border-slate-200">
              <h4 className="font-bold text-slate-900 text-sm mb-3">Vantagens Exclusivas UDI Entregas:</h4>
              <ul className="space-y-2 text-sm text-slate-700">
                {activeModalService.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-dhl-red" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => {
                  const title = activeModalService.title;
                  setActiveModalService(null);
                  onSelectService(title);
                }}
                className="flex-1 bg-dhl-yellow hover:bg-dhl-yellow-hover text-slate-950 font-extrabold py-3 rounded-xl transition-colors text-center text-sm shadow-md"
              >
                Solicitar Cotação Agora
              </button>
              <button
                onClick={() => setActiveModalService(null)}
                className="px-6 py-3 bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold rounded-xl text-sm transition-colors"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
