import { getTranslations } from "next-intl/server"

import { Link } from "@/i18n/navigation"
import { navLinks } from "@/lib/nav-links"
import { Typography } from "@/components/ui/typography"

async function Footer() {
  const t = await getTranslations()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-6 py-16 md:flex-row md:items-start md:justify-between md:px-8">
        <div className="max-w-sm">
          <Typography as="p" variant="h4">
            {t("common.siteName")}
          </Typography>
          <Typography as="p" variant="small" className="mt-2 text-muted-foreground">
            {t("footer.tagline")}
          </Typography>
        </div>

        <nav
          aria-label={t("common.mainNavigation")}
          className="flex flex-wrap gap-x-8 gap-y-3"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-small text-muted-foreground transition-colors duration-200 hover:text-foreground"
            >
              {t(`nav.${link.labelKey}`)}
            </Link>
          ))}
        </nav>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto w-full max-w-7xl px-6 py-6 md:px-8">
          <Typography as="p" variant="caption" className="normal-case">
            © {year} {t("common.siteName")} — {t("footer.rights")}
          </Typography>
        </div>
      </div>
    </footer>
  )
}

export { Footer }
