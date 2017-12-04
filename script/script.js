var startbtn = document.getElementById('startbtn');
startbtn.addEventListener('click', startGame, false);









function startGame() {
    

    
    startbtn.removeEventListener('click',startGame, false);
    
    var moveCount = 0;
    elMoves = document.getElementById('moves');
    var score = 0;
    var moveAvailible = true;
    var elScore = document.getElementById('score');
    var elBoard = document.getElementById('board');
    tilesimg = [
        'cat1.jpg',
        'cat2.jpg',
        'cat3.jpg',
        'cat4.jpg',
        'cat5.jpg',
        'cat6.jpeg',
    ]
    
    var tiles = [];
    var takenTiles = [];
    
    
    if (score == 6) {
        elBoard.innerHTML = '<div>You Won!</div>';
    }
    
    
    //randomizing tiles
    for(i=0; i<12; i++) {
        tiles.push(Math.floor(i/2));
    }
    
    for(i=0; i<12; i++) {
        var swap = Math.floor(Math.random()*i);
        var tmp = tiles[i];
        tiles[i] = tiles[swap];
        tiles[swap] = tmp;
    }
    
    console.log(tiles);
    
    for (i=0; i<12; i++) {
        
        var tile = document.createElement('div');
        tile.className+='tile';
        tile.setAttribute('data', tiles[i]);
        tile.addEventListener('click', function() {
            checkTile(this);
        }, false);
        elBoard.appendChild(tile);
        }
        
    
    
    
    function checkTile(element) {
        var attr = element.getAttribute('data');
        console.log(attr);
        if (element.hasAttribute('data', 'checked') == true) {
        
       if (moveAvailible) {
            takenTiles.push(element);
            element.style.backgroundImage = 'url(img/'+tilesimg[element.getAttribute('data')]+')';
        
        if (takenTiles.length==2) {
            moveAvailible = false;
            if (takenTiles[0].getAttribute('data') == takenTiles[1].getAttribute('data')) {
                        setTimeout(function() {
                        deleteTiles()}, 1000);
                    } else {
                        setTimeout(function() {
                        resetTiles()}, 1000);
                    }
            moveCount++;
            elMoves.textContent = 'Moves:' + moveCount;
            console.log(takenTiles);
            
 
                }
            
            }
        }
    }
    
    function deleteTiles() {
        takenTiles[0].setAttribute('data', 'checked');
        takenTiles[1].setAttribute('data', 'checked');
            takenTiles[0].style.backgroundImage = '';
        takenTiles[1].style.backgroundImage = '';
        takenTiles[0].style.background = '#fff';
        takenTiles[1].style.background = '#fff';
        takenTiles = [];
        moveAvailible = true;
        score ++;
        elScore.textContent = "Score: " + score;
                       
    if (score == 6) {
        elBoard.innerHTML = '';
        var winmsg = document.createElement('h2');
        winmsg.textContent = 'You won!'
    }
    
    }
    
    function resetTiles() {
        takenTiles[0].style.backgroundImage = '';
        takenTiles[1].style.backgroundImage = '';
        takenTiles = [];
        moveAvailible = true;
    }


    
    
        var resetbtn = document.getElementById('resetbtn');
        resetbtn.addEventListener('click',resetGame, false);

        function resetGame() {
        elBoard.innerHTML = '';
        elMoves.textContent = "Moves: 0";
        elScore.textContent = "Score: 0";
        startGame();
        }
  
}
