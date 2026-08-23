// // =======================================
// // ZFB Pharmaceutical PRODUCTS DATABASE
// // =======================================

// const products = [
//   {
//     id: 1,
//     name: "Paracetamol 500mg",
//     category: "tablet",
//     price: 5.99,
//     rating: 5,
//     image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=600",
//     description: "Fast relief from fever and mild pain.",
//   },

//   {
//     id: 3,
//     name: "Vitamin C",
//     category: "vitamin",
//     price: 12.5,
//     rating: 4,
//     image: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=600",
//     description: "Supports immunity and daily wellness.",
//   },

//   {
//     id: 6,
//     name: "Amoxicillin",
//     category: "capsule",
//     price: 10.5,
//     rating: 5,
//     image: "https://images.unsplash.com/photo-1573883431205-98b5f10aaedb?w=600",
//     description: "Antibiotic for bacterial infections.",
//   },

//   {
//     id: 8,
//     name: "Cough Syrup",
//     category: "syrup",
//     price: 9.99,
//     rating: 4,
//     image: "https://images.unsplash.com/photo-1573883431205-98b5f10aaedb?w=600",
//     description: "Provides fast cough relief.",
//   },

//   {
//     id: 13,
//     name: "Diabetes Care",
//     category: "tablet",
//     price: 21.99,
//     rating: 5,
//     image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=600",
//     description: "Daily diabetes management medicine.",
//   },

//   {
//     id: 10,
//     name: "Vitamin C",
//     category: "vitamin",
//     price: 12.5,
//     rating: 4,
//     image: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=600",
//     description: "Supports immunity and daily wellness.",
//   },
// ];

// // =======================================
// // STAR RATING
// // =======================================

// function stars(rate) {
//   let html = "";

//   for (let i = 1; i <= 5; i++) {
//     html +=
//       i <= rate ? '<i class="fas fa-star"></i>' : '<i class="far fa-star"></i>';
//   }

//   return html;
// }

// // =======================================
// // DISPLAY PRODUCTS
// // =======================================

// const productsContainer = document.getElementById("productsContainer");

// function displayProducts(list) {
//   if (!productsContainer) return;

//   productsContainer.innerHTML = "";

//   if (list.length === 0) {
//     productsContainer.innerHTML = `
//       <div class="no-products">
//         <i class="fas fa-search"></i>

//         <h3>No Products Found</h3>

//         <p>
//           We couldn't find a product matching your search.
//         </p>
//       </div>
//     `;

//     return;
//   }

//   list.forEach((product) => {
//     productsContainer.innerHTML += `

//       <div
//         class="product-card"
//         data-category="${product.category}"
//       >

//         <img
//           src="${product.image}"
//           alt="${product.name}"
//         >

//         <div class="product-info">

//           <span class="product-category">
//             ${product.category}
//           </span>

//           <h3 class="product-title">
//             ${product.name}
//           </h3>

//           <p class="product-description">
//             ${product.description}
//           </p>

//           <div class="rating">
//             ${stars(product.rating)}
//           </div>

//           <div class="price-row">

//             <div class="price">
//               $${product.price.toFixed(2)}
//             </div>

//           </div>

//           <div class="product-actions">

//             <button
//               type="button"
//               class="details-btn"
//               data-id="${product.id}"
//             >
//               <i class="fas fa-eye"></i>
//               See Details
//             </button>

//             <button
//               type="button"
//               class="add-cart"
//               data-id="${product.id}"
//             >
//               <i class="fas fa-cart-shopping"></i>
//               Add To Cart
//             </button>

//           </div>

//         </div>

//       </div>

//     `;
//   });
// }

// // =======================================
// // LOAD ALL PRODUCTS
// // =======================================

// displayProducts(products);

// // =======================================
// // SEARCH
// // =======================================

// const searchInput = document.getElementById("searchInput");

// if (searchInput) {
//   searchInput.addEventListener("input", filterProducts);
// }

// // =======================================
// // CATEGORY FILTER
// // =======================================

// const filterButtons = document.querySelectorAll(".filter-btn");

// filterButtons.forEach((button) => {
//   button.addEventListener("click", () => {
//     filterButtons.forEach((btn) => {
//       btn.classList.remove("active");
//     });

//     button.classList.add("active");

//     filterProducts();
//   });
// });

// // =======================================
// // SEARCH + FILTER
// // =======================================

// function filterProducts() {
//   const keyword = searchInput ? searchInput.value.toLowerCase().trim() : "";

//   const activeButton = document.querySelector(".filter-btn.active");

