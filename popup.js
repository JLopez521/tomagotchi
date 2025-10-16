    document.getElementById('feedUser').addEventListener('click', () => {
      const msg = document.getElementById('message');
      msg.style.display = "block";
      setTimeout(() => {
        msg.style.display = "none";
      }, 2000);
    });
    document.getElementById('next').addEventListener('click', () => {
      alert("We don't shower... give it a week.");
    });