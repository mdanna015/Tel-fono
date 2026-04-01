let deletedPhotos = [];

function showGallery(tab) {
  document.querySelectorAll('.gallery-tab')
    .forEach(t => t.classList.add('hidden'));

  document.getElementById(tab)
    .classList.remove('hidden');
}

function openPhoto(src) {
  document.getElementById("photoViewer").classList.remove("hidden");
  document.getElementById("fullPhoto").src = src;
}

function closePhoto() {
  document.getElementById("photoViewer").classList.add("hidden");
}

function moveToDeleted(src) {
  deletedPhotos.push(src);
  renderDeleted();
  alert("Movida a eliminados");
}

function renderDeleted() {
  const container = document.getElementById("deleted");

  container.innerHTML = "<h4>🗑 Eliminados</h4>";

  deletedPhotos.forEach(src => {
    container.innerHTML += `
      <img src="${src}" onclick="openPhoto('${src}')">
    `;
  });
}

const hiddenCode = "1105";

function openHidden() {
  let code = prompt("Código requerido");

  if(code === hiddenCode) {
    showGallery('hidden');
  } else {
    alert("Código incorrecto");
  }
}
