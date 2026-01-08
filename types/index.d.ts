import { LucideIcon } from "lucide-react"

export type NavigationItem = {
  href: string,
  label: string
  isPage?: boolean
}

export type TrustItem = {
  icon: LucideIcon,
  title: string,
  description: string
}

export type Services = {
  icon: LucideIcon,
  title: string,
  description: string,
  features: string[]
}

export type TimelineItem = {
  icon: LucideIcon,
  year: string,
  title: string
}

export type ContactInfo = {
  icon: LucideIcon,
  label: string,
  value: string,
  href: string | null
}
