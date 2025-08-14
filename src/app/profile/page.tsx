import { AppLayout } from '@/components/common/AppLayout'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  User, 
  Settings, 
  Trophy, 
  Calendar, 
  Activity, 
  Target,
  Medal,
  TrendingUp,
  Heart,
  Zap,
  Award
} from 'lucide-react'

// Mock user data
const userData = {
  name: 'Usuario Demo',
  email: 'usuario@demo.com',
  memberSince: '2023-01-15',
  membershipType: 'Premium',
  avatar: '/placeholder-avatar.jpg',
  bio: 'Apasionado por el deporte y la vida saludable. Me encanta desafiarme en diferentes disciplinas.',
  location: 'Buenos Aires, Argentina',
  age: 28,
  stats: {
    totalWorkouts: 156,
    totalDistance: 1250, // km
    totalTime: 12450, // minutes
    eventsCompleted: 8,
  },
  currentGoals: [
    {
      id: '1',
      title: 'Correr 10K en menos de 45 min',
      progress: 75,
      target: '45:00',
      current: '48:30',
      category: 'running',
    },
    {
      id: '2',
      title: 'Nadar 1500m sin parar',
      progress: 60,
      target: '1500m',
      current: '900m',
      category: 'swimming',
    },
    {
      id: '3',
      title: 'Completar un Ironman 70.3',
      progress: 30,
      target: 'Diciembre 2024',
      current: 'En entrenamiento',
      category: 'triathlon',
    },
  ],
  recentAchievements: [
    {
      id: '1',
      title: 'Primer Maratón',
      description: 'Completaste tu primer maratón de 42K',
      date: '2024-02-15',
      icon: Medal,
      color: 'bg-yellow-500',
    },
    {
      id: '2',
      title: '100 Entrenamientos',
      description: 'Alcanzaste 100 sesiones de entrenamiento',
      date: '2024-01-28',
      icon: Trophy,
      color: 'bg-team-blue',
    },
    {
      id: '3',
      title: 'Constancia Mensual',
      description: 'Entrenaste todos los días del mes',
      date: '2024-01-31',
      icon: Calendar,
      color: 'bg-team-orange',
    },
  ],
  favoriteActivities: ['running', 'swimming', 'cycling'],
}

const getActivityIcon = (activity: string) => {
  switch (activity) {
    case 'running':
      return Activity
    case 'swimming':
      return Heart
    case 'cycling':
      return Zap
    default:
      return Activity
  }
}

const getActivityLabel = (activity: string) => {
  switch (activity) {
    case 'running':
      return 'Running'
    case 'swimming':
      return 'Natación'
    case 'cycling':
      return 'Ciclismo'
    default:
      return activity
  }
}

