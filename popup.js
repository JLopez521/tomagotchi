document.getElementById('feedUser').addEventListener('click', () => {
  const msg = document.getElementById('message');
  msg.style.display = "block";
  setTimeout(() => {
    msg.style.display = "none";
  }, 2000);

  startPizzaAnimation();
});
    document.getElementById('next').addEventListener('click', () => {
      const msg = document.getElementById('text');
      msg.style.display = "block";
      setTimeout(() => {
        msg.style.display = "none";
      }, 2000);
    });
const pizza = document.getElementById('pizza');

let animating = false;

function resetPizza() {
  pizza.style.top = '-100px'; // back above the screen
}

function startPizzaAnimation() {
  if (animating) return; // don't start if already running

  animating = true;
  let y = -100;          // same as CSS top
  const targetY = 170;   // where you want it to "hit" the boy

  function step() {
    y += 4;              // speed: 4px per frame
    pizza.style.top = y + 'px';

    if (y < targetY) {
      requestAnimationFrame(step);
    } else {
      // pause on his face, then reset
      setTimeout(() => {
        resetPizza();
        animating = false;
      }, 500);
    }
  }

  requestAnimationFrame(step);
}