'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, BookOpen, Calendar, Mail, Menu } from 'lucide-react'
import { cn } from '@/lib/utils'
import { NAVIGATION_ITEMS } from '@/constants'

const iconMap = {
  Home,
  BookOpen,
  Calendar,
  Mail,
  Menu,
}

export function BottomNavigation() {
  const pathname = usePathname()

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-team-blue/10 bg-cream-white/95 backdrop-blur supports-[backdrop-filter]:bg-cream-white/60 sm:hidden">
      <div className="flex justify-around">
        {NAVIGATION_ITEMS.map((item) => {
          const Icon = iconMap[item.icon as keyof typeof iconMap]
          const isActive = pathname === item.href
          
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex flex-col items-center py-2 px-3 text-xs font-medium transition-colors',
                isActive
                  ? 'text-team-blue'
                  : 'text-gray-600 hover:text-team-blue'
              )}
            >
              <Icon
                className={cn(
                  'h-5 w-5 mb-1',
                  isActive ? 'text-team-blue' : 'text-gray-600'
                )}
              />
              <span className="truncate">{item.label}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
