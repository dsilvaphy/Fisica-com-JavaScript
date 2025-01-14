<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercícios de Física</title>
    <style>
        #asterisco1, #asterisco2, #planeta {
            position: absolute;
            font-size: 20px;
        }
    </style>
    <script defer src="script.js"></script>
</head>
<body>
    <h1>1. Decaimento Radioativo</h1>
    <input type="date" id="dataNascimento">
    <button onclick="calcularDecaimento()">Calcular diferença de dias</button>

    <h1>2. Dois Asteriscos Oscilantes</h1>
    <div id="asterisco1" style="left: 150px; top: 150px;">*</div>
    <div id="asterisco2" style="left: 150px; top: 200px;">*</div>
    <button onclick="iniciarOscilacao()">Iniciar Oscilação</button>

    <h1>3. Planeta Girando em Torno do Sol</h1>
    <div id="planeta" style="left: 150px; top: 50px;">O</div>
    <button onclick="simularPlaneta()">Iniciar Movimento</button>

    <h1>5. Caça-Níqueis</h1>
    <button onclick="iniciarCacaNiqueis()">Iniciar</button>
    <p id="resultado"></p>

    <h1>6. Lançamento Oblíquo</h1>
    <label for="velocidadeInicial">Velocidade inicial (m/s):</label>
    <input type="number" id="velocidadeInicial" step="0.1"><br>
    <label for="anguloLancamento">Ângulo de lançamento (graus):</label>
    <input type="number" id="anguloLancamento" step="1"><br>
    <button onclick="simularLancamento()">Simular Lançamento</button>
    <p id="projecao"></p>
</body>
</html>
