import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const typographyVariants = cva("text-foreground", {
  variants: {
    variant: {
      display: "text-display font-semibold tracking-tight text-balance",
      h1: "text-h1 font-semibold tracking-tight text-balance",
      h2: "text-h2 font-semibold tracking-tight text-balance",
      h3: "text-h3 font-semibold text-balance",
      h4: "text-h4 font-semibold",
      lead: "text-lead font-normal text-muted-foreground",
      body: "text-body font-normal",
      small: "text-small font-normal",
      caption:
        "text-caption font-medium uppercase text-muted-foreground",
    },
  },
  defaultVariants: {
    variant: "body",
  },
})

const defaultTagByVariant: Record<
  NonNullable<VariantProps<typeof typographyVariants>["variant"]>,
  ElementType
> = {
  display: "h1",
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  lead: "p",
  body: "p",
  small: "p",
  caption: "span",
}

type TypographyProps<T extends ElementType> = {
  as?: T
  variant?: VariantProps<typeof typographyVariants>["variant"]
  className?: string
  children: ReactNode
} & Omit<ComponentPropsWithoutRef<T>, "as" | "className" | "children">

function Typography<T extends ElementType = "p">({
  as,
  variant = "body",
  className,
  children,
  ...props
}: TypographyProps<T>) {
  const Comp = as ?? defaultTagByVariant[variant ?? "body"]

  return (
    <Comp
      data-slot="typography"
      className={cn(typographyVariants({ variant }), className)}
      {...props}
    >
      {children}
    </Comp>
  )
}

export { Typography, typographyVariants }
