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
