export function initChart(canvas, skills) {
  if (!window.Chart || !canvas) return;
  const ctx = canvas.getContext("2d");

  const isMobile = window.innerWidth < 640;
  const isSmallMobile = window.innerWidth < 400;

  const chartInstance = new Chart(ctx, {
    type: "radar",
    data: {
      labels: skills.map((skill) => skill.shortLabel || skill.label),
      datasets: [{
        label: "Skill level",
        data: skills.map((skill) => skill.level),
        borderColor: "#F0A85D",
        backgroundColor: "rgba(240, 168, 93, 0.22)",
        pointBackgroundColor: "#F0A85D",
        pointBorderColor: "#FFFFFF",
        pointBorderWidth: 1.5,
        pointHoverBackgroundColor: "#FFFFFF",
        pointHoverBorderColor: "#F0A85D",
        pointRadius: isMobile ? 3 : 4,
        pointHoverRadius: 6,
      }],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      layout: {
        padding: {
          top: isSmallMobile ? 4 : 8,
          bottom: isSmallMobile ? 4 : 8,
          left: isSmallMobile ? 2 : 6,
          right: isSmallMobile ? 2 : 6,
        },
      },
      scales: {
        r: {
          suggestedMin: 0,
          suggestedMax: 100,
          grid: { color: "rgba(255, 255, 255, 0.12)" },
          angleLines: { color: "rgba(255, 255, 255, 0.12)" },
          pointLabels: {
            color: "#FAF6F1",
            font: {
              family: "Plus Jakarta Sans, sans-serif",
              size: isSmallMobile ? 9 : (isMobile ? 10 : 11),
              weight: "600",
            },
            padding: isSmallMobile ? 3 : 5,
          },
          ticks: { display: false, stepSize: 20 },
        },
      },
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            title: function (context) {
              const idx = context[0].dataIndex;
              return skills[idx].label;
            },
            label: function (context) {
              return ` Tingkat Keahlian: ${context.parsed.r}%`;
            },
          },
        },
      },
    },
  });

  // Re-adjust on resize with debounce
  let resizeTimeout;
  window.addEventListener(
    "resize",
    () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        const mobile = window.innerWidth < 640;
        const smallMobile = window.innerWidth < 400;
        if (chartInstance.options && chartInstance.options.scales && chartInstance.options.scales.r) {
          chartInstance.options.scales.r.pointLabels.font.size = smallMobile ? 9 : (mobile ? 10 : 11);
          chartInstance.options.scales.r.pointLabels.padding = smallMobile ? 3 : 5;
          chartInstance.options.layout.padding = {
            top: smallMobile ? 4 : 8,
            bottom: smallMobile ? 4 : 8,
            left: smallMobile ? 2 : 6,
            right: smallMobile ? 2 : 6,
          };
          chartInstance.update();
        }
      }, 150);
    },
    { passive: true }
  );
}
