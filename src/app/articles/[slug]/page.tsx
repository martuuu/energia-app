import { AppLayout } from '@/components/common/AppLayout'
import { BackButton } from '@/components/common/BackButton'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArticleContentRenderer } from '@/components/content-sections/ArticleContentRenderer'
import { SPORT_CATEGORIES, SPORT_LABELS } from '@/constants'
import { articles } from '@/data/articles'
import { mockArticles } from '@/data/mockData'
import { ArticleSection } from '@/types/content-sections'
import { Calendar, User, Clock, Share2, Bookmark } from 'lucide-react'
import Image from 'next/image'
import { notFound } from 'next/navigation'

interface ArticlePageProps {
  params: Promise<{
    slug: string
  }>
}

interface ArticleLink {
  label: string
  url: string
  description?: string
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

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params
  
  // Buscar el artículo por slug en el sistema consolidado y legacy
  const consolidatedArticle = articles.find(a => a.slug === slug)
  const legacyArticle = mockArticles.find(a => a.slug === slug)
  
  const article = consolidatedArticle || legacyArticle

  if (!article) {
    notFound()
  }

  // Determinar si el contenido es legacy (string) o nuevo (secciones)
  const isLegacyContent = typeof article.content === 'string'
  const sections = !isLegacyContent ? article.content as ArticleSection[] : null
  
  // Verificar si la primera sección es un video
  const hasVideoFirst = sections && sections.length > 0 && 
    sections.sort((a, b) => a.order - b.order)[0].type === 'video'

