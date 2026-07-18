import { getTranslations } from "next-intl/server"

import { Link } from "@/i18n/navigation"
import { SectionShell } from "@/components/sections/section-shell"
import { Typography } from "@/components/ui/typography"
import { Button } from "@/components/ui/button"

export default async function NotFound() {
  const t = await getTranslations("common")

  return (
    <SectionShell spacing="loose">
      <div className="mx-auto flex max-w-md flex-col items-center gap-4 text-center">
        <Typography variant="caption" className="text-primary">
          404
        </Typography>
        <Typography variant="h2">{t("notFoundTitle")}</Typography>
        <Typography variant="body" className="text-muted-foreground">
          {t("notFoundBody")}
        </Typography>
        <Button className="mt-2" render={<Link href="/" />}>
          {t("backHome")}
        </Button>
      </div>
    </SectionShell>
  )
}
