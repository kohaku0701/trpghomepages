// 差分切り替え
function changeStanding(imgPath) {
  document.getElementById("main-standing").src = imgPath;
}

// アコーディオン
document.querySelectorAll(".toggle-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const content = btn.nextElementSibling;
    content.style.display = (content.style.display === "block") ? "none" : "block";
  });
});


document.querySelectorAll(".toggle-btn").forEach(button => {
  button.addEventListener("click", () => {
    const content = button.nextElementSibling;
    content.classList.toggle("open");
  });
});
