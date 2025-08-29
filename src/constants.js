// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
// import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';

import geu from './assets/education_logo/geu.png';
import cjm from './assets/education_logo/cjm.png';




import chatapp from './assets/work_logo/chatapp.png';
import brain from './assets/work_logo/brain.png';
import parser from './assets/work_logo/parser.png';
import proxy from './assets/work_logo/proxy.png';
import medichat from './assets/work_logo/medichat.png';
import port from './assets/work_logo/port.png';
export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Next JS", logo: nextjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },

    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C", logo: cLogo },
      { name: "C++", logo: cppLogo },
      { name: "Java", logo: javaLogo },
      { name: "Python", logo: pythonLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
    ],
  },


];


export const education = [
  {
    id: 0,
    img: geu,
    school: "Graphic Era University, Dehradun",
    // date: "Sept 2022 - July 2024",
    grade: "8.88 CGPA",
    //desc: "I have completed my Master's degree (MCA) in Computer Applications from GLA University, Mathura. During my time at GLA, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at GLA University has been instrumental in shaping my technical abilities and professional growth.",
    degree: "B.Tech CSE",
  },
  {
    id: 1,
    img: cjm,
    school: "Convent Of Jesus and Mary, Dehradun",
    // date: "Sept 2018 - Aug 2021",
    grade: "90.8%",
    //desc: "I completed my Bachelor's degree in Computer Science (B.Sc.) from BSA College, Mathura. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at BSA College allowed me to work on projects that applied theoretical concepts to real-world problems.",
    degree: "I.S.C - Class 12",
  },
  {
    id: 2,
    img: cjm,
    school: "Convent Of Jesus and Mary, Dehradun",
    //date: "Apr 2017 - March 2018",
    grade: "95.5%",
    //desc: "I completed my class 12 education from Vatsalya Public School, Govardhan, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
    degree: "I.C.S.E - Class 10",
  },

];

export const projects = [
  {
    id: 0,
    title: "Chat Application",
    description:
      "Built a Chat Application using MERN Stack.Implemented user authentication and authorization using JSON Web Token for secure login and session management. Stored user data in an encrypted format using MongoDB.Implemented real - time communication using Socket.IO.Designed an intuitive React - based UI for seamless user experience",
    image: chatapp,
    tags: ["HTML", "CSS", "JavaScript", "MERN Stack", "Socket.IO"],
    github: "https://github.com/AkritiUniyal/ChatApplication",
    //webapp: "https://githubprofiledetective.netlify.app/",
  },
  {
    id: 1,
    title: "Brain Tumor Detection",
    description:
      "Developed an advanced Convolutional Neural Network (CNN) model for detecting brain tumors from MRI scans Trained the model using 3,000 + labeled images sourced from Kaggle, ensuring high - quality data preprocessing. Achieved 98 % accuracy in tumor classification through model optimization. Deployed the trained model using Flask, allowing users to upload MRI scans and receive real-time predictions.",
    image: brain,
    tags: ["CNN", "Flask", "Python", "Pandas", "NumPy"],
    github: "https://github.com/AkritiUniyal/Brain_Tumor_Detection",
    //webapp: "https://csprep.netlify.app/",
  },
  {
    id: 2,
    title: "Parser Visualizer",
    description:
      " Implemented both SLR and CLR parsers to analyze context-free grammars and parse strings accordingly.Developed an interactive web - based frontend to visualize the parsing process step - by - step.Enabled input of string to simulate and compare the parser behaviors.Used Django as backend to connect frontend visualizer with parser logic written in Python.",
    image: parser,
    tags: ["JavaScript", "HTML/CSS", "Python", "Django"],
    github: "https://github.com/AkritiUniyal/CLR-Parser",
    //webapp: "https://movie-recommendation-app-jet.vercel.app/",
  },
  {
    id: 3,
    title: "Multi-Threaded Web Proxy Server",
    description:
      "Developed a multithreaded web proxy server in C using socket programming and POSIX threads. Implemented the Adaptive Replacement Cache mechanism to optimize cache performance based on recency and frequency of access. Built a frontend interface to visualize live proxy logs, cache contents, and request statistics.",
    image: proxy,
    tags: ["C", "Pthreads", "ARC", "Flask"],
    github: "https://github.com/AkritiUniyal/Multithreaded_WebProxy_Server",
    //webapp: "https://www.npmjs.com/package/cmtk-email-validator",
  },
  {
    id: 4,
    title: "Medi-Chat",
    description:
      "A  medical chatbot designed to assist healthcare professionals in diagnosing and treating patients. Built using advanced NLP techniques and integrated with various medical databases for accurate information retrieval.",
    image: medichat,
    tags: ["LLM", "RAG", "LangChain", "Gemini"],
    github: "",
    //webapp: "chrome://extensions/?id=kngheeibjnnidhfoomkpnbeghackheci",
  },
  {
    id: 5,
    title: "Portfolio Website",
    description:
      "A personal portfolio website showcasing my projects, skills, certifications and achievements. Built with a modern tech stack including React.js, it features a responsive design and smooth animations.",
    image: port,
    tags: ["HTML", "CSS", "JavaScript", "React JS"],
    github: "https://github.com/AkritiUniyal/Portfolio",
    //webapp: "https://webversedigital.com/",
  },

];  