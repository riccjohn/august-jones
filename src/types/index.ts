// Product types for Etsy integration
export interface EtsyProduct {
  id: string
  title: string
  description: string
  price: {
    amount: number
    currency: string
    formatted: string
  }
  images: {
    url_570xN: string
    url_170x135: string
    url_75x75: string
  }[]
  url: string
  shop_name: string
  tags: string[]
  materials: string[]
  is_active: boolean
}

// Contact form types
export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

// Navigation types
export interface NavItem {
  href: string
  label: string
}

// Social media types
export interface SocialLink {
  platform: string
  url: string
  icon: string
}
