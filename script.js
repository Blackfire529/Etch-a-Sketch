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
      div.style.backgroundColor = 'lightblue';
    });
    row.appendChild(div);
  }
  container[0].appendChild(row);
}