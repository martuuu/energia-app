import React from 'react'
import Image from 'next/image'

interface SportIconProps {
  sport: 'running' | 'swimming' | 'cycling' | 'triathlon'
  size?: number
  className?: string
  opacity?: number
}

const iconPaths = {
  running: '/icon/running.png',
  swimming: '/icon/swim.png',
  cycling: '/icon/bike.png',
  triathlon: '/icon/cycling.png', // Using running icon for triathlon for now
}

export function SportIcon({ sport, size = 24, className = '', opacity = 1 }: SportIconProps) {
  return (
    <div className={`inline-block relative ${className}`} style={{ opacity }}>
      <Image
        src={iconPaths[sport]}
        alt={`${sport} icon`}
        width={size}
        height={size}
        style={{
          filter: 'brightness(0) saturate(100%) invert(59%) sepia(76%) saturate(2019%) hue-rotate(3deg) brightness(102%) contrast(96%)'
        }}
      />
    </div>
  )
}

export type SportType = 'running' | 'swimming' | 'cycling' | 'triathlon'
