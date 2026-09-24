import React from 'react';
import { Clock3, ShieldCheck, Target } from 'lucide-react';

const institutionalContent = [
  {
    text: 'Terminal de cargas com coleta e entrega 24 horas por dia, inclusive sábados, domingos e feriados.',
    icon: Clock3,
  },
  {
    text: 'Nossa estrutura conta com monitoramento 24 horas por dia, por meio de circuito interno e externo de câmeras, sistema de alarme e vigilância especializada, garantindo mais segurança para todas as operações.',
    icon: ShieldCheck,
  },
  {
    text: 'Mais do que transportar cargas, nossa missão é construir relações de confiança, oferecendo soluções logísticas eficientes para atender às necessidades de cada cliente.',
    icon: Target,
  },
];

export const About: React.FC = () => {
  return (
    <section id="about" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-extrabold tracking-tight text-dhl-red underline decoration-dhl-yellow decoration-4 underline-offset-8 sm:text-4xl">
              Quem Somos
            </h2>

            <p className="text-base leading-relaxed text-slate-700 sm:text-lg">
              Há 30 anos, a Udi Entregas oferece soluções logísticas com agilidade, segurança e atendimento personalizado. Com sede própria em Uberlândia, estrategicamente localizada próxima ao aeroporto e às principais transportadoras rodoviárias, atuamos com excelência no transporte de cargas nacionais, internacionais e regionais.
            </p>

            <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
              Como Agente Autorizado DHL Express, conectamos empresas e pessoas ao Brasil e ao mundo por meio de envios rápidos e seguros. Também realizamos entregas rodoviárias em Uberlândia e cidades da região, sempre com uma equipe altamente capacitada e comprometida com a qualidade em cada operação.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
              ATENDIMENTO PERSONALIZADO
            </h2>

            <div className="space-y-5">
              {institutionalContent.map(({ text, icon: Icon }) => (
                <article key={text} className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-900 text-dhl-yellow">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="text-sm leading-relaxed text-slate-600 sm:text-base">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};