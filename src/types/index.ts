// Types for the Energia App
import { ArticleSection } from './content-sections'

export interface User {
  id: string
  email: string
  name: string
  avatar?: string
  membershipType: 'free' | 'basic' | 'premium'
  createdAt: Date
  updatedAt: Date
}

export interface Article {
  id: string
  title: string
  slug: string
  content: string | ArticleSection[] // Soporte para contenido legacy y nuevo
  excerpt: string
  category: SportCategory
  tags: string[]
  author: User
  featuredImage?: string
  published: boolean
  publishedAt?: Date
  readTime?: string // Para compatibilidad con mock data
  createdAt: Date
  updatedAt: Date
}

export interface Event {
  id: string
  title: string
  description: string
  date: Date
  location: string
  category: SportCategory
  maxParticipants?: number
  currentParticipants: number
  registrationDeadline?: Date
  status: 'upcoming' | 'ongoing' | 'completed' | 'cancelled'
  createdAt: Date
  updatedAt: Date
}

export type SportCategory = 'running' | 'swimming' | 'cycling' | 'triathlon'

export interface Category {
  id: string
  name: string
  slug: string
  description: string
  sport: SportCategory
}

export interface EventRegistration {
  id: string
  eventId: string
  userId: string
  registeredAt: Date
  status: 'registered' | 'cancelled' | 'attended'
}

export interface NavigationItem {
  label: string
  href: string
  icon: string
  hasDropdown?: boolean
}

export interface DropdownMenuItem {
  label: string
  href: string
  icon: string
}
