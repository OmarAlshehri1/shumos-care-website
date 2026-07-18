import { getTranslations } from "next-intl/server"

import { getTeam } from "@/lib/content/mdx-source"
import type { Locale } from "@/i18n/routing"
import { PageHeader } from "@/components/sections/page-header"
import { SectionShell } from "@/components/sections/section-shell"
import { CtaBand } from "@/components/sections/cta-band"
import { TeamMemberCard } from "@/components/sections/team-member-card"
import { StaggerGroup, StaggerItem } from "@/components/motion/stagger-group"

export default async function TeamPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t = await getTranslations("teamPage")
  const team = await getTeam(locale as Locale)

  return (
    <>
      <PageHeader eyebrow={t("eyebrow")} title={t("title")} lead={t("lead")} />

      <SectionShell>
        <StaggerGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <StaggerItem key={member.slug}>
              <TeamMemberCard member={member} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </SectionShell>

      <CtaBand />
    </>
  )
}
