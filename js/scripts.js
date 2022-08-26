
// Business Logic

function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
}

function price(fixins) {
  const toppings = fixins.toppings;
  const size = fixins.size;
  let price = 30;
  if (toppings === "cheese", "sausage", "mushroom" && size === "large") {
    price === 30
} if ( toppings === "cheese", "sausage", "mushroom" && size === "personal") {
    price -= 10
} if (toppings === "cheese" && size === "personal") {
    price -= 20
  console.log("priceIsRight")  
}
}

// window.onload = function() {
//   let form = document.querySelector("form");
//   form.onsubmit = function(event) {
//     event.preventDefault();

    
//   };
// };

function handleFormSubmission(event) {
  event.preventDefault();
  let inputtedTopping = document.querySelector('input[name="topping"]').value;
  let inputtedSize = document.querySelector('input[name="size"]').value;
  console.log(inputtedTopping, inputtedSize);
  let newPizza = new Pizza(inputtedTopping, inputtedSize);
  console.log(newPizza)
  pricing(newPizza)
  document.querySelector("#pizza-price").removeAttribute("class");
}

window.addEventListener("load", function () {
  document.querySelector("form#pizza-selections").addEventListener("submit", handleFormSubmission);
});
