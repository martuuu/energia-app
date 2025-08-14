// Constants for the Energia App
import type { NavigationItem, DropdownMenuItem } from '@/types'

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

export const NAVIGATION_ITEMS: NavigationItem[] = [
  { label: 'Home', href: '/', icon: 'Home' },
  { label: 'Artículos', href: '/articles', icon: 'BookOpen' },
  { label: 'Eventos', href: '/events', icon: 'Calendar' },
  { label: 'Contacto', href: '/contact', icon: 'Mail' },
  { label: 'Más', href: '#', icon: 'Menu', hasDropdown: true },
]

export const DROPDOWN_MENU_ITEMS: DropdownMenuItem[] = [
  { label: 'Mi Cuenta', href: '/profile', icon: 'User' },
  { label: 'Mis Entrenamientos', href: '/trainings', icon: 'Dumbbell' },
  { label: 'Seguimiento de Entrenador', href: '/coach-tracking', icon: 'Eye' },
  { label: 'Subscripciones', href: '/subscriptions', icon: 'CreditCard' },
  { label: 'Energia Merch', href: '/merch', icon: 'ShoppingBag' },
  { label: 'Información', href: '/info', icon: 'Info' },
]

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
