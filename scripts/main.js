projects.forEach((project, index) => {
  const section = document.createElement("section");
  // if (index % 2 !== 0) section.classList.add("orange");
  const h1 = document.createElement("h1");
  const p = document.createElement("p");
  const img = document.createElement("img");
  const a = document.createElement("a");
  const github = document.createElement("a");
  h1.innerText = project.name;
  p.innerText = project.description;
  img.src = project.image;
  a.href = project.link;
  a.target = "_blank";
  a.innerText = "View Project";
  github.href = project.github;
  github.target = "_blank";
  github.innerText = "View Github";
  section.appendChild(h1);
  section.appendChild(p);
  section.appendChild(img);
  section.appendChild(a);
  section.appendChild(github);
  document.body.appendChild(section);
  if (index !== projects.length - 1) {
    const divider = document.createElement("div");
    divider.classList.add("divider");
    document.body.appendChild(divider);
    const divider2 = document.createElement("div");
    divider2.classList.add("divider");
    divider2.classList.add("flip");
    document.body.appendChild(divider);
    document.body.appendChild(divider2);
  }
});
