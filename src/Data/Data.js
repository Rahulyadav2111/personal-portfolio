import { BsAward } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import { HiOutlineBriefcase } from "react-icons/hi";

// images
import codeeditor from "../assets/codeeditor.png";
import PictureEditor from "../assets/Picture-Editor.png";
import Blog from "../assets/blog.png";
import HospitalImg from "../assets/hps.png";
import NewsApp from "../assets/newsapp.png";
import RestaurantApp from "../assets/restaurant.png"
export const skills = [
  {
    id: 1,
    name: "C++",
    progress: "80",
  },
  {
    id: 3,
    name: "Python",
    progress: "70",
  },
  {
    id: 4,
    name: "JavaScript",
    progress: "80",
  },
  {
    id: 5,
    name: "HTML",
    progress: "90",
  },
  {
    id: 6,
    name: "CSS",
    progress: "70",
  },
  {
    id: 7,
    name: "SQL",
    progress: "90",
  },
  {
    id: 8,
    name: "Git/Github",
    progress: "50",
  },
  {
    id: 9,
    name: "NodeJS",
    progress: "60",
  },
  {
    id: 10,
    name: "ExpressJS",
    progress: "65",
  },
  {
    id: 11,
    name: "ReactJS",
    progress: "75",
  },
  {
    id: 11,
    name: "NextJS",
    progress: "70",
  },
  {
    id: 12,
    name: "MySQL",
    progress: "70",
  },
  {
    id: 13,
    name: "MongoDB",
    progress: "60",
  },
  {
    id: 14,
    name: "Firebase",
    progress: "50",
  },
  {
    id: 15,
    name: "VS Code",
    progress: "90",
  },
  {
    id: 16,
    name: "GCP",
    progress: "90",
  },
];
// Category
// Web Application
// AIML
// Mini Projects
export const projects = [
  {
    id: 1,
    img: HospitalImg,
    category: "Web application",
    name: "Hospital Management System",
    languages: ["React", "Node", "Express", "MongoDB"],
    desc: "The Hospital Management System is a web application built using the MERN stack (MongoDB, Express, React, Node.js). It allows patients to book appointments after logging in and provides an option to send direct messages without needing to log in. There are separate login pages for patients and doctors, ensuring secure access for both. Doctors have their own dashboards where they can manage appointments and view patient details. The system includes various categories of doctors, making it easy for patients to find the right specialist. It also supports full CRUD operations, enabling efficient data management for both patients and doctors.",
    preview: "https://github.com/Rahulyadav2111/hospital-management-mern-app",
    code: "https://github.com/Rahulyadav2111/hospital-management-mern-app",
  },
  {
    id: 2,
    img: Blog,
    category: "Web application",
    name: "Lyeana",
    languages: ["Nextjs", "Firebase", "Tailwind CSS"],
    desc: "The Lyeana is built using Next.js, Firebase, and Tailwind CSS. It allows users to write and publish blogs that are visible to everyone who use Lyeana. The website features a login system using Google authentication, ensuring secure access for users. Once logged in, users can access their own dashboard where they can manage their blogs, edit, or delete them. The platform offers a simple and user-friendly interface, making it easy for users to create and share content. It also supports full CRUD operations, enabling efficient Blog management for users",
    preview: "https://github.com/Rahulyadav2111/blog-website-nextjs-firebase-app",
    code: "https://github.com/Rahulyadav2111/blog-website-nextjs-firebase-app",
  },
  {
    id: 3,
    img: NewsApp,
    category: "Web application",
    name: "News Application",
    languages: ["JavaScript", "Tailwind CSS", "HTML"],
    desc: "This News Application, built using JavaScript, HTML, and Tailwind CSS, dynamically displays the latest news by fetching data from a news API. The app delivers real-time updates, ensuring users stay informed on current events across categories like technology, sports, entertainment, and politics. The clean, responsive design enhances user experience, making it easy to navigate through headlines and articles on both mobile and desktop devices.",
    preview: "https://news-por6ryi1a-rahul-yadavs-projects-75c5a0d1.vercel.app/",
    code: "https://github.com/Rahulyadav2111/News-app",
  },
  {
    id: 4,
    img: PictureEditor,
    category: "Web application",
    name: "Picture Editor",
    languages: ["HTML", "CSS", "JavaScript"],
    desc: "I Developed Picture Editor using HTML, CSS and JavaScript which is used for edit Pictures at basic level",
    preview: "https://rahulyadav2111.github.io/Picture-Editor/",
    code: "https://github.com/Rahulyadav2111/Picture-Editor",
  },
  {
    id: 5,
    img: codeeditor,
    category: "Web application",
    name: "Code Editor",
    languages: ["HTML", "CSS", "JavaScript"],
    desc: "― Online Code Editor for HTML, CSS and JS",
    preview: "https://rahulyadav2111.github.io/code-editor-for-HTML-CSS-JS/",
    code: "https://github.com/Rahulyadav2111/code-editor-for-HTML-CSS-JS",
  },
  {
    id: 6,
    img: RestaurantApp,
    category: "Web application",
    name: "Restaurant Website",
    languages: ["HTML", "CSS", "JavaScript"],
    desc: "I Developed Restaurant website using HTML, CSS and JavaScript which is used for displaying the details of restaurant.",
    preview: "https://restaurant-website-peach-seven.vercel.app/",
    code: "https://github.com/Rahulyadav2111/restaurant-website",
  },
];
