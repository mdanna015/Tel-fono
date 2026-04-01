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
  alert("🗑 Movida a eliminados");
}

function renderDeleted() {
  const container = document.getElementById("deleted");

  container.innerHTML = "<p>🗑 Eliminados</p><div class='grid'></div>";
  const grid = container.querySelector(".grid");

  deletedPhotos.forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    img.onclick = () => openPhoto(src);
    grid.appendChild(img);
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
