var playTable = new Array();

for ( var row = 0 ; row < 4 ; row++) {

    playTable[row] = new Array();
    for ( var col = 0 ; col < 4; col++) {
        playTable[row][col]=0;
    }
}

var rowPosit, colPosit, playElementValue, sorted = 0;

for( var elementCount = 0 ; elementCount < 8 ; elementCount++) {
    do {
        rowPosit = Math.floor((Math.random() * 4) + 1) - 1;
        colPosit = Math.floor((Math.random() * 4) + 1) - 1;
    } while ( playTable[rowPosit][colPosit] == 0 );


    do {

        sorted = 0;
        playElementValue = Math.floor((Math.random() * 4) + 1);

        // check if the randow generated number is NOT in the row already
        for ( row = rowPosit, col = 0 ; col < 4 ; col++) {
            if( playTable[row][col] == playElementValue && row != rowPosit && col != colPosit ) {
                sorted = 1;
            }
            continue;
        }

        // check if the randow generated number is NOT in the col already
        for ( col = colPosit, row = 0 ; row < 4 ; row++) {
            if( playTable[row][col] == playElementValue && row != rowPosit && col != colPosit) {
                sorted = 1;
            }
            continue;
        }

        //4 checks for each 2x2 block in the 4x4 playtable - check if the number is already there
        if( rowPosit <= 1 && colPosit <=1 ) {
            for ( row = 0 ; row < 2 ; row++) {
                for( col = 0 ; col < 2 ; col++ ) {
                    if (playTable[row][col] == playElementValue && row != rowPosit && col != colPosit) {
                        sorted = 1;
                    }
                    continue;
                }
            }
        }

        if( rowPosit <= 1 && colPosit <= 3 ) {
            for ( row = 0 ; row < 2 ; row++) {
                for( col = 2 ; col < 4 ; col++ ) {
                    if (playTable[row][col] == playElementValue && row != rowPosit && col != colPosit) {
                        sorted = 1;
                    }
                    continue;
                }
            }
        }

        if( rowPosit <= 3 && colPosit <= 1 ) {
            for ( row = 2 ; row < 4 ; row++) {
                for( col = 0 ; col < 2 ; col++ ) {
                    if (playTable[row][col] == playElementValue && row != rowPosit && col != colPosit) {
                        sorted = 1;
                    }
                    continue;
                }
            }
        }

        if( rowPosit <= 3 && colPosit <= 3 ) {
            for ( row = 2 ; row < 4 ; row++) {
                for( col = 2 ; col < 4 ; col++ ) {
                    if (playTable[row][col] == playElementValue && row != rowPosit && col != colPosit) {
                        sorted = 1;
                    }
                    continue;
                }
            }
        }

    } while( sorted = 1 );

    playTable[rowPosit][colPosit] = playElementValue;
}


