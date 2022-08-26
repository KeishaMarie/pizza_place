
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
}
}

window.onload = function () {
  let form = document.querySelector("form");
  form.onsubmit = function(event) {
    event.preventDefault();

    let inputtedToppings = document.querySelectorAll('input[name="topping"]:checked');
    console.log(inputtedToppings)
    let inputtedSize = document.querySelector('input[name="size"]:checked').value;
    let array = []
    for (let i = 0; i < inputtedToppings.length; i++) {
      array.push(inputtedToppings[i].value)
    }

    let myPizza = new Pizza(array, inputtedSize);
    console.log(myPizza)
    document.getElementById("pizzaPrice").innerText = price(myPizza);
    console.log(price(myPizza));
  }; 
};
 
window.addEventListener("load", function() {
  const form = document.getElementById("pizza-selections")
  form.addEventListener("submit", price)
  document.querySelector("#pizza-price").removeAttribute("class");
});