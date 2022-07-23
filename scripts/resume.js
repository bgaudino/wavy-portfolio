const resume = {
  $schema:
    'https://raw.githubusercontent.com/jsonresume/resume-schema/v1.0.0/schema.json',
  basics: {
    name: 'Brian Gaudino',
    label: 'Full Stack Web Developer',
    image: 'http://me.jpg',
    email: 'bgaudino@gmail.com',
    phone: '(330) 554-6643',
    url: 'https://briangaudino.dev',
    summary:
      "I'm a Full Stack Web Developer based in Chicago. As a self-taught programmer with a background in music, I bring a multi-disciplinary mindset to my work. I specialize in Django and React but I'm I am always excited to learn new technologies. I'm currently working as a Software Engineer at Fusionbox.",
    location: {
      address: '5825 S Dorchester Ave',
      postalCode: 'IL 60637',
      city: 'Chicago',
      countryCode: 'US',
    },
    profiles: [
      {
        network: 'LinkedIn',
        url: 'https://linkedin.com/in/brian-gaudino',
      },
      {
        network: 'GitHub',
        url: 'https://github.com/bgaudino',
      },
    ],
  },
  work: [
    {
      name: 'Fusionbox',
      location: 'Denver, CO',
      position: 'Software Engineer',
      url: 'https://fusionbox.com',
      startDate: '2022-04-01',
      highlights: [
        'Architect and build new Python/Django applications for clients in a variety of industries',
        'Collaborate with clients to design and implement new features',
        'Take over and rescue existing projects',
        'Write and maintain open-source software',
      ],
    },
    {
      name: 'The Paperless Agent',
      location: 'Austin, TX',
      description: 'Awesome compression company',
      position: 'Software Developer',
      url: 'https://thepaperlessagent.com',
      startDate: '2021-07-01',
      endDate: '2022-04-01',
      highlights: [
        'Collaborate with dev team to determine the scope and expectations of the phases of our marketing suite roll out.',
        'Produce clean, efficient code, based on team standards.',
        'Integrate components and third-party programs through well documented APIs.',
        'Troubleshoot, debug, and upgrade existing code as needed.',
        'Gather and evaluate user feedback and make recommendations as necessary.',
      ],
    },
    {
      name: 'Cleveland Classical Guitar Society',
      location: 'Cleveland, OH',
      position: 'Director of Education',
      startDate: '2016-08-01',
      endDate: '2020-04-01',
      highlights: [
        'Engineered expansion of the Education Program from 100 students at 3 schools to over 700 students at 18 schools.',
        'Launched Guitar@Home Academy during the COVID-19 pandemic to provide students synchronous and asynchronous online instruction opportunities.',
      ],
    },
  ],
  education: [
    {
      institution: 'University of Louisiana at Lafayette',
      studyType: 'Master of Music',
      startDate: '2007-08-01',
      endDate: '2009-05-01',
    },
    {
      institution: 'College of William and Mary',
      studyType: 'Bachelor of Arts',
      startDate: '2003-08-01',
      endDate: '2007-05-01',
    },
  ],
  skills: [
    {
      name: 'Python',
      level: 10,
    },
    {
      name: 'Django',
      level: 10,
    },
    {
      name: 'React',
      level: 9,
    },
    {
      name: 'TypeScript',
      level: 9,
    },
    ,
    {
      name: 'JavaScript',
      level: 9,
    },
    {
      name: 'HTML',
      level: 8,
    },
    {
      name: 'CSS',
      level: 8,
    },
    {
      name: 'Git',
      level: 8,
    },
    {
      name: 'SQL',
      level: 7,
    },
    {
      name: 'Bootstrap',
      level: 7,
    },
    {
      name: 'Material-UI',
      level: 7,
    },
    {
      name: 'Express',
      level: 6,
    },
    {
      name: 'Svelte',
      level: 5,
    },
    {
      name: 'C',
      level: 5,
    },
    {
      name: 'C#',
      level: 4,
    },
  ],
  interests: [
    {
      name: 'Music',
      keywords: ['Guitar', 'Classical', 'Piano', 'Violin', 'Cello', 'Bass'],
    },
    {
      name: 'Baseball',
      keywords: ['Baseball', 'Softball', 'Basketball', 'Hockey'],
    },
  ],
  meta: {
    canonical:
      'https://raw.githubusercontent.com/jsonresume/resume-schema/master/resume.json',
    version: 'v1.0.0',
    lastModified: '2017-12-24T15:53:00',
  },
};

const monthNames = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

function formatDate(date) {
  if (!date) return 'Present';
  const d = new Date(date);
  const year = d.getFullYear();
  const month = monthNames[(d.getMonth() + 1) % 12];
  return `${month} ${year}`;
}

const resumeContainer = document.getElementById('resume-container');

const work = document.createElement('div');
work.classList.add('resume-section');
const workHeader = document.createElement('h2');
workHeader.classList.add('spaced-header');
workHeader.innerText = 'Work';
work.appendChild(workHeader);
resumeContainer.appendChild(work);

const education = document.createElement('div');
education.classList.add('resume-section');
const educationHeader = document.createElement('h2');
educationHeader.innerText = 'Education';
educationHeader.classList.add('spaced-header');
education.appendChild(educationHeader);
resumeContainer.appendChild(education);

resume.work.forEach((job) => {
  const div = document.createElement('div');
  const company = document.createElement('h3');
  company.innerText = job.name;
  const position = document.createElement('h4');
  position.innerText = job.position;
  const time = document.createElement('h5');
  time.innerText = `${formatDate(job.startDate)} - ${formatDate(job.endDate)}`;
  div.appendChild(company);
  div.appendChild(position);
  div.appendChild(time);
  const highlights = document.createElement('ul');
  job.highlights.forEach((highlight) => {
    const li = document.createElement('li');
    li.innerText = highlight;
    highlights.appendChild(li);
  });
  div.appendChild(highlights);
  work.append(div);
});

resume.education.forEach((school) => {
  const div = document.createElement('div');
  const institution = document.createElement('h3');
  institution.innerText = school.institution;
  const degree = document.createElement('h4');
  degree.innerText = school.studyType;
  const time = document.createElement('h5');
  time.innerText = `${formatDate(school.startDate)} - ${formatDate(
    school.endDate
  )}`;
  div.appendChild(institution);
  div.appendChild(degree);
  div.appendChild(time);
  education.append(div);
});

resume.skills.forEach((skill) => {
  const div = document.createElement('div');
  div.classList.add('skill');
  const name = document.createElement('h3');
  name.innerText = skill.name;
  div.appendChild(name);
  const level = document.createElement('div');
  level.classList.add('level', 'orange');
  level.dataset.level = skill.level;
  div.appendChild(level);
  // for (let i = 0; i < skill.level; i++) {
  //   const star = document.createElement("span");
  //   star.innerText = "★";
  //   div.appendChild(star);
  // }
  document.body.querySelector('#skills').appendChild(div);
});

document.addEventListener('scroll', () => {
  const levels = document.querySelectorAll('.level');
  levels.forEach((level) => {
    if (level.getBoundingClientRect().top <= window.innerHeight) {
      level.style.width = `${level.dataset.level * 10}%`;
    } else {
      level.style.width = '0%';
    }
  });
});
