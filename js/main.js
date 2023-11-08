var numCell = 64;
let grid = document.getElementById("grid");
const runBtn = document.getElementById("run");
const difficultyInput = document.getElementById("difficulty");



function Quadrato(number) {

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
        
        cell.classList.toggle("minato");

    });

    return cell;
}

runBtn.addEventListener("click", function () {

    grid.innerHTML= "";
    

    for (let i = 1; i <= numCell; i++) {
        
        let cell = Quadrato(i);
        cell.innerHTML= i;
        grid.appendChild(cell);
    
    };
})