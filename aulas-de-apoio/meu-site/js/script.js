const form = document.getElementById('loginForm');

form.addEventListener('submit', function(event){
    event.preventDefault();

    const usuario = document.getElementById('usuario').value;
    const senha = document.getElementById('senha').value;

    if(usuario == '' || senha == ''){
        alert("Não preencheu os campos necessários!")
    }else{
        alert(`Usuário ${usuario} efetuou o login com sucesso!`);
    }
    
});