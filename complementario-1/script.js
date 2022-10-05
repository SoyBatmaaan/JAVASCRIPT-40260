let num = Number(prompt("Ingresar un número."));
let num2;
let salida;

alert("El número ingresado es = " + num);

for (let i = 0; i < 3; i++) {
    num2 = prompt ("Ingresar número a sumar.");
    salida = parseInt(num) + parseInt(num2);
    alert("El resultado de la suma es de: " + salida);
}

alert("Fin del programa.");