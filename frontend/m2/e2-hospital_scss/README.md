# Hospital Info

### Ejercicio Práctico: Desarrollo y Optimización del Sitio Web de un Hospital

Este proyecto consiste en el desarrollo y mejora de un sitio web básico para un hospital privado, con un enfoque en modularización de estilos utilizando **SASS**, responsividad con **Media Queries**, y una nomenclatura consistente con la metodología **BEM (Block, Element, Modifier)**. Se han implementado tres vistas principales: **Home**, **Equipo Médico**, y **Contacto**, garantizando una estructura semántica y un diseño accesible y adaptativo para diferentes dispositivos.

---

## **Actualización del Proyecto**

### **1. Modularización con SASS y Organización 7-1**
El proyecto fue actualizado siguiendo la convención **7-1** en SASS, dividiendo los estilos en componentes reutilizables y archivos específicos para variables, mixins, estilos base, y layouts. Esto facilita la escalabilidad y el mantenimiento del código.

### **2. Uso de la Metodología BEM**
Se implementó **BEM** para la nomenclatura de clases CSS. Esta metodología organiza los estilos mediante:

- **Block (B):** Un bloque autónomo que representa un componente independiente (por ejemplo: `.header`, `.footer`, `.servicios`).
- **Element (E):** Un elemento que forma parte del bloque y no puede existir fuera de él (por ejemplo: `.header__nav`, `.footer__links`).
- **Modifier (M):** Variaciones del bloque o elemento que representan diferentes estados o versiones (por ejemplo: `.button--primary`, `.header__button--large`).

La adopción de **BEM** garantiza consistencia, reutilización de código, y facilita la lectura y modificación del CSS.

---

## **Contenido del Proyecto**

### 1. **Vista Principal (Home o Index)**
- **Encabezado:** Incluye logotipo, barra de navegación y botón de "Reservar Cita".
- **Sección de Bienvenida:** Presenta la misión y visión del hospital.
- **Sección de Servicios:** Muestra los servicios disponibles con íconos e información.
- **Testimonios:** Opiniones de pacientes que generan confianza.
- **Pie de Página:** Contiene enlaces rápidos, información de contacto, y redes sociales.

### 2. **Vista del Equipo Médico**
- **Encabezado:** Barra de navegación reutilizada de la página principal.
- **Sección de Presentación:** Introducción al equipo médico del hospital.
- **Lista del Equipo Médico:** Muestra los perfiles de cuatro doctores con nombre, especialidad, y descripción.
- **Pie de Página:** Reutilizado del resto de las páginas.

### 3. **Vista de Contacto**
- **Formulario de Contacto:** Campos para nombre, correo, asunto, y mensaje.
- **Mapa de Ubicación:** Muestra la dirección del hospital mediante un mapa estático.
- **Pie de Página:** Reutilizado del resto de las páginas.

---

## **Estructura de Archivos del Proyecto**

```bash
hospital_info/
│
├── index.html           # Página principal (Home)
├── equipo-medico.html   # Página del equipo médico
├── contacto.html        # Página de contacto
├── css/                 # CSS generado por SASS
│   └── styles.css       # Hoja de estilos compilada
├── scss/                # Carpeta SASS
│   ├── abstracts/       # Variables y mixins
│   │   ├── _variables.scss
│   │   └── _mixins.scss
│   ├── base/            # Estilos base
│   │   ├── _reset.scss
│   │   └── _typography.scss
│   ├── components/      # Componentes reutilizables
│   │   ├── _header.scss
│   │   ├── _footer.scss
│   │   └── _buttons.scss
│   ├── layout/          # Layout de la página
│   │   ├── _home.scss
│   │   ├── _contact.scss
│   │   └── _grid.scss
│   └── main.scss        # Archivo principal que importa todo
└── README.md            # Documentación del proyecto
