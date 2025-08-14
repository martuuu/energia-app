import { AppLayout } from '@/components/common/AppLayout'

export default function CoachTrackingPage() {
  return (
    <AppLayout userName="Usuario Demo">
      <div className="container mx-auto px-4 py-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-cream-white mb-4">
            Seguimiento de Entrenador
          </h1>
          <p className="text-cream-white/80">
            Mantente conectado con tu entrenador y revisa tu progreso.
          </p>
        </div>
      </div>
    </AppLayout>
  )
}
