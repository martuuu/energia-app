import { AppLayout } from '@/components/common/AppLayout'
import { BackButton } from '@/components/common/BackButton'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageSquare, 
  Instagram, 
  Facebook, 
  Twitter 
} from 'lucide-react'

const contactInfo = [
  {
    icon: MapPin,
    title: 'Dirección',
    value: 'Av. Corrientes 1234, C1043 CABA',
    description: 'Sede principal del club',
  },
  {
    icon: Phone,
    title: 'Teléfono',
    value: '+54 11 4567-8900',
    description: 'Lunes a viernes de 9 a 18hs',
  },
  {
    icon: Mail,
    title: 'Email',
    value: 'info@energia.com.ar',
    description: 'Respondemos en 24hs',
  },
  {
    icon: Clock,
    title: 'Horarios',
    value: 'Lun - Vie: 6:00 - 23:00',
    description: 'Sáb - Dom: 8:00 - 22:00',
  },
]

const socialMedia = [
  {
    platform: 'Instagram',
    icon: Instagram,
    username: '@energia_club',
    url: 'https://instagram.com/energia_club',
    color: 'bg-pink-500',
  },
  {
    platform: 'Facebook',
    icon: Facebook,
    username: 'Energía Club Deportivo',
    url: 'https://facebook.com/energia.club',
    color: 'bg-blue-600',
  },
  {
    platform: 'Twitter',
    icon: Twitter,
    username: '@energiaclub',
    url: 'https://twitter.com/energiaclub',
    color: 'bg-sky-500',
  },
]

const departments = [
  {
    name: 'Administración',
    email: 'admin@energia.com.ar',
    phone: '+54 11 4567-8901',
    description: 'Consultas generales y membresías',
  },
  {
    name: 'Entrenamiento',
    email: 'entrenadores@energia.com.ar',
    phone: '+54 11 4567-8902',
    description: 'Planes de entrenamiento y coaching',
  },
  {
    name: 'Eventos',
    email: 'eventos@energia.com.ar',
    phone: '+54 11 4567-8903',
    description: 'Organización de competencias',
  },
  {
    name: 'Soporte Técnico',
    email: 'soporte@energia.com.ar',
    phone: '+54 11 4567-8904',
    description: 'Problemas con la app o web',
  },
]

export default function ContactPage() {
  return (
    <AppLayout userName="Usuario Demo">
      <div className="container mx-auto px-4 py-6">
        {/* Back Button */}
        <BackButton href="/" />
        
        {/* Header */}
        <div className="mb-8">
          <h1 className="mb-4 text-3xl font-bold text-cream-white">
            Contacto
          </h1>
          <p className="text-lg text-cream-white">
            Estamos aquí para ayudarte. Ponte en contacto con nosotros.
          </p>
        </div>

        {/* Main Contact Info */}
        <div className="mb-8 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {contactInfo.map((info, index) => {
            const IconComponent = info.icon
            return (
              <Card key={index} className="bg-cream-white border-none shadow-lg text-center transition-all duration-200 hover:shadow-xl hover:scale-[1.02]">
                <CardContent className="pt-6">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-team-orange/10">
                    <IconComponent className="h-6 w-6 text-team-orange" />
                  </div>
                  <h3 className="mb-2 font-semibold text-gray-800">
                    {info.title}
                  </h3>
                  <p className="mb-1 font-medium text-team-orange-dark">
                    {info.value}
                  </p>
                  <p className="text-sm text-gray-600">
                    {info.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Contact Form */}
          <Card className="bg-cream-white border-none shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center text-gray-800">
                <MessageSquare className="mr-2 h-5 w-5" />
                Envíanos un mensaje
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-sm font-medium text-gray-800">
                      Nombre
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-md border border-team-orange/30 bg-team-orange/5 px-3 py-2 focus:border-team-orange focus:outline-none focus:ring-1 focus:ring-team-orange"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-gray-800">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full rounded-md border border-team-orange/30 bg-team-orange/5 px-3 py-2 focus:border-team-orange focus:outline-none focus:ring-1 focus:ring-team-orange"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-800">
                    Asunto
                  </label>
                  <select className="w-full rounded-md border border-team-orange/30 bg-team-orange/5 px-3 py-2 focus:border-team-orange focus:outline-none focus:ring-1 focus:ring-team-orange">
                    <option value="">Selecciona un tema</option>
                    <option value="membership">Membresías</option>
                    <option value="training">Entrenamiento</option>
                    <option value="events">Eventos</option>
                    <option value="technical">Soporte técnico</option>
                    <option value="other">Otro</option>
                  </select>
                </div>
                
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-800">
                    Mensaje
                  </label>
                  <textarea
                    rows={4}
                    className="w-full rounded-md border border-team-orange/30 bg-team-orange/5 px-3 py-2 focus:border-team-orange focus:outline-none focus:ring-1 focus:ring-team-orange"
                    placeholder="Escribe tu mensaje aquí..."
                  />
                </div>
                
                <Button className="w-full bg-team-orange hover:bg-team-orange-light text-cream-white">
                  Enviar mensaje
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Departments & Social */}
          <div className="space-y-6">
            {/* Departments */}
            <Card className="bg-cream-white border-none shadow-lg">
              <CardHeader>
                <CardTitle className="text-gray-800">
                  Departamentos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {departments.map((dept, index) => (
                    <div key={index} className="border-b border-white/30 pb-4 last:border-b-0 last:pb-0">
                      <div className="mb-1 flex items-center justify-between">
                        <h4 className="font-medium text-gray-800">
                          {dept.name}
                        </h4>
                        <Badge variant="outline" className="border-team-orange text-team-orange bg-white/50">
                          Contactar
                        </Badge>
                      </div>
                      <p className="mb-2 text-sm text-gray-600">
                        {dept.description}
                      </p>
                      <div className="flex flex-col gap-1 text-xs text-team-orange-dark">
                        <span>{dept.email}</span>
                        <span>{dept.phone}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="bg-cream-white border-none shadow-lg">
              <CardHeader>
                <CardTitle className="text-gray-800">
                  Síguenos en redes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {socialMedia.map((social, index) => {
                    const IconComponent = social.icon
                    return (
                      <div
                        key={index}
                        className="flex items-center justify-between rounded-lg border border-white/30 bg-white/50 p-3 transition-colors hover:bg-white/70"
                      >
                        <div className="flex items-center">
                          <div className={`mr-3 flex h-8 w-8 items-center justify-center rounded-full ${social.color}`}>
                            <IconComponent className="h-4 w-4 text-cream-white" />
                          </div>
                          <div>
                            <p className="font-medium text-gray-800">
                              {social.platform}
                            </p>
                            <p className="text-sm text-gray-600">
                              {social.username}
                            </p>
                          </div>
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-team-orange text-team-orange hover:bg-team-orange hover:text-cream-white"
                        >
                          Seguir
                        </Button>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Placeholder */}
        <Card className="mt-8 bg-cream-white border-none shadow-lg">
          <CardHeader>
            <CardTitle className="text-gray-800">
              Nuestra ubicación
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex h-64 items-center justify-center rounded-lg bg-gradient-to-br from-team-orange-pastel to-white">
              <div className="text-center">
                <MapPin className="mx-auto mb-2 h-8 w-8 text-team-orange" />
                <p className="font-medium text-gray-800">
                  Mapa interactivo próximamente
                </p>
                <p className="text-sm text-gray-600">
                  Av. Corrientes 1234, CABA
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  )
}
