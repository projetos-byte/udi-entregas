import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
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

  const whatsappNumber = '5534999999999';
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

        {/* Contact & Map Banner Section */}
        <section id="contact" className="py-20 bg-white border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 rounded-3xl p-8 sm:p-12 shadow-2xl text-white border border-slate-800 relative overflow-hidden">
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-6">
                  <div className="inline-flex items-center gap-2 bg-dhl-red text-white text-xs font-extrabold uppercase px-3 py-1 rounded-md tracking-wider">
                    <MapPin className="w-4 h-4" />
                    Sede Uberlândia - MG
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                    Pronto para enviar sua encomenda com a UDI Entregas?
                  </h2>
                  <p className="text-slate-300 text-base leading-relaxed">
                    Visite nossa loja própria em Uberlândia ou agende a coleta no seu endereço empresarial ou residencial com atendimento humanizado.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-300 pt-2">
                    <div className="flex items-center gap-2.5 bg-slate-800/80 p-3.5 rounded-xl border border-slate-700">
                      <Phone className="w-5 h-5 text-dhl-yellow shrink-0" />
                      <div>
                        <strong className="text-white block">Telefones:</strong>
                        (34) 3233-0000 / (34) 99999-9999
                      </div>
                    </div>

                    <div className="flex items-center gap-2.5 bg-slate-800/80 p-3.5 rounded-xl border border-slate-700">
                      <Clock className="w-5 h-5 text-dhl-yellow shrink-0" />
                      <div>
                        <strong className="text-white block">Horário:</strong>
                        Seg. a Sex. das 08h às 18h
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 flex flex-col items-center justify-center space-y-4 bg-slate-800/50 p-6 rounded-2xl border border-slate-700/80">
                  <span className="text-xs font-bold uppercase tracking-wider text-dhl-yellow text-center">
                    Agende sua Coleta na Região
                  </span>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-dhl-yellow hover:bg-dhl-yellow-hover text-slate-950 font-extrabold py-4 px-6 rounded-xl text-center shadow-lg transition-all flex items-center justify-center gap-2 border-b-4 border-amber-600"
                  >
                    <span>Falar Direto no WhatsApp</span>
                    <ArrowRight className="w-5 h-5" />
                  </a>
                  <button
                    onClick={() => handleOpenQuoteModal()}
                    className="w-full bg-slate-900 hover:bg-slate-950 text-white font-bold py-3 px-6 rounded-xl text-center border border-slate-700 text-sm transition-colors"
                  >
                    Simular Cotação Online
                  </button>
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
