const container = document.getElementsByClassName('container');
console.log(container.length);
// a loop to make the all the div for the 16 x 16 grid
for (let i = 0; i < 256; i++) {
  let div = document.createElement('div');
  div.classList.add('grid-item');
  container[0].appendChild(div);
}
