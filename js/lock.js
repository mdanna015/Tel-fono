// swipe
let startY = 0;

document.getElementById("lock").addEventListener("touchstart", e => {
  startY = e.touches[0].clientY;
});

document.getElementById("lock").addEventListener("touchend", e => {
  let endY = e.changedTouches[0].clientY;
  if(startY - endY > 50) show("pin");
});

// hora
setInterval(() => {
  const now = new Date();
  document.getElementById("time").innerText =
    now.toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'});
  document.getElementById("date").innerText =
    now.toLocaleDateString();
}, 1000);

// PIN
let pin = "";
const correctPin = "1115";

function press(n) {
  if(pin.length < 4) {
    pin += n;
    updateDots();
  }

  if(pin.length === 4) {
    if(pin === correctPin) show("home");
    else {
      pin = "";
      updateDots();
      alert("PIN incorrecto");
    }
  }
}

function updateDots() {
  const dots = document.querySelectorAll(".dot");
  dots.forEach((d,i)=>{
    d.classList.toggle("filled", i < pin.length);
  });
}

function clearPin() {
  pin = pin.slice(0,-1);
  updateDots();
}
