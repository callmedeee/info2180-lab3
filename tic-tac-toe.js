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