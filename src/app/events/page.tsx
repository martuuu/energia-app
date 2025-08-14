import { AppLayout } from '@/components/common/AppLayout'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Calendar, MapPin, Users } from 'lucide-react'
import { SPORT_CATEGORIES, SPORT_LABELS } from '@/constants'
import Image from 'next/image'

// Mock data para eventos
const mockEvents = [
  {
    id: '1',
    title: 'Maratón Ciudad de Buenos Aires',
    description: 'Participa en uno de los maratones más importantes de Argentina.',
    date: '2024-04-21',
    location: 'Buenos Aires, Argentina',
    category: SPORT_CATEGORIES.RUNNING,
    maxParticipants: 15000,
    currentParticipants: 12450,
    status: 'upcoming',
    registrationDeadline: '2024-04-10',
    image: '/images/runner-road.webp',
  },
  {
    id: '2',
    title: 'Travesía del Río de la Plata',
    description: 'Desafío de natación en aguas abiertas de 3km.',
    date: '2024-03-15',
    location: 'Tigre, Buenos Aires',
    category: SPORT_CATEGORIES.SWIMMING,
    maxParticipants: 200,
    currentParticipants: 180,
    status: 'upcoming',
    registrationDeadline: '2024-03-10',
    image: '/images/la-plata.png',
  },
  {
    id: '3',
    title: 'Gran Fondo de los Andes',
    description: 'Cicloturismo de 120km por las montañas de Mendoza.',
    date: '2024-05-18',
    location: 'Mendoza, Argentina',
    category: SPORT_CATEGORIES.CYCLING,
    maxParticipants: 500,
    currentParticipants: 350,
    status: 'upcoming',
    registrationDeadline: '2024-05-01',
    image: '/images/mardel.png',
  },
  {
    id: '4',
    title: 'Ironman 70.3 Mar del Plata',
    description: 'Media distancia Ironman en la costa atlántica.',
    date: '2024-02-25',
    location: 'Mar del Plata, Buenos Aires',
    category: SPORT_CATEGORIES.TRIATHLON,
    maxParticipants: 1000,
    currentParticipants: 850,
    status: 'completed',
    registrationDeadline: '2024-02-15',
    image: '/images/mardel.png',
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

const getStatusColor = (status: string) => {
  switch (status) {
    case 'upcoming':
      return 'bg-green-500 text-cream-white'
    case 'ongoing':
      return 'bg-yellow-500 text-cream-white'
    case 'completed':
      return 'bg-gray-500 text-cream-white'
    case 'cancelled':
      return 'bg-red-500 text-cream-white'
    default:
      return 'bg-gray-500 text-cream-white'
  }
}

const getStatusLabel = (status: string) => {
  switch (status) {
    case 'upcoming':
      return 'Próximo'
    case 'ongoing':
      return 'En curso'
    case 'completed':
      return 'Finalizado'
    case 'cancelled':
      return 'Cancelado'
    default:
      return 'Desconocido'
  }
}

export default function EventsPage() {
  return (
    <AppLayout userName="Usuario Demo">
      <div className="container mx-auto px-4 py-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="mb-4 text-3xl font-bold text-cream-white">
            Eventos Deportivos
          </h1>
          <p className="text-lg text-cream-white">
            Participa en los eventos más emocionantes de cada disciplina
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="mb-8 flex flex-wrap gap-2">
          <Button variant="default" className="bg-team-blue hover:bg-team-blue-dark">
            Todos
          </Button>
          <Button variant="outline" className="border-team-blue text-team-blue hover:bg-team-blue-pastel">
            Próximos
          </Button>
          <Button variant="outline" className="border-team-orange text-team-orange hover:bg-team-orange-pastel">
            Finalizados
          </Button>
        </div>

        {/* Events Grid */}
        <div className="grid gap-8 lg:grid-cols-2">
          {mockEvents.map((event) => (
            <div
              key={event.id}
              className="bg-cream-white border-none shadow-lg overflow-hidden transition-all duration-200 hover:shadow-xl hover:scale-[1.02] rounded-lg"
            >
              {/* Imagen pegada al borde superior */}
              <div className="relative h-48 w-full">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover rounded-t-lg"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              
              {/* Contenido con padding normal */}
              <div className="p-6">
                <div className="mb-3 flex items-center justify-between">
                  <Badge className={getCategoryColor(event.category)}>
                    {SPORT_LABELS[event.category as keyof typeof SPORT_LABELS]}
                  </Badge>
                  <Badge className={getStatusColor(event.status)}>
                    {getStatusLabel(event.status)}
                  </Badge>
                </div>
                <h3 className="mb-3 text-xl font-semibold text-gray-800">
                  {event.title}
                </h3>
                <p className="mb-4 text-sm text-gray-600">
                  {event.description}
                </p>
                
                <div className="mb-4 space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="mr-2 h-4 w-4 text-team-blue" />
                    {new Date(event.date).toLocaleDateString('es-ES', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="mr-2 h-4 w-4 text-team-orange" />
                    {event.location}
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="mr-2 h-4 w-4 text-team-blue-dark" />
                    {event.currentParticipants} / {event.maxParticipants} participantes
                  </div>
                </div>

                <div className="mb-4">
                  <div className="mb-1 flex justify-between text-xs text-gray-600">
                    <span>Cupos disponibles</span>
                    <span>{Math.round((event.currentParticipants / event.maxParticipants) * 100)}%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-gray-200">
                    <div 
                      className="h-full bg-team-blue transition-all duration-300"
                      style={{ width: `${(event.currentParticipants / event.maxParticipants) * 100}%` }}
                    />
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-xs text-gray-500">
                    <p>Inscripción hasta:</p>
                    <p className="font-medium">
                      {new Date(event.registrationDeadline).toLocaleDateString('es-ES')}
                    </p>
                  </div>
                  <Button 
                    size="sm" 
                    disabled={event.status === 'completed'}
                    className={event.status === 'completed' 
                      ? 'bg-gray-400' 
                      : 'bg-team-blue hover:bg-team-blue-dark'
                    }
                  >
                    {event.status === 'completed' ? 'Finalizado' : 'Inscribirse'}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="mt-8 text-center">
          <Button variant="outline" className="border-team-orange text-team-orange hover:bg-team-orange hover:text-cream-white">
            Ver más eventos
          </Button>
        </div>
      </div>
    </AppLayout>
  )
}
