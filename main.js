// 1. Lógica de troca de abas (Botões e Textos)
const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function () {
        // Remove a classe "ativo" de todos os botões e textos
        for (let j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }
        // Adiciona a classe "ativo" apenas no botão e texto clicados
        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    }
}

// 2. Lógica do Contador Regressivo
const contadores = document.querySelectorAll(".contador");

// Defina aqui as datas limite para cada um dos seus 4 objetivos (Ano-Mês-Dia)
const tempoObjetivo1 = new Date("2026-12-15T00:00:00"); // Ex: Concluir o ensino médio
const tempoObjetivo2 = new Date("2026-06-01T00:00:00"); // Ex: Iniciar curso de mecânica
const tempoObjetivo3 = new Date("2026-11-01T00:00:00"); // Ex: ENEM 2026
const tempoObjetivo4 = new Date("2026-08-20T00:00:00"); // Ex: Arte marcial

// Guarda todas as datas em uma lista (array)
const tempos = [tempoObjetivo1, tempoObjetivo2, tempoObjetivo3, tempoObjetivo4];

// Função que calcula a diferença entre a data atual e a data do objetivo
function calculaTempo(tempoObjetivo) {
    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo - tempoAtual;

    // Se o prazo já passou, exibe uma mensagem
    if (tempoFinal < 0) {
        return "Prazo Encerrado!";
    }

    // Cálculos matemáticos para converter milisegundos em dias, horas, minutos e segundos
    let segundos = Math.floor(tempoFinal / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);

    segundos %= 60;
    minutos %= 60;
    horas %= 24;

    // Retorna o texto formatado bonito
    return `${dias} dias_ ${horas} horas_ ${minutos} min_ ${segundos} seg`;
}

// Função que atualiza o texto de todos os contadores na tela
function atualizaCronometro() {
    for (let i = 0; i < contadores.length; i++) {
        contadores[i].textContent = calculaTempo(tempos[i]);
    }
}

// Função principal que inicia o cronômetro e atualiza a cada 1 segundo (1000 milisegundos)
function comecaCronometro() {
    atualizaCronometro();
    setInterval(atualizaCronometro, 1000);
}

// Executa a função para o contador começar a rodar assim que a página abrir
comecaCronometro();