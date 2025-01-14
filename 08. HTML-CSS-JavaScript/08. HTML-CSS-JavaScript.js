// 1. Listas ordenadas e não ordenadas
function criarListas() {
    const html = `
        <h3>1. Mecânica Quântica</h3>
        <ol>
            <li>Mecânica Quântica: fundamentos
                <ul>
                    <li>Partículas e campos
                        <ul>
                            <li>Difração de partículas</li>
                            <li>Pacotes de ondas</li>
                        </ul>
                    </li>
                    <li>Princípio da incerteza
                        <ul>
                            <li>Relação de incerteza posição-momento</li>
                            <li>Relação de incerteza energia-tempo</li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li>Mecânica Quântica: aplicações
                <ul>
                    <li>Equação de Schrödinger</li>
                    <li>Potenciais
                        <ul>
                            <li>Potencial degrau</li>
                            <li>Poço quadrado infinito</li>
                            <li>Oscilador harmônico</li>
                        </ul>
                    </li>
                </ul>
            </li>
        </ol>
    `;
    document.write(html);
}

// 2. Lançamento oblíquo com sorteio
function lancamentoObliquo() {
    const angulo = Math.floor(Math.random() * (60 - 30 + 1)) + 30;
    const velocidade = Math.random() * (15 - 5) + 5;
    const alturaMaxima = (velocidade ** 2 * Math.sin((angulo * Math.PI) / 180) ** 2) / (2 * 9.8);
    const alcance = (velocidade ** 2 * Math.sin((2 * angulo * Math.PI) / 180)) / 9.8;
    const tempo = (2 * velocidade * Math.sin((angulo * Math.PI) / 180)) / 9.8;

    document.write("<h3>2. Lançamento Oblíquo:</h3>");
    document.write(`Ângulo: ${angulo} graus<br>`);
    document.write(`Velocidade: ${velocidade.toFixed(2)} m/s<br>`);
    document.write(`Altura máxima: ${alturaMaxima.toFixed(2)} m<br>`);
    document.write(`Alcance: ${alcance.toFixed(2)} m<br>`);
    document.write(`Tempo de voo: ${tempo.toFixed(2)} s<br>`);
}

// 3. Reproduzir equações com HTML
function equacoesHTML() {
    const html = `
        <h3>3. Equações em HTML:</h3>
        <p><b>a.</b> sen(A ± B) = sen A cos B ± cos A sen B</p>
        <p><b>b.</b> sen θ = (e<sup>iθ</sup> − e<sup>−iθ</sup>) / 2i</p>
        <p><b>c.</b> ∫ a f(x) dx = a ∫ f(x) dx</p>
        <p><b>d.</b> ∇ × B = μ<sub>0</sub>ε<sub>0</sub> dE/dt</p>
    `;
    document.write(html);
}

// 4. Reproduzir equações com LaTeX
function equacoesLaTeX() {
    const html = `
        <h3>4. Equações em LaTeX:</h3>
        <p>\\( \\frac{\\partial}{\\partial t} \\left( \\frac{\\partial L}{\\partial \\dot{q}_i} \\right) - \\frac{\\partial L}{\\partial q_i} = 0 \\)</p>
        <p>\\( T = \\frac{1}{2} m v^2 + \\frac{1}{2} I \\omega^2 \\)</p>
        <p>\\( \\Psi_{211} = \\frac{1}{\\sqrt{8 \\pi}} \\left( \\frac{Z}{a_0} \\right)^{3/2} e^{-2r/2a_0} \\sin \\theta e^{i \\phi} \\)</p>
    `;
    document.write(html);
}

// 5. Tabela de alunos
function tabelaAlunos() {
    const alunos = [
        ["08234045", 10, 9, 10],
        ["08134033", 8, 7, 3],
        ["09147001", 9, 7, 5],
        ["09147076", 9, 6, 9],
        ["08247804", 7, 7, 7],
    ];

    document.write("<h3>5. Tabela de Alunos:</h3>");
    document.write("<table border='1'>");
    document.write("<tr><th>Matrícula</th><th>P1</th><th>P2</th><th>P3</th><th>Média</th></tr>");
    alunos.forEach(aluno => {
        const media = ((aluno[1] + aluno[2] + aluno[3]) / 3).toFixed(1);
        document.write(`<tr><td>${aluno[0]}</td><td>${aluno[1]}</td><td>${aluno[2]}</td><td>${aluno[3]}</td><td>${media}</td></tr>`);
    });
    document.write("</table>");
}

// 6. Tabela com rowspan e colspan
function tabelaSimbolos() {
    const html = `
        <h3>6. Tabela de Símbolos:</h3>
        <table border='1'>
            <tr>
                <td rowspan="2">⬜</td>
                <td colspan="2">⬜</td>
                <td>≈</td>
            </tr>
            <tr>
                <td>→</td>
                <td>↓</td>
                <td>∞</td>
            </tr>
        </table>
    `;
    document.write(html);
}

// Executar todas as funções
criarListas();
lancamentoObliquo();
equacoesHTML();
equacoesLaTeX();
tabelaAlunos();
tabelaSimbolos();
