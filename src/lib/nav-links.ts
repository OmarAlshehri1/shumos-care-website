export type NavLink = {
  href: string
  labelKey: "home" | "about" | "services" | "team" | "blog" | "contact"
}

/**
 * Shared between DesktopNav, MobileNav, and Footer. Target routes land in
 * Phases 4-6 — links are wired ahead of their pages, same as the i18n
 * skeleton was wired ahead of the pages that use it.
 */
export const navLinks: NavLink[] = [
  { href: "/", labelKey: "home" },
  { href: "/about", labelKey: "about" },
  { href: "/services", labelKey: "services" },
  { href: "/team", labelKey: "team" },
  { href: "/blog", labelKey: "blog" },
  { href: "/contact", labelKey: "contact" },
]
