import { MDXRemote } from "next-mdx-remote/rsc"
import type { ComponentProps } from "react"

import { Typography } from "@/components/ui/typography"

const mdxComponents = {
  h2: ({ children, ...props }: ComponentProps<"h2">) => (
    <Typography as="h2" variant="h3" className="mt-10 mb-4 first:mt-0" {...props}>
      {children}
    </Typography>
  ),
  h3: ({ children, ...props }: ComponentProps<"h3">) => (
    <Typography as="h3" variant="h4" className="mt-8 mb-3" {...props}>
      {children}
    </Typography>
  ),
  p: ({ children, ...props }: ComponentProps<"p">) => (
    <Typography as="p" variant="body" className="mb-4 text-muted-foreground" {...props}>
      {children}
    </Typography>
  ),
  ul: (props: ComponentProps<"ul">) => (
    <ul className="mb-4 list-disc space-y-2 ps-6 text-body text-muted-foreground" {...props} />
  ),
  li: (props: ComponentProps<"li">) => <li {...props} />,
}

function MdxContent({ source }: { source: string }) {
  return <MDXRemote source={source} components={mdxComponents} />
}

export { MdxContent }
