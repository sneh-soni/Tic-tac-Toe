const wins = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
const boxes = document.querySelectorAll(".box");
const current = document.querySelector(".current");
const winnerbox = document.querySelector(".winnerbox");
const restart = document.querySelector(".restart");
let currentPlayer;
let grid;

function init() {
    grid = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = "X";
    winnerbox.classList.add("opacity-0");
    current.innerText = `current player:    ${currentPlayer}`;
    boxes.forEach((box, index) => {
        boxes[index].innerText = "";
        boxes[index].classList.remove("pointer-events-none");
        boxes[index].classList.remove("bg-gray-400");
    });
}

init();

function gameOver() {
    let won = "";
    wins.forEach((value) => {
        if (grid[value[0]] !== "" && grid[value[0]] === grid[value[1]] && grid[value[1]] === grid[value[2]]) {
            boxes[value[0]].classList.add("bg-gray-400");
            boxes[value[1]].classList.add("bg-gray-400");
            boxes[value[2]].classList.add("bg-gray-400");
            if (grid[value[0]] === "X") won = "X";
            else won = "0";
        }
    });
    if (won !== "") {
        winnerbox.classList.remove("opacity-0");
        winnerbox.innerText = `${won}   won!`;
        current.innerText = `Game Over!`;
        boxes.forEach((box, index) => {
            boxes[index].classList.add("pointer-events-none");
        });
        return;
    }
        let Tied = true;
        for (let i = 0; i < grid.length; i++) {
            if (grid[i] === "") Tied = false;
        } 
        if(Tied){
            winnerbox.classList.remove("opacity-0");
            winnerbox.innerText = `It's a Tie`;
            current.innerText = `Game Over!`;
        }
     return;
    
}

function tied() {
    for (let i = 0; i < grid.length; i++) {
        if (grid[i] === "") return false;
    }
    return true;
}

boxes.forEach((box, index) => {
    box.addEventListener("click", function () {
        if (grid[index] === "") {
            grid[index] = currentPlayer;
            boxes[index].innerText = currentPlayer;
            if (currentPlayer === "X") {
                currentPlayer = "0";
            } else {
                currentPlayer = "X";
            }
            current.innerText = `current player:    ${currentPlayer}`;
            boxes[index].classList.add("pointer-events-none");
            gameOver();
        }
    });
});

restart.addEventListener("click", init);
