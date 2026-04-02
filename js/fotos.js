// =======================
// GALERÍA GENERAL
// =======================

function showGallery(tab) {
  document.querySelectorAll('.gallery-tab')
    .forEach(t => t.classList.add('hidden'));

  document.getElementById(tab)
    .classList.remove('hidden');
  
  // Reset ocultos y eliminados
  document.getElementById("hiddenContent").classList.add("hidden");
  document.getElementById("eliminatedContent").classList.add("hidden");

  // Reset especial para álbumes
  if (tab === "albums") {
    document.getElementById("albumView").classList.add("hidden");
    document.getElementById("albumsList").classList.remove("hidden");
  }
}

// =======================
// VISOR DE FOTO
// =======================

function openPhoto(src) {
  document.getElementById("photoViewer").classList.remove("hidden");
  document.getElementById("fullPhoto").src = src;
}

function closePhoto() {
  document.getElementById("photoViewer").classList.add("hidden");
}

// =======================
// OCULTOS
// =======================

const hiddenCode = "1105";

function openHidden() {
  let code = prompt("Ingresa el código");

  if (code === hiddenCode) {
    document.getElementById("hiddenContent").classList.remove("hidden");
  } else {
    alert("❌ Código incorrecto");
  }
}

// =======================
// ELIMINADOS
// =======================

const eliminatedCode = "0000";

function openEliminated() {
  let code = prompt("Ingresa el código para eliminados");

  if (code === eliminatedCode) {
    document.getElementById("eliminatedContent").classList.remove("hidden");
  } else {
    alert("❌ Código incorrecto");
  }
}
// =======================
// ACCESO DIRECTO DESDE BARRA
// =======================

function accessHidden() {
  let code = prompt("Código para carpeta oculta");

  if (code === hiddenCode) {
    showGallery('hidden');
    document.getElementById("hiddenContent").classList.remove("hidden");
  } else {
    alert("❌ Código incorrecto");
  }
}

function accessEliminated() {
  let code = prompt("Código para eliminados");

  if (code === eliminatedCode) {
    showGallery('eliminated');
    document.getElementById("eliminatedContent").classList.remove("hidden");
  } else {
    alert("❌ Código incorrecto");
  }
}
// =======================
// FAVORITOS
// =======================

function renderFavorites() {
  const grid = document.getElementById('favoritesGrid');
  if (!grid) return;

  grid.innerHTML = '';

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

// =======================
// ÁLBUMES
// =======================

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

function openAlbum(name) {
  document.getElementById("albumsList").classList.add("hidden");
  document.getElementById("albumView").classList.remove("hidden");

  const grid = document.getElementById("albumGrid");
  grid.innerHTML = "";

  if (!albumsData[name]) return;

  albumsData[name].forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    img.onclick = () => openPhoto(src);
    grid.appendChild(img);
  });
}

function backToAlbums() {
  document.getElementById("albumView").classList.add("hidden");
  document.getElementById("albumsList").classList.remove("hidden");
}

// =======================
// INIT
// =======================

document.addEventListener("DOMContentLoaded", () => {
  renderFavorites();
});
