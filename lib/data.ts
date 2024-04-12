import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
] as const;

export const experiencesData = [
  {
    title: "B.Tech CSE with Specialization AI and ML",
    location: "Chennai, India",
    description:
      "I am Pursuing B.Tech from SRM Institute of Science and Technology with CGPA - 9.71",
    icon: React.createElement(LuGraduationCap),
    date: "2019 - 2025",
  },
  {
    title: "Research Intern",
    location: "SRMIST , Chennai",
    description:
      "Leaded a team of inhouse research interns to create a web application powered by genetic algorithm to record treatments of psychiatric patients ",
    icon: React.createElement(CgWorkAlt),
    date: "2023",
  },
  {
    title: "MITACS Globalink Research Internship",
    location: "Dalhousie University, Canada",
    description: "",
    icon: React.createElement(CgWorkAlt),
    date: "2024",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Flutter",
  "Firebase",
  "Next.js",
  "Node.js",
  "Git",
  "Android Studio",
  "Tailwind",
  "MongoDB",

  "Express",
  "Python",
  "Java",
  "Framer Motion",
] as const;
