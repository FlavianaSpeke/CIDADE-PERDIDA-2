const storyData = {
  inicio: {
    title: "PASSO 1: O Início em Curitiba",
    text: "Você é um historiador em busca de uma civilização antiga no Paraná. Em Curitiba, você encontra duas pistas promissoras sobre a localização da cidade perdida.",
    choices: [
      { text: "Seguir para Morretes (Pegar o trem pela Serra do Mar)", nextStep: "morretes" },
      { text: "Seguir para Ponta Grossa (Explorar as rochas de Vila Velha)", nextStep: "pontaGrossa" }
    ]
  },
  morretes: {
    title: "PASSO 2A: O Caminho do Litoral",
    text: "Você chega a Morretes. Um pescador local menciona ter visto ruínas misteriosas nas ilhas da região.",
    choices: [
      { text: "Ir para Paranaguá (Investigar o porto e as ilhas)", nextStep: "paranagua" },
      { text: "Subir para Guaratuba (Procurar nas praias do sul)", nextStep: "guaratuba" }
    ]
  },
  pontaGrossa: {
    title: "PASSO 2B: O Caminho dos Campos Gerais",
    text: "Nas formações rochosas de Vila Velha, em Ponta Grossa, você descobre uma antiga inscrição entalhada na pedra.",
    choices: [
      { text: "Ir para Guarapuava (Entrar na mata fechada do centro)", nextStep: "guarapuava" },
      { text: "Ir para Londrina (Investigar a região norte)", nextStep: "londrina" }
    ]
  },
  paranagua: {
    title: "PASSO 3: O Amuleto do Litoral",
    text: "Em Paranaguá, você encontra um amuleto antigo no Mar de Dentro! As inscrições nele apontam diretamente para o extremo oeste do estado.",
    choices: [
      { text: "Seguir para Foz do Iguaçu (Investigar a névoa das Cataratas)", nextStep: "vitoria" }
    ]
  },
  guaratuba: {
    title: "FIM DE JOGO: Pista Perdida",
    text: "Você aproveitou as praias de Guaratuba, mas perdeu o sinal da pista. Você virou apenas mais um turista na praia.",
    choices: []
  },
  guarapuava: {
    title: "PASSO 3: A Caverna do Centro",
    text: "Nas florestas de Guarapuava, você descobre uma caverna com inscrições em relevo. O mapa aponta para a fronteira oeste.",
    choices: [
      { text: "Seguir para Maringá (Procurar sob a sombra da catedral)", nextStep: "maringa" },
      { text: "Seguir para Foz do Iguaçu (Investigar a névoa das Cataratas)", nextStep: "vitoria" }
    ]
  },
  londrina: {
    title: "FIM DE JOGO: Pista Falsa",
    text: "A pista levava a um beco sem saída. Você acabou em um café urbano em Londrina sem nenhuma resposta.",
    choices: []
  },
  maringa: {
    title: "FIM DE JOGO: Trilha Perdida",
    text: "As pistas antigas não correspondem à estrutura da cidade moderna de Maringá. A trilha esfriou.",
    choices: []
  },
  vitoria: {
    title: "PASSO FINAL: A Descoberta!",
    text: "Atrás da cortina d'água das Cataratas em Foz do Iguaçu, uma passagem secreta se abre... Você descobriu a Cidade Perdida de Peabiru escondida sob o Paraná!",
    choices: []
  }
};

function selectChoice(nextStep) {
  renderStep(nextStep);
}

function renderStep(stepKey) {
  const step = storyData[stepKey];
  
  document.getElementById("location-title").innerText = step.title;
  document.getElementById("story-text").innerText = step.text;
  
  const choicesContainer = document.getElementById("choices-container");
  choicesContainer.innerHTML = "";
  
  step.choices.forEach(choice => {
    const button = document.createElement("button");
    button.innerText = choice.text;
    button.onclick = () => selectChoice(choice.nextStep);
    choicesContainer.appendChild(button);
  });
}

function startGame() {
  renderStep("inicio");
}

window.onload = startGame;