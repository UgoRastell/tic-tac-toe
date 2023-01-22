function win3x3(){
    var status = document.getElementById("game-status");
    var text = document.createTextNode("Le joueur");

    // Vérifier les lignes
    for(let i = 0; i <= 6; i += 3) {
      if(caseIndex[i] === caseIndex[i + 1] && caseIndex[i + 1] === caseIndex[i + 2] && caseIndex[i] !== 0) {

        for (element in caseIndex) {
            caseIndex[element] = 1;
        }

        if (player !== 2) {
            var text = document.createTextNode("Le player 1 à gagné");
            status.appendChild(text);
            return
        }else{
            var text = document.createTextNode("L'ia à gagné");
            status.appendChild(text);
            return
        }
      } 
    
    }

    // Vérifier les colonnes
    for(let i = 0; i <= 2; i++) {
      if(caseIndex[i] === caseIndex[i + 3] && caseIndex[i + 3] === caseIndex[i + 6] && caseIndex[i] !== 0) {
        
        for (element in caseIndex) {
            caseIndex[element] = 1;
        }

        if (player !== 2) {
            var text = document.createTextNode("Le player 1 à gagné");
            status.appendChild(text);
            return
        }else{
            var text = document.createTextNode("L'ia à gagné");
            status.appendChild(text);
            return
        }
      }
    
    }

    // Vérifier les diagonales 1
  if(caseIndex[0] === caseIndex[4] && caseIndex[4] === caseIndex[8] && caseIndex[0] !== 0) {
    for (element in caseIndex) {
        caseIndex[element] = 1;
    }

    if (player !== 2) {
        var text = document.createTextNode("Le player 1 à gagné");
        status.appendChild(text);
        return
    }else{
        var text = document.createTextNode("L'ia à gagné");
        status.appendChild(text);
        return
    }
  }
    // Vérifier les diagonales 2
    if(caseIndex[2] === caseIndex[4] && caseIndex[4] === caseIndex[6] && caseIndex[2] !== 0) {
        for (element in caseIndex) {
            caseIndex[element] = 1;
        }

        if (player !== 2) {
            var text = document.createTextNode("Le player 1 à gagné");
            status.appendChild(text);
            return
        }else{
            var text = document.createTextNode("L'ia à gagné");
            status.appendChild(text);
            return
        }
      }

    egalite()
}


function win4x4(){
    var status = document.getElementById("game-status");
    var text = document.createTextNode("Le joueur");

    // Vérifier les lignes
    for(let i = 0; i <= 20; i += 5) {
        if(caseIndex[i] === caseIndex[i + 1] && caseIndex[i + 1] === caseIndex[i + 2] && caseIndex[i + 2] === caseIndex[i + 3] && caseIndex[i + 3] === caseIndex[i + 4] && caseIndex[i] !== 0) {

        for (element in caseIndex) {
            caseIndex[element] = 1;
        }

        if (player !== 2) {
            var text = document.createTextNode("Le player 1 à gagné");
            status.appendChild(text);
            return
        }else{
            var text = document.createTextNode("L'ia à gagné");
            status.appendChild(text);
            return
        }
        }
    }

    // Vérifier les colonnes
    for(let i = 0; i <= 4; i++) {
        if(caseIndex[i] === caseIndex[i + 5] && caseIndex[i + 5] === caseIndex[i + 10] && caseIndex[i + 10] === caseIndex[i + 15] && caseIndex[i + 15] === caseIndex[i + 20] && caseIndex[i] !== 0) {
        
        for (element in caseIndex) {
            caseIndex[element] = 1;
        }

        if (player !== 2) {
            var text = document.createTextNode("Le player 1 à gagné");
            status.appendChild(text);
            return
        }else{
            var text = document.createTextNode("L'ia à gagné");
            status.appendChild(text);
            return
        }
        }
    }

// Vérifier les diagonales
    if(caseIndex[0] === caseIndex[6] && caseIndex[6] === caseIndex[12] && caseIndex[12] === caseIndex[18] && caseIndex[18] === caseIndex[24] && caseIndex[0] !== 0) {
        
        for (element in caseIndex) {
            caseIndex[element] = 1;
        }

        if (player !== 2) {
            var text = document.createTextNode("Le player 1 à gagné");
            status.appendChild(text);
            return
        }else{
            var text = document.createTextNode("L'ia à gagné");
            status.appendChild(text);
            return
        }
    }

    if(caseIndex[4] === caseIndex[8] && caseIndex[8] === caseIndex[12] && caseIndex[12] === caseIndex[16] && caseIndex[16] === caseIndex[20] && caseIndex[4] !== 0) {
        
        for (element in caseIndex) {
            caseIndex[element] = 1;
        }

        if (player !== 2) {
            var text = document.createTextNode("Le player 1 à gagné");
            status.appendChild(text);
            return
        }else{
            var text = document.createTextNode("L'ia à gagné");
            status.appendChild(text);
            return
        }
    }

    egalite()
}

function egalite() {
    var status = document.getElementById("game-status");
    var text = document.createTextNode("Le joueur");
    if (caseIndex.includes(0) ) {
        
    }else{
        var text = document.createTextNode("Égalité");
        status.appendChild(text);
        return
    }
}