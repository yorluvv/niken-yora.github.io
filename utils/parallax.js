/**
 * Multi-Layer Parallax Engine, Sky Stars Generator & Interactive Ember Particles
 * 60FPS Lerp Tracking (Scroll + Mouse Tilt) & Terminal Typing Simulation
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

  window.addEventListener(
    "scroll",
    () => {
      targetScrollY = window.pageYOffset || document.documentElement.scrollTop;
    },
    { passive: true }
  );

  window.addEventListener(
    "mousemove",
    (e) => {
      targetMouseX = (e.clientX / window.innerWidth) * 2 - 1;
      targetMouseY = (e.clientY / window.innerHeight) * 2 - 1;
    },
    { passive: true }
  );

  function loop() {
    mouseX += (targetMouseX - mouseX) * 0.065;
    mouseY += (targetMouseY - mouseY) * 0.065;
    currentScrollY += (targetScrollY - currentScrollY) * 0.1;

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

    requestAnimationFrame(loop);
  }

  requestAnimationFrame(loop);
}

export function initInteractiveEmbers(canvas) {
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  let particles = [];
  const PARTICLE_COUNT = 65;
  let canvasW = 0;
  let canvasH = 0;
  let mousePos = { x: -1000, y: -1000 };

  function resize() {
    canvasW = canvas.width = window.innerWidth;
    canvasH = canvas.height = window.innerHeight;
  }

  window.addEventListener("resize", () => {
    resize();
    if (!prefersReduced && particles.length === 0) {
      init();
    }
  });

  window.addEventListener("mousemove", (e) => {
    mousePos.x = e.clientX;
    mousePos.y = e.clientY;
  });

  const PALETTE = [
    "255, 230, 84", // Sun Bright
    "255, 170, 41", // Warm Amber
    "255, 112, 51", // Sunset Orange
    "219, 80, 93",  // Sunset Rose
    "255, 255, 255" // Stardust White
  ];

  class SunsetEmber {
    constructor() {
      this.reset(true);
    }

    reset(initial = false) {
      this.x = Math.random() * canvasW;
      this.y = initial ? Math.random() * canvasH : canvasH + Math.random() * 25;
      this.radius = Math.random() * 2.2 + 0.8;
      this.baseRadius = this.radius;
      this.vy = -(Math.random() * 0.45 + 0.2);
      this.vx = (Math.random() - 0.5) * 0.35;
      this.rgb = PALETTE[Math.floor(Math.random() * PALETTE.length)];
      this.alpha = Math.random() * 0.55 + 0.2;
      this.baseAlpha = this.alpha;
      this.pulseSpeed = Math.random() * 0.02 + 0.01;
      this.pulseVal = Math.random() * Math.PI * 2;
    }

    update() {
      if (prefersReduced) return;

      this.pulseVal += this.pulseSpeed;
      this.y += this.vy;
      this.x += this.vx + Math.sin(this.pulseVal) * 0.25;

      const dx = mousePos.x - this.x;
      const dy = mousePos.y - this.y;
      const dist = Math.hypot(dx, dy);
      const maxDist = 130;

      if (dist < maxDist) {
        const angle = Math.atan2(dy, dx);
        const force = (1 - dist / maxDist) * 1.5;
        this.x -= Math.cos(angle) * force;
        this.y -= Math.sin(angle) * force;
        this.alpha = Math.min(0.95, this.baseAlpha + (1 - dist / maxDist) * 0.5);
        this.radius = this.baseRadius * 1.4;
      } else {
        this.alpha = this.baseAlpha + Math.sin(this.pulseVal) * 0.18;
        this.radius = this.baseRadius;
      }

      if (this.y < -20 || this.x < -30 || this.x > canvasW + 30) {
        this.reset(false);
      }
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, Math.max(0.2, this.radius), 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${this.rgb}, ${Math.max(0, this.alpha)})`;
      ctx.shadowColor = `rgba(${this.rgb}, 0.8)`;
      ctx.shadowBlur = this.radius * 3.5;
      ctx.fill();
      ctx.shadowBlur = 0;
    }
  }

  function init() {
    resize();
    particles = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push(new SunsetEmber());
    }
  }

  function loop() {
    ctx.clearRect(0, 0, canvasW, canvasH);
    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();
    }
    if (!prefersReduced) {
      requestAnimationFrame(loop);
    }
  }

  init();
  if (!prefersReduced) {
    requestAnimationFrame(loop);
  } else {
    loop();
  }
}

export async function initConsoleSimulation(consoleBox) {
  if (!consoleBox) return;
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const commands = [
    { cmd: "whoami", out: "yora" },
    { cmd: "cat base.txt", out: "Politeknik Negeri Cilacap — Blue Team & Cyber Defense" },
    { cmd: "cat toolkit.txt", out: "BurpSuite • Wireshark • Nmap • Android Studio" },
    { cmd: "status", out: '<span class="c-badge">READY TO DEFEND UNDER THE GLOW</span>' }
  ];

  consoleBox.innerHTML = "";

  if (prefersReduced) {
    consoleBox.innerHTML = commands
      .map(
        (c) => `
        <div class="c-line"><span class="c-prompt">sec-student@kali:~$</span> <span class="c-cmd">${c.cmd}</span></div>
        <div class="c-line c-out">${c.out}</div>
      `
      )
      .join("");
    return;
  }

  for (let i = 0; i < commands.length; i++) {
    const item = commands[i];

    const line = document.createElement("div");
    line.className = "c-line";
    line.innerHTML = `<span class="c-prompt">sec-student@kali:~$</span> <span class="c-cmd"></span><span class="blinking-caret"></span>`;
    consoleBox.appendChild(line);

    const cmdTarget = line.querySelector(".c-cmd");
    const caret = line.querySelector(".blinking-caret");

    for (let char of item.cmd) {
      cmdTarget.textContent += char;
      await new Promise((r) => setTimeout(r, 40));
    }

    await new Promise((r) => setTimeout(r, 180));
    caret.remove();

    const outLine = document.createElement("div");
    outLine.className = "c-line c-out";
    outLine.innerHTML = item.out;
    consoleBox.appendChild(outLine);

    await new Promise((r) => setTimeout(r, 320));
  }

  const idlePrompt = document.createElement("div");
  idlePrompt.className = "c-line";
  idlePrompt.innerHTML = `<span class="c-prompt">sec-student@kali:~$</span> <span class="blinking-caret"></span>`;
  consoleBox.appendChild(idlePrompt);
}
