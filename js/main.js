function show(screen) {
  document.querySelectorAll('.screen').forEach(s => {
    s.classList.remove('active');
    s.classList.add('hidden');
  });

  document.getElementById(screen).classList.remove('hidden');
  document.getElementById(screen).classList.add('active');
}

function openApp(app) {
  show(app);
}
