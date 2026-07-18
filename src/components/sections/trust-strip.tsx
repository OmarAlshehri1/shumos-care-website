import { HeartHandshake, MapPin, ShieldCheck, Sparkles } from "lucide-react"
import { getTranslations } from "next-intl/server"
import type { ComponentType } from "react"

import { SectionShell } from "@/components/sections/section-shell"
import { Typography } from "@/components/ui/typography"
import { StaggerGroup, StaggerItem } from "@/components/motion/stagger-group"

const icons: ComponentType<{ className?: string }>[] = [
  ShieldCheck,
  HeartHandshake,
  Sparkles,
  MapPin,
]

async function TrustStrip() {
  const t = await getTranslations("home.trust")
  const items = t.raw("items") as { title: string; description: string }[]

  return (
    <SectionShell spacing="tight" className="border-y border-border bg-muted/40">
      <StaggerGroup className="grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-10">
        {items.map((item, index) => {
          const Icon = icons[index]

          return (
            <StaggerItem key={item.title} className="flex flex-col gap-3">
              <Icon aria-hidden="true" className="size-6 text-primary" />
              <Typography as="p" variant="small" className="font-semibold text-foreground">
                {item.title}
              </Typography>
              <Typography as="p" variant="small" className="text-muted-foreground">
                {item.description}
              </Typography>
            </StaggerItem>
          )
        })}
      </StaggerGroup>
    </SectionShell>
  )
}

export { TrustStrip }
