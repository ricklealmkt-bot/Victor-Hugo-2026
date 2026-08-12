import React, { useState } from 'react';
import { AdminProvider } from './context/AdminContext';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ContrastSection } from './components/ContrastSection';
import { MethodologySection } from './components/MethodologySection';
import { RoiCalculator } from './components/RoiCalculator';
import { FaqSection } from './components/FaqSection';
import { FooterSection } from './components/FooterSection';
import { ExportHtmlModal } from './components/ExportHtmlModal';

export default function App() {
  const [isExportModalOpen, setIsExportModalOpen] = useState(false);

  return (
    <AdminProvider>
      <div className="min-h-screen bg-[#050505] text-[#E0E0E0] font-sans antialiased selection:bg-[#D4AF37] selection:text-black">
        
        {/* Fixed Luxury Header */}
        <Navbar onOpenExportModal={() => setIsExportModalOpen(true)} />

        {/* Main Content Sections */}
        <main>
          {/* 1. Hero Section (1ª Dobra) */}
          <HeroSection />

          {/* 2. Seção de Contraste (Comparativo de Valor) */}
          <ContrastSection />

          {/* 3. Metodologia (4 Passos de Performance) */}
          <MethodologySection />

          {/* Interactive ROI Calculator Widget */}
          <RoiCalculator />

          {/* 4. FAQ de Performance */}
          <FaqSection />
        </main>

        {/* 5. Rodapé e CTA Final */}
        <FooterSection onOpenExportModal={() => setIsExportModalOpen(true)} />

        {/* Standalone HTML Export Modal */}
        <ExportHtmlModal
          isOpen={isExportModalOpen}
          onClose={() => setIsExportModalOpen(false)}
        />

      </div>
    </AdminProvider>
  );
}

