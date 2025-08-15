'use client'

import { useState } from 'react'
import { AppLayout } from '@/components/common/AppLayout'
import { BackButton } from '@/components/common/BackButton'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Clock, Users, Dumbbell } from 'lucide-react'
import { exercises, EXERCISE_CATEGORIES, EXERCISE_LABELS } from '@/data/exercises'
import Image from 'next/image'
import Link from 'next/link'

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case 'principiante':
      return 'bg-green-500 text-white'
    case 'intermedio':
      return 'bg-yellow-500 text-white'
    case 'avanzado':
      return 'bg-red-500 text-white'
    default:
      return 'bg-gray-500 text-white'
  }
}

const getCategoryColor = (category: string) => {
  switch (category) {
    case EXERCISE_CATEGORIES.RUNNING:
      return 'bg-team-blue text-cream-white'
    case EXERCISE_CATEGORIES.SWIMMING:
      return 'bg-team-orange text-cream-white'
    case EXERCISE_CATEGORIES.CYCLING:
      return 'bg-team-blue-dark text-cream-white'
    case EXERCISE_CATEGORIES.TRIATHLON:
      return 'bg-team-orange-light text-cream-white'
    case EXERCISE_CATEGORIES.FUNCTIONAL:
      return 'bg-purple-600 text-cream-white'
    default:
      return 'bg-gray-500 text-cream-white'
  }
}

