# Hospital Info (Módulo 3 - Taller 2)

## Descripción del Proyecto

Este proyecto es un sitio web para un hospital privado, con tres páginas principales: **Inicio**, **Equipo Médico** y **Contacto**. Utiliza **SASS** para la modularización de estilos, **Bootstrap** para una estructura responsiva, y la metodología **BEM** para mantener la consistencia en la nomenclatura de clases CSS.

### Estructura del Proyecto

#### Páginas Principales

1. **Inicio (Home)**
   - **Encabezado**: Incluye logotipo, navegación y botón "Reservar Cita".
   - **Sección de Bienvenida**: Muestra el propósito del hospital.
   - **Servicios Médicos**: Muestra íconos y descripciones.
   - **Testimonios**: Opiniones de pacientes para reforzar la confianza.
   - **Pie de Página**: Incluye enlaces legales, contacto y redes sociales.

2. **Equipo Médico**
   - **Encabezado y Pie de Página**: Consistente con la página de inicio.
   - **Presentación del Equipo**: Tarjetas con perfiles de doctores, nombre y especialidad, además de filtro por años de experiencia.

3. **Contacto**
   - **Formulario de Contacto**: Campos para nombre, correo y mensaje.
   - **Mapa**: (Posible integración de mapa estático).
   - **Encabezado y Pie de Página**: Compartidos con otras páginas.

### Estructura de Archivos JavaScript

- **main.js**: Archivo principal que carga y configura los módulos del sitio web.
- **userInteractions.js**: Se encarga de capturar y validar los datos ingresados por el usuario a través de prompts.
- **utils.js**: Contiene funciones de validación, como verificar el formato de email y teléfono.
- **domManipulation.js**: Modifica el DOM para mostrar información dinámica en el sitio, incluyendo el nombre del usuario, email y teléfono, así como mensajes de error en caso de datos incorrectos.
- **doctores**: Incluye una lista de doctores y una función para mostrar solo aquellos que cumplen con el filtro de experiencia especificado.

---

### Event Loop en JavaScript

El **Event Loop** en JavaScript permite la ejecución de código asíncrono y la gestión de eventos. JavaScript se ejecuta en un solo hilo, lo cual significa que solo puede realizar una tarea a la vez. Sin embargo, el Event Loop permite que JavaScript maneje tareas de manera eficiente.

- **Call Stack (Pila de Llamadas)**: Mantiene el seguimiento de las funciones en ejecución. Las funciones activas se apilan en la pila y se eliminan al completarse.
- **Heap (Montículo)**: Almacena objetos y datos necesarios para la aplicación.
- **Queue (Cola de Tareas)**: Es una fila donde se colocan las tareas asíncronas (por ejemplo, eventos de clic o temporizadores) cuando están listas para ejecutarse. El Event Loop revisa esta cola y, si la pila de llamadas está vacía, mueve una tarea de la cola a la pila para ejecutarla.

El Event Loop permite que el código asíncrono se ejecute sin bloquear el flujo principal de la aplicación.

---

### Organización de Archivos

La estructura sigue el patrón de **SASS 7-1**, dividiendo estilos en categorías para facilitar el mantenimiento.

