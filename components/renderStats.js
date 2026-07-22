export function renderStats(container, items) {
  container.innerHTML = items
    .map(
      (item) => `
        <article class="glass stat">
          <strong>${item.value}</strong>
          <span>${item.label}</span>
        </article>`
    )
    .join("");
}
