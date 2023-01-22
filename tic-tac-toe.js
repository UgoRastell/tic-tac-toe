
let player = 1


if (localStorage.getItem('Taille') == 1) {
    var caseIndex =  [0,0,0,0,
                      0,0,0,0,
                      0,0,0,0,
                      0,0,0,0];
    const css = `
    display: grid;
    grid-template-columns: repeat(4, auto);
    width: 406px;
    margin: 50px auto;`;
    const element = document.querySelector('.game--container');

    element.style.cssText = css;
    for (let index = 0; index <= 15; index++) {
        // create a new div element
        var div = document.createElement("div");
        div.setAttribute("data-cell-index",index)
        div.classList.add("cell");
        
        document.getElementById("game--container").appendChild(div);
    }
    var cells = document.querySelectorAll(".cell");
}else if(localStorage.getItem('Taille') == 2){
    var caseIndex =  [0,0,0,0,0,
                        0,0,0,0,0,
                        0,0,0,0,0,
                        0,0,0,0,0,
                        0,0,0,0,0]
    const css = `
    display: grid;
    grid-template-columns: repeat(5, auto);
    width: 506px;
    margin: 50px auto;`;
    const element = document.querySelector('.game--container');
    element.style.cssText = css;

    for (let index = 0; index <= 24; index++) {
        // create a new div element
        var div = document.createElement("div");
        div.setAttribute("data-cell-index",index)
        div.classList.add("cell");
        
        document.getElementById("game--container").appendChild(div);
    }
    var cells = document.querySelectorAll(".cell");
}else{
    var caseIndex =  [0,0,0,
                      0,0,0,
                      0,0,0]
    const css = `
    display: grid;
    grid-template-columns: repeat(3, auto);
    width: 306px;
    margin: 50px auto;`;
    const element = document.querySelector('.game--container');
    element.style.cssText = css;

    for (let index = 0; index <= 8; index++) {
        // create a new div element
        var div = document.createElement("div");
        div.setAttribute("data-cell-index",index)
        div.classList.add("cell");
        
        document.getElementById("game--container").appendChild(div);
    }
    var cells = document.querySelectorAll(".cell");
}

if (localStorage.getItem('Tour') == 2) {
    modeEasy()
}

cells.forEach(element => {
    element.addEventListener('click', function (event) {
        
        const index = element.getAttribute("data-cell-index");
        console.log("test")
        if (caseIndex[index] !==0) {
            console.log("Cette case est occupée")
            
        }else{
            if (player == 1) {
                element.innerHTML = '<img src="./img/rond.png" width="50" height="50">';
                caseIndex[index] = 1;
                win()
                player = 2;
            }

            if (player == 2 && localStorage.getItem('Difficulty') == 2) {
                console.log("impossible")
                modeImpossible()
                player = 1;

            }

            if (player == 2 && localStorage.getItem('Difficulty') == 1) {
                console.log("easy")
                modeEasy()
                player = 1;

            }

            if (index !== -1) {
                element.classList.add("lock");
            }

            if (index !== -1) {
                element.classList.add("lock");
            }
            
        }
    });
});

function resetGame() {
    window.location.reload();
}


function win() {
    var status = document.getElementById("game-status");
    var text = document.createTextNode("Le joueur");

    if( (caseIndex[0] == caseIndex[1] && caseIndex[1] == caseIndex[2] && caseIndex[0] !== 0) || 
        (caseIndex[3] == caseIndex[4] && caseIndex[4] == caseIndex[5] && caseIndex[3] !== 0) ||
        (caseIndex[6] == caseIndex[7] && caseIndex[7] == caseIndex[8] && caseIndex[6] !== 0) ||
        (caseIndex[0] == caseIndex[4] && caseIndex[4] == caseIndex[8] && caseIndex[0] !== 0) ||
        (caseIndex[2] == caseIndex[4] && caseIndex[4] == caseIndex[6] && caseIndex[2] !== 0) ||
        (caseIndex[0] == caseIndex[3] && caseIndex[3] == caseIndex[6] && caseIndex[0] !== 0) ||
        (caseIndex[1] == caseIndex[4] && caseIndex[4] == caseIndex[7] && caseIndex[1] !== 0) ||
        (caseIndex[2] == caseIndex[5] && caseIndex[5] == caseIndex[8] && caseIndex[2] !== 0)) {

        for (element in caseIndex) {
            caseIndex[element] = 1;
        }
        
        if (player !== 2) {
            var text = document.createTextNode("Le player 1 à gagné");
        }else{
            var text = document.createTextNode("L'ia à gagné");
        }
    
        status.appendChild(text);
    }else{
        if (caseIndex.includes(0) ) {
        
        }else{
            var text = document.createTextNode("Égalité");
            status.appendChild(text);
        }
    }

    
}

function modeEasy() {
    // On convertit la NodeList en tableau
    const cellsArray = Array.from(cells);

    // On récupère la liste des cases encore disponibles
    const availableCells = cellsArray.filter((cell, index) => caseIndex[index] === 0);

    // Si il n'y a plus de cases disponibles, on ne fait rien
    if (availableCells.length === 0) return;

    // On choisit une case disponible au hasard
    const randomIndex = Math.floor(Math.random() * availableCells.length);
    const randomCell = availableCells[randomIndex];

    // On joue sur cette case
    randomCell.innerHTML = '<img src="./img/croix.png" width="50" height="50">';
    const index = randomCell.getAttribute("data-cell-index");
    caseIndex[index] = 2;
    console.log(caseIndex)
    win()
    player = 1;
    
}


function modeImpossible() {
    

}





