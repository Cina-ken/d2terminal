import type { SiteConfig, NavLink, Service, Testimonial, Benefit, GalleryItem, Master } from '@/types'

// ─── Site Configuration ────────────────────────────────────────────────────

export const siteConfig: SiteConfig = {
  name:          'D2 Terminal',
  tagline:       'Онлайн-запись за 1 минуту',
  description:   'Премиальный салон красоты в Ростове-на-Дону. Стрижки, маникюр, педикюр, массаж и эпиляция. Работаем ежедневно с 10:00 до 22:00.',
  phone:         '+7 928 173-11-73',
  phoneHref:     'tel:+79281731173',
  address:       '2-я Краснодарская ул., 135, Ростов-на-Дону 344000',
  addressShort:  'ул. 2-я Краснодарская, 135',
  instagram:     'https://www.instagram.com/d2terminal/',
  telegram:      'https://t.me/d2terminal',
  workingHours:  '10:00 – 22:00',
  workingDays:   'Ежедневно',
}

// ─── Navigation ────────────────────────────────────────────────────────────

export const navLinks: NavLink[] = [
  { label: 'Главная',  href: '/'         },
  { label: 'Услуги',   href: '/services'  },
  { label: 'Галерея',  href: '/gallery'   },
  { label: 'Запись',   href: '/booking'   },
  { label: 'Контакты', href: '/contacts'  },
]

// ─── Services ──────────────────────────────────────────────────────────────

export const services: Service[] = [
  {
    id:          'haircut',
    title:       'Стрижки и укладки',
    description: 'Авторские стрижки, укладки и окрашивание от мастеров с многолетним опытом. Работаем с любым типом волос.',
    icon:        '✂️',
    priceFrom:   700,
    priceUnit:   'руб.',
    duration:    'от 45 мин',
    items: [
      { name: 'Женская стрижка',        price: 700,  duration: '45–60 мин' },
      { name: 'Мужская стрижка',         price: 500,  duration: '30–45 мин' },
      { name: 'Детская стрижка',         price: 400,  duration: '30 мин'    },
      { name: 'Стрижка + укладка',       price: 1200, duration: '75–90 мин' },
      { name: 'Окрашивание (базовое)',    price: 1500, duration: '90–120 мин'},
      { name: 'Сложное окрашивание',     price: 3000, duration: '2–4 ч'    },
      { name: 'Кератиновое выпрямление', price: 4000, duration: '3–4 ч'    },
    ],
  },
  {
    id:          'manicure',
    title:       'Маникюр и педикюр',
    description: 'Классический и аппаратный маникюр, педикюр, гель-лак, наращивание и дизайн ногтей.',
    icon:        '💅',
    priceFrom:   800,
    priceUnit:   'руб.',
    duration:    'от 60 мин',
    items: [
      { name: 'Маникюр (без покрытия)',   price: 800,  duration: '45–60 мин' },
      { name: 'Маникюр + гель-лак',       price: 1400, duration: '75–90 мин' },
      { name: 'Аппаратный маникюр',       price: 1200, duration: '60–75 мин' },
      { name: 'Педикюр (без покрытия)',    price: 1200, duration: '60–75 мин' },
      { name: 'Педикюр + гель-лак',       price: 1800, duration: '90 мин'    },
      { name: 'Комби (маникюр + педикюр)',price: 2800, duration: '2–2.5 ч'  },
      { name: 'Дизайн (1 ноготь)',         price: 100,  duration: '5–10 мин' },
    ],
  },
  {
    id:          'massage',
    title:       'Массаж',
    description: 'Расслабляющий, лечебный и антицеллюлитный массаж. Квалифицированные массажисты и профессиональная косметика.',
    icon:        '🤲',
    priceFrom:   1500,
    priceUnit:   'руб.',
    duration:    'от 30 мин',
    items: [
      { name: 'Классический (30 мин)',       price: 1500, duration: '30 мин' },
      { name: 'Классический (60 мин)',       price: 2500, duration: '60 мин' },
      { name: 'Антицеллюлитный (60 мин)',    price: 2800, duration: '60 мин' },
      { name: 'Спортивный (60 мин)',         price: 2500, duration: '60 мин' },
      { name: 'Массаж лица и шеи',           price: 1800, duration: '45 мин' },
      { name: 'Массаж спины (30 мин)',        price: 1500, duration: '30 мин' },
    ],
  },
  {
    id:          'epilation',
    title:       'Эпиляция',
    description: 'Шугаринг, восковая и ферментная эпиляция. Гладкая кожа надолго с минимальным дискомфортом.',
    icon:        '✨',
    priceFrom:   400,
    priceUnit:   'руб.',
    duration:    'от 15 мин',
    items: [
      { name: 'Верхняя губа',           price: 400,  duration: '15 мин' },
      { name: 'Подмышки',               price: 600,  duration: '20 мин' },
      { name: 'Руки полностью',         price: 1200, duration: '30 мин' },
      { name: 'Ноги (голень)',          price: 1200, duration: '30 мин' },
      { name: 'Ноги полностью',         price: 2000, duration: '50 мин' },
      { name: 'Бикини классическое',    price: 1000, duration: '30 мин' },
      { name: 'Бикини глубокое',        price: 1500, duration: '40 мин' },
      { name: 'Комплекс (ноги + бикини)',price: 2800, duration: '75 мин'},
    ],
  },
]

