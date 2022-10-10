document.addEventListener("DOMContentLoaded", loadDOM)

function loadDOM(){ 
    showBoard() 
}

function showBoard(){ 
    const boarddivs = document.getElementById('board').getElementsByTagName('div');

    for ( i =0; i< boarddivs.length; i++){
	    var divs = boarddivs[i];
        divs.classList.add("square");
    }
}

function plays(){

    const squaredivs = Array.from(document.querySelectorAll(".square"));
    const post = document.getElementById("status");
    var index;
    for(const div of squaredivs); {
        div.addEventListener("click", (e) =>{
            div.classList.add(currentTurn);
            div.textContent = currentTurn;
            index = squaredivs.indexOf(div);
            checkArray.splice(index,1,currentTurn);
            currentTurn = currentTurn == "X" ? "O" : "X";
            }
    }
}