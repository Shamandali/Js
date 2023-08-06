// Ejercicio1

// const saludar =(nombre)=>{
// console.log ("hola", nombre)
// }

// const prueba = (callback, numero)=>{
// console.log(callback, numero)
// callback("Sharon");
// }

// prueba(saludar,5);
// saludar("Vanessa");

// Ejercicio 2

// function obtenerTipoYContenido(variable, callback) {
//     const tipoDeDato = typeof variable;
//     callback(tipoDeDato, variable);
//   }

//   const miVariable = "Hola, soy una cadena";
//   obtenerTipoYContenido(miVariable, (tipo, contenido) => {
//     console.log(`Tipo de dato: ${tipo}`);
//     console.log(`Contenido: ${contenido}`);
//   });
  
//   Ejercicio 3

// function realizarOperacion(num1, num2, callback) {
//     if (typeof num1 !== 'number' || typeof num2 !== 'number') {
//       throw new Error('Ambos argumentos deben ser números.');
//     }
  
//     if (typeof callback !== 'function') {
//       throw new Error('El tercer argumento debe ser una función (callback).');
//     }
  
//     const suma = num1 + num2;
//     const resta = num1 - num2;
//     const multiplicacion = num1 * num2;
//     const division = num1 / num2;
  
//     callback(suma, resta, multiplicacion, division);
//   }
  

//   const numero1 = 10;
//   const numero2 = 5;
  
//   realizarOperacion(numero1, numero2, (suma, resta, multiplicacion, division) => {
//     console.log(`Suma: ${suma}`);
//     console.log(`Resta: ${resta}`);
//     console.log(`Multiplicación: ${multiplicacion}`);
//     console.log(`División: ${division}`);
//   });
  
//   Ejercicio4 

// function ordenSuperior(cadena, callback) {
//     if (typeof cadena !== 'string') {
//       throw new Error('El primer argumento debe ser una cadena de caracteres.');
//     }
  
//     if (typeof callback !== 'function') {
//       throw new Error('El segundo argumento debe ser una función (callback).');
//     }
  
//     callback(cadena);
//   }
  

//   function minus(cadena) {
//     console.log(cadena.toLowerCase());
//   }
  
//   function mayus(cadena) {
//     console.log(cadena.toUpperCase());
//   }
  

//   const cadena1 = "PejeLagarto";
//   const cadena2 = "Hola Mundo";
  
//   ordenSuperior(cadena1, minus); //  "pejelagarto"
//   ordenSuperior(cadena1, mayus); //  "PEJELAGARTO"
//   ordenSuperior(cadena2, minus); //  "hola mundo"
//   ordenSuperior(cadena2, mayus); //  "HOLA MUNDO"
  
// Ejercicio 5 

function cantidadesMayoresDosHoras(array, callback) {
    if (!Array.isArray(array)) {
      throw new Error('El primer argumento debe ser un arreglo.');
    }
  
    if (typeof callback !== 'function') {
      throw new Error('El segundo argumento debe ser una función (callback).');
    }
  
    const horas = array.filter(minutos => minutos >= 120).map(minutos => minutos / 60);
    callback(horas);
  }
  const tiemposEnMinutos = [120, 80, 200, 100, 180, 240, 300];
  
  cantidadesMayoresDosHoras(tiemposEnMinutos, horasMayores => {
    console.log(horasMayores); 
  });
  