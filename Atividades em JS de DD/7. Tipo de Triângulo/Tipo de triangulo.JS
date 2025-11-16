function tipoTriangulo(L1, L2, L3) {
    // Verificar se é equilátero (todos os lados iguais)
    if (L1 == L2 && L2 == L3) {
        return "Equilátero";
    }
    // Verificar se é isósceles (dois lados iguais)
    else if (L1 == L2 || L1 == L3 || L2 == L3) {
        return "Isósceles";
    }
    // Caso contrário, é escaleno (todos diferentes)
    else {
        return "Escaleno";
    }
}

function verificarTriangulo() {
    const lado1 = parseFloat(document.getElementById('lado1').value);
    const lado2 = parseFloat(document.getElementById('lado2').value);
    const lado3 = parseFloat(document.getElementById('lado3').value);
    
    const resultadoDiv = document.getElementById('resultado');
    const resultTitle = document.getElementById('resultTitle');
    const resultMessage = document.getElementById('resultMessage');
    const resultSides = document.getElementById('resultSides');
    const resultShape = document.querySelector('.triangle');

    // Validar as entradas
    if (isNaN(lado1) || isNaN(lado2) || isNaN(lado3) || 
        lado1 <= 0 || lado2 <= 0 || lado3 <= 0) {
        resultadoDiv.className = 'resultado error';
        resultTitle.textContent = 'Dados Inválidos';
        resultMessage.textContent = 'Por favor, digite valores válidos para todos os lados (maiores que zero)';
        resultSides.textContent = '';
        return;
    }

    // Verificar se os lados formam um triângulo válido
    if (!formaTrianguloValido(lado1, lado2, lado3)) {
        resultadoDiv.className = 'resultado error';
        resultTitle.textContent = 'Triângulo Inválido';
        resultMessage.textContent = 'Estes lados não formam um triângulo válido';
        resultSides.textContent = `Lados: ${lado1}, ${lado2}, ${lado3}`;
        return;
    }

    // Chamar a função de classificação
    const tipo = tipoTriangulo(lado1, lado2, lado3);
    
    // Atualizar a interface com o resultado
    resultadoDiv.className = `resultado ${tipo.toLowerCase()}`;
    resultTitle.textContent = tipo;
    resultMessage.textContent = getDescricaoTipo(tipo);
    resultSides.textContent = `Lados: L1 = ${lado1}, L2 = ${lado2}, L3 = ${lado3}`;
    
    // Ajustar a forma do triângulo baseado no tipo
    ajustarFormaTriangulo(tipo, resultShape);
}

function formaTrianguloValido(a, b, c) {
    // Verifica a desigualdade triangular
    return (a + b > c) && (a + c > b) && (b + c > a);
}

function getDescricaoTipo(tipo) {
    switch(tipo) {
        case "Equilátero":
            return "Todos os três lados são iguais";
        case "Isósceles":
            return "Dois lados são iguais";
        case "Escaleno":
            return "Todos os lados são diferentes";
        default:
            return "";
    }
}

function ajustarFormaTriangulo(tipo, element) {
    // Reset para estilo base
    element.style.borderLeft = '40px solid transparent';
    element.style.borderRight = '40px solid transparent';
    element.style.borderBottom = '70px solid';
    
    switch(tipo) {
        case "Equilátero":
            element.style.borderLeft = '40px solid transparent';
            element.style.borderRight = '40px solid transparent';
            break;
        case "Isósceles":
            element.style.borderLeft = '30px solid transparent';
            element.style.borderRight = '50px solid transparent';
            break;
        case "Escaleno":
            element.style.borderLeft = '25px solid transparent';
            element.style.borderRight = '55px solid transparent';
            break;
    }
}

function limparCampos() {
    document.getElementById('lado1').value = '';
    document.getElementById('lado2').value = '';
    document.getElementById('lado3').value = '';
    
    // Resetar resultado
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.className = 'resultado';
    document.getElementById('resultTitle').textContent = 'Aguardando verificação';
    document.getElementById('resultMessage').textContent = 'Digite os comprimentos dos três lados';
    document.getElementById('resultSides').textContent = '';
    
    // Resetar forma do triângulo
    const triangle = document.querySelector('.triangle');
    triangle.style.borderLeft = '40px solid transparent';
    triangle.style.borderRight = '40px solid transparent';
    triangle.style.borderBottom = '70px solid #667eea';
}

// Event listeners para os exemplos
document.addEventListener('DOMContentLoaded', function() {
    const exampleItems = document.querySelectorAll('.example-item');
    
    exampleItems.forEach(item => {
        item.addEventListener('click', function() {
            const lados = this.getAttribute('data-lados').split(',');
            document.getElementById('lado1').value = lados[0];
            document.getElementById('lado2').value = lados[1];
            document.getElementById('lado3').value = lados[2];
            verificarTriangulo();
        });
    });
    
    // Permitir verificar pressionando Enter em qualquer campo
    const inputs = document.querySelectorAll('input[type="number"]');
    
    inputs.forEach(input => {
        input.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                verificarTriangulo();
            }
        });
    });
    
    // Focar no primeiro input quando a página carregar
    document.getElementById('lado1').focus();
});

// Função de demonstração
function demonstrarFuncao() {
    console.log("=== Demonstração da Função tipoTriangulo ===");
    
    const testes = [
        [5, 5, 5],    // Equilátero
        [5, 5, 3],    // Isósceles
        [5, 3, 5],    // Isósceles
        [3, 5, 5],    // Isósceles
        [3, 4, 5],    // Escaleno
        [7, 8, 9]     // Escaleno
    ];
    
    testes.forEach(([a, b, c]) => {
        const resultado = tipoTriangulo(a, b, c);
        console.log(`Lados: ${a}, ${b}, ${c} → "${resultado}"`);
    });
}

// Executar demonstração no console
demonstrarFuncao();