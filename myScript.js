//Get elements from html file
const container = document.querySelector('#container');
const btnClean = document.querySelector('#clean');
const btnResize = document.querySelector('#resize');
const btnRandom = document.querySelector('#random');
const colorInput = document.querySelector('#color-input');

//Assign functions to buttons
btnClean.onclick = clear
btnResize.onclick = resize
btnRandom.onclick = colorRandom
colorInput.onchange = colorFixed

//Functions

//This function clear the grid
function clear(){
    let blocks = document.querySelectorAll('.block');
    blocks.forEach(block => block.style.background = 'white');
}

//Get user input for size of grid
const userInputSize = () => Number(prompt('Please enter the size of the grid: (>0 and <100)'));

//This function resize the grid
function resize(){
    let gridSize = userInputSize();
    if(gridSize < 1) resize();
    const currGrid = document.querySelector('#sketch');
    currGrid.parentNode.removeChild(currGrid);
    createGrid(gridSize);
}

//This function set the user chosen color to cells which the mouse hovers through
function colorFixed(){
    const blocks = document.querySelectorAll('.block');
    blocks.forEach(block =>{
        block.removeEventListener('mouseenter', colorRandom);
        block.onmouseenter = () => block.style.background = colorInput.value
    })
}

//This function produce random color to cells which the mouse hovers through
function colorRandom(){
    const blocks = document.querySelectorAll('.block');
    blocks.forEach(block => {
        let r = Math.floor(Math.random()*255);
        let g = Math.floor(Math.random()*255);
        let b = Math.floor(Math.random()*255);
        block.removeEventListener('mouseenter', colorFixed);
        block.onmouseenter = () => block.style.background = `rgb(${r},${g},${b})`;
    })
}

//This function creates a default 16x16 grid
function createGrid(size=16){
    const grid = document.createElement('div');
    grid.setAttribute('id', 'sketch');
    container.appendChild(grid);
    grid.style.setProperty('--setGrid', size);
    addBlock(size*size, grid);
}

//This function is a helper function for createGrid() that add cells into a grid
function addBlock(amount, element){
    const block=document.createElement('div');
    block.classList.add('block');
    if(amount===0) return;
    block.addEventListener('mouseenter',colorFixed);
    element.appendChild(block);
    addBlock(amount-1,element);
}

//Start
createGrid();