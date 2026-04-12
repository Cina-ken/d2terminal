import Link from 'next/link'
import { siteConfig } from '@/lib/config'

// ─── ContactsContent ──────────────────────────────────────────────────────

export default function ContactsContent() {
  return (
    <section className="bg-cream py-24 lg:py-32">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

          {/* ── Left: Map ──────────────────────────────────────────────── */}
          <div className="reveal">
            <MapEmbed />

            {/* Address below map */}
            <div className="mt-4 flex items-start gap-3 p-4 bg-white border border-cream-dark">
              <MapPinIcon />
              <div>
                <p className="font-body text-sm font-medium text-charcoal-800">
                  {siteConfig.address}
                </p>
                <a
                  href="https://maps.google.com/?q=2-я+Краснодарская+135+Ростов-на-Дону"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-xs text-champagne hover:text-champagne-dark transition-colors duration-300 mt-1 inline-block"
                >
                  Открыть в Google Maps →
                </a>
                <span className="font-body text-xs text-ink-muted mx-2">·</span>
                <a
                  href="https://yandex.ru/maps/?text=2-я+Краснодарская+135+Ростов-на-Дону"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-xs text-champagne hover:text-champagne-dark transition-colors duration-300 mt-1 inline-block"
                >
                  Яндекс Карты →
                </a>
              </div>
            </div>
          </div>

          {/* ── Right: Contact Details ─────────────────────────────────── */}
          <div className="space-y-6 reveal reveal-delay-2">

            {/* Phone */}
            <ContactCard icon={<PhoneIcon />} label="Телефон">
              <a
                href={siteConfig.phoneHref}
                className="font-display text-2xl text-charcoal-800 hover:text-champagne transition-colors duration-300 block"
              >
                {siteConfig.phone}
              </a>
              <p className="font-body text-xs text-ink-muted mt-1">
                Звонки принимаем ежедневно с 10:00 до 22:00
              </p>
            </ContactCard>

            {/* Working Hours */}
            <ContactCard icon={<ClockIcon />} label="Часы работы">
              <div className="space-y-2">
                {[
                  { day: 'Понедельник – Пятница', hours: '10:00 – 22:00' },
                  { day: 'Суббота',               hours: '10:00 – 22:00' },
                  { day: 'Воскресенье',            hours: '10:00 – 22:00' },
                ].map((row) => (
                  <div
                    key={row.day}
                    className="flex items-center justify-between py-2 border-b border-cream-dark last:border-0"
                  >
                    <span className="font-body text-sm text-ink-secondary">
                      {row.day}
                    </span>
                    <span className="font-body text-sm font-medium text-charcoal-800">
                      {row.hours}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="font-body text-xs text-green-700 font-medium">
                  Сейчас открыто
                </span>
              </div>
            </ContactCard>

            {/* Social Media */}
            <ContactCard icon={<ShareIcon />} label="Мы в соцсетях">
              <div className="flex flex-col gap-3">
                <a
                  href={siteConfig.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group"
                >
                  <div className="w-10 h-10 bg-charcoal-800 flex items-center justify-center group-hover:bg-champagne transition-colors duration-300">
                    <InstagramIcon />
                  </div>
                  <div>
                    <p className="font-body text-sm font-medium text-charcoal-800 group-hover:text-champagne transition-colors duration-300">
                      Instagram
                    </p>
                    <p className="font-body text-xs text-ink-muted">
                      @d2terminal
                    </p>
                  </div>
                </a>

                <a
                  href={siteConfig.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group"
                >
                  <div className="w-10 h-10 bg-charcoal-800 flex items-center justify-center group-hover:bg-champagne transition-colors duration-300">
                    <TelegramIcon />
                  </div>
                  <div>
                    <p className="font-body text-sm font-medium text-charcoal-800 group-hover:text-champagne transition-colors duration-300">
                      Telegram
                    </p>
                    <p className="font-body text-xs text-ink-muted">
                      Напишите нам — ответим быстро
                    </p>
                  </div>
                </a>
              </div>
            </ContactCard>

            {/* Book CTA */}
            <div className="p-6 bg-charcoal-800">
              <p className="font-display text-xl text-[var(--color-cream)] mb-2">
                Готовы записаться?
              </p>
              <p className="font-body text-sm text-[color-mix(in_srgb,var(--color-cream)_55%,transparent)] mb-5">
                Онлайн-запись за 1 минуту — без звонков и ожидания.
              </p>
              <Link href="/booking" className="btn-accent">
                Записаться онлайн
              </Link>
            </div>
          </div>
        </div>

        {/* ── Bottom: How to get there ──────────────────────────────────── */}
        <div className="mt-16 pt-12 border-t border-cream-dark reveal">
          <span className="section-label block mb-6">Как добраться</span>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                icon: '🚗',
                title: 'На автомобиле',
                text:  'Есть парковка рядом с салоном. Въезд со стороны 2-й Краснодарской улицы.',
              },
              {
                icon: '🚌',
                title: 'На автобусе',
                text:  'Остановка «2-я Краснодарская» — маршруты №№ 7, 15, 24. Пройти 3 минуты.',
              },
              {
                icon: '🚕',
                title: 'На такси',
                text:  'Заказывайте через Яндекс Go или Uber. Назовите адрес: 2-я Краснодарская, 135.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white border border-cream-dark p-6"
              >
                <span className="text-2xl mb-4 block">{item.icon}</span>
                <h3 className="font-display text-lg text-charcoal-800 mb-2">
                  {item.title}
                </h3>
                <p className="font-body text-sm text-ink-secondary leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Contact Card ─────────────────────────────────────────────────────────

function ContactCard({
  icon,
  label,
  children,
}: {
  icon:     React.ReactNode
  label:    string
  children: React.ReactNode
}) {
  return (
    <div className="bg-white border border-cream-dark p-6">
      <div className="flex items-center gap-3 mb-4">
        <div className="text-champagne">{icon}</div>
        <span className="font-body text-xs font-medium tracking-widest uppercase text-ink-muted">
          {label}
        </span>
      </div>
      {children}
    </div>
  )
}

// ─── Map Embed ────────────────────────────────────────────────────────────
// Using OpenStreetMap via iframe — no API key required.
// Replace src with a Google Maps embed URL once the owner provides their
// Google Maps API key or Place ID.

function MapEmbed() {
  return (
    <div className="relative w-full overflow-hidden bg-cream-dark" style={{ height: '420px' }}>
      <iframe
        title="Карта — D2 Terminal"
        src="https://www.openstreetmap.org/export/embed.html?bbox=39.6196%2C47.1885%2C39.6546%2C47.2185&layer=mapnik&marker=47.2035%2C39.6346"
        width="100%"
        height="100%"
        style={{ border: 0, filter: 'grayscale(20%) contrast(95%)' }}
        loading="lazy"
        allowFullScreen
      />
      {/* Overlay badge */}
      <div className="absolute top-4 left-4 bg-charcoal-800 text-cream px-4 py-2 flex items-center gap-2">
        <MapPinIcon light />
        <span className="font-body text-xs font-medium">D2 Terminal</span>
      </div>
    </div>
  )
}

// ─── Icons ────────────────────────────────────────────────────────────────

function PhoneIcon() {
  return (
    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.7h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 10.1a16 16 0 0 0 6 6l.72-.72a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21.28 17z"/>
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10"/>
      <polyline points="12 6 12 12 16 14"/>
    </svg>
  )
}

function ShareIcon() {
  return (
    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
    </svg>
  )
}

function MapPinIcon({ light = false }: { light?: boolean }) {
  return (
    <svg
      width="16" height="16"
      fill="none"
      stroke={light ? '#faf8f5' : 'currentColor'}
      strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      viewBox="0 0 24 24"
      className={light ? '' : 'text-champagne shrink-0 mt-0.5'}
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" fill="none" stroke="#faf8f5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  )
}

function TelegramIcon() {
  return (
    <svg width="18" height="18" fill="none" stroke="#faf8f5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d="M21.198 2.433a2.242 2.242 0 0 0-1.022.215l-17.5 7.5a2.25 2.25 0 0 0 .126 4.17l3.918 1.32 2.088 6.433a.98.98 0 0 0 1.71.29l2.822-3.045 4.514 3.34a2.25 2.25 0 0 0 3.522-1.493l2.5-17.5a2.25 2.25 0 0 0-2.678-2.23z"/>
    </svg>
  )
}