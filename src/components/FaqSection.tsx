import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';
import { handleWhatsAppClick } from '../utils/whatsapp';

interface FaqItem {
  question: string;
  answer: string;
}

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      question: "Como o ROI de uma consultoria em brindes corporativos é calculado?",
      answer: "O ROI é medido em três dimensões diretas: 1) Economia financeira obtida na otimização de compras e eliminação de desperdícios de estoque; 2) Aumento na taxa de retenção de clientes VIPs e renovação de contratos de alto valor (LTV); 3) Métricas de resposta e engajamento da equipe e prospects C-Level em campanhas de Vendas e Eventos Corporativos."
    },
    {
      question: "A consultoria se paga no primeiro projeto?",
      answer: "Sim. Em mais de 90% dos casos, a renegociação de lote, o redesenho de logística e a substituição de itens descartáveis por ativos de alto impacto cobrem integralmente o investimento da consultoria já no primeiro ciclo de compras."
    },
    {
      question: "Como funciona o formato de atendimento e prazos?",
      answer: "O atendimento é 100% executivo e personalizado. Realizamos um diagnóstico inicial presencial ou online em Belo Horizonte/MG e região (ou remoto para todo o Brasil), definimos a estratégia de curadoria e acompanhamos todas as etapas até a entrega final com relatórios de performance para a diretoria."
    },
    {
      question: "Minha empresa precisa ter uma verba mínima para contratar?",
      answer: "Atendemos desde empresas B2B em fase de expansão com projetos sazonais ou de onboarding de clientes até grandes corporações com orçamentos anuais estruturados. Realizamos o diagnóstico para avaliar se o seu volume atual justifica o modelo de consultoria."
    },
    {
      question: "Quem cuida da produção, personalização e entrega física dos brindes?",
      answer: "A consultoria atua como sua parceira estratégica end-to-end. Nós homologamos fornecedores de altíssimo padrão, fazemos o controle de qualidade, supervisionamos as amostras físicas e gerenciamos a logística para que sua equipe interna não perca horas com operacional."
    }
  ];

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#050505] relative border-b border-gray-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A1813] border border-[#D4AF37]/30 text-xs text-[#D4AF37] font-semibold tracking-wider uppercase mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>TRANSPARÊNCIA EXECUTIVA</span>
          </div>
          <h2 className="font-serif-luxury font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            FAQ de <span className="text-gold-gradient">Performance</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-400">
            Respostas diretas para as dúvidas mais frequentes dos diretores e gestores de Vendas, Marketing e Compras.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-xl transition-all duration-300 border ${
                  isOpen
                    ? 'bg-[#12100A] border-[#D4AF37]/50 shadow-[0_4px_20px_rgba(212,175,55,0.08)]'
                    : 'bg-[#0A0A0A] border-gray-800/80 hover:border-gray-700'
                }`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-serif-luxury font-bold text-base sm:text-lg text-white hover:text-[#D4AF37] transition-colors cursor-pointer"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-xs text-[#D4AF37] font-mono">0{idx + 1}.</span>
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full border border-gray-800 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#D4AF37] text-black border-[#D4AF37]' : 'text-gray-400'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 text-sm text-gray-300 leading-relaxed border-t border-[#D4AF37]/15 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* FAQ Support Banner */}
        <div className="mt-12 text-center p-6 rounded-xl bg-[#0A0A0A] border border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs text-gray-300">
            Ficou com alguma dúvida técnica específica sobre a sua verba ou projeto em Minas Gerais/Brasil?
          </span>
          <button
            onClick={() => handleWhatsAppClick('Olá Victor, tenho uma dúvida específica antes de agendar o diagnóstico.')}
            className="px-4 py-2 rounded-lg bg-[#1C180E] border border-[#D4AF37]/40 hover:border-[#D4AF37] text-xs font-semibold text-[#D4AF37] flex items-center gap-2 transition-all cursor-pointer hover:bg-[#D4AF37] hover:text-black"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Tirar Dúvida no WhatsApp</span>
          </button>
        </div>

      </div>
    </section>
  );
};
