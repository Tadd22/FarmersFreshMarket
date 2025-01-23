let cartCount = 0;
let cart = [];


// Function to add item to cart
function addToCart(itemName) {
    cartCount++;
    document.getElementById("cart-count").textContent = cartCount;
    // Add item to cart array
    cart.push(itemName);
    // Update Cart UI
    updateCartUI();
    // Show notification
    showNotification(itemName + " added to cart!");
}

// Function to update the cart modal UI
function updateCartUI() {
    const cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = "";
    // Clear existing items
    cart.forEach((item, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = item;
        // Remove button for each item
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.onclick = () => removeFromCart(index);
        listItem.appendChild(removeButton);
        cartItems.appendChild(listItem);
    });
}

// Function to remove an item from the cart
function removeFromCart(index) {
    cart.splice(index, 1);
    // Remove item from the array
    cartCount--;
    document.getElementById("cart-count").textContent = cartCount;
    // Update Cart UI
    updateCartUI();
}

// Function to show notification
function showNotification(message) {
    const notification = document.createElement("div");
    notification.classList.add("notification");
    notification.textContent = message;
    document.body.appendChild(notification);
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// View Cart
document.getElementById("view-cart").addEventListener("click", () => {
    document.getElementById("cart-modal").style.display = "block";
});

// Close Cart
document.getElementById("close-cart").addEventListener("click", () => {
    document.getElementById("cart-modal").style.display = "none";
});







