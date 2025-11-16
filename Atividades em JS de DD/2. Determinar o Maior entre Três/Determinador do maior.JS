function encontrarMaiorEntreTres(a, b, c) {
    if (a > b && a > c) {
        return { maior: a, posicao: "primeiro" };
    } else if (b > a && b > c) {
        return { maior: b, posicao: "segundo" };
    } else if (c > a && c > b) {
        return { maior: c, posicao: "terceiro" };
    } else {
        // Caso haja números iguais
        if (a === b && b === c) {
            return { maior: a, posicao: "todos", igual: true };
        } else if (a === b && a > c) {
            return { maior: a, posicao: "primeiro e segundo", igual: true };
        } else if (a === c && a > b) {
            return { maior: a, posicao: "primeiro e terceiro", igual: true };
        } else if (b === c && b > a) {
            return { maior: b, posicao: "segundo e terceiro", igual: true };
        }
    }
}

function verificarMaior() {
    // Pegar os valores dos inputs
    const num1 = parseFloat(document.getElementById('numero1').value);
    const num2 = parseFloat(document.getElementById('numero2').value);
    const num3 = parseFloat(document.getElementById('numero3').value);
    const resultadoDiv = document.getElementById('resultado');
    
    // Validar se todos os campos foram preenchidos
    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        resultadoDiv.textContent = "Por favor, preencha todos os campos com números válidos!";
        resultadoDiv.className = "resultado erro";
        return;
    }
    
    // Chamar a função para encontrar o maior número
    const resultado = encontrarMaiorEntreTres(num1, num2, num3);
    
    // Mostrar o resultado
    if (resultado.igual) {
        if (resultado.posicao === "todos") {
            resultadoDiv.innerHTML = `Todos os números são iguais: <span class="numero-destaque">${resultado.maior}</span>`;
        } else {
            resultadoDiv.innerHTML = `Os números ${resultado.posicao} são os maiores: <span class="numero-destaque">${resultado.maior}</span>`;
        }
        resultadoDiv.className = "resultado info";
    } else {
        resultadoDiv.innerHTML = `O maior número é o <span class="numero-destaque">${resultado.posicao}</span>: <span class="numero-destaque">${resultado.maior}</span>`;
        resultadoDiv.className = "resultado sucesso";
    }
}

function limparCampos() {
    // Limpar os campos de input
    document.getElementById('numero1').value = '';
    document.getElementById('numero2').value = '';
    document.getElementById('numero3').value = '';
    
    // Limpar o resultado
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.textContent = '';
    resultadoDiv.className = 'resultado';
    resultadoDiv.style.display = 'none';
}

// Permitir verificar pressionando Enter em qualquer campo
document.addEventListener('DOMContentLoaded', function() {
    const inputs = document.querySelectorAll('input[type="number"]');
    
    inputs.forEach(input => {
        input.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                verificarMaior();
            }
        });
    });
});