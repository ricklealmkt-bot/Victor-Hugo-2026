import React from 'react';
import { Search, Compass, ShieldCheck, BarChart3, ArrowRight, MessageSquare } from 'lucide-react';
import { handleWhatsAppClick } from '../utils/whatsapp';

export const MethodologySection: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Auditoria & Diagnóstico',
      subtitle: 'Mapeamento de Falhas e Oportunidades',
      icon: Search,
      description: 'Análise criteriosa dos gastos passados, perfil dos presenteados (ICP/C-Level) e identificação de onde a empresa está perdendo dinheiro com compras ineficientes.',
      highlights: ['Análise de verba atual', 'Diagnóstico de churn', 'Mapeamento de perfil']
    },
    {
      number: '02',
      title: 'Alinhamento Estratégico',
      subtitle: 'Sinergia com Metas de Vendas',
      icon: Compass,
      description: 'Definição dos objetivos de negócio envolvidos: Onboarding de Grandes Clientes, Eventos VIP, Retenção (LTV), Reconhecimento Executivo ou Inbound Sales.',
      highlights: ['Definição de KPIs B2B', 'Foco em LTV & Pipeline', 'Gatilhos de decisão']
    },
    {
      number: '03',
      title: 'Planejamento & Curadoria',
      subtitle: 'Design de Ativos Corporativos',
      icon: ShieldCheck,
      description: 'Seleção e design de kits exclusivos que despertam alto desejo e utilidade. Negociação inteligente com fornecedores e otimização de estoque e logística.',
      highlights: ['Ativos de alto valor', 'Economia em escala', 'Logística simplificada']
    },
    {
      number: '04',
      title: 'Métricas & Relatório de ROI',
      subtitle: 'Resultados Mensuráveis para a Diretoria',
      icon: BarChart3,
      description: 'Acompanhamento do impacto das entregas na percepção de marca, engajamento dos clientes e taxa de conversão das equipes comerciais.',
      highlights: ['Relatório executivo C-Level', 'Medição de NPS & Resposta', 'Aprimoramento contínuo']
    }
  ];

  return (
    <section id="metodologia" className="py-20 md:py-28 bg-[#050505] relative border-b border-gray-900">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#D4AF37] font-serif-luxury text-xs font-bold uppercase tracking-widest px-3 py-1 rounded bg-[#12110D] border border-[#D4AF37]/30 inline-block mb-3">
            METODOLOGIA PROPRIETÁRIA DE 4 ETAPAS
          </span>
          <h2 className="font-serif-luxury font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            A <span className="text-gold-gradient">Ciência</span> por trás do Brinde
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-400">
            Saia do "achismo". Aplicamos um método estruturado de engenharia de valor para transformar investimento em relacionamento e vendas.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="card rounded-lg p-6 flex flex-col justify-between border border-zinc-800 hover:border-[#D4AF37]/50 transition-all duration-300 hover:-translate-y-1 group relative bg-[#0D0D0D]"
              >
                {/* Number Watermark Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="step-number">
                    PASSO {step.number}
                  </span>
                  <div className="w-9 h-9 rounded-lg bg-[#12110D] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] group-hover:scale-110 transition-transform">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="font-serif-luxury font-bold text-xl text-white group-hover:text-[#D4AF37] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs font-medium text-[#D4AF37] mt-1 mb-3">
                    {step.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                {/* Step Bullet Highlights */}
                <div className="border-t border-zinc-800/80 pt-4 mt-auto">
                  <ul className="space-y-1.5">
                    {step.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-center text-[11px] text-zinc-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mr-2"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            );
          })}
        </div>

        {/* Callout Footer */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#12110D] via-[#1C180E] to-[#12110D] border border-[#D4AF37]/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-serif-luxury font-bold text-lg text-white">
              Quer ver essa metodologia aplicada ao seu orçamento atual?
            </h4>
            <p className="text-xs sm:text-sm text-gray-400">
              Solicite uma análise preliminar gratuita sem compromisso direto com o Victor Hugo.
            </p>
          </div>
          <button
            onClick={() => handleWhatsAppClick('Olá Victor, quero apresentar minha verba atual para aplicar a Metodologia.')}
            className="shrink-0 px-6 py-3 rounded-xl bg-gold-gradient hover:bg-gold-gradient-hover text-black font-bold text-xs uppercase tracking-wide flex items-center gap-2 transition-all cursor-pointer shadow-lg hover:scale-[1.03]"
          >
            <span>Apresentar Meu Cenário</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
