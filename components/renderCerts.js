export function renderCerts(container, categoriesObj) {
  if (!container) return;

  const categories = Object.keys(categoriesObj);

  // Build tabs HTML
  const tabsHTML = `
    <div class="cert-tabs" role="tablist">
      ${categories.map((cat, i) => `
        <button
          class="cert-tab${i === 0 ? " is-active" : ""}"
          role="tab"
          data-cat="${cat}"
          aria-selected="${i === 0}"
        >${cat.charAt(0).toUpperCase() + cat.slice(1)}</button>
      `).join("")}
    </div>
  `;

  // Build panels HTML
  const panelsHTML = categories.map((cat, i) => `
    <div class="cert-panel${i === 0 ? " is-visible" : ""}" data-panel="${cat}" role="tabpanel">
      <div class="grid cards-grid">
        ${categoriesObj[cat].map(item => `
          <article class="card cert">
            <div class="cert-card-top">
              <span class="cert-category-badge">${item.badge}</span>
            </div>
            <h3>${item.name}</h3>
            <p class="cert-issuer">${item.issuer}</p>
            <p class="meta-label">${item.related}</p>
            <span class="cert-status">${item.status}</span>
          </article>
        `).join("")}
      </div>
    </div>
  `).join("");

  container.innerHTML = tabsHTML + panelsHTML;

  // Tab switching logic
  container.querySelector(".cert-tabs").addEventListener("click", (e) => {
    const btn = e.target.closest(".cert-tab");
    if (!btn) return;
    const cat = btn.dataset.cat;

    // Update active tab
    container.querySelectorAll(".cert-tab").forEach(b => {
      b.classList.toggle("is-active", b === btn);
      b.setAttribute("aria-selected", b === btn ? "true" : "false");
    });

    // Update visible panel
    container.querySelectorAll(".cert-panel").forEach(p => {
      p.classList.toggle("is-visible", p.dataset.panel === cat);
    });
  });
}

