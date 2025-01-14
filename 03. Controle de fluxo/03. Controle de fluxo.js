// 1. Números inteiros entre 0 e 10 utilizando while, do...while e for

// Usando while
console.log("1. Números com while:");
let i = 0;
while (i <= 10) {
    console.log(i);
    i++;
}

// Usando do...while
console.log("1. Números com do...while:");
let j = 0;
do {
    console.log(j);
    j++;
} while (j <= 10);

// Usando for
console.log("1. Números com for:");
for (let k = 0; k <= 10; k++) {
    console.log(k);
}

// 2. Oscilador harmônico amortecido
console.log("2. Posições do oscilador harmônico:");
const A = 0.10;
const f = 2; // Hz
const b = 2; // b/2m
const m = 1; // massa arbitrária
const k = 1; // constante elástica arbitrária
const interval = 0.1; // Intervalo de tempo em segundos
const tMax = 2; // Tempo máximo

let t = 0;
while (t <= tMax) {
    const x = A * Math.cos(2 * Math.PI * f * t) * Math.exp(-b * t);
    console.log(`t=${t.toFixed(1)}, x=${x.toFixed(3)}`);
    t += interval;
}

// 3. Queda livre com posições sucessivas
console.log("3. Posições sucessivas na queda livre:");
const g = 9.8; // Gravidade em m/s²
let altura = parseFloat(prompt("Digite a altura inicial em metros:"));
let tempo = 0;

do {
    const h = altura - (0.5 * g * tempo ** 2);
    if (h <= 0) {
        console.log(`t=${tempo.toFixed(1)}, altura=0.0 (atingiu o solo)`);
        break;
    } else {
        console.log(`t=${tempo.toFixed(1)}, altura=${h.toFixed(2)}`);
    }
    tempo += 0.1;
} while (true);

// 4. Escolha de função com switch...case
console.log("4. Escolha de função com switch...case:");
const funcao = prompt("Escolha uma função (seno, cosseno, tangente, raiz, exponencial):").toLowerCase();
const numero = parseFloat(prompt("Digite o número para a função:"));
let resultado;

switch (funcao) {
    case "seno":
        resultado = Math.sin(numero);
        break;
    case "cosseno":
        resultado = Math.cos(numero);
        break;
    case "tangente":
        resultado = Math.tan(numero);
        break;
    case "raiz":
        resultado = Math.sqrt(numero);
        break;
    case "exponencial":
        resultado = Math.exp(numero);
        break;
    default:
        resultado = "Função inválida!";
}

console.log(`Função escolhida: ${funcao}, Resultado: ${resultado}`);

// 5. Refaça com if...else aninhados
console.log("5. Escolha de função com if...else:");
const funcaoIf = prompt("Escolha uma função (seno, cosseno, tangente, raiz, exponencial):").toLowerCase();
const numeroIf = parseFloat(prompt("Digite o número para a função:"));
let resultadoIf;

if (funcaoIf === "seno") {
    resultadoIf = Math.sin(numeroIf);
} else if (funcaoIf === "cosseno") {
    resultadoIf = Math.cos(numeroIf);
} else if (funcaoIf === "tangente") {
    resultadoIf = Math.tan(numeroIf);
} else if (funcaoIf === "raiz") {
    resultadoIf = Math.sqrt(numeroIf);
} else if (funcaoIf === "exponencial") {
    resultadoIf = Math.exp(numeroIf);
} else {
    resultadoIf = "Função inválida!";
}

console.log(`Função escolhida: ${funcaoIf}, Resultado: ${resultadoIf}`);
