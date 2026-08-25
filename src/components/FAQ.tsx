import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle, Headphones, CheckCircle2 } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First open by default

  const faqList = [
    {
      question: 'Quais tipos de envios posso realizar com a UDI Entregas?',
      answer: 'Realizamos envios de documentos urgentes (contratos, relatórios, passaportes), amostras comerciais, peças industriais, produtos eletrônicos e encomendas de consumo. Atendemos tanto envios esporádicos quanto operações corporativas de alto volume.'
    },
    {
      question: 'Quais países são atendidos pelo serviço internacional?',
      answer: 'Como Agente Autorizado DHL Express, cobrimos mais de 220 países e territórios no mundo inteiro. Isso inclui América do Norte, Europa, Ásia, Oceania, África e América Latina, com prazos expressos de entrega porta a porta.'
    },
    {
      question: 'Como funciona o processo de cotação de frete?',
      answer: 'A cotação é super rápida! Basta nos enviar via WhatsApp ou formulário: o CEP ou cidade/país de origem e destino, o tipo de item (documento ou mercadoria), peso aproximado e as dimensões da caixa (comprimento x largura x altura). Nossa equipe envia o valor na hora.'
    },
    {
      question: 'Pessoa Física (PF) e Pessoa Jurídica (PJ) podem enviar?',
      answer: 'Sim! Atendemos tanto Pessoas Físicas que precisam enviar documentos ou presentes para o exterior/Brasil, quanto empresas (PJ) de todos os portes com emissão de Nota Fiscal e faturamento corporativo.'
    },
    {
      question: 'Como posso rastrear minha encomenda?',
      answer: 'Ao despachar sua carga com a UDI Entregas, você recebe um código de rastreamento exclusivo (Waybill). Com ele, você acompanha cada movimentação em tempo real direto pelo site ou pelo nosso canal de atendimento WhatsApp.'
    },
    {
      question: 'Quais cidades possuem atendimento rodoviário regional direto?',
      answer: 'Nossa frota dedicada realiza coletas e entregas diárias diretas nas cidades de Uberlândia, Uberaba, Araguari, Catalão e em todo o entorno do Triângulo Mineiro e Alto Paranaíba.'
    },
    {
      question: 'Vocês auxiliam com a documentação alfandegária (Invoices e faturas)?',
      answer: 'Com certeza! Esse é um dos nossos maiores diferenciais. Nossa assessoria especializada orienta você passo a passo no preenchimento da Commercial Invoice (fatura comercial), declarações e documentos necessários para que a encomenda passe rapidamente pela alfândega sem retenções.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const whatsappNumber = '5534999999999';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Olá! Tenho algumas dúvidas sobre os envios e gostaria de falar com um Especialista da UDI Entregas.')}`;

  return (
    <section id="faq" className="py-24 bg-slate-900 text-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-4 py-1.5 text-dhl-yellow text-xs sm:text-sm font-bold uppercase tracking-wider">
            <HelpCircle className="w-4 h-4 text-dhl-yellow" />
            Tire Suas Dúvidas
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Perguntas Frequentes (FAQ)
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
            Respostas claras para as principais dúvidas sobre frete, prazos, documentação e cobertura de atendimento.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqList.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl transition-all duration-300 border ${
                  isOpen 
                    ? 'bg-slate-800/90 border-dhl-yellow shadow-lg shadow-dhl-yellow/5' 
                    : 'bg-slate-800/40 border-slate-800 hover:border-slate-700 hover:bg-slate-800/60'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-white focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-3">
                    <span className={`w-2 h-2 rounded-full shrink-0 ${isOpen ? 'bg-dhl-yellow' : 'bg-slate-600'}`}></span>
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-dhl-yellow shrink-0 transition-transform duration-300 ${
                      isOpen ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-slate-300 text-sm sm:text-base leading-relaxed border-t border-slate-700/50 pt-4 animate-in fade-in duration-200">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Box */}
        <div className="mt-16 bg-slate-800/80 border border-slate-700 rounded-3xl p-8 text-center space-y-6 shadow-2xl relative overflow-hidden">
          <div className="w-16 h-16 bg-dhl-yellow text-slate-950 rounded-2xl flex items-center justify-center mx-auto shadow-lg mb-2">
            <Headphones className="w-8 h-8" />
          </div>

          <div className="max-w-xl mx-auto space-y-2">
            <h3 className="text-2xl font-extrabold text-white">Não encontrou a sua resposta?</h3>
            <p className="text-slate-300 text-sm sm:text-base">
              Nossa equipe de especialistas de Uberlândia está pronta para analisar seu caso específico e orientar o melhor envio.
            </p>
          </div>

          <div className="pt-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-dhl-yellow hover:bg-dhl-yellow-hover text-slate-950 font-extrabold px-8 py-4 rounded-xl shadow-xl hover:shadow-dhl-yellow/20 transition-all text-base sm:text-lg transform hover:-translate-y-0.5 border-b-4 border-amber-600"
            >
              <MessageCircle className="w-6 h-6 fill-slate-950 text-dhl-yellow" />
              <span>Dúvidas? Fale com um Especialista</span>
            </a>
          </div>

          <div className="flex justify-center items-center gap-6 pt-2 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Resposta em minutos
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Atendimento Humanizado
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
