var map = L.map('map').setView([-23.598250, -46.601574], 18);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([-23.598250, -46.601574]).addTo(map);

const hamburguer = document.querySelector(".hamburguer");
const optionsHeader = document.querySelector(".optionsHeader");

hamburguer.addEventListener("click", () => {
    optionsHeader.classList.toggle("ativo");
});

gsap.registerPlugin(ScrollTrigger);

const gallery = document.querySelector(".gallery");

gsap.to(gallery, {
    x: () => -(gallery.scrollWidth - window.innerWidth),
    ease: "none",
    scrollTrigger: {
        trigger: ".gallery-wrapper",
        start: "top top",
        end: () => "+=" + (gallery.scrollWidth - window.innerWidth),
        scrub: true,
        pin: true,
        anticipatePin: 1
    }
});