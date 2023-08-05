// Ejercicio 1:
    condition = prompt("¿Eres bellisimo/a?");
    if(condition == "si"){
        console.log ("Ciertamente")
    } else if (condition == "no"){
        console.log ("No te creo")
    }else{
        console.log ("Ingresa otra respuesta")
    }
// Ejercicio 2:
    // num = prompt("Ingrese un número");
    // if(num % 2 == 0 ){
    //     console.log (`${num} es divisible entre 2`)
    // } else{
    //     console.log (`${num} no es divisible entre 2`)
    // }
// Ejercicio 3:
    // num = prompt("Ingrese un número entero");
    // if(num % 2 == 0 ){
    //         alert (`${num} es número par`)
    //     } else{
    //         alert (`${num} es número impar`)
    //     }
 // Ejercicio 4:
        // clientId = prompt("Ingrese el número de cliente");
        // if(clientId === "1000" ){
        //     console.log("¡Ganaste un premio!")
        // } else{
        //     console.log(`${clientId} Lo sentimos, sigue participando`)
        // }
// Ejercicio 5:
    // numberOne = prompt("Ingrese el primer número");
    // numberTwo = prompt("Ingrese el segundo número");
    
    // if(numberOne < numberTwo){
    //     alert (` El número ${numberOne} es menor que el número ${numberTwo}`)
    // }
    // else{
    //     alert (` El número ${numberTwo} es menor que el número ${numberOne}`)
    // }
// Ejercicio 6:
        // numberOne = prompt("Ingrese el primer número");
        // numberTwo = prompt("Ingrese el segundo número");
        // numberThree = prompt("Ingrese el segundo número");
        // var total;
        // var mayor;
        
        // if(numberOne > numberTwo ){
        //     total = numberOne
        // }else{
        //     total = numberTwo
        // }
        
        // if(total > numberThree){
        //     mayor = total
        // }
        // else {
        //     mayor= numberThree
        // }

        // Si queremos que SOLO se muestre una de las dos condiciones cuando 2 números son iguales o imprimir el número mayor de los 3
            // if(numberOne === numberTwo || numberOne === numberThree || numberThree === numberTwo){
            //     alert (` Dos de los números ingresados son iguales`)
            // }else{
            //     alert (` El número mayor es ${mayor}`)
            // }

        // Si queremos mostrar cuál es el mayor así hayan dos números iguales, se mostraran ambas alerts.
            // alert (` El número mayor es ${mayor}`)
            // if(numberOne === numberTwo || numberOne === numberThree || numberThree === numberTwo){
            //     alert (` Dos de los números ingresados son iguales`)
            // }
// Ejercicio 7:
    // day = prompt("Ingrese un día de la semana");
    // if(day.toUpperCase() === "LUNES"){
    //     console.log("Elegiste el Lunes :D")
    // }else if(day.toUpperCase()=== "VIERNES"){
    //     console.log("Elegiste el Viernes :D")
    // }else if( day.toUpperCase() === "SABADO" || day.toUpperCase() === "DOMINGO"){
    //     console.log(` Elegiste ${day}`)
    // } else{
    //     console.log("Elegiste otro día de la semana")
    // }
// Ejercicio 8:
    // var note = prompt("Ingrese una calificación de 1 a 10");
    // if(note > 10 || note <= 0){
    //     console.error("Error, la calificación no esta en el rango")
    // }else if(note < 6){
    //     console.warn("Reprobado")
    // }else if (note >= 6 && note <= 8){
    //     console.info("Regular")
    // }else if(note == 9){
    //     console.info("Bien")
    // }else{
    //     console.info("Excelente")
    // }

// Ejercicio 9:

