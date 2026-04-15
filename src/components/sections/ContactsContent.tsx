
import Link from 'next/link'
import { siteConfig } from '@/lib/config'

export default function ContactsContent() {
  const year = new Date().getFullYear()
  const yearsInBusiness = year - 2018

  return (
    <>
      {/* ── Authority strip ───────────────────────────────────────────── */}
      <section style={{ background: 'var(--color-champagne)', padding: '14px 0' }}>
        <div className="section-container">
          <div className="flex flex-wrap items-center justify-between gap-4">
            {[
              `✓ Работаем с 2018 года — уже ${yearsInBusiness} лет`,
              '✓ Более 3 000 довольных клиентов',
              '✓ Рейтинг 4.9 на Google',
              '✓ Подтверждение за 15 минут',
            ].map(t => (
              <span key={t} className="font-body text-xs font-medium"
                style={{ color: 'var(--color-charcoal-900)', letterSpacing: '0.04em' }}>
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Main contacts section ─────────────────────────────────────── */}
      <section className="py-24 lg:py-32" style={{ background: 'var(--color-cream)' }}>
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

            {/* ── Left: Map + photos ──────────────────────────────────── */}
            <div className="space-y-4 reveal">
              {/* Map embed */}
              <div className="relative overflow-hidden" style={{ height: '340px' }}>
                <iframe
                  title="Карта — D2 Terminal"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=39.6196%2C47.1885%2C39.6546%2C47.2185&layer=mapnik&marker=47.2035%2C39.6346"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'grayscale(20%) contrast(95%)' }}
                  loading="lazy"
                  allowFullScreen
                />
                <div
                  className="absolute top-4 left-4 flex items-center gap-2 px-3 py-2 font-body text-xs font-medium"
                  style={{ background: 'var(--color-charcoal-800)', color: 'var(--color-cream)' }}
                >
                  <MapPinIcon light />
                  D2 Terminal
                </div>
              </div>

              {/* Address bar */}
              <div
                className="flex items-start gap-3 p-4"
                style={{ background: '#fff', border: '1px solid var(--color-cream-dark)' }}
              >
                <MapPinIcon />
                <div className="flex-1">
                  <p className="font-body text-sm font-medium text-charcoal-800">{siteConfig.address}</p>
                  <div className="flex flex-wrap gap-3 mt-2">
                    <a href="https://maps.google.com/?q=2-я+Краснодарская+135+Ростов-на-Дону"
                      target="_blank" rel="noopener noreferrer"
                      className="font-body text-xs transition-colors duration-300"
                      style={{ color: 'var(--color-champagne)' }}>
                      Google Maps →
                    </a>
                    <a href="https://yandex.ru/maps/?text=2-я+Краснодарская+135+Ростов-на-Дону"
                      target="_blank" rel="noopener noreferrer"
                      className="font-body text-xs transition-colors duration-300"
                      style={{ color: 'var(--color-champagne)' }}>
                      Яндекс Карты →
                    </a>
                  </div>
                </div>
              </div>

              {/* Interior photo */}
              <div className="relative overflow-hidden group" style={{ height: '200px' }}>
                <img
                  src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=75&auto=format&fit=crop"
                  alt="Интерьер салона D2 Terminal"
                  width={800} height={400}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(to top, rgba(10,8,6,0.6), transparent 60%)' }}
                />
                <div className="absolute bottom-4 left-4">
                  <p className="font-display text-lg" style={{ color: 'var(--color-cream)' }}>
                    Интерьер салона
                  </p>
                  <p className="font-body text-xs" style={{ color: 'rgba(250,248,245,0.6)' }}>
                    2-я Краснодарская ул., 135
                  </p>
                </div>
              </div>
            </div>

            {/* ── Right: Details ──────────────────────────────────────── */}
            <div className="space-y-5 reveal reveal-delay-2">

              {/* Authority card */}
              <div
                className="p-6 relative overflow-hidden"
                style={{ background: 'var(--color-charcoal-800)' }}
              >
                {/* Gold shimmer top */}
                <div className="absolute top-0 left-0 right-0 h-px gold-line opacity-60" />

                <div className="grid grid-cols-2 gap-4 mb-6">
                  {[
                    { value: `${yearsInBusiness}+`, label: 'лет работы' },
                    { value: '3 000+',              label: 'клиентов'   },
                    { value: '4.9 ★',               label: 'Google'     },
                    { value: '< 15 мин',            label: 'подтверждение' },
                  ].map(stat => (
                    <div key={stat.label} className="text-center p-3"
                      style={{ border: '1px solid rgba(201,169,110,0.15)', background: 'rgba(255,255,255,0.03)' }}>
                      <p className="font-display text-2xl" style={{ color: 'var(--color-champagne-light)' }}>
                        {stat.value}
                      </p>
                      <p className="font-body text-xs mt-1" style={{ color: 'rgba(250,248,245,0.45)' }}>
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>

                <p className="font-body text-xs leading-relaxed"
                  style={{ color: 'rgba(250,248,245,0.5)' }}>
                  Салон красоты D2 Terminal работает с 2018 года. За это время
                  мы обслужили более 3 000 клиентов и сохранили рейтинг 4.9 на Google.
                </p>
              </div>

              {/* Phone */}
              <ContactCard icon={<PhoneIcon />} label="Телефон">
                <a href={siteConfig.phoneHref}
                  className="font-display text-2xl text-charcoal-800 hover:text-champagne transition-colors duration-300 block mb-1">
                  {siteConfig.phone}
                </a>
                <p className="font-body text-xs text-ink-muted">
                  Ежедневно с 10:00 до 22:00
                </p>
              </ContactCard>

              {/* Hours */}
              <ContactCard icon={<ClockIcon />} label="Часы работы">
                <div className="space-y-2">
                  {[
                    { day: 'Понедельник – Пятница', hours: '10:00 – 22:00' },
                    { day: 'Суббота',               hours: '10:00 – 22:00' },
                    { day: 'Воскресенье',           hours: '10:00 – 22:00' },
                  ].map(r => (
                    <div key={r.day} className="flex items-center justify-between py-2"
                      style={{ borderBottom: '0.5px solid var(--color-cream-dark)' }}>
                      <span className="font-body text-sm text-ink-secondary">{r.day}</span>
                      <span className="font-body text-sm font-medium text-charcoal-800">{r.hours}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-2 mt-3">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="font-body text-xs font-medium text-green-700">Сейчас открыто</span>
                </div>
              </ContactCard>

              {/* Social */}
              <ContactCard icon={<ShareIcon />} label="Мы в соцсетях">
                <div className="flex flex-col gap-3">
                  {[
                    { href: siteConfig.instagram, icon: <InstagramIcon />, name: 'Instagram', sub: '@d2terminal' },
                    { href: siteConfig.telegram,  icon: <TelegramIcon />, name: 'Telegram',  sub: 'Ответим за 5 минут' },
                    { href: 'https://wa.me/79281731173', icon: <WhatsAppIcon />, name: 'WhatsApp', sub: 'Быстрая связь' },
                  ].map(s => (
                    <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-3 group">
                      <div
                        className="w-10 h-10 flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                        style={{ background: 'var(--color-charcoal-800)', color: 'var(--color-cream)' }}
                      >
                        {s.icon}
                      </div>
                      <div>
                        <p className="font-body text-sm font-medium text-charcoal-800 group-hover:text-champagne transition-colors duration-300">
                          {s.name}
                        </p>
                        <p className="font-body text-xs text-ink-muted">{s.sub}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </ContactCard>

              {/* Book CTA */}
              <div className="p-6" style={{ background: 'var(--color-charcoal-800)' }}>
                <p className="font-display text-xl mb-2" style={{ color: 'var(--color-cream)' }}>
                  Готовы записаться?
                </p>
                <p className="font-body text-sm mb-5"
                  style={{ color: 'rgba(250,248,245,0.55)' }}>
                  Онлайн за 1 минуту — без звонков и ожидания.
                </p>
                <Link href="/booking" className="btn-accent"
                  style={{ boxShadow: '0 4px 20px rgba(201,169,110,0.3)' }}>
                  Записаться онлайн
                </Link>
              </div>
            </div>
          </div>

          {/* ── How to get there ──────────────────────────────────────── */}
          <div className="mt-16 pt-12 reveal"
            style={{ borderTop: '1px solid var(--color-cream-dark)' }}>
            <span className="section-label block mb-8">Как добраться</span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {[
                { icon: '🚗', title: 'На автомобиле',
                  text: 'Есть парковка рядом с салоном. Въезд со стороны 2-й Краснодарской улицы.' },
                { icon: '🚌', title: 'На автобусе',
                  text: 'Остановка «2-я Краснодарская» — маршруты №№ 7, 15, 24. Пройти 3 минуты.' },
                { icon: '🚕', title: 'На такси',
                  text: 'Заказывайте через Яндекс Go или Uber. Назовите: 2-я Краснодарская, 135.' },
              ].map(item => (
                <div key={item.title} className="luxury-card">
                  <span className="text-2xl mb-4 block">{item.icon}</span>
                  <h3 className="font-display text-lg text-charcoal-800 mb-2">{item.title}</h3>
                  <p className="font-body text-sm text-ink-secondary leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

// ─── Sub-components ───────────────────────────────────────────────────────

function ContactCard({ icon, label, children }: {
  icon: React.ReactNode; label: string; children: React.ReactNode
}) {
  return (
    <div className="bg-white p-6" style={{ border: '1px solid var(--color-cream-dark)' }}>
      <div className="flex items-center gap-3 mb-4">
        <div style={{ color: 'var(--color-champagne)' }}>{icon}</div>
        <span className="font-body text-xs font-medium tracking-widest uppercase text-ink-muted">
          {label}
        </span>
      </div>
      {children}
    </div>
  )
}

// ─── Icons ────────────────────────────────────────────────────────────────

function MapPinIcon({ light = false }: { light?: boolean }) {
  return <svg width="16" height="16" fill="none"
    stroke={light ? '#faf8f5' : 'currentColor'}
    strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"
    className={light ? '' : 'text-champagne shrink-0 mt-0.5'}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/>
  </svg>
}
function PhoneIcon() {
  return <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.7h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 10.1a16 16 0 0 0 6 6l.72-.72a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21.28 17z"/></svg>
}
function ClockIcon() {
  return <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
}
function ShareIcon() {
  return <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
}
function InstagramIcon() {
  return <svg width="18" height="18" fill="none" stroke="#faf8f5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
}
function TelegramIcon() {
  return <svg width="18" height="18" fill="none" stroke="#faf8f5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M21.198 2.433a2.242 2.242 0 0 0-1.022.215l-17.5 7.5a2.25 2.25 0 0 0 .126 4.17l3.918 1.32 2.088 6.433a.98.98 0 0 0 1.71.29l2.822-3.045 4.514 3.34a2.25 2.25 0 0 0 3.522-1.493l2.5-17.5a2.25 2.25 0 0 0-2.678-2.23z"/></svg>
}
function WhatsAppIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="#faf8f5"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
}