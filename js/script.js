
function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
}

function price(fixins) {
  const toppings = fixins.toppings;
  const size = fixins.size;
  let price = 30;
  if (toppings === "cheese" && "sausage" && "mushroom" && size === "large") {
    price === 30
} if ( toppings === "cheese" && "sausage" && "mushroom" && size === "personal") {
    price -= 10
} if (toppings === "cheese" && size === "personal") {
    price -= 20
  console.log("priceIsRight")  
}
}

window.onload = function handleFormSubmission() {
  let form = document.querySelector("form");
  form.onsubmit = function(event) {
    event.preventDefault();
    const inputtedTopping = document.querySelector('input[name="topping"]:checked').value;
    const inputtedSize = document.querySelector('input[name="size"]:checked').value;
    console.log(inputtedTopping, inputtedSize);
    let newPizza = new Pizza(inputtedTopping, inputtedSize);
    console.log(newPizza)
    price(newPizza);
    document.querySelector("#pizza-price").removeAttribute("class");
}; 
  };

window.addEventListener("load", function () {
  let form = document.querySelector("form");
  form.addEventListener("submit", handleFormSubmission);
});
