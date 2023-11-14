function chooseOption(playerChoice) {
    const choices = ['pedra', 'papel', 'tesoura'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    const result = getResult(playerChoice, computerChoice);

    displayResult(playerChoice, computerChoice, result);
}

function getResult(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return 'Empate!';
    } else if (
        (playerChoice === 'pedra' && computerChoice === 'tesoura') ||
        (playerChoice === 'papel' && computerChoice === 'pedra') ||
        (playerChoice === 'tesoura' && computerChoice === 'papel')
    ) {
        return 'Você venceu!';
    } else {
        return 'Você perdeu!';
    }
}

function displayResult(playerChoice, computerChoice, result) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <p>Você escolheu ${playerChoice}.</p>
        <p>O computador escolheu ${computerChoice}.</p>
        <p>Resultado: ${result}</p>
    `;
}
