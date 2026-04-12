import { NextRequest, NextResponse } from 'next/server'
import type { BookingFormData, BookingResponse } from '@/types'

// ─── POST /api/bookings ────────────────────────────────────────────────────
// Receives booking form data, validates it, and stores/forwards it.
//
// Current:  Logs to console + returns success (demo mode)
// Future:   Replace the DATABASE section below with real PostgreSQL logic
//           e.g. using Prisma, Drizzle, or pg directly.

export async function POST(request: NextRequest) {
  try {
    const body: BookingFormData = await request.json()

    // ── Validation ──────────────────────────────────────────────────────
    const errors = validateBooking(body)
    if (errors.length > 0) {
      return NextResponse.json<BookingResponse>(
        { success: false, message: errors.join(', '), error: errors.join(', ') },
        { status: 400 }
      )
    }

    // ── Generate booking ID ─────────────────────────────────────────────
    const bookingId = generateBookingId()

    // ── DATABASE (future) ───────────────────────────────────────────────
    // TODO: Replace this block with real database logic, for example:
    //
    // import { db } from '@/lib/db'          // your Prisma/Drizzle client
    //
    // await db.booking.create({
    //   data: {
    //     id:        bookingId,
    //     name:      body.name,
    //     phone:     body.phone,
    //     service:   body.service,
    //     date:      new Date(body.date),
    //     time:      body.time,
    //     comment:   body.comment ?? null,
    //     status:    'pending',
    //     createdAt: new Date(),
    //   },
    // })
    //
    // ── NOTIFICATION (future) ────────────────────────────────────────────
    // TODO: Send Telegram notification to salon owner:
    //
    // await sendTelegramNotification({
    //   message: `📅 Новая запись #${bookingId}\n` +
    //            `👤 ${body.name}\n` +
    //            `📞 ${body.phone}\n` +
    //            `💆 ${body.service}\n` +
    //            `🗓 ${body.date} в ${body.time}`,
    // })
    //
    // ── DEMO MODE ────────────────────────────────────────────────────────
    // Currently just logs the booking data
    console.log('📅 New booking received:', {
      bookingId,
      ...body,
      receivedAt: new Date().toISOString(),
    })

    // ── Success response ────────────────────────────────────────────────
    return NextResponse.json<BookingResponse>(
      {
        success:   true,
        bookingId,
        message:   'Ваша запись успешно отправлена!',
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Booking API error:', error)
    return NextResponse.json<BookingResponse>(
      {
        success: false,
        message: 'Произошла ошибка. Пожалуйста, попробуйте ещё раз.',
        error:   'Произошла ошибка. Пожалуйста, попробуйте ещё раз.',
      },
      { status: 500 }
    )
  }
}

// ─── GET /api/bookings ─────────────────────────────────────────────────────
// Returns available time slots for a given date.
// Future: query database for already-booked slots and exclude them.

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const date = searchParams.get('date')

  if (!date) {
    return NextResponse.json({ error: 'Дата не указана' }, { status: 400 })
  }

  // ── DATABASE (future) ────────────────────────────────────────────────
  // TODO: Query booked slots for this date and filter them out:
  //
  // const bookedSlots = await db.booking.findMany({
  //   where: { date: new Date(date), status: { not: 'cancelled' } },
  //   select: { time: true },
  // })
  // const bookedTimes = bookedSlots.map(b => b.time)
  // const available = ALL_SLOTS.filter(s => !bookedTimes.includes(s))

  // Demo: all slots available
  const ALL_SLOTS = [
    '10:00','10:30','11:00','11:30',
    '12:00','12:30','13:00','13:30',
    '14:00','14:30','15:00','15:30',
    '16:00','16:30','17:00','17:30',
    '18:00','18:30','19:00','19:30',
    '20:00','20:30','21:00','21:30',
  ]

  return NextResponse.json({ date, slots: ALL_SLOTS })
}

// ─── Helpers ──────────────────────────────────────────────────────────────

function validateBooking(data: BookingFormData): string[] {
  const errors: string[] = []

  if (!data.name?.trim())
    errors.push('Имя обязательно')

  if (!data.phone?.trim())
    errors.push('Телефон обязателен')
  else if (!/^[\d\s\+\-\(\)]{7,20}$/.test(data.phone))
    errors.push('Некорректный номер телефона')

  if (!data.service?.trim())
    errors.push('Услуга не выбрана')

  if (!data.date?.trim())
    errors.push('Дата не выбрана')
  else {
    const selected = new Date(data.date)
    const today    = new Date()
    today.setHours(0, 0, 0, 0)
    if (selected < today)
      errors.push('Нельзя записаться на прошедшую дату')
  }

  if (!data.time?.trim())
    errors.push('Время не выбрано')

  return errors
}

function generateBookingId(): string {
  const timestamp = Date.now().toString(36).toUpperCase()
  const random    = Math.random().toString(36).slice(2, 6).toUpperCase()
  return `D2-${timestamp}-${random}`
}