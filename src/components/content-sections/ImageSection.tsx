import Image from 'next/image'
import { ArticleSection } from '@/types/content-sections'

interface ImageSectionProps {
  section: ArticleSection
}

export function ImageSection({ section }: ImageSectionProps) {
  if (!section.image) return null

  const { image } = section
  const sizeClasses = {
    small: 'h-48 max-w-sm mx-auto',
    medium: 'h-64 max-w-md mx-auto', 
    large: 'h-80 max-w-2xl mx-auto',
    full: 'h-96 w-full'
  }

  return (
    <div className="mb-8">
      {section.title && (
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          {section.title}
        </h2>
      )}
      
      <div className={`relative ${sizeClasses[image.size || 'medium']} rounded-lg overflow-hidden`}>
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
        />
      </div>
      
      {image.caption && (
        <p className="mt-2 text-sm text-gray-600 text-center italic">
          {image.caption}
        </p>
      )}
    </div>
  )
}
