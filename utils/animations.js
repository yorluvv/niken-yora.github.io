export function initAnimations() {
  // Scroll-reveal via IntersectionObserver (GPU-safe, no scroll listener)
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  // Observe all section children that should animate in
  document.querySelectorAll(".section-head, .card, .stat-card, .skill").forEach((el) => {
    el.classList.add("reveal");
    observer.observe(el);
  });
}