//   const category = activeButton ? activeButton.dataset.filter : "all";

//   const filtered = products.filter((product) => {
//     const matchesSearch =
//       product.name.toLowerCase().includes(keyword) ||
//       product.description.toLowerCase().includes(keyword) ||
//       product.category.toLowerCase().includes(keyword);

//     const matchesCategory = category === "all" || product.category === category;

//     return matchesSearch && matchesCategory;
//   });

//   displayProducts(filtered);
// }

// // =======================================
// // CART FUNCTIONS
// // =======================================

// function getCart() {
//   return JSON.parse(localStorage.getItem("cart")) || [];
// }

// function saveCart(cart) {
//   localStorage.setItem("cart", JSON.stringify(cart));
// }

// // =======================================
// // UPDATE CART BADGE
// // =======================================

// function updateCartBadge() {
//   const badge = document.getElementById("cart-count");

//   if (!badge) return;

//   const cart = getCart();

//   const total = cart.reduce((sum, item) => {
//     return sum + item.quantity;
//   }, 0);

//   badge.textContent = total;
// }

// // =======================================
// // TOAST MESSAGE
// // =======================================

// function showToast(message) {
//   const toast = document.createElement("div");

//   toast.className = "toast-message";

//   toast.innerHTML = `
//     <i class="fas fa-check-circle"></i>
//     ${message}
//   `;

//   document.body.appendChild(toast);

//   setTimeout(() => {
//     toast.classList.add("show");
//   }, 50);

//   setTimeout(() => {
//     toast.classList.remove("show");

//     setTimeout(() => {
//       toast.remove();
//     }, 300);
//   }, 2500);
// }

// // =======================================
// // ADD TO CART
// // =======================================

// function addToCart(id) {
//   const product = products.find((p) => p.id == id);

//   if (!product) return;

//   let cart = getCart();

//   const existing = cart.find((item) => item.id == id);

//   if (existing) {
//     existing.quantity++;
//   } else {
//     cart.push({
//       id: product.id,
//       name: product.name,
//       price: product.price,
//       image: product.image,
//       quantity: 1,
//     });
//   }

//   saveCart(cart);

//   updateCartBadge();

//   showToast(product.name + " added to cart");
// }

// // =======================================
// // PRODUCT DETAILS
// // =======================================

// function showProductDetails(id) {
//   const product = products.find((p) => p.id == id);

//   if (!product) return;

//   const existingModal = document.getElementById("productDetailsModal");

//   if (existingModal) {
//     existingModal.remove();
//   }

//   const modal = document.createElement("div");

//   modal.id = "productDetailsModal";

//   modal.className = "product-modal";

//   modal.innerHTML = `

//     <div class="product-modal-overlay"></div>

//     <div class="product-modal-content">

//       <button
//         type="button"
//         class="product-modal-close"
//         aria-label="Close product details"
//       >
//         <i class="fas fa-xmark"></i>
//       </button>

//       <div class="product-modal-image">

//         <img
//           src="${product.image}"
//           alt="${product.name}"
//         >

//       </div>

//       <div class="product-modal-info">

//         <span class="product-category">
//           ${product.category}
//         </span>

//         <h2>
//           ${product.name}
//         </h2>

//         <div class="product-modal-rating">
//           ${stars(product.rating)}
//         </div>

//         <div class="product-modal-price">
//           $${product.price.toFixed(2)}
//         </div>

//         <p class="product-modal-description">
//           ${product.description}
//         </p>

//         <div class="product-modal-note">

//           <i class="fas fa-circle-info"></i>

//           <span>
//             Please read the product label and follow
//             appropriate professional healthcare advice
//             when required.
//           </span>

//         </div>

//         <button
//           type="button"
//           class="modal-add-cart"
//           data-id="${product.id}"
//         >
//           <i class="fas fa-cart-shopping"></i>
//           Add To Cart
//         </button>

//       </div>

//     </div>

//   `;

//   document.body.appendChild(modal);

//   document.body.style.overflow = "hidden";

//   requestAnimationFrame(() => {
//     modal.classList.add("show");
//   });

//   const closeModal = () => {
//     modal.classList.remove("show");

//     document.body.style.overflow = "";

//     setTimeout(() => {
//       modal.remove();
//     }, 300);
//   };

//   const closeButton = modal.querySelector(".product-modal-close");

//   const overlay = modal.querySelector(".product-modal-overlay");

//   closeButton.addEventListener("click", closeModal);

//   overlay.addEventListener("click", closeModal);

