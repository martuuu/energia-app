import { SPORT_CATEGORIES } from '@/constants'

// Categorías de ejercicios
export const EXERCISE_CATEGORIES = {
  ...SPORT_CATEGORIES,
  FUNCTIONAL: 'functional'
} as const

export const EXERCISE_LABELS = {
  [EXERCISE_CATEGORIES.RUNNING]: 'Running',
  [EXERCISE_CATEGORIES.SWIMMING]: 'Natación',
  [EXERCISE_CATEGORIES.CYCLING]: 'Ciclismo',
  [EXERCISE_CATEGORIES.TRIATHLON]: 'Triatlón',
  [EXERCISE_CATEGORIES.FUNCTIONAL]: 'Funcional'
} as const

// Tipos para ejercicios
export interface Exercise {
  id: string
  title: string
  description: string
  categories: string[] // Puede tener múltiples categorías
  difficulty: 'principiante' | 'intermedio' | 'avanzado'
  duration: string
  equipment: string[]
  instructions: string[]
  tips: string[]
  muscles: string[]
  author: string
  createdAt: string
  featuredImage: string
  videoUrl?: string
  tags: string[]
}

// Base de datos de ejercicios
export const exercises: Exercise[] = [
  // RUNNING
  {
    id: 'run-1',
    title: 'Técnica de zancada perfecta',
    description: 'Ejercicios para mejorar la eficiencia de tu zancada y reducir el riesgo de lesiones.',
    categories: [EXERCISE_CATEGORIES.RUNNING],
    difficulty: 'intermedio',
    duration: '15 min',
    equipment: ['Ninguno'],
    instructions: [
      'Comienza con trote suave durante 5 minutos',
      'Realiza 100 metros de elevación de rodillas',
      'Haz 100 metros de talones al glúteo',
      'Practica 100 metros de skipping',
      'Termina con 100 metros de zancadas largas',
      'Repite el circuito 2-3 veces'
    ],
    tips: [
      'Mantén el torso erguido durante todos los ejercicios',
      'Concentrarte en la cadencia más que en la velocidad',
      'Aterriza sobre el mediopié, no sobre el talón'
    ],
    muscles: ['Cuádriceps', 'Isquiotibiales', 'Gemelos', 'Core'],
    author: 'Carlos Mendez',
    createdAt: '2024-01-15',
    featuredImage: '/images/runner-track.webp',
    tags: ['técnica', 'zancada', 'running', 'eficiencia']
  },
  {
    id: 'run-2',
    title: 'Intervalos de velocidad en pista',
    description: 'Entrenamiento de velocidad para mejorar tu pace en carreras cortas.',
    categories: [EXERCISE_CATEGORIES.RUNNING],
    difficulty: 'avanzado',
    duration: '45 min',
    equipment: ['Pista de atletismo', 'Cronómetro'],
    instructions: [
      'Calentamiento: 15 min trote suave + ejercicios dinámicos',
      '8 x 400m al 90% esfuerzo máximo',
      'Recuperación: 90 segundos entre cada 400m',
      'Enfriamiento: 10 min trote muy suave',
      'Estiramientos finales'
    ],
    tips: [
      'Mantén un ritmo constante en cada repetición',
      'Respira de forma controlada durante la recuperación',
      'No hagas este entrenamiento más de 1 vez por semana'
    ],
    muscles: ['Todo el tren inferior', 'Sistema cardiovascular'],
    author: 'Carlos Mendez',
    createdAt: '2024-01-16',
    featuredImage: '/images/runner-track.webp',
    tags: ['velocidad', 'intervalos', 'pista', 'avanzado']
  },

  // SWIMMING
  {
    id: 'swim-1',
    title: 'Técnica de brazada de crol',
    description: 'Ejercicios específicos para perfeccionar la técnica de crol y mejorar la eficiencia.',
    categories: [EXERCISE_CATEGORIES.SWIMMING],
    difficulty: 'principiante',
    duration: '30 min',
    equipment: ['Piscina', 'Tabla de natación', 'Pull buoy'],
    instructions: [
      'Calentamiento: 200m crol suave',
      '4 x 25m crol con un solo brazo (alternando)',
      '4 x 25m crol con tabla, enfoque en patada',
      '4 x 25m crol con pull buoy, enfoque en brazada',
      '4 x 25m catch-up (esperar que las manos se toquen)',
      'Enfriamiento: 100m crol muy suave'
    ],
    tips: [
      'Mantén la cabeza en posición neutral',
      'Alarga cada brazada tanto como puedas',
      'Respira hacia ambos lados'
    ],
    muscles: ['Dorsal ancho', 'Deltoides', 'Tríceps', 'Core'],
    author: 'Ana Torres',
    createdAt: '2024-01-17',
    featuredImage: '/icon/swim.png',
    tags: ['técnica', 'crol', 'natación', 'eficiencia']
  },
  {
    id: 'swim-2',
    title: 'Entrenamiento de resistencia acuática',
    description: 'Serie larga para desarrollar resistencia aeróbica en natación.',
    categories: [EXERCISE_CATEGORIES.SWIMMING, EXERCISE_CATEGORIES.TRIATHLON],
    difficulty: 'intermedio',
    duration: '60 min',
    equipment: ['Piscina'],
    instructions: [
      'Calentamiento: 400m variado (crol, espalda, braza)',
      'Serie principal: 10 x 100m crol con 15" descanso',
      'Serie secundaria: 5 x 200m crol con 30" descanso',
      'Serie de velocidad: 8 x 25m al 85% con 30" descanso',
      'Enfriamiento: 200m muy suave'
    ],
    tips: [
      'Mantén un ritmo constante en las series largas',
      'Controla la respiración cada 3 brazadas',
      'Enfócate en la técnica cuando aparezca la fatiga'
    ],
    muscles: ['Todo el tren superior', 'Core', 'Sistema cardiovascular'],
    author: 'Ana Torres',
    createdAt: '2024-01-18',
    featuredImage: '/images/la-plata.png',
    tags: ['resistencia', 'natación', 'triatlón', 'aeróbico']
  },

  // CYCLING
  {
    id: 'cycle-1',
    title: 'Intervalos de potencia en rodillo',
    description: 'Entrenamiento de potencia y fuerza específico para ciclismo en rodillo.',
    categories: [EXERCISE_CATEGORIES.CYCLING],
    difficulty: 'intermedio',
    duration: '50 min',
    equipment: ['Bicicleta', 'Rodillo inteligente', 'Medidor de potencia'],
    instructions: [
      'Calentamiento: 15 min progresivo (60% a 75% FTP)',
      '5 x 3 min al 90% FTP con 2 min recuperación',
      '10 min recuperación activa al 60% FTP',
      '5 x 1 min al 110% FTP con 1 min recuperación',
      'Enfriamiento: 10 min al 55% FTP'
    ],
    tips: [
      'Mantén una cadencia de 85-95 rpm',
      'Ajusta la resistencia según tu FTP personal',
      'Hidrátate bien durante el entrenamiento'
    ],
    muscles: ['Cuádriceps', 'Isquiotibiales', 'Glúteos', 'Core'],
    author: 'Luis Rodriguez',
    createdAt: '2024-01-19',
    featuredImage: '/images/trail.png',
    tags: ['potencia', 'intervalos', 'rodillo', 'FTP']
  },
  {
    id: 'cycle-2',
    title: 'Salida larga de resistencia',
    description: 'Entrenamiento de base aeróbica para desarrollar resistencia en ciclismo.',
    categories: [EXERCISE_CATEGORIES.CYCLING, EXERCISE_CATEGORIES.TRIATHLON],
    difficulty: 'principiante',
    duration: '90-120 min',
    equipment: ['Bicicleta', 'Casco', 'Bidón'],
    instructions: [
      'Primeros 15 min: calentamiento progresivo',
      'Mantén zona aeróbica (65-75% FCM) durante 60-90 min',
      'Incluye 3-4 subidas moderadas de 3-5 min',
      'Últimos 15 min: enfriamiento suave',
      'Mantén cadencia constante entre 80-90 rpm'
    ],
    tips: [
      'Come algo cada 45-60 minutos',
      'Hidrátate regularmente cada 15-20 minutos',
      'Mantén una posición aerodinámica cómoda'
    ],
    muscles: ['Tren inferior completo', 'Core', 'Sistema cardiovascular'],
    author: 'Luis Rodriguez',
    createdAt: '2024-01-20',
    featuredImage: '/images/trail.png',
    tags: ['resistencia', 'aeróbico', 'base', 'larga distancia']
  },

  // TRIATHLON
  {
    id: 'tri-1',
    title: 'Entrenamiento Brick: Bici + Correr',
    description: 'Transición específica de ciclismo a running para triatletas.',
    categories: [EXERCISE_CATEGORIES.TRIATHLON],
    difficulty: 'intermedio',
    duration: '75 min',
    equipment: ['Bicicleta', 'Zapatillas running', 'Zona de transición'],
    instructions: [
      'Ciclismo: 45 min al ritmo de competencia',
      'Transición rápida (< 2 min): cambio de equipos',
      'Running: 20 min al ritmo objetivo de triatlón',
      'Enfriamiento: 10 min caminata y estiramientos',
      'Practica la transición como en carrera'
    ],
    tips: [
      'Organiza tu zona de transición previamente',
      'Usa zapatillas elásticas o sistema de cordones rápidos',
      'Los primeros metros corriendo serán incómodos, es normal'
    ],
    muscles: ['Tren inferior completo', 'Adaptación neuromuscular'],
    author: 'Maria Gonzalez',
    createdAt: '2024-01-21',
    featuredImage: '/images/tria.png',
    tags: ['brick', 'transición', 'triatlón', 'específico']
  },
  {
    id: 'tri-2',
    title: 'Entrenamiento combinado completo',
    description: 'Sesión que incluye las tres disciplinas del triatlón en una sola sesión.',
    categories: [EXERCISE_CATEGORIES.TRIATHLON],
    difficulty: 'avanzado',
    duration: '120 min',
    equipment: ['Piscina', 'Bicicleta', 'Zapatillas running'],
    instructions: [
      'Natación: 1000m técnico con series de velocidad',
      'Transición 1: cambio a bicicleta (máx 3 min)',
      'Ciclismo: 40 min tempo con intervalos de 5 min',
      'Transición 2: cambio a running (máx 2 min)',
      'Running: 30 min progresivo terminando en pace de carrera'
    ],
    tips: [
      'Simula las condiciones de competencia lo máximo posible',
      'Practica la nutrición e hidratación durante el entrenamiento',
      'Cronometra las transiciones para mejorar la eficiencia'
    ],
    muscles: ['Cuerpo completo', 'Sistema cardiovascular'],
    author: 'Maria Gonzalez',
    createdAt: '2024-01-22',
    featuredImage: '/images/tria.png',
    tags: ['combinado', 'triatlón', 'transiciones', 'completo']
  },

  // FUNCTIONAL
  {
    id: 'func-1',
    title: 'Core para deportes de resistencia',
    description: 'Fortalecimiento del core específico para running, ciclismo y natación.',
    categories: [EXERCISE_CATEGORIES.FUNCTIONAL, EXERCISE_CATEGORIES.RUNNING, EXERCISE_CATEGORIES.CYCLING, EXERCISE_CATEGORIES.SWIMMING],
    difficulty: 'principiante',
    duration: '25 min',
    equipment: ['Colchoneta', 'Pelota de ejercicio (opcional)'],
    instructions: [
      'Plancha frontal: 3 x 30-60 segundos',
      'Plancha lateral: 3 x 20-40 segundos cada lado',
      'Bird dog: 3 x 10 repeticiones cada lado',
      'Dead bug: 3 x 10 repeticiones cada lado',
      'Russian twists: 3 x 20 repeticiones',
      'Glute bridge: 3 x 15 repeticiones'
    ],
    tips: [
      'Mantén la respiración durante todos los ejercicios',
      'Calidad sobre cantidad: mejor menos tiempo pero bien ejecutado',
      'Progresa gradualmente aumentando el tiempo de las planchas'
    ],
    muscles: ['Core', 'Glúteos', 'Estabilizadores'],
    author: 'Tom Fitness',
    createdAt: '2024-01-23',
    featuredImage: '/icon/funcional.png',
    tags: ['core', 'funcional', 'estabilidad', 'resistencia']
  },
  {
    id: 'func-2',
    title: 'Movilidad y flexibilidad post-entrenamiento',
    description: 'Rutina de estiramiento y movilidad para después de entrenar.',
    categories: [EXERCISE_CATEGORIES.FUNCTIONAL, EXERCISE_CATEGORIES.RUNNING, EXERCISE_CATEGORIES.CYCLING, EXERCISE_CATEGORIES.SWIMMING, EXERCISE_CATEGORIES.TRIATHLON],
    difficulty: 'principiante',
    duration: '20 min',
    equipment: ['Colchoneta', 'Banda elástica (opcional)'],
    instructions: [
      'Estiramiento de cuádriceps: 2 x 30 seg cada pierna',
      'Estiramiento de isquiotibiales: 2 x 30 seg cada pierna',
      'Estiramiento de gemelos: 2 x 30 seg cada pierna',
      'Estiramiento de hip flexors: 2 x 30 seg cada pierna',
      'Postura del niño: 2 x 45 segundos',
      'Rotaciones de cadera: 10 en cada dirección',
      'Rotaciones de hombros: 10 hacia adelante y atrás'
    ],
    tips: [
      'Realiza los estiramientos cuando los músculos estén calientes',
      'No rebotes durante los estiramientos estáticos',
      'Respira profundamente y relájate durante cada posición'
    ],
    muscles: ['Todo el cuerpo', 'Enfoque en flexibilidad'],
    author: 'Nati Wellness',
    createdAt: '2024-01-24',
    featuredImage: '/icon/funcional-2.png',
    tags: ['movilidad', 'flexibilidad', 'estiramiento', 'recuperación']
  },
  {
    id: 'func-3',
    title: 'Fuerza funcional para triatletas',
    description: 'Ejercicios de fuerza específicos que mejoran el rendimiento en las tres disciplinas.',
    categories: [EXERCISE_CATEGORIES.FUNCTIONAL, EXERCISE_CATEGORIES.TRIATHLON],
    difficulty: 'intermedio',
    duration: '40 min',
    equipment: ['Mancuernas', 'Barra', 'Colchoneta'],
    instructions: [
      'Sentadillas con peso: 3 x 12 repeticiones',
      'Peso muerto rumano: 3 x 10 repeticiones',
      'Remo con mancuerna: 3 x 10 cada brazo',
      'Press militar: 3 x 8 repeticiones',
      'Estocadas con peso: 3 x 10 cada pierna',
      'Pull-ups o dominadas asistidas: 3 x 6-10 repeticiones'
    ],
    tips: [
      'Enfócate en la técnica antes que en el peso',
      'Descansa 60-90 segundos entre series',
      'Ajusta el peso según tu nivel de fuerza actual'
    ],
    muscles: ['Cuerpo completo', 'Fuerza funcional'],
    author: 'Agus Strength',
    createdAt: '2024-01-25',
    featuredImage: '/icon/funcional.png',
    tags: ['fuerza', 'funcional', 'triatlón', 'gym']
  }
]
