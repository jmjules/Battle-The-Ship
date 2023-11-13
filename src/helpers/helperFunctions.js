

const GRID_WIDTH = 10

const CARRIER_LENGTH = 5        //1
const BATTLESHIP_LENGTH = 4     //1
const CRUISER_LENGTH = 3        //2
const DESTROYER_LENGTH = 2      //2
const SUBMARINE_LENGTH = 1      //2


export function generateNewBoard() {
    let tempBoard = [];
    for (let i = 0; i < GRID_WIDTH; i++) {
        tempBoard.push([])
        for (let j = 0; j < GRID_WIDTH; j++) {
            tempBoard[i].push("~")
        }
    }

    placeShips(tempBoard);

    return tempBoard;

}

function placeShips(board) {
    let freeCells = [];
    for (let i = 0; i < GRID_WIDTH; i++) {
        freeCells.push([])
        for (let j = 0; j < GRID_WIDTH; j++) {
            freeCells[i].push(10 * i + j + 1)
        }
    }
    
    placeShip(freeCells, CARRIER_LENGTH)
    placeShip(freeCells, BATTLESHIP_LENGTH)
    placeShip(freeCells, CRUISER_LENGTH)
    placeShip(freeCells, CRUISER_LENGTH)
    placeShip(freeCells, DESTROYER_LENGTH)
    placeShip(freeCells, DESTROYER_LENGTH)
    placeShip(freeCells, SUBMARINE_LENGTH)
    placeShip(freeCells, SUBMARINE_LENGTH)

    // console.log(freeCells);


    for (let m = 0; m < GRID_WIDTH; m++) {
        for (let n = 0; n < GRID_WIDTH; n++) {
            if (freeCells[m][n] === "X") {
                board[m][n] = "X"
            }
        }
        
    }
}

function placeShip(arr, shipSize) {
    let allFree = false
    let direction
    let x
    let y

    while (!allFree) {
        direction = getRandomInt(2)
        x = getRandomInt(GRID_WIDTH - shipSize * (1-direction))
        y = getRandomInt(GRID_WIDTH - shipSize * direction) 

        for (let i = 0; i < shipSize; i++) {
            let currentCellContent = arr[y + (i * direction)][x+(i * (1 - direction))]
            if (currentCellContent === "X") {
                allFree = false
                break
            }
            allFree = true
        }
    }

    // console.log(direction, x, y);
    for (let i = 0; i < shipSize; i++) {
        arr[y + (i * direction)][x+(i * (1 - direction))] = "X"
        
    }
    
}



export function compTurn() {
    let x = getRandomInt(GRID_WIDTH)
    let y = getRandomInt(GRID_WIDTH)

    return [x, y]
}

export function attackPlayerCell(x, y) {
    let chosenCell = x * 10 + y + 1
    let cell = document.querySelector("#player" + chosenCell) 

    cell.classList.add("mehit")
    console.log(cell);
}



function getRandomInt(max) {
    let min = 0
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive 
  }