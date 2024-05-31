
function iniciarSeccion() {
    /* 
     administrador - 123
     general - 123
    */
    var usuario = document.getElementById("usuario").value
    var password = document.getElementById("password").value

    if(usuario == "administrador" && password == "123"){
        window.location.href = "menuadministrador.html"
    }else if(usuario == "general" && password == "123"){
        window.location.href = "menugeneral.html"
    }else{
        alert("Usuario o password errado")
        nuevo()
    }
}

function nuevo() {
    var usuario = document.getElementById("usuario")
    var password = document.getElementById("password")

    usuario.value = ""
    password.value = ""
    usuario.focus()

}