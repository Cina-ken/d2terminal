import Link from 'next/link'
import { benefits } from '@/lib/config'
import { Section, SectionHeader } from '@/components/ui/Section'

// ─── Benefits Section — Phase A upgrade ───────────────────────────────────
// Luxury cards with top-border shimmer, icon backgrounds, richer copy.

export default function Benefits() {
  return (
    <section
      className="relative overflow-hidden py-24 lg:py-32"
      style={{ background: 'var(--color-charcoal-800)' }}
      id="benefits"
    >
      {/* Dot grid background texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'radial-gradient(circle, #c9a96e 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* Ambient gold glow — top center */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(201,169,110,0.12) 0%, transparent 70%)',
        }}
      />

      <div className="section-container relative z-10">
        <SectionHeader
          label="Почему выбирают нас"
          title="Ваш комфорт — наш приоритет"
          subtitle="Мы создали салон, в котором приятно находиться и куда хочется возвращаться снова."
          centered
          light
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {benefits.map((benefit, i) => (
            <div
              key={benefit.id}
              className="reveal group relative"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Card */}
              <div
                className="h-full p-8 border transition-all duration-500 cursor-default hover:-translate-y-1"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  borderColor: 'rgba(201,169,110,0.15)',
                  backdropFilter: 'blur(8px)',
                }}
              >
                {/* Top shimmer line — visible on hover via group */}
                <div
                  className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 gold-line"
                />

                {/* Icon container */}
                <div
                  className="w-12 h-12 flex items-center justify-center mb-6 text-xl"
                  style={{
                    background: 'rgba(201,169,110,0.12)',
                    border: '1px solid rgba(201,169,110,0.2)',
                  }}
                >
                  {benefit.icon}
                </div>

                {/* Title */}
                <h3
                  className="font-display text-xl mb-3 leading-snug"
                  style={{ color: 'var(--color-cream)' }}
                >
                  {benefit.title}
                </h3>

                {/* Description */}
                <p
                  className="font-body text-sm leading-relaxed"
                  style={{ color: 'rgba(250,248,245,0.55)' }}
                >
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div
          className="mt-16 pt-12 flex flex-col sm:flex-row items-center justify-between gap-6 reveal"
          style={{ borderTop: '1px solid rgba(250,248,245,0.08)' }}
        >
          <p
            className="font-display text-2xl text-center sm:text-left"
            style={{ color: 'rgba(250,248,245,0.7)' }}
          >
            Готовы к преображению?
          </p>
          <Link
            href="/booking"
            className="btn-accent"
            style={{ boxShadow: '0 4px 24px rgba(201,169,110,0.3)' }}
          >
            Записаться онлайн
          </Link>
        </div>
      </div>
    </section>
  )
}