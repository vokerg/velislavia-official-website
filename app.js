// The repository stores optimized WebP copies of the visual archive.
// Keep legacy .png references in the document readable while resolving them
// to the actual static files before the interactive features are used.
document.querySelectorAll('img[src$=".png"]').forEach(image => {
  image.src = image.src.replace(/\.png$/i, ".webp");
});
document.querySelectorAll('[data-open-image$=".png"]').forEach(element => {
  element.dataset.openImage = element.dataset.openImage.replace(/\.png$/i, ".webp");
});
document.querySelectorAll('link[href$=".png"]').forEach(link => {
  link.href = link.href.replace(/\.png$/i, ".webp");
});
document.querySelectorAll('a[href$="anthem-demo.wav"]').forEach(link => link.remove());

const header = document.querySelector(".site-header");
const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");
const lightbox = document.querySelector("#lightbox");
const lightboxImage = lightbox.querySelector("img");

window.addEventListener("scroll", () => {
  header.classList.toggle("is-scrolled", window.scrollY > 40);
});

menuButton.addEventListener("click", () => {
  const open = nav.classList.toggle("is-open");
  menuButton.setAttribute("aria-expanded", String(open));
});

nav.addEventListener("click", event => {
  if (event.target.matches("a")) {
    nav.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
  }
});

document.addEventListener("click", event => {
  const trigger = event.target.closest("[data-open-image]");
  if (!trigger) return;
  lightboxImage.src = trigger.dataset.openImage;
  const nested = trigger.querySelector("img");
  lightboxImage.alt = nested?.alt || "Изображение из медиатеки";
  lightbox.showModal();
});

lightbox.querySelector(".lightbox__close").addEventListener("click", () => lightbox.close());
lightbox.addEventListener("click", event => {
  const rect = lightbox.getBoundingClientRect();
  const inside = event.clientX >= rect.left && event.clientX <= rect.right && event.clientY >= rect.top && event.clientY <= rect.bottom;
  if (!inside) lightbox.close();
});

document.querySelectorAll(".gallery-filters button").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".gallery-filters button").forEach(item => item.classList.remove("is-active"));
    button.classList.add("is-active");
    const filter = button.dataset.filter;
    document.querySelectorAll(".gallery-grid > button").forEach(card => {
      card.classList.toggle("is-hidden", filter !== "all" && card.dataset.category !== filter);
    });
  });
});

const sections = [...document.querySelectorAll("main section[id]")];
const links = [...document.querySelectorAll(".main-nav a")];
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    links.forEach(link => link.classList.toggle("is-active", link.getAttribute("href") === `#${entry.target.id}`));
  });
}, { rootMargin: "-35% 0px -55% 0px" });
sections.forEach(section => observer.observe(section));
