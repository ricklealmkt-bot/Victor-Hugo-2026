import victorHugoImg from '../assets/images/victor_hugo_official_portrait_1786557807492.jpg';

export const generateStandaloneHtml = (): string => {
  const customPhoto = typeof window !== 'undefined' ? localStorage.getItem('victor_custom_photo_v4') : null;
  const validCustomPhoto = customPhoto && !customPhoto.startsWith('blob:') ? customPhoto : null;
  const photoUrl = validCustomPhoto || victorHugoImg;
  const photoHtml = `<img src="${photoUrl}" class="w-full h-full object-cover object-top rounded-xl" alt="Victor Hugo - Consultor Estratégico de Brindes B2B" />`;

  return `<!DOCTYPE html>
<html lang="pt-BR" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Victor Hugo | Brinde Estratégico B2B - Consultoria de ROI em Brindes Corporativos</title>
  <meta name="description" content="Transformamos brindes corporativos em ativos de vendas. Consultoria especializada B2B para inteligência, economia e ROI mensurável.">
  
  <!-- Open Graph -->
  <meta property="og:title" content="Victor Hugo | Consultoria em Brindes Estratégicos B2B">
  <meta property="og:description" content="Transformamos brindes corporativos em ativos de vendas com ROI mensurável.">
  <meta property="og:type" content="website">

  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800;900&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet">

  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          fontFamily: {
            sans: ['"Plus Jakarta Sans"', 'sans-serif'],
            display: ['Montserrat', 'sans-serif'],
          },
          colors: {
            gold: {
              400: '#F5D77F',
              500: '#D4AF37',
              600: '#AA7C11',
            }
          }
        }
      }
    }
  </script>

  <!-- Custom Luxury CSS -->
  <style>
    body {
      background-color: #050505;
      color: #E2E8F0;
      font-family: 'Plus Jakarta Sans', sans-serif;
    }
    h1, h2, h3, h4, h5, h6 {
      font-family: 'Montserrat', sans-serif;
    }
    .text-gold-gradient {
      background: linear-gradient(135deg, #F5D77F 0%, #D4AF37 50%, #AA7C11 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .bg-gold-gradient {
      background: linear-gradient(135deg, #E6C665 0%, #D4AF37 40%, #996515 100%);
    }
    .bg-gold-gradient:hover {
      background: linear-gradient(135deg, #F5D77F 0%, #E6CA65 40%, #B8860B 100%);
    }
    .glass-card-gold {
      background: linear-gradient(180deg, rgba(22, 20, 15, 0.85) 0%, rgba(12, 12, 12, 0.95) 100%);
      backdrop-filter: blur(16px);
      border: 1px solid rgba(212, 175, 55, 0.3);
      box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.8), 0 0 15px rgba(212, 175, 55, 0.08);
    }
    .glass-card-danger {
      background: linear-gradient(180deg, rgba(25, 12, 14, 0.8) 0%, rgba(15, 8, 9, 0.9) 100%);
      backdrop-filter: blur(16px);
      border: 1px solid rgba(239, 68, 68, 0.25);
    }
    .glass-card-dark {
      background: rgba(18, 18, 18, 0.75);
      backdrop-filter: blur(12px);
      border: 1px solid rgba(255, 255, 255, 0.07);
    }
  </style>

  <!-- Google Analytics Tag (G-GYT7LGDRTK) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-GYT7LGDRTK"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-GYT7LGDRTK', { 'anonymize_ip': true });

    function trackWhatsAppClick(text) {
      if (typeof gtag === 'function') {
        gtag('event', 'click_whatsapp_cta', {
          'event_category': 'engagement',
          'event_label': text || 'Solicitar Diagnostico Estratégico',
          'send_to': 'G-GYT7LGDRTK'
        });
      }
      var url = 'https://wa.me/5531997455656?text=' + encodeURIComponent(text || 'Olá Victor, solicito um diagnóstico estratégico.');
      window.open(url, '_blank');
    }
  </script>
</head>
<body class="bg-[#050505] text-gray-200 antialiased selection:bg-[#D4AF37] selection:text-black">

  <!-- HEADER NAVBAR -->
  <header class="fixed top-0 left-0 right-0 z-50 bg-[#080808]/90 backdrop-blur-md py-4 border-b border-[#D4AF37]/20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 rounded-lg bg-gold-gradient p-[1px]">
          <div class="w-full h-full bg-[#0D0D0D] rounded-[7px] flex items-center justify-center font-bold text-gold-gradient text-xl">
            VH
          </div>
        </div>
        <div>
          <span class="font-bold text-white text-base block leading-none">VICTOR HUGO</span>
          <span class="text-[10px] text-[#D4AF37] tracking-widest uppercase">Brinde Estratégico B2B</span>
        </div>
      </div>

      <button onclick="trackWhatsAppClick('Olá Victor, gostaria de um diagnóstico estratégico.')"
              class="px-5 py-2.5 rounded-lg text-xs font-bold text-black bg-gold-gradient hover:bg-gold-gradient-hover shadow-lg transition-all">
        Falar com Victor
      </button>
    </div>
  </header>

  <!-- HERO SECTION -->
  <section class="pt-36 pb-24 px-4 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
    <div class="lg:col-span-7 space-y-6">
      <div class="inline-block px-3 py-1 rounded-full bg-[#12110D] border border-[#D4AF37]/30 text-xs font-semibold text-[#F3E5AB]">
        CONSULTORIA B2B ESPECIALIZADA & EXECUTIVA
      </div>

      <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
        <span class="text-gold-gradient">ESTRATÉGIA & ROI</span><br>EM BRINDES CORPORATIVOS
      </h1>

      <p class="text-lg text-gray-300">
        Transformamos brindes em <strong>ativos de vendas</strong>. Consultoria especializada para empresas que buscam inteligência, economia e resultados mensuráveis.
      </p>

      <ul class="text-sm text-gray-300 space-y-1.5 py-2">
        <li>✔ Zero desperdício de verba corporativa</li>
        <li>✔ Alinhamento com vendas</li>
        <li>✔ Curadoria de produtos C-Level/Ativos</li>
        <li>✔ Relatórios transparentes de métricas</li>
      </ul>

      <div class="pt-2">
        <button onclick="trackWhatsAppClick('Olá Victor, solicito um diagnóstico estratégico.')"
                class="px-8 py-4 rounded-full text-sm uppercase tracking-wider font-bold text-black bg-gold-gradient hover:bg-gold-gradient-hover shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all transform hover:scale-[1.02] cursor-pointer">
          Solicitar Diagnóstico Estratégico
        </button>
        <p class="text-xs text-gray-400 mt-2">🛡 Atendimento presencial em Belo Horizonte, MG</p>
      </div>


    </div>

    <!-- Victor Hugo Executive Card Frame -->
    <div class="lg:col-span-5 flex justify-center">
      <div class="w-full max-w-md p-4 rounded-2xl glass-card-gold border border-[#D4AF37]/40 text-center">
        <div class="w-full aspect-[4/5] rounded-xl bg-[#12110D] border border-[#D4AF37]/30 flex flex-col items-center justify-center p-6 overflow-hidden">
          ${photoHtml}
          <h3 class="font-bold text-white text-lg mt-4">VICTOR HUGO</h3>
          <p class="text-xs text-[#D4AF37]">Consultor Estratégico de Brindes B2B</p>
          <span class="mt-3 px-3 py-1 rounded bg-[#1C180E] border border-[#D4AF37]/30 text-[10px] text-gray-300">Belo Horizonte / MG — (31) 99745-5656</span>
        </div>
      </div>
    </div>
  </section>

  <!-- CONTRAST SECTION -->
  <section class="py-20 bg-[#080808] border-t border-gray-900 px-4">
    <div class="max-w-7xl mx-auto">
      <div class="text-center max-w-2xl mx-auto mb-16">
        <h2 class="text-3xl sm:text-4xl font-extrabold text-white">
          Por que sua empresa <span class="text-red-500">perde dinheiro</span> hoje?
        </h2>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Cenário Amador -->
        <div class="glass-card-danger rounded-2xl p-8 space-y-4">
          <h3 class="text-2xl font-bold text-white flex items-center justify-between">
            O Cenário Amador <span class="text-red-500 text-sm">✖</span>
          </h3>
          <ul class="space-y-3 text-sm text-gray-300">
            <li>❌ Gastos reativos e de última hora</li>
            <li>❌ Foco cego em "menor preço por unidade"</li>
            <li>❌ Itens no lixo, gaveta ou doados sem valor</li>
            <li>❌ Ausência total de métricas e alinhamento</li>
          </ul>
        </div>

        <!-- Método Estratégico -->
        <div class="glass-card-gold rounded-2xl p-8 space-y-4">
          <h3 class="text-2xl font-bold text-white flex items-center justify-between">
            O Método Estratégico <span class="text-[#D4AF37] text-sm">✔</span>
          </h3>
          <ul class="space-y-3 text-sm text-gray-200">
            <li>✔ Auditoria de gaps e jornada do cliente</li>
            <li>✔ Curadoria focada em KPIs corporativos</li>
            <li>✔ Ativos de alto desejo e utilidade real</li>
            <li>✔ Relatórios claros de ROI para a diretoria</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- METHODOLOGY -->
  <section class="py-20 px-4 max-w-7xl mx-auto">
    <div class="text-center mb-16">
      <h2 class="text-3xl sm:text-4xl font-extrabold text-white">
        A <span class="text-gold-gradient">Ciência</span> por trás do Brinde
      </h2>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div class="glass-card-dark p-6 rounded-2xl border border-gray-800">
        <span class="text-3xl font-black text-[#D4AF37]">01</span>
        <h3 class="font-bold text-white mt-2">Auditoria</h3>
        <p class="text-xs text-gray-400 mt-2">Mapeamento de falhas, perdas de verba e análise do ICP.</p>
      </div>
      <div class="glass-card-dark p-6 rounded-2xl border border-gray-800">
        <span class="text-3xl font-black text-[#D4AF37]">02</span>
        <h3 class="font-bold text-white mt-2">Alinhamento</h3>
        <p class="text-xs text-gray-400 mt-2">Sinergia direta com metas de Vendas e LTV.</p>
      </div>
      <div class="glass-card-dark p-6 rounded-2xl border border-gray-800">
        <span class="text-3xl font-black text-[#D4AF37]">03</span>
        <h3 class="font-bold text-white mt-2">Planejamento</h3>
        <p class="text-xs text-gray-400 mt-2">Curadoria exclusiva de ativos de alto desejo.</p>
      </div>
      <div class="glass-card-dark p-6 rounded-2xl border border-gray-800">
        <span class="text-3xl font-black text-[#D4AF37]">04</span>
        <h3 class="font-bold text-white mt-2">Métricas</h3>
        <p class="text-xs text-gray-400 mt-2">Entrega de relatórios de ROI e engajamento.</p>
      </div>
    </div>
  </section>

  <!-- FOOTER -->
  <footer class="py-12 bg-[#030303] border-t border-gray-900 text-center text-xs text-gray-500">
    <p class="font-bold text-white text-sm mb-1">Victor Hugo | Brinde Estratégico</p>
    <p>Belo Horizonte/MG - Consultoria B2B para todo o Brasil</p>
  </footer>

</body>
</html>`;
};
