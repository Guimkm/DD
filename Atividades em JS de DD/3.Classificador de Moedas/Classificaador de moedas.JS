function classificarMoeda(valor) {
    if (valor === 0.01) {
        return "Um Centavo";
    } else if (valor === 0.05) {
        return "Cinco Centavos";
    } else if (valor === 0.10) {
        return "Dez Centavos";
    } else if (valor === 0.25) {
        return "Vinte e Cinco Centavos";
    } else if (valor === 0.50) {
        return "Cinquenta Centavos";
    } else if (valor === 1.00) {
        return "Um Real";
    } else {
        return "Valor Desconhecido";
    }
}

function classificarMoedaInput() {
    const valorInput = document.getElementById('valorMoeda');
    const valorExibido = document.getElementById('valorExibido');
    const nomeMoeda = document.getElementById('nomeMoeda');
    const resultadoDiv = document.getElementById('resultado');
    
    // Obter e validar o valor
    const valor = parseFloat(valorInput.value);
    
    if (isNaN(valor) || valor < 0) {
        valorExibido.textContent = "Valor Inválido";
        nomeMoeda.textContent = "Digite um número válido";
        resultadoDiv.classList.add('valor-desconhecido');
        return;
    }
    
    // Arredondar para 2 casas decimais para evitar problemas de precisão
    const valorArredondado = Math.round(valor * 100) / 100;
    
    // Chamar a função de classificação
    const classificacao = classificarMoeda(valorArredondado);
    
    // Atualizar a interface
    valorExibido.textContent = `R$ ${valorArredondado.toFixed(2)}`;
    nomeMoeda.textContent = classificacao;
    
    // Aplicar estilo baseado no resultado
    if (classificacao === "Valor Desconhecido") {
        resultadoDiv.classList.add('valor-desconhecido');
    } else {
        resultadoDiv.classList.remove('valor-desconhecido');
    }
}

function preencherValor(valor) {
    document.getElementById('valorMoeda').value = valor;
    classificarMoedaInput();
}

function limparCampos() {
    document.getElementById('valorMoeda').value = '';
    document.getElementById('valorExibido').textContent = '-';
    document.getElementById('nomeMoeda').textContent = 'Selecione um valor';
    document.getElementById('resultado').classList.remove('valor-desconhecido');
}

// Permitir classificar pressionando Enter
document.addEventListener('DOMContentLoaded', function() {
    const inputMoeda = document.getElementById('valorMoeda');
    
    inputMoeda.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            classificarMoedaInput();
        }
    });
    
    // Focar no input quando a página carregar
    inputMoeda.focus();
});

// Função adicional para demonstrar o uso
function demonstrarClassificacao() {
    const valoresTeste = [0.01, 0.05, 0.10, 0.25, 0.50, 1.00, 2.00];
    
    console.log("=== Demonstração da Função classificarMoeda ===");
    valoresTeste.forEach(valor => {
        const resultado = classificarMoeda(valor);
        console.log(`R$ ${valor.toFixed(2)} → "${resultado}"`);
    });
}

// Executar demonstração no console
demonstrarClassificacao();