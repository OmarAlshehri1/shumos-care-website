import fs from "node:fs/promises"
import path from "node:path"
import matter from "gray-matter"

import type { Locale } from "@/i18n/routing"
import type { ServiceIconKey } from "@/lib/content/service-icons"
import { serviceFrontmatterSchema, teamMemberSchema } from "@/lib/validations/content.schema"

const SERVICES_DIR = path.join(process.cwd(), "src/content/services")
const TEAM_DIR = path.join(process.cwd(), "src/content/team")

export type Service = {
  slug: string
  title: string
  summary: string
  icon: ServiceIconKey
  body: string
}

export type TeamMember = {
  slug: string
  name: string
  role: string
  bio: string
}

/**
 * MDX/JSON-backed implementation of the content-source pattern — every page
 * calls these functions, never the filesystem directly, so a future CMS
 * adapter can replace this file without touching any page or component.
 */
export async function getServices(locale: Locale): Promise<Service[]> {
  const dir = path.join(SERVICES_DIR, locale)
  const files = await fs.readdir(dir)

  const services = await Promise.all(
    files
      .filter((file) => file.endsWith(".mdx"))
      .map(async (file) => {
        const raw = await fs.readFile(path.join(dir, file), "utf8")
        const { data, content } = matter(raw)
        const frontmatter = serviceFrontmatterSchema.parse(data)

        return {
          slug: file.replace(/\.mdx$/, ""),
          title: frontmatter.title,
          summary: frontmatter.summary,
          icon: frontmatter.icon as ServiceIconKey,
          body: content,
        }
      })
  )

  return services.sort((a, b) => a.slug.localeCompare(b.slug))
}

export async function getServiceBySlug(
  locale: Locale,
  slug: string
): Promise<Service | null> {
  const services = await getServices(locale)
  return services.find((service) => service.slug === slug) ?? null
}

export async function getTeam(locale: Locale): Promise<TeamMember[]> {
  const dir = path.join(TEAM_DIR, locale)
  const files = await fs.readdir(dir)

  const team = await Promise.all(
    files
      .filter((file) => file.endsWith(".json"))
      .map(async (file) => {
        const raw = await fs.readFile(path.join(dir, file), "utf8")
        const data = teamMemberSchema.parse(JSON.parse(raw))

        return {
          slug: file.replace(/\.json$/, ""),
          ...data,
        }
      })
  )

  return team.sort((a, b) => a.slug.localeCompare(b.slug))
}

export async function getTeamMemberBySlug(
  locale: Locale,
  slug: string
): Promise<TeamMember | null> {
  const team = await getTeam(locale)
  return team.find((member) => member.slug === slug) ?? null
}
