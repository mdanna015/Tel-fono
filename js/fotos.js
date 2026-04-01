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

const hiddenCode = "1105";

function openHidden() {
  let code = prompt("Ingresa el código");

  if(code === hiddenCode) {
    document.getElementById("hiddenContent").classList.remove("hidden");
  } else {
    alert("❌ Código incorrecto");
  }
}
// Código para eliminados
const eliminatedCode = "0000"; // código propio

function openEliminated() {
  let code = prompt("Ingresa el código para eliminados");

  if(code === eliminatedCode) {
    document.getElementById("eliminatedContent").classList.remove("hidden");
  } else {
    alert("❌ Código incorrecto");
  }
}
