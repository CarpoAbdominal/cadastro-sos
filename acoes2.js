document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    // Coleta os valores dos campos
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    if (nome === "" || email === "" || senha === "") {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    // Animação de sucesso
    this.classList.add('submitted');
    alert('Cadastro realizado com sucesso!');
});
