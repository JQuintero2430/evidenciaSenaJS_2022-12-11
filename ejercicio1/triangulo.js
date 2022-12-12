// se construyen funciones para determinar el area y el perimetro
// de un triangulo cualquiera.
function perimeterTriangle(lado1, lado2, lado3) {
    return lado1 + lado2 + lado3;
}
function areaTriangle(base, altura) {
    return base * altura / 2;
}

/* Se ejecuta un console.log para mostrar en consola el resultado de las operaciones */

console.log(perimeterTriangle(N, N, N)); //Cambiar las "N" por la longitud de los lados del triangulo a evaluar y se obtendra el perimetro del mismo.
console.log(areaTriangle(N, N)); //Cambiar las "N" por la base y la altura (en ese orden) del triangulo a evaluar y se obtendra el area del mismo.