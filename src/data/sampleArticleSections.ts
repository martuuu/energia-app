import { ArticleSection, SectionType } from '@/types/content-sections'
import { SPORT_CATEGORIES } from '@/constants'

// Artículo de ejemplo con secciones modulares
export const sampleArticleSections: ArticleSection[] = [
  {
    id: '1',
    type: SectionType.TEXT,
    order: 1,
    title: 'Introducción a la respiración en el running',
    content: `La respiración es uno de los aspectos más importantes y a menudo subestimados del running. Una técnica de respiración adecuada puede marcar la diferencia entre un entrenamiento exitoso y uno agotador.

Cuando corremos, nuestros músculos necesitan más oxígeno para generar energía. Una respiración eficiente nos permite mantener un ritmo constante por más tiempo, reducir la fatiga muscular y mejorar el rendimiento general.`
  },
  {
    id: '2',
    type: SectionType.IMAGE,
    order: 2,
    image: {
      src: '/images/runner-road.webp',
      alt: 'Corredor en ruta practicando técnicas de respiración',
      caption: 'La respiración correcta es fundamental para un running eficiente',
      size: 'large'
    }
  },
  {
    id: '3',
    type: SectionType.TEXT,
    order: 3,
    title: '¿Por qué es importante la respiración?',
    content: `Una respiración eficiente durante el running nos permite:

• Mantener un ritmo constante por más tiempo
• Reducir la fatiga muscular
• Mejorar el rendimiento general  
• Prevenir el dolor lateral (flato)
• Optimizar el suministro de oxígeno a los músculos`
  },
  {
    id: '4',
    type: SectionType.TEXT_IMAGE,
    order: 4,
    title: 'Técnica de respiración rítmica',
    content: `La respiración rítmica es la base de una buena técnica de running. Consiste en coordinar la respiración con los pasos:

**Patrón 3:2**: Inhala durante 3 pasos, exhala durante 2 pasos (para ritmos moderados)

**Patrón 2:2**: Inhala durante 2 pasos, exhala durante 2 pasos (para ritmos más intensos)

Esta coordinación ayuda a mantener un ritmo estable y evita la fatiga prematura.`,
    image: {
      src: '/images/runner-track.webp',
      alt: 'Corredor en pista practicando respiración rítmica',
      caption: 'Coordinar la respiración con los pasos es clave',
      position: 'right'
    }
  },
  {
    id: '5',
    type: SectionType.QUOTE,
    order: 5,
    content: 'La respiración es el puente que conecta la vida con la conciencia, y que une tu cuerpo con tus pensamientos.',
    metadata: {
      author: 'Thich Nhat Hanh',
      source: 'Maestro Zen'
    }
  },
  {
    id: '6',
    type: SectionType.LIST,
    order: 6,
    title: 'Ejercicios para mejorar tu respiración',
    content: 'Practica estos ejercicios regularmente para desarrollar una respiración más eficiente:',
    metadata: {
      listType: 'numbered',
      items: [
        {
          title: 'Respiración diafragmática en reposo',
          content: 'Acostado, practica la respiración abdominal durante 10 minutos diarios'
        },
        {
          title: 'Caminar consciente',
          content: 'Camina practicando diferentes patrones de respiración antes de correr'
        },
        {
          title: 'Running progresivo',
          content: 'Comienza con respiración nasal y adapta según la intensidad'
        },
        {
          title: 'Meditación de respiración',
          content: 'Dedica 5 minutos diarios a respirar conscientemente'
        }
      ]
    }
  },
  {
    id: '7',
    type: SectionType.TEXT,
    order: 7,
    title: 'Conclusión',
    content: `La respiración eficiente se desarrolla con práctica constante. Comienza implementando estas técnicas gradualmente y verás mejoras en tu rendimiento y comodidad al correr.

Recuerda: cada corredor es diferente. Experimenta con diferentes técnicas hasta encontrar la que mejor funcione para ti.`
  }
]

// Ejemplo de artículo completo usando el sistema de secciones
export const sampleArticleWithSections = {
  id: 'sample-breathing-techniques',
  slug: 'tecnicas-respiracion-avanzadas-running',
  title: 'Técnicas avanzadas de respiración para corredores',
  excerpt: 'Descubre técnicas avanzadas de respiración que mejorarán tu rendimiento y resistencia en el running.',
  category: SPORT_CATEGORIES.RUNNING,
  author: 'Carlos Mendez',
  publishedAt: '2024-01-20',
  featuredImage: '/images/runner-road.webp',
  readTime: '8 min',
  tags: ['respiración', 'técnica avanzada', 'running', 'rendimiento'],
  content: sampleArticleSections // Nuevo sistema de secciones
}
