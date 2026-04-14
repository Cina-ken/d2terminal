import Link from 'next/link'
import { services } from '@/lib/config'
import { formatPrice } from '@/lib/utils'
import { SectionHeader } from '@/components/ui/Section'

// ─── Services Preview — Phase A upgrade ───────────────────────────────────
// Luxury cards with gold top-border on hover, richer layout, warm section bg.

export default function ServicesPreview() {
  return (
    <section
      className="relative overflow-hidden py-24 lg:py-32"
      style={{ background: 'var(--color-cream-warm)' }}
      id="services"
    >
      {/* Subtle diagonal texture lines */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            var(--color-charcoal-800) 0px,
            var(--color-charcoal-800) 1px,
            transparent 1px,
            transparent 40px
          )`,
        }}
      />

      <div className="section-container relative z-10">
        <SectionHeader
          label="Что мы делаем"
          title="Наши услуги"
          subtitle="Всё для вашей красоты в одном месте. Мастера с опытом от 3 лет."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <div
              key={service.id}
              className="reveal group"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="luxury-card h-full flex flex-col">
                {/* Icon */}
                <div className="text-4xl mb-5 service-icon" aria-hidden="true">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="font-display text-h3 text-charcoal-800 mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="font-body text-sm text-ink-secondary leading-relaxed mb-6 flex-1">
                  {service.description}
                </p>

                {/* Price + duration */}
                <div
                  className="pt-5 flex items-center justify-between"
                  style={{ borderTop: '1px solid var(--color-cream-dark)' }}
                >
                  <div>
                    <span className="font-body text-xs text-ink-muted">от </span>
                    <span
                      className="font-display text-2xl"
                      style={{ color: 'var(--color-champagne)' }}
                    >
                      {formatPrice(service.priceFrom)}
                    </span>
                  </div>
                  {service.duration && (
                    <span className="font-body text-xs text-ink-muted">
                      {service.duration}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 text-center reveal">
          <Link href="/services" className="btn-outline">
            Все услуги и цены
          </Link>
        </div>
      </div>
    </section>
  )
}