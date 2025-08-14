'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'

interface NavbarProps {
  userName?: string
  userAvatar?: string
}

export function Navbar({ userName, userAvatar }: NavbarProps) {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false) // Hide on scroll down
      } else {
        setIsVisible(true) // Show on scroll up
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <header
      className={`sticky top-0 z-50 w-full border-gray-200/10 bg-transparent backdrop-blur-md transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="container flex h-16 items-center justify-end px-4">
        {/* Logo */}

        {/* User Section */}
        <div className="flex items-center space-x-3">
          {userName ? (
            <div className="flex items-center space-x-2">
              <div className="bg-team-orange/10 flex h-8 w-8 items-center justify-center rounded-full">
                {userAvatar ? (
                  <Image
                    src={userAvatar}
                    alt={userName}
                    width={32}
                    height={32}
                    className="h-8 w-8 rounded-full object-cover"
                  />
                ) : (
                  <span className="text-team-orange text-sm font-medium">
                    {userName.charAt(0).toUpperCase()}
                  </span>
                )}
              </div>
              <span className="hidden text-sm font-medium text-gray-700 sm:block">
                {userName}
              </span>
            </div>
          ) : (
            <Link
              href="/login"
              className="bg-team-orange text-cream-white hover:bg-team-orange-light rounded-lg px-4 py-2 text-sm font-medium transition-colors"
            >
              Iniciar Sesión
            </Link>
          )}
        </div>
      </div>
    </header>
  )
}
