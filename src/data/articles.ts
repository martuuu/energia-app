import { ArticleSection, SectionType } from '@/types/content-sections'
import { SPORT_CATEGORIES } from '@/constants'

// Tipos para artículos
export interface Article {
  id: string
  slug: string
  title: string
  excerpt: string
  category: string
  author: string
  publishedAt: string
  featuredImage: string
  readTime: string
  tags: string[]
  content: ArticleSection[] // Solo sistema de secciones modular
  links?: {
    label: string
    url: string
    description?: string
  }[] // Enlaces a entrenamientos relacionados
}

// Artículo 1: Técnicas avanzadas de respiración para running
const runningBreathingArticle: ArticleSection[] = [
  {
    id: 'breathing-1',
    type: SectionType.TEXT,
    order: 1,
    title: 'Introducción a la respiración en el running',
    content: `La respiración es uno de los aspectos más importantes y a menudo subestimados del running. Una técnica de respiración adecuada puede marcar la diferencia entre un entrenamiento exitoso y uno agotador.

Cuando corremos, nuestros músculos necesitan más oxígeno para generar energía. Una respiración eficiente nos permite mantener un ritmo constante por más tiempo, reducir la fatiga muscular y mejorar el rendimiento general.`
  },
  {
    id: 'breathing-2',
    type: SectionType.IMAGE,
    order: 2,
    image: {
      src: '/images/runner-road.webp',
      alt: 'Corredor en ruta practicando técnicas de respiración',
      caption: 'La respiración correcta es fundamental para un running eficiente',
      size: 'large'
    }
  },
  {
    id: 'breathing-3',
    type: SectionType.TEXT,
    order: 3,
    title: '¿Por qué es importante la respiración?',
    content: `Una respiración eficiente durante el running nos permite:

• Mantener un ritmo constante por más tiempo
• Reducir la fatiga muscular
• Mejorar el rendimiento general  
• Prevenir el dolor lateral (flato)
• Optimizar el suministro de oxígeno a los músculos`
  },
  {
    id: 'breathing-4',
    type: SectionType.TEXT_IMAGE,
    order: 4,
    title: 'Técnica de respiración rítmica',
    content: `La respiración rítmica es la base de una buena técnica de running. Consiste en coordinar la respiración con los pasos:

**Patrón 3:2**: Inhala durante 3 pasos, exhala durante 2 pasos (para ritmos moderados)

**Patrón 2:2**: Inhala durante 2 pasos, exhala durante 2 pasos (para ritmos más intensos)

Esta coordinación ayuda a mantener un ritmo estable y evita la fatiga prematura.`,
    image: {
      src: '/images/runner-track.webp',
      alt: 'Corredor en pista practicando respiración rítmica',
      caption: 'Coordinar la respiración con los pasos es clave',
      position: 'right'
    }
  },
  {
    id: 'breathing-5',
    type: SectionType.QUOTE,
    order: 5,
    content: 'La respiración es el puente que conecta la vida con la conciencia, y que une tu cuerpo con tus pensamientos.',
    metadata: {
      author: 'Thich Nhat Hanh',
      source: 'Maestro Zen'
    }
  },
  {
    id: 'breathing-6',
    type: SectionType.LIST,
    order: 6,
    title: 'Ejercicios para mejorar tu respiración',
    content: 'Practica estos ejercicios regularmente para desarrollar una respiración más eficiente:',
    metadata: {
      listType: 'numbered',
      items: [
        {
          title: 'Respiración diafragmática en reposo',
          content: 'Acostado, practica la respiración abdominal durante 10 minutos diarios'
        },
        {
          title: 'Caminar consciente',
          content: 'Camina practicando diferentes patrones de respiración antes de correr'
        },
        {
          title: 'Running progresivo',
          content: 'Comienza con respiración nasal y adapta según la intensidad'
        },
        {
          title: 'Meditación de respiración',
          content: 'Dedica 5 minutos diarios a respirar conscientemente'
        }
      ]
    }
  },
  {
    id: 'breathing-7',
    type: SectionType.TEXT,
    order: 7,
    title: 'Conclusión',
    content: `La respiración eficiente se desarrolla con práctica constante. Comienza implementando estas técnicas gradualmente y verás mejoras en tu rendimiento y comodidad al correr.

Recuerda: cada corredor es diferente. Experimenta con diferentes técnicas hasta encontrar la que mejor funcione para ti.`
  }
]

