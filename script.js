const searchInput = document.getElementById("search");
const items = document.querySelectorAll(".item");

searchInput.addEventListener("input", () => {
  const value = searchInput.value.toLowerCase();

  items.forEach((item) => {
    const name = item.dataset.name.toLowerCase();

    if (name.includes(value)) {
      // mostrar con animacion si esta oculto
      if (item.style.display === "none" || item.classList.contains("hiding")) {
        item.style.display = "flex"; // Mostrar para el layout flex/grid
        item.classList.remove("hiding");
        // reflow
        void item.offsetWidth;
        // animacion cuando aparece
        item.style.opacity = 0;
        item.style.transform = "scale(0.95)";
        setTimeout(() => {
          item.style.transition = "opacity 0.3s ease, transform 0.3s ease";
          item.style.opacity = 1;
          item.style.transform = "scale(1)";
        }, 10);
      }
    } else {
      // animar cuando desaparace
      if (item.style.display !== "none" && !item.classList.contains("hiding")) {
        item.classList.add("hiding");
        item.style.transition = "opacity 0.3s ease, transform 0.3s ease";
        item.style.opacity = 0;
        item.style.transform = "scale(0.95)";
        setTimeout(() => {
          if (item.classList.contains("hiding")) {
            item.style.display = "none";
          }
        }, 300);
      }
    }
  });
});