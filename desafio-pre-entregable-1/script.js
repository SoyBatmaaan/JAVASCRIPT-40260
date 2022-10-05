let Producto = [];
let res = 0;
let costoTotal = 0;
let nombre, precio, cantidad;
let msj = "Gracias por su compra!\n";
let msj2 = "";
let msj3 = "";
let total = 0;
let totalIva = 0;

function crearTicket(){
    alert("Creando ticket!");
    Producto.forEach(z => {
        total += z.precio * z.cantidad;
        totalIva = total * 1.21;
        msj2 += `Producto: ${z.nombre} Valor: $${z.precio} Cantidad: ${z.cantidad}\n`;
    })
    msj3 ="Total: $" + total + " PESOS.. con IVA incluido: $" + totalIva + " PESOS";
    alert(msj + msj2 + msj3);
}

alert("Bienvenido al software de caja!");
alert("¡TODOS LOS PRECIOS INCLUYEN IVA!");

while (res != 2) {
    res = 0;
    nombre = prompt("Ingrese el NOMBRE del producto...");
    precio = Number(prompt("Ingrese VALOR del producto..."));
    cantidad = Number(prompt("Ingrese la CANTIDAD a comprar."));

    Producto.push({nombre: nombre,precio: precio,cantidad: cantidad});

    let a = Number(prompt("Desea agregar otro producto?\n1. SI\n2. NO"));
    switch (a){
        case 1:
            res = 0;
            break;
        case 2:
            res = 2;
            break;
        default:
            alert("Número ingresado incorrecto!.");
            break;
    }
}
crearTicket();

alert("Fin del programa.");
