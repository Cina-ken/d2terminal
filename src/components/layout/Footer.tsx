import Link from 'next/link'
import { siteConfig, navLinks } from '@/lib/config'

// ─── Icons ────────────────────────────────────────────────────────────────

function InstagramIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  )
}

function TelegramIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21.198 2.433a2.242 2.242 0 0 0-1.022.215l-17.5 7.5a2.25 2.25 0 0 0 .126 4.17l3.918 1.32 2.088 6.433a.98.98 0 0 0 1.71.29l2.822-3.045 4.514 3.34a2.25 2.25 0 0 0 3.522-1.493l2.5-17.5a2.25 2.25 0 0 0-2.678-2.23z"/>
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.7h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 10.1a16 16 0 0 0 6 6l.72-.72a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21.28 17l.5-.08z"/>
    </svg>
  )
}

function MapPinIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <polyline points="12 6 12 12 16 14"/>
    </svg>
  )
}

// ─── Footer ───────────────────────────────────────────────────────────────

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-charcoal-800 text-cream">

      {/* ── Main Footer Grid ─────────────────────────────────────────────── */}
      <div className="section-container py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

          {/* ── Brand Column ─────────────────────────────────────────────── */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h2 className="font-display text-3xl text-cream tracking-tight">
                D2 Terminal
              </h2>
              <p className="font-body text-[10px] tracking-[0.2em] uppercase text-cream/40 mt-1">
                Салон красоты
              </p>
            </div>
            <p className="font-body text-sm text-cream/60 leading-relaxed max-w-xs mb-8">
              Премиальный салон красоты в Ростове-на-Дону. Стрижки, маникюр, педикюр, массаж и эпиляция от опытных мастеров.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-4">
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-cream/50 hover:text-champagne transition-colors duration-300 text-sm font-body"
                aria-label="Instagram D2 Terminal"
              >
                <InstagramIcon />
                <span>Instagram</span>
              </a>
              <span className="text-cream/20">·</span>
              <a
                href={siteConfig.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-cream/50 hover:text-champagne transition-colors duration-300 text-sm font-body"
                aria-label="Telegram D2 Terminal"
              >
                <TelegramIcon />
                <span>Telegram</span>
              </a>
            </div>
          </div>

          {/* ── Navigation Column ────────────────────────────────────────── */}
          <div>
            <h3 className="font-body text-[10px] font-medium tracking-[0.2em] uppercase text-champagne mb-6">
              Навигация
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-cream/60 hover:text-cream transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Contact Column ───────────────────────────────────────────── */}
          <div>
            <h3 className="font-body text-[10px] font-medium tracking-[0.2em] uppercase text-champagne mb-6">
              Контакты
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={siteConfig.phoneHref}
                  className="flex items-start gap-2.5 text-cream/60 hover:text-cream transition-colors duration-300 group"
                >
                  <span className="mt-0.5 text-champagne group-hover:text-champagne">
                    <PhoneIcon />
                  </span>
                  <span className="font-body text-sm">{siteConfig.phone}</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2.5 text-cream/60">
                  <span className="mt-0.5 text-champagne shrink-0">
                    <MapPinIcon />
                  </span>
                  <span className="font-body text-sm leading-relaxed">
                    {siteConfig.address}
                  </span>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-2.5 text-cream/60">
                  <span className="text-champagne">
                    <ClockIcon />
                  </span>
                  <span className="font-body text-sm">
                    {siteConfig.workingDays}, {siteConfig.workingHours}
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ── Divider ──────────────────────────────────────────────────────── */}
      <div className="border-t border-cream/10" />

      {/* ── Bottom Bar ───────────────────────────────────────────────────── */}
      <div className="section-container py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-xs text-cream/30">
            © {year} D2 Terminal. Все права защищены.
          </p>
          <p className="font-body text-xs text-cream/30">
            Ростов-на-Дону, Россия
          </p>
        </div>
      </div>
    </footer>
  )
}