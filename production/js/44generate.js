var playTable = [], row = 0, col = 0, sChoise, play44;

var easySudokusList = {
    first : {
        id : 1,
        array : [[2, 0, 0, 1], [0, 0, 0, 3], [4, 0, 1, 0], [3, 1, 0, 2]]
    },

    second : {
        id: 2,
        array: [[0, 2, 0, 1], [4, 0, 0, 2], [0, 3, 0, 4], [1, 0, 0, 3]]
    },

    third : {
        id : 3,
        array : [[4, 0, 2, 1], [0, 2, 3, 4], [3, 0, 1, 0], [2, 1, 0, 3]]
    },

    fourth : {
        id : 4,
        array : [[4, 0, 0, 1], [0, 1, 3, 0], [0, 4, 1, 0], [1, 0, 0, 3]]
    },

    fifth : {
        id : 5,
        array: [[3, 0, 0, 1], [4, 0, 0, 2], [0, 3, 1, 0], [0, 4, 2, 0]]
    }
};

var hardSudokusList = {
    sixth : {
        id : 6,
        array: [[0, 0, 4, 0], [0, 2, 0, 3], [2, 0, 0, 0], [0, 4, 0, 1]]
    },

    seventh : {
        id : 7,
        array : [[4, 0, 3, 0], [0, 0, 0, 4], [1, 0, 0, 0], [0, 2, 0, 1]]
    },

    eighth : {
        id : 8,
        array : [[3, 0, 0, 2], [0, 2, 0, 0], [0, 0, 0, 0], [4, 0, 0, 1]]
    },

    nineth : {
        id : 9,
        array : [[2, 0, 0, 1], [0, 0, 0, 0], [4, 0, 1, 0], [3, 1, 0, 2]]
    },

    tenth : {
        id : 10,
        array : [[0, 0, 4, 1], [1, 0, 0, 0], [0, 0, 0, 3], [0, 1, 0, 0]]
    }
};

//creates 2-dimensional array
function createPlayGround() {
    for (row = 0; row < 4; row++) {
        playTable[row] = [];
        for (col = 0; col < 4; col++) {
            playTable[row][col] = 0;
        }
    }
}

//fill the easy sudoku array with sudokos
function easyFill() {
    sChoise = Math.floor(Math.random()*4 + 1) + 1;
    console.log(sChoise);
    createPlayGround();
    switch(sChoise) {
        case 1: fill(easySudokusList.first.array); break;
        case 2: fill(easySudokusList.second.array); break;
        case 3: fill(easySudokusList.third.array); break;
        case 4: fill(easySudokusList.fourth.array); break;
        case 5: fill(easySudokusList.fifth.array); break;
    }
    returnValues();
}

//fill the hard sudoku array with sudokos
function hardFill() {
    sChoise = Math.floor(Math.random()*4 + 6) + 1;
    console.log(sChoise);
    createPlayGround();
    switch(sChoise) {
        case 6: fill(hardSudokusList.sixth.array); break;
        case 7: fill(hardSudokusList.seventh.array); break;
        case 8: fill(hardSudokusList.eighth.array); break;
        case 9: fill(hardSudokusList.nineth.array); break;
        case 10: fill(hardSudokusList.tenth.array); break;
    }
    returnValues();
}

//fills the array with random obj from list with sudokos
function fill() {
    play44 = [];
    for (row = 0; row < 4; row++) {
        play44[row] = [];
        for (col = 0; col < 4; col++) {
            play44[row][col] = 0;
        }
    }
    var objHelper = arguments[0];
    var cols = 0;
    for(var rows = 0 ; rows < 4 ; rows++ ) {
        for( cols = 0 ; cols < 4 ; cols++) {
            console.log(objHelper[rows][cols]);
            play44[rows][cols] = objHelper[rows][cols];
        }
    }
}

//console prints the values of the sudoku;
function printSudoku() {
    for( var sudoku = 0 ; sudoku < 10 ; sudoku++) {
        for (row = 0; row < 4; row++) {
            for (col = 0; col < 4; col++) {
                console.log(playTable[sudoku][row][col]);
            }
        }
    }
}

//alters the html table OK
function returnValues() {

    for ( var id = 0, inputRow = 0, inputCol = 0; id < 4; id++, inputCol++) {
        document.getElementById(id.toString()).innerHTML = play44[inputRow][inputCol];;
    }

    for (id = 4, inputRow = 1, inputCol = 0; id < 8; id++, inputCol++) {
        document.getElementById(id.toString()).innerHTML = play44[inputRow][inputCol];;
    }

    for (id = 8, inputRow = 2, inputCol = 0; id < 12; id++, inputCol++) {
        document.getElementById(id.toString()).innerHTML = play44[inputRow][inputCol];;
    }

    for (id = 12, inputRow = 3, inputCol = 0; id < 16; id++, inputCol++) {
        document.getElementById(id.toString()).innerHTML = play44[inputRow][inputCol];;
    }

}
