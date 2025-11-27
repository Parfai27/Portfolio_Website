// GLOBAL THEME TOGGLE
const themeToggle = document.querySelector('.theme-toggle');

// Load user preference
if (localStorage.getItem("theme") === "dark") {
    document.documentElement.classList.add("dark");
}

// Toggle Dark/Light Mode
themeToggle?.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");

    if (document.documentElement.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});

// Mobile Menu Toggle
const openMenu = document.querySelector(".menu-toggle");
const closeMenu = document.querySelector(".close-menu");
const mobileMenu = document.querySelector(".mobile-menu");

if (openMenu && closeMenu && mobileMenu) {
    openMenu.addEventListener("click", () => {
        mobileMenu.classList.add("show");
    });

    closeMenu.addEventListener("click", () => {
        mobileMenu.classList.remove("show");
    });
}
