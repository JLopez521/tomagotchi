    document.getElementById('feedUser').addEventListener('click', () => {
      const msg = document.getElementById('message');
      msg.style.display = "block";
      setTimeout(() => {
        msg.style.display = "none";
      }, 2000);
    });
    document.getElementById('next').addEventListener('click', () => {
      const msg = document.getElementById('text');
      msg.style.display = "block";
      setTimeout(() => {
        msg.style.display = "none";
      }, 2000);
    });
        // Example for moving a sprite with JavaScript
    let spriteElement = document.getElementById('mySprite');
    let xPos = 0;

    function animateSprite() {
        xPos += 5; // Move 5 pixels to the right
        spriteElement.style.left = xPos + 'px';
        requestAnimationFrame(animateSprite);
    }

    // Call animateSprite() to start the animation
    // You might trigger this on a button click or when the extension loads