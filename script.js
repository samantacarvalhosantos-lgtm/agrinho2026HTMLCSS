const perguntas = [
    {
        pergunta: "Qual atitude ajuda a economizar água na propriedade rural?",
        opcoes: ["Irrigar no horário mais quente", "Usar irrigação controlada", "Deixar vazamentos abertos"],
        correta: 1
    },
    {
        pergunta: "Qual fonte de energia é considerada renovável?",
        opcoes: ["Carvão mineral", "Óleo diesel", "Energia solar"],
        correta: 2
    },
    {
        pergunta: "O que a reciclagem ajuda a reduzir?",
        opcoes: ["A quantidade de resíduos no ambiente", "A qualidade do solo", "O reaproveitamento de materiais"],
        correta: 0
    },
    {
        pergunta: "Por que as abelhas são importantes para o agro?",
        opcoes: ["Porque fazem polinização", "Porque aumentam o desmatamento", "Porque secam as plantações"],
        correta: 0
    },
    {
        pergunta: "Qual prática ajuda a proteger o solo?",
        opcoes: ["Retirar toda a vegetação", "Fazer queimadas frequentes", "Manter cobertura vegetal"],
        correta: 2
    },
    {
        pergunta: "O que significa produzir de forma sustentável?",
        opcoes: ["Produzir cuidando dos recursos naturais", "Produzir desperdiçando água", "Produzir sem pensar no futuro"],
        correta: 0
    },
    {
        pergunta: "A água da chuva pode ser usada para:",
        opcoes: ["Aumentar a poluição", "Ajudar na irrigação e limpeza", "Destruir as plantações"],
        correta: 1
    },
    {
        pergunta: "Qual opção representa uma atitude correta no campo?",
        opcoes: ["Descartar lixo no rio", "Queimar embalagens", "Separar resíduos corretamente"],
        correta: 2
    },
    {
        pergunta: "Biodiversidade significa:",
        opcoes: ["Variedade de seres vivos", "Falta de plantas", "Apenas criação de gado"],
        correta: 0
    },
    {
        pergunta: "Qual ação combina com o tema agro forte e futuro sustentável?",
        opcoes: ["Desmatar sem controle", "Equilibrar produção e preservação", "Desperdiçar recursos naturais"],
        correta: 1
    }
];

let atual = 0;
let pontos = 0;
let tempo = 60;

const perguntaTexto = document.getElementById("pergunta");
const opcoesDiv = document.getElementById("opcoes");
const numeroTexto = document.getElementById("numero");
const tempoTexto = document.getElementById("tempo");
const pontosTexto = document.getElementById("pontos");
const resultado = document.getElementById("resultado");
const quiz = document.getElementById("quiz");

function mostrarPergunta() {
    const questao = perguntas[atual];

    perguntaTexto.textContent = questao.pergunta;
    numeroTexto.textContent = atual + 1;
    opcoesDiv.innerHTML = "";

    questao.opcoes.forEach(function(opcao, indice) {
        const botao = document.createElement("button");
        botao.textContent = opcao;

        botao.addEventListener("click", function() {
            responder(indice);
        });

        opcoesDiv.appendChild(botao);
    });
}

function responder(indice) {
    if (indice === perguntas[atual].correta) {
        pontos++;
        pontosTexto.textContent = pontos;
    }

    atual++;

    if (atual < perguntas.length) {
        mostrarPergunta();
    } else {
        finalizarQuiz();
    }
}

function finalizarQuiz() {
    clearInterval(cronometro);
    quiz.style.display = "none";
    resultado.classList.remove("oculto");

    let mensagemFinal = "";

    if (pontos >= 8) {
        mensagemFinal = "Excelente! Você entende muito sobre agro e sustentabilidade.";
    } else if (pontos >= 5) {
        mensagemFinal = "Muito bom! Você está no caminho certo.";
    } else {
        mensagemFinal = "Continue estudando! Cuidar do campo também é aprender todos os dias.";
    }

    resultado.innerHTML = "🎉 Fim do quiz!<br>Você acertou " + pontos + " de 10 perguntas.<br><br>" + mensagemFinal;
}

const cronometro = setInterval(function() {
    tempo--;
    tempoTexto.textContent = tempo;

    if (tempo <= 0) {
        clearInterval(cronometro);
        quiz.style.display = "none";
        resultado.classList.remove("oculto");
        resultado.innerHTML = "⏰ Tempo esgotado!<br>Você fez " + pontos + " ponto(s).<br><br>Quando o tempo acaba, o jogo termina.";
    }
}, 1000);

mostrarPergunta();
