'use client'

import { useState } from 'react'
import { AppLayout } from '@/components/common/AppLayout'
import { BackButton } from '@/components/common/BackButton'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { SPORT_CATEGORIES, SPORT_LABELS } from '@/constants'
import { articles } from '@/data/articles'
import Image from 'next/image'
import Link from 'next/link'

// Obtener todos los artículos del nuevo sistema consolidado
const getAllArticles = () => {
  return articles
}

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
  const allArticles = getAllArticles()
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [displayCount, setDisplayCount] = useState(3) // Mostrar 3 inicialmente

  // Filtrar artículos por categoría
  const filteredArticles = selectedCategory === 'all' 
    ? allArticles
    : allArticles.filter(article => article.category === selectedCategory)

  // Artículos para mostrar (con paginación)
  const displayedArticles = filteredArticles.slice(0, displayCount)
  const hasMore = displayCount < filteredArticles.length

  const handleCategoryFilter = (category: string) => {
    setSelectedCategory(category)
    setDisplayCount(3) // Reset al cambiar categoría
  }

  const loadMore = () => {
    setDisplayCount(prev => prev + 3)
  }

  return (
    <AppLayout userName="Usuario Demo">
      <div className="container mx-auto px-4 py-6">
        {/* Back Button */}
        <BackButton href="/" />
        
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
          <Button 
            variant={selectedCategory === 'all' ? 'default' : 'outline'}
            onClick={() => handleCategoryFilter('all')}
            className={selectedCategory === 'all' 
              ? 'bg-team-orange hover:bg-team-orange-light text-cream-white' 
              : 'border-team-orange text-team-orange hover:bg-team-orange hover:text-cream-white'
            }
          >
            Todos ({allArticles.length})
          </Button>
          <Button 
            variant={selectedCategory === SPORT_CATEGORIES.RUNNING ? 'default' : 'outline'}
            onClick={() => handleCategoryFilter(SPORT_CATEGORIES.RUNNING)}
            className={selectedCategory === SPORT_CATEGORIES.RUNNING
              ? 'bg-team-blue hover:bg-team-blue-dark text-cream-white'
              : 'border-team-blue text-team-blue hover:bg-team-blue hover:text-cream-white'
            }
          >
            Running ({allArticles.filter(a => a.category === SPORT_CATEGORIES.RUNNING).length})
          </Button>
          <Button 
            variant={selectedCategory === SPORT_CATEGORIES.SWIMMING ? 'default' : 'outline'}
            onClick={() => handleCategoryFilter(SPORT_CATEGORIES.SWIMMING)}
            className={selectedCategory === SPORT_CATEGORIES.SWIMMING
              ? 'bg-team-orange hover:bg-team-orange-light text-cream-white'
              : 'border-team-orange text-team-orange hover:bg-team-orange hover:text-cream-white'
            }
          >
            Natación ({allArticles.filter(a => a.category === SPORT_CATEGORIES.SWIMMING).length})
          </Button>
          <Button 
            variant={selectedCategory === SPORT_CATEGORIES.CYCLING ? 'default' : 'outline'}
            onClick={() => handleCategoryFilter(SPORT_CATEGORIES.CYCLING)}
            className={selectedCategory === SPORT_CATEGORIES.CYCLING
              ? 'bg-team-blue-dark hover:bg-team-blue text-cream-white'
              : 'border-team-blue-dark text-team-blue-dark hover:bg-team-blue-dark hover:text-cream-white'
            }
          >
            Ciclismo ({allArticles.filter(a => a.category === SPORT_CATEGORIES.CYCLING).length})
          </Button>
          <Button 
            variant={selectedCategory === SPORT_CATEGORIES.TRIATHLON ? 'default' : 'outline'}
            onClick={() => handleCategoryFilter(SPORT_CATEGORIES.TRIATHLON)}
            className={selectedCategory === SPORT_CATEGORIES.TRIATHLON
              ? 'bg-team-orange-light hover:bg-team-orange text-cream-white'
              : 'border-team-orange-light text-team-orange-light hover:bg-team-orange-light hover:text-cream-white'
            }
          >
            Triatlón ({allArticles.filter(a => a.category === SPORT_CATEGORIES.TRIATHLON).length})
          </Button>
        </div>

        {/* Articles Grid - Optimizado para móvil */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {displayedArticles.map((article) => (
            <Link
              key={article.id}
              href={`/articles/${article.slug}`}
              className="group block"
            >
              <div className="bg-cream-white border-none shadow-lg overflow-hidden transition-all duration-200 hover:shadow-xl hover:scale-[1.02] rounded-lg h-full">
                {/* Imagen optimizada para móvil */}
                <div className="relative h-48 sm:h-56 w-full">
                  <Image
                    src={article.featuredImage}
                    alt={article.title}
                    fill
                    className="object-cover rounded-t-lg"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                
                {/* Contenido optimizado para lectura móvil */}
                <div className="p-4 sm:p-6">
                  <div className="mb-3 flex items-center justify-between">
                    <Badge className={getCategoryColor(article.category)}>
                      {SPORT_LABELS[article.category as keyof typeof SPORT_LABELS]}
                    </Badge>
                    <span className="text-xs text-gray-500">{article.readTime}</span>
                  </div>
                  
                  <h3 className="mb-3 text-lg sm:text-xl font-semibold text-gray-800 line-clamp-2 group-hover:text-team-blue transition-colors">
                    {article.title}
                  </h3>
                  
                  <p className="mb-4 text-sm text-gray-600 line-clamp-3 leading-relaxed">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>{article.author}</span>
                    <span>{new Date(article.publishedAt).toLocaleDateString('es-ES')}</span>
                  </div>
                  
                  {/* Tags móvil-friendly */}
                  <div className="mt-3 flex flex-wrap gap-1">
                    {article.tags.slice(0, 2).map((tag: string) => (
                      <span
                        key={tag}
                        className="inline-block px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                    {article.tags.length > 2 && (
                      <span className="text-xs text-gray-400">
                        +{article.tags.length - 2} más
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Load More - Funcional */}
        {hasMore && (
          <div className="mt-8 text-center">
            <Button 
              variant="outline" 
              onClick={loadMore}
              className="border-team-orange text-team-orange hover:bg-team-orange hover:text-cream-white px-8 py-3"
            >
              Cargar más artículos ({filteredArticles.length - displayCount} restantes)
            </Button>
          </div>
        )}

        {/* No results message */}
        {filteredArticles.length === 0 && (
          <div className="text-center py-12">
            <p className="text-cream-white text-lg">
              No hay artículos en esta categoría
            </p>
          </div>
        )}
      </div>
    </AppLayout>
  )
}
