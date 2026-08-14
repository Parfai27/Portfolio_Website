document.querySelector("#year")?.replaceChildren(String(new Date().getFullYear()));

const filterButtons = document.querySelectorAll(".filter");
const projects = document.querySelectorAll(".project-card");
filterButtons.forEach(button => button.addEventListener("click", () => {
  filterButtons.forEach(item => item.classList.remove("active"));
  button.classList.add("active");
  const selected = button.dataset.filter;
  projects.forEach(project => project.classList.toggle("hidden", selected !== "all" && project.dataset.category !== selected));
}));

const reducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
const revealItems = document.querySelectorAll(".reveal");
if (reducedMotion || !("IntersectionObserver" in window)) {
  revealItems.forEach(item => item.classList.add("visible"));
} else {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach(item => observer.observe(item));
}