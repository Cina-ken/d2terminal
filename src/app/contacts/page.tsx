import type { Metadata } from 'next'
import SiteLayout from '@/components/layout/SiteLayout'
import ContactsContent from '@/components/sections/ContactsContent'

// ─── Page Metadata ────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'Контакты',
  description:
    'Салон красоты D2 Terminal в Ростове-на-Дону. Адрес: 2-я Краснодарская ул., 135. Телефон: +7 928 173-11-73. Работаем ежедневно 10:00–22:00.',
}

// ─── Contacts Page ────────────────────────────────────────────────────────

export default function ContactsPage() {
  return (
    <SiteLayout>
      <ContactsHero />
      <ContactsContent />
    </SiteLayout>
  )
}

// ─── Contacts Hero ────────────────────────────────────────────────────────

function ContactsHero() {
  return (
    <section className="bg-charcoal-800 pt-36 pb-20">
      <div className="section-container">
        <div className="flex items-center gap-4 mb-8">
          <div className="divider" />
          <span className="section-label">Где нас найти</span>
        </div>
        <h1 className="text-h1 font-display text-[var(--color-cream)] mb-4">
          Контакты
        </h1>
        <p className="text-lead text-[color-mix(in_srgb,var(--color-cream)_60%,transparent)] max-w-xl">
          Мы находимся в Ростове-на-Дону. Приходите — будем рады вас видеть!
        </p>
      </div>
    </section>
  )
}