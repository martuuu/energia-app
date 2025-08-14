import { AppLayout } from '@/components/common/AppLayout'

export default function TrainingsPage() {
  return (
    <AppLayout userName="Usuario Demo">
      <div className="container mx-auto px-4 py-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-cream-white mb-4">
            Mis Entrenamientos
          </h1>
          <p className="text-cream-white/80">
            Aquí podrás ver y gestionar todos tus entrenamientos.
          </p>
        </div>
      </div>
    </AppLayout>
  )
}
