function win3x3(){
    var status = document.getElementById("game-status");
    // Vérifier les lignes
    for(let i = 0; i <= 6; i += 3) {
      if(caseIndex[i] === caseIndex[i + 1] && caseIndex[i + 1] === caseIndex[i + 2] && caseIndex[i] !== 0) {

        for (element in caseIndex) {
            caseIndex[element] = 1;
        }

        if (player !== 2) {
            var text = document.createTextNode("Tu as gagnés !");
            var audio = new Audio('../assets/audio/win.mp3');
            audio.play();
            status.appendChild(text);
            return
        }else{
            var text = document.createTextNode("Tu as perdu ! :(");
            var audio = new Audio('../assets/audio/lose.mp3');
            audio.play();
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
            var text = document.createTextNode("Tu as gagnés !");
            var audio = new Audio('../assets/audio/win.mp3');
            audio.play();
            status.appendChild(text);
            return
        }else{
            var text = document.createTextNode("Tu as perdu ! :(");
            var audio = new Audio('../assets/audio/lose.mp3');
            audio.play();
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
        var text = document.createTextNode("Tu as gagnés !");
        var audio = new Audio('../assets/audio/win.mp3');
        audio.play();
        status.appendChild(text);
        return
    }else{
        var text = document.createTextNode("Tu as perdu ! :(");
        var audio = new Audio('../assets/audio/lose.mp3');
        audio.play();
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
            var text = document.createTextNode("Tu as gagné !");
            var audio = new Audio('../assets/audio/win.mp3');
            audio.play();
            status.appendChild(text);
            return
        }else{
            var text = document.createTextNode("Tu as perdu ! :(");
            var audio = new Audio('../assets/audio/lose.mp3');
            audio.play();
            status.appendChild(text);
            return
        }
        }

    egalite()
}

function win2(){
    var status = document.getElementById("game-status");
    if (caseIndex[0] == caseIndex[3] && caseIndex[3] !== 0 || caseIndex[6] == caseIndex[3]  && caseIndex[3] !== 0) {
        
        for (element in caseIndex) {
            caseIndex[element] = 1;
        }
    
        if (player !== 2) {
            var text = document.createTextNode("Tu as gagnés !");
            var audio = new Audio('../assets/audio/win.mp3');
            audio.play();
            status.appendChild(text);
            return
        }else{
            var text = document.createTextNode("Tu as perdu ! :(");
            var audio = new Audio('../assets/audio/lose.mp3');
            audio.play();
            status.appendChild(text);
            return
        }
    }else if(caseIndex[1] == caseIndex[4] && caseIndex[4] !== 0 || caseIndex[7] == caseIndex[4] && caseIndex[4] !== 0){
        
        for (element in caseIndex) {
            caseIndex[element] = 1;
        }
    
        if (player !== 2) {
            var text = document.createTextNode("Tu as gagnés !");
            var audio = new Audio('../assets/audio/win.mp3');
            audio.play();
            status.appendChild(text);
            return
        }else{
            var text = document.createTextNode("Tu as perdu ! :(");
            var audio = new Audio('../assets/audio/lose.mp3');
            audio.play();
            status.appendChild(text);
            return
        }
    }else if(caseIndex[2] == caseIndex[5] && caseIndex[5] !== 0 || caseIndex[8] == caseIndex[5] && caseIndex[5] !== 0){
       
        for (element in caseIndex) {
            caseIndex[element] = 1;
        }
    
        if (player !== 2) {
            var text = document.createTextNode("Tu as gagnés !");
            var audio = new Audio('../assets/audio/win.mp3');
            audio.play();
            status.appendChild(text);
            return
        }else{
            var text = document.createTextNode("Tu as perdu ! :(");
            var audio = new Audio('../assets/audio/lose.mp3');
            audio.play();
            status.appendChild(text);
            return
        }
    }else if(caseIndex[0] == caseIndex[1] && caseIndex[1] !== 0 || caseIndex[2] == caseIndex[1] && caseIndex[1] !== 0){
        
        for (element in caseIndex) {
            caseIndex[element] = 1;
        }
    
        if (player !== 2) {
            var text = document.createTextNode("Tu as gagnés !");
            var audio = new Audio('../assets/audio/win.mp3');
            audio.play();
            status.appendChild(text);
            return
        }else{
            var text = document.createTextNode("Tu as perdu ! :(");
            var audio = new Audio('../assets/audio/lose.mp3');
            audio.play();
            status.appendChild(text);
            return
        }
    }else if(caseIndex[3] == caseIndex[4] && caseIndex[4] !== 0 || caseIndex[5] == caseIndex[4] && caseIndex[4] !== 0){
        
        for (element in caseIndex) {
            caseIndex[element] = 1;
        }
    
        if (player !== 2) {
            var text = document.createTextNode("Tu as gagnés !");
            var audio = new Audio('../assets/audio/win.mp3');
            audio.play();
            status.appendChild(text);
            return
        }else{
            var text = document.createTextNode("Tu as perdu ! :(");
            var audio = new Audio('../assets/audio/lose.mp3');
            audio.play();
            status.appendChild(text);
            return
        }
    }else if(caseIndex[6] == caseIndex[7] && caseIndex[7] !== 0 || caseIndex[7] == caseIndex[8] && caseIndex[8] !== 0){
        
        for (element in caseIndex) {
            caseIndex[element] = 1;
        }
    
        if (player !== 2) {
            var text = document.createTextNode("Tu as gagnés !");
            var audio = new Audio('../assets/audio/win.mp3');
            audio.play();
            status.appendChild(text);
            return
        }else{
            var text = document.createTextNode("Tu as perdu ! :(");
            var audio = new Audio('../assets/audio/lose.mp3');
            audio.play();
            status.appendChild(text);
            return
        }
    }else if(caseIndex[0] == caseIndex[4] && caseIndex[4] !== 0 || caseIndex[8] == caseIndex[4] && caseIndex[4] !== 0){
        
        for (element in caseIndex) {
            caseIndex[element] = 1;
        }
    
        if (player !== 2) {
            var text = document.createTextNode("Tu as gagnés !");
            var audio = new Audio('../assets/audio/win.mp3');
            audio.play();
            status.appendChild(text);
            return
        }else{
            var text = document.createTextNode("Tu as perdu ! :(");
            var audio = new Audio('../assets/audio/lose.mp3');
            audio.play();
            status.appendChild(text);
            return
        }
    }else if(caseIndex[2] == caseIndex[4] && caseIndex[4] !== 0 || caseIndex[6] == caseIndex[4] && caseIndex[4] !== 0){
        
        for (element in caseIndex) {
            caseIndex[element] = 1;
        }
    
        if (player !== 2) {
            var text = document.createTextNode("Tu as gagnés !");
            var audio = new Audio('../assets/audio/win.mp3');
            audio.play();
            status.appendChild(text);
            return
        }else{
            var text = document.createTextNode("Tu as perdu ! :(");
            var audio = new Audio('../assets/audio/lose.mp3');
            audio.play();
            status.appendChild(text);
            return
        }
    }else if(caseIndex[1] == caseIndex[3] && caseIndex[3] !== 0 || caseIndex[1] == caseIndex[5] && caseIndex[5] !== 0){
        
        for (element in caseIndex) {
            caseIndex[element] = 1;
        }
    
        if (player !== 2) {
            var text = document.createTextNode("Tu as gagnés !");
            var audio = new Audio('../assets/audio/win.mp3');
            audio.play();
            status.appendChild(text);
            return
        }else{
            var text = document.createTextNode("Tu as perdu ! :(");
            var audio = new Audio('../assets/audio/lose.mp3');
            audio.play();
            status.appendChild(text);
            return
        }
    }else if(caseIndex[7] == caseIndex[3] && caseIndex[3] !== 0 || caseIndex[7] == caseIndex[5] && caseIndex[5] !== 0){
        
        for (element in caseIndex) {
            caseIndex[element] = 1;
        }
    
        if (player !== 2) {
            var text = document.createTextNode("Tu as gagnés !");
            var audio = new Audio('../assets/audio/win.mp3');
            audio.play();
            status.appendChild(text);
            return
        }else{
            var text = document.createTextNode("Tu as perdu ! :(");
            var audio = new Audio('../assets/audio/lose.mp3');
            audio.play();
            status.appendChild(text);
            return
        }
    }

    egalite()
}



function egalite() {
    var status = document.getElementById("game-status");
    if (caseIndex.includes(0) ) {
        
    }else{
        var text = document.createTextNode("Égalité");
        status.appendChild(text);
        return
    }
}