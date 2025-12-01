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