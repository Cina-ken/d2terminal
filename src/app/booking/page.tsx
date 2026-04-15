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
    <section className="relative overflow-hidden" style={{ background: 'var(--color-charcoal-800)' }}>
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=1600&q=70&auto=format&fit=crop"
          alt=""
          aria-hidden="true"
          width={1600}
          height={900}
          className="w-full h-full object-cover"
          style={{ filter: 'brightness(0.2)' }}
        />
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg, rgba(10,8,6,0.95) 0%, rgba(26,20,12,0.80) 100%)' }} />
      </div>

      <div className="section-container relative z-10 pt-36 pb-20">
        <div className="flex items-center gap-4 mb-8">
          <div className="divider" />
          <span className="section-label">Онлайн-запись 24/7</span>
        </div>
        <h1 className="text-h1 font-display mb-4" style={{ color: 'var(--color-cream)' }}>
          Запишитесь онлайн
        </h1>
        <p className="text-lead max-w-xl mb-6"
          style={{ color: 'rgba(250,248,245,0.6)' }}>
          Заполните форму за 1 минуту — без звонков, без ожидания.
          Мы подтвердим запись в течение <strong style={{ color: 'var(--color-champagne)' }}>5–15 минут</strong>.
        </p>

        {/* Trust indicators */}
        <div className="flex flex-wrap gap-5 mb-8">
          {[
            { icon: '⚡', text: 'Подтверждение за 5–15 минут' },
            { icon: '📅', text: 'Запись за 60 дней вперёд'    },
            { icon: '🔄', text: 'Бесплатная отмена'           },
            { icon: '📵', text: 'Без звонков'                 },
          ].map(item => (
            <div key={item.text} className="flex items-center gap-2">
              <span className="text-sm">{item.icon}</span>
              <span className="font-body text-xs tracking-wide"
                style={{ color: 'rgba(250,248,245,0.55)' }}>
                {item.text}
              </span>
            </div>
          ))}
        </div>

        {/* Live activity indicator */}
        <div
          className="inline-flex items-center gap-3 px-4 py-2.5"
          style={{
            border: '1px solid rgba(201,169,110,0.3)',
            background: 'rgba(201,169,110,0.06)',
          }}
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="font-body text-xs" style={{ color: 'rgba(250,248,245,0.6)' }}>
            Сейчас открыто · Принимаем записи до 21:30
          </span>
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