export interface BusinessHours {
  day: string
  hours: string
}

export interface Address {
  street: string
  district: string
  city: string
  phone: string
}

export interface SocialMedia {
  name: string
  icon: JSX.Element
  url?: string
  available: boolean
}

export interface MapConfig {
  embedUrl: string
  title: string
}
