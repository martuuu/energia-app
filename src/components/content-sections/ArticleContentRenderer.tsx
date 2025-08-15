import { ArticleSection, SectionType } from '@/types/content-sections'
import { TextSection } from './TextSection'
import { ImageSection } from './ImageSection'
import { TextImageSection } from './TextImageSection'
import { QuoteSection } from './QuoteSection'
import { ListSection } from './ListSection'
import { VideoSection } from './VideoSection'

interface ArticleContentRendererProps {
  sections: ArticleSection[]
}

export function ArticleContentRenderer({ sections }: ArticleContentRendererProps) {
  // Ordenar secciones por el campo order
  const sortedSections = sections.sort((a, b) => a.order - b.order)

  return (
    <div className="space-y-4 sm:space-y-6">
      {sortedSections.map((section) => {
        switch (section.type) {
          case SectionType.TEXT:
            return <TextSection key={section.id} section={section} />
          
          case SectionType.IMAGE:
            return <ImageSection key={section.id} section={section} />
          
          case SectionType.TEXT_IMAGE:
            return <TextImageSection key={section.id} section={section} />
          
          case SectionType.QUOTE:
            return <QuoteSection key={section.id} section={section} />
          
          case SectionType.LIST:
            return <ListSection key={section.id} section={section} />
          
          case SectionType.VIDEO:
            return section.video ? (
              <VideoSection
                key={section.id}
                src={section.video.src}
                title={section.video.title}
                description={section.video.description}
                autoplay={section.video.autoplay}
                poster={section.video.poster}
              />
            ) : null
          
          default:
            console.warn(`Tipo de sección no reconocido: ${section.type}`)
            return null
        }
      })}
    </div>
  )
}
