'use client'

import Link from 'next/link'
import Image from 'next/image'

interface NavbarProps {
  userName?: string
  userAvatar?: string
}

export function Navbar({ userName, userAvatar }: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-team-blue/10 bg-cream-white/95 backdrop-blur supports-[backdrop-filter]:bg-cream-white/60">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-team-blue to-team-orange">
            <span className="text-lg font-bold text-white">E</span>
          </div>
          <span className="text-xl font-bold text-team-blue">Energia</span>
        </Link>

        {/* User Section */}
        <div className="flex items-center space-x-3">
          {userName ? (
            <div className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-team-blue-pastel">
                {userAvatar ? (
                  <Image
                    src={userAvatar}
                    alt={userName}
                    width={32}
                    height={32}
                    className="h-8 w-8 rounded-full object-cover"
                  />
                ) : (
                  <span className="text-sm font-medium text-team-blue-dark">
                    {userName.charAt(0).toUpperCase()}
                  </span>
                )}
              </div>
              <span className="hidden text-sm font-medium text-team-blue-dark sm:block">
                {userName}
              </span>
            </div>
          ) : (
            <Link
              href="/login"
              className="rounded-lg bg-team-blue px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-team-blue-dark"
            >
              Iniciar Sesión
            </Link>
          )}
        </div>
      </div>
    </header>
  )
}
