function sortCards(order) {
  const grid = document.getElementById("characterGrid");
  const cards = Array.from(grid.querySelectorAll(".character-card"));

  cards.sort((a, b) => {
    const nameA = a.dataset.name;
    const nameB = b.dataset.name;
    return order === "asc"
      ? nameA.localeCompare(nameB, "ja")
      : nameB.localeCompare(nameA, "ja");
  });

  grid.innerHTML = "";
  cards.forEach(card => grid.appendChild(card));
}
