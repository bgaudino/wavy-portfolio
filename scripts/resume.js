const resume = {
  work: [
    {
      company: "Cisco",
      position: "Software Engineer",
      startDate: "2017-01-01",
      endDate: "2017-12-31",
      summary: "",
    },
    {
      company: "Cisco",
      position: "Software Engineer",
      startDate: "2016-01-01",
      endDate: "2016-12-31",
      summary: "",
    },
    {
      company: "Cisco",
      position: "Software Engineer",
      startDate: "2015-01-01",
      endDate: "2015-12-31",
      summary: "",
    },
  ],
  education: [
    {
      school: "University of California, Berkeley",
      degree: "Bachelor of Science",
      startDate: "2011-01-01",
      endDate: "2015-12-31",
    },
    {
      school: "University of California, Berkeley",
      degree: "Bachelor of Science",
      startDate: "2011-01-01",
      endDate: "2015-12-31",
    },
  ],
  skills: [
    {
      name: "Python",
      level: 10,
    },
    {
      name: "Django",
      level: 10,
    },
    {
      name: "React",
      level: 9,
    },
    {
      name: "JavaScript",
      level: 9,
    },
    {
      name: "TypeScript",
      level: 8,
    },
    {
      name: "HTML",
      level: 8,
    },
    {
      name: "CSS",
      level: 8,
    },
    {
      name: "Git",
      level: 8,
    },
    {
      name: "Flask",
      level: 7,
    },
    {
      name: "Bootstrap",
      level: 7,
    },
    {
      name: "Material-UI",
      level: 7,
    },
    {
      name: "Bulma",
      level: 6,
    },
    {
      name: "Express",
      level: 5,
    },
    {
      name: "Svelte",
      level: 5,
    },
    {
      name: "SQL",
      level: 5,
    },
    {
      name: "C",
      level: 5,
    },
    {
      name: "C#",
      level: 4,
    },
  ],
};

resume.skills.forEach((skill) => {
  const div = document.createElement("div");
  div.classList.add("skill");
  const name = document.createElement("h3");
  name.innerText = skill.name;
  div.appendChild(name);
  const level = document.createElement("div");
  level.classList.add("level", "orange");
  level.dataset.level = skill.level;
  div.appendChild(level);
  // for (let i = 0; i < skill.level; i++) {
  //   const star = document.createElement("span");
  //   star.innerText = "★";
  //   div.appendChild(star);
  // }
  document.body.querySelector("#skills").appendChild(div);
});

document.addEventListener("scroll", () => {
  const levels = document.querySelectorAll(".level");
  levels.forEach((level) => {
    if (level.getBoundingClientRect().top <= window.innerHeight) {
      level.style.width = `${level.dataset.level * 10}%`;
    } else {
      level.style.width = "0%";
    }
  });
});
