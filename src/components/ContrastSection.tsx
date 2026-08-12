import React from 'react';
import { XCircle, CheckCircle, AlertTriangle, Sparkles, TrendingDown, TrendingUp, MessageSquare } from 'lucide-react';
import { handleWhatsAppClick } from '../utils/whatsapp';

export const ContrastSection: React.FC = () => {
  return (
    <section id="comparativo" className="py-20 md:py-28 bg-[#080808] relative border-b border-gray-900">
      
      {/* Subtle Background Lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-red-900/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A1813] border border-[#D4AF37]/30 text-xs text-[#D4AF37] font-semibold tracking-wider uppercase mb-3">
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>Diagnóstico de Desperdício x Valor</span>
          </div>
          <h2 className="font-serif-luxury font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            Por que sua empresa <span className="text-red-500 underline decoration-red-900">perde dinheiro</span> hoje?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-400">
            A maioria das empresas trata brindes como um "custo operacional inevitável". Veja a diferença quando transformamos essa verba em inteligência B2B.
          </p>
        </div>

        {/* 2-Column Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Card 1: O Cenário Amador (Amateur / Wasteful) */}
          <div className="card border-l-4 border-red-900 bg-red-950/20 rounded-lg p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden transition-all duration-300 hover:border-red-500/40 shadow-xl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/5 rounded-full blur-2xl"></div>

            <div>
              {/* Header Badge */}
              <div className="flex items-center justify-between border-b border-red-900/40 pb-5 mb-6">
                <div>
                  <span className="px-2.5 py-1 rounded bg-red-950/80 border border-red-800/50 text-[11px] font-bold text-red-400 uppercase tracking-wider">
                    Como a maioria faz
                  </span>
                  <h3 className="font-serif-luxury text-2xl font-bold text-white mt-2 flex items-center gap-2">
                    O Cenário Amador
                    <TrendingDown className="w-5 h-5 text-red-500" />
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-xl bg-red-950/50 border border-red-900/60 flex items-center justify-center shrink-0">
                  <XCircle className="w-6 h-6 text-red-500" />
                </div>
              </div>

              {/* Items List */}
              <ul className="space-y-5 text-sm sm:text-base">
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-zinc-200 font-semibold block">Gastos reativos e de última hora:</strong>
                    <p className="text-zinc-400 text-xs sm:text-sm mt-0.5">
                      Compras desesperadas perto de datas comemorativas sem briefing ou direcionamento claro.
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-zinc-200 font-semibold block">Foco cego no "menor preço por unidade":</strong>
                    <p className="text-zinc-400 text-xs sm:text-sm mt-0.5">
                      Cotações vazias que priorizam centavos e entregam produtos de baixíssima qualidade percebida.
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-zinc-200 font-semibold block">Itens no lixo, gaveta ou doados:</strong>
                    <p className="text-zinc-400 text-xs sm:text-sm mt-0.5">
                      Canetas descartáveis, squeezes frágeis ou cadernos genéricos que não geram memória nem desejo.
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-zinc-200 font-semibold block">Ausência total de métricas de retorno:</strong>
                    <p className="text-zinc-400 text-xs sm:text-sm mt-0.5">
                      A diretoria não sabe se o valor gasto trouxe retenção de clientes, fechamento de contratos ou churn.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Bottom Warning Banner */}
            <div className="mt-8 pt-4 border-t border-red-900/30 text-xs text-red-300 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-red-400 shrink-0" />
              <span>Resultado: Verbas de marketing/compras desperdiçadas sem impacto em Vendas.</span>
            </div>

          </div>

          {/* Card 2: O Método Estratégico (Victor Hugo Executive Gold) */}
          <div className="card border-l-4 border-[#D4AF37] bg-amber-500/10 rounded-lg p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden transition-all duration-300 shadow-[0_10px_40px_rgba(212,175,55,0.15)]">
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none"></div>

            <div>
              {/* Header Badge */}
              <div className="flex items-center justify-between border-b border-[#D4AF37]/30 pb-5 mb-6">
                <div>
                  <span className="px-2.5 py-1 rounded bg-gold-gradient text-black font-extrabold text-[11px] uppercase tracking-wider shadow">
                    Consultoria Victor Hugo
                  </span>
                  <h3 className="font-serif-luxury text-2xl font-bold text-white mt-2 flex items-center gap-2">
                    O Método Estratégico
                    <TrendingUp className="w-5 h-5 text-[#D4AF37]" />
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-xl bg-[#1A1710] border border-[#D4AF37] flex items-center justify-center shrink-0 shadow-md">
                  <Sparkles className="w-6 h-6 text-[#D4AF37]" />
                </div>
              </div>

              {/* Items List */}
              <ul className="space-y-5 text-sm sm:text-base">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white font-semibold block">Auditoria de gaps e jornada do cliente:</strong>
                    <p className="text-zinc-300 text-xs sm:text-sm mt-0.5">
                      Mapeamento cirúrgico dos pontos de contato onde um presente de valor acelera o pipeline de Vendas.
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white font-semibold block">Curadoria focada em KPIs corporativos:</strong>
                    <p className="text-zinc-300 text-xs sm:text-sm mt-0.5">
                      Seleção de ativos alinhados aos objetivos de negócio (Upsell, Renewal, Onboarding VIP, C-Level).
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white font-semibold block">Ativos de alto desejo e utilidade extrema:</strong>
                    <p className="text-zinc-300 text-xs sm:text-sm mt-0.5">
                      Itens premium, exclusivos e altamente personalizados que os tomadores de decisão utilizam no dia a dia.
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white font-semibold block">Relatórios de ROI claros para a Diretoria:</strong>
                    <p className="text-zinc-300 text-xs sm:text-sm mt-0.5">
                      Apresentação executiva demonstrando a taxa de engajamento, retenção e economia obtida.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Bottom CTA Action inside Card */}
            <div className="mt-8 pt-5 border-t border-[#D4AF37]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-[#F3E5AB] font-medium">
                Pronto para eliminar o desperdício na sua empresa?
              </span>
              <button
                onClick={() => handleWhatsAppClick('Olá Victor, quero migrar minha empresa para o Método Estratégico.')}
                className="w-full sm:w-auto px-5 py-2.5 rounded-full gold-btn text-black font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg hover:scale-105"
              >
                <MessageSquare className="w-4 h-4 fill-black/20" />
                <span>Migrar para o Método</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
