import { cn } from "@/lib/utils"

/**
 * Fallback avatar for team members — no real headshots exist yet, and
 * fabricating a stock photo for a specific named person would be more
 * misleading than for generic imagery, so initials are used instead.
 */
function InitialsAvatar({
  name,
  className,
}: {
  name: string
  className?: string
}) {
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase()

  return (
    <div
      aria-hidden="true"
      className={cn(
        "flex shrink-0 items-center justify-center rounded-full bg-primary/10 font-semibold text-primary",
        className
      )}
    >
      {initials}
    </div>
  )
}

export { InitialsAvatar }
