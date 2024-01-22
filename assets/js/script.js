const checkbox = document.getElementById("remember");
const checker = document.getElementById("checkbox-checker");

const clickHere = document.querySelector("p.forgot-password span");
const popup = document.querySelector("div#pop-up");
const close = document.querySelector("div#pop-up i");

const usuario = document.querySelector("input#email");
const senha = document.querySelector("input#password");

//Interação que marca o check box se existir dados salvos do user
window.addEventListener("load", function () {
    console.log("tela login carregou");

    const dadosUsuario = localStorage.getItem("dadosUsuario");
    console.log("dados do user");

    if (dadosUsuario != null) {
        checkbox.checked = true;
        checker.classList.remove("no-checked");

        const dadosRecuperados = localStorage.getItem("dadosUsuario");
        const dadosConvertidos = JSON.parse(dadosRecuperados);

        usuario.value = dadosConvertidos.usuario;
        senha.value = dadosConvertidos.senha;
    }
});

// Interação que preenche o chkBox personalizado
checkbox.addEventListener("click", function () {
    console.log("Status do checkbox:", checkbox.checked);

    if (checkbox.checked) {
        checker.classList.remove("no-checked");
        lembrarUsuarioSenha(usuario.value, senha.value);
    } else {
        checker.classList.add("no-checked");
        esquecerUsuarioSenha();
    }
});

// Interação que fecha o pop-up de "esqueci a senha"
clickHere.addEventListener("click", function () {
    console.log("Esqueceu a senha");

    popup.classList.remove("closed");
});

// Interação que abre o pop-up de "esqueci a senha"
close.addEventListener("click", function () {
    popup.classList.add("closed");
});

//interação que lembra os dados dos user  para serem lembrados
function lembrarUsuarioSenha(usuario, senha) {
    const credencias = {
        usuario: usuario,
        senha: senha,
    };

    const credenciasConvertidas = JSON.stringify(credencias);

    localStorage.setItem("dadosUsuario", credenciasConvertidas);
}

//interação que esquece os dados dos user que foram lembrados
function esquecerUsuarioSenha() {
    localStorage.removeItem("dadosUsuario");

    usuario.value = "";
    senha.value = "";
}

//clicar em send faz button e input sumir
const send = document.querySelector("div.pop-up-email-container button");
const inputEmail = document.querySelector("div.pop-up-email-container input");
const message = document.querySelector("div.pop-up p");

send.addEventListener("click", function () {
    inputEmail.classList.add("closed");
    send.classList.add("closed");
    message.textContent = "Recover password e-mail send! Check your box mail!";

});
