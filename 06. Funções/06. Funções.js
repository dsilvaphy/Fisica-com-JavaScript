// 1. Função volume(raio)
function volumeEsfera(raio) {
    return (4 / 3) * Math.PI * Math.pow(raio, 3);
}
console.log("1. Volume da esfera:", volumeEsfera(3).toFixed(2));

// 2. Função volume(objeto, dim)
function volumeObjeto(objeto, dim) {
    if (objeto === "cubo") {
        return Math.pow(dim, 3);
    } else if (objeto === "esfera") {
        return volumeEsfera(dim);
    } else {
        return "Objeto inválido!";
    }
}
console.log("2. Volume do cubo:", volumeObjeto("cubo", 3));
console.log("2. Volume da esfera:", volumeObjeto("esfera", 3).toFixed(2));

// 3. Função potencial(x, y, z)
function potencial(x, y, z) {
    const k = 8.99e9; // Constante elétrica
    const q = 1.6e-19; // Carga elementar
    const r = Math.sqrt(x ** 2 + y ** 2 + z ** 2);
    return (k * q) / r;
}
console.log("3. Potencial elétrico:", potencial(1, 1, 1).toExponential(2));

// 4. Função campo(x, y, z)
function campo(x, y, z) {
    const k = 8.99e9; // Constante elétrica
    const q = 1.6e-19; // Carga elementar
    const r = Math.sqrt(x ** 2 + y ** 2 + z ** 2);
    const cosTheta = z / r;
    const sinTheta = y / r;
    return {
        Ex: (k * q * cosTheta) / (r ** 2),
        Ey: (k * q * sinTheta) / (r ** 2),
        Ez: (k * q * z) / (r ** 2),
    };
}
console.log("4. Campo elétrico:", campo(1, 1, 1));

// 5. Função modVet(x, y, z)
function modVet(x, y, z) {
    return Math.sqrt(x ** 2 + y ** 2 + z ** 2);
}
console.log("5. Módulo do vetor:", modVet(3, 4, 5).toFixed(2));

// 6. Função angVet(v1, v2)
function angVet(v1, v2) {
    const dotProduct = v1[0] * v2[0] + v1[1] * v2[1] + v1[2] * v2[2];
    const modV1 = modVet(...v1);
    const modV2 = modVet(...v2);
    const cosTheta = dotProduct / (modV1 * modV2);
    return Math.acos(cosTheta) * (180 / Math.PI); // Ângulo em graus
}
console.log("6. Ângulo entre vetores:", angVet([1, 0, 0], [0, 1, 0]).toFixed(2));

// 7. Função prodVet(a, b)
function prodVet(a, b) {
    return [
        a[1] * b[2] - b[1] * a[2], // cx
        a[2] * b[0] - b[2] * a[0], // cy
        a[0] * b[1] - b[0] * a[1], // cz
    ];
}
console.log("7. Produto vetorial:", prodVet([1, 0, 0], [0, 1, 0]));

// 8. Função iguais(a, b)
function iguais(a, b) {
    return a === b;
}
console.log("8. Iguais:", iguais(5, 5));

// 9. Função iguais(a, b, c)
function iguaisTres(a, b, c) {
    return a === b && b === c;
}
console.log("9. Iguais (três elementos):", iguaisTres(5, 5, 5));

// 10. Função zeros(a, b, c)
function zeros(a, b, c) {
    return a === 0 && b === 0 && c === 0;
}
console.log("10. Zeros:", zeros(0, 0, 0));

// 11. Função iguais(mat)
function iguaisMat(mat) {
    return mat.every((val, _, arr) => val === arr[0]);
}
console.log("11. Iguais na matriz:", iguaisMat([1, 1, 1]));

// 12. Função iguais(mat)
function zerosMat(mat) {
    return mat.every(val => val === 0);
}
console.log("12. Zeros na matriz:", zerosMat([0, 0, 0]));

// 13. Modificar cálculo da força elétrica
function forcaEletrica() {
    const k = 8.99e9; // Constante elétrica
    const q1 = 1e-6; // Carga 1
    const q2 = 1e-6; // Carga 2
    const resultados = [];

    for (let r = 1; r <= 10000; r *= 10) {
        const f = (k * q1 * q2) / (r ** 2);
        const logF = Math.log10(f);
        const logR = Math.log10(r);
        resultados.push({ r, f: f.toExponential(2), logF: logF.toFixed(2), logR: logR.toFixed(2) });
    }
    return resultados;
}

console.log("13. Força elétrica:");
forcaEletrica().forEach(res => console.log(`Distância: ${res.r}, Força: ${res.f}, log(F): ${res.logF}, log(R): ${res.logR}`));
