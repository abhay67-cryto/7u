let playerBet = '';
let spinResult = '';
let betPlaced = false;

function placeBet() {
    const colorBet = document.getElementById('color-bet').value;
    playerBet = colorBet;
    betPlaced = true;
    document.getElementById('result').textContent = '';
    document.getElementById('result-message').textContent = `You placed a bet on ${colorBet}.`;
}

function spinWheel() {
    if (!betPlaced) {
        alert("Please place a bet before spinning the wheel!");
        return;
    }

    const colors = ['red', 'green', 'blue', 'yellow'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    spinResult = randomColor;

    document.getElementById('spin-wheel').disabled = true; // Disable button during spin

    setTimeout(() => {
        document.getElementById('spin-wheel').disabled = false; // Re-enable after spin
        document.getElementById('result').textContent = `The wheel landed on: ${spinResult}`;
        
        // Check if the player wins or loses
        if (playerBet === spinResult) {
            document.getElementById('result-message').textContent = "You win!";
        } else {
            document.getElementById('result-message').textContent = "You lose!";
        }

        // Reset the bet
        betPlaced = false;
    }, 2000); // Spin animation duration
}
￼Enter
