// Constants for the Energia App

export const SPORT_CATEGORIES = {
  RUNNING: 'running',
  SWIMMING: 'swimming',
  CYCLING: 'cycling',
  TRIATHLON: 'triathlon',
} as const

export const SPORT_LABELS = {
  [SPORT_CATEGORIES.RUNNING]: 'Running',
  [SPORT_CATEGORIES.SWIMMING]: 'Natación',
  [SPORT_CATEGORIES.CYCLING]: 'Ciclismo',
  [SPORT_CATEGORIES.TRIATHLON]: 'Triatlón',
} as const

export const SPORT_ICONS = {
  [SPORT_CATEGORIES.RUNNING]: '🏃‍♂️',
  [SPORT_CATEGORIES.SWIMMING]: '🏊‍♂️',
  [SPORT_CATEGORIES.CYCLING]: '🚴‍♂️',
  [SPORT_CATEGORIES.TRIATHLON]: '🏆',
} as const

export const MEMBERSHIP_TYPES = {
  FREE: 'free',
  BASIC: 'basic',
  PREMIUM: 'premium',
} as const

export const EVENT_STATUS = {
  UPCOMING: 'upcoming',
  ONGOING: 'ongoing',
  COMPLETED: 'completed',
  CANCELLED: 'cancelled',
} as const

export const NAVIGATION_ITEMS = [
  { label: 'Home', href: '/', icon: 'Home' },
  { label: 'Artículos', href: '/articles', icon: 'BookOpen' },
  { label: 'Eventos', href: '/events', icon: 'Calendar' },
  { label: 'Contacto', href: '/contact', icon: 'Mail' },
  { label: 'Más', href: '/more', icon: 'Menu' },
] as const

export const COLORS = {
  TEAM_BLUE: '#2563eb',
  TEAM_ORANGE: '#f97316',
  TEAM_BLUE_DARK: '#1d4ed8',
  TEAM_ORANGE_LIGHT: '#fb923c',
  TEAM_BLUE_PASTEL: '#a7c7ff',
  TEAM_ORANGE_PASTEL: '#ffd4a7',
  CREAM_WHITE: '#faf9f6',
} as const

export const API_ROUTES = {
  ARTICLES: '/api/articles',
  EVENTS: '/api/events',
  USERS: '/api/users',
  AUTH: '/api/auth',
} as const

export const PAGE_ROUTES = {
  HOME: '/',
  ARTICLES: '/articles',
  EVENTS: '/events',
  CONTACT: '/contact',
  PROFILE: '/profile',
  LOGIN: '/login',
  REGISTER: '/register',
} as const
