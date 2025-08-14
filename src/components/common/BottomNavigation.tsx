'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Home, BookOpen, Calendar, Mail, Menu, User, Dumbbell, Eye, CreditCard, ShoppingBag, Info } from 'lucide-react'
import { cn } from '@/lib/utils'
import { NAVIGATION_ITEMS, DROPDOWN_MENU_ITEMS } from '@/constants'
import type { NavigationItem } from '@/types'

const iconMap = {
  Home,
  BookOpen,
  Calendar,
  Mail,
  Menu,
  User,
  Dumbbell,
  Eye,
  CreditCard,
  ShoppingBag,
  Info,
}

export function BottomNavigation() {
  const pathname = usePathname()
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Cerrar dropdown al hacer click fuera
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleMenuClick = (item: NavigationItem) => {
    if (item.hasDropdown) {
      setIsDropdownOpen(prev => !prev) // Siempre alterna el estado
    } else {
      setIsDropdownOpen(false)
    }
  }

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-gray-200/20 bg-cream-white/95 backdrop-blur supports-[backdrop-filter]:bg-cream-white/90 shadow-lg sm:hidden">
      {/* Dropdown Menu */}
      <AnimatePresence>
        {isDropdownOpen && (
          <motion.div
            ref={dropdownRef}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 30,
              duration: 0.2 
            }}
            className="absolute bottom-full right-4 mb-2 w-64 bg-cream-white rounded-lg shadow-2xl border border-gray-200/30 overflow-hidden"
            style={{
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 10px 25px -5px rgba(0, 0, 0, 0.1)'
            }}
          >
            <div className="py-2">
              {DROPDOWN_MENU_ITEMS.map((item, index) => {
                const Icon = iconMap[item.icon as keyof typeof iconMap]
                
                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                      delay: index * 0.05,
                      duration: 0.2 
                    }}
                  >
                    <Link
                      href={item.href}
                      className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-team-orange-pastel hover:text-team-orange-dark transition-colors"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      <Icon className="h-5 w-5" />
                      <span className="font-medium">{item.label}</span>
                    </Link>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Navigation */}
      <div className="flex justify-around">
        {NAVIGATION_ITEMS.map((item) => {
          const Icon = iconMap[item.icon as keyof typeof iconMap]
          const isActive = pathname === item.href
          const isMenuButton = item.hasDropdown
          
          if (isMenuButton) {
            return (
              <button
                key={item.label}
                onClick={() => handleMenuClick(item)}
                className={cn(
                  'flex flex-col items-center py-2 px-3 text-xs font-medium transition-colors',
                  isDropdownOpen
                    ? 'text-team-orange'
                    : 'text-gray-600 hover:text-team-orange'
                )}
              >
                <motion.div
                  animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Icon
                    className={cn(
                      'h-5 w-5 mb-1',
                      isDropdownOpen ? 'text-team-orange' : 'text-gray-600'
                    )}
                  />
                </motion.div>
                <span className="truncate">{item.label}</span>
              </button>
            )
          }
          
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsDropdownOpen(false)}
              className={cn(
                'flex flex-col items-center py-2 px-3 text-xs font-medium transition-colors',
                isActive
                  ? 'text-team-orange'
                  : 'text-gray-600 hover:text-team-orange'
              )}
            >
              <Icon
                className={cn(
                  'h-5 w-5 mb-1',
                  isActive ? 'text-team-orange' : 'text-gray-600'
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
