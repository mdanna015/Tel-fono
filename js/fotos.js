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

let deletedPhotos = [];

function moveToDeleted(src) {
  deletedPhotos.push(src);
  renderDeleted();
  alert("🗑 Foto movida a eliminados");
}

function renderDeleted() {
  const container = document.getElementById("deleted");

  container.innerHTML = "<p>🗑 Eliminados</p>";

  deletedPhotos.forEach(src => {
    container.innerHTML += `
      <img src="${src}" onclick="openPhoto('${src}')">
    `;
  });
}
const hiddenCode = "1105";

function openHidden() {
  let code = prompt("Ingresa el código");

  if(code === hiddenCode) {
    document.getElementById("hiddenContent").classList.remove("hidden");
  } else {
    alert("❌ Código incorrecto");
  }
}
