
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
    let cellsArray = Array.from(cells);

    if (caseIndex[0] == caseIndex[3] && caseIndex[3] == 2 && caseIndex[6] !== 1 || caseIndex[6] == caseIndex[3] && caseIndex[3] == 2 && caseIndex[0] !== 1 || caseIndex[0] == caseIndex[6] && caseIndex[6] == 2 && caseIndex[3] !== 1) {
        //debut win
        if (caseIndex[0] == caseIndex[6] && caseIndex[6] == 2) {
            var selectedCell = cellsArray[3]
        }else if(caseIndex[0] == 2){
            var selectedCell = cellsArray[6]
        }else{
            var selectedCell = cellsArray[0]
        }
        
        selectedCell.innerHTML = '<img src="./img/croix.png" width="50" height="50">';
        let index = selectedCell.getAttribute("data-cell-index");
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
    }else if(caseIndex[1] == caseIndex[4] && caseIndex[4] == 2 && caseIndex[7] !== 1 || caseIndex[7] == caseIndex[4] && caseIndex[4] == 2 && caseIndex[1] !== 1 || caseIndex[1] == caseIndex[7] && caseIndex[7] == 2 && caseIndex[4] !== 1){
        
        if (caseIndex[1] == caseIndex[7] && caseIndex[7] == 2) {
            var selectedCell = cellsArray[4]
        }else if(caseIndex[1] == 2){
            var selectedCell = cellsArray[7]
        }else{
            var selectedCell = cellsArray[1]
        }
        
        selectedCell.innerHTML = '<img src="./img/croix.png" width="50" height="50">';
        let index = selectedCell.getAttribute("data-cell-index");
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
    }else if(caseIndex[2] == caseIndex[5] && caseIndex[5] == 2 && caseIndex[8] !== 1 || caseIndex[8] == caseIndex[5] && caseIndex[5] == 2 && caseIndex[2] !== 1 || caseIndex[2] == caseIndex[8] && caseIndex[8] == 2 && caseIndex[5] !== 1){
       
        if (caseIndex[2] == caseIndex[8] && caseIndex[8] == 2) {
            var selectedCell = cellsArray[5]
        }else if(caseIndex[2] == 2){
            var selectedCell = cellsArray[8]
        }else{
            var selectedCell = cellsArray[2]
        }

        selectedCell.innerHTML = '<img src="./img/croix.png" width="50" height="50">';
        let index = selectedCell.getAttribute("data-cell-index");
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
    }else if(caseIndex[0] == caseIndex[1] && caseIndex[1] == 2 && caseIndex[2] !== 1 || caseIndex[2] == caseIndex[1] && caseIndex[1] == 2 && caseIndex[0] !== 1 || caseIndex[0] == caseIndex[2] && caseIndex[2] == 2 && caseIndex[1] !== 1){
        
        if (caseIndex[0] == caseIndex[2] && caseIndex[2] == 2) {
            var selectedCell = cellsArray[1]
        }else if(caseIndex[0] == 2){
            var selectedCell = cellsArray[2]
        }else{
            var selectedCell = cellsArray[0]
        }

        selectedCell.innerHTML = '<img src="./img/croix.png" width="50" height="50">';
        let index = selectedCell.getAttribute("data-cell-index");
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
    }else if(caseIndex[3] == caseIndex[4] && caseIndex[4] == 2 && caseIndex[5] !== 1 || caseIndex[5] == caseIndex[4] && caseIndex[4] == 2 && caseIndex[3] !== 1 || caseIndex[3] == caseIndex[5] && caseIndex[5] == 2 && caseIndex[4] !== 1){
        
        if (caseIndex[3] == caseIndex[5] && caseIndex[5] == 2) {
            var selectedCell = cellsArray[4]
        }else if(caseIndex[3] == 2){
            var selectedCell = cellsArray[5]
        }else{
            var selectedCell = cellsArray[3]
        }

        selectedCell.innerHTML = '<img src="./img/croix.png" width="50" height="50">';
        let index = selectedCell.getAttribute("data-cell-index");
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
    }else if(caseIndex[6] == caseIndex[7] && caseIndex[7] == 2 && caseIndex[8] !== 1 || caseIndex[8] == caseIndex[7] && caseIndex[7] == 2 && caseIndex[6] !== 1 || caseIndex[6] == caseIndex[8] && caseIndex[8] == 2 && caseIndex[7] !== 1){
        
        if (caseIndex[6] == caseIndex[8] && caseIndex[8] == 2) {
            var selectedCell = cellsArray[7]
        }else if(caseIndex[6] == 2){
            var selectedCell = cellsArray[8]
        }else{
            var selectedCell = cellsArray[6]
        }

        selectedCell.innerHTML = '<img src="./img/croix.png" width="50" height="50">';
        let index = selectedCell.getAttribute("data-cell-index");
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
    }else if(caseIndex[0] == caseIndex[4] && caseIndex[4] == 2 && caseIndex[8] !== 1 || caseIndex[8] == caseIndex[4] && caseIndex[4] == 2 && caseIndex[0] !== 1 || caseIndex[0] == caseIndex[8] && caseIndex[8] == 2 && caseIndex[4] !== 1){
        
        if (caseIndex[0] == caseIndex[8] && caseIndex[8] == 2) {
            var selectedCell = cellsArray[4]
        }else if(caseIndex[0] == 2){
            var selectedCell = cellsArray[8]
        }else{
            var selectedCell = cellsArray[0]
        }

        selectedCell.innerHTML = '<img src="./img/croix.png" width="50" height="50">';
        let index = selectedCell.getAttribute("data-cell-index");
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
    }else if(caseIndex[2] == caseIndex[4] && caseIndex[4] == 2 && caseIndex[6] !== 1 || caseIndex[6] == caseIndex[4] && caseIndex[4] == 2 && caseIndex[2] !== 1 || caseIndex[2] == caseIndex[6] && caseIndex[6] == 2 && caseIndex[4] !== 1){
        
        if (caseIndex[2] == caseIndex[6] && caseIndex[6] == 2) {
            var selectedCell = cellsArray[4]
        }else if(caseIndex[2] == 2){
            var selectedCell = cellsArray[6]
        }else{
            var selectedCell = cellsArray[2]
        }

        selectedCell.innerHTML = '<img src="./img/croix.png" width="50" height="50">';
        let index = selectedCell.getAttribute("data-cell-index");
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
    }else if(caseIndex[0] == caseIndex[3] && caseIndex[3] == 1 && caseIndex[6] !== 2 || caseIndex[6] == caseIndex[3] && caseIndex[3] == 1 && caseIndex[0] !== 2 || caseIndex[0] == caseIndex[6] && caseIndex[6] == 1 && caseIndex[3] !== 2) {
        // debut defense
        if (caseIndex[0] == caseIndex[6] && caseIndex[6] == 1) {
            var selectedCell = cellsArray[3]
        }else if(caseIndex[0] == 1){
            var selectedCell = cellsArray[6]
        }else{
            var selectedCell = cellsArray[0]
        }

        selectedCell.innerHTML = '<img src="./img/croix.png" width="50" height="50">';
        let index = selectedCell.getAttribute("data-cell-index");
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
    }else if(caseIndex[1] == caseIndex[4] && caseIndex[4] == 1 && caseIndex[7] !== 2 || caseIndex[7] == caseIndex[4] && caseIndex[4] == 1 && caseIndex[1] !== 2 || caseIndex[1] == caseIndex[7] && caseIndex[7] == 1 && caseIndex[4] !== 2){
 
        if (caseIndex[1] == caseIndex[7] && caseIndex[7] == 1) {
            var selectedCell = cellsArray[4]
        }else if(caseIndex[1] == 1){
            var selectedCell = cellsArray[7]
        }else{
            var selectedCell = cellsArray[1]
        }

        selectedCell.innerHTML = '<img src="./img/croix.png" width="50" height="50">';
        let index = selectedCell.getAttribute("data-cell-index");
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
    }else if(caseIndex[2] == caseIndex[5] && caseIndex[5] == 1 && caseIndex[8] !== 2 || caseIndex[8] == caseIndex[5] && caseIndex[5] == 1 && caseIndex[2] !== 2 || caseIndex[2] == caseIndex[8] && caseIndex[8] == 1 && caseIndex[5] !== 2){
       
        if (caseIndex[2] == caseIndex[8] && caseIndex[8] == 1) {
            var selectedCell = cellsArray[5]
        }else if(caseIndex[2] == 1){
            var selectedCell = cellsArray[8]
        }else{
            var selectedCell = cellsArray[2]
        }

        selectedCell.innerHTML = '<img src="./img/croix.png" width="50" height="50">';
        let index = selectedCell.getAttribute("data-cell-index");
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
    }else if(caseIndex[0] == caseIndex[1] && caseIndex[1] == 1 && caseIndex[2] !== 2 || caseIndex[2] == caseIndex[1] && caseIndex[1] == 1 && caseIndex[0] !== 2 || caseIndex[0] == caseIndex[2] && caseIndex[2] == 1 && caseIndex[1] !== 2){
        
        if (caseIndex[0] == caseIndex[2] && caseIndex[2] == 1) {
            var selectedCell = cellsArray[1]
        }else if(caseIndex[0] == 1){
            var selectedCell = cellsArray[2]
        }else{
            var selectedCell = cellsArray[0]
        }

        selectedCell.innerHTML = '<img src="./img/croix.png" width="50" height="50">';
        let index = selectedCell.getAttribute("data-cell-index");
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
    }else if(caseIndex[3] == caseIndex[4] && caseIndex[4] == 1 && caseIndex[5] !== 2 || caseIndex[5] == caseIndex[4] && caseIndex[4] == 1 && caseIndex[3] !== 2 || caseIndex[3] == caseIndex[5] && caseIndex[5] == 1 && caseIndex[4] !== 2){
        
        if (caseIndex[3] == caseIndex[5] && caseIndex[5] == 1) {
            var selectedCell = cellsArray[4]
        }else if(caseIndex[3] == 1){
            var selectedCell = cellsArray[5]
        }else{
            var selectedCell = cellsArray[3]
        }

        selectedCell.innerHTML = '<img src="./img/croix.png" width="50" height="50">';
        let index = selectedCell.getAttribute("data-cell-index");
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
    }else if(caseIndex[6] == caseIndex[7] && caseIndex[7] == 1 && caseIndex[8] !== 2 || caseIndex[8] == caseIndex[7] && caseIndex[7] == 1 && caseIndex[6] !== 2 || caseIndex[6] == caseIndex[8] && caseIndex[8] == 1 && caseIndex[7] !== 2){
        
        if (caseIndex[6] == caseIndex[8] && caseIndex[8] == 1) {
            var selectedCell = cellsArray[7]
        }else if(caseIndex[6] == 1){
            var selectedCell = cellsArray[8]
        }else{
            var selectedCell = cellsArray[6]
        }

        selectedCell.innerHTML = '<img src="./img/croix.png" width="50" height="50">';
        let index = selectedCell.getAttribute("data-cell-index");
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
    }else if(caseIndex[0] == caseIndex[4] && caseIndex[4] == 1 && caseIndex[8] !== 2 || caseIndex[8] == caseIndex[4] && caseIndex[4] == 1 && caseIndex[0] !== 2 || caseIndex[0] == caseIndex[8] && caseIndex[8] == 1 && caseIndex[4] !== 2){
        
        if (caseIndex[0] == caseIndex[8] && caseIndex[8] == 1) {
            var selectedCell = cellsArray[4]
        }else if(caseIndex[0] == 1){
            var selectedCell = cellsArray[8]
        }else{
            var selectedCell = cellsArray[0]
        }

        selectedCell.innerHTML = '<img src="./img/croix.png" width="50" height="50">';
        let index = selectedCell.getAttribute("data-cell-index");
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
    }else if(caseIndex[2] == caseIndex[4] && caseIndex[4] == 1 && caseIndex[6] !== 2 || caseIndex[6] == caseIndex[4] && caseIndex[4] == 1 && caseIndex[2] !== 2 || caseIndex[2] == caseIndex[6] && caseIndex[6] == 1 && caseIndex[4] !== 2){
        
        if (caseIndex[2] == caseIndex[6] && caseIndex[6] == 1) {
            var selectedCell = cellsArray[4]
        }else if(caseIndex[2] == 1){
            var selectedCell = cellsArray[6]
        }else{
            var selectedCell = cellsArray[2]
        }

        selectedCell.innerHTML = '<img src="./img/croix.png" width="50" height="50">';
        let index = selectedCell.getAttribute("data-cell-index");
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
    }else{
        modeEasy()
    }

    

   
   

    
}





