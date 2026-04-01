function showTab(tab) {
  document.querySelectorAll('.tab').forEach(t => t.classList.add('hidden'));
  document.getElementById(tab).classList.remove('hidden');
}

function openProfile() {
  openApp('profile');
}

function openStatus(id) {
  openApp(id);
}
