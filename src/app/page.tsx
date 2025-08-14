import { AppLayout } from '@/components/common/AppLayout'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { SPORT_CATEGORIES, SPORT_LABELS } from '@/constants'

const sportCards = [
  {
    sport: SPORT_CATEGORIES.RUNNING,
    title: SPORT_LABELS[SPORT_CATEGORIES.RUNNING],
    description: 'Artículos y entrenamientos para corredores',
    bgColor: 'bg-team-blue-pastel',
    textColor: 'text-team-blue-dark',
  },
  {
    sport: SPORT_CATEGORIES.SWIMMING,
    title: SPORT_LABELS[SPORT_CATEGORIES.SWIMMING],
    description: 'Técnicas y consejos de natación',
    bgColor: 'bg-team-orange-pastel',
    textColor: 'text-team-orange',
  },
  {
    sport: SPORT_CATEGORIES.CYCLING,
    title: SPORT_LABELS[SPORT_CATEGORIES.CYCLING],
    description: 'Rutas y mantenimiento de bicicletas',
    bgColor: 'bg-team-blue-pastel',
    textColor: 'text-team-blue-dark',
  },
  {
    sport: SPORT_CATEGORIES.TRIATHLON,
    title: SPORT_LABELS[SPORT_CATEGORIES.TRIATHLON],
    description: 'Preparación integral para triatletas',
    bgColor: 'bg-team-orange-pastel',
    textColor: 'text-team-orange',
  },
]

export default function Home() {
  return (
    <AppLayout userName="Usuario Demo">
      <div className="container mx-auto px-4 py-6">
        {/* Hero Section */}
        <section className="mb-8 text-center">
          <h1 className="mb-4 text-4xl font-bold text-team-blue">
            Bienvenido a Energia
          </h1>
          <p className="text-lg text-gray-600">
            Tu club de running, natación, ciclismo y triatlón
          </p>
        </section>

        {/* Sport Categories */}
        <section className="mb-8">
          <h2 className="mb-6 text-2xl font-semibold text-team-blue-dark">
            Nuestras Disciplinas
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {sportCards.map((card) => (
              <Card
                key={card.sport}
                className={`${card.bgColor} border-none shadow-lg transition-transform hover:scale-105`}
              >
                <CardHeader>
                  <CardTitle className={`${card.textColor} text-xl`}>
                    {card.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className={`${card.textColor} mb-4`}>
                    {card.description}
                  </p>
                  <Button
                    variant="outline"
                    className={`border-current ${card.textColor} hover:bg-white/20`}
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
          <h2 className="mb-6 text-2xl font-semibold text-team-blue-dark">
            Acceso Rápido
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Card className="border-team-blue/20">
              <CardContent className="p-6">
                <h3 className="mb-2 text-lg font-semibold text-team-blue">
                  Próximos Eventos
                </h3>
                <p className="mb-4 text-gray-600">
                  Descubre los eventos en los que participaremos
                </p>
                <Button className="bg-team-blue hover:bg-team-blue-dark">
                  Ver Eventos
                </Button>
              </CardContent>
            </Card>

            <Card className="border-team-orange/20">
              <CardContent className="p-6">
                <h3 className="mb-2 text-lg font-semibold text-team-orange">
                  Últimos Artículos
                </h3>
                <p className="mb-4 text-gray-600">
                  Lee los artículos más recientes
                </p>
                <Button
                  variant="outline"
                  className="border-team-orange text-team-orange hover:bg-team-orange hover:text-white"
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
