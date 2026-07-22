export function renderCerts(container, items) {
  container.innerHTML = items
    .map(
      (item) => `
        <article class="card cert">
          <p class="eyebrow">${item.badge}</p>
          <h3>${item.name}</h3>
          <p class="cert-issuer">${item.issuer}</p>
          <p class="meta-label">${item.related}</p>
          <span class="cert-status">${item.status}</span>
        </article>`
    )
    .join("");
}
