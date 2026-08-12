import React, { useState, useEffect } from 'react';
import { MessageSquare, Code } from 'lucide-react';
import { handleWhatsAppClick } from '../utils/whatsapp';
import { useAdmin } from '../context/AdminContext';

interface NavbarProps {
  onOpenExportModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenExportModal }) => {
  const { isAdmin } = useAdmin();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#080808]/90 backdrop-blur-md py-3 border-b border-[#D4AF37]/20 shadow-2xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#D4AF37] via-[#AA7C11] to-[#0D0D0D] p-[1px] shadow-lg group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-[#0D0D0D] rounded-[7px] flex items-center justify-center">
                <span className="font-serif-luxury text-gold-gradient font-extrabold text-xl tracking-wider">VH</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-serif-luxury font-bold text-white text-base tracking-tight leading-none group-hover:text-[#D4AF37] transition-colors">
                VICTOR HUGO
              </span>
              <span className="text-[10px] text-[#D4AF37] tracking-widest uppercase font-medium mt-1">
                Brinde Estratégico B2B
              </span>
            </div>
          </a>

          {/* Navigation Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
            <a href="#comparativo" className="hover:text-[#D4AF37] transition-colors">
              Por Que Nós
            </a>
            <a href="#metodologia" className="hover:text-[#D4AF37] transition-colors">
              Metodologia
            </a>
            <a href="#calculadora-roi" className="hover:text-[#D4AF37] transition-colors flex items-center gap-1.5 text-gray-200">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse"></span>
              Calculadora ROI
            </a>
            <a href="#faq" className="hover:text-[#D4AF37] transition-colors">
              FAQ
            </a>
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-3">
            {isAdmin && (
              <button
                onClick={onOpenExportModal}
                title="Copiar/Exportar Código HTML5 Puro da Landing Page (Modo Admin)"
                className="hidden lg:flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#141414] hover:bg-[#1A1A1A] text-xs font-medium text-[#D4AF37] border border-[#D4AF37]/50 transition-all cursor-pointer shadow-sm"
              >
                <Code className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Exportar HTML5</span>
              </button>
            )}

            <button
              onClick={() => handleWhatsAppClick('Olá Victor, vim do site e gostaria de um diagnóstico estratégico.')}
              className="relative inline-flex items-center justify-center px-4 sm:px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold tracking-wide text-black transition-all duration-300 group overflow-hidden cursor-pointer bg-gold-gradient hover:bg-gold-gradient-hover shadow-[0_0_20px_rgba(212,175,55,0.25)] hover:shadow-[0_0_30px_rgba(212,175,55,0.45)] hover:scale-[1.02]"
            >
              <span className="absolute inset-0 w-full h-full animate-shimmer pointer-events-none"></span>
              <MessageSquare className="w-4 h-4 mr-2 fill-black/10" />
              <span>Falar com Victor</span>
            </button>
          </div>

        </div>
      </div>
    </header>
  );
};

