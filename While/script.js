// Ejercicio 1:
    // var type =  prompt("Por favor ingresa un número: ");
    // var index = 0;
    // while (index < type) {
    //     index= index +5;
    //     console.log("Múltiplos de 5 del número ingresado", index)
    // }
// Ejercicio 2:
// var num1 =  prompt("Por favor ingresa un número entre 1 y 50: ");
// var num2 =  prompt("Por favor ingresa nuevamente un número entre 1 y 50: ");
// var index = 1;
// while (index <= 50) {
//     console.log(index)
//     if(num1==index || num2 == index){
//         console.log("¡Lotería!")
//      }
//     index++;
// }
// Ejercicio 3:
// const arr =[];

//     while(!(num=="0")){
//         var num =  prompt("Por favor ingresa un número: ");
//             if ((num == null || /\D/.test(num) || num == "")) {
//                 var num2 =  prompt("Por favor ingresa SOLO números : ");
//                 arr.push(num2);
//             } else {
//                 arr.push(num);
//             }
            
//     } console.log("Se capturaron los números ingresados: ", arr)
// Ejercicio 4:
// while(!(num=="")){
//  var num =  prompt("Por favor ingresa letras o palabras: ");
//      if ((num == null || /^[0-9]+$/.test(num))) {
//         var num2 =  prompt("Por favor ingresa SOLO letras o palabras SIN espacios: ");
//     //                 arr.push(num2);
//         console.log("Se capturaron los valores ingresados: " + num2)
//     } else {
//     //                 arr.push(num);
//     console.log("Se capturaron los números ingresados: " + num)
//            }
// } 
// Ejercicio 5:
while(!(day=="DOMINGO" || day=="Domingo" || day=="domingo")){
     var day =  prompt("Por favor ingresa un día de la semana ");
     if (day.toUpperCase()=="DOMINGO") {
        alert("Ve a descansar")
     } else {
        alert(`Escribiste el día ${day}`)
     }
 } 

 
 