//   const modalAddCart = modal.querySelector(".modal-add-cart");

//   modalAddCart.addEventListener("click", () => {
//     addToCart(product.id);
//     closeModal();
//   });

//   document.addEventListener("keydown", function escapeHandler(event) {
//     if (event.key === "Escape") {
//       closeModal();

//       document.removeEventListener("keydown", escapeHandler);
//     }
//   });
// }

// // =======================================
// // EVENT DELEGATION
// // =======================================

// if (productsContainer) {
//   productsContainer.addEventListener("click", function (e) {
//     // ADD TO CART
//     const addButton = e.target.closest(".add-cart");

//     if (addButton) {
//       const id = Number(addButton.dataset.id);

//       addToCart(id);

//       return;
//     }

//     // SEE DETAILS
//     const detailsButton = e.target.closest(".details-btn");

//     if (detailsButton) {
//       const id = Number(detailsButton.dataset.id);

//       showProductDetails(id);

//       return;
//     }
//   });
// }

// // =======================================
// // INITIALIZE
// // =======================================

// updateCartBadge();

// const products = [
//   {
//     id: 1,
//     name: "Paracetamol 500mg",
//     category: "tablet",
//     price: 5.99,
//     rating: 5,

//     image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=600",

//     description: "Fast relief from fever and mild pain.",

//     benefits:
//       "For temporary relief of fever and mild pain when used according to the product label.",

//     ingredients: "Paracetamol 500mg",

//     packSize: "Please verify the pack size shown on the product packaging.",

//     usage:
//       "Use only according to the product label or advice from a qualified healthcare professional.",

//     important:
//       "Read the product label carefully before use. Keep medicines out of reach of children.",
//   },

//   {
//     id: 3,
//     name: "Vitamin C",
//     category: "vitamin",
//     price: 12.5,
//     rating: 4,

//     image: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=600",

//     description: "Supports immunity and daily wellness.",

//     benefits: "Provides vitamin C as part of a balanced wellness routine.",

//     ingredients:
//       "Vitamin C — verify the complete composition on the product packaging.",

//     packSize: "Please verify the pack size shown on the product packaging.",

//     usage: "Use according to the product label and recommended directions.",

//     important:
//       "Do not exceed the recommended amount. Read the product label before use.",
//   },

//   {
//     id: 6,
//     name: "Amoxicillin",
//     category: "capsule",
//     price: 10.5,
//     rating: 5,

//     image: "https://images.unsplash.com/photo-1573883431205-98b5f10aaedb?w=600",

//     description: "Antibiotic used for certain bacterial infections.",

//     benefits:
//       "An antibiotic medicine used for appropriate bacterial infections when prescribed or recommended by a qualified healthcare professional.",

//     ingredients:
//       "Amoxicillin — verify the strength and complete composition on the product packaging.",

//     packSize: "Please verify the pack size shown on the product packaging.",

//     usage:
//       "Use only as directed by a qualified healthcare professional or according to the official product information.",

//     important:
//       "Antibiotics should be used appropriately. Follow professional medical advice and the product instructions.",
//   },

//   {
//     id: 8,
//     name: "Cough Syrup",
//     category: "syrup",
//     price: 9.99,
//     rating: 4,

//     image: "https://images.unsplash.com/photo-1573883431205-98b5f10aaedb?w=600",

//     description: "Provides cough relief according to the product formulation.",

//     benefits:
//       "Designed to provide relief from cough symptoms according to the specific product formulation.",

//     ingredients:
//       "Please verify the complete active and inactive ingredients on the product packaging.",

//     packSize: "Please verify the bottle size on the product packaging.",

//     usage: "Use according to the product label and recommended directions.",

//     important:
//       "Check the product label for age restrictions, warnings, and directions before use.",
//   },

//   {
//     id: 13,
//     name: "Diabetes Care",
//     category: "tablet",
//     price: 21.99,
//     rating: 5,

//     image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=600",

//     description: "Healthcare product intended for diabetes management.",

//     benefits:
//       "Designed to support diabetes management as part of an appropriate healthcare plan.",

//     ingredients:
//       "Please verify the complete composition on the product packaging.",

//     packSize: "Please verify the pack size shown on the product packaging.",

//     usage:
//       "Use only according to the product label or advice from a qualified healthcare professional.",

//     important:
//       "Diabetes medicines should be used under appropriate professional guidance.",
//   },

//   {
//     id: 10,
//     name: "Vitamin C",
//     category: "vitamin",
//     price: 12.5,
//     rating: 4,

