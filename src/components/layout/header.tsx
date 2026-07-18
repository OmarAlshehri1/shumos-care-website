import { getTranslations } from "next-intl/server"

import { Link } from "@/i18n/navigation"
import { DesktopNav } from "@/components/layout/desktop-nav"
import { MobileNav } from "@/components/layout/mobile-nav"
import { LocaleSwitcher } from "@/components/layout/locale-switcher"

async function Header() {
  const t = await getTranslations("common")

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-md">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:start-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-primary focus:px-6 focus:py-3 focus:text-primary-foreground focus:shadow-soft-md"
      >
        {t("skipToContent")}
      </a>

      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6 md:px-8">
        {/* TODO(real-asset): replace text wordmark with the logo mark from public/logo/ once available */}
        <Link
          href="/"
          className="text-h4 font-semibold tracking-tight text-foreground transition-opacity hover:opacity-80"
        >
          {t("siteName")}
        </Link>

        <DesktopNav />

        <div className="flex items-center gap-2">
          <div className="hidden md:block">
            <LocaleSwitcher />
          </div>
          <MobileNav />
        </div>
      </div>
    </header>
  )
}

export { Header }
