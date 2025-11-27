// Testimonials Page JS
console.log("Testimonials Page Loaded");

// Open menu
const openMenuBtn = document.getElementById("openMenu");
const closeMenuBtn = document.querySelector(".close-menu");
const mobileMenu = document.getElementById("mobileMenu");

if (openMenuBtn && mobileMenu) {
    openMenuBtn.addEventListener("click", () => {
        mobileMenu.classList.add("show");
    });
}

if (closeMenuBtn && mobileMenu) {
    closeMenuBtn.addEventListener("click", () => {
        mobileMenu.classList.remove("show");
    });
}
