function goHome() {
  document.querySelectorAll('.screen.active')
    .forEach(s => s.classList.remove('active'));

  const home = document.getElementById('home');
  home.classList.remove('hidden');
  home.classList.add('active');
}
