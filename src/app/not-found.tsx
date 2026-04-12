import Link from 'next/link'
import SiteLayout from '@/components/layout/SiteLayout'

// ─── 404 Not Found ────────────────────────────────────────────────────────

export default function NotFound() {
  return (
    <SiteLayout>
      <section className="bg-cream min-h-screen flex items-center justify-center pt-24">
        <div className="section-container text-center max-w-xl mx-auto">

          {/* Large 404 */}
          <div
            className="font-display text-[clamp(6rem,20vw,12rem)] leading-none
                       text-charcoal-800/10 select-none mb-8"
            aria-hidden="true"
          >
            404
          </div>

          <span className="section-label block mb-4">Страница не найдена</span>
          <div className="divider mx-auto mb-6" />

          <h1 className="text-h2 font-display text-charcoal-800 mb-4">
            Упс, такой страницы нет
          </h1>
          <p className="font-body text-lead text-ink-secondary mb-10 max-w-md mx-auto">
            Возможно, страница была перемещена или вы перешли по неверной ссылке.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/" className="btn-primary">
              На главную
            </Link>
            <Link href="/booking" className="btn-outline">
              Записаться онлайн
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  )
}