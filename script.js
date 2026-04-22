/*const alumnos = [];

for (let i = 1; i <= 16; i++) {
    const apellidos = prompt(`Ingrese el apellido del alumno ${i}:`);
    const notas = prompt(`Ingrese las notas del alumno ${i} separadas por comas:`);
    const faltas = Number(prompt(`Ingrese las faltas del alumno ${i}:`));
    const notasArray = notas.split(",").map(nota => Number(nota.trim()));
    const sumarnotas = notasArray.reduce((total, nota) => total + nota, 0);
    const promedio = sumarnotas / notasArray.length;

    const estado = promedio>= 7 && faltas <=6 

    console.log(`Promedio de ${apellidos}: ${promedio.toFixed(2)}`);

    alumnos.push({
        apellidos,
        notas: notasArray,
        faltas,
        promedio: +promedio.toFixed(2),
        estado
    });
}

console.log("Lista completa de alumnos:");
console.table(alumnos);
*/
let alumnos = [
 { apellido: "Albarracín", nota: 10, inasistencias: 0 },
 { apellido: "Amado", nota: 1, inasistencias: 9 },
 { apellido: "Andrada", nota: 8, inasistencias: 8 },
 { apellido: "Banegas", nota: 2, inasistencias: 7 },
 { apellido: "Baskari", nota: 9, inasistencias: 6 },
 { apellido: "Bravo", nota: 3, inasistencias: 5 },
 { apellido: "Calderón", nota: 7, inasistencias: 4 },
 { apellido: "Carrizo", nota: 4, inasistencias: 3 },
 { apellido: "Chazarreta", nota: 6, inasistencias: 2 },
 { apellido: "Diarte", nota: 8, inasistencias: 1 },
 { apellido: "Diaz", nota: 9, inasistencias: 9 },
 { apellido: "Diez", nota: 10, inasistencias: 10 }
];
alumnos.push(
 { apellido: "Avellaneda", nota: 7, inasistencias: 2 },
 { apellido: "Briseño", nota: 9, inasistencias: 9 },
 { apellido: "Córdoba", nota: 6, inasistencias: 3 },
 { apellido: "Gerónimo", nota: 2, inasistencias: 9 }
);
// Segundo array
let nuevos = [
 { apellido: "Soria", nota: 3, inasistencias: 1 },
 { apellido: "Serrano", nota: 8, inasistencias: 0 },
 { apellido: "Santillan", nota: 7, inasistencias: 5 },
 { apellido: "López", nota: 2, inasistencias: 0 },
 { apellido: "Lazarte", nota: 6, inasistencias: 1 },
 { apellido: "Luna", nota: 8, inasistencias: 0 },
 { apellido: "Cordero", nota: 7, inasistencias: 1 },
 { apellido: "Rodríguez", nota: 10, inasistencias: 7 },
 { apellido: "Villarreal", nota: 7, inasistencias: 2 }
];

// UNIR ARRAYS
let todos = [...alumnos, ...nuevos];
// ORDENAR ALFABÉTICAMENTE
todos.sort((a, b) => a.apellido.localeCompare(b.apellido));
// PROMEDIO GENERAL
let suma = 0;
for (let i = 0; i < todos.length; i++) {
 suma += todos[i].nota;
}
let promedio = suma / todos.length;
console.log("Promedio total:", promedio);
// SABER QUIÉN APRUEBA O QUEDA LIBRE
todos.forEach(alumno => {
 let estado = "";
  if (alumno.inasistencias > 6) {
 estado = "Libre";
 } else if (alumno.nota >= 7) {
 estado = "Aprobado";
 } else {
 estado = "Desaprobado";
 }
 console.log(alumno.apellido + ": " + estado);
});
// ARRAY SOLO DE APROBADOS
let aprobados = todos.filter(alumno =>
 alumno.nota >= 7 && alumno.inasistencias <= 6
);
console.log("Aprobados:", aprobados);

function agregarAlumno() {
 let apellido = prompt("Apellido:");
 let nota = parseInt(prompt("Nota:"));
 let inasistencias = parseInt(prompt("Inasistencias:"));
  console.log("Alumno agregado:", apellido);
}
// llamar la función si querés usarla
// agregarAlumno();

let aprobadosConPromedio = todos.filter(alumnos => alumnos.nota >= 7 && alumnos.inasistencias <= 6)

console.log(aprobados)

// Mostrar en la página
const list = document.getElementById('aprobados-list');
aprobados.forEach(alumno => {
    const li = document.createElement('li');
    li.textContent = `${alumno.apellido}: Nota ${alumno.nota}, Inasistencias ${alumno.inasistencias}`;
    list.appendChild(li);
});
alert(Text("Alumnos aprobados: " + aprobados.map(a => a.apellido).join(", ")));



