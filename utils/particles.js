export function initParticles(canvas) {
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const particles = [];

  const resize = () => {
    canvas.width = window.innerWidth * devicePixelRatio;
    canvas.height = window.innerHeight * devicePixelRatio;
    ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
  };

  const spawn = () => {
    particles.length = 0;
    for (let i = 0; i < 34; i += 1) {
      particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        w: 70 + Math.random() * 160,
        h: 20 + Math.random() * 40,
        vx: 0.06 + Math.random() * 0.16,
        vy: -0.02 + Math.random() * 0.05,
        a: 0.035 + Math.random() * 0.09,
      });
    }
  };

  const draw = () => {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    particles.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x > window.innerWidth + 180) p.x = -180;
      if (p.y < -120) p.y = window.innerHeight + 120;
      ctx.save();
      ctx.globalAlpha = p.a;
      ctx.fillStyle = "rgba(255, 244, 232, 1)";
      ctx.shadowColor = "rgba(255, 156, 102, 0.26)";
      ctx.shadowBlur = 18;
      const gradient = ctx.createLinearGradient(p.x, p.y, p.x + p.w, p.y + p.h);
      gradient.addColorStop(0, "rgba(255, 214, 163, 0.08)");
      gradient.addColorStop(0.5, "rgba(255, 170, 120, 0.22)");
      gradient.addColorStop(1, "rgba(255, 127, 89, 0.08)");
      ctx.fillStyle = gradient;
      cloudShape(ctx, p.x, p.y, p.w, p.h);
      ctx.fill();
      ctx.restore();
    });
    requestAnimationFrame(draw);
  };

  const cloudShape = (context, x, y, w, h) => {
    context.beginPath();
    context.ellipse(x + w * 0.24, y + h * 0.55, w * 0.22, h * 0.6, 0, 0, Math.PI * 2);
    context.ellipse(x + w * 0.48, y + h * 0.34, w * 0.28, h * 0.82, 0, 0, Math.PI * 2);
    context.ellipse(x + w * 0.72, y + h * 0.5, w * 0.2, h * 0.56, 0, 0, Math.PI * 2);
    context.ellipse(x + w * 0.54, y + h * 0.7, w * 0.34, h * 0.34, 0, 0, Math.PI * 2);
  };

  resize();
  spawn();
  draw();
  window.addEventListener("resize", () => {
    resize();
    spawn();
  });
}
