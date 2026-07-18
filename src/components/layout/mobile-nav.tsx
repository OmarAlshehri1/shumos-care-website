"use client"

import { useState } from "react"
import { Dialog } from "@base-ui/react/dialog"
import { Menu, X } from "lucide-react"
import { useTranslations } from "next-intl"

import { Link, usePathname } from "@/i18n/navigation"
import { navLinks } from "@/lib/nav-links"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { LocaleSwitcher } from "@/components/layout/locale-switcher"

function MobileNav() {
  const [open, setOpen] = useState(false)
  const t = useTranslations("nav")
  const tCommon = useTranslations("common")
  const pathname = usePathname()

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger
        render={
          <Button
            variant="ghost"
            size="icon"
            aria-label={tCommon("openMenu")}
            className="md:hidden"
          />
        }
      >
        <Menu aria-hidden="true" />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Backdrop className="fixed inset-0 z-50 bg-foreground/40 opacity-0 backdrop-blur-sm transition-opacity duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] data-[open]:opacity-100" />
        <Dialog.Popup className="fixed inset-4 z-50 flex scale-95 flex-col items-center justify-center gap-10 rounded-2xl border border-border bg-surface opacity-0 shadow-soft-lg outline-none transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] data-[open]:scale-100 data-[open]:opacity-100 md:hidden">
          <Dialog.Title className="sr-only">
            {tCommon("mainNavigation")}
          </Dialog.Title>
          <Dialog.Description className="sr-only">
            {tCommon("mainNavigation")}
          </Dialog.Description>
          <Dialog.Close
            render={
              <Button
                variant="ghost"
                size="icon"
                aria-label={tCommon("closeMenu")}
                className="absolute end-4 top-4"
              />
            }
          >
            <X aria-hidden="true" />
          </Dialog.Close>
          <nav
            aria-label={tCommon("mainNavigation")}
            className="flex flex-col items-center gap-6"
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "text-h4 font-semibold text-foreground transition-colors duration-200 hover:text-primary",
                    isActive && "text-primary"
                  )}
                >
                  {t(link.labelKey)}
                </Link>
              )
            })}
          </nav>
          <LocaleSwitcher />
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export { MobileNav }
