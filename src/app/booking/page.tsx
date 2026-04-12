import type { Metadata } from 'next'
import { Suspense } from 'react'
import SiteLayout from '@/components/layout/SiteLayout'
import BookingForm from '@/components/sections/BookingForm'

// ─── Page Metadata ────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'Онлайн-запись',
  description:
    'Запишитесь онлайн в салон красоты D2 Terminal. Выберите услугу, дату и удобное время. Ростов-на-Дону, ежедневно 10:00–22:00.',
}

// ─── Booking Page ─────────────────────────────────────────────────────────

export default function BookingPage() {
  return (
    <SiteLayout>
      <BookingHero />
      {/* Suspense required because BookingForm uses useSearchParams() */}
      <Suspense fallback={<BookingFormSkeleton />}>
        <BookingForm />
      </Suspense>
    </SiteLayout>
  )
}

// ─── Booking Hero ─────────────────────────────────────────────────────────

function BookingHero() {
  return (
    <section className="bg-charcoal-800 pt-36 pb-20">
      <div className="section-container">
        <div className="flex items-center gap-4 mb-8">
          <div className="divider" />
          <span className="section-label">Онлайн-запись</span>
        </div>
        <h1 className="text-h1 font-display text-[var(--color-cream)] mb-4">
          Запишитесь онлайн
        </h1>
        <p className="text-lead text-[color-mix(in_srgb,var(--color-cream)_60%,transparent)] max-w-xl">
          Заполните форму — и мы подтвердим вашу запись в течение 15 минут.
          Никаких звонков, никакого ожидания.
        </p>

        {/* Trust indicators */}
        <div className="flex flex-wrap gap-6 mt-10">
          {[
            { icon: '⚡', text: 'Подтверждение за 15 минут' },
            { icon: '📅', text: 'Запись за 60 дней вперёд'  },
            { icon: '🔄', text: 'Бесплатная отмена'         },
          ].map((item) => (
            <div key={item.text} className="flex items-center gap-2">
              <span className="text-base">{item.icon}</span>
              <span className="font-body text-xs text-[color-mix(in_srgb,var(--color-cream)_50%,transparent)] tracking-wide">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Loading Skeleton ─────────────────────────────────────────────────────

function BookingFormSkeleton() {
  return (
    <section className="bg-cream py-24 lg:py-32">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-6">
            <div className="h-10 w-64 bg-cream-dark animate-pulse" />
            <div className="grid grid-cols-2 gap-6">
              <div className="h-14 bg-cream-dark animate-pulse" />
              <div className="h-14 bg-cream-dark animate-pulse" />
            </div>
            <div className="h-14 bg-cream-dark animate-pulse" />
            <div className="grid grid-cols-2 gap-6">
              <div className="h-14 bg-cream-dark animate-pulse" />
              <div className="h-14 bg-cream-dark animate-pulse" />
            </div>
            <div className="h-24 bg-cream-dark animate-pulse" />
            <div className="h-14 bg-cream-dark animate-pulse" />
          </div>
          <div className="space-y-6">
            <div className="h-48 bg-cream-dark animate-pulse" />
            <div className="h-32 bg-cream-dark animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  )
}