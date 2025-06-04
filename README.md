# **SPRINT 1: - Etapa 3/3: Refactorización con Tailwind CSS**

Durante esta tercera y última etapa del sprint, se ha refactorizado completamente el proyecto para utilizar **Tailwind CSS**, un framework de utilidades que permite construir interfaces modernas de forma rápida y eficiente mediante clases predefinidas.

🔗 **Repositorio del proyecto**: https://github.com/druedaro/sprint1-Maquetacio - Branch: `feature/tailwind`

## **🚀 Objetivos Principales**

* Sustitución total del CSS tradicional por clases utilitarias de **Tailwind CSS**
* Eliminación del antiguo sistema de estilos (Sass/CSS)
* Configuración de Tailwind CSS mediante `tailwind.config.js` y `postcss.config.js`
* Uso de utilidades Tailwind para:
  * Espaciado, tipografía, colores, bordes, sombreado, etc.
  * Diseño responsive mediante breakpoints de Tailwind
  * Estilización rápida y consistente sin escribir CSS personalizado
* Creación de un archivo `main.css` con directivas `@tailwind` y compilación automática

## **💻 Stack Tecnológico**

* **HTML5**
* **Tailwind CSS** (con PostCSS y configuración personalizada)
* **JS** - Menú mobile
* **Node.js / PostCSS / npm** - Entorno de desarrollo y construcción
* **Git/GitHub** - Control de versiones

## **✅ Arquitectura del Proyecto**
```
📁 sprint1-Maquetacio
├── 📄 index.html
├── 📄 README.md
├── 📄 .gitignore
├── 📄 LICENSE.md
├── 📄 main.js
├── 📄 tailwind.config.js
├── 📄 styles.css (contiene: @tailwind base/components/utilities)
├── 📁 src
├    └── 📄 output.css (generado automáticamente por Tailwind)
└── 📁 Recursos
    ├── 📁 Diseño
    └── 📁 Imagenes
```

## **🛑 Desafíos Encontrados**

* **Cambio de mentalidad**: Pasar de un enfoque basado en clases semánticas y CSS modular (Sass) a clases utilitarias supuso un cambio de enfoque importante.
* **Configuración inicial**: Instalar y configurar correctamente Tailwind, asegurando que los estilos se generen sin errores ni advertencias. Problemas a la hora de trabajar con la versión beta 4.1. Downgrade a la versión anterior (latest).
* **Eliminación progresiva del CSS antiguo**: Identificar qué estilos podían ser completamente reemplazados por utilidades de Tailwind sin romper el diseño.
* **Advertencias en IDE**: Resolver advertencias visuales en VSCode relacionadas con `@tailwind`, configurando correctamente el entorno.
* **Transformar iconos de RRSS**: Para poder modificar el background hover de los svg contenidos en la carpeta Recursos ha sido necesario pasarlas a código inline para poder modificar sus propiedades.
* **Extender propiedades CSS a la configuración general de tailwind**: Al ser un proyecto pequeño (landing page) he considerado buena práctica extender algunas propiedades como colores propios o el font-family.
* **Responsive**: Desde la configuración general de tailwind, definí los dos breakpoints utilizados en el proyecto.

---

Con esta tercera etapa finaliza el proceso de modernización del proyecto, que ha pasado de HTML + CSS puro a Sass, y finalmente a Tailwind CSS, ganando en modularidad, velocidad de desarrollo y mantenibilidad.
