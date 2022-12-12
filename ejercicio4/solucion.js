/* Una emisora con presencia en diferentes ciudades desea conocer el rating de canciones y cantantes más
escuchados (sonados) en este semestre del año. Por lo tanto, se ha pedido a estudiantes del SENA del
programa de tecnólogo en análisis y desarrollo de software desarrollar una solución que permita conocer
la respuesta de 6 personas con relación a sus gustos musicales. Con fines administrativos y realizar una
rifa entre las personas encuestadas, la emisora desea poder registrar de las personas entrevistadas su
nombre, número de identificación (cédula), fecha de nacimiento, correo electrónico, ciudad de residencia,
ciudad de origen. Además, se deberá poder almacenar el artista y título de hasta 3 canciones favoritas en
cada una de las personas que se ingrese, teniendo en cuenta lo anterior, se sugiere que la solución deberá
mostrar un menú que permita las siguientes opciones:

a. Agregar una persona con los datos que se listan anteriormente.

b. Mostrar la información personal de una persona particular por medio de su posición en el vector */


//Llenamos un array con una coleccion en formato json con los elementos mencionados
let encuesta = 
[{Name: "Jose Rodriguez", 
 Document: 123456789, 
 Birthdate: "01-01-1995", 
 Cityresidence: "Bogota", 
 Citybirth: "Villavicencio", 
 Favartist: "Tupac", 
 Firstsong: "all eyes on me", 
 Secondsong: "Brenda's got a baby", 
 Thirthsong: "Hit em up"},
{Name: "Jose Jimenez", 
 Document: 987654321, 
 Birthdate: "01-02-1999", 
 Cityresidence: "Soacha", 
 Citybirth: "Barranquilla", 
 Favartist: "Mac Miller", 
 Firstsong: "Self Care", 
 Secondsong: "Circles", 
 Thirthsong: "Small worlds"},
 {Name: "Juan Guzman", 
 Document: 134564327, 
 Birthdate: "01-06-1994", 
 Cityresidence: "Valledupar", 
 Citybirth: "Bucaramanga", 
 Favartist: "Dua Lipa", 
 Firstsong: "Levitating", 
 Secondsong: "One Kiss", 
 Thirthsong: "Love again"},
 {Name: "Liz Suarez", 
 Document: 228866773, 
 Birthdate: "22-12-1999", 
 Cityresidence: "Detroit", 
 Citybirth: "Melgar", 
 Favartist: "Adele", 
 Firstsong: "Hello", 
 Secondsong: "Skyfall", 
 Thirthsong: "All i ask"},
 {Name: "Mayerling Gutierrez", 
 Document: 976529875, 
 Birthdate: "11-11-1985", 
 Cityresidence: "Sienaga", 
 Citybirth: "Villado", 
 Favartist: "Juan Gabriel", 
 Firstsong: "Querida", 
 Secondsong: "Asi fue", 
 Thirthsong: "Si quieres"},
 {Name: "Amanda Arias", 
 Document: 124242314, 
 Birthdate: "18-02-2005", 
 Cityresidence: "New york", 
 Citybirth: "Chia", 
 Favartist: "Juan Luis Guerra", 
 Firstsong: "Frio Frio", 
 Secondsong: "Bachata rosa", 
 Thirthsong: "La cosquillita"},];

//utilizamos el metodo .push para insertar otro item al array encuesta con todos sus elementos
encuesta.push(
    {Name: "Jorge Quintero", 
 Document: 678954321, 
 Birthdate: "01-04-1995", 
 Cityresidence: "Cartagena", 
 Citybirth: "Cajica", 
 Favartist: "Morodo", 
 Firstsong: "Centrate", 
 Secondsong: "Wild west", 
 Thirthsong: "Obama Osama"}
)

//utilizamos la funcion console.log para imprimir un elemento del array
console.log(encuesta[N]) //cambiamos la N por cualquier numero entero factible (no puede ser un numero mayor al numero de elemtos del array menos 1)
