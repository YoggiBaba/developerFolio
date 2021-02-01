/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from 'react-easy-emoji';

const illustration = {
  animated: true, // set to false to use static SVG
};

const greeting = {
  username: 'Yogesh Rathod',
  title: "Hi all, I'm Yogesh",
  subTitle: emoji(
    `A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with 
    JavaScript / VueJs / Reactjs / Nodejs and some other cool libraries and frameworks.`
  ),
  resumeLink:
    'https://drive.google.com/file/d/147Tzn2ubp5YzbxqNk3H7ONYw2q3a7ytY/view?usp=sharing',
  displayGreeting: true, // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: 'https://github.com/yug33',
  linkedin: 'https://www.linkedin.com/in/rathod-yogesh/',
  gmail: 'yrathod33@gmail.com',
  medium: 'https://medium.com/@yogesh.rathod_13072',
  display: true, // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: 'What I do',
  subTitle: 'CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK',
  skills: [
    emoji(
      '⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications'
    ),
    emoji('⚡ Develope secure and stabled backend.'),
    emoji(
      '⚡ Integration of third party services such as Firebase/ AWS '
    ),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: 'html-5',
      fontAwesomeClassname: 'fab fa-html5',
    },
    {
      skillName: 'css3',
      fontAwesomeClassname: 'fab fa-css3-alt',
    },
    {
      skillName: 'sass',
      fontAwesomeClassname: 'fab fa-sass',
    },
    {
      skillName: 'JavaScript',
      fontAwesomeClassname: 'fab fa-js',
    },
    {
      skillName: 'reactjs',
      fontAwesomeClassname: 'fab fa-react',
    },
    {
      skillName: 'Vuejs',
      fontAwesomeClassname: 'fab fa-vuejs',
    },
    {
      skillName: 'nodejs',
      fontAwesomeClassname: 'fab fa-node',
    },
    {
      skillName: 'npm',
      fontAwesomeClassname: 'fab fa-npm',
    },
    {
      skillName: 'PostgreSQL',
      fontAwesomeClassname: 'fas fa-database',
    },
    {
      skillName: 'aws',
      fontAwesomeClassname: 'fab fa-aws',
    },
    {
      skillName: 'firebase',
      fontAwesomeClassname: 'fas fa-fire',
    },
    {
      skillName: 'python',
      fontAwesomeClassname: 'fab fa-python',
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: 'Pune Institute of Computer Technology',
      logo: require('./assets/images/Pict_logo.png'),
      subHeader: 'Bachelor of Engineering in Computer Science',
      duration: 'September 2013 - May 2019',
    }
  ],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: 'Frontend/Design', //Insert stack or technology you have experience in
      progressPercentage: '90%', //Insert relative proficiency in percentage
    },
    {
      Stack: 'Backend',
      progressPercentage: '70%',
    },
    {
      Stack: 'Programming',
      progressPercentage: '60%',
    },
  ],
  displayCodersrank: false, // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: 'Full Stack developer',
      company: 'Redpanda / Launchventures ',
      companylogo: require('./assets/images/lv.jpg'),
      date: 'July 2019 – Aug 2020',
      // desc:
      //   'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      // descBullets: [
      //   'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      //   'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      // ],
    }
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: 'yug33', // Change to your github username to view your profile in Contact Section.
  showGithubProfile: 'true', // Set true or false to show Contact profile using Github, defaults to true
  display: true, // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: 'Big Projects',
  subtitle: 'SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH',
  projects: [
    {
      image: require('./assets/images/sc.png'),
      projectName: "Simplified Credit",
      // projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: 'Visit Website',
          url:
            'https://www.simplifiedcredit.net/',
        },
        //  you can add extra buttons here.
      ],
    }
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji('Achievements And Certifications 🏆 '),
  subtitle:
    'Achievementsand Some Cool Stuff that I have done !',

  achievementsCards: [
    {
      title: '3rd prize Ubisoft GameJam 2018',
      subtitle:
        'It was the competion for creating a 3d puzzle game in 24 hour in team of 5 ',
      image: require('./assets/images/ubisoft.png'),
      footerLink: [
        // {
        //   name: 'Certification',
        //   url:
        //     'https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing',
        // },
        // {
        //   name: 'Award Letter',
        //   url:
        //     'https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing',
        // },
        // {
        //   name: 'Google Code-in Blog',
        //   url:
        //     'https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html',
        // },
      ],
    },
    {
      title: ' 1st prize Credenz\'17',
      subtitle:
        'Won the 1st prize at Credenz\'17 project competion, Credenz is the annual technical festival organised by the PICT ',
      image: require('./assets/images/credenze.png'),
      footerLink: [
        // {
        //   name: 'View Google Assistant Action',
        //   url:
        //     'https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en',
        // },
      ],
    },

    // {
    //   title: 'PWA Web App Developer',
    //   subtitle: 'Completed Certifcation from SMIT for PWA Web App Development',
    //   image: require('./assets/images/pwaLogo.webp'),
    //   footerLink: [
    //     { name: 'Certification', url: '' },
    //     {
    //       name: 'Final Project',
    //       url: 'https://pakistan-olx-1.firebaseapp.com/',
    //     },
    //   ],
    // },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: 'Blogs',
  subtitle:
    'With Love for Developing cool stuff, I love to write and teach others what I have learnt.',

  blogs: [
    {
      url:
        'https://medium.com/codewords/implementing-full-text-search-in-postgresql-3160950b4628',
      title: 'Implementing Full-text search in PostgreSQL.',
      description:
        'Full-text search in PostgreSQL is a powerful feature. To build your next search engine, PostgreSQL would definitely be an easy way to implement a full-text and phrase search solution.',
    }
  ],
  display: true, // Set false to hide this section, defaults to true
};
const talkSection = {
  // title: 'TALKS',
  // subtitle: emoji(
  //   'I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅'
  // ),

  // talks: [
  //   {
  //     title: 'Build Actions For Google Assistant',
  //     subtitle: 'Codelab at GDG DevFest Karachi 2019',
  //     slides_url: 'https://bit.ly/saadpasta-slides',
  //     event_url: 'https://www.facebook.com/events/2339906106275053/',
  //   },
  // ],
  display: false, // Set false to hide this section, defaults to true
};

const podcastSection = {
  // title: emoji('Podcast 🎙️'),
  // subtitle: 'I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY',

  // // Please Provide with Your Podcast embeded Link
  // podcast: [
  //   'https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo',
  // ],
  display: false, // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji('Contact Me ☎️'),
  subtitle:
    'Discuss a project or just want to say hi? My Inbox is open for all.',
  number: '+91-8698482662',
  emailAddress: 'yrathod33@gmail.com',
};

// Twitter Section

const twitterDetails = {
  userName: 'twitter', //Replace "twitter" with your twitter username without @
  display: false, // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
};
