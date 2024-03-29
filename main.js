// Realizations section nav button

const realizationNavButton = document.getElementById('projectsShowButton');
const realizationNavButtonMobile = document.getElementById('projectsShowButtonMobile');

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);

    if (section) {
        section.scrollIntoView({ behavior:'smooth' })
    }
}

realizationNavButton.addEventListener('click', function() { scrollToSection('realizations') });
realizationNavButtonMobile.addEventListener('click', function() { scrollToSection('realizations') });





const sliderContainer = document.querySelector('.realizationsPositionContainer');
const slider = document.querySelector('.realizationsContainer');
const slide = document.querySelectorAll('.realizationCard');
const realizationButton = document.querySelectorAll('.realizationShowButton');


let pressed = false;
let startx;
let x;

let totalCardsSliderWidth = (slide[0].offsetWidth + 40)  * slide.length;

sliderContainer.addEventListener('mousedown', (e) => {
  pressed = true;
  startx = e.offsetX - slider.offsetLeft;
  // sliderContainer.style.cursor = 'grabbing';
  sliderContainer.style.cursor = 'url("img/cursor1.svg"), auto';
});

sliderContainer.addEventListener('mouseenter', () => {
 
    sliderContainer.style.cursor = 'url("img/cursor1.svg"), auto';
  
  });

  sliderContainer.addEventListener('mouseup', () => {
    // sliderContainer.style.cursor = 'grab';
    sliderContainer.style.cursor = 'url("img/cursor1.svg"), auto';
  });

  window.addEventListener('mouseup', () => {
    pressed = false;
  });

  // Zrób tak żeby przycisk zobacz więcej na realizacjach po kliknięciu nie przesuwał slidera bo robi błędy
  realizationButton.forEach(item => item.addEventListener('click', () => {
    console.log('klikam przycisk');
    pressed = false ;
  }));

  sliderContainer.addEventListener('mousemove', (e) => {
     if(!pressed) return;
     e.preventDefault();
     x = e.offsetX;

     slider.style.left = `${x - startx}px`;
    //  console.log(x - startx);

    checkBoundary()
  });


  function checkBoundary() {
    let outer = sliderContainer.getBoundingClientRect();
    let inner = slider.getBoundingClientRect();
 
    slider.style.left = `-${sliderContainer.offsetWidth - totalCardsSliderWidth}px`;


    // safety about get under -30px left slider container value and more left px than slider width
    if(parseInt(slider.style.left) > 40) {
        slider.style.left = '40px'
    } else if(parseInt(slider.style.left) < sliderContainer.offsetWidth - totalCardsSliderWidth) {
        slider.style.left = `${sliderContainer.offsetWidth - totalCardsSliderWidth}px`;
    }

    // console.log(`${parseInt(slider.style.left)} > ${sliderContainer.offsetWidth - totalCardsSliderWidth}` )
    // console.log(parseInt(slider.style.left))
  }

  




















