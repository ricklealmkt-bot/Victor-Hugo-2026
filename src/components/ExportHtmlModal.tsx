import React, { useState } from 'react';
import { X, Copy, Check, Download, Code, FileCode2 } from 'lucide-react';
import { generateStandaloneHtml } from '../utils/exportHtml';

interface ExportHtmlModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ExportHtmlModal: React.FC<ExportHtmlModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const htmlCode = generateStandaloneHtml();

  if (!isOpen) return null;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(htmlCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error('Failed to copy', err);
    }
  };

  const handleDownload = () => {
    const blob = new Blob([htmlCode], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'index.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div className="relative w-full max-w-4xl bg-[#0D0D0D] border border-[#D4AF37]/40 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6 max-h-[90vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-gray-800 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#1A1810] border border-[#D4AF37]/50 flex items-center justify-center text-[#D4AF37]">
              <FileCode2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif-luxury font-bold text-lg text-white">
                Exportar Código HTML5 Standalone
              </h3>
              <p className="text-xs text-gray-400">
                Código completo em um único arquivo <code className="text-[#D4AF37]">index.html</code> com CSS inline e Analytics (G-GYT7LGDRTK).
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-gray-900 text-gray-400 hover:text-white hover:bg-gray-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Action Toolbar */}
        <div className="flex items-center justify-between bg-[#12110D] p-3 rounded-xl border border-[#D4AF37]/20">
          <span className="text-xs text-gray-300 font-mono">
            index.html (~12 KB) • Pronto para hospedagem ou envio
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="px-4 py-2 rounded-lg bg-gold-gradient hover:bg-gold-gradient-hover text-black font-bold text-xs flex items-center gap-2 transition-all cursor-pointer shadow-md"
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'Código Copiado!' : 'Copiar Código HTML5'}</span>
            </button>

            <button
              onClick={handleDownload}
              className="px-4 py-2 rounded-lg bg-[#1F1C14] hover:bg-[#2A261B] text-[#D4AF37] border border-[#D4AF37]/40 font-bold text-xs flex items-center gap-2 transition-all cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Baixar Arquivo</span>
            </button>
          </div>
        </div>

        {/* Code Preview Container */}
        <div className="flex-1 overflow-hidden rounded-xl border border-gray-800 bg-[#050505]">
          <pre className="h-full overflow-auto p-4 text-xs font-mono text-gray-300 select-all leading-relaxed">
            <code>{htmlCode}</code>
          </pre>
        </div>

        <div className="text-[11px] text-gray-500 text-center">
          * Este arquivo contém todas as meta tags, estilização de luxo, tracking do Google Analytics e botão com redirecionamento para WhatsApp.
        </div>

      </div>
    </div>
  );
};
