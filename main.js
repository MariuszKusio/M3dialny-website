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






const sliderContainer = document.querySelector('.realizationsPositionContainer');
const slider = document.querySelector('.realizationsContainer');

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

pressed = false



slider.addEventListener('mousedown', function(e) {
    
    pressed = true;

    let pressedMousePosition = e.clientX;
    

    console.log('klikam' );
    
  
    slider.addEventListener('mousemove', function(e){
       
        if(pressed){
         console.log('przesuwam');
         newPositionX = e.clientX - pressedMousePosition;
         slider.style.left = newPositionX + 'px';

         document.addEventListener('mouseup', function(e){ 
          
            pressed = false 
        })
         
        }
    })

  

});














