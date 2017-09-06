//DECLARAR VARIABLES  Y MOSTRAR EN PANTALLA
var x = 5;
var y = 2;

var z = x+y;

console.log("El resultado es "+z);

//DECREMENTO

var x = 5;
x--;
var z = x;
console.log("El resultado es "+z);

// TRUE OR FALSE
3 > 4 

4 > 3

// Js NO ES TIPADO
var prueba = 16;                              
var lastName = "Johnson";                      
var x = {firstName:"John", lastName:"Doe"};    

//Suma y concatena
var x = 16 + 4 + "Pepsi";

//FUNCIONES 
function multiplicar(n1, n2) {
    return n1 * n2;              
}
multiplicar(10,2)

//Objeto js
var persona = {
    nombre:"Juan",
    apellido:"Gomez",
    edad:30,
    colorDeOjos:"celeste"
};

persona.nombre 
O
persona["nombre"];

//Ambito global y local

//La variable local se crea cuando se inicia la funcion
function miNombre(){
    var nombre = "javier";
}

var nombre = "Javier";

function miNombreYApellido(){
    var apellido = "Altmann";
    return nombre + apellido;
}

var nombre = "Pedro";

//Funcion dentro de objeto
var persona = {
    nombre: "Javier",
    apellido: "Altmann",
    mostrarNombre: function(){
        console.log(nombre);
    }
}

persona.mostrarNombre();



var nombre = "Pedro";

var persona = {
    nombre: "Javier",
    apellido: "Altmann",
    mostrarNombre: function(){
        console.log(this.nombre);
    }
}

persona.mostrarNombre();



var nombre = "Pedro";

var persona = {
    nombre: "Javier",
    apellido: "Altmann",
    mostrarNombre: function(){
        console.log(this.nombre);
    }
}

persona.nombre = "Manuel";
persona.mostrarNombre();


//EVENTOS (Muestra cuando haces click en el boton la hora)
<p id="demo"></p>

<button onclick="document.getElementById('demo').innerHTML = Date()">¿Qué hora es?</button>

//ARRAYS
var personas = ["Manuel", "Carlos", "Juan"];
var carlos = personas[1];

//Guardo dentro de una variable todo el array
var todoElArray = personas;

var x = personas.length;   
var y = personas.sort();  

var number = [50,80,40];
//Ordena de menor a mayor
var z = number.sort();

//Listar y mostrar en tabla el array
frutas = ["Banana", "Naranja", "Manzana", "Frutilla"];
texto = "<ul>";
for (i = 0; i < frutas.length; i++) {
    texto += "<li>" + frutas[i] + "</li>";
}

//Agregar elemento a array 
frutas.push("Pera");  

//Eliminar elemento del array
delete frutas[1];

//Segunda opcion para eliminar 
parametro 1 desde , parametro 2 hasta
frutas.splice(1,1); ->Elimina elemento 1



