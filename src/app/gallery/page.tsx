import type { Metadata } from 'next'
import SiteLayout from '@/components/layout/SiteLayout'
import GalleryGrid from '@/components/sections/GalleryGrid'

// ─── Page Metadata ────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'Галерея работ — Наши работы',
  description:
    'Реальные работы мастеров салона красоты D2 Terminal. Стрижки, окрашивание, маникюр, массаж, эпиляция. Ростов-на-Дону.',
  alternates: { canonical: 'https://d2terminal.vercel.app/gallery' },
}

// ─── Gallery Page ─────────────────────────────────────────────────────────

export default function GalleryPage() {
  return (
    <SiteLayout>
      <GalleryHero />
      <GalleryGrid />
    </SiteLayout>
  )
}

// ─── Gallery Hero ─────────────────────────────────────────────────────────

function GalleryHero() {
  return (
    <section className="relative overflow-hidden" style={{ background: 'var(--color-charcoal-800)' }}>
      {/* Background — collage of 3 images side by side */}
      <div className="absolute inset-0 grid grid-cols-3 opacity-25">
        {[
          'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=60&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&q=60&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&q=60&auto=format&fit=crop',
        ].map((src, i) => (
          <img key={i} src={src} alt="" aria-hidden="true"
            width={600} height={800}
            className="w-full h-full object-cover"
          />
        ))}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0"
        style={{ background: 'linear-gradient(135deg, rgba(10,8,6,0.92) 0%, rgba(26,20,12,0.88) 100%)' }} />

      {/* Gold shimmer bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px gold-line opacity-40" />

      <div className="section-container relative z-10 pt-36 pb-20">
        <div className="flex items-center gap-4 mb-8">
          <div className="divider" />
          <span className="section-label">Портфолио</span>
        </div>
        <h1 className="font-display text-h1 mb-4" style={{ color: 'var(--color-cream)' }}>
          Наши работы
        </h1>
        <p className="font-body text-lead max-w-xl mb-8"
          style={{ color: 'rgba(250,248,245,0.6)' }}>
          Реальные результаты наших мастеров. Здесь нет фотошопа —
          только настоящие работы для настоящих клиентов.
        </p>

        {/* Stats row */}
        <div className="flex flex-wrap gap-8">
          {[
            { value: '16+',   label: 'работ в галерее'   },
            { value: '4',     label: 'категории услуг'   },
            { value: '3 000+', label: 'довольных клиентов' },
          ].map(stat => (
            <div key={stat.label}>
              <p className="font-display text-2xl" style={{ color: 'var(--color-champagne-light)' }}>
                {stat.value}
              </p>
              <p className="font-body text-xs mt-1" style={{ color: 'rgba(250,248,245,0.45)' }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}