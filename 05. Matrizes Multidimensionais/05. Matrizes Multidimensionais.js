// 1. Criar matriz bidimensional
function criarMatriz(n, m) {
    const matriz = [];
    for (let i = 1; i <= n; i++) {
        const linha = [];
        for (let j = 1; j <= m; j++) {
            linha.push(Math.sqrt(i ** 2 + j ** 2).toFixed(2));
        }
        matriz.push(linha);
    }
    return matriz;
}
const matriz1 = criarMatriz(2, 3);
console.log("1. Matriz bidimensional:");
matriz1.forEach(linha => console.log(linha.join(" ")));

// 2. Criar matriz quadrada e soma da diagonal
function criarMatrizQuadrada(n) {
    const matriz = [];
    for (let i = 1; i <= n; i++) {
        const linha = [];
        for (let j = 1; j <= n; j++) {
            linha.push(2 * i + j);
        }
        matriz.push(linha);
    }
    return matriz;
}

function somaDiagonal(matriz) {
    let soma = 0;
    for (let i = 0; i < matriz.length; i++) {
        soma += matriz[i][i];
    }
    return soma;
}

const matriz2 = criarMatrizQuadrada(3);
console.log("2. Matriz quadrada:");
matriz2.forEach(linha => console.log(linha.join(" ")));
console.log("A soma dos elementos da diagonal é:", somaDiagonal(matriz2));

// 3. Reproduzir "Batalha Naval"
function criarBatalhaNaval() {
    const tabuleiro = [
        ["X", "-", "-", "-", "X"],
        ["-", "-", "-", "-", "-"],
        ["X", "-", "-", "-", "X"],
        ["-", "-", "-", "-", "-"],
        ["X", "-", "-", "-", "X"],
    ];
    return tabuleiro;
}

const batalhaNaval = criarBatalhaNaval();
console.log("3. Batalha Naval:");
batalhaNaval.forEach(linha => console.log(linha.join(" ")));

// 4. Calcular médias dos alunos
function calcularMedias(alunos, pesos) {
    alunos.forEach(aluno => {
        const notas = aluno.notas;
        const media = notas.reduce((acc, nota, index) => acc + nota * pesos[index], 0) / pesos.reduce((acc, peso) => acc + peso, 0);
        aluno.media = media.toFixed(2);
        aluno.status = media >= 6 ? "Aprovado" : "Reprovado";
    });
    return alunos;
}

const alunos = [
    { nome: "João", notas: [8, 7, 9] },
    { nome: "Maria", notas: [5, 6, 7] },
    { nome: "Pedro", notas: [4, 5, 6] },
];

const pesos = [3, 2, 1];
const resultadoAlunos = calcularMedias(alunos, pesos);
console.log("4. Notas e médias dos alunos:");
resultadoAlunos.forEach(aluno => console.log(`${aluno.nome}: Notas: ${aluno.notas.join(", ")}, Média: ${aluno.media}, Status: ${aluno.status}`));

// 5. Soma de duas matrizes
function somaMatrizes(matrizA, matrizB) {
    return matrizA.map((linha, i) => linha.map((valor, j) => valor + matrizB[i][j]));
}

const matrizA = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
const matrizB = [
    [9, 8, 7],
    [6, 5, 4],
    [3, 2, 1],
];

const matrizSoma = somaMatrizes(matrizA, matrizB);
console.log("5. Soma das matrizes:");
matrizSoma.forEach(linha => console.log(linha.join(" ")));

// 6. Gerar partículas com probabilidades
function gerarParticulas(numParticulas) {
    const particulas = [];
    for (let i = 0; i < numParticulas; i++) {
        const massa = Math.random() < 0.5 ? 1 : 2;
        const carga = Math.random() < 0.833 ? 1 : 2; // 5 vezes mais provável que q = 1
        const px = Math.random().toFixed(2);
        const py = Math.random().toFixed(2);
        const pz = Math.random().toFixed(2);
        particulas.push({ id: i, massa, carga, px, py, pz });
    }
    return particulas;
}

const particulas = gerarParticulas(5);
console.log("6. Partículas:");
particulas.forEach(p => console.log(`Partícula ${p.id}: ${p.massa}, ${p.carga}, ${p.px}, ${p.py}, ${p.pz}`));

// 7. Momento total igual à unidade
function gerarParticulasComMomento(numParticulas) {
    const particulas = [];
    for (let i = 0; i < numParticulas; i++) {
        const massa = Math.random() < 0.5 ? 1 : 2;
        const carga = Math.random() < 0.833 ? 1 : 2; // 5 vezes mais provável que q = 1
        const px = Math.random();
        const py = Math.random();
        const pz = Math.sqrt(1 - px ** 2 - py ** 2).toFixed(2); // Garante |p| = 1
        particulas.push({ id: i, massa, carga, px: px.toFixed(2), py: py.toFixed(2), pz });
    }
    return particulas;
}

const particulasComMomento = gerarParticulasComMomento(5);
console.log("7. Partículas com |p| = 1:");
particulasComMomento.forEach(p => console.log(`Partícula ${p.id}: ${p.massa}, ${p.carga}, ${p.px}, ${p.py}, ${p.pz}`));
