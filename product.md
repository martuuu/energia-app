# Product Specification - Energia App

## Descripción

Aplicación para un club de running, natación, ciclismo y triatletas que permite a los miembros acceder a contenido técnico, eventos y gestión de membresías.

## Funcionalidades MVP

### Artículos Técnicos
- Blogposts con contenido multimedia sobre las 4 disciplinas deportivas
- Soporte para texto, imágenes y videos
- Categorización por disciplina (running, natación, ciclismo, triatlón)

### Eventos
- Visualización de eventos en los que el grupo participará
- Detalles de eventos (fecha, ubicación, tipo de disciplina)
- Registro/interés en eventos

### Mi Usuario
- Perfil de usuario básico
- Gestión de información personal
- Historial de participación

### Contacto
- Información de contacto del club
- Formulario de contacto
- Enlaces a redes sociales

## Escalabilidad Futura

### Membresías y Socios
- Sistema de membresías diferenciadas
- Gestión de ~300 usuarios socios
- Niveles de acceso por tipo de membresía

### Potencial SaaS
- Escalabilidad hasta 500 usuarios
- Funcionalidades premium
- Gestión multi-club

## Reglas de Negocio

### Usuarios
- Un usuario puede tener diferentes niveles de membresía
- Los socios tienen acceso completo al contenido
- Usuarios no registrados pueden ver contenido limitado

### Contenido
- Los artículos deben estar categorizados por disciplina
- Cada artículo debe tener metadatos (autor, fecha, tags)
- El contenido multimedia debe estar optimizado para web y móvil

### Eventos
- Los eventos deben tener estado (próximo, en curso, finalizado)
- Los usuarios pueden expresar interés en participar
- Límites de participación por evento si aplica