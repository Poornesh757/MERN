// scripts.js

// Function to get a random number between 1 and 6
function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

// Function to update the dice image based on the roll result
function updateDiceImage(result) {
    const diceImg = document.getElementById('diceImg');
    diceImg.src = `images/dice${result}.png`;
}

// Function to handle dice roll and update results
function handleRoll() {
    const rollResult = rollDice();
    updateDiceImage(rollResult);

    // Update roll count and total score
    const rollCountElement = document.getElementById('rollCount');
    const totalScoreElement = document.getElementById('totalScore');
    const messageElement = document.getElementById('message');

    let rollCount = parseInt(rollCountElement.textContent);
    let totalScore = parseInt(totalScoreElement.textContent);

    rollCount++;
    totalScore += rollResult;

    rollCountElement.textContent = rollCount;
    totalScoreElement.textContent = totalScore;

    messageElement.textContent = `You rolled a ${rollResult}!`;
}

// Event listener for the roll button
document.getElementById('rollDice').addEventListener('click', handleRoll);
