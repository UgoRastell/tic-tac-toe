let difficulty = 0
let taille = 0
let tour = 0
let ligne = 0

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
    document.location.href = "http://vps-e80a5a0d.vps.ovh.net/tic-tac-toe/tic-tac-toe.html";
}


function selectLigne(ligne){
    if (ligne == 1) {
        localStorage.setItem('Ligne', ligne);
        console.log("test")
    }

    if (ligne == 2) {
        localStorage.setItem('Ligne', ligne);
    }
}

function selectParametre(){
    window.location.href = 'http://vps-e80a5a0d.vps.ovh.net/tic-tac-toe/';
}