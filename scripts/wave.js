const svgs = document.querySelectorAll("svg");
svgs.forEach((svg, index) => {
  svg.style.margin = 0;
  svg.style.padding = 0;
  const path = svg.querySelector("path");
  const wave = KUTE.fromTo(
    path,
    { path: "#wave1" },
    { path: "#wave2" },
    { repeat: 999, duration: 2000, yoyo: true }
  );
  wave.start();
  if (index % 2 === 0) {
    svg.style.transform = "rotate(180deg)";
  }
});
