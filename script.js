const container = document.getElementsByClassName('container');
console.log(container.length);
// a loop to make the all the div for the 16 x 16 grid 
// and it add an eventlistener that when the element is hovered
// it will change the background color
for (let i = 0; i < 16; i++) {
  let row = document.createElement('div');
  row.classList.add(`row`);
  for (let i = 0; i < 16; i++) {
    let div = document.createElement('div');
    div.classList.add(`grid-item`);
    div.addEventListener("mouseover", () => {
      div.style.backgroundColor = 'aqua';
    });
    row.appendChild(div);
  }
  container[0].appendChild(row);
}

// A function to remove the old grid 
// and replace it with a new one that
// uses takes the user input for the size
 

function newGrid() {
  const rowsArray = Array.from(document.getElementsByClassName('row'));

  newGridSize = prompt('Enter The Desired Grid Size To A Max Of 100');
  
  // Used to remove the old array
  for (let i = 0; i < rowsArray.length; i++) {
    rowsArray[i].remove();
  };



  for (let i = 0; i < newGridSize; i++) {

    if (newGridSize > 100) { // used to limit the gird size
      alert('Size too big'); 
      break;
    }

    let row = document.createElement('div');
    row.classList.add(`row`);
    for (let i = 0; i < newGridSize; i++) {
      let div = document.createElement('div');
      div.classList.add(`grid-item`);
      div.addEventListener("mouseover", () => {
        div.style.backgroundColor = 'aqua';
      });
      row.appendChild(div);
    }
    container[0].appendChild(row);
  }
}