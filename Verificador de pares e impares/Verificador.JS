// JavaScript - Explicação detalhada

// Aguarda o DOM (Document Object Model) ser completamente carregado
document.addEventListener('DOMContentLoaded', function() {
    
    // Obtém referências aos elementos do DOM pelos seus IDs
    const numberInput = document.getElementById('numberInput');
    const verifyBtn = document.getElementById('verifyBtn');
    const resultDiv = document.getElementById('result');
    const numberValueSpan = document.getElementById('numberValue');
    const parityResultSpan = document.getElementById('parityResult');
    
    // Adiciona um event listener para o clique no botão
    verifyBtn.addEventListener('click', function() {
        
        // Obtém o valor do input e converte para número
        const number = parseFloat(numberInput.value);
        
        // Validação do input
        if (isNaN(number)) {
            alert('Por favor, digite um número válido!');
            return; // Para a execução da função se for inválido
        }
        
        // Verifica se é um número inteiro
        if (!Number.isInteger(number)) {
            alert('Por favor, digite um número inteiro!');
            return; // Para a execução da função se não for inteiro
        }
        
        // Atualiza o span com o número digitado
        numberValueSpan.textContent = number;
        
        // Verifica se o número é par ou ímpar usando o operador módulo (%)
        // O operador módulo retorna o resto da divisão
        // Se o resto da divisão por 2 for 0, o número é par
        // Se o resto for 1, o número é ímpar
        if (number % 2 === 0) {
            parityResultSpan.textContent = 'PAR';
            parityResultSpan.className = 'result-value par'; // Aplica classe par (verde)
        } else {
            parityResultSpan.textContent = 'ÍMPAR';
            parityResultSpan.className = 'result-value impar'; // Aplica classe ímpar (vermelho)
        }
        
        // Adiciona a classe 'show' para exibir o resultado com animação
        resultDiv.classList.add('show');
    });
    
    // Adiciona funcionalidade de pressionar Enter no input
    numberInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            verifyBtn.click(); // Simula o clique no botão quando Enter é pressionado
        }
    });
    
    // Foca automaticamente no campo de input quando a página carrega
    numberInput.focus();
});