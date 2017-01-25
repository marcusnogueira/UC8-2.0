// This is the varaible that stores the score.
// score[0] = wins, score[1] = losses, score[2] = ties
var score = [0, 0, 0];
var matchscore = [0, 0];
// The variables store the current player's and computer's choices
// 0 = Rock, 1 = Paper, 2 = Scissors 3 = Spock, 4 = Lizard
var playerChoice;
var computerChoice;

function playGame() {
    // Here is the game ruleset algorithm
    if (playerChoice == computerChoice) {
        // We have a tie!
        console.log("tie");
        return 0;
    }
    else if ((playerChoice == 0 && computerChoice == 2) || (playerChoice == 0 && computerChoice == 4)) {
        // Rock beats scissors or lizard - a win!
        console.log("win");
        return 1;
    }
    else if ((playerChoice == 1 && computerChoice == 0) || (playerChoice == 1 && computerChoice == 3)) {
        // Paper beats rock or spock - a win!
        console.log("win");
        return 1;
    }
    else if ((playerChoice == 2 && computerChoice == 1) || (playerChoice == 2 && computerChoice == 4)) {
        // Scissors beats paper or lizard - a win!
        console.log("win");
        return 1;
    }
    else if ((playerChoice == 3 && computerChoice == 0) || (playerChoice == 3 && computerChoice == 2)) {
        // Spock beats rock or scissors - a win!
        console.log("win");
        return 1;
    }
    else if ((playerChoice == 4 && computerChoice == 1) || (playerChoice == 4 && computerChoice == 3)) {
        // Lizard beats paper or spock - a win!
        console.log("win");
        return 1;
    }
    else {
        // All other combinations are losses
        console.log("lose");
        return -1;
    }
}

function displayScoreBoard(winsId, lossesId, tiesId) {
    document.getElementById(winsId).innerHTML = score[0];
    document.getElementById(lossesId).innerHTML = score[1];
    document.getElementById(tiesId).innerHTML = score[2];
}

function updateScore(val) {
    ++score[val];
    console.log("The score is now " + score);
}

function displayGameResult(resultId) {
    // Define an array of text labels for the choices 0, 1, 2;
    var choices = ["Rock", "Paper", "Scissors", "Spock", "Lizard"];
    // Now play the game and store the result
    var result = playGame();
    // Create a message for the player
    var message = "Your choice was " + choices[playerChoice] + " and the computer's choice was " + choices[computerChoice] + "<br/>";
    // Add to the base message if it was a win, loss, or tie
    if (result == 1) {
        // Display that it was a win
        updateScore(0);
        document.getElementById(resultId).innerHTML = message + "YOU WIN!";
        document.getElementById(resultId).className = "alert alert-success";
    }
    else if (result == -1) {
        updateScore(1);
        // Display that it was a loss
        document.getElementById(resultId).innerHTML = message + "YOU LOSE! ";
        document.getElementById(resultId).className = "alert alert-danger";
    }
    else {
        // Display that it was a tie
        updateScore(2);
        document.getElementById(resultId).innerHTML = message + "A tie. ";
        document.getElementById(resultId).className = "alert alert-info";
    }
}

function displayMatchResult() {
    if (score[0] == 2) {
        score[0] = 0;
        score[1] = 0;
        score[2] = 0;
        // Resets scoreboard
        updateMatchScore(0);
        // Update match score
    }
    else if (score[1] == 2) {
        score[0] = 0;
        score[1] = 0;
        score[2] = 0;
        // Resets scoreboard
        updateMatchScore(1);
        // Update match score
    }
}

function displayMatchScore(pmatchesId, cmatchesId) {
    document.getElementById(pmatchesId).innerHTML = matchscore[0];
    document.getElementById(cmatchesId).innerHTML = matchscore[1];
}

function updateMatchScore(val) {
    ++matchscore[val];
    console.log("The match score is now " + matchscore);
}

function storePlayerChoice(choice) {
    playerChoice = choice;
    console.log("My choice = " + playerChoice);
    storeComputerChoice();
}

function storeComputerChoice() {
    // Generate computer's random choice
    computerChoice = Math.floor(Math.random() * 5);
    console.log("Computer choice = " + computerChoice);
}
