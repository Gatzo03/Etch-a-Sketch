const grid = document.querySelector(".container")
for(let i = 0; i<(16); i++){
    const row = document.createElement("div");
    row.classList.add("riga");
    grid.appendChild(row);
        for(let j=0;j<16;j++){
        const square = document.createElement("div");
        row.appendChild(square);
        square.textContent = "miao";
        square.classList.add("whiteSquare");
        square.classList.add("square");
    }
}

square.addEventListener('mouseover', () => {
    square.classList.toggle("blackSquare");
    square.classList.toggle("whiteSquare");
})
