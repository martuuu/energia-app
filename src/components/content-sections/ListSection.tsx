import { ArticleSection } from '@/types/content-sections'

interface ListSectionProps {
  section: ArticleSection
}

export function ListSection({ section }: ListSectionProps) {
  // Los items de la lista estarán en metadata.items
  const items = section.metadata?.items as Array<{
    title?: string
    content: string
    icon?: string
  }> || []
  
  const listType = (section.metadata?.listType as string) || 'bulleted'

  if (items.length === 0) return null

  return (
    <div className="mb-8">
      {section.title && (
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          {section.title}
        </h2>
      )}
      
      {section.content && (
        <p className="text-gray-700 mb-4">
          {section.content}
        </p>
      )}

      {listType === 'numbered' ? (
        <ol className="space-y-3 list-decimal list-inside">
          {items.map((item, index) => (
            <li key={index} className="text-gray-700">
              {item.title && (
                <span className="font-semibold">{item.title}: </span>
              )}
              <span>{item.content}</span>
            </li>
          ))}
        </ol>
      ) : listType === 'checklist' ? (
        <ul className="space-y-3">
          {items.map((item, index) => (
            <li key={index} className="flex items-start space-x-3">
              <span className="text-team-orange mt-1">✓</span>
              <div>
                {item.title && (
                  <span className="font-semibold text-gray-800">{item.title}: </span>
                )}
                <span className="text-gray-700">{item.content}</span>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <ul className="space-y-3 list-disc list-inside">
          {items.map((item, index) => (
            <li key={index} className="text-gray-700">
              {item.title && (
                <span className="font-semibold">{item.title}: </span>
              )}
              <span>{item.content}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
