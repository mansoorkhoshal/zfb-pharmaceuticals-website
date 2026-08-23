// // Navbar
// fetch("components/navbar.html")
//   .then((r) => r.text())
//   .then((html) => {
//     document.getElementById("navbar").innerHTML = html;
//   });

// // Footer
// fetch("components/footer.html")
//   .then((r) => r.text())
//   .then((html) => {
//     document.getElementById("footer").innerHTML = html;
//   });

// =========================================================
// LOAD NAVBAR
// =========================================================

const navbarContainer = document.getElementById("navbar");

if (navbarContainer) {
  fetch("components/navbar.html")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Navbar failed to load: ${response.status}`);
      }

      return response.text();
    })
    .then((html) => {
      navbarContainer.innerHTML = html;

      // Tell app.js that navbar is ready
      document.dispatchEvent(new CustomEvent("navbarLoaded"));
    })
    .catch((error) => {
      console.error("Error loading navbar:", error);
    });
}

// =========================================================
// LOAD FOOTER
// =========================================================

const footerContainer = document.getElementById("footer");

if (footerContainer) {
  fetch("components/footer.html")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Footer failed to load: ${response.status}`);
      }

      return response.text();
    })
    .then((html) => {
      footerContainer.innerHTML = html;

      // Tell other scripts that footer is ready
      document.dispatchEvent(new CustomEvent("footerLoaded"));
    })
    .catch((error) => {
      console.error("Error loading footer:", error);
    });
}
