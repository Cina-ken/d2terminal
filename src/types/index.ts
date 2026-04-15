// ─── Site Configuration ────────────────────────────────────────────────────

export interface SiteConfig {
  name: string
  tagline: string
  description: string
  phone: string
  phoneHref: string
  address: string
  addressShort: string
  instagram: string
  telegram: string
  workingHours: string
  workingDays: string
}

// ─── Navigation ────────────────────────────────────────────────────────────

export interface NavLink {
  label: string
  href: string
}

// ─── Services ──────────────────────────────────────────────────────────────

export interface Service {
  id: string
  title: string
  description: string
  icon: string
  priceFrom: number
  priceUnit: string
  duration?: string
  items?: ServiceItem[]
}

export interface ServiceItem {
  name: string
  price: number
  duration?: string
}

// ─── Booking ───────────────────────────────────────────────────────────────

export interface BookingFormData {
  name: string
  phone: string
  service: string
  date: string
  time: string
  comment?: string
}

export interface BookingResponse {
  success: boolean
  message: string
  bookingId?: string
  error?: string
}

// ─── Testimonials ──────────────────────────────────────────────────────────

export interface Testimonial {
  id: string
  name: string
  service: string
  rating: number
  text: string
  date: string
  avatar?: string
  source?: 'google' | 'yandex' | 'direct'
}

// ─── Benefits ──────────────────────────────────────────────────────────────

export interface Benefit {
  id: string
  icon: string
  title: string
  description: string
}

// ─── Gallery ───────────────────────────────────────────────────────────────

export type WorkCategory = 'all' | 'haircut' | 'manicure' | 'massage' | 'epilation' | 'interior'

export interface GalleryItem {
  id: string
  category: WorkCategory
  image: string
  title: string
  description: string
  master: string
}

// ─── Masters ───────────────────────────────────────────────────────────────

export interface Master {
  id: string
  name: string
  role: string
  experience: string
  specialties: string[]
  image: string
  rating: number
  reviewCount: number
}

// ─── API ───────────────────────────────────────────────────────────────────

export interface ApiResponse<T = unknown> {
  success: boolean
  data?: T
  error?: string
  message?: string
}