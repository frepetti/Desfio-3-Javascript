//Hacer una calculadora
//Solicitar 2 valores del tipo Number mediante un prompt
//Solicitar una operacion a realizar (suma, restra, multiplicar, dividir).
//Utilizando estos 3 parametros realizar una funcion o mas para efectuar los calculos correspondientes segun indique nuestro prompt de Operacion.
//Mostrar en consola el resultado de la operacion.

var num1 = parseInt(prompt("Por favor ingrese un numero"));
var num2 = parseInt(prompt("Por favor ingrese un numero"));
var operador = prompt ("Por favor ingrese la operacion a realizar (suma, resta, division, multiplicacion)");

function validarNum(op1, op2, oper){
   
    if (isNaN(op1) || isNaN(op2)) {
        alert("Los numeros ingresados no son validos");
    }   else{
        return calcularNum(op1,op2,oper);
        
    }

}

function calcularNum(op1, op2, oper){

    var resultado;
    switch (oper) {
        case "suma":
            resultado=num1+num2;
            break;
        case "resta":
                resultado=num1-num2;
            break;
        case "division":
                resultado=num1/num2;
            break;
        case "multiplicacion":
                resultado=num1*num2;
            break;
        default: alert("El operador ingresado no es valido")
            break;
    }
    return resultado;
}


resultado = validarNum(num1, num2, operador);

console.log("El resultado es " + resultado);