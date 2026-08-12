import React, { useState } from 'react';
import { MessageSquare, Shield, TrendingUp, Award, CheckCircle2, Upload, RefreshCw } from 'lucide-react';
import { handleWhatsAppClick } from '../utils/whatsapp';
import { useAdmin } from '../context/AdminContext';
import victorHugoImg from '../assets/images/victor_hugo_portrait_1786557270601.jpg';

export const HeroSection: React.FC = () => {
  const { isAdmin } = useAdmin();
  const [customPhotoUrl, setCustomPhotoUrl] = useState<string | null>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('victor_custom_photo');
    }
    return null;
  });
  const [showPhotoUploader, setShowPhotoUploader] = useState(false);

  const displayPhoto = customPhotoUrl || victorHugoImg;

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64 = reader.result as string;
        setCustomPhotoUrl(base64);
        if (typeof window !== 'undefined') {
          localStorage.setItem('victor_custom_photo', base64);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResetPhoto = () => {
    setCustomPhotoUrl(null);
    if (typeof window !== 'undefined') {
      localStorage.removeItem('victor_custom_photo');
    }
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#050505] border-b border-gray-900">
      
      {/* Background Radial Glow & Grid Pattern */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gold-radial pointer-events-none opacity-60 blur-3xl"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f12_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f12_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Copy & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Executive Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#12110D] border border-[#D4AF37]/30 text-xs font-medium text-[#F3E5AB]">
              <Award className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span className="tracking-wide">CONSULTORIA B2B ESPECIALIZADA & EXECUTIVA</span>
            </div>

            {/* Main Impact Title */}
            <h1 className="font-serif-luxury font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-[1.12]">
              <span className="gold-text drop-shadow-sm">ESTRATÉGIA & ROI</span><br />
              <span className="text-white">EM BRINDES CORPORATIVOS</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-zinc-400 font-normal leading-relaxed max-w-2xl">
              Transformamos brindes em <strong className="text-white font-semibold">ativos de vendas</strong>.
              Consultoria especializada para empresas que buscam inteligência, economia e resultados mensuráveis.
            </p>

            {/* Value Pillars List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 w-full max-w-xl text-sm text-zinc-300">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Zero desperdício de verba corporativa</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Alinhamento com vendas</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Curadoria de produtos C-Level/Ativos</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Relatórios transparentes de métricas</span>
              </div>
            </div>

            {/* Main CTA & Secondary Trust info */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4 w-full sm:w-auto">
              <button
                onClick={() => handleWhatsAppClick('Olá Victor, solicito um diagnóstico estratégico.')}
                className="relative group overflow-hidden inline-flex items-center justify-center px-8 py-4 rounded-full text-xs sm:text-sm uppercase tracking-widest font-bold text-black gold-btn hover:scale-105 transition-all duration-200 cursor-pointer shadow-[0_0_25px_rgba(212,175,55,0.3)] hover:shadow-[0_0_40px_rgba(212,175,55,0.6)]"
              >
                <span className="absolute inset-0 w-full h-full animate-shimmer pointer-events-none"></span>
                <MessageSquare className="w-4 h-4 mr-2.5 fill-black/20" />
                <span>Solicitar Diagnóstico Estratégico</span>
              </button>

              <div className="flex items-center justify-center sm:justify-start gap-2 text-xs text-zinc-400 px-2 py-1">
                <Shield className="w-4 h-4 text-[#D4AF37]" />
                <span>Atendimento presencial em Belo Horizonte, MG</span>
              </div>
            </div>



          </div>

          {/* Right Column: Executive Photo Moldura / Card */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            
            <div className="relative w-full max-w-md">
              
              {/* Outer Golden Glowing Frame */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-b from-[#D4AF37] via-[#996515] to-[#121212] opacity-70 blur-md transition duration-500 group-hover:opacity-100"></div>

              {/* Main Executive Moldura Box */}
              <div className="relative rounded-2xl glass-card-gold p-4 sm:p-5 flex flex-col items-center text-center">
                
                {/* Photo Frame Container */}
                <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-gradient-to-b from-[#1A1813] to-[#0A0A0A] border border-[#D4AF37]/30 flex flex-col items-center justify-center group shadow-inner">
                  
                  {displayPhoto ? (
                    <img
                      src={displayPhoto}
                      alt="Victor Hugo - Consultor Estratégico de Brindes B2B"
                      className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    /* SVG Integrated Pure Placeholder Illustration (Guarantees image never breaks!) */
                    <div className="w-full h-full flex flex-col items-center justify-between p-6 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#241F14] via-[#0E0D0B] to-[#050505]">
                      
                      {/* Top Branding watermark */}
                      <div className="w-full flex items-center justify-between text-[10px] tracking-widest text-[#D4AF37]/60 font-serif-luxury uppercase">
                        <span>Victor Hugo</span>
                        <span>B2B Gifting Advisor</span>
                      </div>

                      {/* Executive Avatar Vector Silhouette */}
                      <div className="relative my-auto flex flex-col items-center">
                        <div className="w-28 h-28 rounded-full border-2 border-[#D4AF37]/50 p-1.5 shadow-[0_0_20px_rgba(212,175,55,0.2)] bg-[#12110D]">
                          <div className="w-full h-full rounded-full bg-gradient-to-b from-[#2A2415] to-[#0D0D0D] flex items-center justify-center overflow-hidden">
                            <svg className="w-20 h-20 text-[#D4AF37]" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M12 2C9.24 2 7 4.24 7 7c0 2.22 1.45 4.1 3.46 4.75C6.96 12.87 4 16.1 4 20c0 .55.45 1 1 1h14c.55 0 1-.45 1-1 0-3.9-2.96-7.13-6.46-8.25C15.55 11.1 17 9.22 17 7c0-2.76-2.24-5-5-5zm0 2c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 9c3.08 0 5.72 2.13 6.36 5H5.64c.64-2.87 3.28-5 6.36-5z" />
                            </svg>
                          </div>
                        </div>

                        {/* Suit Tie Accent Overlay */}
                        <div className="mt-3 flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#181611] border border-[#D4AF37]/30 text-[11px] text-[#F3E5AB]">
                          <TrendingUp className="w-3 h-3 text-[#D4AF37]" />
                          <span>Especialista B2B</span>
                        </div>
                      </div>

                      {/* Bottom Seal */}
                      <div className="w-full text-center border-t border-[#D4AF37]/20 pt-3">
                        <p className="text-xs font-semibold text-white">VICTOR HUGO</p>
                        <p className="text-[10px] text-[#D4AF37]">Consultor Estratégico de Brindes B2B</p>
                      </div>

                    </div>
                  )}

                  {/* Photo Customizer Trigger Overlay (Hidden for end-users, only available in Admin mode) */}
                  {isAdmin && (
                    <div className="absolute top-3 right-3 opacity-90 hover:opacity-100 transition-opacity">
                      <button
                        onClick={() => setShowPhotoUploader(!showPhotoUploader)}
                        className="px-2.5 py-1.5 rounded-lg bg-black/80 backdrop-blur border border-[#D4AF37]/50 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black text-xs font-semibold flex items-center gap-1.5 shadow-lg transition-all cursor-pointer"
                        title="Alterar ou enviar foto do consultor"
                      >
                        <Upload className="w-3.5 h-3.5" />
                        <span>{customPhotoUrl ? 'Alterar Foto' : 'Trocar Foto'}</span>
                      </button>
                    </div>
                  )}

                </div>

                {/* Photo Uploader Panel (Hidden for end-users) */}
                {isAdmin && showPhotoUploader && (
                  <div className="w-full mt-3 p-3.5 rounded-xl bg-[#0D0D0D] border border-[#D4AF37]/50 text-left text-xs space-y-2.5 shadow-xl animate-fade-in">
                    <div className="flex items-center justify-between text-[#D4AF37] font-semibold">
                      <span className="flex items-center gap-1.5">
                        <Upload className="w-3.5 h-3.5" /> Enviar Nova Foto de Victor Hugo:
                      </span>
                      {customPhotoUrl && (
                        <button
                          onClick={handleResetPhoto}
                          className="text-[10px] text-gray-400 hover:text-white flex items-center gap-1 cursor-pointer underline"
                        >
                          <RefreshCw className="w-2.5 h-2.5" /> Restaurar Foto Padrão
                        </button>
                      )}
                    </div>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handlePhotoUpload}
                      className="w-full text-xs text-gray-300 file:mr-2.5 file:py-1.5 file:px-3 file:rounded-md file:border-0 file:text-xs file:font-bold file:bg-gold-gradient file:text-black hover:file:opacity-90 cursor-pointer bg-black/50 p-1.5 rounded border border-zinc-800"
                    />
                    <p className="text-[10px] text-zinc-400">
                      * Selecione qualquer imagem JPG ou PNG do seu dispositivo para atualizar a foto do perfil em tempo real.
                    </p>
                  </div>
                )}

                {/* Professional Name Card Footer */}
                <div className="mt-4 pt-2 w-full text-left flex items-center justify-between border-t border-[#D4AF37]/15">
                  <div>
                    <h3 className="font-serif-luxury text-base font-bold text-white tracking-wide">
                      Victor Hugo
                    </h3>
                    <p className="text-xs text-[#D4AF37] font-medium">
                      Consultor Estratégico de Brindes B2B
                    </p>
                  </div>
                  <div className="px-2.5 py-1 rounded bg-[#1C180E] border border-[#D4AF37]/40 text-[10px] font-semibold text-[#F3E5AB]">
                    Belo Horizonte / MG
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

