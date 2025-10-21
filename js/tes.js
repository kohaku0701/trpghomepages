const modal = document.getElementById("scenarioModal");
const modalBody = document.getElementById("modal-body");
const closeBtn = document.querySelector(".close-btn");

// 詳細データ
const scenarioDetails = {
  1: {
    title: "古びた館の秘密",
    desc: "探索者たちは古びた館に招かれ、恐ろしい秘密を知ることになる...",
    img: "css/image/scenario1.png",
    players: "2～4人",
    time: "2～3時間",
    ho: "特になし",
    tags: ["ホラー","短編","初心者向け"]
  },
  2: {
    title: "静かな町の闇",
    desc: "小さな町で連続失踪事件が発生。真実を突き止められるか？",
    img: "css/image/scenario2.png",
    players: "3～5人",
    time: "5～6時間",
    ho: "HOあり（刑事、医師、記者）",
    tags: ["長編","推理","上級者向け"]
  }
};

// 詳細モーダルを開く
document.querySelectorAll(".detail-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const id = btn.getAttribute("data-id");
    const data = scenarioDetails[id];
    modalBody.innerHTML = `
      <h2>${data.title}</h2>
      <img src="${data.img}" alt="${data.title}" style="width:100%; border-radius:8px;">
      <p>${data.desc}</p>
      <ul>
        <li><strong>PL人数:</strong> ${data.players}</li>
        <li><strong>時間目安:</strong> ${data.time}</li>
        <li><strong>HO:</strong> ${data.ho}</li>
        <li><strong>タグ:</strong> ${data.tags.join(", ")}</li>
      </ul>
    `;
    modal.style.display = "flex";
  });
});

// モーダル閉じる処理
closeBtn.addEventListener("click", () => modal.style.display = "none");
window.addEventListener("click", e => { if (e.target === modal) modal.style.display = "none"; });

// タグチェックボックスのAND検索
const checkboxes = document.querySelectorAll(".tag-checkbox");
const cards = document.querySelectorAll(".scenario-card");

function filterScenarios() {
  const selectedTags = Array.from(checkboxes)
    .filter(cb => cb.checked)
    .map(cb => cb.value);

  cards.forEach(card => {
    const cardTags = card.getAttribute("data-tags").split(" ");
    const match = selectedTags.every(tag => cardTags.includes(tag));
    card.style.display = match || selectedTags.length === 0 ? "block" : "none";
  });
}

checkboxes.forEach(cb => cb.addEventListener("change", filterScenarios));
