We are learnging about reusuable functions and why they are important

# **Shopping Cart Calculator**

This is a simple JavaScript project to calculate the total cost of items in a shopping cart, including tax. It demonstrates how to use **functions** to calculate prices, **return values** from functions, and **get user input**.

## **Features:**
- Calculates the price of two items after a 10% tax.
- Uses JavaScript functions for better code organization and reusability.
- Takes user input via `prompt()` to dynamically calculate total cost.

## **How It Works:**
1. The user is prompted to enter the prices of two items.
2. The function `priceAfterTax()` is called to calculate the price after tax for each item.
3. The `totalCost()` function then adds the prices of both items after tax and displays the total.
4. The result is shown to the user via `alert()`.

## **Steps:**
1. **Enter Item Prices:** The user is prompted to input the prices of two items.
2. **Tax Calculation:** Each item's price is calculated with a 10% tax.
3. **Total Cost:** The total cost is displayed, including the tax.

## **Code Overview:**
```javascript
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
    alert(`Your total cost after tax is: $${total.toFixed(2)}`);
}

// Call the function to start the program
getUserCart();
```

## **How to Run:**
1. Copy the code to a new JavaScript file.
2. Open the file in a browser or code editor with a JavaScript console.
3. Run the code to start the shopping cart calculator.
