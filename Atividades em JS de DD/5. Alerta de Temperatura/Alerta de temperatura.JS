function checarTemperatura(temperatura) {
    if (temperatura < 10) {
        return "Alerta de Frio";
    } else if (temperatura >= 10 && temperatura <= 25) {
        return "Temperatura Ideal";
    } else {
        return "Alerta de Calor";
    }
}

function verificarTemperatura() {
    const tempInput = document.getElementById('temperatura');
    const resultadoDiv = document.getElementById('resultado');
    const resultIcon = document.getElementById('resultIcon');
    const resultTitle = document.getElementById('resultTitle');
    const resultMessage = document.getElementById('resultMessage');
    
    // Obter e validar a temperatura
    const temperatura = parseFloat(tempInput.value);
    
    if (isNaN(temperatura)) {
        resultIcon.textContent = '?';
        resultTitle.textContent = 'Valor Inválido';
        resultMessage.textContent = 'Por favor, digite uma temperatura válida';
        resultadoDiv.className = 'resultado';
        return;
    }
    
    // Chamar a função de verificação
    const alerta = checarTemperatura(temperatura);
    
    // Atualizar a interface com o resultado
    resultadoDiv.className = 'resultado';
    resultTitle.textContent = alerta;
    resultMessage.textContent = `Temperatura: ${temperatura}°C`;
    
    // Aplicar estilo baseado no resultado
    if (alerta === "Alerta de Frio") {
        resultadoDiv.classList.add('cold');
        resultIcon.textContent = 'F';
    } else if (alerta === "Temperatura Ideal") {
        resultadoDiv.classList.add('ideal');
        resultIcon.textContent = 'I';
    } else if (alerta === "Alerta de Calor") {
        resultadoDiv.classList.add('hot');
        resultIcon.textContent = 'C';
    }
}

function limparCampos() {
    document.getElementById('temperatura').value = '';
    
    // Resetar resultado
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.className = 'resultado';
    document.getElementById('resultIcon').textContent = '';
    document.getElementById('resultTitle').textContent = 'Aguardando verificação';
    document.getElementById('resultMessage').textContent = 'Digite uma temperatura para verificar';
}

// Event listeners para os itens da escala de temperatura
document.addEventListener('DOMContentLoaded', function() {
    const scaleItems = document.querySelectorAll('.scale-item');
    
    scaleItems.forEach(item => {
        item.addEventListener('click', function() {
            const temperatura = this.getAttribute('data-temp');
            document.getElementById('temperatura').value = temperatura;
            verificarTemperatura();
        });
    });
    
    // Permitir verificar pressionando Enter
    const tempInput = document.getElementById('temperatura');
    
    tempInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            verificarTemperatura();
        }
    });
    
    // Focar no input quando a página carregar
    tempInput.focus();
});

// Função de demonstração
function demonstrarFuncao() {
    console.log("=== Demonstração da Função checarTemperatura ===");
    
    const testes = [
        5,   // Alerta de Frio
        10,  // Temperatura Ideal
        18,  // Temperatura Ideal
        25,  // Temperatura Ideal
        30,  // Alerta de Calor
        -5,  // Alerta de Frio
        35   // Alerta de Calor
    ];
    
    testes.forEach(temp => {
        const resultado = checarTemperatura(temp);
        console.log(`${temp}°C → "${resultado}"`);
    });
}

// Executar demonstração no console
demonstrarFuncao();