// Artículo 2: Técnica de crol para natación
const swimmingTechniqueArticle: ArticleSection[] = [
  {
    id: 'swim-1',
    type: SectionType.TEXT,
    order: 1,
    title: 'Introducción a la técnica de crol',
    content: `El crol es el estilo de natación más rápido y eficiente. Dominar su técnica no solo te hará nadar más rápido, sino que también reducirá el gasto energético y mejorará tu experiencia en el agua.

En este artículo exploraremos los aspectos fundamentales de la técnica de crol, desde la posición corporal hasta la coordinación de la respiración.`
  },
  {
    id: 'swim-2',
    type: SectionType.IMAGE,
    order: 2,
    title: 'Posición corporal ideal',
    image: {
      src: '/images/running.png',
      alt: 'Nadador en posición horizontal perfecta',
      caption: 'La posición horizontal reduce la resistencia al agua',
      size: 'large'
    }
  },
  {
    id: 'swim-3',
    type: SectionType.TEXT_IMAGE,
    order: 3,
    title: 'La brazada perfecta',
    content: `La brazada de crol se divide en cuatro fases principales:

**1. Entrada al agua**: La mano entra con el dedo medio primero, aproximadamente en línea con el hombro.

**2. Agarre**: Flexiona ligeramente el codo y "agarra" el agua como si fuera sólida.

**3. Tracción**: Empuja el agua hacia atrás en línea recta, manteniendo el codo alto.

**4. Salida**: La mano sale del agua cerca de la cadera, con el dedo meñique primero.`,
    image: {
      src: '/images/running.png',
      alt: 'Secuencia de brazada de crol',
      caption: 'Las cuatro fases de la brazada de crol',
      position: 'right'
    }
  },
  {
    id: 'swim-4',
    type: SectionType.QUOTE,
    order: 4,
    content: 'En natación, la técnica es más importante que la fuerza. Un nadador técnico siempre vencerá a uno fuerte pero sin técnica.',
    metadata: {
      author: 'Adam Peaty',
      source: 'Campeón olímpico de natación'
    }
  },
  {
    id: 'swim-5',
    type: SectionType.LIST,
    order: 5,
    title: 'Errores comunes en la técnica de crol',
    content: 'Evita estos errores frecuentes que pueden arruinar tu técnica:',
    metadata: {
      listType: 'checklist',
      items: [
        {
          title: 'Cabeza muy alta',
          content: 'Mantén la cabeza en posición neutral, mirando hacia el fondo'
        },
        {
          title: 'Brazada cruzada',
          content: 'La mano no debe cruzar la línea central del cuerpo'
        },
        {
          title: 'Patada excesiva',
          content: 'La patada debe ser sutil y continua, no agresiva'
        },
        {
          title: 'Respiración tardía',
          content: 'Comienza la rotación para respirar antes de que la mano salga del agua'
        },
        {
          title: 'Codo bajo',
          content: 'Mantén el codo alto durante toda la fase subacuática'
        }
      ]
    }
  },
  {
    id: 'swim-6',
    type: SectionType.TEXT,
    order: 6,
    title: 'Ejercicios para mejorar',
    content: `Practica estos ejercicios específicos para perfeccionar tu técnica:

**Ejercicio 1 - Crol con puño cerrado**: Nada con los puños cerrados para mejorar el agarre del agua.

**Ejercicio 2 - Crol con un brazo**: Alterna 25m con brazo derecho, 25m con brazo izquierdo.

**Ejercicio 3 - Catch up**: Espera que una mano toque la otra antes de comenzar la siguiente brazada.

**Ejercicio 4 - Respiración bilateral**: Respira cada 3 brazadas para equilibrar la técnica.`
  }
]

