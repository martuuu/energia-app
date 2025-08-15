'use client'

import { useRouter } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface BackButtonProps {
  href?: string
  label?: string
  className?: string
}

export function BackButton({ 
  href, 
  label = 'Volver', 
  className = '' 
}: BackButtonProps) {
  const router = useRouter()

  const handleBack = () => {
    if (href) {
      router.push(href)
    } else {
      router.back()
    }
  }

  return (
    <Button
      variant="ghost"
      onClick={handleBack}
      className={`mb-4 flex items-center gap-2 text-cream-white hover:text-team-orange hover:bg-team-orange/10 ${className}`}
    >
      <ArrowLeft className="h-4 w-4" />
      {label}
    </Button>
  )
}
