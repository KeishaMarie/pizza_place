
function Pizza(topping, size) {
  this.topping = topping;
  this.size = size;
}

Pizza.prototype.price = function () {
  let price = 0;
  if (this.size === "large") {
    price += 10
  } if (this.size === "personal") {
    price += 5
  } if (this.topping.includes("cheese")) {
    price +=2
  } if (this.topping.includes("sausage")) {
    price += 3
  } if (this.topping.includes("mushroom")) {
    price += 30
  } return price
}

window.onload = function () {
  let form = document.querySelector("form");
  form.onsubmit = function(event) {
    event.preventDefault();

    let inputtedToppings = document.querySelectorAll('input[name="topping"]:checked');
    console.log(inputtedToppings)
    let inputtedSize = document.querySelector('input[name="size"]:checked').value;
    console.log(inputtedSize)
    let toppingArray = []
    for (let i = 0; i < inputtedToppings.length; i++) {
      toppingArray.push(inputtedToppings[i].value)
    }

    let myPizza = new Pizza(toppingArray, inputtedSize);

    console.log(myPizza)
    console.log(myPizza.price())
    document.getElementById("pizzaPrice").innerText = myPizza.price();
    console.log(myPizza.price());
  }; 
};
 
window.addEventListener("load", function() {
  const form = document.getElementById("pizza-selections")
  form.addEventListener("submit", Pizza.price)
  document.querySelector("#pizza-price").removeAttribute("class");
});