let personas = [{Nombre: 'Luis', Edad: (Math.floor (Math.random()*(120 - 1)+ 1))},
             {Nombre: 'Maria', Edad: (Math.floor (Math.random()*(120 - 1)+ 1))},
             {Nombre: 'Juan', Edad: (Math.floor (Math.random()*(120 - 1)+ 1))},
             {Nombre: 'Juliana', Edad: (Math.floor (Math.random()*(120 - 1)+ 1))},
             {Nombre: 'Daniela', Edad: (Math.floor (Math.random()*(120 - 1)+ 1))},
             {Nombre: 'Manuel', Edad: (Math.floor (Math.random()*(120 - 1)+ 1))},
             {Nombre: 'Estela', Edad: (Math.floor (Math.random()*(120 - 1)+ 1))},
             {Nombre: 'Jose', Edad: (Math.floor (Math.random()*(120 - 1)+ 1))},
             {Nombre: 'Astrid', Edad: (Math.floor (Math.random()*(120 - 1)+ 1))},
             {Nombre: 'Pedro', Edad: (Math.floor (Math.random()*(120 - 1)+ 1))}];

let totalMenores = 0;
let totalMayores = 0;
let totalTerceraEdad = 0;

for(let i = 0; i < personas.length; i++){
  if(personas[i]['Edad'] < 18){
    totalMenores = totalMenores+1;
    console.log (personas[i]['Nombre'] + ' es menor de edad')
  }
  if(personas[i]['Edad'] >= 18 & personas[i]['Edad'] < 60){
    totalMayores = totalMayores + 1;
    console.log (personas[i]['Nombre'] + ' es mayor de edad')
  }
  if(personas[i]['Edad'] >= 60){
    totalMayores = totalMayores + 1;
    totalTerceraEdad = totalTerceraEdad + 1;
    console.log (personas[i]['Nombre'] + ' es mayor de edad y ademas una persona de tercera edad')
  }
}

console.log('La cantidad de personas que pertenecen al grupo de los menores de edad es: '+totalMenores);
console.log('La cantidad de personas que pertenecen solo al grupo de los mayores de edad es: '+(totalMayores-totalTerceraEdad));
console.log('La cantidad de personas que pertenecen al grupo de la tercera edad es: '+totalTerceraEdad);
console.log('La cantidad total de personas que pertenecen al grupo de los mayores de edad es: '+totalMayores);