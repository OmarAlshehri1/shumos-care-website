"use client"

import { useReducedMotion as useFramerReducedMotion } from "framer-motion"

/**
 * Wraps Framer Motion's `prefers-reduced-motion` detection behind our own
 * hook name so every motion primitive imports from one place — this hook is
 * the single point where "should motion play?" is decided site-wide.
 */
export function useReducedMotion(): boolean {
  return useFramerReducedMotion() ?? false
}
