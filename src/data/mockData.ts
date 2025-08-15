import { SPORT_CATEGORIES } from '@/constants'

// Tipos locales para mock data (sin dependencias complejas)
export interface MockArticle {
  id: string
  slug: string
  title: string
  content: string
  excerpt: string
  category: string
  author: string
  publishedAt: string
  featuredImage: string
  readTime: string
  tags: string[]
  links?: {
    label: string
    url: string
    description?: string
  }[] // Enlaces a entrenamientos relacionados
}

export interface MockEvent {
  id: string
  title: string
  description: string
  date: string
  location: string
  category: string
  maxParticipants: number
  currentParticipants: number
  status: 'upcoming' | 'ongoing' | 'completed' | 'cancelled'
  registrationDeadline: string
  image: string
}

// Mock Articles Data
export const mockArticles: MockArticle[] = [
  {
    id: '1',
    slug: 'tecnicas-respiracion-corredores-principiantes',
    title: 'Técnicas de respiración para corredores principiantes',
    content: `
# Técnicas de respiración para corredores principiantes

La respiración es uno de los aspectos más importantes y a menudo subestimados del running. Una técnica de respiración adecuada puede marcar la diferencia entre un entrenamiento exitoso y uno agotador.

## ¿Por qué es importante la respiración?

Cuando corremos, nuestros músculos necesitan más oxígeno para generar energía. Una respiración eficiente nos permite:

- Mantener un ritmo constante por más tiempo
- Reducir la fatiga muscular
- Mejorar el rendimiento general
- Prevenir el dolor lateral (flato)

## Técnicas básicas de respiración

### 1. Respiración rítmica

La respiración rítmica es la base de una buena técnica de running. Consiste en coordinar la respiración con los pasos:

- **Patrón 3:2**: Inhala durante 3 pasos, exhala durante 2 pasos
- **Patrón 2:2**: Inhala durante 2 pasos, exhala durante 2 pasos (para ritmos más intensos)

### 2. Respiración diafragmática

También conocida como respiración abdominal, implica usar el diafragma en lugar del pecho:

1. Coloca una mano en el pecho y otra en el abdomen
2. Al inhalar, el abdomen debe expandirse más que el pecho
3. Al exhalar, el abdomen se contrae

### 3. Respiración nasal vs bucal

- **Por la nariz**: Mejor para calentamiento y enfriamiento
- **Por la boca**: Necesaria durante esfuerzos intensos
- **Combinada**: Lo más común durante el running regular

## Ejercicios para mejorar

### Ejercicio 1: Respiración en reposo
Practica la respiración diafragmática acostado, 10 minutos diarios.

### Ejercicio 2: Caminar consciente
Camina practicando diferentes patrones de respiración antes de correr.

### Ejercicio 3: Running progresivo
Comienza con respiración nasal y ve adaptándote según la intensidad.

## Errores comunes

1. **Respirar solo por la nariz** durante esfuerzos intensos
2. **Respiración superficial** usando solo el pecho
3. **No coordinar** la respiración con los pasos
4. **Contener la respiración** durante subidas o sprints

## Conclusión

La respiración eficiente se desarrolla con práctica constante. Comienza implementando estas técnicas gradualmente y verás mejoras en tu rendimiento y comodidad al correr.

*Recuerda: cada corredor es diferente. Experimenta con diferentes técnicas hasta encontrar la que mejor funcione para ti.*
    `,
    excerpt: 'Aprende las mejores técnicas de respiración para mejorar tu rendimiento en el running.',
    category: SPORT_CATEGORIES.RUNNING,
    author: 'Carlos Mendez',
    publishedAt: '2024-01-15',
    featuredImage: '/images/runner-road.webp',
    readTime: '5 min',
    tags: ['respiración', 'técnica', 'principiantes', 'running'],
  },
  {
    id: '2',
    slug: 'entrenamiento-fuerza-nadadores',
    title: 'Entrenamiento de fuerza para nadadores',
    content: `
# Entrenamiento de fuerza para nadadores

El entrenamiento de fuerza es fundamental para nadadores de todos los niveles. No solo mejora el rendimiento en el agua, sino que también ayuda a prevenir lesiones y desarrollar una técnica más eficiente.

## Beneficios del entrenamiento de fuerza

- **Potencia en brazadas**: Mayor fuerza se traduce en brazadas más poderosas
- **Estabilidad del core**: Mejor posición corporal en el agua
- **Prevención de lesiones**: Fortalece músculos estabilizadores
- **Resistencia muscular**: Mantiene la técnica durante entrenamientos largos

## Ejercicios fundamentales

### Ejercicios para el tren superior

1. **Pull-ups/Dominadas**
   - 3 series de 8-12 repeticiones
   - Fortalece dorsal ancho y bíceps

2. **Push-ups/Flexiones**
   - 3 series de 10-15 repeticiones
   - Trabaja pectorales, tríceps y core

3. **Remo con mancuernas**
   - 3 series de 10-12 por brazo
   - Simula el movimiento de brazada

### Ejercicios para el core

1. **Plancha**
   - 3 series de 30-60 segundos
   - Estabilidad del tronco

2. **Russian twists**
   - 3 series de 20 repeticiones
   - Rotación del core

### Ejercicios para piernas

1. **Sentadillas**
   - 3 series de 12-15 repeticiones
   - Potencia para el impulso

2. **Patadas de delfín en seco**
   - 3 series de 15 repeticiones
   - Simula el movimiento acuático

## Programación semanal

- **Lunes**: Tren superior + Core
- **Miércoles**: Piernas + Core
- **Viernes**: Cuerpo completo

*Ajusta la intensidad según tu nivel y objetivos.*
    `,
    excerpt: 'Ejercicios específicos para desarrollar la fuerza necesaria en natación.',
    category: SPORT_CATEGORIES.SWIMMING,
    author: 'Ana Torres',
    publishedAt: '2024-01-12',
    featuredImage: '/images/la-plata.png',
    readTime: '8 min',
    tags: ['fuerza', 'entrenamiento', 'natación', 'gym'],
  },
  {
    id: '3',
    slug: 'mantenimiento-basico-bicicleta',
    title: 'Mantenimiento básico de tu bicicleta',
    content: `
# Mantenimiento básico de tu bicicleta

Una bicicleta bien mantenida no solo es más segura, sino que también mejora tu experiencia de ciclismo y prolonga la vida útil de los componentes.

## Inspección visual regular

### Antes de cada salida

- **Neumáticos**: Revisa la presión y busca cortes o desgaste
- **Frenos**: Verifica que las pastillas no estén desgastadas
- **Cadena**: Debe estar limpia y lubricada
- **Cambios**: Prueba que funcionen suavemente

## Mantenimiento semanal

### Limpieza básica

1. **Limpia el cuadro** con agua y jabón suave
2. **Limpia la cadena** con desengrasante específico
3. **Seca completamente** para evitar oxidación

### Lubricación

- **Cadena**: Aplica lubricante específico para bicicletas
- **Cables**: Lubrica puntos de fricción
- **Pivotes**: Mantén móviles las articulaciones

## Mantenimiento mensual

### Revisión de componentes

- **Tornillería**: Verifica que esté ajustada
- **Ruedas**: Revisa radios y centrado
- **Frenos**: Ajusta tensión de cables
- **Cambios**: Calibra desviadores

## Señales de alerta

- **Ruidos extraños**: Pueden indicar desgaste
- **Cambios difíciles**: Necesitas ajustar cables
- **Frenos poco efectivos**: Revisa pastillas y cables
- **Cadena que salta**: Puede estar desgastada

## Herramientas básicas

- Llaves Allen
- Lubricante para cadena
- Desengrasante
- Bomba de aire
- Trapos limpios

*Un mantenimiento regular te ahorrará dinero y mejorará tu experiencia de ciclismo.*
    `,
    excerpt: 'Guía completa para mantener tu bicicleta en perfectas condiciones.',
    category: SPORT_CATEGORIES.CYCLING,
    author: 'Luis Rodriguez',
    publishedAt: '2024-01-10',
    featuredImage: '/images/mardel.png',
    readTime: '10 min',
    tags: ['mantenimiento', 'bicicleta', 'ciclismo', 'mecánica'],
  },
  {
    id: '4',
    slug: 'planificacion-temporada-triatletas',
    title: 'Planificación de temporada para triatletas',
    content: `
# Planificación de temporada para triatletas

La planificación es clave para maximizar el rendimiento en triatlón. Una temporada bien estructurada te permitirá llegar en forma óptima a tus competencias objetivo.

## Fases de la temporada

### Fase base (12-16 semanas)

- **Objetivo**: Construir resistencia aeróbica
- **Volumen**: Alto en las tres disciplinas
- **Intensidad**: Baja a moderada
- **Foco**: Técnica y adaptaciones fisiológicas

### Fase de construcción (6-8 semanas)

- **Objetivo**: Desarrollar potencia y velocidad
- **Volumen**: Moderado
- **Intensidad**: Moderada a alta
- **Foco**: Entrenamientos específicos por disciplina

### Fase específica (4-6 semanas)

- **Objetivo**: Simulación de competencia
- **Volumen**: Moderado a bajo
- **Intensidad**: Específica de carrera
- **Foco**: Transiciones y ritmo de competencia

### Fase de pico (2-3 semanas)

- **Objetivo**: Llegar fresco a la competencia
- **Volumen**: Bajo
- **Intensidad**: Mantenimiento
- **Foco**: Recuperación y afinamiento

## Distribución semanal típica

### Natación (4-5 sesiones)
- **Lunes**: Técnica y drill
- **Miércoles**: Intervalos
- **Viernes**: Resistencia
- **Domingo**: Aguas abiertas (opcional)

### Ciclismo (3-4 sesiones)
- **Martes**: Intervalos cortos
- **Jueves**: Tempo
- **Sábado**: Salida larga
- **Domingo**: Brick (opcional)

### Running (3-4 sesiones)
- **Martes**: Velocidad
- **Jueves**: Tempo/Brick
- **Sábado**: Intervalos largos
- **Domingo**: Tirada larga

## Periodización por distancias

### Sprint y Olímpico
- Mayor énfasis en velocidad y potencia
- Transiciones más importantes
- Recuperación más rápida

### Media y Larga Distancia
- Mayor volumen de entrenamiento
- Énfasis en resistencia aeróbica
- Nutrición e hidratación cruciales

## Monitoreo del entrenamiento

- **Frecuencia cardíaca**: Control de intensidades
- **Potencia**: En ciclismo para objetividad
- **Pace**: En running para control de ritmo
- **Sensación percibida**: Escucha a tu cuerpo

*La constancia y la paciencia son tus mejores aliados en el triatlón.*
    `,
    excerpt: 'Cómo estructurar tu entrenamiento anual para maximizar el rendimiento.',
    category: SPORT_CATEGORIES.TRIATHLON,
    author: 'Maria Gonzalez',
    publishedAt: '2024-01-08',
    featuredImage: '/images/mardel.png',
    readTime: '12 min',
    tags: ['planificación', 'temporada', 'triatlón', 'periodización'],
  },
  {
    id: '5',
    slug: 'tecnicas-respiracion-avanzadas-running',
    title: 'Técnicas avanzadas de respiración para corredores',
    content: '', // Este artículo usa el nuevo sistema de secciones
    excerpt: 'Descubre técnicas avanzadas de respiración que mejorarán tu rendimiento y resistencia en el running.',
    category: SPORT_CATEGORIES.RUNNING,
    author: 'Carlos Mendez',
    publishedAt: '2024-01-20',
    featuredImage: '/images/runner-road.webp',
    readTime: '8 min',
    tags: ['respiración', 'técnica avanzada', 'running', 'rendimiento'],
  },
  // Artículos de demostración con secciones modulares
  {
    id: 'demo-swimming-technique',
    slug: 'tecnica-crol-natacion-perfecta',
    title: 'Técnica perfecta de crol: Guía completa',
    content: '', // Usa sistema de secciones
    excerpt: 'Domina la técnica de crol con esta guía detallada que incluye ejercicios y corrección de errores comunes.',
    category: SPORT_CATEGORIES.SWIMMING,
    author: 'Ana Torres',
    publishedAt: '2024-01-25',
    featuredImage: '/icon/swim.png',
    readTime: '10 min',
    tags: ['técnica', 'crol', 'natación', 'mejora'],
  },
  {
    id: 'demo-cycling-maintenance',
    slug: 'mantenimiento-cadena-bicicleta-guia',
    title: 'Mantenimiento de cadena: Guía paso a paso',
    content: '', // Usa sistema de secciones
    excerpt: 'Aprende a mantener tu cadena en perfecto estado con esta guía detallada de limpieza y lubricación.',
    category: SPORT_CATEGORIES.CYCLING,
    author: 'Luis Rodriguez',
    publishedAt: '2024-01-24',
    featuredImage: '/images/trail.png',
    readTime: '7 min',
    tags: ['mantenimiento', 'cadena', 'ciclismo', 'tutorial'],
  },
  {
    id: 'demo-running-injury',
    slug: 'prevencion-lesiones-running-guia',
    title: 'Prevención de lesiones en running: Guía completa',
    content: '', // Usa sistema de secciones
    excerpt: 'Mantente libre de lesiones con estas estrategias comprobadas de prevención para corredores.',
    category: SPORT_CATEGORIES.RUNNING,
    author: 'Carlos Mendez',
    publishedAt: '2024-01-23',
    featuredImage: '/images/yellow-runner.webp',
    readTime: '12 min',
    tags: ['prevención', 'lesiones', 'running', 'salud'],
  },
  {
    id: 'demo-triathlon-nutrition',
    slug: 'nutricion-triathlon-estrategias-avanzadas',
    title: 'Nutrición en triatlón: Estrategias avanzadas',
    content: '', // Usa sistema de secciones
    excerpt: 'Domina la cuarta disciplina del triatlón con estrategias nutricionales específicas para cada distancia.',
    category: SPORT_CATEGORIES.TRIATHLON,
    author: 'Maria Gonzalez',
    publishedAt: '2024-01-22',
    featuredImage: '/images/tria.png',
    readTime: '15 min',
    tags: ['nutrición', 'triatlón', 'hidratación', 'rendimiento'],
  },
]

// Mock Events Data
export const mockEvents: MockEvent[] = [
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
