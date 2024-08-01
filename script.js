const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Seus amigos te chamaram para uma festa final de semana. Você prefere:",
        alternativas: [
            {
                texto: "Ir na festa",
                afirmacao: "Você é uma pessoa que se diverte em festas "
            },
            {
                texto: "Ficar em casa",
                afirmacao: "Prefere descansar em casa"
            }
        ]
    },
    {
        enunciado: "Em uma sala cheia de pessoas você:",
        alternativas: [
            {
                texto: "Puxa assunto com a primeira que aparecer",
                afirmacao: "e é de facil interação."
            },
            {
                texto: "Fica quieto no seu canto",
                afirmacao: "Você é uma pessoa tímida"
            }
        ]
    },
    {
        enunciado: "Se você tiver que fazer um trabalho em grupo:",
        alternativas: [
            {
                texto: "Você conversa com o grupo tendo uma boa interação com os demais integrantes",
                afirmacao: "Você é uma pessoa estrovetida."
            },
            {
                texto: "Você fica quieto no seu canto fazendo tudo que lhê é pedido",
                afirmacao: "Você é uma pessoa introvetirda que tem dificuldades em se socializar"
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Você...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();