let currentTurn = "X";
let checkArray = ['','','','','','','','',''];

document.addEventListener("DOMContentLoaded", loadDOM)

function loadDOM(){ 
    showBoard() 
    console.log("Board has Loaded!")
    hoverStyle()
    console.log("Styles has Loaded!")
    plays()
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

            console.log(checkArray)

            }
    }
}

function hoverStyle(){
    const gridSquares = Array.from(document.querySelectorAll(".square"));
    gridSquares.forEach(function(squares) {
        squares.addEventListener('mouseover', function(s) {
          s.target.classList.add('hover');
        });
        
        squares.addEventListener('mouseout', function(s) {
          s.target.classList.remove('hover');
        });
      });
}


