export const WHATSAPP_PHONE = "5521996081854";
export const WHATSAPP_TEXT = "Ola, vim pelo site da KLYZIUM e gostaria de mais informacoes sobre os servicos.";

export const WHATSAPP_URL = buildWhatsAppUrl(WHATSAPP_TEXT);

export function buildWhatsAppUrl(message: string) {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}
