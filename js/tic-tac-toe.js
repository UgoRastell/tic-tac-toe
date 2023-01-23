
let player = 1


if (localStorage.getItem('Taille') == 1) {
    var caseIndex =  [0,0,0,0,
                      0,0,0,0,
                      0,0,0,0,
                      0,0,0,0];
    let css = `
    display: grid;
    grid-template-columns: repeat(4, auto);
    width: 406px;
    margin: 50px auto;`;
    let element = document.querySelector('.game--container');

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
    let css = `
    display: grid;
    grid-template-columns: repeat(5, auto);
    width: 506px;
    margin: 50px auto;`;
    let element = document.querySelector('.game--container');
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
    let css = `
    display: grid;
    grid-template-columns: repeat(3, auto);
    width: 306px;
    margin: 50px auto;`;
    let element = document.querySelector('.game--container');
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
        
        let index = element.getAttribute("data-cell-index");
        if (caseIndex[index] !==0) {
            console.log("Cette case est occupée")
            
        }else{
            if (player == 1) {
                element.innerHTML = '<img src="./img/rond.png" width="50" height="50">';
                caseIndex[index] = 1;
                if (localStorage.getItem('Taille') == 1) {
                    win4x4()
                }else if (localStorage.getItem('Taille') == 2) {
                    win5x5()
                }else{
                    win3x3()
                }
                player = 2;
            }

            if (player == 2 && localStorage.getItem('Difficulty') == 2) {
                modeImpossible()
                player = 1;
            }

            if (player == 2 && localStorage.getItem('Difficulty') == 1) {
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
    window.location.href = window.location.href;
}


function modeEasy() {
    // On convertit la NodeList en tableau
    let cellsArray = Array.from(cells);

    // On récupère la liste des cases encore disponibles
    let availableCells = cellsArray.filter((cell, index) => caseIndex[index] === 0);
    // Si il n'y a plus de cases disponibles, on ne fait rien
    if (availableCells.length === 0) return;

    // On choisit une case disponible au hasard
    let randomIndex = Math.floor(Math.random() * availableCells.length);
    let randomCell = availableCells[randomIndex];

    // On joue sur cette case
    randomCell.innerHTML = '<img src="./img/croix.png" width="50" height="50">';
    let index = randomCell.getAttribute("data-cell-index");
    caseIndex[index] = 2;
    console.log(caseIndex)
    if (localStorage.getItem('Taille') == 1) {
        win4x4()
    }else if (localStorage.getItem('Taille') == 2) {
        win5x5()
    }else{
        win3x3()
    }
    player = 1;
    
}


function modeImpossible() {
    var status = document.getElementById("game-status");

    for(let i = 0; i <= 5; i += 3) {
        //ligne horizon 1
        if(caseIndex[i] === caseIndex[i + 1] && caseIndex[i] === 1) {
                
                // On convertit la NodeList en tableau
                let cellsArray = Array.from(cells);

                // On récupère la liste des cases encore disponibles
                let availableCells = cellsArray.filter((cell, index) => caseIndex[index] === 0);
                // On choisit la case 
                let contreCell = availableCells[i];
                console.log(contreCell);
                // On joue sur cette case
                contreCell.innerHTML = '<img src="./img/croix.png" width="50" height="50">';
                let index = contreCell.getAttribute("data-cell-index");
                caseIndex[index] = 2;
                console.log(caseIndex)

                // win ou pas
                if (localStorage.getItem('Taille') == 1) {
                    win4x4()
                }else if (localStorage.getItem('Taille') == 2) {
                    win5x5()
                }else{
                    win3x3()
                }
                player = 1;
                return
        }
      } 
    modeEasy()
}





