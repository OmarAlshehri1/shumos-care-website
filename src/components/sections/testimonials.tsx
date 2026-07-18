import { Quote } from "lucide-react"
import { getTranslations } from "next-intl/server"

import { SectionShell } from "@/components/sections/section-shell"
import { Typography } from "@/components/ui/typography"
import { Card } from "@/components/ui/card"
import { StaggerGroup, StaggerItem } from "@/components/motion/stagger-group"

async function Testimonials() {
  const t = await getTranslations("home.testimonials")

  // Placeholder cards only — real, consented patient testimonials replace
  // this copy in Phase 10 (content population), not invented quotes.
  const placeholders = [0, 1, 2]

  return (
    <SectionShell className="bg-muted/40">
      <div className="mx-auto mb-14 max-w-2xl text-center">
        <Typography variant="caption" className="text-primary">
          {t("eyebrow")}
        </Typography>
        <Typography variant="h2" className="mt-3">
          {t("heading")}
        </Typography>
      </div>

      <StaggerGroup className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {placeholders.map((placeholder) => (
          <StaggerItem key={placeholder}>
            <Card className="h-full p-6">
              <Quote aria-hidden="true" className="size-6 text-primary/40" />
              <blockquote className="mt-4">
                <Typography as="p" variant="small" className="text-muted-foreground">
                  {t("placeholderQuote")}
                </Typography>
              </blockquote>
              <footer className="mt-6">
                <Typography as="cite" variant="small" className="font-semibold text-foreground not-italic">
                  {t("placeholderName")}
                </Typography>
                <Typography as="p" variant="caption" className="normal-case text-muted-foreground">
                  {t("placeholderService")}
                </Typography>
              </footer>
            </Card>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </SectionShell>
  )
}

export { Testimonials }
