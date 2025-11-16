function gerarNomeCompleto(pessoa) {
    return pessoa.primeiroNome + " " + pessoa.sobrenome;
}

function gerarNome() {
    const primeiroNome = document.getElementById('primeiroNome').value.trim();
    const sobrenome = document.getElementById('sobrenome').value.trim();
    
    const resultadoDiv = document.getElementById('resultado');
    const resultIcon = document.getElementById('resultIcon');
    const resultTitle = document.getElementById('resultTitle');
    const resultMessage = document.getElementById('resultMessage');
    const resultFullname = document.getElementById('resultFullname');

    // Validar as entradas
    if (!primeiroNome || !sobrenome) {
        resultadoDiv.className = 'resultado error';
        resultIcon.textContent = '!';
        resultTitle.textContent = 'Dados Incompletos';
        resultMessage.textContent = 'Por favor, preencha ambos os campos';
        resultFullname.textContent = '';
        return;
    }

    // Criar objeto pessoa
    const pessoa = {
        primeiroNome: primeiroNome,
        sobrenome: sobrenome
    };

    // Chamar a função de geração do nome completo
    const nomeCompleto = gerarNomeCompleto(pessoa);
    
    // Atualizar a interface com o resultado
    resultadoDiv.className = 'resultado success';
    resultIcon.textContent = '✓';
    resultTitle.textContent = 'Nome Completo Gerado';
    resultMessage.textContent = 'Primeiro nome + Sobrenome =';
    resultFullname.textContent = nomeCompleto;
}

function limparCampos() {
    document.getElementById('primeiroNome').value = '';
    document.getElementById('sobrenome').value = '';
    
    // Resetar resultado
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.className = 'resultado';
    document.getElementById('resultIcon').textContent = '';
    document.getElementById('resultTitle').textContent = 'Aguardando geração';
    document.getElementById('resultMessage').textContent = 'Digite o primeiro nome e sobrenome';
    document.getElementById('resultFullname').textContent = '';
}

// Event listeners para os exemplos
document.addEventListener('DOMContentLoaded', function() {
    const exampleItems = document.querySelectorAll('.example-item');
    
    exampleItems.forEach(item => {
        item.addEventListener('click', function() {
            const nome = this.getAttribute('data-nome');
            const sobrenome = this.getAttribute('data-sobrenome');
            document.getElementById('primeiroNome').value = nome;
            document.getElementById('sobrenome').value = sobrenome;
            gerarNome();
        });
    });
    
    // Permitir gerar pressionando Enter em qualquer campo
    const inputs = document.querySelectorAll('input[type="text"]');
    
    inputs.forEach(input => {
        input.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                gerarNome();
            }
        });
    });
    
    // Focar no primeiro input quando a página carregar
    document.getElementById('primeiroNome').focus();
});

// Função de demonstração
function demonstrarFuncao() {
    console.log("=== Demonstração da Função gerarNomeCompleto ===");
    
    const testes = [
        { primeiroNome: "Ana", sobrenome: "Silva" },
        { primeiroNome: "João", sobrenome: "Santos" },
        { primeiroNome: "Maria", sobrenome: "Oliveira" },
        { primeiroNome: "Carlos", sobrenome: "Pereira" },
        { primeiroNome: "Pedro", sobrenome: "Almeida" }
    ];
    
    testes.forEach(pessoa => {
        const resultado = gerarNomeCompleto(pessoa);
        console.log(`{ primeiroNome: "${pessoa.primeiroNome}", sobrenome: "${pessoa.sobrenome}" } → "${resultado}"`);
    });
}

// Executar demonstração no console
demonstrarFuncao();