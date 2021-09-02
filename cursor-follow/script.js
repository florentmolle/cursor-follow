
// Pick up what we need
const circle = document.querySelector('#circle')

// Variables
let posX = 0;
let posY = 0;
let moveX = 0;
let moveY = 0;
let speed = 0.08;

// lerp animation function
function lerp (start, end, amt){
    return (1-amt)*start+amt*end
  }

// Request animation frame
function moveCircle(){
    moveX = lerp(moveX, posX, speed);
    moveY = lerp(moveY, posY, speed);
    circle.style.left = `${moveX}px`
    circle.style.top = `${moveY}px`
    requestAnimationFrame(moveCircle)
}
moveCircle()


// EVENTS LISTENERS
window.addEventListener('mousemove', (e)=>{
    posX = e.clientX;
    posY = e.clientY;
});
window.addEventListener('mousedown', ()=>{
    circle.style.transform = 'scale(0.8) translate(-50%, -50%)'; //change size on mouse down
    circle.style.transition = 'transform .1s';
});
window.addEventListener('mouseup', ()=>{
    circle.style.transform = 'scale(1) translate(-50%, -50%)'; //get back to normal size on mouse up
    circle.style.transition = 'transform .4s';
});