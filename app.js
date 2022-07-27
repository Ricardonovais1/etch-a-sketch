//Cash the DOM:
let color = 'white';
const colorPicker = document.getElementById('color-picker');
const selectColor = document.getElementById('color-button');
const randomColor = document.getElementById('random-color');
const eraser = document.getElementById('eraser');
const clear = document.getElementById('clear');
const sizeValue = document.getElementById('size-value');
const size = document.getElementById('size');
const grid = document.querySelector('.grid');



// texto acima do Range (tamanho das DIV's)
size.onmousemove = (e) => sizeValue.textContent = `${e.target.value} x ${e.target.value}`; 

function populateGrid(size) {

    //Remover as divs extras que estavam distorcendo o resultado. 
    const squares = grid.querySelectorAll('div');
    squares.forEach((div) => div.remove());

    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    
    for(let i = 0; i < size * size; i++) {
        let square = document.createElement('div');
        square.style.backgroundColor = 'white';
        grid.insertAdjacentElement('beforeend', square);
        square.addEventListener('mouseover', hoverDraw);            
    };
};

populateGrid(16);


// Foi inserido um 'onchange' no html para chamar esta função;
function changeSize(input) {
    populateGrid(input);
};

function hoverDraw() {
    if (color === 'random') {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        this.style.border = 'none';
        
    } else {
        this.style.backgroundColor = color;
    }
};

colorPicker.oninput = (e) => currentColor(e.target.value);
selectColor.addEventListener('click', allowColorPicker);
randomColor.addEventListener('click', hoverDraw);
clear.addEventListener('click', resetGrid);


//Inserir calls 'onclick' no html
function currentColor(choice) {
    color = choice;
};

function allowColorPicker() {
    colorPicker.classList.toggle('hide');
};


function resetGrid() { 

    const squares = grid.querySelectorAll('div');
    squares.forEach((div) => div.style.backgroundColor = 'white');
}; 



/* function activateButton(newMode)
 */




