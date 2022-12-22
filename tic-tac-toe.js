const cells = document.querySelectorAll(".cell");

let selectPlayer = 1
let player = selectPlayer;
const caseIndex =  [0,0,0,
                    0,0,0,
                    0,0,0]
cells.forEach(element => {
    element.addEventListener('click', function (event) {

        const index = element.getAttribute("data-cell-index");
        
        if (caseIndex[index] !==0) {
            console.log("Cette case est occupée")
        }else{
            if (player == selectPlayer) {
                element.innerHTML = '<img src="./img/rond.png" width="50" height="50">';
                caseIndex[index] = 1;
                player = 0;
            }else{
                element.innerHTML = '<img src="./img/croix.png" width="50" height="50">';
                caseIndex[index] = 2;
                player = selectPlayer;
            }

            if (index !== -1) {
                element.classList.add("lock");
                console.log(caseIndex);
            }
            win()
            
            
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
        (caseIndex[3] == caseIndex[4] && caseIndex[4] == caseIndex[5] && caseIndex[3] !== 0)||
        (caseIndex[6] == caseIndex[7] && caseIndex[7] == caseIndex[8] && caseIndex[6] !== 0)||
        (caseIndex[0] == caseIndex[4] && caseIndex[4] == caseIndex[8] && caseIndex[0] !== 0) ||
        (caseIndex[2] == caseIndex[4] && caseIndex[4] == caseIndex[6] && caseIndex[2] !== 0) ||
        (caseIndex[0] == caseIndex[3] && caseIndex[3] == caseIndex[6] && caseIndex[0] !== 0) ||
        (caseIndex[1] == caseIndex[4] && caseIndex[4] == caseIndex[7] && caseIndex[1] !== 0) ||
        (caseIndex[2] == caseIndex[6] && caseIndex[6] == caseIndex[8] && caseIndex[2] !== 0)) {

        for (element in caseIndex) {
            caseIndex[element] = 1;
        }
        
        if (player !== selectPlayer) {
            var text = document.createTextNode("Le player 1 à gagné");
        }else{
            var text = document.createTextNode("Le player 2 à gagné");
        }
    
        status.appendChild(text);
    }else{
        if (caseIndex.includes(0) ) {
        
        }else{
            var text = document.createTextNode("Égalité");
            status.appendChild(status);
        }
    }
}

function modeEasy() {
    
}


