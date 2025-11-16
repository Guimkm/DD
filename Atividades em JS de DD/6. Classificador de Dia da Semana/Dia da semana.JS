function nomeDoDia(numero) {
    switch (numero) {
        case 1:
            return "Domingo";
        case 2:
            return "Segunda";
        case 3:
            return "Terça";
        case 4:
            return "Quarta";
        case 5:
            return "Quinta";
        case 6:
            return "Sexta";
        case 7:
            return "Sábado";
        default:
            return "Número inválido";
    }
}

function verificarDia() {
    const numeroInput = document.getElementById('numeroDia');
    const resultadoDiv = document.getElementById('resultado');
    const resultIcon = document.getElementById('resultIcon');
    const resultTitle = document.getElementById('resultTitle');
    const resultMessage = document.getElementById('resultMessage');
    
    // Obter e validar o número
    const numero = parseInt(numeroInput.value);
    
    if (isNaN(numero) || numero < 1 || numero > 7) {
        resultadoDiv.className = 'resultado error';
        resultIcon.textContent = '!';
        resultTitle.textContent = 'Número Inválido';
        resultMessage.textContent = 'Por favor, digite um número entre 1 e 7';
        return;
    }
    
    // Chamar a função de classificação
    const nomeDia = nomeDoDia(numero);
    
    // Atualizar a interface com o resultado
    resultadoDiv.className = 'resultado success';
    resultIcon.textContent = numero;
    resultTitle.textContent = nomeDia;
    resultMessage.textContent = `O número ${numero} corresponde a ${nomeDia}`;
    
    // Atualizar seleção visual na grade
    atualizarSelecaoDia(numero);
}

function atualizarSelecaoDia(numero) {
    // Remover classe active de todos os itens
    const dayItems = document.querySelectorAll('.day-item');
    dayItems.forEach(item => {
        item.classList.remove('active');
    });
    
    // Adicionar classe active ao item correspondente
    const selectedItem = document.querySelector(`.day-item[data-day="${numero}"]`);
    if (selectedItem) {
        selectedItem.classList.add('active');
    }
}

function limparCampos() {
    document.getElementById('numeroDia').value = '';
    
    // Remover seleção visual
    const dayItems = document.querySelectorAll('.day-item');
    dayItems.forEach(item => {
        item.classList.remove('active');
    });
    
    // Resetar resultado
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.className = 'resultado';
    document.getElementById('resultIcon').textContent = '';
    document.getElementById('resultTitle').textContent = 'Aguardando verificação';
    document.getElementById('resultMessage').textContent = 'Digite um número ou clique em um dia';
}

// Event listeners para os itens da grade de dias
document.addEventListener('DOMContentLoaded', function() {
    const dayItems = document.querySelectorAll('.day-item');
    
    dayItems.forEach(item => {
        item.addEventListener('click', function() {
            const numeroDia = this.getAttribute('data-day');
            document.getElementById('numeroDia').value = numeroDia;
            verificarDia();
        });
    });
    
    // Permitir verificar pressionando Enter
    const numeroInput = document.getElementById('numeroDia');
    
    numeroInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            verificarDia();
        }
    });
    
    // Focar no input quando a página carregar
    numeroInput.focus();
});

// Função de demonstração
function demonstrarFuncao() {
    console.log("=== Demonstração da Função nomeDoDia ===");
    
    for (let i = 1; i <= 8; i++) {
        const resultado = nomeDoDia(i);
        console.log(`${i} → "${resultado}"`);
    }
}

// Executar demonstração no console
demonstrarFuncao();