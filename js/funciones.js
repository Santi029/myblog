// functiones declarativas y de Expresion o Anonimas

// Declarativas

// function miFuntion() {
//     return 3;
// }

// miFuntion();

//Expresion o Anonimas

// var miFuntion = funtion(a,b){
//     return a + b;
// }

// miFuntion();





Example

function saludarEstudiantes (estudiante) {
    console.log(estudiante);
}

saludarEstudiantes("Diego");

//Pero para hacerlo para muchos estudiantes seria de esta forma

function saludarEstudiantes(estudiante) {
    console.log('Hola ${estudiante}');
}