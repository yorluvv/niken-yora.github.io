export function initFilters(container, filters, items, grid) {
  if (!container || !grid) return;
  container.innerHTML = filters
    .map((filter, index) => `<button class="${index === 0 ? "is-active" : ""}" data-filter="${filter}">${filter}</button>`)
    .join("");

  container.addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (!button) return;
    const filter = (button.dataset.filter || "").toLowerCase();
    container.querySelectorAll("button").forEach((el) => el.classList.toggle("is-active", el === button));
    
    Array.from(grid.children).forEach((card) => {
      const cat = (card.dataset.category || "").toLowerCase();
      const show = filter === "all" || cat.includes(filter);
      card.style.display = show ? "" : "none";
    });
  });
}
