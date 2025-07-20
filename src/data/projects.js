// projects.js
import leetcode_icon from '../assets/nelson.jpg'
import eggenda_icon from '../assets/eggenda_icon.png'
import eggenda_owlbear2 from '../assets/eggenda_owlbear2.png'
import beedie_hackathon_2025 from '../assets/beedie_ba_hackathon_small.png'
const projects = [
    {
        id: 1,
        title: "Portfolio Website",
        description: "My personal portfolio built with React",
        technologies: ["React"],
        githubUrl: "https://github.com/nelsonfang117/PersonalWebsite",
        liveUrl: "",
        image: leetcode_icon,
        date: "2025-05-17", // YYYY-MM-DD format for easy sorting
        categories: ["Web Development", "Full Stack"],
        featured: true
    },
    {
        id: 2,
        title: "Eggenda",
        description: "Task Management App and Game, a group project for CMPT 362",
        technologies: ["Kotlin", "Java", "Android Studio", "Firebase"],
        githubUrl: "https://github.com/nelsonfang117/Eggenda",
        liveUrl: "https://eggenda-website.vercel.app/",
        image: eggenda_owlbear2,
        date: "2024-09-01",
        categories: ["Mobile Development", "Android"],
        featured: true
    },
    {
        id: 3,
        title: "BC Hydro Data Analytics",
        description: "SFU Beedie Business Analytics Hackathon 2025.\nAnalyzed supply-chain issues in regards to unstable geopolitical factors and presented solutions to industry professionals.",
        technologies: ["Python", "Tableau", "MS Excel"],
        githubUrl: "https://github.com/nelsonfang117/BeedieAnalyticsHackathon2025Files",
        liveUrl: "",
        image: beedie_hackathon_2025,
        date: "2025-05-31",
        featured: false
    },
];

export default projects;