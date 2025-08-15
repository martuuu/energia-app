'use client'

import { useState, useEffect, useRef } from 'react'

interface VideoSectionProps {
  src: string
  title: string
  description?: string
  autoplay?: boolean
  poster?: string
}

export function VideoSection({ 
  src, 
  title, 
  description, 
  autoplay = false, 
  poster 
}: VideoSectionProps) {
  const [isSticky, setIsSticky] = useState(false)
  const [showContent, setShowContent] = useState(false)
  const videoContainerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!videoContainerRef.current || !contentRef.current) return

      const containerRect = videoContainerRef.current.getBoundingClientRect()
      const contentRect = contentRef.current.getBoundingClientRect()
      
      // El video se hace sticky cuando el container pasa por el top del viewport
      const shouldBeSticky = containerRect.top <= 0 && contentRect.bottom > window.innerHeight * 0.3
      
      // Mostrar contenido cuando scrolleamos más allá del video inicial
      const shouldShowContent = containerRect.top <= -200

      setIsSticky(shouldBeSticky)
      setShowContent(shouldShowContent)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Función para convertir URL de YouTube a embed
  const getYouTubeEmbedUrl = (url: string) => {
    const regex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/
    const match = url.match(regex)
    if (match) {
      return `https://www.youtube.com/embed/${match[1]}`
    }
    return url // Si no es YouTube, devolver URL original
  }

  const embedUrl = getYouTubeEmbedUrl(src)

  return (
    <div className="relative w-full">
      {/* Video Container - Empieza en posición normal */}
      <div
        ref={videoContainerRef}
        className={`
          w-full transition-all duration-300 ease-in-out
          ${isSticky 
            ? 'fixed top-0 left-0 right-0 z-50 shadow-2xl' 
            : 'relative'
          }
        `}
        style={{
          height: isSticky ? '45vh' : '70vh',
        }}
      >
        {/* YouTube Iframe o Video Element */}
        {embedUrl.includes('youtube.com/embed') ? (
          <iframe
            className="w-full h-full"
            src={`${embedUrl}?autoplay=${autoplay ? 1 : 0}&mute=${autoplay ? 1 : 0}`}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        ) : (
          <video
            className="w-full h-full object-cover"
            autoPlay={autoplay}
            muted={autoplay}
            loop
            controls={true}
            poster={poster}
            playsInline
          >
            <source src={src} type="video/mp4" />
            Tu navegador no soporta el elemento video.
          </video>
        )}
        
        {/* Overlay cuando está sticky con título */}
        {isSticky && (
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4">
            <h3 className="text-white font-semibold text-lg line-clamp-1">
              {title}
            </h3>
          </div>
        )}
      </div>

      {/* Spacer cuando el video está sticky - mantiene el layout */}
      {isSticky && (
        <div style={{ height: '45vh' }} className="w-full" />
      )}

      {/* Content Section - Aparece con animación al hacer scroll */}
      <div
        ref={contentRef}
        className={`
          relative z-10 transition-all duration-700 ease-out
          ${showContent 
            ? 'opacity-100 transform translate-y-0' 
            : 'opacity-0 transform translate-y-16'
          }
        `}
        style={{
          marginTop: isSticky ? '2rem' : '-100px', // Overlap sutil con el video
        }}
      >
        {/* Contenido del título y descripción con fondo blanco */}
        <div className="bg-cream-white">
          <div className="max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
            <div className="bg-white rounded-lg shadow-xl p-8 sm:p-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                {title}
              </h2>
              
              {description && (
                <div className="prose prose-lg prose-gray max-w-none">
                  {/* Split description into paragraphs */}
                  {description.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="text-gray-700 leading-relaxed text-lg mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
