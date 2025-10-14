import {
  aweni,
  grafana,
  sonarqube,
  promotheus,
  nexus,
  jenkins,
  firebase,
  flask,
  hbase,
  java,
  mysql,
  oracle,
  postgresql,
  python,
  django,
  laravel,
  net,
  next,
  php,
  spring,
  symfony,
  VestaVerse,
  mobile,
  backend,
  bootstrap,
  creator,
  IAML,
  VFX,
  web,
  echofy,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  curly,
  threejs,
  ecommerce,
  angular,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-Stack Web Developer",
    icon: web,
  },
  {
    title: "DevOps Enthusiast",
    icon: backend,
  },
  {
    title: "AI/ML Enthusiast",
    icon: IAML,
  },
  {
    title: "Data Analysis & BI",
    icon: mobile,
  },

];


const technologies = [
  // 🌐 Front-end
  { name: "HTML5", icon: html },
  { name: "CSS3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "TypeScript", icon: typescript },
  { name: "React.js", icon: reactjs },
  //{ name: "Redux Toolkit", icon: redux },
  { name: "Angular", icon: angular },
  { name: "Next.js", icon: next },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Bootstrap", icon: bootstrap },

  // ⚙️ Back-end
  { name: "Node.js", icon: nodejs },
  { name: "Spring Boot", icon: spring },
  { name: "Laravel", icon: laravel },
  { name: "Symfony", icon: symfony },
  { name: "Django", icon: django },
  { name: "Flask", icon: flask },
  { name: ".NET", icon: net },
  { name: "PHP", icon: php },
  { name: "Java", icon: java },
  { name: "Python", icon: python },

  // 🗄️ Bases de données
  { name: "MySQL", icon: mysql },
  { name: "PostgreSQL", icon: postgresql },
  { name: "MongoDB", icon: mongodb },
  { name: "Oracle", icon: oracle },
  { name: "HBase", icon: hbase },

  // 🧰 DevOps / Cloud / Tools
  { name: "Docker", icon: docker },
  { name: "Jenkins", icon: jenkins },
  { name: "SonarQube", icon: sonarqube },
  { name: "Nexus", icon: nexus },
  { name: "Prometheus", icon: promotheus },
  { name: "Grafana", icon: grafana },
  { name: "Git", icon: git },
  { name: "Firebase", icon: firebase },
  { name: "Figma", icon: figma },
  { name: "Three.js", icon: threejs },
];

const experiences = [
  {
    title: "Full-Stack Web Developer",
    company_name: "Vision Age VFX",
    icon: VFX,
    iconBg: "#000000",
    //iconBg: "#383E56",
    date: "June 2025 – August 2025",
    points: [
      "Development and integration of a web platform for VFX project management.",
      "Implementation of intelligent video analysis features with AI modules.",
      "Integration of MLOps pipelines for AI and data workflows.",
      "User management system including roles and permissions.",
      "Technologies used: MERN (MongoDB, Express, React, Node.js), Flask, Ftrack.",
    ],
    
    
  },
  {
    title: "Full-Stack Web Developer",
    company_name: "Leadiya",
    icon: tesla,
    iconBg: "#FFFFFF",
    //iconBg: "#E6DEDD",
    date: "June 2024 – August 2024",
    points: [
      "Development and implementation of multiple web solutions for training platforms, automotive repair applications, and more.",
      "Integration of tracking tools to analyze traffic and monitor user behavior.",
      "Utilization of technologies such as WordPress, JavaScript, PHP, Google Analytics, and Google Tag Manager to build and optimize web applications.",
      "Ensuring responsive design and high-quality user experience across different devices and browsers."
    ],
    
  },
  {
    title: "Data Analyst & Full-Stack Web Developer",
    company_name: "Québec Training Center",
    icon: starbucks,
    iconBg: "#FFFFFF",
    //iconBg: "#383E56",
    date: "February 2023 – April 2023",
    points: [
      "Final year internship: Design and implementation of the web application « Teco.tn » for monitoring Tunisia’s financial, economic, and social situation.",
      "Integration of a recommendation and prediction system to enhance analysis and decision-making.",
      "Development and implementation of the web interface using Angular",
      "Data processing and integration with Talend, visualization and reporting through Power BI.",
      "Implementation of a responsive design ensuring an optimal user experience."
    ],
    
  },
 
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];




const projects = [

 
  {
    name: "Echofy",
    description:
"A responsive platform called Echofy featuring events, awareness campaigns, and communities on various topics, with sponsorship opportunities to support environmental initiatives. Includes a CI/CD pipeline.",    
  date: "In progress", // Ajoutez la date ici
      tags: [
      {
        name: "Laravel",
        color: "blue-text-gradient",
      },
      {
        name: "Flask",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "pink-text-gradient",
      },

      {
        name: "Docker",
        color: "yellow-text-gradient",
      },
      { name: "Machine Learning", color: "purple-text-gradient", },

      {
        name: "Jenkins",
        color: "orange-text-gradient",
      },
      {
        name: "Nexus",
        color: "red-text-gradient",
      },
      {
        name: "SonarQube",
        color: "yellow-text-gradient",
      },
      {
        name: "Prometheus",
        color: "cyan-text-gradient",
      },
      {
        name: "Grafana",
        color: "pink-text-gradient",
      },
    ],
    image: echofy,
    source_code_link: "https://github.com/Taha-Yassine-Hadded/EcoEvents-Laravel",
  },
  {
    name: "VestaVerse",
    description:
"A social travel network enabling users to join groups and communities, match and meet fellow travelers, share multimedia content, with built-in security and content moderation features. Includes a CI/CD pipeline.",
    date: "In progress", // Ajoutez la date ici

      tags: [
      {
        name: "Django",
        color: "blue-text-gradient",
      },
      {
        name: "Mongo",
        color: "green-text-gradient",
      },
      { name: "Machine Learning", color: "pink-text-gradient", },
      
       {
        name: "Docker",
        color: "yellow-text-gradient",
      },
      {
        name: "Jenkins",
        color: "orange-text-gradient",
      },
      {
        name: "Nexus",
        color: "red-text-gradient",
      },
      {
        name: "SonarQube",
        color: "yellow-text-gradient",
      },
      {
        name: "Prometheus",
        color: "cyan-text-gradient",
      },
      {
        name: "Grafana",
        color: "pink-text-gradient",
      },
            
      
    ],
    image: VestaVerse,
    source_code_link: "https://github.com/Taha-Yassine-Hadded/Socialite",
  },
  {
    name: "SmartCom",
    description:
     "E-commerce application for home appliances based on semantic web architecture, featuring an intelligent recommendation system, product management, shopping cart, secure payment, and user behavior analysis.",      date: "In progress", // Ajoutez la date ici
      tags: [
      {
        name: "Django",
        color: "blue-text-gradient",
      },
      {
        name: "Mongo",
        color: "green-text-gradient",
      },
      {
        name: "JWT",
        color: "red-text-gradient",
      },
      {
        name: "bcrypt",
        color: "yellow-text-gradient",
      },
      {
        name: "Socket.io",
        color: "green-text-gradient",
      },
      {
        name: "Cloudinary",
        color: "blue-text-gradient",
      },
      {
        name: "WebRTC",
        color: "pink-text-gradient",
      },
      { name: "NLP",
       color: "purple-text-gradient"
       },
      
    ],
    image: ecommerce,
    source_code_link: "https://github.com/",
  },

  {
    name: "MindSpark",
    description:
"A web-based skill exchange platform for learning, sharing, and collaborating, featuring gamification, real-time chat, a virtual assistant, internship matching, smart CV filtering, and a CI/CD pipeline",
    date: "2024", // Ajoutez la date ici

      tags: [
      {
        name: "MERN",
        color: "blue-text-gradient",
      },
      { name: "Machine Learning", color: "purple-text-gradient", },

      {
        name: "Flask",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },

      {
        name: "Docker",
        color: "yellow-text-gradient",
      },
      {
        name: "Jenkins",
        color: "orange-text-gradient",
      },
      {
        name: "Nexus",
        color: "red-text-gradient",
      },
      {
        name: "SonarQube",
        color: "yellow-text-gradient",
      },
      {
        name: "GitHub Actions",
        color: "green-text-gradient",
      },
      {
        name: "Prometheus",
        color: "cyan-text-gradient",
      },
      {
        name: "Grafana",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/DahmaniInes/Skill-Exchange-full-stack-JS",
  },
  {
    name: "CurlyHair",
    description:
   "Front-end development of a responsive web platform selling organic hair care products, allowing users to scan and analyze their hair type and receive personalized product recommendations for optimal care.",
        date: "2024", 

    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "green-text-gradient",
      },
      {
        name: "Figma",
        color: "pink-text-gradient",
      },
      {
        name: "Framer Motion",
        color: "yellow-text-gradient",
      },
    ],
    image: curly,
    source_code_link: "https://github.com/DahmaniInes/Curly-Hair",
  },
  {
    name: "SmartBiblio",
    description:
    "A responsive e-commerce platform for selling books, featuring real-time chat for customer support, built using a microservices architecture to ensure scalability and modularity",   
      date: "2024", 
      tags: [
        {
          name: "Angular",
          color: "blue-text-gradient",
        },
        {
          name: "Spring Boot",
          color: "green-text-gradient",
        },
        {
          name: "MySQL",
          color: "pink-text-gradient",
        },
        {
          name: "Docker",
          color: "yellow-text-gradient",
        },
        {
          name: "Keycloak",
          color: "orange-text-gradient",
        },
        {
          name: "Config Server",
          color: "red-text-gradient",
        },
        {
          name: "Server Discovery",
          color: "cyan-text-gradient",
        },
        {
          name: "Eureka",
          color: "purple-text-gradient",
        },
        {
          name: "API Gateway",
          color: "green-text-gradient",
        },
    ],
    image: jobit,
    source_code_link: "https://github.com/DahmaniInes/gestion-bibliotheque-Back-MicroService-",
  },
  {
    name: "FemHeath",
    description:
    "A web platform dedicated to women, featuring events, awareness blogs on various topics, sponsorship opportunities, and an online store for related products.",      date: "2023", // Ajoutez la date ici

      tags: [
      {
        name: "Symfony",
        color: "blue-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
      {
        name: "Twig",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/ChaimaTlili24/FemHealthFinal",
  },
 

  {
    name: "Aweni",
    description:
    "A web application dedicated to social assistance, enabling users to donate furniture and clothing to be redistributed to underprivileged individuals.",
    date: "2022", // Ajoutez la date ici

      tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
      {
        name: "PHP",
        color: "orange-text-gradient",
      },
      {
        name: "MySQL",
        color: "red-text-gradient",
      },
      
    ],

    image: aweni,
    source_code_link: "https://github.com/",
  },
 

];

export { services, technologies, experiences, testimonials, projects };
