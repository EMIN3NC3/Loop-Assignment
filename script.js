// Order Price
let orderPrices = [2500, 3000, 1800, 4500, 2200]

// OTotal Amount
let total = 0;
for (let i = 0; i < orderPrices.length; i++) {
    console.log("Order Price: #" + orderPrices[i]);
    total = total + orderPrices[i];
}

// Print Total
console.log("Total: #" + total);

// Calculate Service Charge
let serviceCharge = total * 0.10;
console.log("Service Charge: #" + serviceCharge);

// Calculate Final Total
let finalTotal = total + serviceCharge;
console.log("Final Total: #" + finalTotal);