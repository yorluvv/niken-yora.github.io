export function renderStats(container, items) {
  container.innerHTML = items
    .map(
      (item) => `
        <article class="stat-card">
          <strong>${item.value}</strong>
          <span>${item.label}</span>
        </article>`
    )
    .join("");
}
