import { cn } from "@/lib/utils"

/**
 * Ambient background blobs standing in for hero photography — abstract,
 * brand-colored, and decorative only. Keeps the hero typography-led rather
 * than reaching for a generic "clinician with a CTA button" stock photo.
 */
function GradientMesh({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 -z-10 overflow-hidden",
        className
      )}
    >
      <div className="absolute -top-32 start-1/4 size-[36rem] rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute top-1/3 end-0 size-[28rem] rounded-full bg-secondary/20 blur-3xl" />
      <div className="absolute bottom-0 start-0 size-[24rem] rounded-full bg-accent/10 blur-3xl" />
    </div>
  )
}

export { GradientMesh }
