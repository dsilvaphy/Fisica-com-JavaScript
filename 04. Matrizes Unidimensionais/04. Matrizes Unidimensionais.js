// 1. Média das velocidades
function calcularMedia(velocidades) {
    const soma = velocidades.reduce((acc, v) => acc + v, 0);
    return soma / velocidades.length;
}
const velocidades = [10, 15, 20, 25, 30];
const media = calcularMedia(velocidades);
console.log("1. Média das velocidades:", media.toFixed(2));

// 2. Desvio quadrático médio
function calcularDesvioRMS(velocidades, media) {
    const somaDesvios = velocidades.reduce((acc, v) => acc + (v - media) ** 2, 0);
    return Math.sqrt(somaDesvios / velocidades.length);
}
const desvioRMS = calcularDesvioRMS(velocidades, media);
console.log("2. Desvio quadrático médio:", desvioRMS.toFixed(2));

// 3. Soma de dois vetores
function somarVetores(vetorA, vetorB) {
    return [
        vetorA[0] + vetorB[0],
        vetorA[1] + vetorB[1],
        vetorA[2] + vetorB[2],
    ];
}
const vetorA = [1, 2, 3];
const vetorB = [4, 5, 6];
const somaVetores = somarVetores(vetorA, vetorB);
console.log("3. Soma de vetores:", somaVetores);

// 4. Produto vetorial de dois vetores
function produtoVetorial(vetorA, vetorB) {
    return [
        vetorA[1] * vetorB[2] - vetorB[1] * vetorA[2], // cx
        vetorA[2] * vetorB[0] - vetorB[2] * vetorA[0], // cy
        vetorA[0] * vetorB[1] - vetorB[0] * vetorA[1], // cz
    ];
}
const produtoVet = produtoVetorial(vetorA, vetorB);
console.log("4. Produto vetorial:", produtoVet);

// 5. Copiar números ímpares para outra matriz
function copiarImpares(numeros) {
    return numeros.filter((n) => n % 2 !== 0);
}
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const impares = copiarImpares(numeros);
console.log("5. Números ímpares:", impares);

// 6. Ordenar dez números aleatórios
function ordenarNumerosAleatorios() {
    const numerosAleatorios = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));
    return numerosAleatorios.sort((a, b) => a - b);
}
const numerosOrdenados = ordenarNumerosAleatorios();
console.log("6. Números aleatórios ordenados:", numerosOrdenados);

// 7. Ordenar palavras e filtrar por letras
function filtrarPalavras(palavras) {
    const palavrasOrdenadas = palavras.sort();
    return palavrasOrdenadas.filter(
        (palavra) => palavra[0].toLowerCase() >= "j" && palavra[0].toLowerCase() <= "n"
    );
}
const palavras = [
    "JavaScript", "Python", "Node", "React", "Machine", "Neural", "Quantum", 
    "Innovation", "Network", "Cloud", "Data", "Analytics", "Server", 
    "Frontend", "Backend", "Database", "Encryption", "Algorithm", "Graph", "Matrix"
];
const palavrasFiltradas = filtrarPalavras(palavras);
console.log("7. Palavras entre 'j' e 'n':", palavrasFiltradas);
