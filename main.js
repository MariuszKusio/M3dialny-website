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





// Realization drag and drop slider






// let pressed = false;

// slider.addEventListener('mousedown', function(e) {

//     pressed = true;

//     const offsetX = e.clientX - slider.getBoundingClientRect().left; 

//     function handleDrag(e) {
//         if(pressed) {
//             const newPositionX = e.clientX - slider.getBoundingClientRect().left - offsetX;

//             const minPositionX = 0;
//             const maxPositionX = sliderContainer.clientWidth - slider.clientWidth;
//             const boundedPositionX = Math.max(minPositionX, Math.min(newPositionX, maxPositionX));

//             slider.style.left = boundedPositionX + 'px';
//         }
//     }

//     function handleRelease() {
//         if(pressed) {
//             pressed = false;

//             document.removeEventListener('mousemove', handleDrag);
//             document.removeEventListener('mouseup', handleRelease);
//         }
//     }

//     document.addEventListener('mousemove', handleDrag);
//     document.addEventListener('mouseup', handleRelease);
// });




// Slider testing


// slider.addEventListener('mousemove', function(e) {console.log(e.clientX )});

// slider.addEventListener('mousedown', function(e) {console.log(e.clientX)});

// slider.addEventListener('mousedown', function(e) {console.log(slider.getBoundingClientRect().left)});




const sliderContainer = document.querySelector('.realizationsPositionContainer');
const slider = document.querySelector('.realizationsContainer');

// pressed = false

// slider.addEventListener('mousedown', function(e) {
    
//     pressed = true;
//     let pressedMousePosition = e.clientX;
//     console.log('klikam' );
    
  
//     slider.addEventListener('mousemove', function(e){
       
//         if(pressed){
//          console.log('przesuwam');
//          newPositionX = e.clientX - pressedMousePosition;
//          slider.style.left = newPositionX + 'px';

//          document.addEventListener('mouseup', function(e){ 
          
//             pressed = false 
//         });
         
//         }
//     });


// });

let pressed = false;
let startx;
let x;

sliderContainer.addEventListener('mousedown', (e) => {
  pressed = true;
  startx = e.offsetX - slider.offsetLeft;
  sliderContainer.style.cursor = 'grabbing';
});

sliderContainer.addEventListener('mouseenter', () => {
    sliderContainer.style.cursor = 'grab';
  });

//   sliderContainer.addEventListener('mouseleave', () => {
//     sliderContainer.style.cursor = 'default';
//   });

  sliderContainer.addEventListener('mouseup', () => {
    sliderContainer.style.cursor = 'grab';
  });

  window.addEventListener('mouseup', () => {
    pressed = false;
  });

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

    // safety about get under -30px left slider container value and more left px than slider width
    if(parseInt(slider.style.left) > -40) {
        slider.style.left = '40px'
    } else if((parseInt(slider.style.left) + sliderContainer.offsetWidth) < 680) {
        slider.style.left = `680px`
    }

    // console.log(parseInt(slider.style.left))
    // console.log(sliderContainer.offsetWidth)

    console.log((parseInt(slider.style.left) + sliderContainer.offsetWidth))
  }

  




















