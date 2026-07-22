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
        borderColor: "#F0A85D",
        backgroundColor: "rgba(240, 168, 93, 0.18)",
        pointBackgroundColor: "#F0A85D",
        pointBorderColor: "#F7F2EE",
        pointHoverBackgroundColor: "#F7F2EE",
        pointHoverBorderColor: "#F0A85D",
      }],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        r: {
          suggestedMin: 0,
          suggestedMax: 100,
          grid: { color: "rgba(255, 255, 255, 0.1)" },
          angleLines: { color: "rgba(255, 255, 255, 0.1)" },
          pointLabels: { color: "#FAF6F1", font: { family: "Outfit", size: 12, weight: "500" } },
          ticks: { display: false },
        },
      },
      plugins: { legend: { display: false } },
    },
  });
}
