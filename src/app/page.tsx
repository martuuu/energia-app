import { AppLayout } from '@/components/common/AppLayout'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { SPORT_CATEGORIES, SPORT_LABELS, SPORT_ICONS } from '@/constants'

const sportCards = [
  {
    sport: SPORT_CATEGORIES.RUNNING,
    title: SPORT_LABELS[SPORT_CATEGORIES.RUNNING],
    description: 'Técnicas y entrenamientos para corredores',
    icon: SPORT_ICONS[SPORT_CATEGORIES.RUNNING],
  },
  {
    sport: SPORT_CATEGORIES.SWIMMING,
    title: SPORT_LABELS[SPORT_CATEGORIES.SWIMMING],
    description: 'Todos los entrenamientos y consejos de natación',
    icon: SPORT_ICONS[SPORT_CATEGORIES.SWIMMING],
  },
  {
    sport: SPORT_CATEGORIES.CYCLING,
    title: SPORT_LABELS[SPORT_CATEGORIES.CYCLING],
    description: 'Artículos relacionados con ciclismo',
    icon: SPORT_ICONS[SPORT_CATEGORIES.CYCLING],
  },
  {
    sport: SPORT_CATEGORIES.TRIATHLON,
    title: SPORT_LABELS[SPORT_CATEGORIES.TRIATHLON],
    description: 'Preparación integral para triatletas',
    icon: SPORT_ICONS[SPORT_CATEGORIES.TRIATHLON],
  },
]

export default function Home() {
  return (
    <AppLayout userName="Usuario Demo">
      <div className="container mx-auto px-4 py-6">
        {/* Hero Section */}
        <section className="mb-12 text-center">
          <h1 className="m-8 text-5xl font-normal text-cream-white tracking-tight">
            Bienvenidos a{' '}
            <div className="text-team-orange animated bounceInLeft font-normal">
              Energía
            </div>
          </h1>
          <p className="text-xl text-cream-white leading-relaxed">
            La App donde encontras toda la información y recursos para
            potenciar tu rendimiento.
          </p>
        </section>

        {/* Sport Categories */}
        <section className="mb-8">
          <h2 className="text-cream-white mb-6 text-2xl font-semibold">
            Nuestras Disciplinas
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {sportCards.map(card => (
              <Card
                key={card.sport}
                className="bg-cream-white border-none shadow-lg transition-transform hover:scale-105"
              >
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{card.icon}</span>
                    <CardTitle className="text-xl text-gray-800">
                      {card.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-gray-600">{card.description}</p>
                  <Button
                    variant="outline"
                    className="border-team-orange text-team-orange hover:bg-team-orange hover:text-cream-white"
                  >
                    Ver Artículos
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Quick Actions */}
        <section className="mb-8">
          <h2 className="text-cream-white mb-6 text-2xl font-semibold">
            Acceso Rápido
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Card className="bg-cream-white border-none shadow-lg">
              <CardContent className="p-6">
                <div className="mb-2 flex items-center gap-3">
                  <span className="text-2xl">📅</span>
                  <h3 className="text-team-orange text-lg font-semibold">
                    Próximos Eventos
                  </h3>
                </div>
                <p className="mb-4 text-gray-600">
                  Descubre los eventos en los que participaremos
                </p>
                <Button className="bg-team-orange hover:bg-team-orange-light text-cream-white">
                  Ver Eventos
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-cream-white border-none shadow-lg">
              <CardContent className="p-6">
                <div className="mb-2 flex items-center gap-3">
                  <span className="text-2xl">📖</span>
                  <h3 className="text-team-orange text-lg font-semibold">
                    Últimos Artículos
                  </h3>
                </div>
                <p className="mb-4 text-gray-600">
                  Lee los artículos más recientes
                </p>
                <Button
                  variant="outline"
                  className="border-team-orange text-team-orange hover:bg-team-orange hover:text-cream-white"
                >
                  Leer Más
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </AppLayout>
  )
}
