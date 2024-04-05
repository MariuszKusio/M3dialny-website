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




// Realizations slider 
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
  // custom cursor
  sliderContainer.style.cursor = 'url("img/cursor1opacity.svg"), auto';
});

sliderContainer.addEventListener('mouseenter', () => {
 
    sliderContainer.style.cursor = 'url("img/cursor1.svg"), auto';
  
  });

  sliderContainer.addEventListener('mouseup', () => {
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

    checkBoundary()
  });


  function checkBoundary() {

    // safety about get under 40px left slider container value and more left px than slider width
    if(parseInt(slider.style.left) > 40) {
        slider.style.left = '40px'
    } else if(parseInt(slider.style.left) < (sliderContainer.offsetWidth - totalCardsSliderWidth )) {
        slider.style.left = `${sliderContainer.offsetWidth - totalCardsSliderWidth}px`;
    }

  }



  // Gallery 

  const realizationGallery = document.querySelector(".realizationsGallery");
  const closeButton = document.querySelector(".closeButton");
  
  // Close gallery
  closeButton.addEventListener('click', () => {
   realizationGallery.style.display = 'none';
   document.body.classList.remove('disabledScroll');
  });

  // Show gallery

  realizationButton.forEach( button => {
    button.addEventListener('click', (e) => {
      realizationGallery.style.display = 'block';
      document.body.classList.add('disabledScroll');
      // console.log(e.target.id);
    })
  });

// header animation

const firstVideo = document.querySelector(".firstVideoContainer");
const secondVideo = document.querySelector(".secontVideoContainer");
const firstVideoLoad = document.querySelector(".firstVideo");
const secondVideoLoad = document.querySelector(".secondVideo");
const headerTitle = document.querySelector(".headerTitle");

firstVideoLoad.addEventListener('load', function() {

  setTimeout(() => {
    firstVideo.classList.add('firstMove');
    secondVideo.classList.add('secondMove');
  }, 1000)
  
})

let scrollCounter = 0;

window.addEventListener('scroll', function() {
  scrollCounter++;
  // safety about auto entry scroll
  if(scrollCounter > 1){
  //Desktop animation
  firstVideo.classList.add('firstMove');
  secondVideo.classList.add('secondMove');

  //Mobile animation
  headerTitle.classList.add('moveTitle');
  }
});

// longer video with the same file size
firstVideoLoad.playbackRate = 0.8;
secondVideoLoad.playbackRate = 0.8;


const loader = document.querySelector('.loader');
const loaderLogo = document.querySelector('.loadAnimation img');
const vanishBlock = document.querySelector('.vanishBlock');

// loading page listener with vanish function
window.addEventListener('load', () => {
  vanishBlock.style.display = 'none';
  loader.classList.add('fadeOut');
  window.scrollY === 0 ? loaderLogo.classList.add('fadeOut') : loaderLogo.style.top = '-200px';
  

  setTimeout( () => {
    loader.style.display = "none";
    document.body.classList.remove('disabledScroll');
  }, 1000);

});

























