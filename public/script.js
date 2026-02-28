// Navba
// r
const navMenu = document.getElementById("nav-menu");
const openMenu = document.getElementById("open-menu");
const closeMenu = document.getElementById("close-menu");

// Menu Open korar jonno
openMenu.addEventListener("click", () => {
  navMenu.classList.remove("-translate-y-full");
  navMenu.classList.add("translate-y-0");
});

// Menu Close korar jonno
closeMenu.addEventListener("click", () => {
  navMenu.classList.remove("translate-y-0");
  navMenu.classList.add("-translate-y-full");
});

const swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 24,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: { slidesPerView: 2 },
    1280: { slidesPerView: 3 },
    1536: { slidesPerView: 4 },
  },
});

const items = document.querySelectorAll(".accordion-item");

items.forEach((item, index) => {
  item.querySelector(".accordion-header").addEventListener("click", () => {
    const isActive = item.classList.contains("active");

    // age sob remove
    items.forEach((i) => i.classList.remove("active"));

    // jodi age active chilo, tahole ar kichu korbo na (close hoye jabe)
    if (isActive) return;

    // current item open
    item.classList.add("active");

    // pair item open
    if (index % 2 === 0 && items[index + 1]) {
      items[index + 1].classList.add("active");
    }
    if (index % 2 === 1 && items[index - 1]) {
      items[index - 1].classList.add("active");
    }
  });
});