```plaintext
hospital-info/
├── index.html               # Página principal
├── equipo-medico.html       # Página del equipo médico
├── contacto.html            # Página de contacto
├── css/                     # CSS generado por SASS
│   └── main.css             # Hoja de estilos compilada por SASS
├── js/                      # Archivos JavaScript
│   ├── main.js              # Configuración principal del proyecto
│   ├── domManipulation.js   # Manipulación del DOM
│   ├── userInteractions.js  # Captura e interacción con el usuario
│   ├── doctores.js          # Lista de doctores y filtros de experiencia
│   └── utils.js             # Funciones de validación
├── scss/                    # Archivos SASS
│   ├── abstracts/           # Variables, mixins y funciones
│   │   ├── _functions.scss  # Funciones SASS
│   │   ├── _mixins.scss     # Mixins reutilizables
│   │   ├── _variables.scss  # Variables de diseño
│   │   └── _index.scss      # Importa archivos de abstracts
│   ├── base/                # Estilos básicos y tipografía
│   │   ├── _base.scss       # Estilos básicos generales
│   │   ├── _reset.scss      # Reset CSS
│   │   ├── _typography.scss # Tipografía
│   │   └── _index.scss      # Importa archivos de base
│   ├── components/          # Componentes reutilizables
│   │   ├── _buttons.scss    # Estilos de botones
│   │   ├── _card.scss       # Estilos de tarjetas
│   │   ├── _user-info.scss  # Estilos para datos de usuario
│   │   ├── _services.scss   # Estilos para servicios médicos
│   │   ├── _doctors.scss    # Estilos para lista de doctores
│   │   ├── _form.scss       # Estilos de formularios
│   │   └── _index.scss      # Importa componentes
│   ├── layout/              # Disposición del sitio (header, footer, grid)
│   │   ├── _footer.scss     # Pie de página
│   │   ├── _grid.scss       # Estructura de grid
│   │   ├── _header.scss     # Encabezado
│   │   ├── _navigation.scss # Navegación
│   │   └── _index.scss      # Importa archivos de layout
│   ├── pages/               # Estilos específicos de cada página
│   │   ├── _home.scss       # Página de inicio
│   │   ├── _equipo-medico.scss # Página del equipo médico
│   │   ├── _contacto.scss   # Página de contacto
│   │   └── _index.scss      # Importa archivos de páginas
│   ├── themes/              # Personalización de temas
│   │   ├── _theme.scss      # Tema personalizado
│   │   └── _index.scss      # Importa temas
│   ├── vendors/             # Archivos de terceros
│   │   ├── _bootstrap.scss  # Bootstrap
│   │   └── _index.scss      # Importa vendors
│   └── main.scss            # Archivo principal que importa todo
└── README.md                # Documentación del proyecto
```

---

## Tecnologías Utilizadas

- **HTML5**: Estructura semántica.
- **CSS3 y SASS**: Modularización y personalización de estilos.
- **Bootstrap**: Sistema de grillas y componentes responsivos.
- **Font Awesome**: Íconos para una mejor usabilidad.
- **JavaScript**: Lógica del sitio, incluyendo manipulación del DOM y validación de datos.

---

## Funcionalidades Actuales

1. **Interacción con el Usuario**:
   - Captura de nombre, email y teléfono a través de prompts.
   - Validación de email (contiene "@") y teléfono (exactamente 9 dígitos numéricos).
   - Los datos ingresados se muestran en el DOM con estilo centrado y se notifican errores en caso de datos incorrectos.

2. **Validación y Manejo de Errores**:
   - Funciones de validación en `utils.js` para verificar que los datos cumplan con el formato adecuado.
   - Si algún dato es inválido, se muestra un mensaje de error en el DOM junto con los datos válidos.
   - Uso de `try/catch` en `initializeDOM` y `mostrarDoctores` para manejar errores y mostrar mensajes en caso de problemas en la ejecución.

3. **Ciclos e Iteraciones en la Interfaz**:
   - Se muestra dinámicamente una lista de doctores en la página de inicio.
   - La función `mostrarDoctores` utiliza `forEach` para iterar sobre una lista de doctores y aplica un filtro de experiencia mínima.
   - Se agrega una selección en el DOM para que el usuario filtre los doctores por años de experiencia.

---

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

---

## Notas

- **Consistencia de Estilos**: Se sigue la metodología BEM para la nomenclatura

 de clases, asegurando que los estilos sean fáciles de mantener y expandir.
- **Extensibilidad**: La estructura modular facilita la integración de nuevos estilos y componentes en el futuro.
- **Depuración y Manejo de Errores**: Uso de `console.log()` para depuración sin afectar la experiencia del usuario, junto con bloques `try/catch` para manejar posibles errores de forma controlada.

