function formatarTelefone(numero) {
    // Usando slice para dividir a string
    const parte1 = numero.slice(0, 4);
    const parte2 = numero.slice(4, 8);
    return parte1 + "-" + parte2;
}

function formatarTelefoneInput() {
    const telefoneInput = document.getElementById('telefone');
    const resultadoDiv = document.getElementById('resultado');
    const resultIcon = document.getElementById('resultIcon');
    const resultTitle = document.getElementById('resultTitle');
    const resultMessage = document.getElementById('resultMessage');
    const resultTelefone = document.getElementById('resultTelefone');

    const numero = telefoneInput.value.trim();

    // Validar a entrada
    if (!numero) {
        resultadoDiv.className = 'resultado error';
        resultIcon.textContent = '!';
        resultTitle.textContent = 'Campo Vazio';
        resultMessage.textContent = 'Por favor, digite um número de telefone';
        resultTelefone.textContent = '';
        return;
    }

    // Validar se tem exatamente 8 dígitos e apenas números
    if (!/^\d{8}$/.test(numero)) {
        resultadoDiv.className = 'resultado error';
        resultIcon.textContent = '!';
        resultTitle.textContent = 'Número Inválido';
        resultMessage.textContent = 'O número deve ter exatamente 8 dígitos (apenas números)';
        resultTelefone.textContent = '';
        return;
    }

    // Chamar a função de formatação
    const telefoneFormatado = formatarTelefone(numero);
    
    // Atualizar a interface com o resultado
    resultadoDiv.className = 'resultado success';
    resultIcon.textContent = 'F';
    resultTitle.textContent = 'Telefone Formatado';
    resultMessage.textContent = 'Número original: ' + numero;
    resultTelefone.textContent = telefoneFormatado;
}

function limparCampos() {
    document.getElementById('telefone').value = '';
    
    // Resetar resultado
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.className = 'resultado';
    document.getElementById('resultIcon').textContent = '';
    document.getElementById('resultTitle').textContent = 'Aguardando formatação';
    document.getElementById('resultMessage').textContent = 'Digite um número de 8 dígitos';
    document.getElementById('resultTelefone').textContent = '';
}

// Event listeners para os exemplos
document.addEventListener('DOMContentLoaded', function() {
    const exampleItems = document.querySelectorAll('.example-item');
    
    exampleItems.forEach(item => {
        item.addEventListener('click', function() {
            const telefone = this.getAttribute('data-telefone');
            document.getElementById('telefone').value = telefone;
            formatarTelefoneInput();
        });
    });
    
    // Formatação automática durante a digitação
    const telefoneInput = document.getElementById('telefone');
    
    telefoneInput.addEventListener('input', function() {
        // Permite apenas números e limita a 8 dígitos
        this.value = this.value.replace(/\D/g, '').slice(0, 8);
    });
    
    // Permitir formatar pressionando Enter
    telefoneInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            formatarTelefoneInput();
        }
    });
    
    // Focar no input quando a página carregar
    telefoneInput.focus();
});

// Função de demonstração
function demonstrarFuncao() {
    console.log("=== Demonstração da Função formatarTelefone ===");
    
    const testes = [
        "99887766",
        "12345678", 
        "55554444",
        "98765432",
        "11112222"
    ];
    
    testes.forEach(numero => {
        const resultado = formatarTelefone(numero);
        console.log(`"${numero}" → "${resultado}"`);
    });
}

// Executar demonstração no console
demonstrarFuncao();