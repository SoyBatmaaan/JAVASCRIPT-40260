const btnEscanear = document.getElementById("btnEscanear");
const btnCobrar = document.getElementById("btnCobrar");
let precioTotal = 0;
let res = 0;
let cantidad = 0;
let validador;

// Creación del objeto, contiene nombre y precio de cada producto.
class Producto{
    constructor( nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
        }
}

// Array "productos" que contiene muchos objetos "Producto"
const productos = [new Producto ("Tomate 1 kg" , 300),
                  new Producto ("Galletita OREO 100g", 180),
                  new Producto ("Maruchan pollo picante 80g", 200)
];

btnEscanear.addEventListener("click",()=>{
    console.log("Click");
    let visualizarProductos = prompt("Ingrese el codigo de barras del producto...");  
    switch (visualizarProductos) {
        case "1":
            Swal.fire({
                title: 'Leche descremada laserenisima 1 LITRO',
                text: 'Color: sachet verde',
                imageUrl: 'https://ardiaprod.vtexassets.com/arquivos/ids/192082-800-auto?v=637506169580200000&width=800&height=auto&aspect=true',
                imageWidth: 400,
                imageHeight: 200,
              })
            break;
    
        case "2":
            Swal.fire({
                title: 'Tomate Perita 1KG',
                text: 'Color: bolsa red ',
                imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Tomates_pera_2017_A2.jpg',
                imageWidth: 400,
                imageHeight: 200,
              })
            break;

        case "3":
            Swal.fire({
                title: 'Galleta Oreos bañanadas en chocolate',
                text: 'Color: Paquete azul',
                imageUrl: 'https://images.rappi.com.mx/products/978971595-1604126528278.png?d=255x255&e=webp&q=80',
                imageWidth: 400,
                imageHeight: 300,
              })
            break;

        case"4":
            Swal.fire({
            title: 'Maruchan Fideos instantaneos sabor pollo',
            text: 'Color: Paquete naranja',
            imageUrl: 'https://http2.mlstatic.com/D_NQ_NP_905241-MLA49683995005_042022-O.webp',
            imageWidth: 400,
            imageHeight: 300,
          })
            break;

        default:
            Swal.fire({
                icon: 'error',
                title: 'error',
                text: 'Codigo de barras incorrecto/producto no encontrado...',
              })
            break;
    };
});

btnCobrar.addEventListener("click", ()=>{
  while (res != 1) {
  
    validador  = Number(prompt("Escanee/ingrese el 'CODIGO DE BARRA' del producto... \n0 = SALIR"));
    switch (validador){
      case 0:
            res = 1;
            precioTotal = 0;
            cantidad = 0;
            break;
      case 1020301:
            cantidad = Number(prompt("Ingrese cantidad."));
            precioTotal = precioTotal + (productos[0].precio * cantidad);
            cantidad = 0;
            break;
      case 1020302:
            cantidad = Number(prompt("Ingrese cantidad."));
            precioTotal = precioTotal + (productos[1].precio * cantidad);
            cantidad = 0;
            break;
      case 1020303:
            cantidad = Number(prompt("Ingrese cantidad."));
            precioTotal = precioTotal + (productos[2].precio * cantidad);
            cantidad = 0;
            break;
      
      default:
            alert("Número ingresado incorrecto!.");
            break;
    }
    
    if(res == 0){
      let resSwitch = Number(prompt("Desea agregar otro producto?\n1. SI\n2. NO"));
      switch (resSwitch){
          case 1:
              res = 0;
              break;
          case 2:
              res = 1;
              break;
          default:
              alert("Número ingresado incorrecto!.");
              break;
      }
    }
  }


  if(precioTotal != 0){
    precioTotal = precioTotal * 1.21;
    alert("Creando Ticket!");
    alert("Precio total: $" + precioTotal + "\n" +"IVA INCLUIDO!!!");
  }
});