// alert("Bienvenido/a")
//     var type =  prompt("Por favor escribe el tipo de helado que quieres, acá esta el menú: \n Tipo 1 = El helado sin topping cuesta 50 MXN. \n Tipo 2 = El topping de oreo cuesta 10 MXN. \n Tipo 3 = El topping de KitKat cuesta 15 MXN. \n Tipo 4 = El topping de brownie cuesta 20 MXN.");
//     if(type.toUpperCase() == "TIPO 1" || type == 1){
//         document.write('<h1 style = "color: purple"> Resumen de tu pedido: </h1>');
//         document.write(` <h2>Helado sin topping</h2> `);
//         document.write(` Valor 50 MXN `);
//     }else if(type.toUpperCase() == "TIPO 2" || type == 2){
//         document.write('<h1 style = "color: purple"> Resumen de tu pedido: </h1>');
//         document.write(` <h2>Helado de oreo</h2>`);
//         document.write(` Valor 60 MXN `);
//     }else if(type.toUpperCase() == "TIPO 3" || type == 3){
//         document.write('<h1 style = "color: purple"> Resumen de tu pedido: </h1>');
//         document.write(` <h2>Helado de KitKat</h2>`);
//         document.write(` Valor 65 MXN `);
//     }else if (type.toUpperCase() == "TIPO 4" || type == 4){
//         document.write('<h1 style = "color: purple"> Resumen de tu pedido: </h1>');
//         document.write(` <h2>Helado de brownie</h2>`);
//         document.write(` Valor 70 MXN `);
//     }
// Ejercicio 10:
// alert("Desarrolla aplicaciones ¡AHORA!")
// var type = prompt("A continuación encontrás los niveles disponibles y su costo por MES: \n Course: $4999 MXN. \n Carrera $3999 MXN. \n Master: $2999 MXN \n Escribe tu programa ideal:");
// var beca = prompt("Ahora cuentanos a cuál beca aplicaste y empieza a disfrutar de sus BENEFICIOS!: \n Facebook: 20% de descuento.\n Google: 15% de descuento.\n Jesua: 50% de descuento.");
// var desc = Number;
// if(beca.toLocaleUpperCase()=="FACEBOOK"){
//      desc = "20";
// } else if(beca.toLocaleUpperCase()=="GOOGLE"){
//      desc = "15";
// }else if(beca.toLocaleUpperCase()=="JESUA"){
//      desc = "50";
// };

// if (type.toLocaleUpperCase()=="COURSE") {
//     document.write('<h2 style = "color: purple"> Nivel elegido: Course </h1>');
//     document.write(" Valor matricula mensual: $4999 MXN");
//     const value = 4999;
//     const total1 = value * (desc/100);
//     const total = value - total1;
//     const total2 = total * 2;
//     document.write(` <h4>Descuento por beca ${beca} ${desc}%</h4>`);
//     document.write(`<h3>Total por mes = ${total} MXN</h3>`);
//     document.write(`<h3>Total nivel (duración 2 meses) = ${total2} MXN</h3>`);

// } else if(type.toLocaleUpperCase()=="CARRERA"){
//     document.write('<h2 style = "color: purple"> Nivel elegido: Carrera </h1>');
//     document.write(" Valor matricula mensual: $3999 MXN");
//     const value = 3999;
//     const total1 = value * (desc/100);
//     const total = value - total1;
//     const total2 = total * 6;
//     document.write(` <h4>Descuento por beca ${beca} ${desc}%</h4>`);
//     document.write(`<h3>Total por mes = ${total} MXN</h3>`);
//     document.write(`<h3>Total nivel (duración 6 meses) = ${total2} MXN</h3>`);

// }else if(type.toLocaleUpperCase()=="MASTER"){
//     document.write('<h2 style = "color: purple"> Nivel elegido: Master </h2>');
//     document.write(" Valor matricula mensual: $2999 MXN");
//     const value = 2999;
//     const total1 = value * (desc/100);
//     const total = value - total1;
//     const total2 = total * 12;
//     document.write(` <h4>Descuento por beca ${beca} ${desc}%</h4>`);
//     document.write(`<h3>Total por mes = ${total} MXN</h3>`);
//     document.write(`<h3>Total nivel (duración 12 meses) = ${total2} MXN</h3>`);
// }
// Ejercicio 11:
// alert("A continuación encontrás una ayuda para calcular el total a pagar de acuerdo con tus kilometros recorridos")
// var distance = prompt("Escribe los kilometros recorridos (solo números)\n Ejemplo: 200");
// var type = prompt("Escribe tu tipo de vehiculo:  \n Coche: $0.20 x km. \n Moto: $0.10 x km. \n Autobus: $0.50 x km");
// var litro = prompt("Escribe la cantidad de litros consumidos:  \n Ejemplo: 2");
// var priceKm= Number;
// var litroConsum = Number;

// if (type.toUpperCase() == "COCHE") {
//     priceKm = 0.20;
// } else if(type.toUpperCase() == "MOTO"){
//     priceKm = 0.10;
// }else if(type.toUpperCase() == "AUTOBUS"){
//     priceKm = 0.5;
// }

// if (litro >= "0" && litro <= "100") {
//     litroConsum = 5;
// } else {
//     litroConsum = 10;
// }

// var total = (priceKm * distance)+ litroConsum;
// console.log(litroConsum)
// document.write(`<h2> Su total a pagar es: $ ${total}</h2>`);