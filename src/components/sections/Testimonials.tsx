import { testimonials } from '@/lib/config'
import { Section, SectionHeader } from '@/components/ui/Section'
import StarRating from '@/components/ui/StarRating'

// ─── Testimonials Section ─────────────────────────────────────────────────

export default function Testimonials() {
  return (
    <Section warm id="testimonials">
      <SectionHeader
        label="Отзывы клиентов"
        title="Нам доверяют"
        subtitle="Реальные отзывы от наших клиентов. Каждый отзыв — это история красоты."
      />

      {/* Cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <div
            key={t.id}
            className="card flex flex-col reveal"
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            {/* Top: stars + date */}
            <div className="flex items-center justify-between mb-5">
              <StarRating rating={t.rating} />
              <span className="font-body text-xs text-ink-muted">{t.date}</span>
            </div>

            {/* Quote mark */}
            <div
              className="font-display text-5xl text-champagne/30 leading-none mb-2 select-none"
              aria-hidden="true"
            >
              "
            </div>

            {/* Review text */}
            <p className="font-body text-sm text-ink-secondary leading-relaxed flex-1 mb-6">
              {t.text}
            </p>

            {/* Reviewer info */}
            <div className="pt-4 border-t border-cream-dark flex items-center gap-3">
              {/* Avatar circle with initials */}
              <div className="w-9 h-9 rounded-full bg-champagne/15 flex items-center justify-center shrink-0">
                <span className="font-body text-xs font-medium text-champagne">
                  {t.name.charAt(0)}
                </span>
              </div>
              <div>
                <p className="font-body text-sm font-medium text-charcoal-800 leading-none">
                  {t.name}
                </p>
                <p className="font-body text-xs text-ink-muted mt-1">{t.service}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Overall rating summary */}
      <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4 reveal">
        <div className="flex items-baseline gap-2">
          <span className="font-display text-5xl text-charcoal-800">4.9</span>
          <span className="font-body text-sm text-ink-muted">/ 5.0</span>
        </div>
        <div className="flex flex-col items-center sm:items-start gap-1">
          <StarRating rating={5} size="md" />
          <span className="font-body text-xs text-ink-muted">
            На основе более 60 отзывов
          </span>
        </div>
      </div>
    </Section>
  )
}