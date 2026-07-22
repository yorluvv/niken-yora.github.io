export function renderBlog(container, items) {
  container.innerHTML = items
    .map(
      (item) => `
        <article class="glass card blog">
          <p class="eyebrow">${item.category}</p>
          <h3>${item.title}</h3>
          <p>${item.summary}</p>
          <p><a href="${item.link}">Read more</a></p>
        </article>`
    )
    .join("");
}
