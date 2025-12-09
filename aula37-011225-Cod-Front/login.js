/* Arquivo: js/login.js */

function login() {
    // 1. Pegar os valores que o usuário digitou
    var usuario = document.getElementById("usuario").value;
    var senha = document.getElementById("senha").value;
    
    // 2. Pegar o elemento onde vamos escrever a mensagem de erro
    var mensagemErro = document.getElementById("msg-erro");

    // 3. Verificar se acertou (Simulação: usuário "admin" e senha "1234")
    if (usuario === "admin" && senha === "1234") {
        
        // Se acertou: Limpa erro e avisa sucesso
        mensagemErro.innerHTML = "";
        alert("Login realizado com sucesso!");
        
        // Redireciona para o catálogo
        window.location.href = "catalogo.html";

    } else {
        // 4. Se ERROU: Escreve a mensagem vermelha no HTML
        mensagemErro.innerHTML = "Senha ou Usuário estão errados!";
        
        // Dica visual: Deixa a borda vermelha
        document.getElementById("usuario").style.borderColor = "red";
        document.getElementById("senha").style.borderColor = "red";
    }
}