// 1. Generate 16x16 grid block
// 2. Add a function to color a gridbox upon hovering
// 3. Add a button to clear gridContainer
// 4. Get user input for the size of gridContainer

/** 
	Curent Issues:
    1) The height of boxes need to be adjusted based on the width
	 2) When cancel is clicked through 'Custom Size' button, it erases 
	    the gridContainer
**/


// 1. Generate 16x16 grid block
const gridContainer = document.querySelector('#gridContainer');



function generateGrid(size){
	let gridRow;
	let gridBox;
	
	
	for(let i=0;i<size;i++){
		gridRow = document.createElement('div');
		gridRow.classList.add('gridRow');
		gridContainer.appendChild(gridRow);
		
		for (let j=0;j<size;j++){
			gridBox = document.createElement('div');
			gridBox.classList.add('gridBox');
			gridRow.appendChild(gridBox);
		}
	}
	
};

generateGrid(32);

// 2. Add a function to color a gridbox upon hovering
function sketchBox() {
	this.classList.add('sketched');
};

const gridBoxes = document.querySelectorAll('.gridBox');

gridBoxes.forEach(eachBox =>
	eachBox.addEventListener('mouseover',sketchBox)				  
);


// 3. Add a button to clear gridContainer
function clearGrid(){

	gridBoxes.forEach( eachBox =>
		eachBox.classList.remove('sketched')			 
	);
};

const clearBtn = document.querySelector('#clearBtn');
clearBtn.addEventListener('click', clearGrid);


// 4. Get user input for the size of gridContainer
const customSizeBtn = document.querySelector('#customSize');

customSizeBtn.addEventListener('click', () => {let customSize = prompt("Enter desired size");
  
	if (customSize<100){
		while (gridContainer.firstChild) {
   		gridContainer.removeChild(gridContainer.lastChild);
	   }
		generateGrid(customSize);
	} else {
		alert ('Please keep the size than 100!');
	}

})

