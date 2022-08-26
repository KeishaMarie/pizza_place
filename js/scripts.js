
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

    
    let inputtedToppings = document.querySelectorAll('input[name="topping"]:checked');
    console.log(inputtedToppings)
    let inputtedSize = document.querySelector('input[name="size"]:checked').value;
    let array = []
    for (let i = 0; i < inputtedToppings.length; i++) {
      array.push(inputtedToppings[i].value)
    }

    let myPizza = new Pizza(array, inputtedSize);
    
    console.log(myPizza)
    price(myPizza);

    form.addEventListener("submit", handleFormSubmission); {
    document.querySelector("#pizza-price").removeAttribute("class");
}; 
  };
  };
