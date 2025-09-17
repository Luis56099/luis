// Año dinámico
document.getElementById("year").textContent = new Date().getFullYear();

const players = document.querySelectorAll(".player");
const tooltip = document.getElementById("tooltip");

// Mostrar tooltip al pasar el mouse
players.forEach(player => {
  player.addEventListener("mouseenter", e => {
    const name = player.dataset.name;
    const info = player.dataset.info;
    tooltip.innerHTML = `<strong>${name}</strong><br>${info}`;
    tooltip.style.display = "block";
  });
  player.addEventListener("mousemove", e => {
    tooltip.style.top = (e.pageY + 15) + "px";
    tooltip.style.left = (e.pageX + 15) + "px";
  });
  player.addEventListener("mouseleave", () => {
    tooltip.style.display = "none";
  });
});