// Artículo 3: Mantenimiento de cadena de bicicleta
const cyclingMaintenanceArticle: ArticleSection[] = [
  {
    id: 'bike-1',
    type: SectionType.TEXT,
    order: 1,
    title: 'Importancia del mantenimiento de la cadena',
    content: `La cadena es uno de los componentes más importantes de tu bicicleta. Un mantenimiento adecuado no solo prolonga su vida útil, sino que también mejora la eficiencia de pedaleo y previene costosas reparaciones.

Una cadena bien mantenida puede durar entre 3,000 y 5,000 kilómetros, mientras que una descuidada puede requerir reemplazo en menos de 1,000 kilómetros.`
  },
  {
    id: 'bike-2',
    type: SectionType.LIST,
    order: 2,
    title: 'Herramientas necesarias',
    content: 'Para un mantenimiento completo de la cadena necesitarás:',
    metadata: {
      listType: 'bulleted',
      items: [
        {
          title: 'Desengrasante específico para cadenas',
          content: 'Evita productos agresivos que puedan dañar los sellos'
        },
        {
          title: 'Cepillo de cerdas duras',
          content: 'Para eliminar la suciedad acumulada'
        },
        {
          title: 'Lubricante adecuado',
          content: 'Seco para clima seco, húmedo para condiciones adversas'
        },
        {
          title: 'Trapos limpios',
          content: 'Para secar y aplicar el lubricante'
        }
      ]
    }
  },
  {
    id: 'bike-3',
    type: SectionType.TEXT_IMAGE,
    order: 3,
    title: 'Proceso de limpieza paso a paso',
    content: `**Paso 1**: Aplica desengrasante en toda la cadena y déjalo actuar 5 minutos.

**Paso 2**: Usa el cepillo para frotar cada eslabón, eliminando grasa y suciedad.

**Paso 3**: Enjuaga con agua abundante, evitando presión excesiva.

**Paso 4**: Seca completamente con un trapo limpio.`,
    image: {
      src: '/icon/cycling.png',
      alt: 'Proceso de limpieza de cadena de bicicleta',
      caption: 'Limpieza regular = mejor rendimiento',
      position: 'right'
    }
  }
]

// Artículo 4: Prevención de lesiones en running
const runningInjuryArticle: ArticleSection[] = [
  {
    id: 'injury-1',
    type: SectionType.TEXT,
    order: 1,
    title: 'Las lesiones más comunes en runners',
    content: `El running es un deporte de bajo impacto, pero la repetición del movimiento puede generar lesiones por sobreuso. Las más frecuentes incluyen fascitis plantar, síndrome de la banda iliotibial, tendinitis aquílea y dolores de rodilla.

La buena noticia es que la mayoría de estas lesiones son prevenibles con las estrategias adecuadas.`
  },
  {
    id: 'injury-2',
    type: SectionType.QUOTE,
    order: 2,
    content: 'La prevención es la mejor medicina. Un runner inteligente es aquel que escucha a su cuerpo antes de que le grite.',
    metadata: {
      author: 'Dr. Jordan Metzl',
      source: 'Medicina deportiva'
    }
  },
  {
    id: 'injury-3',
    type: SectionType.LIST,
    order: 3,
    title: 'Estrategias de prevención',
    content: 'Implementa estas estrategias para mantener tu cuerpo saludable:',
    metadata: {
      listType: 'numbered',
      items: [
        {
          title: 'Incremento gradual',
          content: 'Aumenta la distancia no más del 10% cada semana'
        },
        {
          title: 'Calentamiento adecuado',
          content: 'Dedica al menos 10 minutos a activar tu cuerpo'
        },
        {
          title: 'Fortalecimiento muscular',
          content: 'Incluye ejercicios específicos 2-3 veces por semana'
        },
        {
          title: 'Descanso activo',
          content: 'Planifica días de recuperación en tu rutina'
        }
      ]
    }
  }
]

