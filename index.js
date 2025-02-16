const body = document.getElementById('body');
const test = document.getElementById('test');

const colors = [
  "#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#33FFF6",
  "#FFC733", "#8D33FF", "#FF8C33", "#33FF94", "#FF3333",
  "#C70039", "#900C3F", "#581845", "#DAF7A6", "#FFC300",
  "#FF5733", "#C70039", "#900C3F", "#581845", "#2ECC71",
  "#3498DB", "#9B59B6", "#E74C3C", "#F1C40F", "#1ABC9C",
  "#2C3E50", "#7F8C8D", "#34495E", "#16A085", "#27AE60",
  "#2980B9", "#8E44AD", "#E67E22", "#E74C3C", "#ECF0F1",
  "#95A5A6", "#F39C12", "#D35400", "#BDC3C7", "#7D3C98",
  "#2980B9", "#C0392B", "#E74C3C", "#3498DB", "#27AE60",
  "#F39C12", "#8E44AD", "#D35400", "#16A085", "#2C3E50"
];

// Corrected event listener
body.addEventListener("click", (e) => {
  if (e.target) {
    e.target.style.color = colors[Math.floor(Math.random() * colors.length)];
    test.innerHTML = `<p>${e.target.tagName}</p>`;
  }
});
