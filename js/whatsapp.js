function showTab(tab) {
  document.querySelectorAll('.tab')
    .forEach(t => t.classList.add('hidden'));

  document.getElementById(tab)
    .classList.remove('hidden');
}

// STATUS
let statusIndex = 0;

const statuses = [
  "https://picsum.photos/300/600?1",
  "https://picsum.photos/300/600?2",
  "https://picsum.photos/300/600?3"
];

function openStatus(id) {
  openApp(id);
  playStatus();
}

function playStatus() {
  let progress = document.getElementById("statusProgress");
  let img = document.getElementById("statusImg");

  progress.style.width = "0%";
  img.src = statuses[statusIndex];

  let width = 0;

  let interval = setInterval(() => {
    width += 1;
    progress.style.width = width + "%";

    if (width >= 100) {
      clearInterval(interval);
      nextStatus();
    }
  }, 50);
}

function nextStatus() {
  statusIndex++;

  if (statusIndex < statuses.length) {
    playStatus();
  } else {
    closeStatus();
  }
}

function closeStatus() {
  statusIndex = 0;
  openApp('whatsapp');
}

// AUDIO
function toggleAudio(id, btn) {
  const audio = document.getElementById(id);
  const progress = document.getElementById("progress-" + id);

  if (audio.paused) {
    audio.play();
    btn.innerText = "⏸";
  } else {
    audio.pause();
    btn.innerText = "▶";
  }

  audio.ontimeupdate = () => {
    let percent = (audio.currentTime / audio.duration) * 100;
    progress.style.width = percent + "%";
  };
}
