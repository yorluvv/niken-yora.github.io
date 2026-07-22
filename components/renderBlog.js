export function renderBlog(container, items) {
  container.innerHTML = items
    .map(
      (item) => `
        <article class="card blog">
          <p class="eyebrow">${item.category}</p>
          <h3>${item.title}</h3>
          <p>${item.summary}</p>
          <p><a class="card-link" href="${item.link}">Read Article &rarr;</a></p>
        </article>`
    )
    .join("");
}
