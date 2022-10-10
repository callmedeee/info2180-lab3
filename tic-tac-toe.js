let currentTurn = "X";
let checkArray = ['','','','','','','','',''];

document.addEventListener("DOMContentLoaded", loadDOM)

function loadDOM(){ 
    showBoard() 
    console.log("Board has Loaded!")
    hoverStyle()
    console.log("Styles has Loaded!")
    plays()
    console.log("Game is Ready!")
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
            
            if (checkForWinnerX(checkArray)
            ){
                    post.textContent = "Congratulations! X is the Winner!";
                    post.classList.add("you-won");
            }else if(checkForWinnerO(checkArray)){
                    post.textContent = "Congratulations! O is the Winner!";
                    post.classList.add("you-won");
            }
            var newGameBtn = document.querySelector("button");
            if(newGameBtn){
                newGameBtn.addEventListener('click', (e) =>{
                    location.reload();
                });
              }

        }, {once: true});
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

function checkForWinnerX(arr)
{
    function check(location1,location2,location3){
        if(
            arr[location1].includes("X")&
            arr[location2].includes("X")&
            arr[location3].includes("X")
        ){
            return true;
        }else{
            return false;
        }
    }
    if (check(0,1,2)) return true;
    else if (check(0,3,6)) return true;
    else if (check(0,4,8)) return true;
    else if (check(1,4,7)) return true;
    else if (check(2,4,6)) return true;
    else if (check(2,5,8)) return true;
    else if (check(3,4,5)) return true;
    else if (check(6,7,8)) return true;

}

function checkForWinnerO(arr)
{
    function check(location1,location2,location3){
        if(
            arr[location1].includes("O")&
            arr[location2].includes("O")&
            arr[location3].includes("O")
        ){
            return true;
        }else{
            return false;
        }
    }
    if (check(0,1,2)) return true;
    else if (check(0,3,6)) return true;
    else if (check(0,4,8)) return true;
    else if (check(1,4,7)) return true;
    else if (check(2,4,6)) return true;
    else if (check(2,5,8)) return true;
    else if (check(3,4,5)) return true;
    else if (check(6,7,8)) return true;

}

