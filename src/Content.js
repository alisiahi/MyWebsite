// import images
import Hero_person from "./assets/images/Hero/person.png";

import ubuntu from "./assets/images/Skills/ubuntu.png";
import reactjs from "./assets/images/Skills/react.png";
import python from "./assets/images/Skills/python.png";
import html from "./assets/images/Skills/html.png";
import css from "./assets/images/Skills/css.png";
import js from "./assets/images/Skills/js.png";
import ts from "./assets/images/Skills/ts.png";
import tf from "./assets/images/Skills/tf.png";
import pandas from "./assets/images/Skills/pandas.png";
import numpy from "./assets/images/Skills/numpy.png";
import next from "./assets/images/Skills/next.png";
import tailwind from "./assets/images/Skills/tailwind.png";

import project1 from "./assets/images/Projects/img1.png";
import project2 from "./assets/images/Projects/img2.png";
import project3 from "./assets/images/Projects/img3.png";

import logo1 from "./assets/images/Experiences/logo1.jpg";
import logo2 from "./assets/images/Experiences/logo2.jpg";
import logo3 from "./assets/images/Experiences/logo3.png";

import { GrMail } from "react-icons/gr";
import { MdCall } from "react-icons/md";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },

    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  about: {
    title: "About Me",
    image: Hero_person,
    text: "Hello, I am Ali Siahi, a software engineer with a strong background in Computer Engineering. My journey into the world of technology began with a Bachelor's degree in Computer Engineering and further enriched by an MBA in Information Technology. These experiences have equipped me with the perfect blend of technical and managerial skills. My passion lies in web development, particularly with React, and I'm continuously honing my skills through practical projects. My commitment to learning is reflected in my pursuit of knowledge in finance, investment management, and decentralized finance, as well as my dedication to improving my programming skills. As you explore my website, you'll discover my journey as a software engineer and my dedication to web development. Welcome to my world of technology and innovation!",
  },
  skills: {
    title: "Skills",
    skills_content: [
      {
        logo: html,
        proficiency: "80%",
      },
      {
        logo: css,
        proficiency: "80%",
      },
      {
        logo: js,
        proficiency: "60%",
      },
      {
        logo: ts,
        proficiency: "40%",
      },
      {
        logo: reactjs,
        proficiency: "60%",
      },

      {
        logo: next,
        proficiency: "30%",
      },
      {
        logo: tailwind,
        proficiency: "70%",
      },
      {
        logo: python,
        proficiency: "70%",
      },
      {
        logo: tf,
        proficiency: "50%",
      },
      {
        logo: pandas,
        proficiency: "60%",
      },
      {
        logo: numpy,
        proficiency: "50%",
      },
      {
        logo: ubuntu,
        proficiency: "60%",
      },
    ],
  },

  Projects: {
    title: "Projects",

    project_content: [
      {
        title: "Food Recipes",
        image: project1,
        live: "https://siahi-recipes.vercel.app/",
        github: "https://github.com/alisiahi/FoodRecipes",
        explanation:
          "In this project, I developed a web application using React and enhanced its visual appeal with the use of Tailwind CSS for styling. I integrated the Edamam API to fetch and display detailed recipe information. For a comprehensive overview of this project, including my key learnings and the opportunity to experience it firsthand, please visit the project's GitHub page.",
      },
      {
        title: "Ecommerce",
        image: project2,
        live: "https://siahi-ecommerce.iran.liara.run/",
        github: "https://github.com/alisiahi/Ecommerce",
        explanation:
          "In this project, I developed a web application using React and enhanced its visual appeal with the use of Tailwind CSS for styling. I integrated the Edamam API to fetch and display detailed recipe information. For a comprehensive overview of this project, including my key learnings and the opportunity to experience it firsthand, please visit the project's GitHub page.",
      },
      {
        title: "Portfolio Website",
        image: project3,
        live: "https://alisiahi.ir",
        github: "https://github.com/alisiahi/MyPortfolioWebsite",
        explanation:
          "In this project, I employed React and Tailwind CSS for styling, and I also incorporated AOS for animation effects. To gain a comprehensive understanding of this project, including my insights and the opportunity to witness it in action, please visit the project's GitHub page for a detailed description of my work and the valuable lessons I learned throughout the process.",
      },
    ],
  },
  Experiences: {
    title: "Experiences",

    experiences_content: [
      {
        img: logo1,
        name: "Yooz Coffee",
        date: "Mar 2017 - Aug 2018",
        position: "Director Of Business Development",
      },
      {
        img: logo2,
        name: "Mofid Securities",
        date: "Dec 2019 - Jun 2023",
        position: "Investment Advisor",
      },
      {
        img: logo3,
        name: "Software Developer",
        date: "Nov 2024 - Current",
        position: "Front End Developer",
      },
    ],
  },
  Contact: {
    title: "Contact Me",
    social_media: [
      {
        text: "alisiahi.1991@gmail.com",
        icon: GrMail,
        link: "mailto:alisiahi.1991@gmail.com",
      },
      {
        text: "+98 938 177 2723",
        icon: MdCall,
        link: "https://wa.me/1234567890",
      },
      {
        text: "LinkedIn",
        icon: BsLinkedin,
        link: "https://www.linkedin.com/in/ali--siahi/",
      },
      {
        text: "Github",
        icon: BsGithub,
        link: "https://github.com/alisiahi/",
      },
    ],
  },
};
