// =========================================================
// MOBILE MENU - WORKS WITH DYNAMICALLY LOADED NAVBAR
// =========================================================

document.addEventListener("click", function (event) {
  // Check whether the clicked element is the menu button
  const menuBtn = event.target.closest(".menu-btn");

  if (menuBtn) {
    const nav = menuBtn.closest(".navbar");

    if (!nav) {
      return;
    }

    const navLinks = nav.querySelector(".nav-links");
    const icon = menuBtn.querySelector("i");

    if (!navLinks || !icon) {
      return;
    }

    // Toggle menu
    navLinks.classList.toggle("active");

    // Check whether menu is open
    const isOpen = navLinks.classList.contains("active");

    // Change hamburger icon
    if (isOpen) {
      icon.classList.remove("fa-bars");
      icon.classList.add("fa-xmark");

      menuBtn.setAttribute("aria-expanded", "true");
    } else {
      icon.classList.remove("fa-xmark");
      icon.classList.add("fa-bars");

      menuBtn.setAttribute("aria-expanded", "false");
    }

    return;
  }

  // =====================================================
  // CLOSE MOBILE MENU WHEN NAV LINK IS CLICKED
  // =====================================================

  const clickedLink = event.target.closest(".nav-links a");

  if (clickedLink) {
    const nav = clickedLink.closest(".navbar");

    if (!nav) {
      return;
    }

    const navLinks = nav.querySelector(".nav-links");
    const menuBtn = nav.querySelector(".menu-btn");
    const icon = menuBtn ? menuBtn.querySelector("i") : null;

    if (navLinks) {
      navLinks.classList.remove("active");
    }

    if (icon) {
      icon.classList.remove("fa-xmark");
      icon.classList.add("fa-bars");
    }

    if (menuBtn) {
      menuBtn.setAttribute("aria-expanded", "false");
    }
  }
});

// ===============================
// NAVBAR SCROLL EFFECT
// ===============================

const navbar = document.querySelector(".navbar");

if (navbar) {
  const isHomePage =
    window.location.pathname.endsWith("index.html") ||
    window.location.pathname === "/" ||
    window.location.pathname.endsWith("/");

  function updateNavbar() {
    if (isHomePage) {
      if (window.scrollY > 80) {
        navbar.style.background = "#ffffff";
        navbar.style.boxShadow = "0 8px 25px rgba(0,0,0,.12)";
        navbar.style.padding = "15px 8%";
      } else {
        navbar.style.background = "rgba(255,255,255,.15)";
        navbar.style.boxShadow = "none";
        navbar.style.padding = "18px 8%";
      }
    } else {
      navbar.style.background = "#ffffff";
      navbar.style.boxShadow = "0 8px 25px rgba(0,0,0,.08)";
      navbar.style.padding = "15px 8%";
    }
  }

  window.addEventListener("scroll", updateNavbar);

  updateNavbar();
}

// ===============================
// SCROLL REVEAL
// ===============================

const revealElements = document.querySelectorAll(
  ".card,.service,.stats .box,.cta,.title",
);

function revealOnScroll() {
  const trigger = window.innerHeight * 0.85;

  revealElements.forEach((el) => {
    const top = el.getBoundingClientRect().top;

    if (top < trigger) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

// ===============================
// COUNTER ANIMATION
// ===============================

const counters = document.querySelectorAll(".stats h2");

let started = false;

function runCounters() {
  if (started) {
    return;
  }

  const stats = document.querySelector(".stats");

  if (!stats) {
    return;
  }

  const top = stats.getBoundingClientRect().top;

  if (top < window.innerHeight - 100) {
    started = true;

    counters.forEach((counter) => {
      const text = counter.innerText;

      const target = parseInt(text.replace(/\D/g, ""));

      const suffix = text.replace(/[0-9]/g, "");

      let current = 0;

      const increment = Math.ceil(target / 80);

      const timer = setInterval(() => {
        current += increment;

        if (current >= target) {
          counter.innerText = target + suffix;

          clearInterval(timer);
        } else {
          counter.innerText = current + suffix;
        }
      }, 20);
    });
  }
}

window.addEventListener("scroll", runCounters);

runCounters();

// ===============================
// SCROLL TO TOP
// ===============================

const scrollBtn = document.createElement("div");

scrollBtn.id = "scrollTop";

scrollBtn.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';

document.body.appendChild(scrollBtn);

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    scrollBtn.classList.add("show");
  } else {
    scrollBtn.classList.remove("show");
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// ===============================
// LIVE CART COUNT
// ===============================

function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  let total = 0;

  cart.forEach((item) => {
    total += item.quantity;
  });

  const badge = document.getElementById("cart-count");

  if (badge) {
    badge.innerText = total;
  }
}

updateCartCount();

// ===============================
// SMOOTH LINKS
// ===============================

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

// ===============================
// HERO FLOAT EFFECT
// ===============================

const heroImage = document.querySelector(".hero-image img");

if (heroImage) {
  window.addEventListener("mousemove", (e) => {
    const x = (window.innerWidth / 2 - e.clientX) / 40;

    const y = (window.innerHeight / 2 - e.clientY) / 40;

    heroImage.style.transform = `translate(${x}px,${y}px)`;
  });
}

// ===============================
// PRELOADER
// ===============================

window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});
