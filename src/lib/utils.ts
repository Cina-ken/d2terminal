import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

// ─── Class Name Utility ────────────────────────────────────────────────────
// Combines clsx + tailwind-merge so conditional classes never conflict

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// ─── Price Formatter ───────────────────────────────────────────────────────

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('ru-RU', {
    style:    'currency',
    currency: 'RUB',
    maximumFractionDigits: 0,
  }).format(price)
}

// ─── Phone Formatter ───────────────────────────────────────────────────────

export function formatPhone(phone: string): string {
  // Formats +79281731173 → +7 (928) 173-11-73
  const digits = phone.replace(/\D/g, '')
  if (digits.length === 11) {
    return `+${digits[0]} (${digits.slice(1, 4)}) ${digits.slice(4, 7)}-${digits.slice(7, 9)}-${digits.slice(9)}`
  }
  return phone
}

// ─── Date Helpers ──────────────────────────────────────────────────────────

export function getMinBookingDate(): string {
  // Today's date as YYYY-MM-DD (minimum selectable date for booking)
  return new Date().toISOString().split('T')[0]
}

export function getMaxBookingDate(): string {
  // 60 days from today
  const date = new Date()
  date.setDate(date.getDate() + 60)
  return date.toISOString().split('T')[0]
}

export function formatDateRu(dateStr: string): string {
  const date = new Date(dateStr)
  return date.toLocaleDateString('ru-RU', {
    day:   'numeric',
    month: 'long',
    year:  'numeric',
  })
}