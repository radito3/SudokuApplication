var playTable = new Array();
var row = 0, col = 0, rowPosit, colPosit, playElementValue, sorted = 0;

//creates a 2dimensional array, filled wit zero-s
for ( row = 0 ; row < 4 ; row++) {
    playTable[row] = new Array();
    for ( col = 0 ; col < 4; col++) {
        playTable[row][col] = 0;
    }
}

//checks the 2x2 square for mathing number
var roW = 0, coL = 0;
function checkSquare ( nrow, ncol, rowPosit, colPosit ) {
    if ( rowPosit <= nrow && colPosit <= ncol ) {
        for ( roW = nrow - 1 ; roW <= nrow; roW++) {
            for ( coL = ncol - 1 ; coL <= ncol ; coL++) {
                if (playTable[roW][coL] == playElementValue && row != rowPosit && col != colPosit) {
                    sorted = 1;
                }
            }
        }
    }
}

var rowHelper, colHelper;

//Generates the 2dimensional table
for ( var elementCount = 0 ; elementCount < 16 ; elementCount++ ) {

    sorted = 0;

    //generates the random position and checks if there is a number there already
    do {
        rowPosit = Math.floor((Math.random() * 4) + 1) - 1;
        colPosit = Math.floor((Math.random() * 4) + 1) - 1;
    } while(playTable[rowPosit][colPosit] != 0);

    do {

        sorted = 0;

        //generate a random number from 1-4
        playElementValue = Math.floor((Math.random() * 4) + 1);

        // check if the random generated number is NOT in the row already
        for ( row = rowPosit, col = 0 ; col < 4 ; col++ ) {
            if( playTable[row][col] == playElementValue && col != colPosit ) {
                sorted = 1;
                break;
            }
        }

        // check if the random generated number is NOT in the col already
        for ( col = colPosit, row = 0 ; row < 4 ; row++ ) {
            if( playTable[row][col] == playElementValue && row != rowPosit ) {
                sorted = 1;
                break;
            }
        }

        //4 checks for each 2x2 block in the 4x4 playtable - check if the number is already there
        checkSquare(1, 1, rowPosit, colPosit);
        checkSquare(1, 3, rowPosit, colPosit);
        checkSquare(3, 1, rowPosit, colPosit);
        checkSquare(3, 3, rowPosit, colPosit);
    } while (sorted == 1);

    //after all the checks have passed, the value is assigned to the table
    playTable[rowPosit][colPosit] = playElementValue;
}

var inputRow, inputCol, elementValue = 0;

//get elements for the html 4x4 Sudoku table
function getTableElements() {
    for ( var id = 0, inputRow = 0, inputCol = 0 ; id < 4 ; id++, inputCol++ ) {
        elementValue = playTable[inputRow][inputCol];
        document.getElementById(id.toString()).innerHTML = elementValue;
    }

    for ( id = 4, inputRow = 1, inputCol = 0 ; id < 8 ; id++, inputCol++) {
        elementValue = playTable[inputRow][inputCol];
        document.getElementById(id.toString()).innerHTML = elementValue;
    }

    for ( id = 8, inputRow = 2, inputCol = 0 ; id < 12 ; id++, inputCol++) {
        elementValue = playTable[inputRow][inputCol];
        document.getElementById(id.toString()).innerHTML = elementValue;
    }

    for ( id = 12, inputRow = 3, inputCol = 0 ; id < 16 ; id++, inputCol++) {
        elementValue = playTable[inputRow][inputCol];
        document.getElementById(id.toString()).innerHTML = elementValue;
    }

}
