# Structure & Architecture - Energia App

## Tecnologías Core

### Frontend & Backend
- **Next.js 15+**: Framework principal (frontend + API routes para backend)
- **React**: Librería de componentes
- **TypeScript**: Lenguaje principal
- **Tailwind CSS**: Framework de estilos

### Base de Datos
- **PostgreSQL**: Base de datos principal
- **Prisma**: ORM para manejo de datos
- **Neon**: Hosting de PostgreSQL (integración con Vercel)

### Estado y Datos
- **Redux**: Manejo de estado global para escalabilidad
- **useState**: Estados locales simples
- **REST API**: Comunicación cliente-servidor (API routes de Next.js)

## Arquitectura del Proyecto

### Estructura Modular
- Organización por módulos/features
- Componentes reutilizables
- Separación clara de responsabilidades
- Evitar dependencias circulares

### Patrones de Código
- **Function Components**: Solo componentes funcionales
- **Custom Hooks**: Lógica reutilizable
- **One Source of Truth**: Database ID como identificador único
- **URL State**: Filtros y paginación en URL, no en useState

## Estructura de Carpetas

```
/src
  /app                 # App Router de Next.js
    /api              # API routes
    /articles         # Páginas de artículos
    /events           # Páginas de eventos
    /contact          # Página de contacto
    /profile          # Perfil de usuario
  /components         # Componentes reutilizables
    /ui              # Componentes base (shadcn/ui)
    /common          # Componentes comunes
  /lib               # Utilidades y configuraciones
  /hooks             # Custom hooks
  /store             # Redux store
  /constants         # Constantes y magic values
  /types             # Tipos de TypeScript
```

## Base de Datos

### Diseño Relacional
- **Entidades principales**: Users, Articles, Events, Categories
- **Relaciones**: FK bien definidas
- **Normalización**: Evitar duplicación de datos
- **Índices**: Optimización de consultas

### Principios ACID
- Transacciones consistentes
- Integridad referencial
- Backup y recuperación

## API Design

### REST Endpoints
- Identificadores UUID/GUID
- Respuestas consistentes
- Códigos de estado HTTP apropiados
- Logging de errores
- Rate limiting

### Autenticación
- **JWT**: Tokens de acceso y refresh
- **Next.js Middleware**: Protección de rutas
- **Roles**: Sistema de permisos

## Deployment

### Hosting
- **Vercel**: Hosting principal (integración nativa con Next.js)
- **Neon**: Base de datos PostgreSQL
- **Domain**: Configuración de dominio personalizado
- **SSL**: Certificados automáticos

### CI/CD
- **GitHub Actions**: Automatización de deploy
- **Environment Variables**: Configuración por entorno
- **Preview Deployments**: Branches de prueba

## Monitoreo y Analytics

### Herramientas
- **PostHog**: Analytics y testing de features
- **Sentry**: Logging y monitoreo de errores
- **Vercel Analytics**: Métricas de performance

### Performance
- **useMemo/useCallback**: Optimización de renders
- **React.memo()**: Componentes optimizados
- **Image Optimization**: Next.js Image component
- **Code Splitting**: Lazy loading de componentes

## Desarrollo

### Configuración Inicial
- Git repository setup
- Dependencias base instaladas
- Environment variables configuradas
- Navbar y layout básico funcional

### Buenas Prácticas
- **Código simple**: Priorizar soluciones simples
- **Reutilización**: Buscar código existente antes de crear nuevo
- **Consistency**: Mantener patrones consistentes
- **Environment-aware**: Código que funcione en dev, test y prod