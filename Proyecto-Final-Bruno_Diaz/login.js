let btnIngresar = document.getElementById("btnIngresar");

function validarCredeciales(pCorreo, pContraseña){
    let listaUsuarios = obternetListaUsuarios();
    let bAccesso = false;

    for(i = 0; i< listaUsuarios.length; i++){
        if(pCorreo == listaUsuarios[i] [3] && pContraseña == listaUsuarios [i][4]){
            bAccesso = true;
            sessionStorage.setItem("usuarioActivo", listaUsuarios[i][1] + "" + listaUsuarios[i][2]);
            sessionStorage.setItem("rolUsuarioActivo", listaUsuarios[i][6]);
        }
    }
    return bAccesso;
}

function obternetListaUsuarios(){
    let listaUsuarios = JSON.parse(localStorage.getItem("listaUsuariosLS"));

    if(listaUsuarios ==null){
        listaUsuarios =
        [   // Cuentas de los empleados del supermercado.
            ["1","Bruno","Diaz","bruno.diaz1011@gmail.com","batiuwu","2000-04-10","1"],
            ["2","Diego","Diaz","diazdiego@gmail.com","chispita","2000-05-11","2"],
        ]
    }
    return listaUsuarios;
}

function ingresar(){
    let rol = sessionStorage.getItem("rolUsuarioActivo");
    switch (rol) {
        case "1":
            location.href = "super_app.html";
            break;
        case "2":
            location.href = "super_app.html";
            break;
        default:
            break;
    }
}

btnIngresar.addEventListener("click",()=>{
    let sCorreo ="";
    let sContrasenna ="";
    let bAccesso = false;

    sCorreo = document.getElementById("txtCorreo").value;
    sContrasenna = document.getElementById("txtContrasenna").value;

    bAccesso = validarCredeciales(sCorreo,sContrasenna);
    
    if(bAccesso == true){
        ingresar();
        console.log("credenciales correctas!");
    }
    else{
        console.log("Error");
        Swal.fire({
            title: "ERROR",
            text: "Contraseña/Email Incorrecto!",
            icon: "error",
            confirmButtonText: " Aceptar ",
          });
    }
})