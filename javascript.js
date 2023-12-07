const grid = document.querySelector(".container");
const eraser = document.querySelector(".eraser");
const body = document.querySelector("body");
const containerMessaggio = document.createElement("div");
const messaggioScrittura = document.createElement("h3");
let erase=false;
let write=false;
let colore="black";

function colorareNero(square){
    
        if(write===true && erase===false){
            square.classList.add("blackSquare");
            square.classList.remove("whiteSquare");
            square.classList.remove("redSquare");
            square.classList.remove("blueSquare");
        }
        else if(write === true && erase===true){
            square.classList.remove("blackSquare");
            square.classList.remove("redSquare");
            square.classList.add("whiteSquare");
            square.classList.remove("blueSquare");
        }}


function colorareRosso(square){
     
        if(write===true && erase===false){
            square.classList.add("redSquare");
            square.classList.remove("whiteSquare");
            square.classList.remove("blackSquare");
            square.classList.remove("blueSquare");
        }
        else if(write === true && erase===true){
            square.classList.remove("redSquare");
            square.classList.remove("blackSquare");
            square.classList.add("whiteSquare");
            square.classList.remove("blueSquare");
        }}

function colorareBlu(square){
     
        if(write===true && erase===false){
                square.classList.add("blueSquare");
                square.classList.remove("whiteSquare");
                square.classList.remove("blackSquare");
                square.classList.remove("redSquare");
        }
        else if(write === true && erase===true){
                square.classList.remove("redSquare");
                square.classList.remove("blackSquare");
                square.classList.add("whiteSquare");
                square.classList.remove("blueSquare");
        }}

for(let i = 0; i<(16); i++){
    const row = document.createElement("div");
    row.classList.add("riga");
    grid.appendChild(row);
        for(let j=0;j<16;j++){
        const square = document.createElement("div");
        row.appendChild(square);
        
        square.classList.add("whiteSquare");
        square.classList.add("square");
    }
}
const squares = document.querySelectorAll(".square");


const griglia = document.querySelector(".container");
griglia.addEventListener('click', () => {
    write = !write;
    console.log("write= " + write);
       Messaggio();
})
    if(write===true && erase===false){
     
        messaggioScrittura.textContent = "clicca per scrivere";
        body.appendChild(containerMessaggio);
        containerMessaggio.appendChild(messaggioScrittura);
    } 
    else if(write==false && erase==false){
        containerMessaggio.remove();
    }

    else if( erase==true){
        messaggioScrittura.textContent = "clicca per cancellare";
        body.appendChild(containerMessaggio);
        containerMessaggio.appendChild(messaggioScrittura);
        }
    


squares.forEach((square) => {
    
        square.addEventListener('mouseover', () =>{
            if(colore==="black"){
            colorareNero(square);
            }
            else if(colore==="red"){
            colorareRosso(square);
            }
            else if(colore==="blu"){
            colorareBlu(square);
            }
        })
    });


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
            messaggioScrittura.textContent = "clicca per scrivere";
            
        }
        else{
            messaggioScrittura.textContent = "clicca per cancellare";
            
        }
    
}
}

const rosso = document.querySelector(".rosso");
const nero = document.querySelector(".nero");
const blu = document.querySelector(".blu");
const pirulino = document.querySelector(".coloreScelto");

nero.addEventListener('click', ()=> {
    colore="black";
    pirulino.classList.add("backGroundNero");
    pirulino.classList.remove("backGroundRosso");
    pirulino.classList.remove("backGroundblu");
    if(erase===true){
        erase=!erase;
        messaggioScrittura.textContent = "clicca per scrivere";
    }
})
rosso.addEventListener('click', ()=> {
    pirulino.classList.add("backGroundRosso");
    pirulino.classList.remove("backGroundNero");
    pirulino.classList.remove("backGroundblu");
    colore="red";
    if(erase===true){
        erase=!erase;
        messaggioScrittura.textContent = "clicca per scrivere";
    }
})

blu.addEventListener('click', ()=> {
    pirulino.classList.add("backGroundBlu");
    pirulino.classList.remove("backGroundNero");
    pirulino.classList.remove("backGroundRosso");
    colore="blu";
    if(erase===true){
        erase=!erase;
        messaggioScrittura.textContent = "clicca per scrivere";
    }
})




