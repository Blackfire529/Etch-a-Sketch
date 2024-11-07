const container = document.getElementsByClassName('container');
console.log(container.length);
// a loop to make the all the div for the 16 x 16 grid
for (let i = 0; i < 16; i++) {
  let row = document.createElement('div');
  row.classList.add(`row`);
  for (let i = 0; i < 16; i++) {
    let div = document.createElement('div');
    div.classList.add(`grid-item`);
    row.appendChild(div);
  }
  container[0].appendChild(row);
}


