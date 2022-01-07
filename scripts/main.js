console.log("Hi, there!");

// Create projects
const container = document.createElement("div");
container.classList.add("project-section");

projects.forEach((project, index) => {
  const div = document.createElement("div");
  div.classList.add("project");
  const title = document.createElement("h2");
  const hr = document.createElement("hr");
  const description = document.createElement("p");
  const img = document.createElement("img");
  const imgLink = document.createElement("a");
  imgLink.href = project.link;
  imgLink.appendChild(img);
  const links = document.createElement("div");
  links.classList.add("project-links");
  const a = document.createElement("a");
  const github = document.createElement("a");
  links.appendChild(a);
  links.appendChild(github);
  title.innerText = project.name;
  img.src = project.image;
  description.innerText = project.description;
  a.href = project.link;
  a.target = "_blank";
  a.innerText = "View Project";
  github.href = project.github;
  github.target = "_blank";
  github.innerText = "View Github";
  div.appendChild(title);
  div.appendChild(hr);
  div.appendChild(imgLink);
  div.appendChild(description);
  div.appendChild(links);
  container.appendChild(div);
  // if (index % 2 !== 0) {
  //   const wave = document.createElement("div");
  //   wave.classList.add("divider");
  //   wave.style.gridColumn = "span 2";
  //   container.appendChild(wave);
  // }
});

const projectsSection = document.querySelector("#project-section");
projectsSection.appendChild(container);


// Handle navbar animation
const nav = document.querySelector("nav");
const header = document.querySelector("header");
const border = document.querySelector(".nav-border");

let timer = -1;
let linkClicked = false;

document.addEventListener("scroll", () => {
  if (linkClicked) return;
  nav.style.animationName = "fly-up";
  if (timer !== -1) {
    clearTimeout(timer);
  }
  timer = setTimeout(() => {
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

const anchors = document.querySelectorAll("a");
anchors.forEach((anchor) => {
  anchor.addEventListener("click", (e) => {
    linkClicked = true;
    if (anchor.id !== "header-link") {
      nav.classList.add("header-scroll");
      border.classList.add("nav-border-scroll");
    } else {
      nav.classList.remove("header-scroll");
      border.classList.remove("nav-border-scroll");
    }
    setTimeout(() => (linkClicked = false), 500);
  });
});


// Handle svg animation
const waves = KUTE.fromTo(
  "#wave1",
  { path: "#wave1" },
  { path: "#wave2" },
  { repeat: 999, duration: 5000, yoyo: true }
);
waves.start();


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



const cards = Array.from(document.querySelectorAll(".project"));

cards.forEach((card) => {
  card.onmouseenter = () => {
    card.classList.add("active-project");
  };
  card.onmouseleave = () => {
    card.classList.remove("active-project");
  };
});
