import {
  Activity,
  ArrowRight,
  Baby,
  Dumbbell,
  HandHelping,
  Heart,
  Home as HomeIcon,
} from "lucide-react"
import { getTranslations } from "next-intl/server"
import type { ComponentType } from "react"

import { Link } from "@/i18n/navigation"
import { SectionShell } from "@/components/sections/section-shell"
import { Typography } from "@/components/ui/typography"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { StaggerGroup, StaggerItem } from "@/components/motion/stagger-group"

const icons: ComponentType<{ className?: string }>[] = [
  HandHelping,
  Dumbbell,
  Activity,
  Heart,
  Baby,
  HomeIcon,
]

async function ServicesOverview() {
  const t = await getTranslations("home.services")
  const items = t.raw("items") as { title: string; description: string }[]

  return (
    <SectionShell as="section" id="services">
      <div className="mx-auto mb-14 max-w-2xl text-center">
        <Typography variant="caption" className="text-primary">
          {t("eyebrow")}
        </Typography>
        <Typography variant="h2" className="mt-3">
          {t("heading")}
        </Typography>
        <Typography variant="lead" className="mt-4">
          {t("lead")}
        </Typography>
      </div>

      <StaggerGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => {
          const Icon = icons[index]

          return (
            <StaggerItem key={item.title}>
              <Card className="h-full transition-shadow hover:shadow-soft-md">
                <CardHeader className="pb-6">
                  <div className="mb-2 flex size-11 items-center justify-center rounded-full bg-primary/10">
                    <Icon aria-hidden="true" className="size-5 text-primary" />
                  </div>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
              </Card>
            </StaggerItem>
          )
        })}
      </StaggerGroup>

      <div className="mt-12 flex justify-center">
        <Button variant="outline" size="lg" render={<Link href="/services" />}>
          {t("cta")}
          <ArrowRight data-icon="inline-end" aria-hidden="true" />
        </Button>
      </div>
    </SectionShell>
  )
}

export { ServicesOverview }
