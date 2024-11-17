function createGrid(dim){
    const grid = document.createElement("div");
    grid.classList.add("grid");
    for(i=0; i<dim; i++){
        const line=document.createElement("div");
        line.classList.add("line");
        for(j=0; j<dim; j++){
            const pixel = document.createElement("div");
            pixel.addEventListener('mouseover', function(){
                changeCol(pixel);
            });
            pixel.classList.add("pixel");
            line.appendChild(pixel);
        }
        grid.appendChild(line);
    }
    const bod = document.querySelector("body");
    bod.appendChild(grid);
    console.log("done");

}

function reset(){
    const grid = document.querySelector(".grid");
    if(grid){
        grid.remove();
    }
}

function changeCol(p){
    p.style.backgroundColor='blue';
}

function changeDefinition(){
    reset();
    var n = prompt("Enter the new grid dimension", 0);
    while(n>100){
        n = prompt("The number must not exceed 100.");
    }
    createGrid(n);
}

createGrid(16);
const butt = document.querySelector("button");
butt.addEventListener('click', changeDefinition);
