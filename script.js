window.addEventListener("load", setDefaultGrid);

let button = document.querySelector('#btn');
button.addEventListener('click', changeSize);

let grid = document.querySelector('#grid');

//set grid height and width
grid.style.height = '420px';
grid.style.width = '420px';

function setDefaultGrid(){
    let squareArea = 5;
    display(squareArea);
}

function changeSize(){
    let newSize = prompt("Enter size between 1 t0 20: ");

    if (newSize !== null) {
        newSize = parseInt(newSize);
        if (newSize < 1 || newSize > 64 || Number.isNaN(newSize)) {
        alert("Enter a number from 1-20 range");
        changeSize();
        } else {
        clearGrid();
        display(newSize);
        }
    }
}
function clearGrid(){
    const gridArray = Array.from(grid.childNodes);
    gridArray.forEach((element) => {
        grid.removeChild(element);
    });
}
function display(squareArea){
    let numberOfSquare = Math.floor((400*400)/(squareArea*squareArea));

    //create the grid
    for (let i = 0; i < numberOfSquare; i++) {
        // console.log(grid);
        let squareDiv = document.createElement('div');
        squareDiv.className = "square";
        squareDiv.style.height = squareArea + 'px';
        squareDiv.style.width = squareArea + 'px';
        grid.appendChild(squareDiv);
    }

    //drawing the grid
    let colors = ['red', 'green', 'blue', 'orange', 'khaki', 'yellow', 'tomato'];
    for(let i = 0; i < numberOfSquare; i++){
        let squareArea = grid.children[i];
        let idx = Math.floor(Math.random()*colors.length);
    
        squareArea.addEventListener('mouseover', (e)=>{
            squareArea.style.background = colors[idx];
        })
    } 
}

