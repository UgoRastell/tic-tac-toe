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
            if (player !== selectPlayer) {
                element.innerHTML = '<img src="./img/rond.png" width="50" height="50">';
                
                player = 0;
            }
                modeEasy(index,element)
                console.log(caseIndex)

            if (index !== -1) {
                element.classList.add("lock");
                caseIndex[index] = 1;
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
        
        if (player == selectPlayer) {
            var text = document.createTextNode("Le player 1 à gagné");
        }else{
            var text = document.createTextNode("Le player 2 à gagné");
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

function modeEasy(index,element) {
    

    if (caseIndex[index] == 0) {
        const iaDebile = Math.floor(Math.random() * 9);
        console.log(caseIndex[iaDebile])
        caseIndex[iaDebile] = 2
        element.innerHTML = '<img src="./img/rond.png" width="50" height="50">';
        player = selectPlayer;
    }

    
    
}