// Artículo 5: Nutrición en triatlón
const triathlonNutritionArticle: ArticleSection[] = [
  {
    id: 'tri-1',
    type: SectionType.TEXT,
    order: 1,
    title: 'La cuarta disciplina del triatlón',
    content: `En el triatlón, la nutrición se considera la cuarta disciplina. Mientras que puedes nadar, pedalear y correr con técnica deficiente y aún terminar la carrera, una estrategia nutricional inadecuada puede arruinar meses de entrenamiento.

La clave está en planificar tu estrategia nutricional tan meticulosamente como planificas tus entrenamientos.`
  },
  {
    id: 'tri-2',
    type: SectionType.TEXT_IMAGE,
    order: 2,
    title: 'Estrategias por distancia',
    content: `**Sprint y Olímpico**: Enfócate en carbohidratos de rápida absorción y mantén la hidratación.

**Half Ironman**: Combina sólidos y líquidos, práctica tu estrategia en entrenamientos largos.

**Ironman**: Planificación detallada cada 30-45 minutos, incluye sodio y electrolitos.`,
    image: {
      src: '/images/tria.png',
      alt: 'Triatleta hidratándose durante la carrera',
      caption: 'Cada distancia requiere una estrategia específica',
      position: 'left'
    }
  },
  {
    id: 'tri-3',
    type: SectionType.LIST,
    order: 3,
    title: 'Errores nutricionales comunes',
    content: 'Evita estos errores que pueden arruinar tu carrera:',
    metadata: {
      listType: 'checklist',
      items: [
        {
          title: 'Probar algo nuevo el día de la carrera',
          content: 'Solo usa productos probados en entrenamientos'
        },
        {
          title: 'Sobrehidratación',
          content: 'Bebe según sed y condiciones climáticas'
        },
        {
          title: 'Ignorar los electrolitos',
          content: 'En esfuerzos largos, el sodio es crucial'
        },
        {
          title: 'Timing inadecuado',
          content: 'Come antes de tener hambre, bebe antes de tener sed'
        }
      ]
    }
  }
]

// Artículo 6: Zapatillas para running con sección de video
const runningsShoesArticle: ArticleSection[] = [
  {
    id: 'shoes-video-1',
    type: SectionType.VIDEO,
    order: 1,
    video: {
      src: 'https://youtu.be/hzk0neQFIfo?si=O9UBSpzt3G3bFvZt',
      title: 'Guía completa: Cómo elegir las zapatillas perfectas para running',
      description: `Elegir las zapatillas correctas es una de las decisiones más importantes para cualquier corredor. En este video te explicamos los factores clave que debes considerar: tipo de pisada, amortiguación, drop, y cómo cada característica afecta tu rendimiento y comodidad.

Aprenderás a identificar tu tipo de pisada, entender las diferencias entre zapatillas minimalistas y maximalistas, y conocer las mejores marcas según tu estilo de carrera. También cubrimos cuándo es momento de cambiar tus zapatillas y cómo cuidarlas para maximizar su durabilidad.`,
      autoplay: false,
      poster: '/images/runner-road.webp'
    }
  },
  {
    id: 'shoes-2',
    type: SectionType.TEXT,
    order: 2,
    title: 'Anatomía de una zapatilla de running',
    content: `Una zapatilla de running está compuesta por varios elementos técnicos que trabajen en conjunto para brindarte comodidad y rendimiento:

**Upper (Parte superior)**: Construido con materiales transpirables como mesh o knit, proporciona sujeción y ventilación.

**Mediasuela**: Corazón de la amortiguación, generalmente hecha de EVA, PU o tecnologías propietarias como Boost o React.

**Outsuela**: La suela exterior que proporciona tracción y durabilidad, con patrones específicos según el terreno.

**Drop**: Diferencia de altura entre el talón y la puntera, típicamente entre 0-12mm, afecta tu mecánica de carrera.`
  },
  {
    id: 'shoes-3',
    type: SectionType.LIST,
    order: 3,
    title: 'Tipos de pisada y zapatillas recomendadas',
    content: 'Identifica tu tipo de pisada para elegir la zapatilla adecuada:',
    metadata: {
      listType: 'numbered',
      items: [
        {
          title: 'Pronadora',
          content: 'El pie rota hacia adentro al impactar. Busca zapatillas con control de movimiento o estabilidad'
        },
        {
          title: 'Neutra',
          content: 'Pisada equilibrada y natural. Zapatillas neutras con buena amortiguación son ideales'
        },
        {
          title: 'Supinadora',
          content: 'El pie rota hacia afuera. Necesitas zapatillas neutras con amortiguación extra en el lateral'
        },
        {
          title: 'Test de la pisada',
          content: 'Haz el test del agua: moja tu pie y pisa sobre papel. La forma te indicará tu tipo de arco'
        }
      ]
    }
  },
  {
    id: 'shoes-4',
    type: SectionType.QUOTE,
    order: 4,
    content: 'Las mejores zapatillas son las que se adaptan a tu pie y tu estilo de carrera, no necesariamente las más caras o populares.',
    metadata: {
      author: 'Alberto Contador',
      source: 'Especialista en biomecánica deportiva'
    }
  },
  {
    id: 'shoes-5',
    type: SectionType.TEXT_IMAGE,
    order: 5,
    title: 'Cuándo cambiar tus zapatillas',
    content: `La mayoría de zapatillas de running duran entre 500-800 kilómetros, pero hay señales que indican cuándo es momento de renovarlas:

**Desgaste de la suela**: Si ves la mediasuela a través del caucho, es hora de cambiar.

**Pérdida de amortiguación**: Si sientes más impacto en tus articulaciones.

**Deformación de la mediasuela**: Compresión visible o asimetría en la amortiguación.

**Kilómetros acumulados**: Lleva un registro de la distancia recorrida con cada par.`,
    image: {
      src: '/images/worn-running-shoes.webp',
      alt: 'Zapatillas de running desgastadas mostrando signos de reemplazo',
      caption: 'Signos claros de que necesitas zapatillas nuevas',
      position: 'right'
    }
  }
]

