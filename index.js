// This is for the "sticky" navigation, makes it semi-transparent once the user scrolls down.
const el = document.querySelector(".navbar")

const observer = new IntersectionObserver(
    // When it's past this threshold, apply the "is-pinned" class
    ([e]) => e.target.classList.toggle("is-pinned", e.intersectionRatio < 1),
    { threshold: [1] }
);

observer.observe(el);
