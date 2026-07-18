import { ArrowRight } from "lucide-react"

import { Link } from "@/i18n/navigation"
import type { Service } from "@/lib/content/mdx-source"
import { serviceIcons } from "@/lib/content/service-icons"
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

function ServiceCard({
  service,
  learnMoreLabel,
}: {
  service: Service
  learnMoreLabel: string
}) {
  const Icon = serviceIcons[service.icon]

  return (
    <Card className="h-full transition-shadow hover:shadow-soft-md">
      <CardHeader>
        <div className="mb-2 flex size-11 items-center justify-center rounded-full bg-primary/10">
          <Icon aria-hidden="true" className="size-5 text-primary" />
        </div>
        <CardTitle>{service.title}</CardTitle>
        <CardDescription>{service.summary}</CardDescription>
      </CardHeader>
      <CardFooter className="mt-auto pt-0">
        <Button
          variant="link"
          className="px-0"
          render={<Link href={`/services/${service.slug}`} />}
        >
          {learnMoreLabel}
          <ArrowRight
            data-icon="inline-end"
            aria-hidden="true"
            className="size-4 rtl:rotate-180"
          />
        </Button>
      </CardFooter>
    </Card>
  )
}

export { ServiceCard }
