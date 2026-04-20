const alumnos = [];

for (let i = 1; i <= 16; i++) {
    const apellidos = prompt(`Ingrese el apellido del alumno ${i}:`);
    const notas = prompt(`Ingrese las notas del alumno ${i} separadas por comas:`);
    const faltas = Number(prompt(`Ingrese las faltas del alumno ${i}:`));
    const notasArray = notas.split(",").map(nota => Number(nota.trim()));
    const sumarnotas = notasArray.reduce((total, nota) => total + nota, 0);
    const promedio = sumarnotas / notasArray.length;

    alumnos.push({
        apellidos,
        notas: notasArray,
        faltas,
        promedio: +promedio.toFixed(2)
    });
}

console.log("Lista completa de alumnos:");
console.table(alumnos);