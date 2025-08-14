import { AppLayout } from '@/components/common/AppLayout'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { SPORT_CATEGORIES, SPORT_LABELS } from '@/constants'
import Image from 'next/image'

// Mock data para artículos
const mockArticles = [
  {
    id: '1',
    title: 'Técnicas de respiración para corredores principiantes',
    excerpt: 'Aprende las mejores técnicas de respiración para mejorar tu rendimiento en el running.',
    category: SPORT_CATEGORIES.RUNNING,
    author: 'Carlos Mendez',
    publishedAt: '2024-01-15',
    featuredImage: '/images/runner-road.webp',
    readTime: '5 min',
  },
  {
    id: '2',
    title: 'Entrenamiento de fuerza para nadadores',
    excerpt: 'Ejercicios específicos para desarrollar la fuerza necesaria en natación.',
    category: SPORT_CATEGORIES.SWIMMING,
    author: 'Ana Torres',
    publishedAt: '2024-01-12',
    featuredImage: '/images/la-plata.png',
    readTime: '8 min',
  },
  {
    id: '3',
    title: 'Mantenimiento básico de tu bicicleta',
    excerpt: 'Guía completa para mantener tu bicicleta en perfectas condiciones.',
    category: SPORT_CATEGORIES.CYCLING,
    author: 'Luis Rodriguez',
    publishedAt: '2024-01-10',
    featuredImage: '/images/mardel.png',
    readTime: '10 min',
  },
  {
    id: '4',
    title: 'Planificación de temporada para triatletas',
    excerpt: 'Cómo estructurar tu entrenamiento anual para maximizar el rendimiento.',
    category: SPORT_CATEGORIES.TRIATHLON,
    author: 'Maria Gonzalez',
    publishedAt: '2024-01-08',
    featuredImage: '/images/mardel.png',
    readTime: '12 min',
  },
]

const getCategoryColor = (category: string) => {
  switch (category) {
    case SPORT_CATEGORIES.RUNNING:
      return 'bg-team-blue text-cream-white'
    case SPORT_CATEGORIES.SWIMMING:
      return 'bg-team-orange text-cream-white'
    case SPORT_CATEGORIES.CYCLING:
      return 'bg-team-blue-dark text-cream-white'
    case SPORT_CATEGORIES.TRIATHLON:
      return 'bg-team-orange-light text-cream-white'
    default:
      return 'bg-gray-500 text-cream-white'
  }
}

export default function ArticlesPage() {
  return (
    <AppLayout userName="Usuario Demo">
      <div className="container mx-auto px-4 py-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="mb-4 text-3xl font-bold text-cream-white">
            Artículos Técnicos
          </h1>
          <p className="text-lg text-cream-white">
            Contenido especializado para mejorar tu rendimiento deportivo
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="mb-8 flex flex-wrap gap-2">
          <Button variant="default" className="bg-team-orange hover:bg-team-orange-light text-cream-white">
            Todos
          </Button>
          <Button variant="outline" className="border-team-orange text-team-orange hover:bg-team-orange hover:text-cream-white">
            Running
          </Button>
          <Button variant="outline" className="border-team-orange text-team-orange hover:bg-team-orange hover:text-cream-white">
            Natación
          </Button>
          <Button variant="outline" className="border-team-orange text-team-orange hover:bg-team-orange hover:text-cream-white">
            Ciclismo
          </Button>
          <Button variant="outline" className="border-team-orange text-team-orange hover:bg-team-orange hover:text-cream-white">
            Triatlón
          </Button>
        </div>

        {/* Articles Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {mockArticles.map((article) => (
            <div
              key={article.id}
              className="bg-cream-white border-none shadow-lg overflow-hidden transition-all duration-200 hover:shadow-xl hover:scale-[1.02] rounded-lg"
            >
              {/* Imagen pegada al borde superior */}
              <div className="relative h-48 w-full">
                <Image
                  src={article.featuredImage}
                  alt={article.title}
                  fill
                  className="object-cover rounded-t-lg"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              
              {/* Contenido con padding normal */}
              <div className="p-6">
                <div className="mb-3 flex items-center justify-between">
                  <Badge className={getCategoryColor(article.category)}>
                    {SPORT_LABELS[article.category as keyof typeof SPORT_LABELS]}
                  </Badge>
                  <span className="text-xs text-team-orange-dark font-medium">{article.readTime}</span>
                </div>
                <h3 className="mb-3 text-lg font-semibold text-gray-800 line-clamp-2">
                  {article.title}
                </h3>
                <p className="mb-4 text-sm text-gray-600 line-clamp-3">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="text-xs text-gray-600">
                    <p>Por {article.author}</p>
                    <p>{new Date(article.publishedAt).toLocaleDateString('es-ES')}</p>
                  </div>
                  <Button size="sm" variant="outline" className="border-team-orange text-team-orange hover:bg-team-orange hover:text-cream-white">
                    Leer más
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="mt-8 text-center">
          <Button variant="outline" className="border-team-orange text-team-orange hover:bg-team-orange hover:text-cream-white">
            Cargar más artículos
          </Button>
        </div>
      </div>
    </AppLayout>
  )
}
