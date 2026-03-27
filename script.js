function logar() {
    let usuario = document.getElementById('inputUsuario').value 
    let senha = document.getElementById('inputSenha').value

    if(usuario == "micael" && senha == "micael123") {
        window.location.href = "home.html"
    } else {
        Swal.fire({
        title: "Acesso Negado!",
        text: "Usuário/Senha incorretos! Tente novamente!",
        icon: "error"
        }); 
    }
}