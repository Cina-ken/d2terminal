import { benefits } from '@/lib/config'
import { Section, SectionHeader } from '@/components/ui/Section'

// ─── Benefits Section ─────────────────────────────────────────────────────

export default function Benefits() {
  return (
    <Section dark id="benefits">
      <SectionHeader
        label="Почему мы"
        title="Ваш комфорт — наш приоритет"
        subtitle="Мы создали салон, в котором приятно находиться и куда хочется возвращаться."
        centered
        light
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-cream/10">
        {benefits.map((benefit, i) => (
          <div
            key={benefit.id}
            className="bg-charcoal-800 p-8 lg:p-10 reveal"
            style={{ transitionDelay: `${i * 120}ms` }}
          >
            {/* Icon */}
            <div className="text-3xl mb-6" aria-hidden="true">
              {benefit.icon}
            </div>

            {/* Title */}
            <h3 className="font-display text-xl text-cream mb-3 leading-snug">
              {benefit.title}
            </h3>

            {/* Description */}
            <p className="font-body text-sm text-cream/60 leading-relaxed">
              {benefit.description}
            </p>
          </div>
        ))}
      </div>

      {/* Bottom accent strip */}
      <div className="mt-16 flex items-center gap-6 justify-center reveal">
        <div className="h-px flex-1 bg-cream/10 max-w-24" />
        <p className="font-body text-sm text-cream/40 text-center">
          Запись открыта ежедневно с 10:00 до 22:00
        </p>
        <div className="h-px flex-1 bg-cream/10 max-w-24" />
      </div>
    </Section>
  )
}