'use client'

import { useState, useEffect, useRef } from 'react'
import { useSearchParams } from 'next/navigation'
import { services, timeSlots, siteConfig, masters } from '@/lib/config'
import { getMinBookingDate, getMaxBookingDate } from '@/lib/utils'
import type { BookingFormData, BookingResponse } from '@/types'

// ─── Types ────────────────────────────────────────────────────────────────

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'
type Step = 1 | 2 | 3

interface FormErrors {
  name?:    string
  phone?:   string
  service?: string
  date?:    string
  time?:    string
}

// ─── Step config ──────────────────────────────────────────────────────────

const STEPS = [
  { n: 1, label: 'Услуга и мастер' },
  { n: 2, label: 'Дата и время'    },
  { n: 3, label: 'Ваши данные'     },
]

// ─── BookingForm ──────────────────────────────────────────────────────────

export default function BookingForm() {
  const searchParams = useSearchParams()
  const topRef = useRef<HTMLDivElement>(null)

  const [step,     setStep]     = useState<Step>(1)
  const [form,     setForm]     = useState<BookingFormData>({
    name: '', phone: '', service: searchParams.get('service') ?? '',
    date: '', time: '', comment: '',
  })
  const [errors,    setErrors]    = useState<FormErrors>({})
  const [status,    setStatus]    = useState<FormStatus>('idle')
  const [bookingId, setBookingId] = useState<string>('')
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    const s = searchParams.get('service')
    if (s) setForm(p => ({ ...p, service: s }))
  }, [searchParams])

  // Scroll to top of form when step changes
  useEffect(() => {
    topRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [step])

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target
    setForm(p => ({ ...p, [name]: value }))
    if (errors[name as keyof FormErrors])
      setErrors(p => ({ ...p, [name]: undefined }))
  }

  function validateStep(s: Step): FormErrors {
    const errs: FormErrors = {}
    if (s === 1 && !form.service.trim()) errs.service = 'Выберите услугу'
    if (s === 2) {
      if (!form.date.trim()) errs.date = 'Выберите дату'
      if (!form.time.trim()) errs.time = 'Выберите время'
    }
    if (s === 3) {
      if (!form.name.trim())  errs.name  = 'Введите ваше имя'
      if (!form.phone.trim()) errs.phone = 'Введите номер телефона'
    }
    return errs
  }

  function handleNext() {
    const errs = validateStep(step)
    if (Object.keys(errs).length > 0) { setErrors(errs); return }
    setErrors({})
    setStep(s => Math.min(s + 1, 3) as Step)
  }

  function handleBack() {
    setErrors({})
    setStep(s => Math.max(s - 1, 1) as Step)
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const errs = validateStep(3)
    if (Object.keys(errs).length > 0) { setErrors(errs); return }
    setStatus('submitting')
    try {
      const res  = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data: BookingResponse = await res.json()
      if (data.success) {
        setStatus('success')
        setBookingId(data.bookingId ?? '')
        setShowModal(true)
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  // ── Success Modal ─────────────────────────────────────────────────────────

  if (showModal) {
    return (
      <section className="bg-cream py-24 lg:py-32 relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true"
          style={{
            background: 'radial-gradient(ellipse at 50% 0%, rgba(201,169,110,0.08) 0%, transparent 60%)',
          }}
        />

        <div className="section-container relative z-10">
          <div className="max-w-2xl mx-auto">

            {/* Success card */}
            <div
              className="text-center p-12 lg:p-16 animate-fade-up"
              style={{
                background: '#fff',
                border: '1px solid var(--color-cream-dark)',
                boxShadow: '0 24px 64px rgba(0,0,0,0.08)',
                animationFillMode: 'both',
              }}
            >
              {/* Animated checkmark circle */}
              <div
                className="relative w-24 h-24 mx-auto mb-8"
              >
                <div
                  className="absolute inset-0 rounded-full animate-ping"
                  style={{ background: 'rgba(201,169,110,0.15)', animationDuration: '1.5s' }}
                />
                <div
                  className="relative w-24 h-24 rounded-full flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, var(--color-champagne-light), var(--color-champagne))' }}
                >
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
              </div>

              {/* Heading */}
              <span className="section-label block mb-4">Готово!</span>
              <div className="divider mx-auto mb-6" />
              <h2 className="font-display text-h2 text-charcoal-800 mb-3">
                Запись успешно отправлена!
              </h2>
              <p className="font-body text-lead text-ink-secondary mb-2">
                Мы свяжемся с вами в течение <strong>15 минут</strong> для подтверждения.
              </p>
              {bookingId && (
                <p className="font-body text-sm text-ink-muted mb-8">
                  Номер вашей записи:{' '}
                  <span
                    className="font-medium font-body px-3 py-1 ml-1"
                    style={{ background: 'var(--color-cream-warm)', color: 'var(--color-charcoal-800)' }}
                  >
                    {bookingId}
                  </span>
                </p>
              )}

              {/* Summary card */}
              <div
                className="text-left mb-8 divide-y"
                style={{
                  border: '1px solid var(--color-cream-dark)',
                }}
              >
                {/* Header */}
                <div
                  className="px-6 py-3 flex items-center gap-2"
                  style={{ background: 'var(--color-charcoal-800)' }}
                >
                  <span className="font-body text-xs font-medium tracking-widest uppercase text-champagne">
                    Детали записи
                  </span>
                </div>
                {[
                  { label: 'Имя',      value: form.name                                                            },
                  { label: 'Телефон',  value: form.phone                                                           },
                  { label: 'Услуга',   value: form.service                                                         },
                  { label: 'Дата',     value: formatDateDisplay(form.date)                                         },
                  { label: 'Время',    value: form.time                                                            },
                  ...(form.comment ? [{ label: 'Комментарий', value: form.comment }] : []),
                ].map(row => (
                  <div key={row.label} className="flex items-start justify-between px-6 py-3 gap-4"
                    style={{ background: '#fff' }}
                  >
                    <span className="font-body text-xs uppercase tracking-widest text-ink-muted shrink-0">
                      {row.label}
                    </span>
                    <span className="font-body text-sm text-charcoal-800 text-right">{row.value}</span>
                  </div>
                ))}
              </div>

              {/* What happens next */}
              <div
                className="mb-8 p-5 text-left"
                style={{ background: 'var(--color-cream-warm)', border: '1px solid var(--color-cream-dark)' }}
              >
                <p className="font-body text-xs font-medium tracking-widest uppercase text-ink-muted mb-3">
                  Что будет дальше
                </p>
                <div className="space-y-2">
                  {[
                    '📞 Мы позвоним вам в течение 15 минут',
                    '✅ Подтвердим дату и время записи',
                    '📍 Напомним адрес и как добраться',
                  ].map(step => (
                    <p key={step} className="font-body text-sm text-ink-secondary">{step}</p>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={() => {
                    setStatus('idle')
                    setForm({ name: '', phone: '', service: '', date: '', time: '', comment: '' })
                    setBookingId('')
                    setShowModal(false)
                    setStep(1)
                  }}
                  className="btn-outline"
                >
                  Записаться ещё раз
                </button>
                <a
                  href={siteConfig.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Написать в Telegram
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  // ── Multi-step Form ───────────────────────────────────────────────────────

  return (
    <section className="bg-cream py-24 lg:py-32" ref={topRef}>
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">

          {/* ── Left: Form ─────────────────────────────────────────────── */}
          <div className="lg:col-span-2">

            {/* Progress steps */}
            <div className="flex items-center gap-0 mb-12">
              {STEPS.map((s, i) => (
                <div key={s.n} className="flex items-center flex-1 last:flex-none">
                  {/* Step circle */}
                  <div className="flex flex-col items-center">
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center font-body text-sm font-medium transition-all duration-400"
                      style={{
                        background: step >= s.n
                          ? 'var(--color-charcoal-800)'
                          : 'var(--color-cream-dark)',
                        color: step >= s.n
                          ? 'var(--color-cream)'
                          : 'var(--color-ink-muted)',
                      }}
                    >
                      {step > s.n
                        ? <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"/></svg>
                        : s.n
                      }
                    </div>
                    <span
                      className="font-body text-[10px] tracking-wide mt-1.5 text-center whitespace-nowrap"
                      style={{ color: step >= s.n ? 'var(--color-charcoal-800)' : 'var(--color-ink-muted)' }}
                    >
                      {s.label}
                    </span>
                  </div>
                  {/* Connector line */}
                  {i < STEPS.length - 1 && (
                    <div
                      className="h-px flex-1 mx-3 mb-5 transition-all duration-400"
                      style={{ background: step > s.n ? 'var(--color-champagne)' : 'var(--color-cream-dark)' }}
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Step heading */}
            <h2 className="font-display text-h2 text-charcoal-800 mb-2">
              {step === 1 && 'Выберите услугу'}
              {step === 2 && 'Выберите дату и время'}
              {step === 3 && 'Ваши контактные данные'}
            </h2>
            <p className="font-body text-sm text-ink-muted mb-8">
              Шаг {step} из {STEPS.length}
            </p>

            <form onSubmit={handleSubmit} noValidate translate="no">

              {/* ── STEP 1: Service + Master ─────────────────────────── */}
              {step === 1 && (
                <div className="space-y-6 animate-fade-in">
                  <Field label="Услуга *" error={errors.service}>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="select-base"
                    >
                      <option value="">— Выберите услугу —</option>
                      {services.map(s => (
                        <optgroup key={s.id} label={s.title}>
                          {s.items?.map(item => (
                            <option key={item.name} value={item.name}>
                              {item.name} — {item.price.toLocaleString('ru-RU')} ₽
                            </option>
                          ))}
                        </optgroup>
                      ))}
                    </select>
                  </Field>

                  {/* Master selection */}
                  <div>
                    <label className="font-body text-xs font-medium tracking-widest uppercase text-ink-secondary block mb-3">
                      Предпочитаемый мастер (необязательно)
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {[{ id: '', name: 'Любой', role: 'Свободный мастер', image: '' }, ...masters].map(m => (
                        <button
                          key={m.id}
                          type="button"
                          onClick={() => setForm(p => ({ ...p, comment: m.id ? `Предпочитаемый мастер: ${m.name}` : '' }))}
                          className="flex flex-col items-center gap-2 p-3 transition-all duration-300 text-center"
                          style={{
                            border: `1px solid ${(form.comment ?? '').includes(m.name) || (!m.id && !(form.comment ?? '').includes('мастер:'))
                              ? 'var(--color-champagne)'
                              : 'var(--color-cream-dark)'}`,
                            background: (form.comment ?? '').includes(m.name) || (!m.id && !(form.comment ?? '').includes('мастер:'))
                              ? 'rgba(201,169,110,0.06)'
                              : '#fff',
                          }}
                        >
                          <div
                            className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center"
                            style={{ background: 'var(--color-cream-warm)' }}
                          >
                            {m.image
                              ? <img src={m.image} alt={m.name} width={48} height={48} className="w-full h-full object-cover object-top" />
                              : <span className="font-display text-xl text-champagne">?</span>
                            }
                          </div>
                          <div>
                            <p className="font-body text-xs font-medium text-charcoal-800 leading-tight">{m.name}</p>
                            <p className="font-body text-[10px] text-ink-muted mt-0.5">{m.role}</p>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* ── STEP 2: Date + Time ──────────────────────────────── */}
              {step === 2 && (
                <div className="space-y-6 animate-fade-in">
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
                        {form.date && timeSlots.map(slot => (
                          <option key={slot} value={slot}>{slot}</option>
                        ))}
                      </select>
                    </Field>
                  </div>

                  {/* Time slot quick-pick grid */}
                  {form.date && (
                    <div>
                      <p className="font-body text-xs text-ink-muted mb-3 uppercase tracking-widest">
                        Быстрый выбор времени
                      </p>
                      <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
                        {timeSlots.map(slot => (
                          <button
                            key={slot}
                            type="button"
                            onClick={() => setForm(p => ({ ...p, time: slot }))}
                            className="py-2.5 font-body text-xs font-medium transition-all duration-200"
                            style={{
                              background: form.time === slot
                                ? 'var(--color-charcoal-800)'
                                : '#fff',
                              color: form.time === slot
                                ? 'var(--color-cream)'
                                : 'var(--color-ink-secondary)',
                              border: `1px solid ${form.time === slot
                                ? 'var(--color-charcoal-800)'
                                : 'var(--color-cream-dark)'}`,
                            }}
                          >
                            {slot}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* ── STEP 3: Contact details ──────────────────────────── */}
              {step === 3 && (
                <div className="space-y-6 animate-fade-in">
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
                        suppressHydrationWarning
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
                        suppressHydrationWarning
                      />
                    </Field>
                  </div>

                  <Field label="Комментарий (необязательно)">
                    <textarea
                      name="comment"
                      value={form.comment}
                      onChange={handleChange}
                      placeholder="Пожелания к мастеру, особенности..."
                      rows={3}
                      className="input-base resize-none"
                      suppressHydrationWarning
                    />
                  </Field>

                  {/* Booking summary preview */}
                  <div
                    className="p-5"
                    style={{ background: 'var(--color-cream-warm)', border: '1px solid var(--color-cream-dark)' }}
                  >
                    <p className="font-body text-xs uppercase tracking-widest text-ink-muted mb-3">
                      Ваша запись
                    </p>
                    <div className="space-y-1.5">
                      {[
                        { label: '💆 Услуга', value: form.service || '—'            },
                        { label: '📅 Дата',   value: formatDateDisplay(form.date)   },
                        { label: '🕙 Время',  value: form.time || '—'               },
                      ].map(r => (
                        <div key={r.label} className="flex items-center justify-between">
                          <span className="font-body text-xs text-ink-muted">{r.label}</span>
                          <span className="font-body text-sm font-medium text-charcoal-800">{r.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Error banner */}
                  {status === 'error' && (
                    <div className="flex items-start gap-3 p-4 bg-red-50 border border-red-200">
                      <svg className="w-5 h-5 text-red-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                      </svg>
                      <p className="font-body text-sm text-red-700">
                        Произошла ошибка. Попробуйте ещё раз или позвоните нам.
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* ── Step Navigation ──────────────────────────────────── */}
              <div className="flex items-center justify-between mt-10 pt-6"
                style={{ borderTop: '1px solid var(--color-cream-dark)' }}
              >
                {step > 1
                  ? <button type="button" onClick={handleBack} className="btn-ghost">
                      ← Назад
                    </button>
                  : <div />
                }

                {step < 3
                  ? <button type="button" onClick={handleNext} className="btn-primary px-10">
                      Далее →
                    </button>
                  : <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="btn-accent px-10 py-4 disabled:opacity-60 disabled:cursor-not-allowed"
                      style={{ boxShadow: '0 4px 20px rgba(201,169,110,0.35)' }}
                    >
                      {status === 'submitting'
                        ? <span className="flex items-center gap-3"><Spinner /> Отправляем...</span>
                        : 'Записаться онлайн ✓'
                      }
                    </button>
                }
              </div>
            </form>
          </div>

          {/* ── Right: Info sidebar ────────────────────────────────────── */}
          <div className="space-y-5">

            {/* Hours */}
            <div className="p-7" style={{ background: 'var(--color-charcoal-800)' }}>
              <h3 className="font-display text-xl mb-5" style={{ color: 'var(--color-cream)' }}>
                Время работы
              </h3>
              <div className="flex justify-between items-center pb-4 mb-4"
                style={{ borderBottom: '1px solid rgba(250,248,245,0.1)' }}
              >
                <span className="font-body text-sm" style={{ color: 'rgba(250,248,245,0.5)' }}>Ежедневно</span>
                <span className="font-body text-sm font-medium" style={{ color: 'var(--color-cream)' }}>
                  {siteConfig.workingHours}
                </span>
              </div>
              <p className="font-body text-xs leading-relaxed mb-6"
                style={{ color: 'rgba(250,248,245,0.4)' }}>
                Запись доступна на 60 дней вперёд. Последний слот — 21:30.
              </p>
              <div className="space-y-3">
                <a href={siteConfig.phoneHref}
                  className="flex items-center gap-3 transition-colors duration-300"
                  style={{ color: 'rgba(250,248,245,0.55)' }}
                >
                  <PhoneIcon /><span className="font-body text-sm">{siteConfig.phone}</span>
                </a>
                <a href={siteConfig.telegram} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 transition-colors duration-300"
                  style={{ color: 'rgba(250,248,245,0.55)' }}
                >
                  <TelegramIcon /><span className="font-body text-sm">Telegram</span>
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="p-6 bg-white" style={{ border: '1px solid var(--color-cream-dark)' }}>
              <h3 className="font-display text-lg text-charcoal-800 mb-4">Адрес</h3>
              <div className="flex items-start gap-3 mb-4">
                <MapPinIcon />
                <p className="font-body text-sm text-ink-secondary leading-relaxed">{siteConfig.address}</p>
              </div>
              <a href="https://maps.google.com/?q=2-я+Краснодарская+135+Ростов-на-Дону"
                target="_blank" rel="noopener noreferrer"
                className="font-body text-xs tracking-wide transition-colors duration-300"
                style={{ color: 'var(--color-champagne)' }}
              >
                Открыть в Google Maps →
              </a>
            </div>

            {/* How it works */}
            <div className="p-6" style={{ background: 'var(--color-cream-warm)', border: '1px solid var(--color-cream-dark)' }}>
              <h3 className="font-display text-lg text-charcoal-800 mb-5">Как это работает</h3>
              <ol className="space-y-4">
                {[
                  'Заполните форму и выберите удобное время',
                  'Мы подтвердим запись в течение 15 минут',
                  'Приходите в салон — вас уже ждут!',
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span
                      className="w-6 h-6 rounded-full font-body text-xs font-medium flex items-center justify-center shrink-0 mt-0.5"
                      style={{ background: 'var(--color-charcoal-800)', color: 'var(--color-cream)' }}
                    >
                      {i + 1}
                    </span>
                    <p className="font-body text-sm text-ink-secondary leading-relaxed">{text}</p>
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

function Field({ label, error, children }: {
  label: string; error?: string; children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="font-body text-xs font-medium text-ink-secondary tracking-widest uppercase">
        {label}
      </label>
      {children}
      {error && <p className="font-body text-xs text-red-600 mt-0.5">{error}</p>}
    </div>
  )
}

function Spinner() {
  return (
    <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
    </svg>
  )
}

function formatDateDisplay(s: string): string {
  if (!s) return '—'
  return new Date(s + 'T00:00:00').toLocaleDateString('ru-RU', {
    day: 'numeric', month: 'long', year: 'numeric',
  })
}

function PhoneIcon() {
  return <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.7h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 10.1a16 16 0 0 0 6 6l.72-.72a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21.28 17z"/></svg>
}
function TelegramIcon() {
  return <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M21.198 2.433a2.242 2.242 0 0 0-1.022.215l-17.5 7.5a2.25 2.25 0 0 0 .126 4.17l3.918 1.32 2.088 6.433a.98.98 0 0 0 1.71.29l2.822-3.045 4.514 3.34a2.25 2.25 0 0 0 3.522-1.493l2.5-17.5a2.25 2.25 0 0 0-2.678-2.23z"/></svg>
}
function MapPinIcon() {
  return <svg width="15" height="15" className="shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" style={{ color: 'var(--color-champagne)' }}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>
}