// 1. Imprimir pares coordenados no formato especificado
function imprimirCoordenadas(input) {
    const valores = input.split(",");
    for (let i = 0; i < valores.length; i += 2) {
        console.log(`x${i / 2 + 1} = ${valores[i].trim()}, y${i / 2 + 1} = ${valores[i + 1].trim()}`);
    }
}
imprimirCoordenadas("1,2,3,4,5,6");

// 2. Validação de CPF
function validarCPF(cpf) {
    cpf = cpf.replace(/\D/g, ""); // Remove caracteres não numéricos
    if (cpf.length !== 11) return false;

    // Cálculo do primeiro dígito verificador
    let soma = 0;
    for (let i = 0; i < 9; i++) soma += cpf[i] * (10 - i);
    let resto = soma % 11;
    let digito1 = resto < 2 ? 0 : 11 - resto;

    // Cálculo do segundo dígito verificador
    soma = 0;
    for (let i = 0; i < 10; i++) soma += cpf[i] * (11 - i);
    resto = soma % 11;
    let digito2 = resto < 2 ? 0 : 11 - resto;

    // Verificação dos dígitos
    return cpf[9] == digito1 && cpf[10] == digito2;
}
console.log("2. CPF válido:", validarCPF("12345678909"));

// 3. Criptografia simples
function embaralharSenha(senha, ordem) {
    let senhaEmbaralhada = "";
    for (let i = 0; i < ordem.length; i++) {
        senhaEmbaralhada += senha[ordem[i] - 1];
    }
    return senhaEmbaralhada;
}

function desEmbaralharSenha(senha, ordem) {
    let senhaOriginal = [];
    for (let i = 0; i < ordem.length; i++) {
        senhaOriginal[ordem[i] - 1] = senha[i];
    }
    return senhaOriginal.join("");
}

const senhaOriginal = "abcdef";
const ordem = [3, 5, 1, 6, 4, 2];
const senhaCriptografada = embaralharSenha(senhaOriginal, ordem);
console.log("3. Senha criptografada:", senhaCriptografada);
console.log("3. Senha original:", desEmbaralharSenha(senhaCriptografada, ordem));

// 4. Converter números em cor hexadecimal
function gerarCorRGB(input) {
    const numeros = input.split(",").map(Number);
    const hex = numeros.map(num => num.toString(16).padStart(2, "0"));
    return `#${hex.join("")}`;
}
console.log("4. Cor gerada:", gerarCorRGB("255,0,128"));

// 5. Soma e produto em sistema quaternário
function quaternarioParaDecimal(numero) {
    return numero.split("").reduce((acc, val, index) => acc + parseInt(val, 10) * Math.pow(4, numero.length - 1 - index), 0);
}

function somaEProdutoQuaternario(num1, num2) {
    const decimal1 = quaternarioParaDecimal(num1);
    const decimal2 = quaternarioParaDecimal(num2);
    return {
        soma: decimal1 + decimal2,
        produto: decimal1 * decimal2,
    };
}
console.log("5. Soma e produto:", somaEProdutoQuaternario("10", "12"));

// 6. Contagem de palavras por tamanho
function contarTamanhos(frase) {
    const palavras = frase.split(" ");
    const contagem = Array(15).fill(0);
    palavras.forEach(palavra => {
        const tamanho = palavra.length;
        if (tamanho <= 14) contagem[tamanho]++;
    });
    return contagem;
}
console.log("6. Contagem de palavras:", contarTamanhos("Esta é uma frase de teste para verificar tamanhos de palavras."));

// 7. DNA aleatório e contagem de subsequências
function gerarDNA(tamanho) {
    const bases = ["A", "C", "G", "T"];
    let dna = "";
    for (let i = 0; i < tamanho; i++) {
        dna += bases[Math.floor(Math.random() * bases.length)];
    }
    return dna;
}

function contarSubsequencias(dna, sequencias) {
    const contagem = {};
    sequencias.forEach(seq => {
        let regex = new RegExp(seq, "g");
        contagem[seq] = (dna.match(regex) || []).length;
    });
    return contagem;
}

const dna = gerarDNA(100);
console.log("7. DNA gerado:", dna);
console.log("7. Contagem de subsequências:", contarSubsequencias(dna, ["AA", "AAA", "AAAA"]));
