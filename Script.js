// Guardamos el título original
const tituloOriginal = document.title;

// Detectamos cambio de pestaña
document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    document.title = "¡Volvé a Batata Rojense!";
  } else {
    document.title = tituloOriginal;
  }
});