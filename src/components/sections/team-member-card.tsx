import { Link } from "@/i18n/navigation"
import type { TeamMember } from "@/lib/content/mdx-source"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { InitialsAvatar } from "@/components/shared/initials-avatar"

function TeamMemberCard({ member }: { member: TeamMember }) {
  return (
    <Link href={`/team/${member.slug}`} className="group block h-full">
      <Card className="h-full transition-shadow group-hover:shadow-soft-md">
        <CardHeader className="items-center pb-6 text-center">
          <InitialsAvatar name={member.name} className="mb-3 size-20 text-h4" />
          <CardTitle>{member.name}</CardTitle>
          <CardDescription>{member.role}</CardDescription>
        </CardHeader>
      </Card>
    </Link>
  )
}

export { TeamMemberCard }
