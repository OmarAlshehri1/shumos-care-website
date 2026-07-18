import { Activity, Baby, Dumbbell, HandHelping, Heart, Home } from "lucide-react"
import type { ComponentType } from "react"

export const serviceIcons = {
  "hand-helping": HandHelping,
  dumbbell: Dumbbell,
  activity: Activity,
  heart: Heart,
  baby: Baby,
  home: Home,
} satisfies Record<string, ComponentType<{ className?: string }>>

export type ServiceIconKey = keyof typeof serviceIcons
export const serviceIconKeys = Object.keys(serviceIcons) as ServiceIconKey[]
