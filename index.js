const body = document.querySelector('body');
const test = document.querySelector('.test');

const colors = [
  "#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#33FFF6",
  "#FFC733", "#8D33FF", "#FF8C33", "#33FF94", "#FF3333",
  "#C70039", "#900C3F", "#581845", "#DAF7A6", "#FFC300",
  "#2ECC71", "#3498DB", "#9B59B6", "#E74C3C", "#F1C40F",
  "#1ABC9C", "#2C3E50", "#7F8C8D", "#34495E", "#16A085",
  "#27AE60", "#2980B9", "#8E44AD", "#E67E22", "#ECF0F1",
  "#95A5A6", "#F39C12", "#D35400", "#BDC3C7", "#7D3C98",
  "#C0392B"
];

body.addEventListener("click", (e) => {
  if(e.target.tagName=="LI"){
    const randomColor=getRandomColor();
    e.target.style.color = randomColor;}
});

function getRandomColor(){
  return colors[Math.floor(Math.random() * colors.length)];
}