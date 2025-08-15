import { ArticleSection } from '@/types/content-sections'

interface TextSectionProps {
  section: ArticleSection
}

export function TextSection({ section }: TextSectionProps) {
  if (!section.content) return null
  
  return (
    <div className="space-y-4">
      {section.title && (
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 leading-tight">
          {section.title}
        </h2>
      )}
      <div className="prose prose-lg max-w-none">
        <div 
          className="text-gray-700 leading-relaxed whitespace-pre-line text-base sm:text-lg"
          dangerouslySetInnerHTML={{ 
            __html: section.content.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') 
          }}
        />
      </div>
    </div>
  )
}
