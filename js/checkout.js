// =============================================
// ZFB PHARMACEUTICAL - CHECKOUT.JS
// =============================================

// =============================================
// BUSINESS DETAILS
// =============================================

const WHATSAPP_NUMBER = "923003675565";

const BUSINESS_EMAIL = "zfbpharmaceutical@gmail.com";

// =============================================
// ELEMENTS
// =============================================

const checkoutItems = document.getElementById("checkoutItems");

const subtotalEl = document.getElementById("checkoutSubtotal");

const totalEl = document.getElementById("checkoutTotal");

const whatsappOrder = document.getElementById("whatsappOrder");

const emailOrder = document.getElementById("emailOrder");

// =============================================
// GET CART
// =============================================

function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

// =============================================
// GET NUMERIC PRICE
// =============================================

function getPrice(item) {
  // Convert values such as:
  // 25
  // "25"
  // "Rs25"
  // "Rs25.00"
  // "$25"
  // "$25.00"

  const price = String(item.price ?? "")
    .replace(/[$Rs,]/gi, "")
    .trim();

  const numericPrice = Number(price);

  if (!Number.isFinite(numericPrice)) {
    return 0;
  }

  return numericPrice;
}

// =============================================
// LOAD ORDER
// =============================================

function loadOrder() {
  const cart = getCart();

  // -----------------------------------------
  // EMPTY CART
  // -----------------------------------------

  if (cart.length === 0) {
    checkoutItems.innerHTML = `
      <div class="empty-checkout">

        <i class="fa-solid fa-cart-shopping"></i>

        <p>
          Your cart is empty.
        </p>

        <a href="products.html">
          Continue Shopping
        </a>

      </div>
    `;

    subtotalEl.textContent = "Rs 0.00";

    totalEl.textContent = "Rs 0.00";

    return;
  }

  // -----------------------------------------
  // CALCULATE SUBTOTAL
  // -----------------------------------------

  let subtotal = 0;

  checkoutItems.innerHTML = "";

  cart.forEach((item) => {
    const price = getPrice(item);

    const quantity = Number(item.quantity) || 1;

    const itemTotal = price * quantity;

    subtotal += itemTotal;

    checkoutItems.innerHTML += `

      <div class="checkout-item">

        <div class="checkout-item-info">

          <h4>
            ${item.name || "Product"}
          </h4>

          <p>
            Qty: ${quantity}
          </p>

          <small>
            Price: Rs ${price.toFixed(2)}
          </small>

        </div>

        <strong>
          Rs ${itemTotal.toFixed(2)}
        </strong>

      </div>

    `;
  });

  // -----------------------------------------
  // NO TAX
  // -----------------------------------------

  const total = subtotal;

  // -----------------------------------------
  // DISPLAY TOTALS
  // -----------------------------------------

  subtotalEl.textContent = "Rs " + subtotal.toFixed(2);

  totalEl.textContent = "Rs " + total.toFixed(2);
}

// Load checkout
loadOrder();

// =============================================
// VALIDATE CUSTOMER FORM
// =============================================

function validateForm() {
  const name = document.getElementById("customerName").value.trim();

  const phone = document.getElementById("customerPhone").value.trim();

  const email = document.getElementById("customerEmail").value.trim();

  const address = document.getElementById("customerAddress").value.trim();

  if (!name || !phone || !email || !address) {
    alert("Please complete all customer information.");

    return false;
  }

  return {
    name,
    phone,
    email,
    address,
  };
}

// =============================================
// BUILD ORDER MESSAGE
// =============================================

function buildMessage(customer) {
  const cart = getCart();

  let subtotal = 0;

  let message = `*New ZFB Pharmaceutical Order*

*Customer Information*

Name:
${customer.name}

Phone:
${customer.phone}

Email:
${customer.email}

Delivery Address:
${customer.address}


*Order Details*

`;

  cart.forEach((item) => {
    const price = getPrice(item);

    const quantity = Number(item.quantity) || 1;

    const itemTotal = price * quantity;

    subtotal += itemTotal;

    message += `Product:
${item.name || "Product"}

Quantity:
${quantity}

Unit Price:
Rs ${price.toFixed(2)}

Product Total:
Rs ${itemTotal.toFixed(2)}

-------------------------
`;
  });

  // -----------------------------------------
  // NO TAX
  // -----------------------------------------

  const total = subtotal;

  message += `
*Order Summary*

Subtotal:
Rs ${subtotal.toFixed(2)}

Grand Total:
Rs ${total.toFixed(2)}


Thank you for choosing ZFB Pharmaceutical.

Better Health Better Life.
`;

  return message;
}

// =============================================
// WHATSAPP ORDER
// =============================================

if (whatsappOrder) {
  whatsappOrder.addEventListener("click", () => {
    const customer = validateForm();

    if (!customer) {
      return;
    }

    const cart = getCart();

    if (cart.length === 0) {
      alert("Your cart is empty.");

      return;
    }

    const message = buildMessage(customer);

    const url =
      `https://wa.me/${WHATSAPP_NUMBER}` +
      `?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  });
}

// =============================================
// EMAIL ORDER
// =============================================

if (emailOrder) {
  emailOrder.addEventListener("click", () => {
    const customer = validateForm();

    if (!customer) {
      return;
    }

    const cart = getCart();

    if (cart.length === 0) {
      alert("Your cart is empty.");

      return;
    }

    const message = buildMessage(customer);

    const subject = "New ZFB Pharmaceutical Order";

    const mailto =
      `mailto:${BUSINESS_EMAIL}` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(message)}`;

    window.location.href = mailto;
  });
}

// =============================================
// IMPORTANT
// DO NOT CLEAR CART HERE
// =============================================
//
// DO NOT use:
//
// localStorage.removeItem("cart");
//
// The cart must remain available while the
// customer is reviewing checkout.
//
// =============================================
