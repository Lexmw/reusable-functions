// Function to calculate price after tax
function priceAfterTax(price) {
    let taxRate = 0.10; // 10% tax
    return price + (price * taxRate);
}

// Function to calculate total cost of two items
function totalCost(item1, item2) {
    return priceAfterTax(item1) + priceAfterTax(item2);
}

// Function to get user input and calculate total cost
function getUserCart() {
    let price1 = prompt("Enter the price of the first item:");
    let price2 = prompt("Enter the price of the second item:");

    let total = totalCost(Number(price1), Number(price2));
    alert(`Your total cost after tax is: ${total.toFixed(2)}`);
}

// Call the function to start the program
getUserCart()

// input: 
//      price1 = 12
//      price2 = 1

// Output:
//      Your total cost after tax is: 14.30