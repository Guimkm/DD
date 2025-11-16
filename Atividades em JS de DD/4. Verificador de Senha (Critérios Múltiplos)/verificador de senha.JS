function senhaForte(senha) {
    // Verificar se a senha tem mais de 8 caracteres E é diferente de "12345678"
    if (senha.length > 8 && senha !== "12345678") {
        return true;
    } else {
        return false;
    }
}

function atualizarCriterios(senha) {
    const criterioTamanho = document.getElementById('criterio-tamanho');
    const criterioDiferente = document.getElementById('criterio-diferente');
    
    // Atualizar critério do tamanho
    if (senha.length > 8) {
        criterioTamanho.classList.add('valid');
        criterioTamanho.querySelector('.icon').textContent = '✅';
    } else {
        criterioTamanho.classList.remove('valid');
        criterioTamanho.querySelector('.icon').textContent = '❌';
    }
    
    // Atualizar critério de ser diferente de "12345678"
    if (senha !== "12345678") {
        criterioDiferente.classList.add('valid');
        criterioDiferente.querySelector('.icon').textContent = '✅';
    } else {
        criterioDiferente.classList.remove('valid');
        criterioDiferente.querySelector('.icon').textContent = '❌';
    }
}

function verificarSenha() {
    const senhaInput = document.getElementById('senha');
    const resultadoDiv = document.getElementById('resultado');
    const resultIcon = document.getElementById('resultIcon');
    const resultTitle = document.getElementById('resultTitle');
    const resultMessage = document.getElementById('resultMessage');
    
    const senha = senhaInput.value;
    
    // Atualizar critérios visuais
    atualizarCriterios(senha);
    
    // Chamar a função de verificação
    const ehForte = senhaForte(senha);
    
    // Atualizar a interface com o resultado
    if (ehForte) {
        resultadoDiv.className = 'resultado forte';
        resultIcon.textContent = '✅';
        resultTitle.textContent = 'Senha Forte!';
        resultMessage.textContent = 'Sua senha atende a todos os critérios de segurança.';
    } else {
        resultadoDiv.className = 'resultado fraca';
        resultIcon.textContent = '❌';
        resultTitle.textContent = 'Senha Fraca';
        resultMessage.textContent = 'Sua senha não atende aos critérios de segurança.';
        
        // Mensagem mais específica
        if (senha.length <= 8) {
            resultMessage.textContent = 'Sua senha precisa ter mais de 8 caracteres.';
        } else if (senha === "12345678") {
            resultMessage.textContent = 'Sua senha não pode ser "12345678".';
        }
    }
}

function preencherSenha(senha) {
    document.getElementById('senha').value = senha;
    verificarSenha();
}

function limparCampos() {
    document.getElementById('senha').value = '';
    
    // Resetar critérios
    const criterios = document.querySelectorAll('.criterio');
    criterios.forEach(criterio => {
        criterio.classList.remove('valid');
        criterio.querySelector('.icon').textContent = '❌';
    });
    
    // Resetar resultado
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.className = 'resultado';
    document.getElementById('resultIcon').textContent = '❓';
    document.getElementById('resultTitle').textContent = 'Aguardando verificação';
    document.getElementById('resultMessage').textContent = 'Digite uma senha para verificar';
}

// Event listeners para verificação em tempo real
document.addEventListener('DOMContentLoaded', function() {
    const senhaInput = document.getElementById('senha');
    
    senhaInput.addEventListener('input', function() {
        if (this.value.length > 0) {
            atualizarCriterios(this.value);
        } else {
            // Resetar critérios se o campo estiver vazio
            const criterios = document.querySelectorAll('.criterio');
            criterios.forEach(criterio => {
                criterio.classList.remove('valid');
                criterio.querySelector('.icon').textContent = '❌';
            });
        }
    });
    
    senhaInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            verificarSenha();
        }
    });
    
    // Focar no input quando a página carregar
    senhaInput.focus();
});

// Função de demonstração
function demonstrarFuncao() {
    console.log("=== Demonstração da Função senhaForte ===");
    
    const testes = [
        "12345678",      // false (igual a "12345678")
        "123456789",     // true (mais de 8 chars e diferente)
        "senha",         // false (menos de 8 chars)
        "minhasenha",    // true (mais de 8 chars e diferente)
        "12345678!",     // true (mais de 8 chars e diferente)
        "abc123",        // false (menos de 8 chars)
        "senhasecreta123" // true (mais de 8 chars e diferente)
    ];
    
    testes.forEach(senha => {
        const resultado = senhaForte(senha);
        console.log(`"${senha}" → ${resultado}`);
    });
}

// Executar demonstração no console
demonstrarFuncao();