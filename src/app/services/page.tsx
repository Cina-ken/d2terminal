import type { Metadata } from 'next'
import SiteLayout from '@/components/layout/SiteLayout'
import ServicesList from '@/components/sections/ServicesList'
import CtaBanner from '@/components/sections/CtaBanner'

// ─── Page Metadata ────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'Услуги и цены',
  description:
    'Полный прайс-лист салона красоты D2 Terminal: стрижки, маникюр, педикюр, массаж, эпиляция. Ростов-на-Дону, ежедневно 10:00–22:00.',
}

// ─── Services Page ────────────────────────────────────────────────────────

export default function ServicesPage() {
  return (
    <SiteLayout>
      {/* Page Hero */}
      <ServicesHero />

      {/* Full Services List */}
      <ServicesList />

      {/* Final CTA */}
      <CtaBanner />
    </SiteLayout>
  )
}

// ─── Services Hero ────────────────────────────────────────────────────────

function ServicesHero() {
  return (
    <section className="bg-charcoal-800 pt-36 pb-20">
      <div className="section-container">
        <div className="flex items-center gap-4 mb-8 animate-fade-in">
          <div className="divider" />
          <span className="section-label">Прайс-лист</span>
        </div>
        <h1 className="text-h1 font-display text-cream mb-4 animate-fade-up">
          Наши услуги
        </h1>
        <p
          className="text-lead text-cream/60 max-w-xl animate-fade-up"
          style={{ animationDelay: '150ms', animationFillMode: 'both' }}
        >
          Все цены актуальны. Точную стоимость уточняйте у администратора —
          некоторые процедуры рассчитываются индивидуально.
        </p>
      </div>
    </section>
  )
}