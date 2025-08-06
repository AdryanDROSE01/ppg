const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Era uma noite fria em Chicago, e Derrick Rose estava sentado em um café, refletindo sobre sua carreira. Depois de uma série de lesões que o afastaram das quadras, ele se perguntava se ainda poderia voltar a ser o jogador que todos conheciam. O telefone tocou; Era a ligação do Front-Office dos Bulls dizendo que ou ele ficava saudavél na temporada ou seria trocado",
        alternativas: [
            {
                texto: "Se frustar e pedir a troca!",
                afirmacao: "afirmação"
            },
            {
                texto: "Continuar nos Bulls!",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Após várias temporadas de frustração por lesão, Derrick e os Bulls chegam aos playoffs com esperanças de conquistar o campeonato. A equipe está unida e motivada, e Derrick sente que finalmente está no seu melhor.",
        alternativas: [
            {
                texto: "No jogo contra o Pistons D.rose tem a bola durante os segundos finais do jogo que decide a primeira posição do leste, ele faz o hop-step e passa pra Taj gibson",
                afirmacao: "afirmação"
            },
            {
                texto: "No jogo contra o Pistons D.rose tem a bola durante os segundos finais do jogo que decide a primeira posição do leste, ele faz um Crossover e enterra na cabeça de Drummond",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: " Os Bulls avançaram nos playoffs e pegaram o Hornets de Kemba Walker como adversario",
        alternativas: [
            {
                texto: "Derrick assume a responsabilidade, faz 30ppg e lidera seu time",
                afirmacao: "afirmação"
            },
            {
                texto: "Derrick passa a bola para seus companheiros sem fazer a sua parte e fica apagado no primeiro round ",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Ao final da discussão, você precisou criar uma imagem no computador que representasse o que pensa sobre IA. E agora?",
        alternativas: [
            {
                texto: "Criar uma imagem utilizando uma plataforma de design como o Paint.",
                afirmacao: "afirmação"
            },
            {
                texto: "Criar uma imagem utilizando um gerador de imagem de IA.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda da IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz? ",
        alternativas: [
            {
                texto: "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
                afirmacao: "afirmação"
            },
            {
                texto: "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
                afirmacao: "afirmação"
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
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

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacoes;
    historiaFinal = afirmacoes;
    atual++;
    mostraPergunta();
}

mostraPergunta();
