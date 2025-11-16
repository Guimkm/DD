function calcularMediaSimples(N1, N2) {
    const media = (N1 + N2) / 2;
    
    if (media >= 7) {
        return "Aprovado";
    } else {
        return "Reprovado";
    }
}

function calcularMedia() {
    const nota1 = parseFloat(document.getElementById('nota1').value);
    const nota2 = parseFloat(document.getElementById('nota2').value);
    
    const resultadoDiv = document.getElementById('resultado');
    const resultIcon = document.getElementById('resultIcon');
    const resultTitle = document.getElementById('resultTitle');
    const resultMessage = document.getElementById('resultMessage');
    const resultDetails = document.getElementById('resultDetails');

    // Validar as entradas
    if (isNaN(nota1) || isNaN(nota2) || nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10) {
        resultadoDiv.className = 'resultado';
        resultIcon.textContent = '!';
        resultTitle.textContent = 'Dados Inválidos';
        resultMessage.textContent = 'Por favor, digite notas válidas entre 0 e 10';
        resultDetails.textContent = '';
        return;
    }

    // Calcular a média
    const media = (nota1 + nota2) / 2;
    
    // Chamar a função de verificação
    const situacao = calcularMediaSimples(nota1, nota2);
    
    // Atualizar a interface com o resultado
    resultadoDiv.className = `resultado ${situacao.toLowerCase()}`;
    resultIcon.textContent = situacao === 'Aprovado' ? 'A' : 'R';
    resultTitle.textContent = situacao;
    resultMessage.textContent = `Média final: ${media.toFixed(1)}`;
    resultDetails.textContent = `Cálculo: (${nota1.toFixed(1)} + ${nota2.toFixed(1)}) ÷ 2 = ${media.toFixed(1)}`;
}

function limparCampos() {
    document.getElementById('nota1').value = '';
    document.getElementById('nota2').value = '';
    
    // Resetar resultado
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.className = 'resultado';
    document.getElementById('resultIcon').textContent = '';
    document.getElementById('resultTitle').textContent = 'Aguardando cálculo';
    document.getElementById('resultMessage').textContent = 'Digite as duas notas para calcular a média';
    document.getElementById('resultDetails').textContent = '';
}

// Event listeners para os exemplos
document.addEventListener('DOMContentLoaded', function() {
    const exampleItems = document.querySelectorAll('.example-item');
    
    exampleItems.forEach(item => {
        item.addEventListener('click', function() {
            const nota1 = this.getAttribute('data-nota1');
            const nota2 = this.getAttribute('data-nota2');
            document.getElementById('nota1').value = nota1;
            document.getElementById('nota2').value = nota2;
            calcularMedia();
        });
    });
    
    // Permitir calcular pressionando Enter em qualquer campo
    const inputs = document.querySelectorAll('input[type="number"]');
    
    inputs.forEach(input => {
        input.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                calcularMedia();
            }
        });
    });
    
    // Focar no primeiro input quando a página carregar
    document.getElementById('nota1').focus();
});

// Função de demonstração
function demonstrarFuncao() {
    console.log("=== Demonstração da Função calcularMediaSimples ===");
    
    const testes = [
        [6.0, 5.0],  // Reprovado
        [7.0, 7.0],  // Aprovado
        [8.5, 9.0],  // Aprovado
        [5.0, 8.0],  // Reprovado
        [6.5, 7.5],  // Aprovado
        [4.0, 5.0]   // Reprovado
    ];
    
    testes.forEach(([n1, n2]) => {
        const resultado = calcularMediaSimples(n1, n2);
        const media = (n1 + n2) / 2;
        console.log(`Notas: ${n1}, ${n2} → Média: ${media.toFixed(1)} → "${resultado}"`);
    });
}

// Executar demonstração no console
demonstrarFuncao();