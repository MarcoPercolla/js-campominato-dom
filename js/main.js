let numCell = 64;
let grid = document.getElementById("grid");
const runBtn = document.getElementById("run");
const difficultyInput = document.getElementById("difficulty");
let safe = 0;
// ---
let bombe = [];
// while (bombe.length<16) {
//     let posizioneBomba = getRandom(1, numCell);
//     if (!(bombe.includes(posizioneBomba))) {
//         bombe.push(posizioneBomba);
//     }
    
// }
// console.log(bombe)

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
            grid.innerHTML= `<h2>Boom<h2>`;
        } else if (safe == (numCell - 16)){
            grid.innerHTML= `<h2>hai vinto<h2>`;
        } else {
            cell.classList.toggle("minato");
            safe++;
            document.getElementById("counter").innerHTML = `<h2>ti mancano ${(numCell - 16) - safe} celle</h2>`
            console.log(safe)
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