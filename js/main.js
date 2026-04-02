function show(screen) {
  document.querySelectorAll('.screen').forEach(s => {
    s.classList.remove('active');
    s.classList.add('hidden');
  });

  const target = document.getElementById(screen);
  target.classList.remove('hidden');
  target.classList.add('active');
}

function openApp(app) {
  show(app);
}
