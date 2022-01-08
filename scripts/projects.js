const imagePath = 'images/projects/';

const projects = [
  {
    name: "Practice Room",
    description:
      "A web application featuring music theory calculators and games. Practice your music theory skills with this interactive application and save your high scores.",
    image: imagePath + "practice-room.jpg",
    link: "https://music-calculators.netlify.app/",
    github: "https://www.github.com/bgaudino/music-react",
    tags: ["Django", "Python", "React", "js", "Material-UI", "Vexflow"],
  },
  {
    name: "Exercise Tracker",
    description:
      "Track you weightlifting sessions and keep track of your progress. Link your strava account to have cardio sessions automatically added to your workout log and view a map of your routes.",
    image: imagePath + "workout.jpg",
    link: "https://brian-works-out.netlify.app/",
    github: "https://www.github.com/bgaudino/workouts",
    tags: ["Django", "Python", "React", "js", "Bulma", "Strava"],
  },
  {
    name: "Baseball Stats",
    description:
      "Compare the stats of two different players and see how they compare. This application uses the MLB API to get the stats of the players you choose.",
    image: imagePath + "mlb-stats.jpg",
    link: "https://mlb-player-comparison.netlify.app/",
    github: "https://www.github.com/bgaudino/mlb-player-comparison",
    tags: ["React", "js", "css3"],
  },
  {
    name: "Half Empty",
    description:
      "The todo app for pessimists and misanthropes. This application allows you to create, edit, and delete todo items as well as add tags and share your todo list with others.",
    image: imagePath + "halfempty.jpg",
    link: "https://halfempty.herokuapp.com/",
    github: "https://www.github.com/bgaudino/halfempty",
    tags: ["Django", "Python", "js", "Bootstrap"],
  },
  {
    name: "pomoDoggo",
    description:
      "A simple pomodorro timer where you can also fetch random dog pictures from the internet. This application uses the Dog API to get random dog pictures.",
    image: imagePath + "pomodoggo.jpg",
    link: "https://pomodoggo.netlify.app/",
    github: "https://www.github.com/bgaudino/pomodoggo",
    tags: ["React", "js", "Bootstrap"],
  },
  {
    name: "Trivia",
    description:
      "A trivia game where you can choose from several different categories. This was my first try at making an app with Svelte. This application uses the Trivia API to get random trivia questions.",
    image: imagePath + "trivia.jpg",
    link: "https://trivial-unpursuit.netlify.app/",
    github: "https://www.github.com/bgaudino/trivia",
    tags: ["Svelte", "js", "html5", "css3"],
  },
  {
    name: "Word Scrambler",
    description:
      "A word scrambler game using vanilla JavaScript. This application uses the Word Scrambler API to get random words.",
    image: imagePath + "scrambler.jpg",
    link: "https://scrambleon.netlify.app/",
    github: "https://www.github.com/bgaudino/scrambler",
    tags: ["js", "html5", "css3"],
  },
  {
    name: "Drum Machine",
    description: "A simple drum machine using a React class based component.",
    image: imagePath + "drummer.jpg",
    link: "https://react-drummer.netlify.app/",
    github: "https://www.github.com/bgaudino/drum-machine",
    tags: ["React", "js", "css3"],
  },
];