// Artículos consolidados - Sistema de secciones modulares
export const articles: Article[] = [
  {
    id: 'sample-breathing-techniques',
    slug: 'tecnicas-respiracion-avanzadas-running',
    title: 'Técnicas avanzadas de respiración para corredores',
    excerpt: 'Descubre técnicas avanzadas de respiración que mejorarán tu rendimiento y resistencia en el running.',
    category: SPORT_CATEGORIES.RUNNING,
    author: 'Carlos Mendez',
    publishedAt: '2024-01-20',
    featuredImage: '/images/runner-road.webp',
    readTime: '8 min',
    tags: ['respiración', 'técnica avanzada', 'running', 'rendimiento'],
    content: runningBreathingArticle,
    links: [
      {
        label: 'Entrenamiento de resistencia aeróbica',
        url: '/trainings/aerobic-endurance-training',
        description: 'Mejora tu capacidad pulmonar con estos ejercicios'
      },
      {
        label: 'Técnica de carrera eficiente',
        url: '/trainings/efficient-running-technique',
        description: 'Optimiza tu zancada y postura'
      }
    ]
  },
  {
    id: 'demo-swimming-technique',
    slug: 'tecnica-crol-natacion-perfecta',
    title: 'Técnica perfecta de crol: Guía completa',
    excerpt: 'Domina la técnica de crol con esta guía detallada que incluye ejercicios y corrección de errores comunes.',
    category: SPORT_CATEGORIES.SWIMMING,
    author: 'Ana Torres',
    publishedAt: '2024-01-25',
    featuredImage: '/images/runner.png',
    readTime: '10 min',
    tags: ['técnica', 'crol', 'natación', 'mejora'],
    content: swimmingTechniqueArticle,
    links: [
      {
        label: 'Entrenamiento de técnica de natación',
        url: '/trainings/swimming-technique-drills',
        description: 'Ejercicios específicos para perfeccionar tu brazada'
      },
      {
        label: 'Fortalecimiento para nadadores',
        url: '/trainings/swimmers-strength-training',
        description: 'Rutina de fuerza enfocada en natación'
      }
    ]
  },
  {
    id: 'demo-cycling-maintenance',
    slug: 'mantenimiento-cadena-bicicleta-guia',
    title: 'Mantenimiento de cadena: Guía paso a paso',
    excerpt: 'Aprende a mantener tu cadena en perfecto estado con esta guía detallada de limpieza y lubricación.',
    category: SPORT_CATEGORIES.CYCLING,
    author: 'Luis Rodriguez',
    publishedAt: '2024-01-24',
    featuredImage: '/images/trail.png',
    readTime: '7 min',
    tags: ['mantenimiento', 'cadena', 'ciclismo', 'tutorial'],
    content: cyclingMaintenanceArticle,
    links: [
      {
        label: 'Entrenamiento de fuerza para ciclistas',
        url: '/trainings/cycling-strength-training',
        description: 'Desarrolla potencia en el pedal'
      },
      {
        label: 'Técnica de pedaleo eficiente',
        url: '/trainings/efficient-pedaling-technique',
        description: 'Optimiza tu técnica de pedaleo'
      }
    ]
  },
  {
    id: 'demo-running-injury',
    slug: 'prevencion-lesiones-running-guia',
    title: 'Prevención de lesiones en running: Guía completa',
    excerpt: 'Mantente libre de lesiones con estas estrategias comprobadas de prevención para corredores.',
    category: SPORT_CATEGORIES.RUNNING,
    author: 'Carlos Mendez',
    publishedAt: '2024-01-23',
    featuredImage: '/images/yellow-runner.webp',
    readTime: '12 min',
    tags: ['prevención', 'lesiones', 'running', 'salud'],
    content: runningInjuryArticle,
    links: [
      {
        label: 'Rutina de fortalecimiento para runners',
        url: '/trainings/runner-strength-routine',
        description: 'Ejercicios de prevención de lesiones'
      },
      {
        label: 'Estiramientos dinámicos pre-carrera',
        url: '/trainings/dynamic-stretching-routine',
        description: 'Calentamiento completo para runners'
      }
    ]
  },
  {
    id: 'demo-triathlon-nutrition',
    slug: 'nutricion-triathlon-estrategias-avanzadas',
    title: 'Nutrición en triatlón: Estrategias avanzadas',
    excerpt: 'Domina la cuarta disciplina del triatlón con estrategias nutricionales específicas para cada distancia.',
    category: SPORT_CATEGORIES.TRIATHLON,
    author: 'Maria Gonzalez',
    publishedAt: '2024-01-22',
    featuredImage: '/images/tria.png',
    readTime: '15 min',
    tags: ['nutrición', 'triatlón', 'hidratación', 'rendimiento'],
    content: triathlonNutritionArticle,
    links: [
      {
        label: 'Plan de entrenamiento Ironman',
        url: '/trainings/ironman-training-plan',
        description: 'Preparación completa para larga distancia'
      },
      {
        label: 'Entrenamiento de transiciones',
        url: '/trainings/triathlon-transitions',
        description: 'Mejora tus T1 y T2 en triatlón'
      }
    ]
  },
  {
    id: 'demo-running-shoes-guide',
    slug: 'zapatillas-running-guia-completa',
    title: 'Zapatillas para running: La guía definitiva',
    excerpt: 'Todo lo que necesitas saber para elegir las zapatillas perfectas según tu tipo de pisada y objetivos.',
    category: SPORT_CATEGORIES.RUNNING,
    author: 'Carlos Mendez',
    publishedAt: '2024-01-26',
    featuredImage: '/images/running-shoes.webp',
    readTime: '12 min',
    tags: ['equipamiento', 'zapatillas', 'running', 'guía de compra'],
    content: runningsShoesArticle,
    links: [
      {
        label: 'Análisis de pisada y técnica',
        url: '/trainings/gait-analysis-training',
        description: 'Evalúa y mejora tu técnica de carrera'
      },
      {
        label: 'Fortalecimiento de pies y tobillos',
        url: '/trainings/foot-ankle-strengthening',
        description: 'Previene lesiones y mejora la estabilidad'
      }
    ]
  }
]
