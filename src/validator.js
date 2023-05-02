const validator = {
  //Algoritmo de Luhn
  isValid: function (numeroTarjeta) {
    let suma = 0; // la suma parte de 0
    let multiplicador = 1; // osea posicion 1

    for (let i = numeroTarjeta.length - 1; i >= 0; i--) {
      // Recorrer los dígitos de la tarjeta de crédito de derecha a izquierda // leng vcuenta posiciones que tienes
      let digito = parseInt(numeroTarjeta.charAt(i)); //parseINT te modifica el texto a un numero, ChatAT accede a un caracter

      if (multiplicador % 2 === 0) {
        // aqui verifico si el multiplicador es uno o dos si es 1 no entra al if
        digito *= 2; //si es 2 lo multiplica por dos

        if (digito > 9) {
          // Si el resultado de la multiplicación es mayor a 9, sumar los dígitos del número resultante
          digito -= 9; // men vez de suma le resto 9 que da lo mismo
        }
      }
      multiplicador = multiplicador === 1 ? 2 : 1; // Cambiar el multiplicador para alternar entre 1 y 2
      suma += digito; // Sumar el dígito actual a la suma total
    }
    return suma % 10 === 0; // La tarjeta de crédito es válida si la suma total es un múltiplo de 10
  },

  maskify: function (input) {
    return input.slice(0, -4).replace(/./g, "#") + input.slice(-4); // maskify
  },
};

export default validator;


// Obtener los elementos del formulario
const nombre = document.getElementById('inputname');
const numeroTarjetaInput = document.getElementById('numero-tarjeta');
const mesInput = document.getElementById("inputmes");
//const yearInput = document.getElementById("inputaño");
//const cvvInput = document.getElementById("inputcvc");
const verificarTarjetaButton = document.getElementById('verificar-tarjeta');


// obtener los elementos para la tarjeta
const parrafo = document.getElementById('tarjeta-numero');
const inputNombre = document.querySelector("#inputname");
const inputTarjeta = document.querySelector("#numero-tarjeta");
const inputMes = document.querySelector("#inputmes");
const inputYear = document.querySelector("#inputano");
const inputCvv = document.querySelector("#inputcvc");


const cardName = document.querySelector("#tarjeta-nombre");
const cardNumber = document.querySelector("#tarjeta-numero");
const cardMes = document.querySelector("#tarjeta-mes");
const cardYear = document.querySelector("#tarjeta-year");
const cardCvv = document.querySelector("#tarjeta-cvv");




// Darle funcion a la tarjeta   funcion para el nombre    
inputNombre.addEventListener("input", () => { // detecta cuando el usuarios hace un evento en mi input y le pasamos una funcion como 2 parametro
  cardName.innerText = inputNombre.value;
  if (inputNombre.value.length === 0) {
    cardName.innerText = "INGRESE NOMBRE"
  }

});

nombre.addEventListener("input", function () {
  let soloNom = this.value;
  soloNom = soloNom.replace(/[^a-zA-Z]/g, " ")
  this.value = soloNom;
});


// ingresar dentro de mi tarjeta el maskify y solo campos numericos en input de numero de tarjeta
inputTarjeta.addEventListener("input", () => {
  cardNumber.innerText = inputTarjeta.value;

 const originalTexto = parrafo.textContent;
  const maskedTexto = validator.maskify(originalTexto);
  parrafo.textContent = maskedTexto;

  if (inputTarjeta.value.length === 0) {
    cardNumber.innerText = "#### #### #### ####"
  }
});

numeroTarjetaInput.addEventListener("input", function () {
  let soloNum = this.value;
  soloNum = soloNum.replace(/[^0-9]/g, "")
  this.value = soloNum;
});



// input mes
inputMes.addEventListener("input", () => {
  cardMes.innerText = inputMes.value;
  if (inputMes.value.length === 0) {
    cardMes.innerText = "##"
  }

})

mesInput.addEventListener("input", function () {
  let soloNu = this.value;
  soloNu = soloNu.replace()
  this.value = soloNu;
});


// input año
inputYear.addEventListener("input", () => {
  cardYear.innerText = inputYear.value;
  if (inputYear.value.length === 0) {
    cardYear.innerText = "##"
  }
})


//input cvv
inputCvv.addEventListener("input", () => {
  cardCvv.innerText = inputCvv.value;
  if (inputCvv.value.length === 0) {
    cardCvv.innerText = "###"
  }
})

s// Evento de escuchar o llamar al botón para validar tarjeta
verificarTarjetaButton.addEventListener('click', function () {
  const esValida = validator.isValid(numeroTarjetaInput.value);
  if (numeroTarjetaInput.value === "" || nombre.value === "") {
    alert('Rellene todos los campos');
  }
  else {
    if (esValida) {
      alert('Tarjeta Valida!');
      document.getElementById("gracias").style.display = 'block'
      document.getElementById("contenedor").style.display = 'none' // debo cambiar el alert por un mensaje en pantalla (con otro html?)
      document.getElementById("tarjeta").style.display = "none"
    }
    else {
      alert('Ingrese un número de tarjeta valido');
    }
  }
}
  ,);