// ─── Testimonials ──────────────────────────────────────────────────────────

export const testimonials: Testimonial[] = [
  {
    id:      '1',
    name:    'Анастасия К.',
    service: 'Маникюр + гель-лак',
    rating:  5,
    text:    'Хожу сюда уже год — ни разу не разочаровалась. Мастера внимательные, работают аккуратно. Гель держится 3–4 недели без сколов. Обстановка уютная, всегда предложат кофе.',
    date:    'Март 2025',
  },
  {
    id:      '2',
    name:    'Дмитрий Л.',
    service: 'Мужская стрижка',
    rating:  5,
    text:    'Наконец-то нашёл своего мастера. Александр слушает, что ты хочешь, и делает именно это. Стрижка держит форму больше месяца. Запись удобная, без ожидания.',
    date:    'Февраль 2025',
  },
  {
    id:      '3',
    name:    'Марина В.',
    service: 'Классический массаж',
    rating:  5,
    text:    'После первого же сеанса почувствовала разницу. Мастер работает профессионально, чувствует проблемные зоны. Хожу на курс уже третий раз. Очень рекомендую!',
    date:    'Январь 2025',
  },
  {
    id:      '4',
    name:    'Екатерина Н.',
    service: 'Окрашивание + стрижка',
    rating:  5,
    text:    'Пришла с фото желаемого цвета — результат превзошёл ожидания. Мастер объяснила весь процесс, посоветовала уход. Цвет получился именно таким, как хотела. Вернусь!',
    date:    'Апрель 2025',
  },
  {
    id:      '5',
    name:    'Ольга Т.',
    service: 'Шугаринг (ноги + бикини)',
    rating:  5,
    text:    'Очень комфортная процедура. Мастер работает быстро и аккуратно, кожа после — идеальная. Запись онлайн заняла буквально минуту. Однозначно рекомендую этот салон.',
    date:    'Март 2025',
  },
  {
    id:      '6',
    name:    'Игорь С.',
    service: 'Педикюр',
    rating:  5,
    text:    'Впервые попробовал педикюр — остался в восторге. Мастер всё объяснила, ничего не больно. Теперь хожу регулярно. Салон чистый, современный, персонал приветливый.',
    date:    'Апрель 2025',
  },
]

// ─── Benefits ──────────────────────────────────────────────────────────────

export const benefits: Benefit[] = [
  {
    id:          'booking',
    icon:        '📱',
    title:       'Запись за 1 минуту',
    description: 'Никаких звонков. Выберите услугу, дату и время — и готово.',
  },
  {
    id:          'masters',
    icon:        '🏆',
    title:       'Опытные мастера',
    description: 'Все специалисты с подтверждённой квалификацией и опытом от 3 лет.',
  },
  {
    id:          'schedule',
    icon:        '🕙',
    title:       'Работаем с 10 до 22',
    description: 'Удобный график ежедневно. Можно записаться вечером после работы.',
  },
  {
    id:          'quality',
    icon:        '✨',
    title:       'Профессиональная косметика',
    description: 'Используем только сертифицированные материалы и косметику премиум-класса.',
  },
]

// ─── Time Slots ────────────────────────────────────────────────────────────

export const timeSlots: string[] = [
  '10:00', '10:30', '11:00', '11:30',
  '12:00', '12:30', '13:00', '13:30',
  '14:00', '14:30', '15:00', '15:30',
  '16:00', '16:30', '17:00', '17:30',
  '18:00', '18:30', '19:00', '19:30',
  '20:00', '20:30', '21:00', '21:30',
]

// ─── Gallery Items ─────────────────────────────────────────────────────────
// Phase B: "Наши работы" section.
// Images from Unsplash — replace with real salon work photos later.

