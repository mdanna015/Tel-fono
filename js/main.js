function show(screen) {
  document.querySelectorAll('.screen').forEach(s => {
    s.classList.remove('active');
    s.classList.add('hidden');
  });

  const target = document.getElementById(screen);

  if (!target) {
    console.error("Pantalla no encontrada:", screen);
    return; // 👈 evita que TODO se rompa
  }

  target.classList.remove('hidden');
  target.classList.add('active');
}

function openApp(app) {
  if (!app) return; // 👈 evita llamadas vacías
  show(app);
}
