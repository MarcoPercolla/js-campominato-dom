let numCell = 64;
let grid = document.getElementById("grid");
const runBtn = document.getElementById("run");
const difficultyInput = document.getElementById("difficulty");
let safe = 0;
let bombe = [];

// ---
function creaQuadrato(number) {

    const cell = document.createElement("div");
    if (difficultyInput.value == "medium") {
        numCell = 81
        cell.classList = ("square squareMedium");
    } else if (difficultyInput.value == "hard") {
        numCell = 49;
        cell.classList = ("square squareHard");
    }else if (difficultyInput.value == "easy") {
        numCell = 100;
        cell.classList = ("square squareEasy");
    }
    

    //evento click
    
    
    cell.addEventListener("click", function() {
          
        if (cell.classList.contains("bomb")) {
            // grid.innerHTML= `<img src="https://pa1.aminoapps.com/6988/4631da696bc8a842f7da0835859c6a8b28d8c89cr1-500-240_hq.gif" >`;
            grid.innerHTML= `<img src="https://qph.cf2.quoracdn.net/main-qimg-537603b4182840c05a01a24e33989634" >`;
            
            document.getElementById("counter").innerHTML = "HAI PERSO!";

        } else if (safe == (numCell - 17)){
            grid.innerHTML= `<img src="https://gifdb.com/images/high/naruto-shippuden-minato-namikazee-versus-obito-uchiha-aeu46u0nkiefu7u5.gif" >`;
            document.getElementById("counter").innerHTML = "HAI VINTO!";
        } else if (!cell.classList.contains("minato")) {
            cell.classList.toggle("minato");
            safe++;
            document.getElementById("counter").innerHTML = `<h2>ti mancano ${(numCell - 16) - safe} celle</h2>`;
            console.log(safe);
        }else{
            console.log("gia cliccato");
        }
        
        return safe;
    });

    
    
    return cell;
}

// ---

function creaGriglia() {

    
    for (let i = 1; i <= numCell; i++) {

        
        let cell = creaQuadrato(i);
        cell.innerHTML= i;
        grid.appendChild(cell);

        if (bombe.includes(i)) {
            cell.classList.add("bomb");
        }
        
    
    };
}


// ---
runBtn.addEventListener("click", function () {

    document.getElementById("counter").innerHTML = "";
    grid.innerHTML= "";
    safe= "";
    bombe = [];
    
    while (bombe.length<16) {
        let posizioneBomba = getRandom(1, numCell);
        if (!(bombe.includes(posizioneBomba))) {
            bombe.push(posizioneBomba);
        }
        
    }
    console.log(bombe);
    creaGriglia();

})


// ---
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}