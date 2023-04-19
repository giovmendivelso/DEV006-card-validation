const validator = {//algoritmo de Lunh //
  isvalid: function (tarjetadecredito){
    let multiplicar = 1
let suma = 0; /*la suma va a partir de 0*/
    for(let i = tarjetadecredito.length -1; i >= 0; i--){ 
       // Recorrer los dígitos de la tarjeta de crédito de derecha a izquierda // leng cuenta posiciones que tiene//
    let numeros = parseInt(tarjetadecredito.charArt(i))
    //ChatAT accede a un caracter//

      if (multiplicar % 2 === 0){
        // aqui verifico si el multiplicador es uno o dos si es 1 no entra al if//


     
      numeros *=2
      //si es de la posicion 2 lo multiplica por 2//
      if (numeros > 9){
        // Si el resultado de la multiplicación es mayor a 9, sumar los dígitos del número resultante//
        numeros -= 9;
        //si a la suma le resto y 9 queda lo mismo//
      } 
    }
    multiplicar = multiplicar === 1 ? 2 : 1;
     // Cambiar el multiplicador para alternar entre 1 y 2//
    summa += numeros; 
    // Sumar el dígito actual a la suma total//   
    }
    return suma % 10 === 0;
    // La tarjeta de crédito es válida si la suma total es un múltiplo de 10//
  },
};

maskify: function (input) {
  return input.slice(0, -4).replace(/./g, "#") + input.slice(-4); // maskify
},

export default validator;