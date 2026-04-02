// =======================
// HISTORIAL GLOBAL
// =======================

let historyStack = [];

// =======================
// MOSTRAR PANTALLA
// =======================

function show(screenId) {
  document.querySelectorAll('.screen').forEach(s => {
    s.classList.remove('active');
    s.classList.add('hidden');
  });

  const screen = document.getElementById(screenId);
  if (screen) {
    screen.classList.remove('hidden');
    screen.classList.add('active');
  }
}

// =======================
// ABRIR APP (GUARDA HISTORIAL)
// =======================

function openApp(screenId) {
  const current = document.querySelector('.screen.active')?.id;

  if (current && current !== screenId) {
    historyStack.push(current);
  }

  show(screenId);
}

// =======================
// VOLVER ATRÁS
// =======================

function goBack() {
  if (historyStack.length === 0) {
    show('home');
    return;
  }

  const prev = historyStack.pop();
  show(prev);
}
