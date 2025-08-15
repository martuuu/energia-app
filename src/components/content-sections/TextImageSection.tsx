import Image from 'next/image'
import { ArticleSection } from '@/types/content-sections'

interface TextImageSectionProps {
  section: ArticleSection
}

export function TextImageSection({ section }: TextImageSectionProps) {
  if (!section.image) return null

  const { image } = section
  const isHorizontal = image.position === 'left' || image.position === 'right'
  const isVertical = image.position === 'top' || image.position === 'bottom'

  if (isHorizontal) {
    return (
      <div className="mb-6 sm:mb-8">
        {section.title && (
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">
            {section.title}
          </h2>
        )}
        
        <div className={`grid gap-4 sm:gap-6 ${image.position === 'left' ? 'lg:grid-cols-2' : 'lg:grid-cols-2'}`}>
          {image.position === 'left' && (
            <div className="relative h-48 sm:h-64 rounded-lg overflow-hidden">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          )}
          
          <div className="flex flex-col justify-center">
            {section.content && (
              <div className="text-gray-700 leading-relaxed whitespace-pre-line text-sm sm:text-base">
                {section.content}
              </div>
            )}
            {image.caption && (
              <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-gray-600 italic">
                {image.caption}
              </p>
            )}
          </div>
          
          {image.position === 'right' && (
            <div className="relative h-48 sm:h-64 rounded-lg overflow-hidden order-first lg:order-last">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          )}
        </div>
      </div>
    )
  }

  if (isVertical) {
    return (
      <div className="mb-6 sm:mb-8">
        {section.title && (
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">
            {section.title}
          </h2>
        )}
        
        <div className="space-y-4 sm:space-y-6">
          {image.position === 'top' && (
            <div className="relative h-48 sm:h-64 w-full rounded-lg overflow-hidden">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
              />
            </div>
          )}
          
          {section.content && (
            <div className="text-gray-700 leading-relaxed whitespace-pre-line text-sm sm:text-base">
              {section.content}
            </div>
          )}
          
          {image.position === 'bottom' && (
            <div className="relative h-48 sm:h-64 w-full rounded-lg overflow-hidden">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
              />
            </div>
          )}
          
          {image.caption && (
            <p className="text-xs sm:text-sm text-gray-600 text-center italic">
              {image.caption}
            </p>
          )}
        </div>
      </div>
    )
  }

  // Default: center
  return (
    <div className="mb-6 sm:mb-8">
      {section.title && (
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">
          {section.title}
        </h2>
      )}
      
      <div className="relative h-48 sm:h-64 w-full rounded-lg overflow-hidden mb-3 sm:mb-4">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
        />
      </div>
      
      {section.content && (
        <div className="text-gray-700 leading-relaxed whitespace-pre-line text-sm sm:text-base">
          {section.content}
        </div>
      )}
      
      {image.caption && (
        <p className="mt-2 text-xs sm:text-sm text-gray-600 text-center italic">
          {image.caption}
        </p>
      )}
    </div>
  )
}
