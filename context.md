Necesitamos crear 3 files de contexto dentro de VSC para dar contexto total al editor. Seran: product.md, design.md y structure.md.

Este file contiene todas las descripciones para poder generar el contenido de esos 3 archivos. 

En product necesitamos separar la Descripcion, Funcionalidades, Logicas y demas reglas respecto al producto final. 

En design.md tendremos todo lo relativo a UI, animaciones, Branding, colores que tenemos que usar, layouts y todo lo relativo a la creacion y configuracion del Frontend. Lo ideal es crear un documento de contexto.

Por ultimo, el structure.md tiene que ser un file que describa todo lo relativo a la estructura, funcionamiento, tecnologias y practicas para el Backend, Deploy y otros aspectos mas enfocados al funcionamiento general de la App.

En los 3 casos, el .md tiene que ser simple, solo titulos y descripciones. Si son varios items por titulo, solo se agrega un bullet list con nombre y descripcion. 

## **Descripcion de Proyecto**
Quiero armar una aplicacion para mi grupo de running, en donde se puedan ver articulos deportivos y eventos en los que el grupo participara. Escalabilidad: App con socios y membresias. 300 usuarios socios poseen.

## **Requerimientos/Features**

La app de momento seria para un club de running, natación, ciclismo y triatletas. Requieren en una primera instancia que se arme una mini app con artículos técnicos sobre las 4 disciplinas que de momento no serian mas que unos blogpost con multimedia. Por artículos me refiero a entradla de texto, videos e imagenes. En este MVP se puede agregar dos secciónes mas, contacto y eventos (junto con Mi Usuario).

De ahora en adelante estan todas las Reglas y consideraciones que tenemos que tomar para todos mis proyectos. Segun el proyecto, en el prompt a la IA dare mas indicaciones especificas en cuanto a techs a usar, pero en general SIEMPRE vamos a usar las que mencionamos a continuacion. 

Las reglas, convenciones y practicas que seteamos de aca en adelante, deben ser siempre tenidas en cuenta como contexto

## **Tecnologias Base**

Las tecnologias core serian las siguientes:

Turborepo - Monorepo para los casos que necesitemos un Back aparte con Nest.js y usamos repo comun para apps simples con Front y Back en Next.js. Usamos shared packages para UI y Types.

Next - Version 15 en adelante, usado mas que nada para el Frontend.

React

Tailwind - Material Taildwind, Shadcn/ui, Radix y otros templates que puedan usarse.

Nest.js

Prisma (ORM)

PostgreSQL

GraphQL o RESTApi (una u otra segun funcionalidad, pero en un principio siempre serian RESTApi. Para casos de WebApp mas orientadas a Mobile, usamos GraphQL -ya es tipado como plus-. Para casos que se requieran subir archivos, recibir webhoooks o enviar strings de datos).

