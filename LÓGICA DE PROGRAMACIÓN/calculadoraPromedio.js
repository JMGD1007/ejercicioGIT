function validarNota(mensaje) {
  let nota;
  do {
      nota = parseFloat(prompt(mensaje));
      if (isNaN(nota) || nota < 0 || nota > 10) {
          alert("La nota debe ser un número entre 0 y 10. Inténtelo nuevamente.");
      }
  } while (isNaN(nota) || nota < 0 || nota > 10);
  return nota;
}

function calcularPromedio() {
  let nombre = prompt("Ingrese el nombre del alumno: ");
  let materia = prompt("Ingrese la materia: ");

  let nota1 = validarNota("Ingrese la primera nota: ");
  let nota2 = validarNota("Ingrese la segunda nota: ");
  let nota3 = validarNota("Ingrese la tercera nota: ");

  let promedio = (nota1 + nota2 + nota3) / 3;

  if (promedio >= 7) {
      alert(nombre + ", ¡felicidades! Has aprobado la asignatura de " + materia + " con un promedio de " + promedio + ".");
  } else {
      alert(nombre + ", gracias por tu esfuerzo. Nos vemos pronto en clase de " + materia + ". El promedio obtenido es " + promedio + ".");
  }
}

calcularPromedio();
