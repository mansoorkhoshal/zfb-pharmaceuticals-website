// ============================================
// ZFB Pharmaceutical CART.JS (PART 5A)
// ============================================

// Get Elements
const cartItems = document.getElementById("cartItems");
const subtotalElement = document.getElementById("subtotal");
const totalElement = document.getElementById("total");

// ============================================
// GET CART
// ============================================

function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

// ============================================
// SAVE CART
// ============================================

function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

// ============================================
// UPDATE CART BADGE
// ============================================

function updateCartBadge() {
  const badge = document.getElementById("cart-count");

  if (!badge) return;

  const cart = getCart();

  const totalQty = cart.reduce((sum, item) => {
    return sum + item.quantity;
  }, 0);

  badge.textContent = totalQty;
}

// ============================================
// CALCULATE TOTALS
// ============================================

function calculateTotals(cart) {
  let subtotal = 0;

  cart.forEach((item) => {
    subtotal += item.price * item.quantity;
  });

  const total = subtotal;

  subtotalElement.textContent = "$" + subtotal.toFixed(2);
  totalElement.textContent = "$" + total.toFixed(2);
}

// ============================================
// EMPTY CART
// ============================================

function showEmptyCart() {
  cartItems.innerHTML = `

        <div class="empty-cart">

            <i class="fas fa-shopping-cart"></i>

            <h2>Your Cart Is Empty</h2>

            <p>

                You haven't added any medicines yet.

            </p>

            <a href="products.html">

                Continue Shopping

            </a>

        </div>

    `;

  subtotalElement.textContent = "$0.00";
  totalElement.textContent = "$0.00";
}

// ============================================
// DISPLAY CART
// ============================================

function displayCart() {
  const cart = getCart();

  if (cart.length === 0) {
    showEmptyCart();

    updateCartBadge();

    return;
  }

  cartItems.innerHTML = "";

  cart.forEach((item) => {
    cartItems.innerHTML += `

        <div class="cart-item">

            <img src="${item.image}" alt="${item.name}">

            <div class="item-info">

                <h3>${item.name}</h3>

                <p>Premium Healthcare Product</p>

                <div class="item-price">

                    $${item.price.toFixed(2)}

                </div>

                <div class="quantity-box">

                    <button
                        class="qty-btn decrease"
                        data-id="${item.id}">

                        -

                    </button>

                    <span class="qty-number">

                        ${item.quantity}

                    </span>

                    <button
                        class="qty-btn increase"
                        data-id="${item.id}">

                        +

                    </button>

                </div>

            </div>

            <button
                class="remove-btn"
                data-id="${item.id}">

                <i class="fas fa-trash"></i>

                Remove

            </button>

        </div>

        `;
  });

  calculateTotals(cart);

  updateCartBadge();
}

// ============================================
// INITIAL LOAD
// ============================================

displayCart();

// ============================================
// INCREASE QUANTITY
// ============================================

function increaseQuantity(id) {
  let cart = getCart();

  const item = cart.find((product) => product.id == id);

  if (!item) return;

  item.quantity++;

  saveCart(cart);

  displayCart();
}

// ============================================
// DECREASE QUANTITY
// ============================================

function decreaseQuantity(id) {
  let cart = getCart();

  const item = cart.find((product) => product.id == id);

  if (!item) return;

  item.quantity--;

  if (item.quantity <= 0) {
    cart = cart.filter((product) => product.id != id);
  }

  saveCart(cart);

  displayCart();
}

// ============================================
// REMOVE PRODUCT
// ============================================

function removeItem(id) {
  let cart = getCart();

  cart = cart.filter((product) => product.id != id);

  saveCart(cart);

  displayCart();
}

// ============================================
// CLEAR CART
// ============================================

const clearButton = document.getElementById("clearCart");

if (clearButton) {
  clearButton.addEventListener("click", () => {
    if (confirm("Are you sure you want to clear your cart?")) {
      localStorage.removeItem("cart");

      displayCart();
    }
  });
}

// ============================================
// BUTTON EVENTS (EVENT DELEGATION)
// ============================================

cartItems.addEventListener("click", function (e) {
  // Increase quantity
  if (e.target.classList.contains("increase")) {
    increaseQuantity(Number(e.target.dataset.id));
  }

  // Decrease quantity
  if (e.target.classList.contains("decrease")) {
    decreaseQuantity(Number(e.target.dataset.id));
  }

  // Remove button
  if (
    e.target.classList.contains("remove-btn") ||
    e.target.closest(".remove-btn")
  ) {
    const button = e.target.closest(".remove-btn");

    removeItem(Number(button.dataset.id));
  }
});

// ============================================
// UPDATE WHEN PAGE LOADS
// ============================================

updateCartBadge();
displayCart();
