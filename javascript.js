const grid = document.querySelector(".container")
for(let i = 0; i<(32); i++){
    const row = document.createElement("div");
    row.classList.add("riga");
    grid.appendChild(row);
        for(let j=0;j<32;j++){
        const square = document.createElement("div");
        row.appendChild(square);
        
        square.classList.add("whiteSquare");
        square.classList.add("square");
    }
}
const squares = document.querySelectorAll(".square");

let mouseClick = false;
const body = document.querySelector("body");
body.addEventListener('click', () => {
    mouseClick = !mouseClick;
    console.log(mouseClick);
})


squares.forEach((square) => {
    
        square.addEventListener('mouseover', () =>{
            if(mouseClick===true){
            square.classList.add("blackSquare");
            square.classList.remove("whiteSquare");
    }})});




