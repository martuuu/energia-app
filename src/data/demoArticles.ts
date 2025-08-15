import { ArticleSection, SectionType } from '@/types/content-sections'
import { SPORT_CATEGORIES } from '@/constants'

// Artículo demo para natación - demuestra múltiples tipos de secciones
export const swimmingTechniqueArticle: ArticleSection[] = [
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
      src: '/images/la-plata.png',
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

// Artículo demo para ciclismo - enfoque en texto e imágenes
export const cyclingMaintenanceArticle: ArticleSection[] = [
  {
    id: 'cycle-1',
    type: SectionType.TEXT_IMAGE,
    order: 1,
    title: 'Limpieza profunda de la cadena',
    content: `Una cadena limpia es esencial para el buen funcionamiento de tu bicicleta. La suciedad acumulada no solo reduce la eficiencia, sino que también acelera el desgaste de componentes.

**Frecuencia recomendada:**
- Después de cada salida bajo lluvia
- Cada 200-300 km en condiciones normales
- Semanalmente si usas la bici diariamente

**Herramientas necesarias:**
- Desengrasante específico para cadenas
- Cepillo de dientes viejo
- Trapos limpios
- Lubricante para cadenas`,
    image: {
      src: '/images/trail.png',
      alt: 'Herramientas de limpieza para bicicleta',
      caption: 'Kit básico de limpieza para mantenimiento',
      position: 'top'
    }
  },
  {
    id: 'cycle-2',
    type: SectionType.LIST,
    order: 2,
    title: 'Proceso paso a paso',
    content: 'Sigue estos pasos para una limpieza efectiva:',
    metadata: {
      listType: 'numbered',
      items: [
        {
          title: 'Preparación',
          content: 'Coloca la bicicleta en un soporte o voltéala con cuidado'
        },
        {
          title: 'Aplicar desengrasante',
          content: 'Rocía generosamente sobre toda la cadena mientras giras los pedales'
        },
        {
          title: 'Dejar actuar',
          content: 'Espera 5-10 minutos para que el producto haga efecto'
        },
        {
          title: 'Cepillar',
          content: 'Usa el cepillo para remover la suciedad adherida'
        },
        {
          title: 'Enjuagar',
          content: 'Limpia con agua tibia, evitando alta presión'
        },
        {
          title: 'Secar',
          content: 'Seca completamente antes de lubricar'
        },
        {
          title: 'Lubricar',
          content: 'Aplica lubricante gota a gota en cada eslabón'
        }
      ]
    }
  },
  {
    id: 'cycle-3',
    type: SectionType.QUOTE,
    order: 3,
    content: 'Una bicicleta bien mantenida no solo dura más, sino que también te da más placer al rodar.',
    metadata: {
      author: 'Sheldon Brown',
      source: 'Mecánico legendario'
    }
  }
]

// Artículo demo para running - foco en listas y quotes
export const runningInjuryArticle: ArticleSection[] = [
  {
    id: 'run-1',
    type: SectionType.TEXT,
    order: 1,
    title: 'Prevención de lesiones en el running',
    content: `Las lesiones son el enemigo número uno de todo corredor. Sin embargo, la mayoría son prevenibles con el conocimiento y cuidados adecuados.

Según estudios, entre el 37% y 56% de los corredores sufren lesiones anualmente. La buena noticia es que implementando estrategias de prevención adecuadas, puedes reducir significativamente este riesgo.`
  },
  {
    id: 'run-2',
    type: SectionType.LIST,
    order: 2,
    title: 'Las 5 lesiones más comunes',
    content: 'Conoce las lesiones más frecuentes y cómo identificarlas:',
    metadata: {
      listType: 'numbered',
      items: [
        {
          title: 'Síndrome de la banda iliotibial',
          content: 'Dolor en la parte externa de la rodilla, especialmente al bajar escaleras'
        },
        {
          title: 'Fascitis plantar',
          content: 'Dolor agudo en el talón, más intenso por las mañanas'
        },
        {
          title: 'Síndrome femoro-patelar',
          content: 'Dolor difuso alrededor o detrás de la rótula'
        },
        {
          title: 'Tendinitis de Aquiles',
          content: 'Dolor y rigidez en el tendón, especialmente por las mañanas'
        },
        {
          title: 'Periostitis tibial',
          content: 'Dolor a lo largo del borde interno de la tibia'
        }
      ]
    }
  },
  {
    id: 'run-3',
    type: SectionType.TEXT_IMAGE,
    order: 3,
    title: 'Importancia del calentamiento',
    content: `El calentamiento prepara tu cuerpo para el esfuerzo y reduce dramáticamente el riesgo de lesiones.

**Calentamiento ideal (10-15 minutos):**
- Caminar ligero (2-3 min)
- Trote suave (3-5 min)
- Ejercicios dinámicos (5-7 min)

Los ejercicios dinámicos activan los músculos específicos que usarás al correr y mejoran la movilidad articular.`,
    image: {
      src: '/images/yellow-runner.webp',
      alt: 'Corredor realizando ejercicios de calentamiento',
      caption: 'El calentamiento dinámico es clave para prevenir lesiones',
      position: 'left'
    }
  },
  {
    id: 'run-4',
    type: SectionType.QUOTE,
    order: 4,
    content: 'La diferencia entre un corredor que se lesiona frecuentemente y uno que no, no está en la suerte, sino en la preparación.',
    metadata: {
      author: 'Dr. Jordan Metzl',
      source: 'Medicina deportiva'
    }
  },
  {
    id: 'run-5',
    type: SectionType.LIST,
    order: 5,
    title: 'Estrategias de prevención',
    content: 'Implementa estas estrategias para mantenerte libre de lesiones:',
    metadata: {
      listType: 'checklist',
      items: [
        {
          title: 'Progresión gradual',
          content: 'Aumenta el volumen no más del 10% semanal'
        },
        {
          title: 'Fortalecimiento',
          content: 'Incluye 2-3 sesiones de fuerza específica por semana'
        },
        {
          title: 'Descanso activo',
          content: 'Programa días de recuperación total'
        },
        {
          title: 'Escucha tu cuerpo',
          content: 'Aprende a diferenciar fatiga normal de dolor'
        },
        {
          title: 'Calzado adecuado',
          content: 'Renueva las zapatillas cada 600-800 km'
        },
        {
          title: 'Superficie variada',
          content: 'Alterna entre asfalto, tierra y césped'
        }
      ]
    }
  }
]

// Artículo demo para triatlón - combinación de todos los tipos
export const triathlonNutritionArticle: ArticleSection[] = [
  {
    id: 'tri-1',
    type: SectionType.TEXT,
    order: 1,
    title: 'Nutrición en triatlón: La cuarta disciplina',
    content: `En triatlón, la nutrición se considera la "cuarta disciplina". Una estrategia nutricional bien planificada puede ser la diferencia entre completar la carrera o abandonar por problemas gastrointestinales o bonk.

La complejidad del triatlón requiere un enfoque diferente al de deportes de una sola disciplina.`
  },
  {
    id: 'tri-2',
    type: SectionType.IMAGE,
    order: 2,
    image: {
      src: '/images/tria.png',
      alt: 'Mesa de avituallamiento en triatlón',
      caption: 'La planificación nutricional es crucial en carreras largas',
      size: 'full'
    }
  },
  {
    id: 'tri-3',
    type: SectionType.TEXT_IMAGE,
    order: 3,
    title: 'Hidratación por disciplina',
    content: `Cada disciplina del triatlón presenta desafíos únicos para la hidratación:

**Natación**: Aunque no sudes visiblemente, sí pierdes líquidos. Pre-hidratación es clave.

**Ciclismo**: Es la disciplina donde más puedes y debes hidratarte. Aprovecha para "cargar" líquidos.

**Running**: La disciplina más desafiante para la hidratación debido al rebote y la incomodidad.`,
    image: {
      src: '/images/runner.png',
      alt: 'Triatleta hidratándose durante la carrera',
      caption: 'La hidratación debe adaptarse a cada disciplina',
      position: 'bottom'
    }
  },
  {
    id: 'tri-4',
    type: SectionType.LIST,
    order: 4,
    title: 'Plan nutricional por distancia',
    content: 'Adapta tu estrategia según la distancia de carrera:',
    metadata: {
      listType: 'numbered',
      items: [
        {
          title: 'Sprint (750m-20k-5k)',
          content: 'Solo hidratación. No necesitas carbohidratos durante la carrera'
        },
        {
          title: 'Olímpico (1.5k-40k-10k)',
          content: 'Hidratación + gel/bebida deportiva en el ciclismo'
        },
        {
          title: '70.3 (1.9k-90k-21k)',
          content: '60-90g carbohidratos/hora + electrolitos + proteína'
        },
        {
          title: 'Ironman (3.8k-180k-42k)',
          content: 'Estrategia completa: sólidos, líquidos, electrolitos, cafeína'
        }
      ]
    }
  },
  {
    id: 'tri-5',
    type: SectionType.QUOTE,
    order: 5,
    content: 'En Ironman, no gana el más fuerte, sino el que mejor maneja su nutrición e hidratación.',
    metadata: {
      author: 'Chrissie Wellington',
      source: '4x Campeona Mundial Ironman'
    }
  },
  {
    id: 'tri-6',
    type: SectionType.TEXT,
    order: 6,
    title: 'Consejos finales',
    content: `**Practica tu estrategia**: Nunca pruebes algo nuevo el día de carrera.

**Timing de carbohidratos**: Comienza a alimentarte antes de sentir hambre.

**Temperatura del líquido**: Los líquidos fríos se absorben más rápido.

**Backup plan**: Siempre ten un plan B por si tu estómago no tolera tu plan principal.

Recuerda: la nutrición perfecta sobre el papel puede no funcionar para ti. La individualización es clave.`
  }
]

// Exportar todos los artículos demo
export const demoArticles = {
  swimming: {
    id: 'demo-swimming-technique',
    slug: 'tecnica-crol-natacion-perfecta',
    title: 'Técnica perfecta de crol: Guía completa',
    excerpt: 'Domina la técnica de crol con esta guía detallada que incluye ejercicios y corrección de errores comunes.',
    category: SPORT_CATEGORIES.SWIMMING,
    author: 'Ana Torres',
    publishedAt: '2024-01-25',
    featuredImage: '/icon/swim.png',
    readTime: '10 min',
    tags: ['técnica', 'crol', 'natación', 'mejora'],
    content: swimmingTechniqueArticle
  },
  cycling: {
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
    content: cyclingMaintenanceArticle
  },
  running: {
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
    content: runningInjuryArticle
  },
  triathlon: {
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
    content: triathlonNutritionArticle
  }
}
