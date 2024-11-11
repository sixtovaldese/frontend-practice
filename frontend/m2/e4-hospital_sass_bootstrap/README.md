# Hospital Info

### Ejercicio Práctico: Desarrollo y Optimización del Sitio Web de un Hospital

Este proyecto consiste en el desarrollo de un sitio web para un hospital privado, con enfoque en la modularización de estilos utilizando **SASS**, la integración de **Bootstrap** para crear una estructura responsiva, y la adopción de la metodología **BEM (Block, Element, Modifier)** para mantener una nomenclatura de clases CSS consistente y organizada. El sitio incluye tres páginas principales: **Inicio (Home)**, **Equipo Médico**, y **Contacto**.

---

## **Actualización del Proyecto**

### **1. Modularización con SASS y Organización 7-1**
El proyecto se estructura siguiendo el patrón **7-1** en SASS, lo que permite dividir los estilos en archivos específicos para variables, mixins, estilos base, layouts, y componentes. Esto garantiza un código más organizado, escalable y fácil de mantener.

### **2. Uso de la Metodología BEM**
Se implementa **BEM** en la nomenclatura de clases CSS para organizar los estilos de la siguiente manera:

- **Block (B)**: Representa un componente independiente (ejemplo: `.header`, `.footer`, `.contacto`).
- **Element (E)**: Elemento dentro de un bloque (ejemplo: `.header__nav`, `.footer__links`).
- **Modifier (M)**: Variación del bloque o elemento para representar diferentes estados o versiones (ejemplo: `.button--primary`, `.header__button--large`).

### **3. Integración de Bootstrap**
Bootstrap se utiliza para crear una estructura responsiva mediante su sistema de grillas y componentes preconstruidos (botones, tarjetas y formularios). Los estilos de Bootstrap se personalizan mediante variables SASS, permitiendo que el diseño del sitio refleje la identidad visual del hospital.

---

## **Contenido del Proyecto**

### 1. **Vista Principal (Home o Index)**
   - **Encabezado:** Incluye logotipo, barra de navegación y botón de "Reservar Cita".
   - **Sección de Bienvenida:** Presentación del hospital y su misión.
   - **Sección de Servicios:** Muestra los servicios médicos con íconos e información relevante.
   - **Testimonios:** Comentarios de pacientes que generan confianza.
   - **Pie de Página:** Contiene enlaces legales, información de contacto y redes sociales.

### 2. **Vista del Equipo Médico**
   - **Encabezado:** Barra de navegación reutilizada de la página principal.
   - **Sección de Presentación:** Introducción al equipo médico.
   - **Lista del Equipo Médico:** Perfiles de doctores con nombre, especialidad y descripción.
   - **Pie de Página:** Estructura compartida con el resto de las páginas.

### 3. **Vista de Contacto**
   - **Formulario de Contacto:** Incluye campos para nombre, correo electrónico, asunto y mensaje.
   - **Mapa de Ubicación:** Muestra la dirección del hospital mediante un mapa estático.
   - **Pie de Página:** Reutilizado en todas las páginas.

---

## **Estructura de Archivos del Proyecto**

```bash
hospital-info/
├── index.html               # Página principal (Home)
├── equipo-medico.html       # Página del equipo médico
├── contacto.html            # Página de contacto
├── css/                     # CSS generado por SASS
│   └── main.css             # Hoja de estilos compilada
├── scss/                    # Carpeta de archivos SASS
│   ├── abstracts/           # Variables, mixins y funciones
│   │   ├── _variables.scss
│   │   ├── _mixins.scss
│   │   ├── _functions.scss
│   │   └── _index.scss      # Archivo de índice para abstracts
│   ├── base/                # Estilos básicos y reseteo
│   │   ├── _reset.scss
│   │   ├── _typography.scss
│   │   ├── _base.scss
│   │   └── _index.scss      # Archivo de índice para base
│   ├── components/          # Componentes reutilizables
│   │   ├── _buttons.scss
│   │   ├── _card.scss
│   │   ├── _form.scss
│   │   └── _index.scss      # Archivo de índice para componentes
│   ├── layout/              # Layout de la página
│   │   ├── _header.scss
│   │   ├── _footer.scss
│   │   ├── _navigation.scss
│   │   ├── _grid.scss
│   │   └── _index.scss      # Archivo de índice para layout
│   ├── pages/               # Estilos específicos para cada página
│   │   ├── _home.scss
│   │   ├── _equipo-medico.scss
│   │   ├── _contacto.scss
│   │   └── _index.scss      # Archivo de índice para pages
│   ├── themes/              # Personalización y temas
│   │   ├── _theme.scss
│   │   └── _index.scss      # Archivo de índice para themes
│   ├── vendors/             # Archivos de terceros (ej. Bootstrap)
│   │   ├── _bootstrap.scss
│   │   └── _index.scss      # Archivo de índice para vendors
│   └── main.scss            # Archivo principal que importa todo
└── README.md                # Documentación del proyecto
```

---

## **Tecnologías Utilizadas**

- **HTML5:** Estructura semántica de las páginas.
- **CSS3 y SASS:** Estilización avanzada y modularización.
- **Bootstrap:** Framework CSS para grillas y componentes responsivos.
- **Font Awesome:** Íconos para mejorar la usabilidad visual.

---

## **Instrucciones para Ejecutar el Proyecto**

1. **Clonar el repositorio o descargar el código fuente.**
2. **Compilación de SASS**: Para compilar los archivos SASS en CSS, abre la terminal en la carpeta raíz del proyecto y ejecuta el siguiente comando:

   ```bash
   sass scss/main.scss css/main.css
   ```

3. **Observación Automática (Opcional)**: Si deseas que Sass compile automáticamente cada vez que guardas un cambio, usa el siguiente comando:

   ```bash
   sass --watch scss/main.scss:css/main.css
   ```

4. **Abrir en el navegador**: Abre `index.html` en el navegador para ver la página principal del hospital y verifica la correcta aplicación de estilos en `equipo-medico.html` y `contacto.html`.

---

## **Notas Adicionales**

- **Depuración de Sass**: Si recibes errores en la compilación de Sass, asegúrate de que todos los archivos están en las rutas y con los nombres correctos.
- **Extensibilidad**: La estructura modular permite agregar nuevos componentes y estilos fácilmente siguiendo el patrón 7-1.

