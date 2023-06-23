// Ejercicio 1:
// var arregloVacio = [];
//     // Se ejecuta 10 veces
//     for (let i = 0; i < 10; i++) {
//     let random = Math.random();
//     random = random * 10 + 1;
//     // enteros
//     random = Math.trunc(random);
//     arregloVacio[i] = random;
//     }console.log(arregloVacio)

// Ejercicio 2: 
//  var type =  prompt("Por favor escribe palabras separadas por coma (,): ");

//  var arr = type.split(',');
//  console.log(arr)
// Ejercicio 3: 

    var arr = [10,40,30,20,15,5]
    orden = arr.sort(function(a, b){return a - b});
    console.log("Arreglo de menor a mayor: ",orden)
    
    min = Math.min(...orden);
    max = Math.max(...arr);
    console.log("Número menor",min)
    console.log("Número mayor",max)