export default function ProfilePage() {
  return (
    <AppLayout userName={userData.name}>
      <div className="container mx-auto px-4 py-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="mb-4 text-3xl font-bold text-team-blue">
            Mi Perfil
          </h1>
          <p className="text-lg text-gray-600">
            Gestiona tu información y revisa tu progreso deportivo
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Profile Info */}
          <div className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="mx-auto mb-4 h-24 w-24 rounded-full bg-gradient-to-br from-team-blue to-team-orange p-1">
                    <div className="flex h-full w-full items-center justify-center rounded-full bg-white">
                      <User className="h-12 w-12 text-team-blue" />
                    </div>
                  </div>
                  <h2 className="mb-1 text-xl font-bold text-team-blue-dark">
                    {userData.name}
                  </h2>
                  <p className="mb-2 text-gray-600">{userData.email}</p>
                  <Badge className="bg-team-orange text-white">
                    {userData.membershipType}
                  </Badge>
                </div>
                
                <div className="mt-6 space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Miembro desde:</span>
                    <span className="font-medium">
                      {new Date(userData.memberSince).toLocaleDateString('es-ES', {
                        year: 'numeric',
                        month: 'long'
                      })}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Ubicación:</span>
                    <span className="font-medium">{userData.location}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Edad:</span>
                    <span className="font-medium">{userData.age} años</span>
                  </div>
                </div>

                <div className="mt-6">
                  <Button className="w-full bg-team-blue hover:bg-team-blue-dark">
                    <Settings className="mr-2 h-4 w-4" />
                    Editar perfil
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="text-team-blue">
                  Estadísticas rápidas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="mb-1 text-2xl font-bold text-team-blue">
                      {userData.stats.totalWorkouts}
                    </div>
                    <div className="text-xs text-gray-600">Entrenamientos</div>
                  </div>
                  <div className="text-center">
                    <div className="mb-1 text-2xl font-bold text-team-orange">
                      {userData.stats.totalDistance}
                    </div>
                    <div className="text-xs text-gray-600">Km totales</div>
                  </div>
                  <div className="text-center">
                    <div className="mb-1 text-2xl font-bold text-team-blue-dark">
                      {Math.round(userData.stats.totalTime / 60)}
                    </div>
                    <div className="text-xs text-gray-600">Horas</div>
                  </div>
                  <div className="text-center">
                    <div className="mb-1 text-2xl font-bold text-team-orange-light">
                      {userData.stats.eventsCompleted}
                    </div>
                    <div className="text-xs text-gray-600">Eventos</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Current Goals */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-team-blue">
                  <Target className="mr-2 h-5 w-5" />
                  Objetivos actuales
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {userData.currentGoals.map((goal) => (
                    <div key={goal.id} className="rounded-lg border border-gray-200 p-4">
                      <div className="mb-2 flex items-center justify-between">
                        <h4 className="font-medium text-team-blue-dark">
                          {goal.title}
                        </h4>
                        <Badge variant="outline" className="border-team-blue text-team-blue">
                          {goal.progress}%
                        </Badge>
                      </div>
                      
                      <div className="mb-2 h-2 overflow-hidden rounded-full bg-gray-200">
                        <div 
                          className="h-full bg-team-blue transition-all duration-300"
                          style={{ width: `${goal.progress}%` }}
                        />
                      </div>
                      
                      <div className="flex justify-between text-sm text-gray-600">
                        <span>Actual: {goal.current}</span>
                        <span>Meta: {goal.target}</span>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-4">
                  <Button variant="outline" className="w-full border-team-blue text-team-blue hover:bg-team-blue hover:text-white">
                    <Target className="mr-2 h-4 w-4" />
                    Agregar nuevo objetivo
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Recent Achievements */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-team-blue">
                  <Award className="mr-2 h-5 w-5" />
                  Logros recientes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {userData.recentAchievements.map((achievement) => {
                    const IconComponent = achievement.icon
                    return (
                      <div key={achievement.id} className="flex items-center space-x-4">
                        <div className={`flex h-12 w-12 items-center justify-center rounded-full ${achievement.color}`}>
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-team-blue-dark">
                            {achievement.title}
                          </h4>
                          <p className="text-sm text-gray-600">
                            {achievement.description}
                          </p>
                        </div>
                        <div className="text-xs text-gray-500">
                          {new Date(achievement.date).toLocaleDateString('es-ES')}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Favorite Activities */}
            <Card>
              <CardHeader>
                <CardTitle className="text-team-blue">
                  Actividades favoritas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  {userData.favoriteActivities.map((activity, index) => {
                    const IconComponent = getActivityIcon(activity)
                    return (
                      <div
                        key={index}
                        className="flex items-center space-x-2 rounded-full bg-team-blue-pastel px-4 py-2"
                      >
                        <IconComponent className="h-4 w-4 text-team-blue" />
                        <span className="text-sm font-medium text-team-blue-dark">
                          {getActivityLabel(activity)}
                        </span>
                      </div>
                    )
                  })}
                </div>
                
                <div className="mt-4">
                  <Button variant="outline" className="border-team-orange text-team-orange hover:bg-team-orange hover:text-white">
                    <TrendingUp className="mr-2 h-4 w-4" />
                    Ver progreso detallado
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </AppLayout>
  )
}
