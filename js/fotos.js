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

function openDeleted() {
  let code = prompt("Código para eliminados");

  if(code === "0000") {
    showGallery('deleted');
  } else {
    alert("❌ Código incorrecto");
  }
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
