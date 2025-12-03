// pegando o botão do arquivo html
const botao = document.getElementById("btn");

// pegando o 'h2' (subtitulo) do arquivo html
const subtitulo = document.getElementById("subtitulo");

// criando um ação para quando o botão for clicado
botao.addEventListener("click", () => {
    subtitulo.style.color = 'deeppink';
});

// () => significa criar uma função, aula para o futuro do curso