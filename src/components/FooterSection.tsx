import React from 'react';
import { MessageSquare, ShieldCheck, MapPin, Code, ArrowUpRight, Phone, Lock, Unlock } from 'lucide-react';
import { handleWhatsAppClick } from '../utils/whatsapp';
import { useAdmin } from '../context/AdminContext';

interface FooterSectionProps {
  onOpenExportModal: () => void;
}

export const FooterSection: React.FC<FooterSectionProps> = ({ onOpenExportModal }) => {
  const { isAdmin, toggleAdmin } = useAdmin();

  return (
    <footer className="bg-[#030303] text-gray-400 border-t border-gray-900 pt-20 pb-12 relative overflow-hidden">
      
      {/* Background Subtle Gold Radial Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gold-radial pointer-events-none opacity-40 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* High Conversion Closing Banner */}
        <div className="mb-20 p-8 sm:p-12 rounded-3xl glass-card-gold text-center max-w-4xl mx-auto relative overflow-hidden border-2 border-[#D4AF37]/40 shadow-[0_0_60px_rgba(212,175,55,0.15)]">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#12110D] border border-[#D4AF37]/30 text-xs font-semibold text-[#D4AF37] mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>DIAGNÓSTICO ESTRATÉGICO EXECUTIVO</span>
          </div>

          <h2 className="font-serif-luxury font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
            Pare de comprar brindes.<br />
            Comece a investir em <span className="text-gold-gradient">Ativos de Vendas</span>.
          </h2>

          <p className="mt-4 text-sm sm:text-base text-gray-300 max-w-2xl mx-auto">
            Agende uma conversa direta de 20 minutos com Victor Hugo e descubra como otimizar seu orçamento para este ano.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Primary Golden WhatsApp CTA */}
            <button
              onClick={() => handleWhatsAppClick('Olá Victor, quero agendar meu diagnóstico estratégico executivo.')}
              className="w-full sm:w-auto relative group overflow-hidden inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-bold text-black bg-gold-gradient hover:bg-gold-gradient-hover transition-all duration-300 shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:scale-[1.03] cursor-pointer"
            >
              <span className="absolute inset-0 w-full h-full animate-shimmer pointer-events-none"></span>
              <MessageSquare className="w-5 h-5 mr-3 fill-black/20" />
              <span>Solicitar Diagnóstico no WhatsApp</span>
            </button>

            {/* Secondary WhatsApp Button */}
            <button
              onClick={() => handleWhatsAppClick('Olá Victor, gostaria de receber uma apresentação institucional do método.')}
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-4 rounded-xl text-sm font-semibold text-[#D4AF37] bg-[#14120D] border border-[#D4AF37]/40 hover:bg-[#1E1B13] hover:border-[#D4AF37] transition-all cursor-pointer"
            >
              <span>Solicitar Apresentação Institucional</span>
              <ArrowUpRight className="w-4 h-4 ml-2" />
            </button>
          </div>
        </div>

        {/* Footer Navigation & Signature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-gray-900">
          
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-gold-gradient p-[1px]">
                <div className="w-full h-full bg-[#0D0D0D] rounded-[7px] flex items-center justify-center font-serif-luxury font-bold text-gold-gradient text-lg">
                  VH
                </div>
              </div>
              <span className="font-serif-luxury font-bold text-white text-lg tracking-tight">
                Victor Hugo | Consultor Estratégico de Brindes B2B
              </span>
            </div>
            <p className="text-xs text-gray-400 max-w-sm leading-relaxed">
              Consultoria especializada em Inteligência de Gifting e ROI em Brindes Corporativos B2B para diretoria, equipes de Vendas e Marketing.
            </p>
            <div className="flex flex-col space-y-1.5 text-xs text-[#D4AF37]">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 shrink-0" />
                <span>Belo Horizonte / MG — Atendimento Presencial & Nacional</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>(31) 99745-5656</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-3 space-y-3">
            <h4 className="font-serif-luxury text-xs font-bold text-white uppercase tracking-wider">Navegação</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#comparativo" className="hover:text-[#D4AF37] transition-colors">Por Que Nós</a></li>
              <li><a href="#metodologia" className="hover:text-[#D4AF37] transition-colors">Metodologia 4 Passos</a></li>
              <li><a href="#calculadora-roi" className="hover:text-[#D4AF37] transition-colors">Calculadora ROI</a></li>
              <li><a href="#faq" className="hover:text-[#D4AF37] transition-colors">FAQ Executivo</a></li>
            </ul>
          </div>

          <div className="md:col-span-3 space-y-3">
            <h4 className="font-serif-luxury text-xs font-bold text-white uppercase tracking-wider">Painel Administrador</h4>
            <div className="space-y-2">
              {isAdmin ? (
                <>
                  <button
                    onClick={onOpenExportModal}
                    className="text-xs text-[#D4AF37] hover:underline flex items-center gap-1.5 cursor-pointer font-medium"
                  >
                    <Code className="w-3.5 h-3.5" />
                    <span>Exportar Código HTML5 Standalone</span>
                  </button>
                  <div className="pt-1">
                    <button
                      onClick={toggleAdmin}
                      className="text-[11px] text-zinc-400 hover:text-white flex items-center gap-1 bg-zinc-900 px-2 py-1 rounded border border-zinc-700 cursor-pointer"
                    >
                      <Unlock className="w-3 h-3 text-[#D4AF37]" />
                      <span>Modo Admin Ativo (Desativar)</span>
                    </button>
                  </div>
                </>
              ) : (
                <button
                  onClick={toggleAdmin}
                  className="text-[11px] text-zinc-600 hover:text-zinc-400 flex items-center gap-1 cursor-pointer"
                  title="Ativar Modo Admin (Ctrl+Shift+A)"
                >
                  <Lock className="w-3 h-3" />
                  <span>Acesso Restrito</span>
                </button>
              )}
              <p className="text-[11px] text-gray-500">
                Google Analytics: <code className="text-gray-400">G-GYT7LGDRTK</code>
              </p>
            </div>
          </div>

        </div>

        {/* Final Copyright & Signature line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>© {new Date().getFullYear()} Victor Hugo | Consultor Estratégico de Brindes B2B. Todos os direitos reservados.</p>
          <p className="font-medium text-gray-400">
            Belo Horizonte, MG — (31) 99745-5656
          </p>
        </div>

      </div>
    </footer>
  );
};

