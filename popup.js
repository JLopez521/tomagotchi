document.getElementById('feedUser').addEventListener('click', () => {
    startPizzaAnimation();
      startHungryTimer();
});
    document.getElementById('next').addEventListener('click', () => {
      const msg = document.getElementById('text');
      msg.style.display = "block";
      setTimeout(() => {
        msg.style.display = "none";
      }, 2000);
    });
  let hungryTimer = null;

// Show the hungry bubble
function showHungryMessage() {
  const hm = document.getElementById("hungryMessage");
  hm.style.display = "block";

  // Hide after 3 seconds
  setTimeout(() => {
    hm.style.display = "none";
  }, 3000);

  // Restart timer after the message
  startHungryTimer();
}

// Starts (or restarts) the 1-minute timer
function startHungryTimer() {
  // Clear the old timer so it resets
  if (hungryTimer !== null) {
    clearTimeout(hungryTimer);
  }

  // Start a new 60-second no-feeding countdown
  hungryTimer = setTimeout(showHungryMessage, 60000);
}

// Every time the popup opens, start the timer
startHungryTimer();

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