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

// প্রথমটা default open
if (items.length > 0) {
  items[0].classList.add("active");
}

items.forEach((item) => {

  // এখন পুরো accordion-item এ click হবে
  item.addEventListener("click", () => {
    const isActive = item.classList.contains("active");

    // আগে সব close
    items.forEach((i) => i.classList.remove("active"));

    // যদি আগেই active থাকে → close থাকবে
    if (isActive) return;

    // এখন current item open
    item.classList.add("active");
  });

});
const faqItems = document.querySelectorAll(".faq-item");

// প্রথমটা default open থাকবে
if (faqItems.length > 0) {
  faqItems[0].classList.add("open");
  setMaxHeight(faqItems[0]);
}

faqItems.forEach((item) => {

  // এখন পুরো faq-item এ click
  item.addEventListener("click", () => {
    const isOpen = item.classList.contains("open");

    // আগে সব close
    faqItems.forEach((i) => {
      i.classList.remove("open");
      setMaxHeight(i, false);
    });

    // যদি আগেই open থাকে → close হয়ে যাবে
    if (isOpen) return;

    // এখন current item open
    item.classList.add("open");
    setMaxHeight(item);
  });

});

// height smooth animation এর জন্য
function setMaxHeight(item, open = true) {
  const answer = item.querySelector(".faq-answer");

  if (!answer) return;

  if (open) {
    answer.style.maxHeight = answer.scrollHeight + "px";
  } else {
    answer.style.maxHeight = null;
  }
}