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
  img.classList.add("project-img");
  const imgLink = document.createElement("a");
  imgLink.href = project.link;
  imgLink.target = "_blank";
  imgLink.appendChild(img);
  const links = document.createElement("div");
  links.classList.add("project-links");
  const a = document.createElement("a");
  const browserIcon = document.createElement("i");
  browserIcon.classList.add("fab", "fa-chrome");
  links.appendChild(a);

  Object.keys(project.github).forEach((key) => {
    const github = document.createElement("a");
    const githubIcon = document.createElement("i");
    githubIcon.classList.add("fab", "fa-github");
    github.href = project.github[key];
    github.target = "_blank";
    github.innerText = key === "code" ? "Source Code" : key;
    github.appendChild(githubIcon);
    links.appendChild(github);
  });
  const tags = document.createElement("div");
  tags.classList.add("tags");
  project.tags.forEach((tag) => {
    let tagDiv;
    if (tag === "Django") {
      tagDiv = document.createElement("img");
      tagDiv.classList.add("django");
      tagDiv.src = "./images/icons/django.png";
    } else if (tag === "Svelte") {
      tagDiv = document.createElement("img");
      tagDiv.classList.add("django");
      tagDiv.src = "./images/icons/svelte.png";
    } else if (
      ["React", "js", "Python", "html5", "css3", "Bootstrap"].includes(tag)
    ) {
      tagDiv = document.createElement("i");
      tagDiv.classList.add("tag");
      tagDiv.classList.add("fab", `fa-${tag.toLowerCase()}`);
    } else if (tag === "node-js") {
      tagDiv = document.createElement("i");
      tagDiv.classList.add("tag");
      tagDiv.classList.add("fab", "fa-node-js");
    }
    if (tagDiv) {
      tags.appendChild(tagDiv);
    }
  });
  title.innerText = project.name;
  title.style.cursor = "pointer";
  img.src = project.image;
  description.innerText = project.description;
  a.href = project.link;
  a.target = "_blank";
  a.innerText = "View Project";
  a.appendChild(browserIcon);
  div.appendChild(title);
  div.appendChild(hr);
  div.appendChild(imgLink);
  div.appendChild(description);
  div.appendChild(tags);
  div.appendChild(links);
  title.onclick = () => {
    const link = div.querySelector("a");
    link.click();
  };
  container.appendChild(div);
});

const projectsSection = document.querySelector("#project-section");
projectsSection.appendChild(container);

// Handle navbar animation
const nav = document.querySelector("nav");
const header = document.querySelector("header");
const border = document.querySelector(".nav-border");

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

// Handle card hover animation
const cards = Array.from(document.querySelectorAll(".project"));

cards.forEach((card) => {
  card.onmouseenter = () => {
    card.classList.add("active-project");
  };
  card.onmouseleave = () => {
    card.classList.remove("active-project");
  };
});
