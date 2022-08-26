
function Pizza(topping, size) {
  this.topping = topping;
  this.size = size;
}

function price(fixins) {
  const topping = fixins.topping;
  const size = fixins.size;
  let price = 30;
  if (topping === "cheese" && "sausage" && "mushroom" && size === "large") {
    price === 30
} if ( topping === "cheese" && "sausage" && "mushroom" && size === "personal") {
    price -= 10
} if (topping === "cheese" && size === "personal") {
    price -= 20
  console.log("priceIsRight")  
}
}

window.onload = function handleFormSubmission() {
  let form = document.querySelector("form");
  form.onsubmit = function(event) {
    event.preventDefault();
    let array = [];
    let newArray = array.push(inputtedTopping);
    let newPizza = new Pizza(inputtedTopping, inputtedSize);
    let inputtedTopping = document.querySelector('input[name="topping"]:checked').value;
    let inputtedSize = document.querySelector('input[name="size"]:checked').value;

    console.log(newPizza)
    price(newPizza);

    form.addEventListener("submit", handleFormSubmission); {
    document.querySelector("#pizza-price").removeAttribute("class");
}; 
  };
  };
