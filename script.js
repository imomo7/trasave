// Mobile Menu Toggle
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Scroll Effect
window.addEventListener("scroll", () => {
    let header = document.querySelector("nav");
    header.classList.toggle("scrolled", window.scrollY > 50);
});

// Button Hover Effect
document.querySelectorAll(".btn").forEach(btn => {
    btn.addEventListener("mouseenter", () => {
        btn.style.backgroundColor = "green";
        btn.style.color = "white";
    });
    btn.addEventListener("mouseleave", () => {
        btn.style.backgroundColor = "";
        btn.style.color = "";
    });
});
