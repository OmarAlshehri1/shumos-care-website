"use client"

import type { ComponentProps } from "react"
import { motion, type Variants } from "framer-motion"

import { useReducedMotion } from "@/hooks/use-reduced-motion"
import { fadeUp } from "@/lib/motion/variants"

type RevealProps = Omit<ComponentProps<typeof motion.div>, "variants"> & {
  variants?: Variants
}

/**
 * Scroll-triggered reveal wrapper. Animates in once when it enters the
 * viewport; if the user prefers reduced motion, renders in its final state
 * immediately with no transition.
 */
function Reveal({
  variants = fadeUp,
  viewport,
  ...props
}: RevealProps) {
  const prefersReducedMotion = useReducedMotion()

  if (prefersReducedMotion) {
    return <div {...(props as ComponentProps<"div">)} />
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3, ...viewport }}
      variants={variants}
      {...props}
    />
  )
}

export { Reveal }
