const cuentas = [
  { nombre: "Sharon", saldo: 500, password: "1234", id: "box1" },
  { nombre: "Emiliano", saldo: 1000, password: "4598", id: "box2" },
  { nombre: "Danielle", saldo: 700, password: "1503", id: "box3" },
];

const checkboxes = document.querySelectorAll('.checkboxes input[type="checkbox"]');
const img = document.querySelector('.img');
const passwordContainer = document.querySelector('.password-container');
const passwordInput = document.getElementById('password');
const submitPasswordButton = document.getElementById('submitPassword');
const optionsContainer = document.querySelector('.options-container');
const consultarSaldoButton = document.getElementById('consultarSaldo');
const ingresarMontoButton = document.getElementById('ingresarMonto');
const retirarMontoButton = document.getElementById('retirarMonto');

let selectedAccount; 


checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', () => {
    const checkedBoxes = Array.from(checkboxes).filter(checkbox => checkbox.checked);
    if (checkedBoxes.length > 0) {
      img.src = 'assets/bank.png'; 
      checkboxes.forEach(checkbox => checkbox.hidden = true); 
      passwordContainer.style.display = 'block'; 
      selectedAccount = cuentas.find(account => account.id === checkbox.id); 
    } else {
      img.src = 'assets/inicio.png'; 
      checkboxes.forEach(checkbox => checkbox.hidden = false); 
      passwordContainer.style.display = 'none'; 
    }
  });
});

submitPasswordButton.addEventListener('click', () => {
  const password = passwordInput.value.trim();


  if (selectedAccount && selectedAccount.password === password) {
    passwordContainer.style.display = 'none'; 
    optionsContainer.hidden = false; 
    img.src = 'assets/empty.png';
    alert('El password es correcto.');
    consultarSaldo.hidden = false;
    ingresarMonto.hidden = false;
    retirarMonto.hidden = false;
  } else {
    alert('El password es incorrecto. Intenta nuevamente.');
  }
});

//saldo

consultarSaldo.addEventListener('click', () => {
  const selectedAccount = cuentas.find(account => account.nombre === "Sharon");

  if (selectedAccount) {
    alert('Su saldo es: ' + selectedAccount.saldo);
  } else {
    alert('No se encontró la cuenta seleccionada.');
  }
});

//monto
ingresarMontoButton.addEventListener('click', () => {
  const selectedAccount = cuentas.find(account => account.nombre === "Sharon");

  if (selectedAccount) {
    const montoIngresado = prompt('Ingrese el monto a ingresar:');
    if (montoIngresado !== null && !isNaN(montoIngresado) && parseFloat(montoIngresado) > 0) {
      const monto = parseFloat(montoIngresado);
      const nuevoSaldo = selectedAccount.saldo + monto;

      if (nuevoSaldo > 990) {
        alert('El saldo no puede ser mayor a $990. Ingrese un monto menor.');
      } else if (nuevoSaldo < 10) {
        alert('El saldo no puede ser menor a $10. Ingrese un monto mayor.');
      } else {
        selectedAccount.saldo = nuevoSaldo;

        alert('Monto ingresado: $' + monto + '\nNuevo saldo: $' + nuevoSaldo);
      }
    } else {
      alert('Ingrese un monto válido.');
    }
  } else {
    alert('No se encontró la cuenta seleccionada.');
  }
});

retirarMonto.addEventListener('click', () => {
  const selectedAccount = cuentas.find(account => account.nombre === "Sharon");

  if (selectedAccount) {
    const montoRetirar = prompt('Ingrese el monto a retirar:');
    if (montoRetirar !== null && !isNaN(montoRetirar) && parseFloat(montoRetirar) > 0) {
      const monto = parseFloat(montoRetirar);

      if (monto > selectedAccount.saldo) {
        alert('El monto a retirar excede el saldo actual. Ingrese un monto menor.');
      } else if (selectedAccount.saldo - monto < 10) {
        alert('El saldo después de retirar el monto no puede ser menor a $10. Ingrese un monto menor.');
      } else {
        selectedAccount.saldo -= monto;
        alert('Monto retirado: $' + monto + '\nNuevo saldo: $' + selectedAccount.saldo);
      }
    } else {
      alert('Ingrese un monto válido.');
    }
  } else {
    alert('No se encontró la cuenta seleccionada.');
  }
});
