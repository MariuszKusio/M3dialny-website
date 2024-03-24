





// Realization drag and drop slider

const realizationsPositionContainer = document.querySelector(".realizationsPositionContainer");
const realizationsContainer = document.querySelector(".realizationsContainer");

let pressed = false;
let sartX;
let x;


// Cursor behavior change
realizationsPositionContainer.addEventListener("mousedown", (e) => {
    pressed = true;
    startX = e.offsetX - realizationsContainer.offsetLeft;
    realizationsPositionContainer.style.cursor = "grabbing";
});

realizationsPositionContainer.addEventListener("mouseenter", () => {
   realizationsPositionContainer.style.cursor = "grab"; 
});

realizationsPositionContainer.addEventListener('mouseup', () => {
   realizationsPositionContainer.style.cursor = "grab";
   pressed = false;
});

realizationsPositionContainer.addEventListener ("mousemove", (e) => {
  if (!pressed) return;
  e.preventDefault();

  x = e.offsetX;
  realizationsContainer.style.left = `${x - startX}px`;
});

const boundItems = () => {
    let outer = realizationsPositionContainer.getBoundingClientRect();
    let inner = realizationsContainer.getBoundingClientRect();

    if(parseInt(realizationsContainer.style.left) > 0) {
        realizationsContainer.style.left = `-${inner.width - outer.width}px`;
    }
};

realizationsPositionContainer.addEventListener("mousemove", (e) => {
    if (!pressed) return;
    e.preventDefault();

    x = e.offsetX;
    realizationsContainer.style.left = `${x - startX}px`;
    boundItems();
});



