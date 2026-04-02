function openApp(appId) {
  document.querySelectorAll('.screen')
    .forEach(s => {
      s.classList.remove('active');
      s.classList.add('hidden');
    });

  const app = document.getElementById(appId);

  if (!app) {
    console.error("No existe:", appId);
    return;
  }

  app.classList.remove('hidden');
  app.classList.add('active');
}