export default function TrainingsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all')
  const [displayCount, setDisplayCount] = useState(6) // Mostrar 6 inicialmente

  // Filtrar ejercicios por categoría y dificultad
  const filteredExercises = exercises.filter(exercise => {
    const categoryMatch = selectedCategory === 'all' || exercise.categories.includes(selectedCategory)
    const difficultyMatch = selectedDifficulty === 'all' || exercise.difficulty === selectedDifficulty
    return categoryMatch && difficultyMatch
  })

  // Ejercicios para mostrar (con paginación)
  const displayedExercises = filteredExercises.slice(0, displayCount)
  const hasMore = displayCount < filteredExercises.length

  const handleCategoryFilter = (category: string) => {
    setSelectedCategory(category)
    setDisplayCount(6) // Reset al cambiar categoría
  }

  const handleDifficultyFilter = (difficulty: string) => {
    setSelectedDifficulty(difficulty)
    setDisplayCount(6) // Reset al cambiar dificultad
  }

  const loadMore = () => {
    setDisplayCount(prev => prev + 6)
  }

  return (
    <AppLayout userName="Usuario Demo">
      <div className="container mx-auto px-4 py-6">
        {/* Back Button */}
        <BackButton href="/" />
        
        {/* Header */}
        <div className="mb-8">
          <h1 className="mb-4 text-3xl font-bold text-cream-white">
            Entrenamientos y Ejercicios
          </h1>
          <p className="text-lg text-cream-white">
            Rutinas específicas para mejorar tu rendimiento en cada disciplina
          </p>
        </div>

        {/* Category Filter Buttons */}
        <div className="mb-6">
          <h3 className="mb-3 text-sm font-medium text-cream-white">Filtrar por disciplina:</h3>
          <div className="flex flex-wrap gap-2">
            <Button 
              variant={selectedCategory === 'all' ? 'default' : 'outline'}
              onClick={() => handleCategoryFilter('all')}
              className={selectedCategory === 'all' 
                ? 'bg-team-orange hover:bg-team-orange-light text-cream-white' 
                : 'border-team-orange text-team-orange hover:bg-team-orange hover:text-cream-white'
              }
            >
              Todos ({exercises.length})
            </Button>
            {Object.entries(EXERCISE_LABELS).map(([key, label]) => {
              const count = exercises.filter(ex => ex.categories.includes(key)).length
              return (
                <Button 
                  key={key}
                  variant={selectedCategory === key ? 'default' : 'outline'}
                  onClick={() => handleCategoryFilter(key)}
                  className={selectedCategory === key
                    ? `${getCategoryColor(key)} hover:opacity-80`
                    : `border-team-orange text-team-orange hover:bg-team-orange hover:text-cream-white`
                  }
                >
                  {label} ({count})
                </Button>
              )
            })}
          </div>
        </div>

        {/* Difficulty Filter Buttons */}
        <div className="mb-8">
          <h3 className="mb-3 text-sm font-medium text-cream-white">Filtrar por dificultad:</h3>
          <div className="flex flex-wrap gap-2">
            <Button 
              variant={selectedDifficulty === 'all' ? 'default' : 'outline'}
              onClick={() => handleDifficultyFilter('all')}
              className={selectedDifficulty === 'all' 
                ? 'bg-team-blue hover:bg-team-blue-dark text-cream-white' 
                : 'border-team-blue text-team-blue hover:bg-team-blue hover:text-cream-white'
              }
            >
              Todas
            </Button>
            {['principiante', 'intermedio', 'avanzado'].map((difficulty) => {
              const count = exercises.filter(ex => ex.difficulty === difficulty).length
              return (
                <Button 
                  key={difficulty}
                  variant={selectedDifficulty === difficulty ? 'default' : 'outline'}
                  onClick={() => handleDifficultyFilter(difficulty)}
                  className={selectedDifficulty === difficulty
                    ? `${getDifficultyColor(difficulty)} hover:opacity-80`
                    : 'border-team-blue text-team-blue hover:bg-team-blue hover:text-cream-white'
                  }
                >
                  {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)} ({count})
                </Button>
              )
            })}
          </div>
        </div>

        {/* Exercises Grid - Optimizado para móvil */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {displayedExercises.map((exercise) => (
            <Card
              key={exercise.id}
              className="bg-cream-white border-none shadow-lg overflow-hidden transition-all duration-200 hover:shadow-xl hover:scale-[1.02] h-full"
            >
              {/* Imagen optimizada para móvil */}
              <div className="relative h-48 sm:h-56 w-full">
                <Image
                  src={exercise.featuredImage}
                  alt={exercise.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Overlay con dificultad */}
                <div className="absolute top-3 left-3">
                  <Badge className={getDifficultyColor(exercise.difficulty)}>
                    {exercise.difficulty}
                  </Badge>
                </div>
              </div>
              
              {/* Contenido optimizado para lectura móvil */}
              <CardContent className="p-4 sm:p-6">
                <div className="mb-3 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {exercise.categories.slice(0, 2).map((category) => (
                      <Badge key={category} className={getCategoryColor(category)} variant="secondary">
                        {EXERCISE_LABELS[category as keyof typeof EXERCISE_LABELS]}
                      </Badge>
                    ))}
                    {exercise.categories.length > 2 && (
                      <span className="text-xs text-gray-400">
                        +{exercise.categories.length - 2}
                      </span>
                    )}
                  </div>
                </div>
                
                <h3 className="mb-3 text-lg sm:text-xl font-semibold text-gray-800 line-clamp-2">
                  {exercise.title}
                </h3>
                
                <p className="mb-4 text-sm text-gray-600 line-clamp-3 leading-relaxed">
                  {exercise.description}
                </p>
                
                {/* Información del ejercicio */}
                <div className="mb-4 space-y-2">
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <Clock className="h-4 w-4" />
                    <span>{exercise.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <Dumbbell className="h-4 w-4" />
                    <span>{exercise.equipment.slice(0, 2).join(', ')}</span>
                    {exercise.equipment.length > 2 && <span>+{exercise.equipment.length - 2} más</span>}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <Users className="h-4 w-4" />
                    <span>{exercise.author}</span>
                  </div>
                </div>
                
                {/* Músculos principales */}
                <div className="mb-4">
                  <p className="text-xs text-gray-500 mb-1">Músculos:</p>
                  <div className="flex flex-wrap gap-1">
                    {exercise.muscles.slice(0, 3).map((muscle) => (
                      <span
                        key={muscle}
                        className="inline-block px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded"
                      >
                        {muscle}
                      </span>
                    ))}
                    {exercise.muscles.length > 3 && (
                      <span className="text-xs text-gray-400">
                        +{exercise.muscles.length - 3} más
                      </span>
                    )}
                  </div>
                </div>

                {/* Botón de ver ejercicio */}
                <Button 
                  className="w-full bg-team-orange hover:bg-team-orange-light text-cream-white"
                  asChild
                >
                  <Link href={`/trainings/${exercise.id}`}>
                    Ver Ejercicio
                  </Link>
                </Button>
              </CardContent>
            </Card>
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
              Cargar más ejercicios ({filteredExercises.length - displayCount} restantes)
            </Button>
          </div>
        )}

        {/* No results message */}
        {filteredExercises.length === 0 && (
          <div className="text-center py-12">
            <p className="text-cream-white text-lg">
              No hay ejercicios que coincidan con los filtros seleccionados
            </p>
          </div>
        )}
      </div>
    </AppLayout>
  )
}
