import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { InstagramIcon } from './components/SocialIcons';
import { MapPin, Phone, Clock, ArrowRight } from 'lucide-react';

export function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Aéreo Internacional DHL Express');

  const handleOpenQuoteModal = (serviceName?: string) => {
    if (serviceName) {
      setSelectedService(serviceName);
    }
    setIsQuoteModalOpen(true);
  };

  const whatsappNumber = '5534991671026';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Olá! Gostaria de agendar uma coleta em Uberlândia/Região.')}`;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans selection:bg-dhl-yellow selection:text-slate-950">
      {/* Header */}
      <Header onOpenQuoteModal={() => handleOpenQuoteModal()} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Section 1: Hero */}
        <Hero onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* Section 2: Services */}
        <Services onSelectService={(serviceName) => handleOpenQuoteModal(serviceName)} />

        {/* Section 3: Quem Somos & Diferenciais */}
        <About />

        {/* Section 4: FAQ */}
        <FAQ />

        {/* Contact & Map Banner Section - Seamless Fusion with FAQ */}
        <section id="contact" className="pt-2 pb-20 sm:pb-24 bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 rounded-3xl p-8 sm:p-12 shadow-2xl text-white border border-slate-800 relative overflow-hidden">
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-6">
                  <div className="inline-flex items-center gap-2 bg-dhl-red text-white text-xs font-extrabold uppercase px-3 py-1 rounded-md tracking-wider">
                    <MapPin className="w-4 h-4" />
                    Sede Uberlândia - MG
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                    Pronto para enviar sua encomenda com a UDI Entregas?
                  </h2>
                  <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                    Visite nossa loja própria em Uberlândia ou agende a coleta diretamente no seu endereço empresarial ou residencial, com atendimento rápido, acolhedor e humanizado.
                  </p>
                  
                  <div className="space-y-1.5 text-slate-300 text-sm">
                    <p className="text-slate-300 font-medium">
                      Rua Oril Caetano de Rezende, nº 10, Uberlândia - MG, CEP 38405-365
                    </p>
                    <div className="flex flex-wrap items-center gap-4 pt-1">
                      <a
                        href="https://www.google.com/maps/search/?api=1&query=Rua+Oril+Caetano+de+Rezende%2C+10%2C+Uberl%C3%A2ndia+-+MG%2C+38405-365"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-dhl-yellow hover:text-white transition-colors"
                      >
                        <span>Ver localização no Google Maps</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                      <span className="text-slate-600 hidden sm:inline">•</span>
                      <a
                        href="https://instagram.com/udientregasurgentes"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-slate-300 hover:text-dhl-yellow transition-colors group relative z-10"
                      >
                        <InstagramIcon className="w-4 h-4 text-dhl-yellow group-hover:scale-110 transition-transform shrink-0" />
                        <span>@udientregasurgentes</span>
                      </a>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-300 pt-2">
                    <div className="flex items-center gap-3 bg-slate-800/80 p-3.5 rounded-xl border border-slate-700">
                      <Phone className="w-5 h-5 text-dhl-yellow shrink-0" />
                      <div>
                        <strong className="text-white block">Telefones:</strong>
                        <span>(34) 3213-4702 / (34) 99167-1026</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 bg-slate-800/80 p-3.5 rounded-xl border border-slate-700">
                      <Clock className="w-5 h-5 text-dhl-yellow shrink-0" />
                      <div>
                        <strong className="text-white block">Horário de Atendimento:</strong>
                        <span>Geral: Seg. a Sex. 08h às 18h<br />DHL Express: Seg. a Sex. 09h às 17h</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 flex flex-col items-center justify-center space-y-4 bg-slate-800/50 p-6 sm:p-8 rounded-2xl border border-slate-700/80 text-center">
                  <span className="text-xs font-bold uppercase tracking-wider text-dhl-yellow">
                    Atendimento Direto & Personalizado
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    Agende sua Coleta na Região
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm max-w-sm">
                    Fale agora com nossa equipe para tirar dúvidas ou agendar a retirada da sua encomenda sem complicações.
                  </p>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-dhl-yellow hover:bg-dhl-yellow-hover text-slate-950 font-extrabold py-4 px-6 rounded-xl text-center shadow-lg transition-all flex items-center justify-center gap-2 border-b-4 border-amber-600 group text-base"
                  >
                    <span>Falar Direto no WhatsApp</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Sticky Action */}
      <FloatingWhatsApp />

      {/* Interactive Quotation Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        initialService={selectedService}
      />
    </div>
  );
}

export default App;
