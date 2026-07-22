export function initFilters(container, filters, items, grid) {
  container.innerHTML = filters
    .map((filter, index) => `<button class="${index === 0 ? "is-active" : ""}" data-filter="${filter}">${filter}</button>`)
    .join("");

  container.addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (!button) return;
    const filter = button.dataset.filter;
    container.querySelectorAll("button").forEach((el) => el.classList.toggle("is-active", el === button));
    grid.querySelectorAll(".project").forEach((card, index) => {
      const show = filter === "All" || items[index].category === filter;
      card.style.display = show ? "" : "none";
    });
  });
}
