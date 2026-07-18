import type { ComponentProps, ElementType, ReactNode } from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const sectionShellVariants = cva("", {
  variants: {
    spacing: {
      default: "py-24 md:py-32 lg:py-40",
      tight: "py-16 md:py-20 lg:py-24",
      loose: "py-32 md:py-40 lg:py-48",
    },
  },
  defaultVariants: {
    spacing: "default",
  },
})

type SectionShellProps<T extends ElementType> = {
  as?: T
  containerClassName?: string
  children: ReactNode
} & VariantProps<typeof sectionShellVariants> &
  Omit<ComponentProps<T>, "as" | "children">

function SectionShell<T extends ElementType = "section">({
  as,
  spacing,
  className,
  containerClassName,
  children,
  ...props
}: SectionShellProps<T>) {
  const Comp = as ?? "section"

  return (
    <Comp
      data-slot="section-shell"
      className={cn(sectionShellVariants({ spacing }), className)}
      {...props}
    >
      <div
        className={cn(
          "mx-auto w-full max-w-7xl px-6 md:px-8",
          containerClassName
        )}
      >
        {children}
      </div>
    </Comp>
  )
}

export { SectionShell, sectionShellVariants }
