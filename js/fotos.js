function showGallery(tab) {
  document.querySelectorAll('.gallery-tab')
    .forEach(t => t.classList.add('hidden'));

  document.getElementById(tab)
    .classList.remove('hidden');
}
function openPhoto(src) {
  document.getElementById("fullPhoto").src = src;
  openApp('photoViewer');
}

function closePhoto() {
  openApp('photos');
}
