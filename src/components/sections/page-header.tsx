import type { ReactNode } from "react"

import { SectionShell } from "@/components/sections/section-shell"
import { Typography } from "@/components/ui/typography"
import { GradientMesh } from "@/components/effects/gradient-mesh"

type PageHeaderProps = {
  eyebrow?: string
  title: string
  lead?: string
  children?: ReactNode
}

function PageHeader({ eyebrow, title, lead, children }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <GradientMesh className="opacity-60" />
      <SectionShell spacing="tight">
        {children}
        <div className="mx-auto max-w-2xl text-center">
          {eyebrow ? (
            <Typography variant="caption" className="text-primary">
              {eyebrow}
            </Typography>
          ) : null}
          <Typography variant="h1" className="mt-3">
            {title}
          </Typography>
          {lead ? (
            <Typography variant="lead" className="mt-4">
              {lead}
            </Typography>
          ) : null}
        </div>
      </SectionShell>
    </section>
  )
}

export { PageHeader }
