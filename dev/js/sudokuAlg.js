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


        for ( row = rowPosit, col = 0 ; col < 4 ; col++) {
            if( playTable[row][col] == playElementValue && row != rowPosit && col != colPosit ) {
                sorted = 1;
            }
        }

        for ( col = colPosit, row = 0 ; row < 4 ; row++) {
            if( playTable[row][col] == playElementValue && row != rowPosit && col != colPosit) {
                sorted = 1;
            }
        }

        for ( )

    } while( sorted = 1 );

    playTable[rowPosit][colPosit] = playElementValue;

}
