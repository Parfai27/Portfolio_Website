const root = document.documentElement;
const themeButton = document.querySelector(".theme-toggle");
const storedTheme = localStorage.getItem("theme");
const systemDark = window.matchMedia?.("(prefers-color-scheme: dark)").matches;

if (storedTheme === "dark" || (!storedTheme && systemDark)) root.classList.add("dark");

function syncThemeButton() {
  if (!themeButton) return;
  const dark = root.classList.contains("dark");
  themeButton.innerHTML = dark ? '<i class="ri-sun-line"></i>' : '<i class="ri-moon-line"></i>';
  themeButton.setAttribute("aria-label", dark ? "Switch to light theme" : "Switch to dark theme");
}
syncThemeButton();

themeButton?.addEventListener("click", () => {
  root.classList.toggle("dark");
  localStorage.setItem("theme", root.classList.contains("dark") ? "dark" : "light");
  syncThemeButton();
});

const openMenu = document.querySelector(".menu-toggle");
const closeMenu = document.querySelector(".close-menu");
const mobileMenu = document.querySelector(".mobile-menu");

function setMenu(open) {
  if (!mobileMenu) return;
  mobileMenu.classList.toggle("show", open);
  mobileMenu.setAttribute("aria-hidden", String(!open));
  openMenu?.setAttribute("aria-expanded", String(open));
  document.body.style.overflow = open ? "hidden" : "";
  (open ? closeMenu : openMenu)?.focus();
}
openMenu?.addEventListener("click", () => setMenu(true));
closeMenu?.addEventListener("click", () => setMenu(false));
mobileMenu?.querySelectorAll("a").forEach(link => link.addEventListener("click", () => setMenu(false)));
document.addEventListener("keydown", event => {
  if (event.key === "Escape" && mobileMenu?.classList.contains("show")) setMenu(false);
});