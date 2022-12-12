// se construyen funciones para determinar el area y el perimetro
// de un rectangulo cualquiera.
function perimeterRectangulo(base, altura) {
    return 2 * (base + altura);
}
function areaRectangulo(base, altura) {
    return base * altura;
}

/* Se ejecuta un console.log para mostrar en consola el resultado de las operaciones */

console.log(perimeterRectangulo(N, N)); //Cambiar las "N" por la longitud de la base y la altura (en ese orden) del rectangulo a evaluar y se obtendra el perimetero del mismo.
console.log(areaRectangulo(N, N)); //Cambiar la "N" por la longitud de la base y la altura (en ese orden) del rectangulo a evaluar y se obtendra el area del mismo.