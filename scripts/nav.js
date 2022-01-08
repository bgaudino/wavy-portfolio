// Handle mobile navbar
const burger = document.querySelector(".fa-hamburger");
const menu = document.querySelector(".mobile-links");

let menuOpen = false;
burger.onclick = () => {
  if (menuOpen) {
    menu.classList.remove("menu-open");
    // nav.style.height = `${nav.clientHeight - 140}px`;
    menuOpen = false;
  } else {
    menu.classList.add("menu-open");
    // nav.style.height = `${nav.clientHeight + 140}px`;
    menuOpen = true;
  }
};

let timer = -1;
let linkClicked = false;

document.addEventListener("scroll", () => {
  if (linkClicked) return;
  nav.style.animationName = "fly-up";
  if (timer !== -1) {
    clearTimeout(timer);
  }
  timer = setTimeout(() => {
    if (menuOpen) {
      menuOpen = false;
      menu.classList.remove("menu-open");
      nav.style.height = `${nav.clientHeight - 140}px`;
    }
    if (window.scrollY > 0) {
      nav.classList.add("header-scroll");
      border.classList.add("nav-border-scroll");
    } else {
      nav.classList.remove("header-scroll");
      border.classList.remove("nav-border-scroll");
    }
    nav.style.animationName = "drop-in";
  }, 500);
  const scroll = window.scrollY;
});

document.body.onclick = (e) => {
  if (e.target.tagName === "I") return;
  menu.classList.remove("menu-open");
  // nav.style.height = `${nav.clientHeight - 140}px`;
  menuOpen = false;
};

// Handle link hover color
const navLinks = document.querySelectorAll(".code-wrapper");

navLinks.forEach((link) => {
  link.addEventListener("mouseenter", () => {
    if (link.tagName === "H2") {
      link.style.color = "orange";
    } else {
      link.style.color = window.scrollY > 0 ? "orange" : "#EFD19F";
    }
  });
  link.addEventListener("mouseleave", () => (link.style.color = "white"));
});
