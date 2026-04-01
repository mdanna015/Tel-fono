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
let deletedPhotos = [];

function moveToDeleted(src) {
  deletedPhotos.push(src);
  alert("Movida a eliminados");
  renderDeleted();
}

function renderDeleted() {
  const container = document.getElementById("deleted");
  container.innerHTML = "<h4>🗑 Eliminados</h4>";

  deletedPhotos.forEach(src => {
    container.innerHTML += `<img src="${src}" onclick="openPhoto('${src}')">`;
  });
}
function closePhoto() {
  openApp('photos');
}
const hiddenCode = "1105"; // tú decides

function openHidden() {
  let code = prompt("Código requerido");

  if(code === hiddenCode) {
    showGallery('hidden');
  } else {
    alert("Código incorrecto");
  }
}
