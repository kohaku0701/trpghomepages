/*// アコーディオン開閉

document.querySelectorAll(".accordion-header").forEach(header => {
  header.addEventListener("click", () => {
    const content = header.nextElementSibling;
    content.classList.toggle("open");
  });
});

// モーダル
const modal = document.getElementById("scenarioModal");
const modalBody = document.getElementById("modal-body");
const closeBtn = document.querySelector(".close-btn");

const scenarioDetails = {
  1: {
    title: "古びた館の秘密",
    desc: "探索者たちは古びた館に招かれ、恐ろしい秘密を知ることになる...",
    img: "css/image/scenario1.png",
    players: "2～4人",
    time: "2～3時間",
    ho: "特になし"
  },
  2: {
    title: "静かな町の闇",
    desc: "小さな町で連続失踪事件が発生。真実を突き止められるか？",
    img: "css/image/scenario2.png",
    players: "3～5人",
    time: "5～6時間",
    ho: "HOあり（刑事、医師、記者）"
  }
};

// カードクリックでモーダル表示
document.querySelectorAll(".scenario-cardo").forEach(card => {
  card.addEventListener("click", () => {
    const id = card.getAttribute("data-id");
    const data = scenarioDetails[id];
    modalBody.innerHTML = `
      <h2>${data.title}</h2>
      <img src="${data.img}" alt="${data.title}" style="width:100%; border-radius:8px;">
      <p>${data.desc}</p>
      <ul>
        <li><strong>PL人数:</strong> ${data.players}</li>
        <li><strong>時間目安:</strong> ${data.time}</li>
        <li><strong>HO:</strong> ${data.ho}</li>
      </ul>
    `;
    modal.style.display = "flex";
  });
});

// モーダル閉じる
closeBtn.addEventListener("click", () => modal.style.display = "none");
window.addEventListener("click", e => { if (e.target === modal) modal.style.display = "none"; });
*/
/*
document.querySelectorAll(".accordion-btn").forEach(header => {
  header.addEventListener("click", () => {
    const content = header.nextElementSibling;
    content.classList.toggle("open");
  });
});
*/

// アコーディオン
document.querySelectorAll(".accordion-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const content = btn.nextElementSibling;
    content.style.display = content.style.display === "block" ? "none" : "block";
  });
});


// モーダル
const modal = document.getElementById("scenarioModal");
const modalTitle = document.getElementById("modalTitle");
const modalDetail = document.getElementById("modalDetail");
const modalPlayers = document.getElementById("modalPlayers");
const modalTime = document.getElementById("modalTime");
const modalHandout = document.getElementById("modalHandout");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".scenario-card").forEach(card => {
  card.addEventListener("click", () => {
    modalTitle.textContent = card.dataset.title;
    modalDetail.textContent = card.dataset.detail;
    modalPlayers.textContent = card.dataset.players;
    modalTime.textContent = card.dataset.time;
    modalHandout.textContent = card.dataset.handout;
    modal.style.display = "block";
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});
window.addEventListener("click", e => {
  if (e.target === modal) modal.style.display = "none";
});

toggleHandout.addEventListener("click", () => {
  handoutWrapper.classList.toggle("open");
  toggleHandout.textContent = handoutWrapper.classList.contains("open")
    ? "▲ ハンドアウトを閉じる"
    : "▼ ハンドアウトを表示";
});