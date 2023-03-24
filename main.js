// window.addEventListener('load', function() {
//     this.setInterval(function() {
//       document.querySelector('.card-contain').classList.add('visible-elements');
//     }, 500);
//   });

//   window.onload = function() {
//     document.querySelector('.container1').classList.add('visible-elements');
//     setTimeout(function() {
//       document.querySelector('.container2').classList.add('visible-elements');
//     }, 500);
//     setTimeout(function() {
//       document.querySelector('.container3').classList.add('visible-elements');
//     }, 1000);
//   };
  //Explanation:
  
//   In the HTML, we have three containers with class names container1, container2, and container3.
//   In the CSS, we set the opacity of the containers to 0 and add a transition effect to the opacity property with a duration of 0.5s and an ease-in-out timing function.
//   We also set different transition delays for each container to make them appear consecutively.
//   We add a "show" class to the containers in JavaScript using the setTimeout function with different delay times for each container. This class sets the opacity of the container to 1, triggering the transition effect.
//   You can adjust the CSS properties, such as width, height, background color, and transition duration, to match your design requirements. You can also modify the JavaScript code to add more containers and adjust the timing of their appearance.
  
document.addEventListener("DOMContentLoaded", function(event) {
    var card = document.querySelectorAll('.card');
    var delay = 0;
    for (var i = 0; i < card.length; i++) {
      (function(index) {
        setTimeout(function() {
          card[index].classList.add('visible-elements');
        }, delay);
        delay += 300;
      })(i);
    }
  });
  

  
  
  