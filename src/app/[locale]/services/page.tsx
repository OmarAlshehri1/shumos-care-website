import { getTranslations } from "next-intl/server"

import { getServices } from "@/lib/content/mdx-source"
import type { Locale } from "@/i18n/routing"
import { PageHeader } from "@/components/sections/page-header"
import { SectionShell } from "@/components/sections/section-shell"
import { CtaBand } from "@/components/sections/cta-band"
import { ServiceCard } from "@/components/sections/service-card"
import { StaggerGroup, StaggerItem } from "@/components/motion/stagger-group"

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t = await getTranslations("servicesPage")
  const services = await getServices(locale as Locale)

  return (
    <>
      <PageHeader eyebrow={t("eyebrow")} title={t("title")} lead={t("lead")} />

      <SectionShell>
        <StaggerGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <StaggerItem key={service.slug}>
              <ServiceCard service={service} learnMoreLabel={t("learnMore")} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </SectionShell>

      <CtaBand />
    </>
  )
}
