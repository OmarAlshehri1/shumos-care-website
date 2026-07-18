import { ArrowLeft } from "lucide-react"
import { notFound } from "next/navigation"
import { getTranslations } from "next-intl/server"

import { getServiceBySlug, getServices } from "@/lib/content/mdx-source"
import { serviceIcons } from "@/lib/content/service-icons"
import type { Locale } from "@/i18n/routing"
import { Link } from "@/i18n/navigation"
import { PageHeader } from "@/components/sections/page-header"
import { SectionShell } from "@/components/sections/section-shell"
import { CtaBand } from "@/components/sections/cta-band"
import { MdxContent } from "@/components/shared/mdx-content"

export async function generateStaticParams({
  params,
}: {
  params: { locale: string }
}) {
  const services = await getServices(params.locale as Locale)
  return services.map((service) => ({ slug: service.slug }))
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale, slug } = await params
  const service = await getServiceBySlug(locale as Locale, slug)

  if (!service) {
    notFound()
  }

  const t = await getTranslations("servicesPage")
  const Icon = serviceIcons[service.icon]

  return (
    <>
      <PageHeader title={service.title} lead={service.summary}>
        <div className="mx-auto mb-6 max-w-2xl">
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-small text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft aria-hidden="true" className="size-4 rtl:rotate-180" />
            {t("backToServices")}
          </Link>
        </div>
      </PageHeader>

      <SectionShell spacing="tight">
        <div className="mx-auto flex max-w-2xl flex-col gap-8">
          <div className="flex size-14 items-center justify-center rounded-full bg-primary/10">
            <Icon aria-hidden="true" className="size-6 text-primary" />
          </div>

          <MdxContent source={service.body} />
        </div>
      </SectionShell>

      <CtaBand />
    </>
  )
}
