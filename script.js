// Seleccionamos a todos los "jugadores" (elementos con animación)
const scrollElements = document.querySelectorAll(".js-scroll");

// Verificamos si el jugador está en el campo (pantalla visible)
const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

// Verificamos si el jugador salió del campo (pantalla)
const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

// El jugador entra al partido
const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

// El jugador se va al banco
const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

// Controlamos la jugada: activamos animaciones al hacer scroll
const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el); // Jugador aparece con efecto
    } else if (elementOutofView(el)) {
      hideScrollElement(el); // Jugador desaparece
    }
  });
};

// El partido (scroll) empieza
window.addEventListener("scroll", () => { 
  handleScrollAnimation();
});