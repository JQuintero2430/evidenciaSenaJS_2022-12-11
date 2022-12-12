// se construyen funciones para determinar el area y el perimetro
// de un circulo cualquiera.
function perimeterCircle(radio) {
    return 2 * Math.PI * radio ** 2;
}
function areaCircle(radio) {
    return Math.PI * radio ** 2;
}

/* Se ejecuta un console.log para mostrar en consola el resultado de las operaciones */

console.log(perimeterCircle(N)); //Cambiar la "N" por el radio del circulo a evaluar y se obtendra el perimetero del mismo.
console.log(areaCircle(N)); //Cambiar la "N" por el radio del circulo a evaluar y se obtendra el area del mismo.