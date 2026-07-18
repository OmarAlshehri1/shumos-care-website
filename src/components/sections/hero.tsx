import { ArrowRight } from "lucide-react"
import { getTranslations } from "next-intl/server"

import { getWhatsAppLink } from "@/lib/whatsapp"
import { Typography } from "@/components/ui/typography"
import { Button } from "@/components/ui/button"
import { StaggerGroup, StaggerItem } from "@/components/motion/stagger-group"
import { GradientMesh } from "@/components/effects/gradient-mesh"
import { WhatsAppIcon } from "@/components/shared/whatsapp-icon"

async function Hero() {
  const t = await getTranslations("home.hero")
  const tCommon = await getTranslations("common")
  // Falls back to WhatsApp's generic web entry until Phase 6 configures the
  // real clinic number — never a dead link, even before that's wired up.
  const whatsappHref =
    getWhatsAppLink(tCommon("whatsappMessage")) ?? "https://wa.me/"

  return (
    <section className="relative overflow-hidden">
      <GradientMesh />
      <div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-6 px-6 py-28 text-center md:px-8 md:py-36 lg:py-44">
        <StaggerGroup className="flex flex-col items-center gap-6">
          <StaggerItem>
            <Typography variant="caption" className="text-primary">
              {t("eyebrow")}
            </Typography>
          </StaggerItem>
          <StaggerItem>
            <Typography variant="display">{t("headline")}</Typography>
          </StaggerItem>
          <StaggerItem>
            <Typography variant="lead" className="max-w-2xl">
              {t("lead")}
            </Typography>
          </StaggerItem>
          <StaggerItem>
            <div className="mt-2 flex flex-col gap-3 sm:flex-row">
              <Button
                size="lg"
                render={
                  <a href={whatsappHref} target="_blank" rel="noopener noreferrer" />
                }
              >
                <WhatsAppIcon
                  data-icon="inline-start"
                  className="size-4 fill-current"
                />
                {t("primaryCta")}
              </Button>
              <Button size="lg" variant="outline" render={<a href="#services" />}>
                {t("secondaryCta")}
                <ArrowRight
                  data-icon="inline-end"
                  aria-hidden="true"
                  className="rtl:rotate-180"
                />
              </Button>
            </div>
          </StaggerItem>
        </StaggerGroup>
      </div>
    </section>
  )
}

export { Hero }
