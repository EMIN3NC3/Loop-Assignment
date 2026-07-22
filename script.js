// Order Price
let orderPrices = [2500, 3000, 1800, 4500, 2200];

// OTotal Amount
let total = 0;
for (let i = 0; i < orderPrices.length; i++) {
  console.log("Order Price: #" + orderPrices[i]);
  total = total + orderPrices[i];
}

// Print Total
console.log("Total: #" + total);

// Calculate Service Charge
let serviceCharge = total * 0.1;
console.log("Service Charge: #" + serviceCharge);

// Calculate Final Total
let finalTotal = total + serviceCharge;
console.log("Final Total: #" + finalTotal);

//========================================
//DOM Manipulation
//========================================
let dishName = document.getElementById("dishName");

let priceTag = document.getElementById("priceTag");

let rating = document.getElementById("rating");

dishName.textContent = "Jollof Rice";

priceTag.textContent = "Price:NGN 2500";

rating.textContent = "Rating: 5/5";
