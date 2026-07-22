export function initAnimations() {
  document.querySelectorAll(".section").forEach((section) => {
    section.animate([{ opacity: 0, transform: "translateY(18px)" }, { opacity: 1, transform: "translateY(0)" }], {
      duration: 700,
      easing: "ease-out",
      fill: "both",
      delay: 100,
    });
  });

  const ticks = document.getElementById("ticks-container");
  if (ticks) {
    ticks.innerHTML = Array.from({ length: 12 }, () => "<span></span>").join("");
  }
}
