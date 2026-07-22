export function initChart(canvas, skills) {
  if (!window.Chart || !canvas) return;
  const ctx = canvas.getContext("2d");
  new Chart(ctx, {
    type: "radar",
    data: {
      labels: skills.map((skill) => skill.label),
      datasets: [{
        label: "Skill level",
        data: skills.map((skill) => skill.level),
        borderColor: "#ffb86b",
        backgroundColor: "rgba(255, 184, 107, 0.18)",
        pointBackgroundColor: "#ff8fb3",
        pointBorderColor: "#fff7ef",
      }],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        r: {
          suggestedMin: 0,
          suggestedMax: 100,
          grid: { color: "rgba(255,255,255,0.14)" },
          angleLines: { color: "rgba(255,255,255,0.14)" },
          pointLabels: { color: "#fff7ef", font: { family: "Inter" } },
          ticks: { display: false },
        },
      },
      plugins: { legend: { display: false } },
    },
  });
}
