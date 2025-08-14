# Design System - Energia App
Colorful app design interface, vibrant and engaging, modern UI/UX, flat design style, user-friendly, intuitive navigation.
## Branding
Necesito que la seccion inicial tenga unas cards grandes que ocupen todo el ancho, con colores background pasteles y que indiquen las 3 actividades del grupo.
Arriba a la izquierda que diga Energia y a la derecha el nombre del usuario con avatar (si esta loggeado)
Abajo el menu tiene que tener Home, Articulos, Eventos, Contacto y Mas. Solo iconos referenciales.
Si se puede, que la app en general adopte un background color pastel color azul o naranja claros pasteles, y el resto de la app que se use el otro color no seleccionado (siempre jugando con un blanco mas bien tirando a pastel).

### Paleta de Colores
"team-blue": "#2563eb", // Vibrant blue from logo
"team-orange": "#f97316", // Orange/gold from logo
"team-blue-dark": "#1d4ed8", // Darker blue variant
"team-orange-light": "#fb923c", // Lighter orange variant
"team-blue-pastel": "#a7c7ff", // Pastel blue variant
"team-orange-pastel": "#ffd4a7", // Pastel orange variant
"cream-white": "#faf9f6", // Cream white

### Tipografía

- Fuente moderna y legible (no generalista)
- Jerarquía visual clara
- Optimizada para lectura en dispositivos móviles

## UX/UI Guidelines

### Estilo General

- Educational app design, focused on sports
- Colorfull style. Sin temor a usar colores (no gradiantes en botones o cards)
- Informativo y atractivo
- UI/UX moderno
- Flat design style
- Navegación intuitiva y user-friendly

### Layout Mobile-First

#### Mobile

- **Navegación**: Bottom navigation bar (estilo iOS)
- **Safe Areas**: Consideración para dispositivos con notch
- **Gestos**: Swipe, pull-to-refresh nativos
- **Transiciones**: Fluidas entre vistas

#### Desktop & Tablet

- Layout responsivo 100%
- Containers apropiados
- Funcionalidades adaptadas al tamaño de pantalla

## Framework y Librerías

### CSS Framework

- **Tailwind CSS**: Framework principal
- **Shadcn/ui**: Componentes base

### Animaciones

- **Animatopy**: Efectos y animaciones preconfiguradas
- **Framer Motion**: Transiciones y animaciones complejas
- **GSAP**: Animaciones visuales avanzadas

## Componentes y Patrones

### Botones

- No usar backgrounds con gradientes
- Estados claros (hover, active, disabled)
- Consistentes en toda la aplicación

### Navegación

- Bottom navigation para móvil
- Breadcrumbs para desktop
- Estados activos claramente definidos

### Contenido

- Cards para artículos
- Grid responsivo
- Lazy loading para imágenes

## Accesibilidad

### Estándares

- Roles ARIA implementados
- Jerarquía visual clara
- Contraste de colores adecuado
- Navegación por teclado

### Testing

- Pruebas de accesibilidad automatizadas
- Validación con lectores de pantalla
