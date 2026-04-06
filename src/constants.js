// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';

import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';

import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';

import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cLogo from './assets/tech_logo/c.png';
import javaLogo from './assets/tech_logo/java.png';

import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';

import postgreLogo from './assets/tech_logo/postgre.png';


// Education Section Logo's 

import bsaLogo from './assets/education_logo/bsa_logo.png'; 
import vpsLogo from './assets/education_logo/vps_logo.png';

// Project Section Logo's
import githubdetLogo from './assets/work_logo/github_det.png';
import csprepLogo from './assets/work_logo/cs_prep.png';
import movierecLogo from './assets/work_logo/movie_rec.png';
import taskremLogo from './assets/work_logo/task_rem.png';
import npmLogo from './assets/work_logo/npm.png';
import webverLogo from './assets/work_logo/web_dig.png';
import cmLogo from './assets/work_logo/cm.png';
import imagesearchLogo from './assets/work_logo/image_search.png';
import removebgLogo from './assets/work_logo/remove_bg.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
   
      { name: 'Material UI', logo: materialuiLogo },
      
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Springboot', logo: springbootLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'JavaScript', logo: javascriptLogo },
     
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Eclipse', logo: postmanLogo },
     
    ],
  },
];

 
  export const education = [
   
    {
      id: 1,
      img: bsaLogo,
      school: "Rabindra Nath Tagore University",
      date: "June 2022- Aug 2026",
      grade: "80.2%",
      desc: "I completed my Bachelor's degree in Computer Science (BE) from Rabindranath Tagore University Bhopal. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development , I gained practical insights into the world of software development. My time at Rabindranath Tagore University allowed me to work on projects that applied theoretical concepts to real-world problems.",
      degree: "Bachelor of Engineering- BE(Computer Science)",
    },
    {
      id: 2,
      img: vpsLogo,
      school: "H R H S Ganpatganj Supaul(Bihar)",
      date: "Apr 2019 - March 2021",
      grade: "63.4",
      desc: "I completed my class 12 education from H R H S Ganpatganj Supaul(Bihar), under the BSEB board, where I studied Physics, Chemistry, and Mathematics with Hindi English",
      degree: "BSEB(XII) - PCM ",
    },
    {
      id: 3,
      img: vpsLogo,
      school: "H R H S Ganpatganj Supaul(Bihar)",
      date: "2019",
      grade: "69.6%",
      desc: "I completed my class 10 education from H R H S Ganpatganj Supaul(Bihar), under the BSEB board.",
      degree: "BSEB(X)",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Email Generator ",
      description:
        "This project aims to simplify email writing for students, professionals, and businesses by combining modern web development with AI capabilities",
      image: githubdetLogo,
      tags: ["Java", "Springboot", "React JS", "API"],
      github: "",
     
    },
    {
      id: 1,
      title: "Travel Explorer",
      description:
        "A Travel Explorer project. Build using HTML CSS and javascript , ",
      image: csprepLogo,
      tags: [ "HTML", "CSS", "JavaScript"],
      github: "",

    },
   
    {
      id: 5,
      title: "Webverse Digital",
      description:
        "The official website for Webverse Digital, a creative digital marketing agency. Built using HTML, CSS, and JavaScript, it features visually appealing animations and a clean design to showcase the agency's services.",
      image: webverLogo,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "",
      webapp: "https://webversedigital.com/",
    },
   
  ];  