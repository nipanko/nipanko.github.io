
// Variables
let
    ease = 0.1,
    targetX = 0,
    targetY = 0,
    currentX = 0,
    currentY = 0
;
const cursor = document.querySelector('.cursor');
const cursorWidth = cursor.getBoundingClientRect().width;
const cursorHeight = cursor.getBoundingClientRect().height;

// Compute target position
const onMouseMove = (e) => {
  targetX = e.pageX - (cursorWidth/2);
  targetY = e.pageY - (cursorHeight/2);
};

// Move the cursor
const run = () => {
  requestAnimationFrame(run);
  
  currentX += (targetX - currentX) * ease;
  currentY += (targetY - currentY) * ease;
  
  const t = `translate3d(${currentX}px,${currentY}px,0px)`;
  let s = cursor.style;
  
  s['transform'] = t;
  s['webkitTransform'] = t;
  s['mozTransform'] = t;
  s['msTransform'] = t;
};

run();

document.body.addEventListener('mousemove', onMouseMove);