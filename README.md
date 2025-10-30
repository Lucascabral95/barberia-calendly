<<<<<<< HEAD
<p align="center">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="React Logo" width="180"/>
</p>

# Plataforma de Reservas para Barbería

## Descripción General

**Plataforma de Reservas para Barbería** es una aplicación web moderna desarrollada con [React 18](https://react.dev/), [TypeScript](https://www.typescriptlang.org/) y [Vite](https://vitejs.dev/), diseñada para proporcionar una experiencia de reserva fluida para servicios de barbería. Este frontend implementa principios de Clean Architecture, se integra con Calendly para la programación de citas, cuenta con una UI responsiva construida con Bootstrap y SCSS, y sigue las mejores prácticas de la industria.

---

## ⚙️ Características Principales

- **Sistema de Reservas Online:** Integración perfecta con Calendly para programación de citas en tiempo real
- **Catálogo de Servicios:** Exhibición completa de servicios de barbería con descripciones detalladas y precios
  - Cortes de cabello
  - Afeitado tradicional
  - Recorte y arreglo de barba
  - Perfilado de cejas
  - Estilizado y peinado
  - Tratamientos capilares
- **Sección Sobre Nosotros:** Presentación profesional de la barbería con misión y valores
- **Información de Contacto:** Detalles de contacto completos con Google Maps integrado
- **Integración con Redes Sociales:** Enlaces directos a plataformas de redes sociales para mayor engagement
- **Diseño Responsivo:** UI completamente responsiva optimizada para escritorio, tablet y dispositivos móviles
- **UI/UX Moderna:** Interfaz limpia e intuitiva con animaciones y transiciones suaves
- **Listas de Precios:** Información detallada de precios para todos los servicios
- **Notificaciones Toast:** Sistema de feedback al usuario con React Hot Toast y Sonner
- **Clean Architecture:** Separación clara entre capas de presentación, infraestructura y lógica de negocio
- **Custom Hooks:** Lógica reutilizable encapsulada en hooks personalizados
- **TypeScript:** Seguridad de tipos completa en toda la aplicación
- **Optimización de Rendimiento:** Tiempos de carga rápidos con la optimización de build de Vite

---

## 🚀 Tecnologías Utilizadas

### Core
- **Framework:** [React 18](https://react.dev/)
- **Lenguaje:** [TypeScript 5.9](https://www.typescriptlang.org/)
- **Build Tool:** [Vite 5.4](https://vitejs.dev/)
- **Enrutamiento:** [React Router DOM v6](https://reactrouter.com/)

### UI y Estilos
- **Framework CSS:** [Bootstrap 5.3](https://getbootstrap.com/)
- **Preprocesador:** [SASS/SCSS](https://sass-lang.com/)
- **Iconos:** [React Icons 5.3](https://react-icons.github.io/react-icons/)

### Gestión de Estado y Datos
- **Gestión de Estado:** [Zustand 4.5](https://github.com/pmndrs/zustand)
- **Cliente HTTP:** [Axios 1.7](https://axios-http.com/)

### Integraciones
- **Sistema de Reservas:** [React Calendly 4.3](https://github.com/tcampb/react-calendly)

### Notificaciones y Feedback
- **Notificaciones Toast:** [React Hot Toast 2.4](https://react-hot-toast.com/)
- **Alternativa Toast:** [Sonner 1.5](https://sonner.emilkowal.ski/)

### Herramientas de Desarrollo
- **Linting:** [ESLint 9](https://eslint.org/)
- **Verificación de Tipos:** [TypeScript ESLint 8.46](https://typescript-eslint.io/)

---

## Tabla de Contenidos

- [Instalación](#instalación)
- [Uso](#uso)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Arquitectura](#arquitectura)
- [Rutas Disponibles](#rutas-disponibles)
- [Hooks Personalizados](#hooks-personalizados)
- [Descripción de Componentes](#descripción-de-componentes)
- [Catálogo de Servicios](#catálogo-de-servicios)
- [Contribuciones](#contribuciones)
- [Licencia](#licencia)
- [Contacto](#contacto)

---

## Instalación

1. **Cloná el repositorio:**

```bash
git clone https://github.com/Lucascabral95/barberia-calendly.git
cd calendar
```

2. **Instalá las dependencias:**

```bash
npm install
```

3. **Compilá el proyecto:**

```bash
npm run build
```

---

## Uso

### Modo Desarrollo

```bash
npm run dev
```

La aplicación estará disponible en: `http://localhost:5173`

### Modo Producción

```bash
npm run build
npm run preview
```

### Linting y Verificación de Tipos

```bash
# Ejecutar linter
npm run lint

# Verificar tipos de TypeScript
npx tsc --noEmit
```

---

## Estructura del Proyecto

```bash
calendar/
├── public/                           # Assets estáticos
│   ├── img/                          # Imágenes
│   │   ├── barberia-cinco.jpg
│   │   ├── barberia-cuatro.webp
│   │   ├── barberia-nueve.webp
│   │   └── ...                       # Más imágenes
│   └── vite.svg
│
├── src/
│   ├── Components/                   # Componentes legacy y layout principal
│   │   └── Main/                     # Componente de layout principal
│   │       ├── Main.tsx              # Composición de página principal
│   │       └── Main.scss             # Estilos principales
│   │
│   ├── Routes/                       # Configuración de rutas
│   │   ├── PublicRoutes.tsx          # Definición de rutas públicas
│   │   └── PrivatesRoutes.tsx        # Definición de rutas privadas
│   │
│   ├── infrastructure/               # Capa de infraestructura (Clean Architecture)
│   │   ├── config/                   # Configuraciones de la aplicación
│   │   │
│   │   ├── constants/                # Constantes de la aplicación
│   │   │   ├── about.ts              # Constantes de sección "Sobre Nosotros"
│   │   │   ├── branding.ts           # Información de marca
│   │   │   ├── constants.calendly.ts # Configuración de Calendly
│   │   │   ├── constants.config.calendy.ts
│   │   │   ├── constants.contact.ts  # Información de contacto
│   │   │   ├── constants.footer.ts   # Datos del footer
│   │   │   ├── constants.images.ts   # Rutas de imágenes
│   │   │   ├── constants.price.ts    # Datos de precios
│   │   │   ├── constants.socialMedia.ts # Enlaces de redes sociales
│   │   │   ├── navigation.ts         # Items de navegación
│   │   │   ├── services.ts           # Datos de servicios
│   │   │   └── index.ts              # Barrel export
│   │   │
│   │   ├── interfaces/               # Interfaces de TypeScript
│   │   │   ├── calendly.interface.ts # Tipos de Calendly
│   │   │   ├── common.interface.ts   # Interfaces comunes
│   │   │   ├── contact.interface.ts  # Tipos de contacto
│   │   │   ├── corte.interface.ts    # Tipos de servicios de corte
│   │   │   ├── navigation.interface.ts # Tipos de navegación
│   │   │   ├── service.interface.ts  # Tipos de servicios
│   │   │   └── index.ts              # Barrel export
│   │   │
│   │   ├── services/                 # Servicios de lógica de negocio
│   │   │   └── index.ts
│   │   │
│   │   └── utils/                    # Funciones utilitarias
│   │       ├── utils.sonner.ts       # Utilidades de Sonner
│   │       ├── utils.toast.ts        # Utilidades de Toast
│   │       └── index.ts              # Barrel export
│   │
│   ├── presentation/                 # Capa de presentación
│   │   ├── components/               # Componentes de UI
│   │   │   ├── AboutMe/              # Sección "Sobre Nosotros"
│   │   │   │   ├── AboutMe.tsx
│   │   │   │   ├── AboutMe.scss
│   │   │   │   └── AboutMeMobile.tsx
│   │   │   │
│   │   │   ├── Calendly/             # Integración con Calendly
│   │   │   │   ├── Calendly.tsx
│   │   │   │   └── Calendly.scss
│   │   │   │
│   │   │   ├── ChildComponents/      # Componentes hijos reutilizables
│   │   │   │   ├── ChildStructure/
│   │   │   │   └── StructureMobile/
│   │   │   │
│   │   │   ├── ContactUs/            # Sección de contacto
│   │   │   │   ├── ContactUs.tsx
│   │   │   │   ├── ContactUs.scss
│   │   │   │   └── ContactUsMobile.tsx
│   │   │   │
│   │   │   ├── Cortes/               # Exhibición de servicios
│   │   │   │   ├── Cortes.tsx
│   │   │   │   ├── Cortes.scss
│   │   │   │   └── CortesMobile.tsx
│   │   │   │
│   │   │   ├── Footer/               # Componente de footer
│   │   │   │   ├── Footer.tsx
│   │   │   │   └── Footer.scss
│   │   │   │
│   │   │   ├── Header/               # Componente de header
│   │   │   │   ├── Header.tsx
│   │   │   │   ├── Header.scss
│   │   │   │   ├── HeaderDesktop.tsx
│   │   │   │   └── HeaderMobile.tsx
│   │   │   │
│   │   │   ├── MapEmbed/             # Integración de Google Maps
│   │   │   ├── PriceList/            # Lista de precios desktop
│   │   │   ├── PriceListMobile/      # Lista de precios mobile
│   │   │   ├── ServiceCard/          # Componente de tarjeta de servicio
│   │   │   ├── SocialMediaLinks/     # Enlaces de redes sociales
│   │   │   └── SpecialOfferCard/     # Ofertas especiales
│   │   │
│   │   └── hooks/                    # Custom React hooks
│   │       ├── useMenu.ts            # Gestión de estado del menú
│   │       └── index.ts              # Barrel export
│   │
│   ├── JSON/                         # Archivos de datos JSON
│   │   └── Cortes.json               # Datos de servicios
│   │
│   └── vite-env.d.ts                 # Tipos de entorno de Vite
│
├── main.tsx                          # Punto de entrada de la aplicación
├── index.html                        # Template HTML
├── .gitignore                        # Reglas de Git ignore
├── eslint.config.js                  # Configuración de ESLint
├── package.json                      # Dependencias y scripts
├── tsconfig.json                     # Configuración de TypeScript
├── tsconfig.app.json                 # Configuración de TypeScript para la app
├── tsconfig.node.json                # Configuración de TypeScript para Node
├── vite.config.ts                    # Configuración de Vite
└── README.md                         # Documentación
```

---

## Arquitectura

El proyecto sigue los principios de **Clean Architecture**, separando las responsabilidades en capas distintas:

### 1. Capa de Infraestructura (`infrastructure/`)

Contiene lógica de bajo nivel, configuraciones externas y servicios de negocio:

- **`config/`**: Configuraciones de servicios externos
- **`constants/`**: Datos estáticos y constantes de configuración
- **`interfaces/`**: Definiciones de tipos de TypeScript
- **`services/`**: Servicios de lógica de negocio
- **`utils/`**: Funciones utilitarias y helpers

### 2. Capa de Presentación (`presentation/`)

Contiene toda la UI y lógica de presentación:

- **`components/`**: Componentes de React organizados por funcionalidad
- **`hooks/`**: Custom hooks de React para lógica reutilizable

### 3. Capa de Enrutamiento (`Routes/`)

Configuración centralizada de rutas con rutas públicas y privadas.

### 4. Layout Principal (`Components/`)

Layout principal de la aplicación que compone todas las secciones.

---

## Rutas Disponibles

### Rutas Públicas

| Ruta | Componente | Descripción |
|------|------------|-------------|
| `/` | `Main` | Página principal con todas las secciones |
| `/*` | `Main` | Ruta catch-all (fallback) |

### Secciones de la Aplicación

La página principal está compuesta por las siguientes secciones:

1. **Header**: Navegación y branding
2. **Sobre Nosotros**: Introducción de la barbería y valores
3. **Servicios (Cortes)**: Exhibición de servicios disponibles
4. **Reservas (Calendly)**: Interfaz de programación de citas
5. **Contacto**: Información de contacto y ubicación
6. **Footer**: Enlaces adicionales y redes sociales

---

## Hooks Personalizados

### `useMenu`

Hook para gestionar el estado del menú móvil:

```typescript
const {
  isMenuOpen,      // Estado abierto/cerrado del menú
  toggleMenu,      // Función para alternar menú
  closeMenu        // Función para cerrar menú
} = useMenu();
```

**Características:**
- Gestiona la visibilidad del menú móvil
- Maneja las interacciones de toggle del menú
- Proporciona gestión de estado limpia

---

## Descripción de Componentes

### Componentes Principales

#### `Header`
- Barra de navegación responsiva
- Menú hamburguesa mobile-friendly
- Logo y branding
- Variantes desktop y mobile

#### `AboutMe`
- Introducción de la barbería
- Misión y valores
- Imágenes profesionales
- Layout optimizado para móvil

#### `Cortes (Servicios)`
- Exhibición del catálogo de servicios
- Tarjetas de servicio con imágenes
- Información de precios
- Layout de grilla responsivo

#### `Calendly`
- Interfaz de reservas integrada
- Disponibilidad en tiempo real
- Programación de citas
- Integración con API de Calendly

#### `ContactUs`
- Información de contacto del negocio
- Integración con Google Maps
- Enlaces a redes sociales
- Formulario de contacto (si aplica)
- Diseño mobile-responsive

#### `Footer`
- Información de copyright
- Enlaces de navegación adicionales
- Integración con redes sociales
- Horarios de atención

### Componentes Utilitarios

#### `ServiceCard`
- Tarjeta reutilizable para mostrar servicios
- Imagen, título y descripción
- Visualización de precios
- Botón de call-to-action

#### `PriceList` / `PriceListMobile`
- Tablas de precios detalladas
- Descripciones de servicios
- Layouts responsivos

#### `SocialMediaLinks`
- Enlaces de iconos de redes sociales
- Plataformas configurables
- Manejo de enlaces externos

#### `MapEmbed`
- Integración con Google Maps
- Visualización de ubicación del negocio
- Interfaz de mapa interactivo

#### `SpecialOfferCard`
- Visualización de contenido promocional
- Destacado de ofertas especiales
- Elementos de call-to-action

---

## Catálogo de Servicios

La aplicación exhibe los siguientes servicios de barbería:

1. **Corte de cabello**
   - Cortes profesionales para hombres
   - Estilos modernos y clásicos

2. **Afeitado tradicional**
   - Afeitado clásico con navaja
   - Tratamiento con toalla caliente

3. **Recorte y arreglo de barba**
   - Perfilado y mantenimiento de barba
   - Consulta de estilizado

4. **Perfilado de cejas**
   - Perfilado profesional de cejas
   - Look limpio y definido

5. **Estilizado y peinado**
   - Servicios de estilizado profesional
   - Aplicación de productos

6. **Tratamientos capilares**
   - Tratamientos de cuero cabelludo
   - Soluciones de cuidado capilar

---

## Gestión de Estado

La aplicación utiliza **Zustand** para gestión de estado ligera:

- Estado del menú (navegación móvil)
- Preferencias del usuario
- Estado de reservas (si aplica)
- Gestión de estado de formularios

---

## Arquitectura de Estilos

### Organización SCSS

- Estilos con scope de componente (archivos `.scss` junto a componentes)
- Estilos globales en `index.css`
- Utilidades de Bootstrap para desarrollo rápido
- Breakpoints responsivos para diseño mobile-first

### Principios de Diseño

- **Mobile-First**: Diseñado para móvil, mejorado para desktop
- **Accesibilidad**: Componentes compatibles con WCAG
- **Rendimiento**: Imágenes optimizadas y lazy loading
- **Consistencia**: Sistema de diseño unificado en toda la aplicación

---

## Flujo de Trabajo de Desarrollo

### Agregar un Nuevo Componente

1. Crear carpeta de componente en `src/presentation/components/`
2. Agregar archivo de componente TypeScript (`.tsx`)
3. Agregar archivo de estilos SCSS (`.scss`)
4. Crear variante móvil si es necesario
5. Exportar desde `index.ts` si se usan barrel exports

### Agregar un Nuevo Servicio

1. Actualizar `src/JSON/Cortes.json` con datos del servicio
2. Agregar imagen del servicio a `public/img/`
3. Actualizar interfaces en `infrastructure/interfaces/`
4. El componente mostrará automáticamente el nuevo servicio

---

## Optimizaciones de Rendimiento

- **Vite Build Tool**: HMR ultra rápido y builds optimizados
- **Code Splitting**: Lazy loading para rutas y componentes
- **Optimización de Imágenes**: Formatos WebP y AVIF con fallbacks
- **Tree Shaking**: Eliminación de código no utilizado
- **Minificación**: Optimización de build de producción

---

## Soporte de Navegadores

- Chrome (última versión)
- Firefox (última versión)
- Safari (última versión)
- Edge (última versión)
- Navegadores móviles (iOS Safari, Chrome Mobile)

---

## Contribuciones

¡Las contribuciones son bienvenidas! Seguí estos pasos:

1. Hacé un fork del repositorio
2. Creá una rama de feature (`git checkout -b feature/nueva-funcionalidad`)
3. Realizá tus cambios y escribí tests si es necesario
4. Hacé commit de tus cambios (`git commit -m 'feat: agregar nueva funcionalidad'`)
5. Hacé push a tu rama (`git push origin feature/nueva-funcionalidad`)
6. Abrí un Pull Request describiendo tus cambios

### Convenciones de Commits

Este proyecto sigue [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` Nueva funcionalidad
- `fix:` Corrección de bug
- `docs:` Cambios en documentación
- `style:` Cambios de estilo de código (formato, sin cambios de lógica)
- `refactor:` Refactorización de código
- `test:` Agregar o modificar tests
- `chore:` Tareas de mantenimiento

---

## Licencia

Este proyecto está bajo la licencia **MIT**.

---

## 📬 Contacto

- **Autor:** Lucas Cabral
- **Email:** lucassimple@hotmail.com
- **LinkedIn:** [https://www.linkedin.com/in/lucas-gastón-cabral/](https://www.linkedin.com/in/lucas-gastón-cabral/)
- **Portfolio:** [https://portfolio-web-dev-git-main-lucascabral95s-projects.vercel.app/](https://portfolio-web-dev-git-main-lucascabral95s-projects.vercel.app/)
- **Github:** [https://github.com/Lucascabral95](https://github.com/Lucascabral95/)

---

## Agradecimientos

- Equipo de React por el increíble framework
- Equipo de Vite por la herramienta de build ultra rápida
- Calendly por la integración de reservas
- Equipo de Bootstrap por el framework de UI
- Comunidad open source por las excelentes librerías

---

<p align="center">
  Desarrollado con ❤️ por Lucas Cabral
</p>
=======
# Landing Page para Barbería - Enfocada en Reserva

## Instalación

Instalar generador-de-colores con npm

```bash
  git clone https://github.com/Lucascabral95/barberia-calendly.git
  cd calendar
  npm install 
  npm run dev
```

## 🌟 Descripción

Este proyecto consiste en el desarrollo de una landing page responsiva para una barbería. La plataforma permite a los usuarios realizar reservas de citas de manera sencilla y eficiente, seleccionando la fecha y la hora deseadas a través de Calendly.

## ⚙️ Características Principales:

- **Reservas de Citas**: Los usuarios pueden elegir la fecha y hora que mejor se adapte a sus necesidades.
- **Notificaciones por Correo Electrónico**: Al finalizar el proceso de reserva, se envía un correo electrónico de confirmación al usuario, asegurando que tenga toda la información necesaria.
- **Opción de Cancelación**: Se ofrece la posibilidad de cancelar las citas reservadas, brindando flexibilidad y comodidad a los clientes.

## 📄 Agradecimientos
Agradezco su interés en este proyecto. Espero que esta landing page mejore la experiencia de los clientes al reservar sus citas en la barbería. ¡Gracias por su apoyo!

🛠️ Tecnologías Utilizadas
- **React**: Usado para desarrollar una interfaz de usuario intuitiva y responsiva, permitiendo a los clientes navegar fácilmente y reservar citas sin complicaciones.
- **Calendly API**: Integrada para gestionar el sistema de reservas, proporcionando una forma sencilla para que los usuarios seleccionen la fecha y hora de sus citas.
- **Sass**: Empleado para organizar y escribir estilos de manera más eficiente y reutilizable, permitiendo el uso de variables, anidamiento y mixins para un diseño más modular y escalable.
- **Nodemailer**: Utilizado para enviar notificaciones por correo electrónico, confirmando las citas y proporcionando detalles adicionales sobre la reserva.
- **React Router**: Implementado para permitir una navegación rápida entre las secciones informativas y el sistema de reserva.
LocalStorage: Utilizado para guardar temporalmente la información de las citas, facilitando el proceso de cancelación y gestión por parte de los usuarios.

## 📬 Contacto

Si tenés alguna pregunta o sugerencia, no dudes en contactarme a través de lucassimple@hotmail.com o https://github.com/Lucascabral95

### Notas: 

- Añadí secciones como **Tecnologías Utilizadas**, **Descripción**, **Conclusión**, **Características Principales** y **Contacto** para hacer el README más completo.
>>>>>>> 86e8b876562bb8ace2cff14302bd32c55ccd7d3b
