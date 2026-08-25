import React, { useState } from 'react';
import { X, MessageCircle, Package } from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose, initialService = '' }) => {
  const [serviceType, setServiceType] = useState(initialService || 'Aéreo Internacional DHL Express');
  const [itemType, setItemType] = useState('Documento');
  const [personType, setPersonType] = useState('Pessoa Jurídica (PJ)');
  const [origin, setOrigin] = useState('Uberlândia - MG');
  const [destination, setDestination] = useState('');
  const [weight, setWeight] = useState('');
  const [notes, setNotes] = useState('');

  if (!isOpen) return null;

  const handleWhatsAppSend = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `*SOLICITAÇÃO DE COTAÇÃO - UDI ENTREGAS*\n` +
      `-----------------------------------\n` +
      `*Serviço:* ${serviceType}\n` +
      `*Perfil:* ${personType}\n` +
      `*Tipo de Carga:* ${itemType}\n` +
      `*Origem:* ${origin}\n` +
      `*Destino:* ${destination || 'A informar'}\n` +
      `*Peso/Dimensões Aprox.:* ${weight || 'A informar'}\n` +
      (notes ? `*Observações:* ${notes}\n` : '') +
      `-----------------------------------\n` +
      `Olá! Gostaria de receber o orçamento deste envio.`;

    const whatsappNumber = '5534999999999';
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative border border-slate-200 overflow-hidden">
        
        {/* Top Decorative Line */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-dhl-red via-dhl-yellow to-dhl-red"></div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 bg-slate-100 hover:bg-slate-200 p-2 rounded-full transition-colors"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-1.5 text-xs font-extrabold text-dhl-red uppercase tracking-wider bg-red-50 px-3 py-1 rounded-full border border-red-100 mb-2">
            <Package className="w-3.5 h-3.5" />
            Cotação Rápida WhatsApp
          </div>
          <h3 className="text-2xl font-extrabold text-slate-900">Solicitar Cotação de Envio</h3>
          <p className="text-slate-600 text-xs sm:text-sm mt-1">
            Preencha os dados abaixo para direcionarmos seu orçamento imediatamente ao especialista no WhatsApp.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleWhatsAppSend} className="space-y-4">
          
          {/* Service Selection */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Selecione o Serviço:
            </label>
            <select
              value={serviceType}
              onChange={(e) => setServiceType(e.target.value)}
              className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm font-medium text-slate-900 focus:ring-2 focus:ring-dhl-yellow focus:border-dhl-yellow outline-none"
            >
              <option value="Aéreo Internacional DHL Express">Aéreo Internacional DHL Express (+220 países)</option>
              <option value="Aéreo Nacional">Aéreo Nacional (Brasil Expresso)</option>
              <option value="Transporte Rodoviário Regional">Transporte Rodoviário Regional (Uberlândia/Região)</option>
            </select>
          </div>

          {/* Profile & Item Type Grid */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Tipo de Cliente:
              </label>
              <select
                value={personType}
                onChange={(e) => setPersonType(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs sm:text-sm font-medium text-slate-900 focus:ring-2 focus:ring-dhl-yellow outline-none"
              >
                <option value="Pessoa Jurídica (PJ)">Pessoa Jurídica (PJ)</option>
                <option value="Pessoa Física (PF)">Pessoa Física (PF)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Conteúdo:
              </label>
              <select
                value={itemType}
                onChange={(e) => setItemType(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs sm:text-sm font-medium text-slate-900 focus:ring-2 focus:ring-dhl-yellow outline-none"
              >
                <option value="Documento">Documento / Carta</option>
                <option value="Mercadoria / Caixa">Mercadoria / Encomenda</option>
                <option value="Amostra Comercial">Amostra Comercial</option>
              </select>
            </div>
          </div>

          {/* Origin & Destination Grid */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Origem:
              </label>
              <input
                type="text"
                value={origin}
                onChange={(e) => setOrigin(e.target.value)}
                placeholder="Ex: Uberlândia - MG"
                required
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs sm:text-sm text-slate-900 focus:ring-2 focus:ring-dhl-yellow outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Destino (Cidade/País):
              </label>
              <input
                type="text"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                placeholder="Ex: Miami (EUA) ou São Paulo"
                required
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs sm:text-sm text-slate-900 focus:ring-2 focus:ring-dhl-yellow outline-none"
              />
            </div>
          </div>

          {/* Weight / Dimensions */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Peso e Dimensões Estimados:
            </label>
            <input
              type="text"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="Ex: 2kg ou 30x20x15cm (opcional)"
              className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs sm:text-sm text-slate-900 focus:ring-2 focus:ring-dhl-yellow outline-none"
            />
          </div>

          {/* Additional Notes */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Observações Adicionais:
            </label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={2}
              placeholder="Ex: Preciso de coleta agendada para hoje à tarde..."
              className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs sm:text-sm text-slate-900 focus:ring-2 focus:ring-dhl-yellow outline-none resize-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-dhl-yellow hover:bg-dhl-yellow-hover text-slate-950 font-extrabold py-3.5 rounded-xl shadow-xl hover:shadow-dhl-yellow/30 transition-all text-sm sm:text-base flex items-center justify-center gap-2 border-b-4 border-amber-600 mt-4"
          >
            <MessageCircle className="w-5 h-5 fill-slate-950 text-dhl-yellow" />
            <span>Enviar Cotação via WhatsApp</span>
          </button>
        </form>

        <p className="text-[11px] text-slate-400 text-center mt-3">
          Ao clicar, você será redirecionado para o atendimento oficial da UDI Entregas no WhatsApp.
        </p>

      </div>
    </div>
  );
};
