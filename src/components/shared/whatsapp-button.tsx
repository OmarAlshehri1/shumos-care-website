import { getTranslations } from "next-intl/server"

import { getWhatsAppLink } from "@/lib/whatsapp"
import { Reveal } from "@/components/motion/reveal"
import { scaleIn } from "@/lib/motion/variants"
import { WhatsAppIcon } from "@/components/shared/whatsapp-icon"

/**
 * WhatsApp's own brand green is used deliberately here — this is a
 * recognition affordance for a third-party destination, not a site brand
 * color, so it sits outside the Shumos Care token palette on purpose.
 */
const WHATSAPP_GREEN = "#25D366"

async function WhatsAppButton() {
  const t = await getTranslations("common")
  const href = getWhatsAppLink(t("whatsappMessage"))

  if (!href) {
    return null
  }

  return (
    <Reveal
      variants={scaleIn}
      className="fixed bottom-6 end-6 z-30"
      viewport={{ once: true, amount: 0 }}
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t("whatsappCta")}
        className="flex size-14 items-center justify-center rounded-full shadow-soft-lg transition-transform duration-200 ease-out hover:scale-105 active:scale-95"
        style={{ backgroundColor: WHATSAPP_GREEN }}
      >
        <WhatsAppIcon className="size-6 fill-white" />
      </a>
    </Reveal>
  )
}

export { WhatsAppButton }
