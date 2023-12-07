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

squares.forEach((square) =>
square.addEventListener('click', () => {
    square.classList.add("blackSquare");
    square.classList.remove("whiteSquare");
}));
