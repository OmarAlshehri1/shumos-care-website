import { ArrowLeft } from "lucide-react"
import { notFound } from "next/navigation"
import { getTranslations } from "next-intl/server"

import { getTeam, getTeamMemberBySlug } from "@/lib/content/mdx-source"
import type { Locale } from "@/i18n/routing"
import { Link } from "@/i18n/navigation"
import { SectionShell } from "@/components/sections/section-shell"
import { CtaBand } from "@/components/sections/cta-band"
import { Typography } from "@/components/ui/typography"
import { InitialsAvatar } from "@/components/shared/initials-avatar"
import { Reveal } from "@/components/motion/reveal"

export async function generateStaticParams({
  params,
}: {
  params: { locale: string }
}) {
  const team = await getTeam(params.locale as Locale)
  return team.map((member) => ({ slug: member.slug }))
}

export default async function TeamMemberDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale, slug } = await params
  const member = await getTeamMemberBySlug(locale as Locale, slug)

  if (!member) {
    notFound()
  }

  const t = await getTranslations("teamPage")

  return (
    <>
      <SectionShell spacing="tight" className="border-b border-border">
        <div className="mx-auto max-w-2xl">
          <Link
            href="/team"
            className="mb-8 inline-flex items-center gap-1.5 text-small text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft aria-hidden="true" className="size-4 rtl:rotate-180" />
            {t("backToTeam")}
          </Link>

          <Reveal className="flex flex-col items-center gap-4 text-center">
            <InitialsAvatar name={member.name} className="size-24 text-h3" />
            <div>
              <Typography variant="h1">{member.name}</Typography>
              <Typography variant="lead" className="mt-2">
                {member.role}
              </Typography>
            </div>
          </Reveal>
        </div>
      </SectionShell>

      <SectionShell spacing="tight">
        <Reveal className="mx-auto max-w-2xl">
          <Typography variant="body" className="text-muted-foreground">
            {member.bio}
          </Typography>
        </Reveal>
      </SectionShell>

      <CtaBand />
    </>
  )
}
