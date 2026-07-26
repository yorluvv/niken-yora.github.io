export function renderExperience(container, items) {
  if (!container) return;
  container.innerHTML = items
    .map(
      (item) => `
        <article class="card experience">
          <div class="tags-row" style="margin-bottom: 0.5rem; display: flex; justify-content: space-between; align-items: center;">
            <span class="tag">${item.category}</span>
            <span class="meta-label" style="font-size: 0.8rem;">${item.date}</span>
          </div>
          <h3>${item.title}</h3>
          <p class="cert-issuer" style="margin-bottom: 0.5rem; color: var(--sunset-gold) !important;">${item.role}</p>
          <p>${item.summary}</p>
        </article>`
    )
    .join("");
}
