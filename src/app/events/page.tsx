'use client'

import { useState } from 'react'
import { AppLayout } from '@/components/common/AppLayout'
import { BackButton } from '@/components/common/BackButton'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Calendar, MapPin, Users } from 'lucide-react'
import { SPORT_CATEGORIES, SPORT_LABELS } from '@/constants'
import { mockEvents } from '@/data/mockData'
import Image from 'next/image'

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
  const [selectedStatus, setSelectedStatus] = useState<string>('all')
  const [displayCount, setDisplayCount] = useState(2) // Mostrar 2 inicialmente

  // Filtrar eventos por estado
  const filteredEvents = selectedStatus === 'all' 
    ? mockEvents
    : selectedStatus === 'upcoming' 
      ? mockEvents.filter(event => event.status === 'upcoming')
      : mockEvents.filter(event => event.status === 'completed')

  // Eventos para mostrar (con paginación)
  const displayedEvents = filteredEvents.slice(0, displayCount)
  const hasMore = displayCount < filteredEvents.length

  const handleStatusFilter = (status: string) => {
    setSelectedStatus(status)
    setDisplayCount(2) // Reset al cambiar filtro
  }

  const loadMore = () => {
    setDisplayCount(prev => prev + 2)
  }

  return (
    <AppLayout userName="Usuario Demo">
      <div className="container mx-auto px-4 py-6">
        {/* Back Button */}
        <BackButton href="/" />
        
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
          <Button 
            variant={selectedStatus === 'all' ? 'default' : 'outline'}
            onClick={() => handleStatusFilter('all')}
            className={selectedStatus === 'all' 
              ? 'bg-team-blue hover:bg-team-blue-dark text-cream-white' 
              : 'border-team-blue text-team-blue hover:bg-team-blue-pastel'
            }
          >
            Todos ({mockEvents.length})
          </Button>
          <Button 
            variant={selectedStatus === 'upcoming' ? 'default' : 'outline'}
            onClick={() => handleStatusFilter('upcoming')}
            className={selectedStatus === 'upcoming'
              ? 'bg-green-500 hover:bg-green-600 text-cream-white'
              : 'border-green-500 text-green-500 hover:bg-green-500 hover:text-cream-white'
            }
          >
            Próximos ({mockEvents.filter(e => e.status === 'upcoming').length})
          </Button>
          <Button 
            variant={selectedStatus === 'completed' ? 'default' : 'outline'}
            onClick={() => handleStatusFilter('completed')}
            className={selectedStatus === 'completed'
              ? 'bg-gray-500 hover:bg-gray-600 text-cream-white'
              : 'border-gray-500 text-gray-500 hover:bg-gray-500 hover:text-cream-white'
            }
          >
            Finalizados ({mockEvents.filter(e => e.status === 'completed').length})
          </Button>
        </div>

        {/* Events Grid - Optimizado para móvil */}
        <div className="grid gap-6 lg:grid-cols-2">
          {displayedEvents.map((event) => (
            <div
              key={event.id}
              className="bg-cream-white border-none shadow-lg overflow-hidden transition-all duration-200 hover:shadow-xl hover:scale-[1.02] rounded-lg"
            >
              {/* Imagen optimizada para móvil */}
              <div className="relative h-48 sm:h-56 w-full">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover rounded-t-lg"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              
              {/* Contenido optimizado para móvil */}
              <div className="p-4 sm:p-6">
                <div className="mb-3 flex items-center justify-between">
                  <Badge className={getCategoryColor(event.category)}>
                    {SPORT_LABELS[event.category as keyof typeof SPORT_LABELS]}
                  </Badge>
                  <Badge className={getStatusColor(event.status)}>
                    {getStatusLabel(event.status)}
                  </Badge>
                </div>
                <h3 className="mb-3 text-lg sm:text-xl font-semibold text-gray-800">
                  {event.title}
                </h3>
                <p className="mb-4 text-sm text-gray-600 leading-relaxed">
                  {event.description}
                </p>
                
                <div className="mb-4 space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="mr-2 h-4 w-4 text-team-blue flex-shrink-0" />
                    <span className="truncate">
                      {new Date(event.date).toLocaleDateString('es-ES', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span>
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="mr-2 h-4 w-4 text-team-orange flex-shrink-0" />
                    <span className="truncate">{event.location}</span>
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="mr-2 h-4 w-4 text-team-blue-dark flex-shrink-0" />
                    <span>{event.currentParticipants} / {event.maxParticipants} participantes</span>
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
                
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
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
                      ? 'bg-gray-400 w-full sm:w-auto' 
                      : 'bg-team-blue hover:bg-team-blue-dark w-full sm:w-auto'
                    }
                  >
                    {event.status === 'completed' ? 'Finalizado' : 'Inscribirse'}
                  </Button>
                </div>
              </div>
            </div>
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
              Ver más eventos ({filteredEvents.length - displayCount} restantes)
            </Button>
          </div>
        )}

        {/* No results message */}
        {filteredEvents.length === 0 && (
          <div className="text-center py-12">
            <p className="text-cream-white text-lg">
              No hay eventos en esta categoría
            </p>
          </div>
        )}
      </div>
    </AppLayout>
  )
}
