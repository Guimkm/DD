// JavaScript - Explicação detalhada

// Aguarda o DOM ser completamente carregado antes de executar o código
document.addEventListener('DOMContentLoaded', function() {
    
    // Obtém referências aos elementos do DOM
    const birthYearInput = document.getElementById('birthYear');
    const calculateBtn = document.getElementById('calculateBtn');
    const resultDiv = document.getElementById('result');
    const ageValueSpan = document.getElementById('ageValue');

    // Adiciona um event listener para o clique no botão
    calculateBtn.addEventListener('click', function() {
        
        // Obtém o valor do input e converte para número
        const birthYear = parseInt(birthYearInput.value);
        
        // Obtém o ano atual
        const currentYear = new Date().getFullYear();
        
        // Validação do input
        if (isNaN(birthYear)) {
            alert('Por favor, digite um ano válido!');
            return; // Para a execução da função
        }
        
        if (birthYear > currentYear) {
            alert('O ano de nascimento não pode ser maior que o ano atual!');
            return; // Para a execução da função
        }
        
        if (birthYear < 1900) {
            alert('Por favor, digite um ano a partir de 1900!');
            return; // Para a execução da função
        }

        // Calcula a idade
        const age = currentYear - birthYear;
        
        // Atualiza o conteúdo do span com a idade calculada
        ageValueSpan.textContent = age;
        
        // Remove a classe 'hidden' para mostrar o resultado
        resultDiv.classList.remove('hidden');
    });

    // Adiciona funcionalidade de pressionar Enter no input
    birthYearInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            calculateBtn.click(); // Simula o clique no botão
        }
    });
});