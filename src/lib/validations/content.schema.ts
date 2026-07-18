import { z } from "zod"

import { serviceIconKeys } from "@/lib/content/service-icons"

export const serviceFrontmatterSchema = z.object({
  title: z.string(),
  summary: z.string(),
  icon: z.enum(serviceIconKeys as [string, ...string[]]),
})

export const teamMemberSchema = z.object({
  name: z.string(),
  role: z.string(),
  bio: z.string(),
})
