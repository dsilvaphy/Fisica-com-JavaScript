// 1. Converter ângulo de radianos para graus
function radianosParaGraus(radianos) {
    const graus = radianos * (180 / Math.PI);
    return graus;
}
const radianos = parseFloat(prompt("Digite o ângulo em radianos:"));
console.log("1. O ângulo em graus é:", radianosParaGraus(radianos));

// 2. Conversão entre Celsius e Kelvin
function conversaoTemperatura() {
    const escolha = prompt("Digite 1 para converter de Celsius para Kelvin ou 2 para Kelvin para Celsius:");
    if (escolha === "1") {
        const celsius = parseFloat(prompt("Digite a temperatura em graus Celsius:"));
        const kelvin = celsius + 273.15;
        console.log("2. A temperatura em Kelvin é:", kelvin);
    } else if (escolha === "2") {
        const kelvin = parseFloat(prompt("Digite a temperatura em Kelvin:"));
        const celsius = kelvin - 273.15;
        console.log("2. A temperatura em Celsius é:", celsius);
    } else {
        console.log("2. Opção inválida.");
    }
}
conversaoTemperatura();

// 3. Produto escalar e vetorial de dois vetores
function produtosVetores() {
    // Vetor A
    const ax = parseFloat(prompt("Digite a componente x do vetor A:"));
    const ay = parseFloat(prompt("Digite a componente y do vetor A:"));
    const az = parseFloat(prompt("Digite a componente z do vetor A:"));

    // Vetor B
    const bx = parseFloat(prompt("Digite a componente x do vetor B:"));
    const by = parseFloat(prompt("Digite a componente y do vetor B:"));
    const bz = parseFloat(prompt("Digite a componente z do vetor B:"));

    // Produto escalar
    const produtoEscalar = ax * bx + ay * by + az * bz;
    console.log("3a. Produto escalar:", produtoEscalar);

    // Produto vetorial
    const cx = ay * bz - by * az;
    const cy = az * bx - bz * ax;
    const cz = ax * by - bx * ay;
    console.log("3b. Produto vetorial:");
    console.log("Cx:", cx);
    console.log("Cy:", cy);
    console.log("Cz:", cz);
}
produtosVetores();
