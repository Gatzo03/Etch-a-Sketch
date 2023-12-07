const grid = document.querySelector(".container");
const eraser = document.querySelector(".eraser");
const body = document.querySelector("body");
const containerMessaggio = document.createElement("div");
const messaggioScrittura = document.createElement("h3");
let erase=false;
let write=false;
for(let i = 0; i<(64); i++){
    const row = document.createElement("div");
    row.classList.add("riga");
    grid.appendChild(row);
        for(let j=0;j<64;j++){
        const square = document.createElement("div");
        row.appendChild(square);
        
        square.classList.add("whiteSquare");
        square.classList.add("square");
    }
}
const squares = document.querySelectorAll(".square");


const griglia = document.querySelector(".omegaContainer");
griglia.addEventListener('click', () => {
    write = !write;
    console.log("write= " + write);
       Messaggio();
})
    /*if(write===true && erase===false){
     
        messaggioScrittura.textContent = "Stai scrivendo";
        body.appendChild(containerMessaggio);
        containerMessaggio.appendChild(messaggioScrittura);
    } 
    else if(write==false && erase==false){
        containerMessaggio.remove();
    }

    else if( erase==true){
        messaggioScrittura.textContent = "Stai cancellando";
        body.appendChild(containerMessaggio);
        containerMessaggio.appendChild(messaggioScrittura);

    }
})*/


squares.forEach((square) => {
    
        square.addEventListener('mouseover', () =>{
            if(write===true && erase===false){
                square.classList.add("blackSquare");
                square.classList.remove("whiteSquare");
            }
            else if(write == true && erase===true){
                square.classList.remove("blackSquare");
                square.classList.add("whiteSquare");
            }})});

const cancelButton = document.querySelector(".eraser");
cancelButton.addEventListener('click', () => {
    erase=!erase;
    console.log("erase= " + erase);
    Messaggio();
    
});

function Messaggio(){
    if(write===true){
        if(erase===false){
            messaggioScrittura.textContent = "Stai scrivendo";
            body.appendChild(containerMessaggio);
            containerMessaggio.appendChild(messaggioScrittura);
        }
        else{
            messaggioScrittura.textContent = "Stai cancellando";
            body.appendChild(containerMessaggio);
            containerMessaggio.appendChild(messaggioScrittura);
        }
    }
    else{
        if(erase===false){
            messaggioScrittura.textContent = "puoi scrivere";
            
        }
        else{
            messaggioScrittura.textContent = "puoi cancellare";
            
        }
    
}
}



            