  return (
    <AppLayout userName="Usuario Demo">
      <div className={`${hasVideoFirst ? '' : 'container mx-auto px-4 py-6'}`}>
        {/* Content wrapper para artículos con video */}
        {hasVideoFirst ? (
          <>
            {/* Header compacto para artículos con video */}
            <div className="bg-primary-dark">
              <div className="container mx-auto px-4 py-6">
                <BackButton href="/articles" label="Volver a artículos" />
                
                <div className="mb-6">
                  <div className="mb-4 flex flex-wrap items-center gap-4">
                    <Badge className={getCategoryColor(article.category)}>
                      {SPORT_LABELS[article.category as keyof typeof SPORT_LABELS]}
                    </Badge>
                    <div className="flex items-center gap-4 text-sm text-cream-white/80">
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        {article.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {new Date(article.publishedAt).toLocaleDateString('es-ES')}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {article.readTime}
                      </div>
                    </div>
                  </div>

                  <h1 className="mb-4 text-4xl font-bold text-cream-white lg:text-5xl">
                    {article.title}
                  </h1>

                  <p className="text-xl text-cream-white/90 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>
              </div>
            </div>
            
            {/* Contenido del artículo con video - sin container para ocupar todo el ancho */}
            <ArticleContentRenderer sections={sections || []} />
            
            {/* Enlaces sugeridos para artículos con video - con background correcto */}
            {article.links && article.links.length > 0 && (
              <div className="bg-cream-white py-12">
                <div className="container mx-auto px-4">
                  <div className="max-w-6xl mx-auto">
                    <Card className="bg-white border-none shadow-lg">
                      <CardContent className="p-8">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">
                          Entrenamientos sugeridos
                        </h3>
                        <div className="grid gap-4 sm:grid-cols-2">
                          {article.links.map((link: ArticleLink, index: number) => (
                            <a
                              key={index}
                              href={link.url}
                              className="block p-4 bg-orange-50 border border-team-orange/20 rounded-lg hover:bg-orange-100 transition-colors group"
                            >
                              <h4 className="font-medium text-team-orange group-hover:text-team-orange-light mb-1">
                                {link.label}
                              </h4>
                              {link.description && (
                                <p className="text-sm text-gray-600">
                                  {link.description}
                                </p>
                              )}
                            </a>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation para artículos con video */}
            <div className="bg-primary-dark py-12">
              <div className="container mx-auto px-4">
                <div className="flex justify-between">
                  <BackButton href="/articles" label="← Todos los artículos" />
                  <Button variant="outline" className="border-team-orange text-team-orange hover:bg-team-orange hover:text-cream-white">
                    Siguiente artículo →
                  </Button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Layout normal para artículos sin video */}
            <BackButton href="/articles" label="Volver a artículos" />

            {/* Article Header */}
            <div className="mb-8">
              <div className="mb-4 flex flex-wrap items-center gap-4">
                <Badge className={getCategoryColor(article.category)}>
                  {SPORT_LABELS[article.category as keyof typeof SPORT_LABELS]}
                </Badge>
                <div className="flex items-center gap-4 text-sm text-cream-white/80">
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    {article.author}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {new Date(article.publishedAt).toLocaleDateString('es-ES')}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {article.readTime}
                  </div>
                </div>
              </div>

              <h1 className="mb-4 text-4xl font-bold text-cream-white lg:text-5xl">
                {article.title}
              </h1>

              <p className="text-xl text-cream-white/90 leading-relaxed">
                {article.excerpt}
              </p>
            </div>

            {/* Featured Image - Solo mostrar si no hay video como primera sección */}
            <div className="mb-8 relative h-64 md:h-96 w-full rounded-lg overflow-hidden">
              <Image
                src={article.featuredImage}
                alt={article.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                priority
              />
            </div>

            {/* Article Actions */}
            <div className="mb-8 flex flex-wrap gap-2">
              <Button variant="outline" size="sm" className="border-team-orange text-team-orange hover:bg-team-orange hover:text-cream-white">
                <Share2 className="mr-2 h-4 w-4" />
                Compartir
              </Button>
              <Button variant="outline" size="sm" className="border-team-blue text-team-blue hover:bg-team-blue hover:text-cream-white">
                <Bookmark className="mr-2 h-4 w-4" />
                Guardar
              </Button>
            </div>

            {/* Article Content Layout Normal */}
            <div className="grid gap-8 lg:grid-cols-4">
              {/* Main Content */}
              <div className="lg:col-span-3">
                <Card className="bg-cream-white border-none shadow-lg">
                  <CardContent className="p-8">
                    {isLegacyContent ? (
                      <div className="prose prose-lg max-w-none">
                        <div className="whitespace-pre-line text-gray-800 leading-relaxed">
                          {article.content as string}
                        </div>
                      </div>
                    ) : (
                      <ArticleContentRenderer sections={sections || []} />
                    )}

                    {/* Enlaces sugeridos a entrenamientos */}
                    {article.links && article.links.length > 0 && (
                      <div className="mt-12 pt-8 border-t border-gray-200">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">
                          Entrenamientos sugeridos
                        </h3>
                        <div className="grid gap-4 sm:grid-cols-2">
                          {article.links.map((link: ArticleLink, index: number) => (
                            <a
                              key={index}
                              href={link.url}
                              className="block p-4 bg-orange-50 border border-team-orange/20 rounded-lg hover:bg-orange-100 transition-colors group"
                            >
                              <h4 className="font-medium text-team-orange group-hover:text-team-orange-light mb-1">
                                {link.label}
                              </h4>
                              {link.description && (
                                <p className="text-sm text-gray-600">
                                  {link.description}
                                </p>
                              )}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-4 space-y-6">
                  {/* Tags */}
                  <Card className="bg-cream-white border-none shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="mb-4 font-semibold text-gray-800">Etiquetas</h3>
                      <div className="flex flex-wrap gap-2">
                        {article.tags.map((tag: string) => (
                          <Badge key={tag} variant="outline" className="border-team-orange text-team-orange">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Related Articles */}
                  <Card className="bg-cream-white border-none shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="mb-4 font-semibold text-gray-800">Artículos relacionados</h3>
                      <div className="space-y-4">
                        {mockArticles
                          .filter(a => a.id !== article.id && a.category === article.category)
                          .slice(0, 2)
                          .map((relatedArticle) => (
                            <div key={relatedArticle.id} className="group">
                              <a 
                                href={`/articles/${relatedArticle.slug}`}
                                className="block text-sm font-medium text-gray-800 hover:text-team-orange transition-colors"
                              >
                                {relatedArticle.title}
                              </a>
                              <p className="mt-1 text-xs text-gray-600">{relatedArticle.readTime}</p>
                            </div>
                          ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="mt-12 flex justify-between">
              <BackButton href="/articles" label="← Todos los artículos" />
              <Button variant="outline" className="border-team-orange text-team-orange hover:bg-team-orange hover:text-cream-white">
                Siguiente artículo →
              </Button>
            </div>
          </>
        )}
      </div>
    </AppLayout>
  )
}
