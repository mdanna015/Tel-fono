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

// Mueve foto a eliminados
function moveToDeleted(src) {
  if(!deletedPhotos.includes(src)) {
    deletedPhotos.push(src);
    renderDeleted();
    alert("🗑 Foto movida a eliminados");
  }
}

// Dibuja fotos eliminadas
function renderDeleted() {
  const grid = document.getElementById('deletedGrid');
  grid.innerHTML = ''; // limpiar

  deletedPhotos.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    img.onclick = () => openPhoto(src);
    grid.appendChild(img);
  });
}

// Abre galería eliminados con código
function openDeleted() {
  let code = prompt("Código para eliminados");

  if(code === "0000") {
    showGallery('deleted');
    renderDeleted();
  } else {
    alert("❌ Código incorrecto");
  }
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
