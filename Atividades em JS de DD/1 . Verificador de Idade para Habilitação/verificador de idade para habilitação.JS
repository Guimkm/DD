        function podeDirigir(idade) {
            if (idade >= 18) {
                return "Pode ser habilitado(a)";
            } else {
                return "Ainda não pode";
            }
        }

        function verificarIdade() {
            // Pegar o valor do input
            const idadeInput = document.getElementById('idade');
            const resultadoDiv = document.getElementById('resultado');
            
            // Converter para número
            const idade = parseInt(idadeInput.value);
            
            // Validar se é um número válido
            if (isNaN(idade) || idade < 0 || idade > 120) {
                resultadoDiv.textContent = "Por favor, digite uma idade válida!";
                resultadoDiv.className = "resultado nao-pode";
                return;
            }
            
            // Chamar a função e mostrar o resultado
            const resultado = podeDirigir(idade);
            resultadoDiv.textContent = resultado;
            
            // Aplicar estilo conforme o resultado
            if (resultado === "Pode ser habilitado(a)") {
                resultadoDiv.className = "resultado pode";
            } else {
                resultadoDiv.className = "resultado nao-pode";
            }
        }

        // Permitir verificar pressionando Enter
        document.getElementById('idade').addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                verificarIdade();
            }
        });