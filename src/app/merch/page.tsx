import { AppLayout } from '@/components/common/AppLayout'

export default function MerchPage() {
  return (
    <AppLayout userName="Usuario Demo">
      <div className="container mx-auto px-4 py-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-cream-white mb-4">
            Energia Merch
          </h1>
          <p className="text-cream-white/80">
            Descubre nuestra colección oficial de productos Energia.
          </p>
        </div>
      </div>
    </AppLayout>
  )
}
