var playTable = new Array();
var row = 0, col = 0, rowPosit, colPosit, playElementValue, sorted = 0;

for (; row < 4; row++) {
    playTable[row] = new Array();
    for (; col < 4; col++) {
        playTable[row][col] = 0;
    }
}

function checkSquare(nrow, ncol) {
    if (rowPosit <= nrow && colPosit <= ncol) {
        for (row = 0; row < 2; row++) {
            for (col = 2; col < 4; col++) {
                if (playTable[row][col] == playElementValue && row != rowPosit && col != colPosit) {
                    sorted = 1;
                }
            }
        }
    }
}

for (var elementCount = 0; elementCount < 8; elementCount++) {
    sorted = 0;
    do {
        rowPosit = Math.floor((Math.random() * 4) + 1) - 1;
        colPosit = Math.floor((Math.random() * 4) + 1) - 1;
    } while (playTable[rowPosit][colPosit] == 0);
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
    playTable[rowPosit][colPosit] = playElementValue;
}
