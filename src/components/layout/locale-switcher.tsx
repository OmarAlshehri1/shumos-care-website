"use client"

import { useLocale, useTranslations } from "next-intl"

import { Link, usePathname } from "@/i18n/navigation"
import { routing } from "@/i18n/routing"
import { Button } from "@/components/ui/button"

function LocaleSwitcher() {
  const locale = useLocale()
  const pathname = usePathname()
  const t = useTranslations("common")
  const nextLocale =
    routing.locales.find((candidate) => candidate !== locale) ??
    routing.defaultLocale

  return (
    <Button
      variant="ghost"
      size="sm"
      render={<Link href={pathname} locale={nextLocale} />}
    >
      {t("switchLocale")}
    </Button>
  )
}

export { LocaleSwitcher }
