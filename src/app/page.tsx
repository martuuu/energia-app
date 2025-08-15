import { AppLayout } from '@/components/common/AppLayout'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { SportIcon, SportType } from '@/components/ui/sport-icon'
import { SPORT_CATEGORIES, SPORT_LABELS } from '@/constants'
import Link from 'next/link'

const sportCards = [
  {
    sport: SPORT_CATEGORIES.RUNNING,
    title: SPORT_LABELS[SPORT_CATEGORIES.RUNNING],
    description: 'Técnicas y entrenamientos para corredores',
  },
  {
    sport: SPORT_CATEGORIES.SWIMMING,
    title: SPORT_LABELS[SPORT_CATEGORIES.SWIMMING],
    description: 'Todos los entrenamientos y consejos de natación',
  },
  {
    sport: SPORT_CATEGORIES.CYCLING,
    title: SPORT_LABELS[SPORT_CATEGORIES.CYCLING],
    description: 'Artículos relacionados con ciclismo',
  },
  {
    sport: SPORT_CATEGORIES.TRIATHLON,
    title: SPORT_LABELS[SPORT_CATEGORIES.TRIATHLON],
    description: 'Preparación integral para triatletas',
  },
]

export default function Home() {
  return (
    <AppLayout userName="Usuario Demo">
      <div className="container mx-auto px-4 py-6">
        {/* Hero Section */}
        <section className="mb-12 text-center">
          <h1 className="m-8 text-5xl font-normal text-cream-white tracking-tight">
            Bienvenidos a
            <div className="text-team-cream animated bounceInLeft font-normal">
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
                className="bg-cream-white border-none shadow-lg transition-transform"
                iconPattern={card.sport as SportType}
              >
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <SportIcon sport={card.sport as SportType} size={32} />
                    <CardTitle className="text-xl text-gray-800">
                      {card.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-gray-600">{card.description}</p>
                  <Link href="/articles">
                    <Button
                      variant="outline"
                      className="border-team-orange text-team-orange hover:bg-team-orange hover:text-cream-white"
                    >
                      Ver Artículos
                    </Button>
                  </Link>
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
                <Link href="/events">
                  <Button className="bg-team-orange hover:bg-team-orange-light text-cream-white">
                    Ver Eventos
                  </Button>
                </Link>
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
                <Link href="/articles">
                  <Button
                    variant="outline"
                    className="border-team-orange text-team-orange hover:bg-team-orange hover:text-cream-white"
                  >
                    Leer Más
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </AppLayout>
  )
}
