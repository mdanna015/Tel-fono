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
  alert("Movida a eliminados");
  renderDeleted();
}

function renderDeleted() {
  const container = document.getElementById("deleted");
  container.innerHTML = "<p>🗑 Eliminados</p>";

  deletedPhotos.forEach(src => {
    container.innerHTML += `<img src="${src}" onclick="openPhoto('${src}')">`;
  });
}

const hiddenCode = "1105";

function openHidden() {
  let code = prompt("Código requerido");

  if(code === hiddenCode) {
    document.getElementById("hiddenContent").classList.remove("hidden");
  } else {
    alert("Código incorrecto");
  }
}
