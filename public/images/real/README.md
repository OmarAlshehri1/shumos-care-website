Drop-in destination for real Shumos Care clinic photography.

Files placed here replace entries in `public/images/placeholders/` via the
semantic keys in `src/lib/content/image-registry.ts` (Phase 4+) — components
never reference a raw path, so swapping a placeholder for the real photo is a
one-line change in the registry, not a find/replace across the codebase.
