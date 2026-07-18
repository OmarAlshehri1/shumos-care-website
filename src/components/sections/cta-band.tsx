import { getTranslations } from "next-intl/server"

import { getWhatsAppLink } from "@/lib/whatsapp"
import { SectionShell } from "@/components/sections/section-shell"
import { Typography } from "@/components/ui/typography"
import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/motion/reveal"
import { WhatsAppIcon } from "@/components/shared/whatsapp-icon"

async function CtaBand() {
  const t = await getTranslations("home.cta")
  const tCommon = await getTranslations("common")
  const whatsappHref =
    getWhatsAppLink(tCommon("whatsappMessage")) ?? "https://wa.me/"

  return (
    <SectionShell spacing="tight" className="bg-primary text-primary-foreground">
      <Reveal className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
        <Typography variant="h2" className="text-primary-foreground">
          {t("heading")}
        </Typography>
        <Typography variant="lead" className="text-primary-foreground/80">
          {t("lead")}
        </Typography>
        <Button
          size="lg"
          variant="secondary"
          render={
            <a href={whatsappHref} target="_blank" rel="noopener noreferrer" />
          }
        >
          <WhatsAppIcon data-icon="inline-start" className="size-4 fill-current" />
          {t("primaryCta")}
        </Button>
      </Reveal>
    </SectionShell>
  )
}

export { CtaBand }
