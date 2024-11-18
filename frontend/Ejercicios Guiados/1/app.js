const fs = require ('fs');
const readline = require ('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function cargarTareas() {
    try {
        const data = fs.readFileSync('tareas.json', 'utf8');
        return JSON.parse(data);
    } catch (error) {
        return [];
    }
}

function guardarTareas(tareas) {
    fs.writeFileSync('tareas.json', JSON.stringify(tareas, null,2));
}

function agregarTareas(nombre) {
    const tareas = cargarTareas();
    tareas.push({
        nombre,
        completada: false
    });
    guardarTareas(tareas);
    console.log('Tarea "${nombre}" agregada');
}

function mostrarTareas() {
    const tareas = cargarTareas();
    console.log('Lista de Tareas:');
    tareas.forEach((tarea, i) => {
        console.log(`${i+1}. ${tarea.nombre} - ${tarea.completada ? 'Completada' : 'Pendiente'}`);
    });
}

function eliminarTarea() {
    const tareas = cargarTareas();
    if(index >=0 && indez < tareas.length) {
        const tareaEliminada = tareas.splice(index, 1);
        guardarTareas(tareas);
        console.log('Tarea "${tareaEliminada[0].nombre}" eliminada');
