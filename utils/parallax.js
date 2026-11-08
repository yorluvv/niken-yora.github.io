/**
 * Multi-Layer Parallax Engine & Sky Stars Generator
 * On-demand Lerp Tracking (Scroll + Mouse Tilt) with idle sleeping to save CPU/battery.
 */

export function initSkyStars() {
  const starHost = document.getElementById("stars-layer");
  if (!starHost) return;
  starHost.innerHTML = "";
  const totalStars = 42;

  for (let i = 0; i < totalStars; i++) {
    const star = document.createElement("div");
    star.className = "star-speck";

    const size = (Math.random() * 2 + 1.2).toFixed(1);
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.left = `${(Math.random() * 100).toFixed(2)}%`;
    star.style.top = `${(Math.random() * 95).toFixed(2)}%`;

    const duration = (Math.random() * 3 + 2.5).toFixed(1);
    const delay = (Math.random() * 4).toFixed(1);
    star.style.animationDuration = `${duration}s`;
    star.style.animationDelay = `${delay}s`;

    starHost.appendChild(star);
  }
}

export function initParallax() {
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReduced) return;

  const layerSky = document.getElementById("layer-sky");
  const layerSun = document.getElementById("layer-sun");
  const layerClouds = document.getElementById("layer-clouds");
  const layerMtnBack = document.getElementById("layer-mtn-back");
  const layerMtnFront = document.getElementById("layer-mtn-front");
  const heroTerminal = document.getElementById("hero-terminal");

  let mouseX = 0;
  let mouseY = 0;
  let targetMouseX = 0;
  let targetMouseY = 0;
  let currentScrollY = 0;
  let targetScrollY = 0;
  let isRunning = false;

  function updateTransforms() {
    // Layer 1: Sky & Stars (~0.08x scroll, subtle mouse sway)
    if (layerSky) {
      const y = currentScrollY * 0.08;
      const mx = mouseX * 4;
      const my = mouseY * 3;
      layerSky.style.transform = `translate3d(${mx}px, ${y + my}px, 0)`;
    }

    // Layer 2: Sun & Corona (~0.22x scroll, sinks down gracefully)
    if (layerSun) {
      const y = currentScrollY * 0.22;
      const mx = mouseX * 7;
      const my = mouseY * 5;
      const sunFade = Math.max(0.35, 1 - currentScrollY / 1300);
      layerSun.style.transform = `translate3d(${mx}px, ${y + my}px, 0)`;
      layerSun.style.opacity = sunFade;
    }

    // Layer 3: Sunset Cloud Waves (~0.35x scroll)
    if (layerClouds) {
      const y = currentScrollY * 0.35;
      const mx = mouseX * 10;
      const my = mouseY * 7;
      layerClouds.style.transform = `translate3d(${mx}px, ${y + my}px, 0)`;
    }

    // Layer 4: Distant Mountains (~0.48x scroll)
    if (layerMtnBack) {
      const y = currentScrollY * 0.48;
      const mx = mouseX * 12;
      const my = mouseY * 8;
      layerMtnBack.style.transform = `translate3d(${mx}px, ${y + my}px, 0)`;
    }

    // Layer 5: Foreground Rolling Dusk Slopes (~0.72x scroll)
    if (layerMtnFront) {
      const y = currentScrollY * 0.72;
      const mx = mouseX * 15;
      const my = mouseY * 11;
      layerMtnFront.style.transform = `translate3d(${mx}px, ${y + my}px, 0)`;
    }

    // Floating Terminal Subtle Counter Sway
    if (heroTerminal && currentScrollY < 900) {
      const mx = -mouseX * 6;
      const my = -mouseY * 5;
      heroTerminal.style.transform = `translate3d(${mx}px, ${my}px, 0)`;
    }
  }

  function loop() {
    const dx = targetMouseX - mouseX;
    const dy = targetMouseY - mouseY;
    const ds = targetScrollY - currentScrollY;

    if (Math.abs(dx) < 0.0005 && Math.abs(dy) < 0.0005 && Math.abs(ds) < 0.05) {
      mouseX = targetMouseX;
      mouseY = targetMouseY;
      currentScrollY = targetScrollY;
      updateTransforms();
      isRunning = false;
      return;
    }

    mouseX += dx * 0.065;
    mouseY += dy * 0.065;
    currentScrollY += ds * 0.1;
    updateTransforms();

    requestAnimationFrame(loop);
  }

  function requestTick() {
    if (!isRunning) {
      isRunning = true;
      requestAnimationFrame(loop);
    }
  }

  window.addEventListener(
    "scroll",
    () => {
      targetScrollY = window.pageYOffset || document.documentElement.scrollTop;
      requestTick();
    },
    { passive: true }
  );

  window.addEventListener(
    "mousemove",
    (e) => {
      targetMouseX = (e.clientX / window.innerWidth) * 2 - 1;
      targetMouseY = (e.clientY / window.innerHeight) * 2 - 1;
      requestTick();
    },
    { passive: true }
  );

  // Initial draw
  requestTick();
}
