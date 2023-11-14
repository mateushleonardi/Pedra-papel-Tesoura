function setDifficulty(difficulty) {
    localStorage.setItem('difficulty', difficulty);
    window.location.href = 'index.html';
}
function chooseOption(playerChoice) {
    const choices = ['pedra', 'papel', 'tesoura'];
    const computerChoice = getComputerChoice();

    const result = getResult(playerChoice, computerChoice);

    displayResult(playerChoice, computerChoice, result);
}

function getComputerChoice() {
    const difficulty = localStorage.getItem('difficulty');
    let computerChoice;

    switch (difficulty) {
        case 'easy':
            // Fácil: 2 vitórias, 1 derrota, 2 empates a cada 5 jogadas
            const randomValue = Math.random();
        
            if (randomValue < 0.4) {
                // Vitória com tesoura
                computerChoice = 'tesoura';
            } else if (randomValue < 0.8) {
                // Vitória com papel
                computerChoice = 'papel';
            } else {
                // Empate ou vitória com pedra
                computerChoice = 'pedra';
            }
            break;
        case 'medium':
            // Médio: 65% de chance do usuário ganhar
            const randomValueMedium = Math.random();
        
            if (randomValueMedium < 0.37) {
                // Vitória com tesoura
                computerChoice = 'tesoura';
            } else if (randomValueMedium < 0.6) {
                // Vitória com papel
                computerChoice = 'papel';
            } else {
                // Empate ou vitória com pedra
                computerChoice = 'pedra';
            }
            break;
        
            case 'hard':
                const randomValueHard = Math.random();
        
                if (randomValueHard < 0.299) {
                    // Vitória com tesoura
                    computerChoice = 'tesoura';
                } else if (randomValueHard < 0.54) {
                    // Vitória com papel
                    computerChoice = 'papel';
                } else {
                    // Empate ou vitória com pedra
                    computerChoice = 'pedra';
                }
                break;
        default:
            console.error('Dificuldade não reconhecida.');
            computerChoice = ''; // Escolha padrão em caso de erro
    }

    return computerChoice;
}

function getWeightedChoice(choices, weights) {
    const totalWeight = weights.reduce((acc, weight) => acc + weight, 0);
    let randomValue = Math.random() * totalWeight;

    for (let i = 0; i < choices.length; i++) {
        randomValue -= weights[i];
        if (randomValue <= 0) {
            return choices[i];
        }
    }

    // Em caso de erro, retornar a primeira escolha
    return choices[0];
}

// Restante do código permanece o mesmo
