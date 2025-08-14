'use client'

import { Navbar } from './Navbar'
import { BottomNavigation } from './BottomNavigation'

interface AppLayoutProps {
  children: React.ReactNode
  userName?: string
  userAvatar?: string
}

export function AppLayout({ children, userName, userAvatar }: AppLayoutProps) {
  return (
    <div className="min-h-screen bg-cream-white">
      <Navbar userName={userName} userAvatar={userAvatar} />
      
      <main className="pb-16 sm:pb-0">
        {children}
      </main>

      <BottomNavigation />
    </div>
  )
}
