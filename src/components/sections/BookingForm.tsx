'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { services, timeSlots, siteConfig } from '@/lib/config'
import { getMinBookingDate, getMaxBookingDate } from '@/lib/utils'
import type { BookingFormData, BookingResponse } from '@/types'

// ─── Types ────────────────────────────────────────────────────────────────

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

interface FormErrors {
  name?:    string
  phone?:   string
  service?: string
  date?:    string
  time?:    string
}

// ─── BookingForm ──────────────────────────────────────────────────────────

export default function BookingForm() {
  const searchParams = useSearchParams()

  const [form, setForm] = useState<BookingFormData>({
    name:    '',
    phone:   '',
    service: searchParams.get('service') ?? '',
    date:    '',
    time:    '',
    comment: '',
  })

  const [errors,   setErrors]   = useState<FormErrors>({})
  const [status,   setStatus]   = useState<FormStatus>('idle')
  const [bookingId, setBookingId] = useState<string>('')

  // Pre-select service from URL query param (?service=massage)
  useEffect(() => {
    const serviceParam = searchParams.get('service')
    if (serviceParam) {
      setForm((prev) => ({ ...prev, service: serviceParam }))
    }
  }, [searchParams])

  // ── Handlers ────────────────────────────────────────────────────────────

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    // Clear field error on change
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  function validateClient(): FormErrors {
    const errs: FormErrors = {}
    if (!form.name.trim())    errs.name    = 'Пожалуйста, введите ваше имя'
    if (!form.phone.trim())   errs.phone   = 'Пожалуйста, введите номер телефона'
    if (!form.service.trim()) errs.service = 'Выберите услугу'
    if (!form.date.trim())    errs.date    = 'Выберите дату'
    if (!form.time.trim())    errs.time    = 'Выберите время'
    return errs
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    // Client-side validation
    const errs = validateClient()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }

    setStatus('submitting')

    try {
      const res = await fetch('/api/bookings', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify(form),
      })

      const data: BookingResponse = await res.json()

      if (data.success) {
        setStatus('success')
        setBookingId(data.bookingId ?? '')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  // ── Success State ────────────────────────────────────────────────────────

  if (status === 'success') {
    return (
      <section className="bg-cream-warm py-24 lg:py-32">
        <div className="section-container">
          <div className="max-w-xl mx-auto text-center">
            {/* Success icon */}
            <div className="w-20 h-20 rounded-full bg-champagne/15 flex items-center justify-center mx-auto mb-8">
              <svg className="w-9 h-9 text-champagne" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>

            <span className="section-label block mb-4">Готово!</span>
            <div className="divider mx-auto mb-6" />

            <h2 className="text-h2 font-display text-charcoal-800 mb-4">
              Ваша запись успешно отправлена!
            </h2>

            <p className="font-body text-lead text-ink-secondary mb-4">
              Мы свяжемся с вами в течение 15 минут для подтверждения.
            </p>

            {bookingId && (
              <p className="font-body text-sm text-ink-muted mb-8">
                Номер записи:{' '}
                <span className="font-medium text-charcoal-800">{bookingId}</span>
              </p>
            )}

            {/* Booking summary */}
            <div className="bg-white border border-cream-dark p-6 text-left mb-8 space-y-3">
              <SummaryRow label="Имя"     value={form.name} />
              <SummaryRow label="Телефон" value={form.phone} />
              <SummaryRow
                label="Услуга"
                value={services.find(s => s.id === form.service)?.title ?? form.service}
              />
              <SummaryRow label="Дата"   value={formatDateDisplay(form.date)} />
              <SummaryRow label="Время"  value={form.time} />
              {form.comment && (
                <SummaryRow label="Комментарий" value={form.comment} />
              )}
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() => {
                  setStatus('idle')
                  setForm({ name: '', phone: '', service: '', date: '', time: '', comment: '' })
                  setBookingId('')
                }}
                className="btn-outline"
              >
                Записаться ещё раз
              </button>
              <a href={siteConfig.telegram} target="_blank" rel="noopener noreferrer" className="btn-primary">
                Написать в Telegram
              </a>
            </div>
          </div>
        </div>
      </section>
    )
  }

  // ── Form ─────────────────────────────────────────────────────────────────

  return (
    <section className="bg-cream py-24 lg:py-32">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">

          {/* ── Form column ───────────────────────────────────────────────── */}
          <div className="lg:col-span-2">
            <h2 className="text-h2 font-display text-charcoal-800 mb-10">
              Заполните форму записи
            </h2>

            <form onSubmit={handleSubmit} noValidate className="space-y-6">

              {/* Row 1: Name + Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Field label="Ваше имя *" error={errors.name}>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Например, Анна"
                    className="input-base"
                    autoComplete="given-name"
                  />
                </Field>

                <Field label="Телефон *" error={errors.phone}>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+7 (___) ___-__-__"
                    className="input-base"
                    autoComplete="tel"
                  />
                </Field>
              </div>

              {/* Row 2: Service */}
              <Field label="Услуга *" error={errors.service}>
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className="select-base"
                >
                  <option value="">— Выберите услугу —</option>
                  {services.map((s) => (
                    <optgroup key={s.id} label={s.title}>
                      {s.items?.map((item) => (
                        <option key={item.name} value={item.name}>
                          {item.name} — {item.price.toLocaleString('ru-RU')} ₽
                        </option>
                      ))}
                    </optgroup>
                  ))}
                </select>
              </Field>

              {/* Row 3: Date + Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Field label="Дата *" error={errors.date}>
                  <input
                    type="date"
                    name="date"
                    value={form.date}
                    onChange={handleChange}
                    min={getMinBookingDate()}
                    max={getMaxBookingDate()}
                    className="input-base"
                  />
                </Field>

                <Field label="Время *" error={errors.time}>
                  <select
                    name="time"
                    value={form.time}
                    onChange={handleChange}
                    className="select-base"
                    disabled={!form.date}
                  >
                    <option value="">
                      {form.date ? '— Выберите время —' : 'Сначала выберите дату'}
                    </option>
                    {form.date &&
                      timeSlots.map((slot) => (
                        <option key={slot} value={slot}>
                          {slot}
                        </option>
                      ))}
                  </select>
                </Field>
              </div>

              {/* Row 4: Comment */}
              <Field label="Комментарий (необязательно)">
                <textarea
                  name="comment"
                  value={form.comment}
                  onChange={handleChange}
                  placeholder="Пожелания к мастеру, особенности, вопросы..."
                  rows={3}
                  className="input-base resize-none"
                />
              </Field>

              {/* Error banner */}
              {status === 'error' && (
                <div className="flex items-start gap-3 p-4 bg-red-50 border border-red-200">
                  <svg className="w-5 h-5 text-red-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                  </svg>
                  <p className="font-body text-sm text-red-700">
                    Произошла ошибка при отправке. Пожалуйста, попробуйте ещё раз или свяжитесь с нами по телефону.
                  </p>
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="btn-primary w-full py-5 text-sm disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? (
                  <span className="flex items-center gap-3">
                    <Spinner />
                    Отправляем запись...
                  </span>
                ) : (
                  'Записаться онлайн'
                )}
              </button>

              <p className="font-body text-xs text-ink-muted text-center">
                Нажимая кнопку, вы соглашаетесь с обработкой персональных данных.
                Мы не передаём ваши данные третьим лицам.
              </p>
            </form>
          </div>

          {/* ── Info sidebar ──────────────────────────────────────────────── */}
          <div className="lg:col-span-1 space-y-6">

            {/* Working hours card */}
            <div className="bg-charcoal-800 p-8">
              <h3 className="font-display text-xl text-[var(--color-cream)] mb-6">
                Время работы
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center pb-3 border-b border-[color-mix(in_srgb,var(--color-cream)_10%,transparent)]">
                  <span className="font-body text-sm text-[color-mix(in_srgb,var(--color-cream)_50%,transparent)]">
                    Ежедневно
                  </span>
                  <span className="font-body text-sm font-medium text-[var(--color-cream)]">
                    {siteConfig.workingHours}
                  </span>
                </div>
                <p className="font-body text-xs text-[color-mix(in_srgb,var(--color-cream)_40%,transparent)] leading-relaxed">
                  Запись доступна за 60 дней вперёд. Последний слот — в 21:30.
                </p>
              </div>

              {/* Contact options */}
              <div className="mt-8 space-y-3">
                <p className="font-body text-xs text-[color-mix(in_srgb,var(--color-cream)_40%,transparent)] uppercase tracking-widest mb-4">
                  Или свяжитесь с нами
                </p>
                <a
                  href={siteConfig.phoneHref}
                  className="flex items-center gap-3 text-[color-mix(in_srgb,var(--color-cream)_60%,transparent)] hover:text-[var(--color-champagne)] transition-colors duration-300"
                >
                  <PhoneIcon />
                  <span className="font-body text-sm">{siteConfig.phone}</span>
                </a>
                <a
                  href={siteConfig.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[color-mix(in_srgb,var(--color-cream)_60%,transparent)] hover:text-[var(--color-champagne)] transition-colors duration-300"
                >
                  <TelegramIcon />
                  <span className="font-body text-sm">Telegram</span>
                </a>
              </div>
            </div>

            {/* Address card */}
            <div className="bg-white border border-cream-dark p-6">
              <h3 className="font-display text-lg text-charcoal-800 mb-4">
                Адрес
              </h3>
              <div className="flex items-start gap-3 mb-4">
                <MapPinIcon />
                <p className="font-body text-sm text-ink-secondary leading-relaxed">
                  {siteConfig.address}
                </p>
              </div>
              <a
                href="https://maps.google.com/?q=2-я+Краснодарская+135+Ростов-на-Дону"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-xs text-champagne hover:text-champagne-dark transition-colors duration-300 tracking-wide"
              >
                Открыть в Google Maps →
              </a>
            </div>

            {/* How it works */}
            <div className="bg-cream-warm border border-cream-dark p-6">
              <h3 className="font-display text-lg text-charcoal-800 mb-5">
                Как это работает
              </h3>
              <ol className="space-y-4">
                {[
                  { n: '1', text: 'Заполните форму и выберите удобное время' },
                  { n: '2', text: 'Мы подтвердим запись в течение 15 минут'  },
                  { n: '3', text: 'Приходите в салон — вас уже ждут!'        },
                ].map((step) => (
                  <li key={step.n} className="flex items-start gap-4">
                    <span className="w-6 h-6 rounded-full bg-charcoal-800 text-cream font-body text-xs font-medium flex items-center justify-center shrink-0 mt-0.5">
                      {step.n}
                    </span>
                    <p className="font-body text-sm text-ink-secondary leading-relaxed">
                      {step.text}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Sub-components ───────────────────────────────────────────────────────

function Field({
  label,
  error,
  children,
}: {
  label:     string
  error?:    string
  children:  React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="font-body text-xs font-medium text-ink-secondary tracking-wide uppercase">
        {label}
      </label>
      {children}
      {error && (
        <p className="font-body text-xs text-red-600 mt-1">{error}</p>
      )}
    </div>
  )
}

function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-4 pb-3 border-b border-cream-dark last:border-0 last:pb-0">
      <span className="font-body text-xs text-ink-muted uppercase tracking-wide shrink-0">
        {label}
      </span>
      <span className="font-body text-sm text-charcoal-800 text-right">{value}</span>
    </div>
  )
}

function Spinner() {
  return (
    <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
    </svg>
  )
}

function formatDateDisplay(dateStr: string): string {
  if (!dateStr) return ''
  const date = new Date(dateStr + 'T00:00:00')
  return date.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' })
}

// ─── Icons ────────────────────────────────────────────────────────────────

function PhoneIcon() {
  return (
    <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.7h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 10.1a16 16 0 0 0 6 6l.72-.72a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21.28 17z"/>
    </svg>
  )
}

function TelegramIcon() {
  return (
    <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d="M21.198 2.433a2.242 2.242 0 0 0-1.022.215l-17.5 7.5a2.25 2.25 0 0 0 .126 4.17l3.918 1.32 2.088 6.433a.98.98 0 0 0 1.71.29l2.822-3.045 4.514 3.34a2.25 2.25 0 0 0 3.522-1.493l2.5-17.5a2.25 2.25 0 0 0-2.678-2.23z"/>
    </svg>
  )
}

function MapPinIcon() {
  return (
    <svg width="15" height="15" className="text-champagne shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  )
}