export const galleryItems: GalleryItem[] = [
  // ── Haircut ──────────────────────────────────────────────────────────
  {
    id: 'g1', category: 'haircut',
    image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&q=80&auto=format&fit=crop',
    title: 'Укладка и объём', description: 'Авторская укладка на средние волосы', master: 'Алёна',
  },
  {
    id: 'g3', category: 'haircut',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80&auto=format&fit=crop',
    title: 'Окрашивание балаяж', description: 'Сложное окрашивание техника балаяж', master: 'Наталья',
  },
  {
    id: 'g5', category: 'haircut',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&q=80&auto=format&fit=crop',
    title: 'Стрижка каре', description: 'Классическое каре с укладкой', master: 'Алёна',
  },
  {
    id: 'g8', category: 'haircut',
    image: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=600&q=80&auto=format&fit=crop',
    title: 'Мужская стрижка', description: 'Классическая мужская с укладкой', master: 'Александр',
  },
  {
    id: 'g10', category: 'haircut',
    image: 'https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?w=600&q=80&auto=format&fit=crop',
    title: 'Окрашивание омбре', description: 'Плавный переход цвета — техника омбре', master: 'Наталья',
  },
  {
    id: 'g11', category: 'haircut',
    image: 'https://images.unsplash.com/photo-1549236177-f9b0031d5a69?w=600&q=80&auto=format&fit=crop',
    title: 'Вечерняя укладка', description: 'Праздничная укладка с локонами', master: 'Алёна',
  },
  // ── Manicure ─────────────────────────────────────────────────────────
  {
    id: 'g2', category: 'manicure',
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&q=80&auto=format&fit=crop',
    title: 'Гель-лак с дизайном', description: 'Маникюр с авторским дизайном', master: 'Карина',
  },
  {
    id: 'g4', category: 'manicure',
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&q=80&auto=format&fit=crop&crop=right',
    title: 'Педикюр с покрытием', description: 'Аппаратный педикюр + гель-лак', master: 'Карина',
  },
  {
    id: 'g7', category: 'manicure',
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&q=80&auto=format&fit=crop&crop=top',
    title: 'Французский маникюр', description: 'Классический french с укреплением', master: 'Виктория',
  },
  {
    id: 'g12', category: 'manicure',
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&q=80&auto=format&fit=crop&crop=bottom',
    title: 'Наращивание ногтей', description: 'Наращивание на типсах с покрытием', master: 'Карина',
  },
  // ── Massage ──────────────────────────────────────────────────────────
  {
    id: 'g6', category: 'massage',
    image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=600&q=80&auto=format&fit=crop',
    title: 'Расслабляющий массаж', description: 'Классический массаж спины и шеи', master: 'Марина',
  },
  {
    id: 'g13', category: 'massage',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&q=80&auto=format&fit=crop',
    title: 'Антицеллюлитный массаж', description: 'Интенсивный курсовой массаж', master: 'Марина',
  },
  // ── Epilation ────────────────────────────────────────────────────────
  {
    id: 'g9', category: 'epilation',
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&q=80&auto=format&fit=crop',
    title: 'Шугаринг', description: 'Сахарная эпиляция — гладкость надолго', master: 'Ольга',
  },
  // ── Interior ─────────────────────────────────────────────────────────
  {
    id: 'g14', category: 'interior',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&q=80&auto=format&fit=crop&crop=center',
    title: 'Рабочее место', description: 'Чистота и порядок на каждом рабочем месте', master: 'D2 Terminal',
  },
  {
    id: 'g15', category: 'interior',
    image: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=600&q=80&auto=format&fit=crop',
    title: 'Зал маникюра', description: 'Современное оборудование и уютная атмосфера', master: 'D2 Terminal',
  },
  {
    id: 'g16', category: 'interior',
    image: 'https://images.unsplash.com/photo-1470259078422-826894b933aa?w=600&q=80&auto=format&fit=crop',
    title: 'Зона ожидания', description: 'Комфортная зона ожидания с кофе и чаем', master: 'D2 Terminal',
  },
]

// ─── Gallery Category Labels ───────────────────────────────────────────────

export const galleryCategories = [
  { id: 'all',       label: 'Все работы'  },
  { id: 'haircut',   label: 'Волосы'      },
  { id: 'manicure',  label: 'Маникюр'     },
  { id: 'massage',   label: 'Массаж'      },
  { id: 'epilation', label: 'Эпиляция'    },
  { id: 'interior',  label: 'Интерьер'    },
] as const

// ─── Masters ───────────────────────────────────────────────────────────────

export const masters: Master[] = [
  {
    id: 'm1',
    name: 'Алёна Соколова',
    role: 'Топ-стилист',
    experience: '8 лет опыта',
    specialties: ['Стрижки', 'Окрашивание', 'Балаяж'],
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80&auto=format&fit=crop',
    rating: 5.0,
    reviewCount: 124,
  },
  {
    id: 'm2',
    name: 'Карина Михайлова',
    role: 'Мастер маникюра',
    experience: '5 лет опыта',
    specialties: ['Маникюр', 'Педикюр', 'Наращивание'],
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&q=80&auto=format&fit=crop',
    rating: 4.9,
    reviewCount: 98,
  },
  {
    id: 'm3',
    name: 'Марина Иванова',
    role: 'Массажист',
    experience: '6 лет опыта',
    specialties: ['Классический', 'Антицеллюлитный', 'Лимфодренаж'],
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80&auto=format&fit=crop',
    rating: 5.0,
    reviewCount: 76,
  },
  {
    id: 'm4',
    name: 'Ольга Петрова',
    role: 'Мастер эпиляции',
    experience: '4 года опыта',
    specialties: ['Шугаринг', 'Воск', 'Биоэпиляция'],
    image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&q=80&auto=format&fit=crop',
    rating: 4.9,
    reviewCount: 61,
  },
]