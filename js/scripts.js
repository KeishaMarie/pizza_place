
// Business Logic

function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
}

function price(fixins)
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