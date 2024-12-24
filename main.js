let cards_container = document.querySelector(".cards_container");

let response = new XMLHttpRequest();

response.open("GET", "./db.json", true);
response.send();

response.addEventListener("readystatechange", () => {
  if (response.readyState == 4) {
    getData(JSON.parse(response.responseText));
  }
});

function getData(data) {
  data.forEach((value) => {
    let cards = document.createElement("div");
    cards.classList.add("cards");
    cards.innerHTML = `
        <div class="card">
          <img class="imgs" src="${value.image}"/>
          <div class="card_info">
            <h2 class="title">${value.title}</h2>
            <p class="description"> ${value.description}</p>
            <div class="rating">
              <p class="rate">
                <i class="fa-solid fa-star"></i>  ${value.rating.rate}
              </p>
              <p class="count">${value.rating.count}</p>
            </div>
            <div class="price_and_button">
              <h3 class="price">${value.price}</h3>
              <button>add to cart</button>
            </div>
        
        </div>
      </div>
       `;
    cards_container.append(cards);
  });
}
