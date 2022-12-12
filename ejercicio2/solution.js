/* Desarrollar un programa que permita almacenar las edades de un grupo de 10 personas en un vector de
enteros y luego determine la cantidad de personas que son menores de edad, mayores de edad, cuántos
adultos mayores, la edad más baja, la edad más alta y el promedio de edades ingresadas. Para el ejercicio
anterior suponga que un adulto mayor debe tener una edad igual o superior a 60. Debe validar para cada
ingreso que los valores estén en un rango entre 1 y 120 años */



let personas = [{ Nombre: 'Luis', Edad: (Math.floor(Math.random() * (120 - 1) + 1)) },
{ Nombre: 'Maria', Edad: (Math.floor(Math.random() * (120 - 1) + 1)) },
{ Nombre: 'Juan', Edad: (Math.floor(Math.random() * (120 - 1) + 1)) },
{ Nombre: 'Juliana', Edad: (Math.floor(Math.random() * (120 - 1) + 1)) },
{ Nombre: 'Daniela', Edad: (Math.floor(Math.random() * (120 - 1) + 1)) },
{ Nombre: 'Manuel', Edad: (Math.floor(Math.random() * (120 - 1) + 1)) },
{ Nombre: 'Estela', Edad: (Math.floor(Math.random() * (120 - 1) + 1)) },
{ Nombre: 'Jose', Edad: (Math.floor(Math.random() * (120 - 1) + 1)) },
{ Nombre: 'Astrid', Edad: (Math.floor(Math.random() * (120 - 1) + 1)) },
{ Nombre: 'Pedro', Edad: (Math.floor(Math.random() * (120 - 1) + 1)) }];

let totalMenores = 0;
let totalMayores = 0;
let totalTerceraEdad = 0;
let menorEdad = 99999;
let mayorEdad = 0;
let menorNombre;
let mayorNombre;

for (let i = 0; i < personas.length; i++) {
  if (personas[i]['Edad'] < 18) {
    totalMenores = totalMenores + 1;
    console.log(personas[i]['Nombre'] + ' es menor de edad');
  }
  if (personas[i]['Edad'] >= 18 & personas[i]['Edad'] < 60) {
    totalMayores = totalMayores + 1;
    console.log(personas[i]['Nombre'] + ' es mayor de edad');
  }
  if (personas[i]['Edad'] >= 60) {
    totalMayores = totalMayores + 1;
    totalTerceraEdad = totalTerceraEdad + 1;
    console.log(personas[i]['Nombre'] + ' es mayor de edad y ademas una persona de tercera edad');
  }
  if (personas[i]['Edad'] < menorEdad) {
    menorEdad = personas[i]['Edad'];
    menorNombre = personas[i]['Nombre'];
  }
  if (personas[i]['Edad'] > mayorEdad) {
    mayorEdad = personas[i]['Edad'];
    mayorNombre = personas[i]['Nombre'];
  }
}

console.log('El numero de personas que pertenecen al grupo de los menores de edad es: ' + totalMenores);
console.log('El numero de personas que pertenecen al grupo de los mayores de edad pero aun no es una persona de la tercer edad es: ' + (totalMayores - totalTerceraEdad));
console.log('El numero de personas que pertenecen al grupo de la tercera edad es: ' + totalTerceraEdad);
console.log('El numero total de personas que pertenecen al grupo de los mayores de edad es: ' + totalMayores);
console.log('La persona con menor edad es ' + menorNombre + ', quien tiene ' + menorEdad + ' años.');
console.log('La persona con mayor edad es ' + mayorNombre + ', quien tiene ' + mayorEdad + ' años.')
console.log(personas);