//     image: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=600",

//     description: "Supports immunity and daily wellness.",

//     benefits: "Provides vitamin C as part of a balanced wellness routine.",

//     ingredients:
//       "Vitamin C — verify the complete composition on the product packaging.",

//     packSize: "Please verify the pack size shown on the product packaging.",

//     usage: "Use according to the product label and recommended directions.",

//     important:
//       "Read the product label before use and follow the recommended amount.",
//   },
// ];

// =======================================
// ZFB PHARMACEUTICAL
// PRODUCTS.JS
// =======================================

document.addEventListener("DOMContentLoaded", function () {
  // =======================================
  // PRODUCTS DATABASE
  // =======================================

  const products = [
    {
      id: 1,
      name: "Paracetamol 500mg",
      category: "tablet",
      price: 5.99,
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=600",
      description: "Fast relief from fever and mild pain.",
      benefits:
        "Provides temporary relief from fever and mild pain when used according to the product label.",
      ingredients: "Paracetamol 500mg.",
      packSize: "Check the product packaging for the exact pack size.",
      usage:
        "Use according to the product label or advice from a qualified healthcare professional.",
      important: "Read the product label carefully before use.",
    },

    {
      id: 3,
      name: "Vitamin C",
      category: "vitamin",
      price: 12.5,
      rating: 4,
      image:
        "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=600",
      description: "Supports immunity and daily wellness.",
      benefits: "Provides vitamin C as part of a balanced wellness routine.",
      ingredients: "Vitamin C. Check packaging for complete composition.",
      packSize: "Check the product packaging for the exact pack size.",
      usage: "Use according to the product label.",
      important: "Do not exceed the recommended amount.",
    },

    {
      id: 6,
      name: "Amoxicillin",
      category: "capsule",
      price: 10.5,
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1573883431205-98b5f10aaedb?w=600",
      description: "Antibiotic used for certain bacterial infections.",
      benefits:
        "Used for appropriate bacterial infections under qualified healthcare guidance.",
      ingredients:
        "Amoxicillin. Check packaging for exact strength and composition.",
      packSize: "Check the product packaging for the exact pack size.",
      usage:
        "Use only according to professional medical advice and official product information.",
      important:
        "Antibiotics should be used appropriately and according to professional advice.",
    },

    {
      id: 8,
      name: "Cough Syrup",
      category: "syrup",
      price: 9.99,
      rating: 4,
      image:
        "https://images.unsplash.com/photo-1573883431205-98b5f10aaedb?w=600",
      description:
        "Provides cough relief according to the product formulation.",
      benefits:
        "Designed to provide relief from cough symptoms according to the specific formulation.",
      ingredients: "Check the product packaging for complete ingredients.",
      packSize: "Check the bottle for the exact pack size.",
      usage: "Use according to the product label.",
      important: "Check age restrictions, warnings, and directions before use.",
    },

    {
      id: 13,
      name: "Diabetes Care",
      category: "tablet",
      price: 21.99,
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=600",
      description: "Healthcare product intended for diabetes management.",
      benefits:
        "Designed to support diabetes management as part of an appropriate healthcare plan.",
      ingredients: "Check the product packaging for complete composition.",
      packSize: "Check the product packaging for the exact pack size.",
      usage:
        "Use according to the product label or qualified healthcare advice.",
      important:
        "Diabetes medicines should be used under appropriate professional guidance.",
    },

    {
      id: 10,
      name: "Vitamin C Plus",
      category: "vitamin",
      price: 12.5,
      rating: 4,
      image:
        "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=600",
      description: "Supports immunity and daily wellness.",
      benefits: "Provides vitamin C as part of a balanced wellness routine.",
      ingredients: "Check the product packaging for complete composition.",
      packSize: "Check the product packaging for the exact pack size.",
      usage: "Use according to the product label.",
      important: "Read the product label before use.",
    },
  ];

  // =======================================
  // ELEMENTS
  // =======================================

  const productsContainer = document.getElementById("productsContainer");

  const searchInput = document.getElementById("searchInput");

  const filterButtons = document.querySelectorAll(".filter-btn");

  // =======================================
  // CHECK PRODUCTS CONTAINER
  // =======================================

  if (!productsContainer) {
    console.error("ERROR: #productsContainer was not found.");

    return;
  }

  // =======================================
  // STAR RATING
  // =======================================

  function stars(rating) {
    let html = "";

    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        html += '<i class="fas fa-star"></i>';
      } else {
        html += '<i class="far fa-star"></i>';
      }
    }

    return html;
  }

  // =======================================
  // DISPLAY PRODUCTS
  // =======================================

  function displayProducts(list) {
    productsContainer.innerHTML = "";

    if (list.length === 0) {
      productsContainer.innerHTML = `

                <div class="no-products">

                    <i class="fas fa-search"></i>

                    <h3>No Products Found</h3>

                    <p>
                        We couldn't find a product matching your search.
                    </p>

                </div>

            `;

      return;
    }

    list.forEach(function (product) {
      productsContainer.innerHTML += `

                <article
                    class="product-card"
                    data-category="${product.category}"
                >

                    <img
                        src="${product.image}"
                        alt="${product.name}"
                        loading="lazy"
                    >

                    <div class="product-info">

                        <span class="product-category">
                            ${product.category}
                        </span>

                        <h3 class="product-title">
                            ${product.name}
                        </h3>

                        <p class="product-description">
                            ${product.description}
                        </p>

                        <div class="rating">
                            ${stars(product.rating)}
                        </div>

                        <div class="price-row">

                            <div class="price">
                                $${product.price.toFixed(2)}
                            </div>

                        </div>

                        <div class="product-actions">

                            <button
                                type="button"
                                class="details-btn"
                                data-id="${product.id}"
                            >
                                <i class="fas fa-eye"></i>
                                See Details
                            </button>

                            <button
                                type="button"
                                class="add-cart"
                                data-id="${product.id}"
                            >
                                <i class="fas fa-cart-shopping"></i>
                                Add To Cart
                            </button>

                        </div>

                    </div>

                </article>

            `;
    });
  }

  // =======================================
  // GET CART
  // =======================================

  function getCart() {
    return JSON.parse(localStorage.getItem("cart")) || [];
  }

  // =======================================
  // SAVE CART
  // =======================================

  function saveCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  // =======================================
  // UPDATE CART BADGE
  // =======================================

  function updateCartBadge() {
    const badge = document.getElementById("cart-count");

    if (!badge) return;

    const cart = getCart();

    const total = cart.reduce(function (sum, item) {
      return sum + Number(item.quantity || 0);
    }, 0);

    badge.textContent = total;
  }

  // =======================================
  // ADD TO CART
  // =======================================

  function addToCart(id) {
    const product = products.find(function (item) {
      return item.id === id;
    });

    if (!product) return;

    const cart = getCart();

    const existing = cart.find(function (item) {
      return item.id === id;
    });

    if (existing) {
      existing.quantity++;
    } else {
      cart.push({
        id: product.id,

        name: product.name,

        price: product.price,

        image: product.image,

        quantity: 1,
      });
    }

    saveCart(cart);

    updateCartBadge();

    showToast(product.name + " added to cart");
  }

  // =======================================
  // TOAST
  // =======================================

  function showToast(message) {
    const toast = document.createElement("div");

    toast.className = "toast-message";

    toast.innerHTML = `

            <i class="fas fa-check-circle"></i>

            ${message}

        `;

    document.body.appendChild(toast);

    setTimeout(function () {
      toast.classList.add("show");
    }, 50);

    setTimeout(function () {
      toast.classList.remove("show");

      setTimeout(function () {
        toast.remove();
      }, 300);
    }, 2500);
  }

  // =======================================
  // SEARCH + FILTER
  // =======================================

  function filterProducts() {
    const keyword = searchInput ? searchInput.value.toLowerCase().trim() : "";

    const activeButton = document.querySelector(".filter-btn.active");

    const category = activeButton ? activeButton.dataset.filter : "all";

    const filtered = products.filter(function (product) {
      const searchText = (
        product.name +
        " " +
        product.description +
        " " +
        product.category
      ).toLowerCase();

      const matchesSearch = searchText.includes(keyword);

      const matchesCategory =
        category === "all" || product.category === category;

      return matchesSearch && matchesCategory;
    });

    displayProducts(filtered);
  }

  // =======================================
  // SEARCH EVENT
  // =======================================

  if (searchInput) {
    searchInput.addEventListener("input", filterProducts);
  }

  // =======================================
  // FILTER EVENTS
  // =======================================

  filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      filterButtons.forEach(function (btn) {
        btn.classList.remove("active");
      });

      button.classList.add("active");

      filterProducts();
    });
  });

  // =======================================
  // PRODUCT DETAILS MODAL
  // =======================================

  function showProductDetails(id) {
    const product = products.find(function (item) {
      return item.id === id;
    });

    if (!product) return;

    const modal = document.createElement("div");

    modal.className = "product-modal";

    modal.innerHTML = `

            <div class="product-modal-overlay"></div>

            <div class="product-modal-content">

                <button
                    type="button"
                    class="product-modal-close"
                    aria-label="Close"
                >
                    <i class="fas fa-xmark"></i>
                </button>


                <div class="product-modal-image">

                    <img
                        src="${product.image}"
                        alt="${product.name}"
                    >

                </div>


                <div class="product-modal-info">

                    <span class="product-category">
                        ${product.category}
                    </span>


                    <h2>
                        ${product.name}
                    </h2>


                    <div class="product-modal-rating">
                        ${stars(product.rating)}
                    </div>


                    <div class="product-modal-price">
                        $${product.price.toFixed(2)}
                    </div>


                    <div class="detail-section">

                        <h3>
                            <i class="fas fa-circle-info"></i>
                            Description
                        </h3>

                        <p>
                            ${product.description}
                        </p>

                    </div>


                    <div class="detail-section">

                        <h3>
                            <i class="fas fa-heart-pulse"></i>
                            Product Benefits
                        </h3>

                        <p>
                            ${product.benefits}
                        </p>

                    </div>


                    <div class="product-detail-grid">

                        <div class="detail-box">

                            <div class="detail-box-icon">
                                <i class="fas fa-flask"></i>
                            </div>

                            <div>

                                <h4>
                                    Ingredients / Composition
                                </h4>

                                <p>
                                    ${product.ingredients}
                                </p>

                            </div>

                        </div>


                        <div class="detail-box">

                            <div class="detail-box-icon">
                                <i class="fas fa-box"></i>
                            </div>

                            <div>

                                <h4>
                                    Pack Size
                                </h4>

                                <p>
                                    ${product.packSize}
                                </p>

                            </div>

                        </div>

                    </div>


                    <div class="detail-section">

                        <h3>
                            <i class="fas fa-book-medical"></i>
                            Usage Information
                        </h3>

                        <p>
                            ${product.usage}
                        </p>

                    </div>


                    <div class="important-information">

                        <div class="important-icon">

                            <i class="fas fa-triangle-exclamation"></i>

                        </div>

                        <div>

                            <h4>
                                Important Information
                            </h4>

                            <p>
                                ${product.important}
                            </p>

                        </div>

                    </div>


                    <div class="product-modal-note">

                        <i class="fas fa-shield-heart"></i>

                        <span>
                            Always read the official product
                            label and seek appropriate
                            professional healthcare advice
                            when needed.
                        </span>

                    </div>


                    <button
                        type="button"
                        class="modal-add-cart"
                    >

                        <i class="fas fa-cart-shopping"></i>

                        Add To Cart

                    </button>

                </div>

            </div>

        `;

    document.body.appendChild(modal);

    document.body.style.overflow = "hidden";

    requestAnimationFrame(function () {
      modal.classList.add("show");
    });

    const closeModal = function () {
      modal.classList.remove("show");

      document.body.style.overflow = "";

      setTimeout(function () {
        modal.remove();
      }, 300);
    };

    modal
      .querySelector(".product-modal-close")
      .addEventListener("click", closeModal);

    modal
      .querySelector(".product-modal-overlay")
      .addEventListener("click", closeModal);

    modal
      .querySelector(".modal-add-cart")
      .addEventListener("click", function () {
        addToCart(product.id);

        closeModal();
      });

    function escapeHandler(event) {
      if (event.key === "Escape") {
        closeModal();

        document.removeEventListener("keydown", escapeHandler);
      }
    }

    document.addEventListener("keydown", escapeHandler);
  }

  // =======================================
  // PRODUCT BUTTON EVENTS
  // =======================================

  if (productsContainer && !productsContainer.dataset.eventsAttached) {
    productsContainer.dataset.eventsAttached = "true";

    productsContainer.addEventListener("click", function (e) {
      // ===============================
      // ADD TO CART
      // ===============================

      const addButton = e.target.closest(".add-cart");

      if (addButton) {
        const id = Number(addButton.dataset.id);

        addToCart(id);

        return;
      }

      // ===============================
      // PRODUCT DETAILS
      // ===============================

      const detailsButton = e.target.closest(".details-btn");

      if (detailsButton) {
        const id = Number(detailsButton.dataset.id);

        showProductDetails(id);

        return;
      }
    });
  }

  // =======================================
  // INITIAL RENDER
  // =======================================

  displayProducts(products);

  updateCartBadge();
});
