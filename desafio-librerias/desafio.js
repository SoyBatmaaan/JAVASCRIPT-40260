let validarBtn = document.getElementById("validarBtn");
let code = "1094";

console.log("1094");

Swal.fire({
    title: 'ATENCIÓN🕵️‍♂️',
    text: 'Ingrese el codigo secreto',
    icon: 'info',
    showCloseButton: true,
    showCancelButton: false,
});

validarBtn.addEventListener("click",()=>{
    let aCodigo = "";

    aCodigo = document.getElementById("txtCodigo").value;

    
    if(aCodigo == code){
        Swal.fire({
            title: 'CODIGO CORRECTO! 🥳',
            icon: 'success',
            showCloseButton: true,
            showCancelButton: false,
        });
    }else{
        Swal.fire({
            title: "💀 IMPOSTOR 💀",
            text: "🤬 CODIGO INCORRECTO! Pista: F12🤬",
            icon: "error",
            showCloseButton: false,
            showCancelButton: false,
            showConfirmButton: false,
          });
    }
})