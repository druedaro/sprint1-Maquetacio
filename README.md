# **SPRINT 1: - Etapa 2/3: Refactorización con Sass**

Durante esta segunda etapa del proyecto, el objetivo principal fue refactorizar la base de código existente (desarrollada con HTML + CSS puro) utilizando **Sass**, el popular preprocesador CSS. El uso de Sass permitió modularizar estilos, reutilizar variables y mixins, y mejorar la escalabilidad del proyecto.

🔗 **Repositorio del proyecto**: https://github.com/druedaro/sprint1-Maquetacio - Branch: feature/sass

## **🚀 Objetivos Principales**

* Refactorización del archivo `styles.css` utilizando Sass (sintaxis SCSS)
* Organización del código CSS en archivos parciales (`_variables.scss`, `_header.scss`, etc.)
* Aplicación de **variables Sass** para mantener coherencia visual (colores, tipografías, márgenes...)
* Uso de **mixins y anidación** para reducir repetición y aumentar legibilidad
* Compilación a `styles.css` con `sass --watch`
* Conservación fiel del diseño original, respetando la estructura y comportamiento del proyecto Vanilla

## **💻 Stack Tecnológico**

* **HTML5**
* **Sass (SCSS)** - Preprocesador CSS
* **CSS3** (generado automáticamente desde Sass)
* **JS** - Menú mobile
* **Git/GitHub** - Control de versiones

## **✅ Arquitectura del Proyecto**
```
📁 sprint1-Maquetacio
├── 📄 index.html
├── 📄 README.md
├── 📄 .gitignore
├── 📄 LICENSE.md
├── 📄 main.js
├── 📄 styles.css (compilado automáticamente desde /scss)
├── 📁 scss
│ ├── 📄 main.scss
│ ├── 📄 _variables.scss
│ ├── 📄 _mixins.scss
│ ├── 📄 _reset.scss
│ └── 📄 _header.scss
└── 📁 Recursos
    ├── 📁 Diseño
    └── 📁 Imagenes
```


## **🛑 Desafíos Encontrados**

* **Separación de estilos existentes**: Traducir un único archivo CSS plano a una estructura modular Sass sin romper el diseño requirió un análisis detallado de las secciones.
* **Gestión de compilación**: Aprender a configurar y mantener el sistema de compilación correctamente, haciendo uso adicional de extensiones del IDE Visual Studio Code.
* **Consistencia con Vanilla**: Mantener la misma apariencia final que la implementación en la rama `vanilla`, asegurando que la refactorización no alterase el resultado visual.


