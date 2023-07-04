
alegria = parseInt(alegria);
frescura = parseInt(frescura);
aqua = parseInt(aqua);
emocion = parseInt(emocion);

value = String;

function valideKey(evt){
    //  decimal ASCII
    var code = (evt.which) ? evt.which : evt.keyCode;
    
    if(code==8) { // backspace.
      return true;
    } else if(code>=48 && code<=57) { // is a number.
      return true;
    } else{ // other keys.
        alert("Recuerda que solo se aceptan números");
      return false;
    }
}

function list() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  function select1(){
    var alegria = parseInt(document.getElementById("alegria").value);
    var frescura = parseInt(document.getElementById("frescura").value);
    var aqua = parseInt(document.getElementById("aqua").value);
    var emocion = parseInt(document.getElementById("emocion").value);
    var select1 = document.getElementById('lista1');
    var select2 = document.getElementById('lista2');
    var select3 = document.getElementById('lista3');
    var select4 = document.getElementById('lista4');
    var selectedOption1 = lista1.options[select1.selectedIndex].value;
    var selectedOption2 = lista2.options[select2.selectedIndex].value;
    var selectedOption3 = lista3.options[select3.selectedIndex].value;
    var selectedOption4 = lista4.options[select4.selectedIndex].value;

    console.log("Cantidad perfume frescura", frescura + ", "+"Vendedor "+selectedOption1)
    console.log("Cantidad perfume alegria", alegria + ", "+"Vendedor "+selectedOption2)
    console.log("Cantidad perfume emocion", emocion + ", "+"Vendedor "+selectedOption3)
    console.log("Cantidad perfume aqua", aqua + ", "+"Vendedor "+selectedOption4)
    
    productos = [
        {
            cant : 1,
            vendedor :"Juana"
        }
    ];
    
    productos[0] = {
        cant : frescura,
        vendedor : selectedOption1,
        valor : frescura * 150
    };
    productos[1] = {
        cant : alegria,
        vendedor : selectedOption2,
        valor : alegria * 160
    };
    productos[2] = {
        cant : emocion,
        vendedor : selectedOption3,
        valor : emocion * 180
    };
    productos[3] = {
        cant : aqua,
        vendedor : selectedOption4,
        valor : aqua * 200
    };
    //   cantidad de venta por vendedor y total
  let filtro = productos.filter(value=> value.vendedor == "Juana");
        const totalJuana = filtro.reduce((previous, current) => {
            return previous + current.cant; // sumar el valor
        }, 0);
        const sum1 = filtro.reduce((previous,current)=>{
            return previous + current.valor;
        },0);
        
        console.log("Juana vendio:", totalJuana +" perfumes y recaudo un total de: ",sum1 +" usd")

  let filtro2 = productos.filter(value=> value.vendedor == "Pedro");
        const totalPedro = filtro2.reduce((previous, current) => {
            return previous + current.cant; // sumar el valor
        }, 0);
        const sum2 = filtro2.reduce((previous,current)=>{
            return previous + current.valor;
        },0);
        console.log("Pedro vendio:", totalPedro +" perfumes y recaudo un total de: ",sum2 +" usd"); 
//Empleado del mes
        if (sum1 > sum2) {
            alert("El empleado del mes es Juana")
        } else if(sum1<sum2){
            alert("El empleado del mes es Pedro")
        }else{
            alert("Juana y Pedro vendieron lo mismo")
        }
  }




 
