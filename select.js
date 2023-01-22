let difficulty = 0
let taille = 0
let tour = 0

function selectTour(tour) {

    if (tour == 1) {
        localStorage.setItem('Tour', tour);
    }

    if (tour == 2) {
        localStorage.setItem('Tour', tour);
    }

}
function selectDifficulty(difficulty) {

    if (difficulty == 1) {
        localStorage.setItem('Difficulty', difficulty);
    }

    if (difficulty == 2) {
        localStorage.setItem('Difficulty', difficulty);
    }

}

function selectTaille(taille) {

    if (taille == 1) {
        localStorage.setItem('Taille', taille);
    }else if (taille == 2) {
        localStorage.setItem('Taille', taille);
    }else{
        localStorage.removeItem('Taille');
    }

}

function selectJouer() {
    document.location.href = "http://127.0.0.1:5500/tic-tac-toe.html";
}


selectLigne(taille)