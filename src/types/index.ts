// Types for the Energia App

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
  content: string
  excerpt: string
  category: SportCategory
  tags: string[]
  author: User
  featuredImage?: string
  published: boolean
  publishedAt?: Date
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
