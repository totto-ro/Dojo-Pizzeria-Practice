
function pizzaOven(crustType, sauceType, cheeses, toppings){
    let pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

let pizza1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);

console.log(pizza1);

let pizza2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);

console.log(pizza2);

let pizza3 = pizzaOven("thick Crust", ["pesto", "tomato"], ["mozzarella", "parmigiano","provolone"], ["mushrooms", "black olives", "onions", "tomato", "basil", "green bell pepper"]);

console.log(pizza3);

let pizza4 = pizzaOven("pan pizza", "marinara", ["mozzarella", "pecorino-romano"], ["panceta","mushrooms", "black olives", "onions", "baby spinach", "tomato", "basil"]);

console.log(pizza4);