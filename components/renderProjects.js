export function renderProjects(container, items) {
  container.innerHTML = items
    .map(
      (item) => `
        <article class="card project" data-category="${item.category}">
          <p class="eyebrow">${item.category}</p>
          <h3>${item.title}</h3>
          <p>${item.desc}</p>
          <div class="tags-row">${item.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}</div>
          <p><a class="card-link" href="${item.link}">${item.cta} &rarr;</a></p>
        </article>`
    )
    .join("");
}
