

const container = document.querySelector(".container"); //container for all grids



for(let i = 0; i < 256 ;i ++){  // loops thru 16 times to make 16 divs // make a function
    //where user can input number of grids they want 
    
     const grid = document.createElement("div");
    document.body.appendChild(grid);
    grid.classList.add("square");
    grid.innerHTML = "<p></p>";
    container.appendChild(grid);
    
    
    const changeColor = function(){
        grid.style.backgroundColor = "red";
    }

  grid.addEventListener("mousemove",changeColor);


}


