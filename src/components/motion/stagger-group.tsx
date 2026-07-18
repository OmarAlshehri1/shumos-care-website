"use client"

import type { ComponentProps } from "react"
import { motion, type Variants } from "framer-motion"

import { useReducedMotion } from "@/hooks/use-reduced-motion"
import { fadeUp, staggerContainer } from "@/lib/motion/variants"

type StaggerGroupProps = Omit<ComponentProps<typeof motion.div>, "variants">

/**
 * Orchestrates a staggered reveal across its `StaggerItem` children. Pair
 * this with `StaggerItem`, not `Reveal` — items inherit the parent's
 * animate state instead of triggering their own viewport observer.
 */
function StaggerGroup({ viewport, ...props }: StaggerGroupProps) {
  const prefersReducedMotion = useReducedMotion()

  if (prefersReducedMotion) {
    return <div {...(props as ComponentProps<"div">)} />
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2, ...viewport }}
      variants={staggerContainer}
      {...props}
    />
  )
}

type StaggerItemProps = Omit<ComponentProps<typeof motion.div>, "variants"> & {
  variants?: Variants
}

function StaggerItem({ variants = fadeUp, ...props }: StaggerItemProps) {
  const prefersReducedMotion = useReducedMotion()

  if (prefersReducedMotion) {
    return <div {...(props as ComponentProps<"div">)} />
  }

  return <motion.div variants={variants} {...props} />
}

export { StaggerGroup, StaggerItem }
