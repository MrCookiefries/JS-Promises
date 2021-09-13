const drawButton = document.querySelector("button");
const cardsHolder = document.querySelector("#cards-holder");

let cards;
axios.get("http://deckofcardsapi.com/api/deck/new/draw?count=52").then(res => {
    cards = res.data.cards;
    drawButton.classList.remove("is-hidden");
}).catch(err => console.error(err));

drawButton.addEventListener("click", () => {
    const card = cards.pop();
    if (!card) {
        drawButton.classList.add("is-hidden");
        return;
    }
    const ran = Math.floor(Math.random() * 2);
    let num = Math.floor(Math.random() * 26);
    if (ran) num = -num;
    cardsHolder.innerHTML += `<img style="transform: rotate(${num}deg)" src="${card.image}">`;
});
