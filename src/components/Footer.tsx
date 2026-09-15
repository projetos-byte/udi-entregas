import React from 'react';
import { MessageCircle } from 'lucide-react';
import { InstagramIcon, FacebookIcon } from './SocialIcons';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const whatsappNumber = '5534991671026';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Olá! Vim pelo rodapé do site da UDI Entregas e gostaria de falar sobre um envio.')}`;

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 pt-16 pb-12 relative overflow-hidden">
      
      {/* Top Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-dhl-red via-dhl-yellow to-dhl-red"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr_1fr_1fr] items-start gap-6 lg:gap-10 pb-12 border-b border-slate-800">
          
          {/* Column 1: Brand & About */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="-mt-1 bg-dhl-yellow text-slate-950 font-black tracking-tighter text-xl px-3 py-1 rounded-lg border-b-2 border-dhl-yellow-hover">
                UDI <span className="text-dhl-red">ENTREGAS</span>
              </div>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              Há mais de 30 anos oferecendo soluções completas de logística expressa nacional e internacional com sede própria estratégica em Uberlândia.
            </p>

            {/* Social Icons */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-slate-900 hover:bg-emerald-600 text-emerald-400 hover:text-white rounded-xl flex items-center justify-center border border-slate-800 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/udientregasurgentes"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-slate-900 hover:bg-dhl-red text-slate-400 hover:text-white rounded-xl flex items-center justify-center border border-slate-800 transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-slate-900 hover:bg-blue-600 text-slate-400 hover:text-white rounded-xl flex items-center justify-center border border-slate-800 transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-base tracking-wide leading-none">
              Links Rápidos
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li>
                <a href="#home" className="text-slate-400 hover:text-white transition-colors duration-200">Início (Home)</a>
              </li>
              <li>
                <a href="#services" className="text-slate-400 hover:text-white transition-colors duration-200">Nossos Serviços</a>
              </li>
              <li>
                <a href="#about" className="text-slate-400 hover:text-white transition-colors duration-200">Quem Somos & Diferenciais</a>
              </li>
              <li>
                <a href="#faq" className="text-slate-400 hover:text-white transition-colors duration-200">Perguntas Frequentes (FAQ)</a>
              </li>
              <li>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors duration-200">Solicitar Cotação no WhatsApp</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Attendance */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-base tracking-wide leading-none">
              Contatos & Atendimento
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-400">
              <li>
                <strong className="font-medium text-slate-400">Sede Operacional:</strong><br />
                Rua Oril Caetano de Rezende, nº 10<br />
                Uberlândia - MG | CEP: 38405-365
              </li>
              <li>(34) 99167-1026 / (34) 3213-4702</li>
              <li>Geral: Segunda a sexta, 08h às 18h</li>
              <li>DHL Express: Segunda a sexta, 09h às 17h</li>
            </ul>
          </div>

          {/* Column 4: Location & Legal */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-base tracking-wide leading-none">
              Localização & Cobertura
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Base operacional em <strong>Uberlândia - MG</strong>, atendendo com coletas e entregas em <strong>Uberaba, Araguari, Catalão, Patos de Minas, Araxá e Patrocínio</strong>. Consulte outras rotas.
            </p>
          </div>

        </div>

        {/* Bottom Legal Rights Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {currentYear} UDI Entregas. Todos os direitos reservados.</p>
          <p className="pr-20 text-center sm:text-right">
            UDI Entregas Urgentes Ltda. | Atuação: Agente Autorizado DHL Express
          </p>
        </div>

      </div>
    </footer>
  );
};
