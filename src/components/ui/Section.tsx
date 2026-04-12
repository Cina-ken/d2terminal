
import { cn } from '@/lib/utils'

interface SectionProps {
  children:   React.ReactNode
  className?: string
  dark?:      boolean
  warm?:      boolean
  id?:        string
  as?:        React.ElementType
}

interface SectionHeaderProps {
  label?:     string
  title:      string
  subtitle?:  string
  centered?:  boolean
  light?:     boolean
  className?: string
}

export function Section({
  children,
  className,
  dark  = false,
  warm  = false,
  id,
  as: Tag = 'section',
}: SectionProps) {
  return (
    <Tag
      id={id}
      className={cn(
        'section-padding',
        // v4: bg-* uses CSS vars defined in @theme — these work fine
        dark && 'bg-charcoal-800 text-cream',
        warm && 'bg-cream-warm',
        !dark && !warm && 'bg-cream',
        className
      )}
    >
      <div className="section-container">
        {children}
      </div>
    </Tag>
  )
}

export function SectionHeader({
  label,
  title,
  subtitle,
  centered = false,
  light    = false,
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'mb-16',
        centered && 'text-center flex flex-col items-center',
        className
      )}
    >
      {label && <span className="section-label block mb-4">{label}</span>}

      <div className={cn('divider mb-6', centered && 'mx-auto')} />

      <h2
        className={cn(
          'text-h2 font-display',
          // v4: arbitrary color values still work
          light ? 'text-[var(--color-cream)]' : 'text-charcoal-800'
        )}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={cn(
            'text-lead mt-4 max-w-prose-lg',
            light ? 'text-[color-mix(in_srgb,var(--color-cream)_70%,transparent)]' : 'text-ink-secondary',
            centered && 'mx-auto'
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}