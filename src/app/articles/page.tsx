import { AppLayout } from '@/components/common/AppLayout'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { SPORT_CATEGORIES, SPORT_LABELS } from '@/constants'

// Mock data para artículos
const mockArticles = [
  {
    id: '1',
    title: 'Técnicas de respiración para corredores principiantes',
    excerpt: 'Aprende las mejores técnicas de respiración para mejorar tu rendimiento en el running.',
    category: SPORT_CATEGORIES.RUNNING,
    author: 'Carlos Mendez',
    publishedAt: '2024-01-15',
    featuredImage: '',
    readTime: '5 min',
  },
  {
    id: '2',
    title: 'Entrenamiento de fuerza para nadadores',
    excerpt: 'Ejercicios específicos para desarrollar la fuerza necesaria en natación.',
    category: SPORT_CATEGORIES.SWIMMING,
    author: 'Ana Torres',
    publishedAt: '2024-01-12',
    featuredImage: '',
    readTime: '8 min',
  },
  {
    id: '3',
    title: 'Mantenimiento básico de tu bicicleta',
    excerpt: 'Guía completa para mantener tu bicicleta en perfectas condiciones.',
    category: SPORT_CATEGORIES.CYCLING,
    author: 'Luis Rodriguez',
    publishedAt: '2024-01-10',
    featuredImage: '',
    readTime: '10 min',
  },
  {
    id: '4',
    title: 'Planificación de temporada para triatletas',
    excerpt: 'Cómo estructurar tu entrenamiento anual para maximizar el rendimiento.',
    category: SPORT_CATEGORIES.TRIATHLON,
    author: 'Maria Gonzalez',
    publishedAt: '2024-01-08',
    featuredImage: '',
    readTime: '12 min',
  },
]

const getCategoryColor = (category: string) => {
  switch (category) {
    case SPORT_CATEGORIES.RUNNING:
      return 'bg-team-blue text-white'
    case SPORT_CATEGORIES.SWIMMING:
      return 'bg-team-orange text-white'
    case SPORT_CATEGORIES.CYCLING:
      return 'bg-team-blue-dark text-white'
    case SPORT_CATEGORIES.TRIATHLON:
      return 'bg-team-orange-light text-white'
    default:
      return 'bg-gray-500 text-white'
  }
}

export default function ArticlesPage() {
  return (
    <AppLayout userName="Usuario Demo">
      <div className="container mx-auto px-4 py-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="mb-4 text-3xl font-bold text-team-blue">
            Artículos Técnicos
          </h1>
          <p className="text-lg text-gray-600">
            Contenido especializado para mejorar tu rendimiento deportivo
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="mb-8 flex flex-wrap gap-2">
          <Button variant="default" className="bg-team-blue hover:bg-team-blue-dark">
            Todos
          </Button>
          <Button variant="outline" className="border-team-blue text-team-blue hover:bg-team-blue-pastel">
            Running
          </Button>
          <Button variant="outline" className="border-team-orange text-team-orange hover:bg-team-orange-pastel">
            Natación
          </Button>
          <Button variant="outline" className="border-team-blue text-team-blue hover:bg-team-blue-pastel">
            Ciclismo
          </Button>
          <Button variant="outline" className="border-team-orange text-team-orange hover:bg-team-orange-pastel">
            Triatlón
          </Button>
        </div>

        {/* Articles Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {mockArticles.map((article) => (
            <Card
              key={article.id}
              className="overflow-hidden transition-transform hover:scale-105 hover:shadow-lg"
            >
              <div className="h-48 bg-gradient-to-br from-team-blue-pastel to-team-orange-pastel" />
              
              <CardHeader className="pb-3">
                <div className="mb-2 flex items-center justify-between">
                  <Badge className={getCategoryColor(article.category)}>
                    {SPORT_LABELS[article.category as keyof typeof SPORT_LABELS]}
                  </Badge>
                  <span className="text-xs text-gray-500">{article.readTime}</span>
                </div>
                <CardTitle className="line-clamp-2 text-lg text-team-blue-dark">
                  {article.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="pt-0">
                <p className="mb-4 line-clamp-3 text-sm text-gray-600">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="text-xs text-gray-500">
                    <p>Por {article.author}</p>
                    <p>{new Date(article.publishedAt).toLocaleDateString('es-ES')}</p>
                  </div>
                  <Button size="sm" variant="outline" className="border-team-blue text-team-blue hover:bg-team-blue hover:text-white">
                    Leer más
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="mt-8 text-center">
          <Button variant="outline" className="border-team-blue text-team-blue hover:bg-team-blue hover:text-white">
            Cargar más artículos
          </Button>
        </div>
      </div>
    </AppLayout>
  )
}
