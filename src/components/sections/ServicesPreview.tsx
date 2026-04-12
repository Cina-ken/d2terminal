import Link from 'next/link'
import { services } from '@/lib/config'
import { formatPrice } from '@/lib/utils'
import { Section, SectionHeader } from '@/components/ui/Section'

// ─── Services Preview (Homepage) ──────────────────────────────────────────

export default function ServicesPreview() {
  return (
    <Section warm id="services">
      <SectionHeader
        label="Что мы делаем"
        title="Наши услуги"
        subtitle="Профессиональный уход за собой в одном месте. Все мастера — с подтверждённой квалификацией."
      />

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, i) => (
          <div
            key={service.id}
            className="service-card reveal"
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            {/* Icon */}
            <div
              className="service-icon text-3xl mb-6 transition-transform duration-300 inline-block"
              aria-hidden="true"
            >
              {service.icon}
            </div>

            {/* Title */}
            <h3 className="font-display text-h3 text-charcoal-800 mb-3">
              {service.title}
            </h3>

            {/* Description */}
            <p className="font-body text-sm text-ink-secondary leading-relaxed mb-6">
              {service.description}
            </p>

            {/* Price + duration */}
            <div className="mt-auto pt-4 border-t border-cream-dark flex items-center justify-between">
              <div>
                <span className="font-body text-xs text-ink-muted">от </span>
                <span className="font-display text-xl text-champagne">
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
        ))}
      </div>

      {/* CTA */}
      <div className="mt-14 text-center reveal">
        <Link href="/services" className="btn-outline">
          Все услуги и цены
        </Link>
      </div>
    </Section>
  )
}