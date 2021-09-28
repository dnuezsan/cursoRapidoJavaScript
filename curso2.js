//Curso

//Esto es un comentario

/*Este un comentario
con muchas
lineas*/

'use strict' //activa el modo estricto
//esto obliga a declarar todas las variables utilizadas

//formas de salida

//hace que salte un mensaje de alerta
alert('Hola Mundo')

//solo muestra el mensaje en consola
console.log("hola Mundo, y a ti chapi")

//salida en documento, es decir la página
document.write("Adios mundo cruel")

//Formas de entrada de datos

//prompt abre ventana para recibir para recibir mensaje.
//Si además se introduce algo en el paréntesis, lanza el mensaje
var num= prompt("Dime algo cariño")
console.log(num);


//Declaración de variables
//no hace falta escribir var para hacer la declaracion
var num //Declara una varaible
num=7 //Es tipo number
num=3.146546
num=6.022E23 //6,022*10^23
var G=6.67E-11
var texto='zapato'//tipo String
var booleano=true //tipo booleano
var nul=null  //es tipo null
var noSe=undefined //es tipo undefined

var fecha=12

var texto='Tacon alto'

//Si se declara una variable fuera de la función, esta es global.
//dicha variable redeclarada dentro de la funcion sería local y funciona
//la ultima vez que esta declarada com si estuviera al principio

console.log(texto);

function function1(){
  console.log(texto);
  var texto =78
  console.log(texto);
}

function1()

//let permite reasignar pero no redeclarar
function funcion2(){
  console.log(var1);
}
let var1=7
funcion2()
var1=8
funcion2()

//let tambien permite reasignar de forma local
if (var1==8) {
  console.log("bien hecho");
}

for (let i = 0; i < var1; i++) {
  var1=9
  console.log(i);
}

let num1=16
switch (num1) {
  case 4:
    console.log("nghnghn");
    break;
    case 7:

      break;
  default:
  console.log("defaul"); //opcional
}

for (let i1 = 0; i1 < 7; i1++) {
  console.info("numero" + i1)
}

let i=0
//se provocara bucle infinito para producir error
/*while (i<10) {
  console.error("Puess se lio cuate"); //lanza mensaje en caso de error
}*/

console.log(matriz[1][2]);

for (var i = 0; i < vector.length; i++) {
  console.log(vector[i]);
}

for (let elemento of vector) { //recorre un vector
  console.log(elemento);
}

for (let atributo in objeto) { //recorre los atributos de un objeto
  console.log(atributo)
  ;}
