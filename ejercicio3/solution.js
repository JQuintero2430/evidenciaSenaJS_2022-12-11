/* Escriba un programa que lea dos vectores de números enteros ordenados ascendentemente y luego
produzca la lista ordenada de la mezcla de los dos, por ejemplo, si los dos arreglos tienen los números 1 3
6 9 17 y 2 4 10 17, respectivamente, la lista de números en la pantalla debe ser 1 2 3 4 6 9 10 17 17. Limite
los vectores a un tamaño de 5 y debe validar en cada ingreso que realmente se estén ingresando los datos
de forma ascendente. */

//Primer array con sus elementos(Numeros aleatoreos del 1 al 1000)
const array1 = [Math.floor(Math.random() * 1000), Math.floor(Math.random() * 1000), Math.floor(Math.random() * 1000), Math.floor(Math.random() * 1000), Math.floor(Math.random() * 1000)];

//Segundo array con sus elementos(Numeros aleatoreos del 1 al 1000)
const array2 = [Math.floor(Math.random() * 1000), Math.floor(Math.random() * 1000), Math.floor(Math.random() * 1000), Math.floor(Math.random() * 1000), Math.floor(Math.random() * 1000)];

//Array donde se unen el primer y el segundo array.
joinedArrays = [].concat(array1, array2);

//funcion de ordenamiento del array que agrupas los dos primeros arrays
superArray = joinedArrays.sort((a, b) => {
    if (a === b) {
        return 0;
    }
    if (a < b) {
        return -1;
    }
    if (a > b) {
        return 1;
    }
});


console.log('El primer array es: '+array1);
console.log('El segundo array es: '+array2);
console.log('La union de los dos arrays anteriores ordenados de manera ascendente da como resultado el siguiente array: '+superArray);