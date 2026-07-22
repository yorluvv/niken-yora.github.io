export function renderSkills(container, items) {
  container.innerHTML = items
    .map(
      (item) => `
        <div class="skill">
          <div class="skill-row"><span>${item.label}</span><span>${item.level}%</span></div>
          <div class="bar"><i style="width:${item.level}%"></i></div>
        </div>`
    )
    .join("");
}
