var playTable = new Array();
var row = 0, col = 0, rowPosit, colPosit, playElementValue, sorted = 0;

for ( ; row < 4 ; row++) {
    playTable[row] = new Array();
    for (; col < 4; col++) {
        playTable[row][col] = 0;
    }
}

//checks the 2x2 square for mathing number
function checkSquare ( nrow, ncol ) {
    if ( rowPosit <= nrow && colPosit <= ncol ) {
        for (row = 0; row < 2; row++) {
            for (col = 2; col < 4; col++) {
                if (playTable[row][col] == playElementValue && row != rowPosit && col != colPosit) {
                    sorted = 1;
                }
            }
        }
    }
}

//Generates the twodimensional table
for ( var elementCount = 0; elementCount < 16; elementCount++) {

    sorted = 0;

    //generates the random position and checks if there is a number there already
    do {
        rowPosit = Math.floor((Math.random() * 4) + 1) - 1;
        colPosit = Math.floor((Math.random() * 4) + 1) - 1;
    } while (playTable[rowPosit][colPosit] != 0);

    //checks if the number is not in the column, row or square already
    do {
        sorted = 0;
        playElementValue = Math.floor((Math.random() * 4) + 1);
        // check if the randow generated number is NOT in the row already
        for (row = rowPosit, col = 0; col < 4; col++) {
            if(playTable[row][col] == playElementValue && row != rowPosit && col != colPosit ) {
                sorted = 1;
                break;
            }
        }
        // check if the randow generated number is NOT in the col already
        for (col = colPosit, row = 0; row < 4; row++) {
            if(playTable[row][col] == playElementValue && row != rowPosit && col != colPosit) {
                sorted = 1;
                break;
            }
        }
        //4 checks for each 2x2 block in the 4x4 playtable - check if the number is already there
        checkSquare(1, 1);
        checkSquare(1, 3);
        checkSquare(3, 1);
        checkSquare(3, 3);
    } while (sorted == 1);

    //after all the checks havve passed, the value is assigned to the table
    playTable[rowPosit][colPosit] = playElementValue;
}

var inputRow = 0, inputCol = 0, elementValue = 0;

//get elements for the html 4x4 Sudoku table
function getTableElements() {
    for ( var id = 0, inputRow = 0, inputCol = 0 ; id < 4 ; id++, inputCol++) {
        elementValue = playTable[inputRow][inputCol];
        document.getElementById("0").innerHTML = elementValue;
    }

    for ( id = 4, inputRow = 1, inputCol = 0 ; id < 8 ; id++, inputCol++) {
        elementValue = playTable[inputRow][inputCol];
        document.getElementById("2").innerHTML = elementValue;
    }

    for ( id = 8, inputRow = 2, inputCol = 0 ; id < 12 ; id++, inputCol++) {
        elementValue = playTable[inputRow][inputCol];
        document.getElementById("3").innerHTML = elementValue;
    }

    for ( id = 12, inputRow = 3, inputCol = 0 ; id < 16 ; id++, inputCol++) {
        elementValue = playTable[inputRow][inputCol];
        document.getElementById('4').innerHTML = elementValue;
    }

}
