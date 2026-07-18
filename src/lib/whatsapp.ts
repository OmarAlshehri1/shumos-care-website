/**
 * Returns a wa.me deep link, or `null` if `NEXT_PUBLIC_WHATSAPP_NUMBER`
 * isn't configured yet (wired for real in Phase 6).
 */
export function getWhatsAppLink(message: string): string | null {
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER

  if (!number) {
    return null
  }

  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`
}
