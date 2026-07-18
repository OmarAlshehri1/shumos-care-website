"use client"

import { useTranslations } from "next-intl"

import { Link, usePathname } from "@/i18n/navigation"
import { navLinks } from "@/lib/nav-links"
import { cn } from "@/lib/utils"

function DesktopNav() {
  const t = useTranslations("nav")
  const tCommon = useTranslations("common")
  const pathname = usePathname()

  return (
    <nav
      aria-label={tCommon("mainNavigation")}
      className="hidden items-center gap-8 md:flex"
    >
      {navLinks.map((link) => {
        const isActive = pathname === link.href

        return (
          <Link
            key={link.href}
            href={link.href}
            aria-current={isActive ? "page" : undefined}
            className={cn(
              "relative py-1 text-small font-medium text-foreground/80 transition-colors duration-200 hover:text-foreground",
              "after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-center after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.16,1,0.3,1)] hover:after:scale-x-100",
              isActive && "text-primary after:scale-x-100"
            )}
          >
            {t(link.labelKey)}
          </Link>
        )
      })}
    </nav>
  )
}

export { DesktopNav }
