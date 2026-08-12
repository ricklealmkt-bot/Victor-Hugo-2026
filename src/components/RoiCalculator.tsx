import React, { useState } from 'react';
import { Calculator, DollarSign, TrendingUp, Sparkles, MessageSquare, ShieldAlert } from 'lucide-react';
import { handleWhatsAppClick } from '../utils/whatsapp';

export const RoiCalculator: React.FC = () => {
  const [budget, setBudget] = useState<number>(60000); // R$ 60.000 annual default

  // Calculations:
  // Average wasteful spending without strategy: ~30%
  const wasteSaved = Math.round(budget * 0.28);
  // Estimated perceived value increase: 3.2x
  const perceivedValue = Math.round(budget * 3.2);
  // Estimated LTV Retention increase (additional preserved revenue):
  const retentionValue = Math.round(budget * 2.5);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      maximumFractionDigits: 0
    }).format(val);
  };

  return (
    <section id="calculadora-roi" className="py-20 bg-[#080808] relative border-b border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A1813] border border-[#D4AF37]/30 text-xs text-[#D4AF37] font-semibold tracking-wider uppercase mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>Ferramenta Executiva</span>
          </div>
          <h2 className="font-serif-luxury font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Simulador de <span className="text-gold-gradient">Economia & ROI</span> Corporativo
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-400">
            Ajuste sua verba anual estimada em brindes e eventos corporativos para visualizar o potencial de otimização financeira.
          </p>
        </div>

        {/* Interactive Box */}
        <div className="max-w-4xl mx-auto glass-card-gold rounded-2xl p-6 sm:p-10 border border-[#D4AF37]/40 shadow-[0_0_50px_rgba(212,175,55,0.1)]">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Range Slider Controls */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#D4AF37] mb-2">
                  Verba Anual Estimada em Brindes/Eventos:
                </label>
                <div className="flex items-center justify-between bg-[#0A0A0A] p-4 rounded-xl border border-[#D4AF37]/30">
                  <span className="text-xs text-gray-400">R$</span>
                  <span className="font-serif-luxury font-black text-2xl sm:text-3xl text-white">
                    {formatCurrency(budget)}
                  </span>
                  <span className="text-xs text-gray-400">/ano</span>
                </div>
              </div>

              {/* Slider Input */}
              <div className="space-y-2">
                <input
                  type="range"
                  min={10000}
                  max={500000}
                  step={5000}
                  value={budget}
                  onChange={(e) => setBudget(Number(e.target.value))}
                  className="w-full h-2.5 bg-[#1C180E] rounded-lg appearance-none cursor-pointer accent-[#D4AF37]"
                />
                <div className="flex justify-between text-[10px] text-gray-500">
                  <span>R$ 10 mil</span>
                  <span>R$ 250 mil</span>
                  <span>R$ 500 mil+</span>
                </div>
              </div>

              {/* Notice */}
              <div className="p-3.5 rounded-lg bg-[#0F0D09] border border-[#D4AF37]/20 flex items-start gap-2.5 text-xs text-gray-300">
                <ShieldAlert className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <p>
                  Sem estratégia, cerca de <strong>28% a 35%</strong> deste orçamento é perdido em itens que não geram retenção nem lembrança de marca.
                </p>
              </div>
            </div>

            {/* Right: Projected Metrics Cards */}
            <div className="lg:col-span-6 space-y-4">
              <div className="p-4 rounded-xl bg-gradient-to-r from-[#18150E] to-[#0D0D0D] border border-[#D4AF37]/30 flex items-center justify-between">
                <div>
                  <p className="text-xs text-[#D4AF37] uppercase font-semibold">Desperdício Evitado (Economia Direta)</p>
                  <p className="font-serif-luxury font-black text-2xl text-white mt-1">
                    {formatCurrency(wasteSaved)}
                  </p>
                </div>
                <div className="w-10 h-10 rounded-lg bg-[#2A2415] border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37]">
                  <DollarSign className="w-5 h-5" />
                </div>
              </div>

              <div className="p-4 rounded-xl bg-gradient-to-r from-[#18150E] to-[#0D0D0D] border border-[#D4AF37]/30 flex items-center justify-between">
                <div>
                  <p className="text-xs text-[#D4AF37] uppercase font-semibold">Percepção de Valor Gerada</p>
                  <p className="font-serif-luxury font-black text-2xl text-gold-gradient mt-1">
                    {formatCurrency(perceivedValue)}
                  </p>
                </div>
                <div className="w-10 h-10 rounded-lg bg-[#2A2415] border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37]">
                  <Sparkles className="w-5 h-5" />
                </div>
              </div>

              <div className="p-4 rounded-xl bg-gradient-to-r from-[#18150E] to-[#0D0D0D] border border-[#D4AF37]/30 flex items-center justify-between">
                <div>
                  <p className="text-xs text-[#D4AF37] uppercase font-semibold">Potencial de Retenção de Contratos (LTV)</p>
                  <p className="font-serif-luxury font-black text-2xl text-white mt-1">
                    {formatCurrency(retentionValue)}
                  </p>
                </div>
                <div className="w-10 h-10 rounded-lg bg-[#2A2415] border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37]">
                  <TrendingUp className="w-5 h-5" />
                </div>
              </div>

              <button
                onClick={() => handleWhatsAppClick(`Olá Victor, calculei minha verba de ${formatCurrency(budget)} na calculadora do site e quero estruturar um plano estratégico.`)}
                className="w-full py-3.5 rounded-xl bg-gold-gradient hover:bg-gold-gradient-hover text-black font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg hover:scale-[1.02]"
              >
                <MessageSquare className="w-4 h-4 fill-black/20" />
                <span>Discutir Estes Números com o Victor</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
