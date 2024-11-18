# Hospital Info (Modulo 3 Taller 1)

# Uso JS (Modulo 3 - Taller 1)
Para el proyecto del hospital, hemos concluido que el uso de TypeScript es beneficioso en términos de mantenimiento y detección de errores a largo plazo. Sin embargo, debido al alcance limitado del proyecto y la familiaridad del equipo con JavaScript, optaremos por JavaScript avanzado en esta etapa inicial. Esta elección permite optimizar tiempos de desarrollo sin comprometer la funcionalidad.


## Descripción del Proyecto
Este proyecto es un sitio web para un hospital privado, con tres páginas principales: **Inicio**, **Equipo Médico** y **Contacto**. Utiliza **SASS** para la modularización de estilos, **Bootstrap** para una estructura responsiva, y la metodología **BEM** para mantener la consistencia en la nomenclatura de clases CSS.

## Estructura del Proyecto
### Páginas Principales
1. **Inicio (Home)**
   - **Encabezado**: Incluye logotipo, navegación y botón "Reservar Cita".
   - **Sección de Bienvenida**: Muestra el propósito del hospital.
   - **Servicios Médicos**: Muestra íconos y descripciones.
   - **Testimonios**: Opiniones de pacientes para reforzar la confianza.
   - **Pie de Página**: Incluye enlaces legales, contacto y redes sociales.

2. **Equipo Médico**
   - **Encabezado y Pie de Página**: Consistente con la página de inicio.
   - **Presentación del Equipo**: Tarjetas con perfiles de doctores, nombre y especialidad.

3. **Contacto**
   - **Formulario de Contacto**: Campos para nombre, correo y mensaje.
   - **Mapa**: (Posible integración de mapa estático).
   - **Encabezado y Pie de Página**: Compartidos con otras páginas.

### Organización de Archivos
La estructura sigue el patrón de **SASS 7-1**, dividiendo estilos en categorías claras para facilitar el mantenimiento y la escalabilidad.

```
hospital-info/
├── index.html               # Página principal
├── equipo-medico.html       # Página del equipo médico
├── contacto.html            # Página de contacto
├── css/                     # CSS generado por SASS
│   └── main.css             # Hoja de estilos compilada
├── scss/                    # Archivos SASS
│   ├── abstracts/           # Variables, mixins y funciones
│   ├── base/                # Estilos básicos y tipografía
│   ├── components/          # Componentes reutilizables (botones, cards)
│   ├── layout/              # Estructura (header, footer, grid)
│   ├── pages/               # Estilos específicos de cada página
│   ├── themes/              # Personalización
│   ├── vendors/             # Archivos de terceros
│   └── main.scss            # Archivo principal que importa todo
└── README.md                # Documentación del proyecto
```

## Tecnologías Utilizadas
- **HTML5**: Estructura semántica.
- **CSS3 y SASS**: Modularización y personalización de estilos.
- **Bootstrap**: Sistema de grillas y componentes responsivos.
- **Font Awesome**: Íconos para una mejor usabilidad.

## Instrucciones para Ejecutar el Proyecto
1. **Clonar el repositorio**.
2. **Compilar SASS**:
   - Ejecuta en la terminal en la carpeta raíz del proyecto:
     ```bash
     sass scss/main.scss css/main.css
     ```
   - Para compilar automáticamente en cada cambio:
     ```bash
     sass --watch scss/main.scss:css/main.css
     ```
3. **Abrir en el navegador**: Abre `index.html` en el navegador para ver la página principal del sitio.

## Notas
- **Consistencia de Estilos**: Se sigue la metodología BEM para la nomenclatura de clases, asegurando que los estilos sean fáciles de mantener y expandir.
- **Extensibilidad**: La estructura modular facilita la integración de nuevos estilos y componentes en el futuro.

