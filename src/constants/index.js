import {
  mobile,
  backend,
  creator,
  web,
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
  threejs,
  google2,
  cloud_computing,
  board_infinity,
  coc
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
  {
    id: "resume",
    title: "Resume",
  },
];

const services = [
  {
    title: "Web Developer ",
    icon: web,
  },
  
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Clash Of Clans Object Detection System",
    // company_name: "Starbucks",
    icon: coc,
    iconBg: "#383E56",
    date: "Feb 2025 - March 2025",
    points: [
      "Built a building detection system for Clash of Clans using YOLOv11 to identify in-game structures from screenshots.",
      "Used OpenCV for image preprocessing—resizing and enhancement",
      "Developed a Streamlit-based UI for real-time visualization with bounding boxes and confidence scores.",
      "Applied quantization and pruning to optimize the model for low-resource devices.",
      "Proposed future improvements: detecting traps, heroes, and siege machines for advanced base analysis."
    ],
  },
  {
    title: "Q&A With Document",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2025 - Feb 2025",
    points: [
      "Developed a powerful document-based Q&A system that allows users to upload various document formats",
      "Integrated Google Gemini embeddings with LlamaIndex to generate highly contextual vector representations of documents.",
      "These embeddings help in understanding the meaning behind words rather than just matching keywords, significantly improving search accuracy.",
      "Built a user-friendly Streamlit interface that provides an interactive chat-based experience, making it easy for users to ask questions and receive responses in real-time.",
      "Github Repository Link: https://github.com/Shriyam01/RAG-With-Document/tree/main",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Dec 2024 - Jan 2025",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
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
    name: "Bits & Bytes",
    description:
      "Bits and Bytes of Computer Networking by Google explains the fundamentals of how computers communicate over networks, covering hardware, protocols, and the internet, in a beginner-friendly way",
    tags: [
      {
        name: "Google",
        color: "blue-text-gradient",
      },
      {
        name: "Certification",
        color: "green-text-gradient",
      },
      {
        name: "Proctored",
        color: "pink-text-gradient",
      },
    ],
    image: google2,
    source_code_link: "https://github.com/Shriyam01/My-Certificates/blob/main/Bits%20%26%20Bytes/Bits_and_Bytes.pdf",
  },
  {
    name: "Board Infinity",
    description:
      "Board Infinity DSA course teaches Data Structures and Algorithms (DSA) from basics to advanced, focusing on coding skills, problem-solving, and interview preparation.",
    tags: [
      {
        name: "DSA",
        color: "blue-text-gradient",
      },
      {
        name: "C++ Coding",
        color: "green-text-gradient",
      },
      {
        name: "Remote",
        color: "pink-text-gradient",
      },
    ],
    image: board_infinity,
    source_code_link: "https://github.com/Shriyam01/My-Certificates/blob/main/Board%20Infinity/BI-20240718-8938368.png",
  },
  {
    name: "NPTEL",
    description:
      "NPTEL Cloud Computing course explains cloud concepts, architectures, services, and deployment models, focusing on building and managing cloud-based solutions.",
    tags: [
      {
        name: "NPTEL",
        color: "blue-text-gradient",
      },
      {
        name: "Cloud Computing",
        color: "green-text-gradient",
      },
      {
        name: "Remote",
        color: "pink-text-gradient",
      },
    ],
    image: cloud_computing,
    source_code_link: "https://github.com/Shriyam01/My-Certificates/blob/main/Cloud%20Computing/C2Submit.pdf",
  },
];

export { services, technologies, experiences, testimonials, projects };
// export { services, technologies, experiences, projects };

