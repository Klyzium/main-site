export const WHATSAPP_PHONE = "5521995563822";
export const WHATSAPP_TEXT = "Ola, vim pelo site da KLYZIUM e gostaria de mais informacoes sobre os servicos.";

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(WHATSAPP_TEXT)}`;

export function buildWhatsAppUrl(message: string) {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}
