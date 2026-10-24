/**
 * Accessible Responsive Mobile Navigation Controller
 * Handles hamburger toggle, aria states, outside clicks, escape key, and auto-close on link navigation.
 */
export function initMobileNav() {
  const toggle = document.getElementById("nav-toggle");
  const topbar = document.querySelector(".topbar");
  const nav = document.getElementById("main-nav");
  if (!toggle || !topbar || !nav) return;

  const closeNav = () => {
    topbar.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  };

  toggle.addEventListener("click", (e) => {
    e.stopPropagation();
    const isOpen = topbar.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      closeNav();
    });
  });

  document.addEventListener("click", (e) => {
    if (!topbar.contains(e.target)) {
      closeNav();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && topbar.classList.contains("is-open")) {
      closeNav();
      toggle.focus();
    }
  });

  window.addEventListener(
    "scroll",
    () => {
      if (topbar.classList.contains("is-open")) {
        closeNav();
      }
    },
    { passive: true }
  );
}
