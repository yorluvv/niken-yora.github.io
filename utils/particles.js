/**
 * Sunset Particle System — Floating ember/firefly particles
 * Warm amber & peach tones drifting upward against the sunset sky.
 * GPU-safe: animates via canvas only, no DOM layout triggers.
 */
export function initParticles(canvas) {
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  let W, H, particles = [], raf;

  const COLORS = [
    "rgba(255, 230, 185, ALPHA)", // pale gold spark
    "rgba(240, 168, 93,  ALPHA)", // golden hour amber
    "rgba(217, 103, 72,  ALPHA)", // dusk rose ember
    "rgba(247, 203, 176, ALPHA)", // warm peach glow
    "rgba(232, 149, 72,  ALPHA)", // soft amber firefly
  ];

  const COUNT = 55;

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  function rand(min, max) {
    return Math.random() * (max - min) + min;
  }

  class Particle {
    constructor() {
      this.reset(true);
    }

    reset(initial = false) {
      this.x     = rand(0, W);
      this.y     = initial ? rand(0, H) : H + rand(10, 40);
      this.r     = rand(1.2, 3.5);
      this.speedY = rand(0.25, 0.85);
      this.speedX = rand(-0.25, 0.25);
      this.drift  = rand(0, Math.PI * 2); // wave phase
      this.driftSpeed = rand(0.006, 0.016);
      this.alpha  = rand(0.15, 0.75);
      this.fadeDir = Math.random() > 0.5 ? 1 : -1;
      this.fadeSpeed = rand(0.003, 0.009);
      const c = COLORS[Math.floor(Math.random() * COLORS.length)];
      this.color = c;
    }

    update() {
      this.drift += this.driftSpeed;
      this.x    += this.speedX + Math.sin(this.drift) * 0.45;
      this.y    -= this.speedY;

      this.alpha += this.fadeDir * this.fadeSpeed;
      if (this.alpha >= 0.78 || this.alpha <= 0.08) this.fadeDir *= -1;

      if (this.y < -20) this.reset();
    }

    draw() {
      const col = this.color.replace("ALPHA", this.alpha.toFixed(2));
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fillStyle = col;
      ctx.fill();
    }
  }

  function init() {
    particles = [];
    for (let i = 0; i < COUNT; i++) {
      particles.push(new Particle());
    }
  }

  function loop() {
    ctx.clearRect(0, 0, W, H);
    for (const p of particles) {
      p.update();
      p.draw();
    }
    raf = requestAnimationFrame(loop);
  }

  function start() {
    resize();
    init();
    loop();
  }

  window.addEventListener("resize", () => {
    resize();
  });

  start();

  // Expose cleanup for future unmounts
  return () => {
    cancelAnimationFrame(raf);
    window.removeEventListener("resize", resize);
  };
}
