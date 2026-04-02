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

// Favoritos funcional (solo muestra las fotos existentes)
function renderFavorites() {
  const grid = document.getElementById('favoritesGrid');
  grid.innerHTML = ''; // limpiar
  // Ejemplo de fotos favoritas
  const favs = [
    "https://picsum.photos/200?10",
    "https://picsum.photos/200?11",
    "https://picsum.photos/200?12"
  ];
  favs.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    img.onclick = () => openPhoto(src);
    grid.appendChild(img);
  });
}
renderFavorites();

// Datos de álbumes
const albumsData = {
  viajes: [
    "https://picsum.photos/200?20",
    "https://picsum.photos/200?21"
  ],
  amigos: [
    "https://picsum.photos/200?30",
    "https://picsum.photos/200?31"
  ],
  recuerdos: [
    "https://picsum.photos/200?40",
    "https://picsum.photos/200?41"
  ],
  otros: [
    "https://picsum.photos/200?50"
  ]
};

// Abrir álbum
function openAlbum(name) {
  document.getElementById("albumsList").classList.add("hidden");
  document.getElementById("albumView").classList.remove("hidden");

  const grid = document.getElementById("albumGrid");
  grid.innerHTML = "";

  albumsData[name].forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    img.onclick = () => openPhoto(src);
    grid.appendChild(img);
  });
}

// Volver a la lista de álbumes
function backToAlbums() {
  document.getElementById("albumView").classList.add("hidden");
  document.getElementById("albumsList").classList.remove("hidden");
}
