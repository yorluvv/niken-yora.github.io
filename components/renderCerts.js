export function renderCerts(container, items) {
  container.innerHTML = items
    .map(
      (item) => `
        <article class="glass card cert">
          <p class="eyebrow">${item.badge}</p>
          <h3>${item.name}</h3>
          <p>${item.issuer}</p>
          <p class="meta-label">${item.related}</p>
          <p>${item.status}</p>
        </article>`
    )
    .join("");
}