Redux - Necesitamos construir Apps que desde el inicio sean escalables (siempre considera que cada App o Sitio que se arme puede escalar a un Saas “pequeño” de 500 usuarios por ejemplo

Netlify/Vercel - Preferentemente Netlify, pero si el proyecto tiene mas que ver con Vercel, es opcion.

Neon - Es de Vercel, creo que este seria un caso para usar Vercel y Neon (Nos evitamos deploys de back). Se integra excelentemente con PostgreSQL.

Docker

Supabase o GraphQL/GraphBase - Como backing as a service para pequeñas apps.

SDK de IA - Npm de Vercel para la facil integracion de modelos de IA.

PostHog. Analiticas implementadas en codigo. Testing, etiquetar funcionlidades.

## **Arquitectura del Proyecto**

Excelente infraestructura de proyecto. Requiero que sea muy escalable, por eso la seleccion de tech.

Organizar el codigo para escalibilidad y segmentacion por componentes reutilizables. Separacion de responsabilidades entre componentes y logica.

OPCIONES: Separacion en Capas, Clean Architecture o **MODULARIZACION** (preferentemente siempre usar modularizacion por un tema de que usamos Next, Nest y React).

Evitar dependencias circulares o acoplamientos innecesarios.

Consideraciones para escribir codigo:

Prioriza siempre soluciones simples.

Busca siempre código existente para iterar en lugar de crear nuevo código desde cero.

Evita la duplicación de código siempre que sea posible; esto implica revisar si ya existe una parte del código con lógica o funcionalidad similar.

Escribe código que tenga en cuenta los diferentes entornos: desarrollo, pruebas y producción.

Asegúrate de hacer solo los cambios solicitados o aquellos en los que tengas plena confianza de que están bien comprendidos y están relacionados con la solicitud.

Al corregir un error o bug, no introduzcas un nuevo patrón o tecnología sin antes haber agotado todas las opciones con la implementación actual. Y si finalmente decides hacerlo, asegúrate de eliminar la implementación anterior para evitar lógica duplicada.

Mantén la base de código limpia y bien organizada.

Evita escribir scripts directamente en archivos si es posible, especialmente si ese script solo se va a ejecutar una vez.

## **Frontend**

Metaframworks (Next.js - enrutador, server side rendering, creacion de API de backend -que generalmente no lo usaremos de API-). Ideal para apps simples, Marketing Landings o mini-apps.

Always use Typescript

I prefer always Function Components (we never use Classes).

Siempre usar los hooks de React y Next.js. useMemo, useCallback y React.memo() pueden ser muy utiles para mejorar performance.

Redux y manejo de estados. Redux puede ser muy overkill para algunas apps, pero tiene un manejo muy bueno y estoy familiarizado con su funcionamiento. Podemos usarlo con useState tranquilamente y dejar Redux para cosas mas importantes y consistencia en datos.

Siempre que podamos, usemos solo un useState en vez de multiples estados (ejemplo: setear 4 estados con typescript y solo vamos cambiando el string).
Keep track of an “active” or “selected” item by its ID, dont duplicate the whole object. **One source of truth in programming, and this one is OUR DATABASE ID.**

Put data like filters, vatiants, pagintation in the URL, not useState for that. (This apply when we dont create de logic on Backend).

Keep useEffect simple: one concern per useEffect.

Use useQuery to avoid fetch calls on useEffects.

Mantener los componentes simples, children pattern, updater function for useState. Importante para mantener consistencia en la App, transiciones y loaders entre distintas paginas y componentes.

Don’t use setter function from useState, instead create a separate event handler function.

Componentes mas agnosticos.

Solo componetizamos utilidades o funcionalidades que probablemente reusemos en un futuro. Recordemos que es una App escalable.

Hard-coded values / Magix values: Shouldn’t be scattered throughout the codebase. We need a separate folder/file with constants.

Avoid unnecesary markup (div’s)

Dont add layout styles to a reusable component

## **Backend**

Diseño de base de datos relacionales (PostgreSQL)

Diagramas de Entidad Relacion (ERD)

Api Design with identifiers (ID) - Avoid duplicatation data working async - UUID / GUI - Complete full process - push it to the front stack. Assign meaningful identifiers (like geo or type related).

Enviar actions desde el Servidor directas al cliente como respuesta, para sugerir acciones y cambios de estado en el momento.

Mantenerlas consistentes

Modelar relaciones

Crear tablas estructuradas, claras y coherentes.

Crear claves foraneas y primarias.

Cracion de Roles para el sitio.

Normalizar datos (con o sin Prisma).

Evitar duplicacion de datos innecesaria

Optimizar consultas para que no se relenticen

PRINCIPIOS ACID

Manejo de respuestas de servidor, con codigo y log de errores.

RESTApi en los casos que no usemos Graphql

Configuraciones avanzadas: Backups. Monitoreo. Rate Limiting. Guards y Decorators. Protected Routes. Refresh Token strategy. Password recovery flow.

Security audit. Load testing, Colas de trabajo y Balanceadores de carga.

Monitoring setup (Sentry)

Analytics integration

## Autenticacion y Autorizacion

Autenticacion con Nest.js (cuando lo usemos).

JWT - Creacion de token de acceso y refresh.

Casos de servicio de terceros como Auth0, Auth o Firebase. Servicio para logs de errores, Sentry o LogRocket.

## MCP

Supabase - Shadcdn/ui - Material UI.

General reglas claras.

## **Theme - Branding**

Paleta de Colores:

/* CSS */
"team-blue": "#a5c9ff",        /* Pastel blue */
"team-orange": "#ffd4a8",      /* Pastel orange */
"team-blue-dark": "#8fb8f5",   /* Pastel dark blue */
"team-orange-light": "#ffe0b8",/* Pastel light orange */
"federal-blue": "#b3b0e6"      /* Pastel navy */

Tipografía: Alguna acorde al estilo definido.

## **UX/UI**

Estilo y prompt inicial: Educational app design, informative and engaging, modern UI/UX, flat design style, user-friendly, intuitive navigation.

Mobile: Layout Mobile-First. Bottom navigation bar (iOS style). Safe areas para dispositivos con notch. Gestos nativos (swipe, pull-to-refresh). Transiciones fluidas entre vistas.

Desktop: Asegurar un buen Layout para Tablets y Desktop, Container y funcionalidades. 100% responsive.

Framework de CSS: Taildwind

Librerias como Shadcn/ui y Material UI con su MCP server configurado. Recordar agregar rules correctas para implementar codigo correcto.

Shadcn/ui y tweakcn para modificar paletas de colores si es necesario.

Firecrawl para clonar sitios.

Roles ARIA, buena jerarquia visual, fuente a eleccion tuya, pero ninguna generalista.

Nunca uses un boton con background gradiante.

NUNCA crees animaciones o efectos unicos, tenemos muchos disponibles en la web con Animatopy, Framer Motion y GSAP.

Animaciones. Excelente recurso Animatopy (https://sarthology.github.io/Animatopy/)

Framer Motion para transiciones y animaciones un poco mas complejas.

GSAP si requerimos algo mas visual.

## **Deployment y Produccion**

Que es un servidor y como alojar una aplicacion alli.

Conceptos y diferencias de SaaS, Paas, IaaS y en el sitio.

Dominios personalizados, certificados SSD y variables de entorno

CI/CD: Automatizacion de despliegue. En los casos que tengamos un servicio cloud propio, tenemos que integrarlo manualmente. 

Creacion e implentacion de logs para errores en produccion.

Netlify - Vercel - Heroku - Railway

De momento Neon es una buena opcion. Eventualmente voy a migrar a algun servcio de despliegue y trabajar en un servidor local propio (Para apps personales).

## **Configuraciones**

Iniciacion de git, link a repo remoto e instalacion de dependencias basicas.

Podes comenzar con la primera parte de configuracion e instalacion de todo lo esencial para tener la app local corriendo. Navbar y Layout basico para renderizar en el Front..