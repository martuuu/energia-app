// Estructura simplificada y flexible para secciones de artículos
export interface ArticleSection {
  id: string
  type: SectionType
  order: number
  title?: string
  content?: string
  image?: {
    src: string
    alt: string
    caption?: string
    position?: 'left' | 'right' | 'top' | 'bottom' | 'center'
    size?: 'small' | 'medium' | 'large' | 'full'
  }
  video?: {
    src: string
    title: string
    description?: string
    autoplay?: boolean
    poster?: string
  }
  metadata?: Record<string, unknown> // Para futuras extensiones
}

export enum SectionType {
  TEXT = 'text',
  IMAGE = 'image', 
  TEXT_IMAGE = 'text_image',
  QUOTE = 'quote',
  LIST = 'list',
  VIDEO = 'video'
}

export interface ArticleContent {
  sections: ArticleSection[]
}
