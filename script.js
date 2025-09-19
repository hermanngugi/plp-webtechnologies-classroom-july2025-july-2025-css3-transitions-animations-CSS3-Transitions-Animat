/* ====== Functions & Scope Demo ====== */
let animationCount = 0;

function addNumbers(a, b) {
  return a + b;
}

function showSum() {
  const sum = addNumbers(12, 8);
  document.getElementById("sumResult").innerText = "Result: " + sum;
}

/* ====== Box Animation ====== */
function animateBox() {
  const box = document.getElementById("animateBox");
  let isAnimated = box.classList.contains("animate");

  if (isAnimated) {
    box.classList.remove("animate");
  } else {
    box.classList.add("animate");
    animationCount++;
    console.log("Animation triggered:", animationCount, "times");
  }
}

document.getElementById("colorBtn").addEventListener("click", animateBox);

/* ====== Modal Logic ====== */
const modal = document.getElementById("modal");
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");

openModalBtn.addEventListener("click", () => {
  modal.style.display = "flex";
});

closeModalBtn.addEventListener("click", () => {
  modal.style.display = "none";
});
