
const container = document.querySelector(".container");
const currentColor = document.querySelector(".currentColor");
const randomColor = document.querySelector(".randomColor");
const slider = document.querySelector(".slider");
const clear = document.querySelector(".clear");

let randomR = Math.trunc(Math.random() * 256);
let randomG = Math.trunc(Math.random() * 256);
let randomB = Math.trunc(Math.random() * 256);



let gridSize = prompt("Number of squares? Max : 100");
if(gridSize < 100){
    setUpGrid();
}
else{
    do {
         gridSize = prompt("Too many squares. Max:100");
    } while (gridSize > 100);
    setUpGrid();
}
// currentColor.style.color = "red";
 // make a circle that shows current color 


function setUpGrid() {
    container.style.gridTemplateColumns = `repeat(${gridSize},minmax(0, 1fr))`;
    container.style.gridTemplateRows = `repeat(${gridSize}, minmax(0, 1fr))`;
    
    for(let i = 0; i < gridSize * gridSize ;i ++){  // loops thru 16 times to make 16 divs // make a function
        //where user can input number of grids they want 
        
        const grid = document.createElement("div");
        document.body.appendChild(grid);
        grid.classList.add("square");
        grid.innerHTML = "<p></p>";
        container.appendChild(grid);



        const changeColor = function(){     
                grid.style.background = `rgb(${randomR},${randomG},${randomB})`;       
        }

        grid.addEventListener("mouseover",changeColor);

        clear.addEventListener("click",function(){
            grid.style.background = "white";
        })
    }


}

    






   

    
   
        
          
        




