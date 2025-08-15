import { AppLayout } from '@/components/common/AppLayout'
import { BackButton } from '@/components/common/BackButton'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Clock, Users, Dumbbell, Target, CheckCircle, AlertTriangle } from 'lucide-react'
import { exercises, EXERCISE_LABELS } from '@/data/exercises'
import Image from 'next/image'
import { notFound } from 'next/navigation'

interface ExercisePageProps {
  params: Promise<{
    id: string
  }>
}

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
    case 'running':
      return 'bg-team-blue text-cream-white'
    case 'swimming':
      return 'bg-team-orange text-cream-white'
    case 'cycling':
      return 'bg-team-blue-dark text-cream-white'
    case 'triathlon':
      return 'bg-team-orange-light text-cream-white'
    case 'functional':
      return 'bg-purple-600 text-cream-white'
    default:
      return 'bg-gray-500 text-cream-white'
  }
}

export default async function ExercisePage({ params }: ExercisePageProps) {
  const { id } = await params
  
  // Buscar el ejercicio por ID
  const exercise = exercises.find(ex => ex.id === id)

  if (!exercise) {
    notFound()
  }

  return (
    <AppLayout userName="Usuario Demo">
      <div className="container mx-auto px-4 py-6">
        {/* Back Button */}
        <BackButton href="/trainings" label="Volver a entrenamientos" />

        {/* Exercise Header */}
        <div className="mb-8">
          <div className="mb-4 flex flex-wrap items-center gap-4">
            <Badge className={getDifficultyColor(exercise.difficulty)}>
              {exercise.difficulty}
            </Badge>
            <div className="flex flex-wrap gap-2">
              {exercise.categories.map((category) => (
                <Badge key={category} className={getCategoryColor(category)}>
                  {EXERCISE_LABELS[category as keyof typeof EXERCISE_LABELS]}
                </Badge>
              ))}
            </div>
          </div>

          <h1 className="mb-4 text-4xl font-bold text-cream-white lg:text-5xl">
            {exercise.title}
          </h1>

          <p className="text-xl text-cream-white/90 leading-relaxed">
            {exercise.description}
          </p>
        </div>

        {/* Featured Image */}
        <div className="mb-8 relative h-64 md:h-96 w-full rounded-lg overflow-hidden">
          <Image
            src={exercise.featuredImage}
            alt={exercise.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
            priority
          />
        </div>

        {/* Exercise Info */}
        <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Card className="bg-cream-white border-none shadow-lg">
            <CardContent className="p-4 text-center">
              <Clock className="mx-auto mb-2 h-8 w-8 text-team-orange" />
              <p className="text-sm text-gray-600">Duración</p>
              <p className="font-semibold text-gray-800">{exercise.duration}</p>
            </CardContent>
          </Card>
          
          <Card className="bg-cream-white border-none shadow-lg">
            <CardContent className="p-4 text-center">
              <Target className="mx-auto mb-2 h-8 w-8 text-team-blue" />
              <p className="text-sm text-gray-600">Dificultad</p>
              <p className="font-semibold text-gray-800 capitalize">{exercise.difficulty}</p>
            </CardContent>
          </Card>
          
          <Card className="bg-cream-white border-none shadow-lg">
            <CardContent className="p-4 text-center">
              <Dumbbell className="mx-auto mb-2 h-8 w-8 text-purple-600" />
              <p className="text-sm text-gray-600">Equipos</p>
              <p className="font-semibold text-gray-800">{exercise.equipment.length}</p>
            </CardContent>
          </Card>
          
          <Card className="bg-cream-white border-none shadow-lg">
            <CardContent className="p-4 text-center">
              <Users className="mx-auto mb-2 h-8 w-8 text-green-600" />
              <p className="text-sm text-gray-600">Instructor</p>
              <p className="font-semibold text-gray-800">{exercise.author}</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Instructions and Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Instructions */}
            <Card className="bg-cream-white border-none shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-gray-800">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  Instrucciones paso a paso
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="space-y-3">
                  {exercise.instructions.map((instruction, index) => (
                    <li key={index} className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-team-orange text-cream-white text-sm font-bold rounded-full flex items-center justify-center">
                        {index + 1}
                      </span>
                      <span className="text-gray-700">{instruction}</span>
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>

            {/* Tips */}
            <Card className="bg-cream-white border-none shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-gray-800">
                  <AlertTriangle className="h-6 w-6 text-yellow-600" />
                  Consejos importantes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {exercise.tips.map((tip, index) => (
                    <li key={index} className="flex gap-3">
                      <span className="flex-shrink-0 w-2 h-2 bg-yellow-600 rounded-full mt-2"></span>
                      <span className="text-gray-700">{tip}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-4 space-y-6">
              {/* Equipment */}
              <Card className="bg-cream-white border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="text-gray-800">Equipamiento necesario</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {exercise.equipment.map((equipment, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <Dumbbell className="h-4 w-4 text-purple-600" />
                        <span className="text-gray-700">{equipment}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Muscles */}
              <Card className="bg-cream-white border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="text-gray-800">Músculos trabajados</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {exercise.muscles.map((muscle) => (
                      <Badge key={muscle} variant="outline" className="border-team-orange text-team-orange">
                        {muscle}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Tags */}
              <Card className="bg-cream-white border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="text-gray-800">Etiquetas</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {exercise.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="border-team-blue text-team-blue">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Related Exercises */}
              <Card className="bg-cream-white border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="text-gray-800">Ejercicios relacionados</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {exercises
                      .filter(ex => 
                        ex.id !== exercise.id && 
                        ex.categories.some(cat => exercise.categories.includes(cat))
                      )
                      .slice(0, 3)
                      .map((relatedExercise) => (
                        <div key={relatedExercise.id} className="group">
                          <a 
                            href={`/trainings/${relatedExercise.id}`}
                            className="block text-sm font-medium text-gray-800 hover:text-team-orange transition-colors"
                          >
                            {relatedExercise.title}
                          </a>
                          <p className="mt-1 text-xs text-gray-600">{relatedExercise.duration}</p>
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
          <BackButton href="/trainings" label="← Todos los entrenamientos" />
          <Button variant="outline" className="border-team-orange text-team-orange hover:bg-team-orange hover:text-cream-white">
            Siguiente ejercicio →
          </Button>
        </div>
      </div>
    </AppLayout>
  )
}
