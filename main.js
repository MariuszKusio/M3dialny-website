





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
// zmieniamy przy wciśnieciu myszką w zmiennej startX wartość w zależnosci gdzie klikneliśmy w danym kafelku, zemieniamy ikonke łapki oraz pressed na true.
    console.log(`Pozycja kliknięcia w osi x w obrębie kafelka - ${startX}`);
});

realizationsPositionContainer.addEventListener("mouseenter", () => {
    // znmiana łapki na puszczoną jeżeli tylko wjeżdżamy myszką na nasz kontener z kartami
   realizationsPositionContainer.style.cursor = "grab"; 
});

realizationsPositionContainer.addEventListener('mouseup', () => {
    // Jeżelu puszczamy przycisk myszki to zmieniamy łapkę na puszczoną oraz zmieniamy wartość pressed na false
   realizationsPositionContainer.style.cursor = "grab";
   pressed = false;
});

realizationsPositionContainer.addEventListener ("mousemove", (e) => {
    // Jeżeli pressed = false to funkcja się nie wykna i po prostu zwróci return. Czyli tylko jeżeli jest wciśnięta i mamy ruch myszką
  if (!pressed) return;
  e.preventDefault();

  // x pokazuje wartość na osi poziomej w miejscu ruchu myszki na którym znajduje się kafelek. 
  
  x = e.offsetX;
  // Ponieważ funkcja wykonuje się za każdym drobnym ruchem myszki to obliczamy wartość dla LEFT klikniętej kafelki.
  // Wartość obliczamy z:   x (wartość w którym znajduje się aktualnie poruszająca się myszka)  - startX (wartość pozycji myszki w momencie kliknięcia)
  realizationsContainer.style.left = `${x - startX}px`;
  

  let leftPositionTextValue = realizationsContainer.style.left;
//   console.log(`  ${x}`);
//   console.log(x - startX);  
  console.log(leftPositionTextValue);
});

const boundItems = () => {
    let outer = realizationsPositionContainer.getBoundingClientRect();
    let inner = realizationsContainer.getBoundingClientRect();

    if(parseInt(realizationsContainer.style.left) > 0) {
        realizationsContainer.style.left = `-${inner.width - outer.width}px`;
        // console.log(inner.width);
        // console.log(outer.width);
    }
};

realizationsPositionContainer.addEventListener("mousemove", (e) => {
    if (!pressed) return;
    e.preventDefault();

    x = e.offsetX;
    realizationsContainer.style.left = `${x - startX}px`;
    boundItems();
});



