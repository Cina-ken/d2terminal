'use client'

import { useState } from 'react'
import Link from 'next/link'

// ─── FAQ Data ─────────────────────────────────────────────────────────────

const faqs = [
  {
    q: 'Как записаться в салон?',
    a: 'Записаться можно онлайн прямо на этом сайте — нажмите кнопку «Записаться онлайн» и заполните форму за 1 минуту. Также можно позвонить нам по телефону +7 928 173-11-73 или написать в Telegram.',
  },
  {
    q: 'За сколько дней вперёд можно записаться?',
    a: 'Запись доступна на 60 дней вперёд. Вы можете выбрать любую дату в этом промежутке. Последний доступный слот — 21:30.',
  },
  {
    q: 'Можно ли отменить или перенести запись?',
    a: 'Да, отмена и перенос записи бесплатны. Просто напишите нам в Telegram или позвоните за 2 часа до визита. Мы подберём удобное новое время.',
  },
  {
    q: 'Как быстро подтверждается запись?',
    a: 'Мы свяжемся с вами в течение 15 минут после отправки формы для подтверждения даты и времени. Если запись сделана поздно вечером — подтвердим утром следующего дня.',
  },
  {
    q: 'Какую косметику вы используете?',
    a: 'Мы работаем только с сертифицированными профессиональными материалами премиум-класса. Для волос используем продукты Davines, L\'Oréal Professionnel. Для ногтей — гели и покрытия ведущих брендов.',
  },
  {
    q: 'Есть ли скидки для постоянных клиентов?',
    a: 'Да! Новые клиенты получают скидку 10% на первый визит. Постоянным клиентам предлагаем карту лояльности с накопительными бонусами. Подробности уточняйте у администратора.',
  },
  {
    q: 'Как добраться до салона?',
    a: 'Мы находимся по адресу: 2-я Краснодарская ул., 135, Ростов-на-Дону. Рядом есть парковка. Ближайшая остановка — «2-я Краснодарская», маршруты №№ 7, 15, 24.',
  },
  {
    q: 'В какое время работает салон?',
    a: 'Салон работает ежедневно с 10:00 до 22:00 без выходных и праздников. Онлайн-запись доступна круглосуточно.',
  },
]

// ─── FAQ Section ──────────────────────────────────────────────────────────

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  function toggle(i: number) {
    setOpenIndex(prev => prev === i ? null : i)
  }

  return (
    <section
      className="py-24 lg:py-32 relative overflow-hidden"
      style={{ background: 'var(--color-cream-warm)' }}
      id="faq"
    >
      {/* Subtle diagonal lines texture */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            var(--color-charcoal-800) 0px,
            var(--color-charcoal-800) 1px,
            transparent 1px,
            transparent 40px
          )`,
        }}
      />

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">

          {/* ── Left: header + CTA ──────────────────────────────────── */}
          <div className="reveal-left">
            <span className="section-label block mb-4">Вопросы и ответы</span>
            <div className="divider mb-6" />
            <h2 className="font-display text-h2 text-charcoal-800 mb-4 leading-tight">
              Часто задаваемые
              <br />
              <em
                className="not-italic"
                style={{
                  background: 'linear-gradient(135deg, var(--color-champagne-dark), var(--color-champagne))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                вопросы
              </em>
            </h2>
            <p className="font-body text-sm text-ink-secondary leading-relaxed mb-8">
              Не нашли ответа? Напишите нам — ответим в течение нескольких минут.
            </p>

            <div className="flex flex-col gap-3">
              <Link href="/booking" className="btn-primary">
                Записаться онлайн
              </Link>
              <a
                href="https://t.me/d2terminal"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline flex items-center justify-center gap-2"
              >
                <TelegramIcon />
                Задать вопрос
              </a>
            </div>

            {/* Quick contact */}
            <div
              className="mt-8 pt-8"
              style={{ borderTop: '1px solid var(--color-cream-dark)' }}
            >
              <p className="font-body text-xs text-ink-muted uppercase tracking-widest mb-3">
                Или позвоните нам
              </p>
              <a
                href="tel:+79281731173"
                className="font-display text-2xl text-charcoal-800 hover:text-champagne transition-colors duration-300"
              >
                +7 928 173-11-73
              </a>
              <p className="font-body text-xs text-ink-muted mt-1">
                Ежедневно 10:00 – 22:00
              </p>
            </div>
          </div>

          {/* ── Right: accordion ─────────────────────────────────────── */}
          <div className="lg:col-span-2 space-y-2 reveal">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="overflow-hidden transition-all duration-300"
                style={{
                  background: '#fff',
                  border: `1px solid ${openIndex === i
                    ? 'var(--color-champagne)'
                    : 'var(--color-cream-dark)'}`,
                  boxShadow: openIndex === i
                    ? '0 4px 20px rgba(201,169,110,0.1)'
                    : 'none',
                }}
              >
                {/* Question row */}
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-start justify-between gap-4 px-6 py-5 text-left transition-colors duration-200"
                  style={{
                    background: openIndex === i
                      ? 'rgba(201,169,110,0.04)'
                      : 'transparent',
                  }}
                  aria-expanded={openIndex === i}
                >
                  <span className="font-display text-lg text-charcoal-800 leading-snug">
                    {faq.q}
                  </span>
                  <span
                    className="shrink-0 w-6 h-6 flex items-center justify-center transition-transform duration-300 mt-0.5"
                    style={{
                      transform: openIndex === i ? 'rotate(45deg)' : 'rotate(0deg)',
                      color: openIndex === i
                        ? 'var(--color-champagne)'
                        : 'var(--color-ink-muted)',
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </button>

                {/* Answer — animated expand */}
                <div
                  style={{
                    maxHeight: openIndex === i ? '300px' : '0',
                    overflow: 'hidden',
                    transition: 'max-height 0.4s ease',
                  }}
                >
                  <p
                    className="font-body text-sm text-ink-secondary leading-relaxed px-6 pb-5"
                    style={{ paddingTop: '0' }}
                  >
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function TelegramIcon() {
  return (
    <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d="M21.198 2.433a2.242 2.242 0 0 0-1.022.215l-17.5 7.5a2.25 2.25 0 0 0 .126 4.17l3.918 1.32 2.088 6.433a.98.98 0 0 0 1.71.29l2.822-3.045 4.514 3.34a2.25 2.25 0 0 0 3.522-1.493l2.5-17.5a2.25 2.25 0 0 0-2.678-2.23z" />
    </svg>
  )
}