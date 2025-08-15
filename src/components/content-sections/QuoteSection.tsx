import { ArticleSection } from '@/types/content-sections'

interface QuoteSectionProps {
  section: ArticleSection
}

export function QuoteSection({ section }: QuoteSectionProps) {
  if (!section.content) return null

  // La metadata puede contener author y source para las citas
  const author = section.metadata?.author as string
  const source = section.metadata?.source as string

  return (
    <div className="mb-6 sm:mb-8">
      {section.title && (
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">
          {section.title}
        </h2>
      )}
      
      <blockquote className="border-l-4 border-team-orange pl-4 sm:pl-6 py-3 sm:py-4 bg-gray-50 rounded-r-lg">
        <p className="text-base sm:text-lg italic text-gray-700 leading-relaxed">
          &ldquo;{section.content}&rdquo;
        </p>
        
        {(author || source) && (
          <footer className="mt-3 sm:mt-4 text-xs sm:text-sm text-gray-600">
            {author && <cite className="font-medium">— {author}</cite>}
            {source && <span className="ml-2">({source})</span>}
          </footer>
        )}
      </blockquote>
    </div>
  )
}
