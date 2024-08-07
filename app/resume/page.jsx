"use client";

import { title } from "process";
import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

// about data
const about = {
  title: "About me",
  description:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi doloremque obcaecati dolor veniam.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Tharusha",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+94) 071 151 565",
    },
    {
      fieldName: "Experience",
      fieldValue: "6+ Years",
    },
    {
      fieldName: "Skype",
      fieldValue: "Tharusha.NaX",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Sri Lankan",
    },
    {
      fieldName: "E-mail",
      fieldValue: "tharusha.nax@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Language(s)",
      fieldValue: "Sinhala, English",
    },
  ],
};

// experience data
const experience = {
  icon: "/assests/resume/badge.svg",
  title: "My experience",
  description:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil maiores accusamus saepe aperiam.",
  items: [
    {
      company: "Tech Solutions Inc.",
      position: "Full Stack Developer",
      duration: "2023 - Present",
    },
    {
      company: "Web Design Studio",
      position: "Front-EEnd Developer Intern",
      duration: "Summer 2021",
    },
    {
      company: "E-Commerce Startup",
      position: "Freelance Web Developer",
      duration: "2020 - 2021",
    },
    {
      company: "Tech Academy",
      position: "Teaching Assistant",
      duration: "2019 - 2020",
    },
    {
      company: "Digital Agency",
      position: "UI/UX Designer",
      duration: "2018 - 2019",
    },
    {
      company: "Software Development Firm",
      position: "Junior Developer",
      duration: "2017 - 2018",
    },
  ],
};
// education data
const education = {
  icon: "/assests/resume/cap.svg",
  title: "My education",
  description:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil maiores accusamus saepe aperiam.",
  items: [
    {
      institution: "Online Course Platform",
      degree: "Full Stack Development Bootcamp",
      duration: "2023",
    },
    {
      institution: "Codecademy",
      degree: "Front-Ent Track",
      duration: "2022",
    },
    {
      institution: "Online Course",
      degree: "Programming Course",
      duration: "2020 - 2021",
    },
    {
      institution: "Tech Institute",
      degree: "Certified Web Developer",
      duration: "2019",
    },
    {
      institution: "Design School",
      degree: "Diploma in Graphic Design",
      duration: "2016 - 2018",
    },
    {
      institution: "Community College",
      degree: "Associate Degree in Computer Science",
      duration: "2014 - 2016",
    },
  ],
};

// skills data
const skills = {
  title: " My Skills",
  description:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi doloremque obcaecati dolor veniam.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs/>,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },
  ],
};

const Resume = () => {
  return <div>Resume page</div>;
};

export default Resume;
