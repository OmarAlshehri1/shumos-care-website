import type { Transition } from "framer-motion"

/**
 * Single custom easing curve used everywhere motion appears — a soft,
 * decelerated "premium" feel. No other easing curves should be introduced
 * elsewhere in the codebase.
 */
export const premiumEase = [0.16, 1, 0.3, 1] as const

export const duration = {
  fast: 0.2,
  base: 0.5,
  slow: 0.8,
} as const

export const revealTransition: Transition = {
  duration: duration.base,
  ease: premiumEase,
}

export const staggerTransition: Transition = {
  duration: duration.base,
  ease: premiumEase,
}

export const pageTransition: Transition = {
  duration: duration.fast,
  ease: premiumEase,
}
