// Handle svg animation
const waves = KUTE.fromTo(
  "#wave1",
  { path: "#wave1" },
  { path: "#wave2" },
  { repeat: 999, duration: 2000, yoyo: true }
);
waves.start();


