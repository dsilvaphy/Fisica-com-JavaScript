// 1. Calculadora com funções avançadas
function calcular(funcao) {
    const valor = parseFloat(document.getElementById("inputNumero").value);
    let resultado = 0;
    switch (funcao) {
        case "seno":
            resultado = Math.sin(valor);
            break;
        case "cosseno":
            resultado = Math.cos(valor);
            break;
        case "tangente":
            resultado = Math.tan(valor);
            break;
        case "exponencial":
            resultado = Math.exp(valor);
            break;
        case "logNatural":
            resultado = Math.log(valor);
            break;
        case "log10":
            resultado = Math.log10(valor);
            break;
        case "raizQuadrada":
            resultado = Math.sqrt(valor);
            break;
        case "raizCubica":
            resultado = Math.cbrt(valor);
            break;
        case "potencia":
            const expoente = parseFloat(prompt("Digite o expoente:"));
            resultado = Math.pow(valor, expoente);
            break;
    }
    document.getElementById("resultado").value = resultado.toFixed(4);
}

// 2. Calculadora com radio buttons
function calcularRadio() {
    const valor = parseFloat(document.getElementById("inputValorRadio").value);
    const funcaoSelecionada = document.querySelector('input[name="funcao"]:checked').value;
    let resultado = 0;

    switch (funcaoSelecionada) {
        case "seno":
            resultado = Math.sin(valor);
            break;
        case "cosseno":
            resultado = Math.cos(valor);
            break;
        case "tangente":
            resultado = Math.tan(valor);
            break;
    }

    document.getElementById("resultadoRadio").value = resultado.toFixed(4);
}

// 3. Campo de texto e botões para sequência de números
function analisarNumeros() {
    const numeros = document.getElementById("inputNumeros").value.split(",").map(Number);
    const soma = numeros.reduce((acc, val) => acc + val, 0);
    const menor = Math.min(...numeros);
    const maior = Math.max(...numeros);
    const media = soma / numeros.length;

    document.getElementById("resultadoSoma").textContent = `Soma: ${soma}`;
    document.getElementById("resultadoMenor").textContent = `Menor: ${menor}`;
    document.getElementById("resultadoMaior").textContent = `Maior: ${maior}`;
    document.getElementById("resultadoMedia").textContent = `Média: ${media.toFixed(2)}`;
}

// 4. Prova de múltipla escolha
function calcularNota() {
    const respostasCorretas = ["a", "b", "c", "a", "d"];
    let acertos = 0;

    respostasCorretas.forEach((resposta, index) => {
        const selecionada = document.querySelector(`input[name="questao${index + 1}"]:checked`);
        if (selecionada && selecionada.value === resposta) acertos++;
    });

    const nota = (acertos / respostasCorretas.length) * 10;
    alert(`Você acertou ${acertos} questões. Sua nota é ${nota.toFixed(1)}`);
}

// 5. Questão de verdadeiro ou falso
function calcularNotaVF() {
    const respostas = [true, false, true, false, true];
    let nota = 0;

    respostas.forEach((resposta, index) => {
        const selecionada = document.getElementById(`questaoVF${index + 1}`).checked;
        if (selecionada === resposta) nota += 2;
        else nota -= 2;
    });

    nota = Math.max(nota, 0);
    alert(`Sua nota final é ${nota}`);
}

// 6. Impedância acústica
function calcularReflexao() {
    const z1 = parseFloat(document.getElementById("z1").value);
    const z2 = parseFloat(document.getElementById("z2").value);
    const reflexao = Math.pow((z1 - z2) / (z1 + z2), 2);

    document.getElementById("resultadoReflexao").value = (reflexao * 100).toFixed(2) + "%";
}
