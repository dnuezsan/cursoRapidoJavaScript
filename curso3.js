'use strict'


//Fechas y uso de la clase date

console.log('Cargado JS');
let fecha=new Date();
console.log(fecha);
let fecha2=new Date(2021,8,29); //sigeu el formato americano
console.log(fecha2);

const meses=['enero','febrero','marzo','abril','mayo','junio','julio'];
const semana=['lunes','martes','miercoles','jueves','viernes'];
let hoy= `hoy es ${semana[fecha.getDay()-1]} del mes ${fecha.getMonth() + 1}`;
console.log(hoy);

let ms1=fecha.getTime();
console.log('Desde los Beatles han pasado' + ms1 + 'ms');

let dentro5Dias=ms1+5*24*60*60*1000;
//5 dias por 24 horas por 60 minutos por 60 segundos, por factor de conversión a ms (1000)
dentro5Dias=new Date(dentro5Dias);
console.log(dentro5Dias);


//Strings

let nombre1='Ana';
let nombre2='Ángel';
let nombre3='Abel';
if (nombre1>nombre3) {
  console.log(nombre1+' es mayor que ' + nombre3);
} else {
  console.log(nombre3 + ' es mayor que ' + nombre1);
}

let texto= 'En un lugar de la Mancha, de cuyo nombre no quiero acordarme...';
console.log(texto.charAt(6));
console.log(texto.indexOf(',')); //busca la posicion de la coma
console.log(texto.indexOf('e', texto.indexOf(','))); //devuelve la primera e tras la coma
console.log(texto.includes('la Mancha')); //comprueba que el texto incluye el argumento (sensitive case)
console.log(texto.toLowerCase()); // Convierte en minúsculas
console.log(texto.toUpperCase());//Convierte en mayúsculas
console.log(texto.substr(4,10)); //corta el String


//Objeto Math libreria
console.log(Math.floor(Math.PI));

//Number
let entrada='42Zapato';
console.log(Number.isNaN(entrada)); //Comprueba que el argumento es un NaN
console.log(Number.parseInt(entrada));//convierte la varaibel en int outcome=42
entrada='3.1415PiñaColada';
console.log(Number.parseFloat(entrada));///convierte la varaibel en float outcome=3.1415

//Conjunto - Set. NO puede repetir los datos que contiene
let amigos= new Set();
amigos.add('Ana');
amigos.add('Juan');
amigos.add('Paco');
console.log(amigos.size); //dice el tamaño del conjunto
for (let amigo of amigos) {
  console.log(amigo);
}

//Arraylist o lista. Puede repetir los datos
amigos=[];
amigos.push('Ana');
amigos.push('Ana');
amigos.push('Ana');
amigos.push('Ana');
console.log(amigos.length); //dice el tamaño del array list
for (var i = 0; i < amigos.length; i++) {
  console.log(amigos[i]);
}

//Mapas. Tiene una organización mediante clave-valor

let coches = new Map();
coches.set('ba-2343-ZT', 'Porsche');
coches.set('TO-4375-JO', 'Seat Ibiza');
coches.set('ABC-DEF', 'Tesla Turbo Volador');
