'use strict'

console.log('JS cargado');

//objetos

//Los atributos van definido por ':' separados por coma, el último no lleva coma
let objeto={
  atributo1:78,
  nombre:'anne',
  pareja:['Maria','Ana'],
  metodo2: function(num){
    console.log('Metodo 2 : ' + (num * 2));
  }
}

console.log(objeto);
console.log('Me llamo '+objeto.nombre);
console.log('Una de mis parejas es ' + objeto.pareja[0]);

function funcion1() {
  document.write('Me encanta JavaScript')
}

funcion1();

let num = 7; //declaro y asigno una variable 'num'
num=funcion1; //aqui la reasigno
num(); //aqui se ejecuta

objeto.metodo=funcion1;
objeto.metodo();

//Parametros de funciones
function suma(a,b=4){
  console.log(a+b);
  return a+b
}

console.log(suma(5,8));
console.log(suma(2));


function ejecuta(callback){
  console.log('Ejecutando...')
  callback()
}

ejecuta(funcion1)

//excepciones
try{
  let nombre='Aldanti'
  console.log(nombre.substr(2,4)); //extrae parte del String
} catch(exception){
  console.log('La hemos liado');
  console.log(exception);
} finally{
  console.log('Ejecuto el finally');
}

//Arrays
let vector = [1,2,3]
let guarreria=[ 1,2,'edvrvrv', function(){console.log('PFFF')}, true]
let matrix=[
  [1,2,3],
  [4,5,6],
  [7,8,9]
]

console.log(matrix[1][2]);

for (var i = 0; i < vector.length; i++) {
  console.log(vector[i]);
}

for (let elemento of vector) { //recorre un vector o matriz
  console.log(elemento);
}

for (let atributo in objeto) { //recorre los atributos de un objeto no su valor
  console.log('el atributo ' + atributo + ' vale ' + objeto[atributo]);
  console.log(`El atributo '$(atributo)' vale ${objeto[atributo]}`);
  }

let matriz2=[
  [1,2,3],
  [4,5,[2,4,5],14,78],
  [7,8]
]

console.log(`ejemplo 'of' con array`);

for (let fila of matriz2) {
  console.log(fila);
}
