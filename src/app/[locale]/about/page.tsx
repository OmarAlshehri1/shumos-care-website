import { getTranslations } from "next-intl/server"

import { PageHeader } from "@/components/sections/page-header"
import { SectionShell } from "@/components/sections/section-shell"
import { CtaBand } from "@/components/sections/cta-band"
import { Typography } from "@/components/ui/typography"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Reveal } from "@/components/motion/reveal"
import { StaggerGroup, StaggerItem } from "@/components/motion/stagger-group"

export default async function AboutPage() {
  const t = await getTranslations("aboutPage")
  const values = t.raw("values") as { title: string; description: string }[]

  return (
    <>
      <PageHeader eyebrow={t("eyebrow")} title={t("title")} lead={t("lead")} />

      <SectionShell spacing="tight">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Typography variant="h2">{t("missionTitle")}</Typography>
          <Typography variant="body" className="mt-4 text-muted-foreground">
            {t("missionBody")}
          </Typography>
        </Reveal>
      </SectionShell>

      <SectionShell spacing="tight" className="bg-muted/40">
        <Typography variant="h2" className="mb-10 text-center">
          {t("valuesHeading")}
        </Typography>
        <StaggerGroup className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {values.map((value) => (
            <StaggerItem key={value.title}>
              <Card className="h-full">
                <CardHeader className="pb-6">
                  <CardTitle>{value.title}</CardTitle>
                  <CardDescription>{value.description}</CardDescription>
                </CardHeader>
              </Card>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </SectionShell>

      <SectionShell spacing="tight">
        <Reveal className="mx-auto max-w-2xl rounded-2xl border border-dashed border-border p-8 text-center">
          <Typography variant="h3">{t("storyHeading")}</Typography>
          <Typography variant="small" className="mt-3 text-muted-foreground italic">
            {t("storyPlaceholder")}
          </Typography>
        </Reveal>
      </SectionShell>

      <CtaBand />
    </>
  )
}
