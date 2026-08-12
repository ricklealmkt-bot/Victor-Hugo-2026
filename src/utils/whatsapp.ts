export const WHATSAPP_NUMBER = "5531997455656";
export const DEFAULT_MESSAGE = "Olá Victor, solicito um diagnóstico estratégico.";

export const handleWhatsAppClick = (customText?: string) => {
  const message = customText || DEFAULT_MESSAGE;
  const encodedMessage = encodeURIComponent(message);
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

  // Execute Google Analytics gtag conversion tracking event
  if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
    try {
      (window as any).gtag('event', 'click_whatsapp_cta', {
        event_category: 'engagement',
        event_label: message,
        send_to: 'G-GYT7LGDRTK'
      });
    } catch (err) {
      console.warn('Google Analytics event error:', err);
    }
  }

  window.open(url, '_blank', 'noopener,noreferrer');
};
