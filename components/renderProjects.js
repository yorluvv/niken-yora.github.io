export function renderProjects(container, items) {
  container.innerHTML = items
    .map(
      (item) => `
        <article class="glass card project" data-category="${item.category}">
          <p class="eyebrow">${item.category}</p>
          <h3>${item.title}</h3>
          <p>${item.desc}</p>
          <div>${item.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}</div>
          <p><a href="${item.link}">${item.cta}</a></p>
        </article>`
    )
    .join("");
}
