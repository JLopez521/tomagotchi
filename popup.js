
document.getElementById('feedUser').addEventListener('click', () => {
    startPizzaAnimation();
      startHungryTimer();
      // Reset hunger timers + bar
  resetHunger();
  startHungryTimer();   // “no food for 1 min” timer
  startHungerDrain();   // bar draining timer
});
    document.getElementById('next').addEventListener('click', () => {
      const msg = document.getElementById('text');
      msg.style.display = "block";
      setTimeout(() => {
        msg.style.display = "none";
      }, 2000);
    });
  let hungryTimer = null;



const pizza = document.getElementById('pizza');

let animating = false;

function resetPizza() {
  pizza.style.top = '-100px'; // back above the screen
}

function startPizzaAnimation() {
  if (animating) return; // don't start if already running

  animating = true;
  let y = -100;       // same as CSS top
  const targetY = 310;   // where you want it to "hit" the boy  // roughly over his mouth

  function step() {
    y += 4;              // speed: 4px per frame
    pizza.style.top = y + 'px';

    if (y < targetY) {
      requestAnimationFrame(step);
    } else {
      // pause on his face, then reset
      setTimeout(() => {
          const msg = document.getElementById('message');
          msg.style.display = "block";
          setTimeout(() => {
          msg.style.display = "none";
          }, 2000);
        resetPizza();
        animating = false;
      }, 200);
    }
  }

  requestAnimationFrame(step);
}