// projects.js
import leetcode_icon from '../assets/nelson.jpg'
import eggenda_icon from '../assets/eggenda_icon.png'
import eggenda_owlbear2 from '../assets/eggenda_owlbear2.png'

const projects = [
    {
        id: 1,
        title: "Portfolio Website",
        description: "My personal portfolio built with React",
        technologies: ["React"],
        githubUrl: "https://github.com/nelsonfang117/PersonalWebsite",
        liveUrl: "na",
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
        title: "Weather App",
        description: "Real-time weather application with forecasts",
        technologies: ["React", "API Integration"],
        githubUrl: "https://github.com/yourusername/weather-app",
        liveUrl: "https://weatherapp.yoursite.com",
        image: "/images/weather-app.png",
        date: "2024-04-10",
        featured: false
    },
    {
        id: 4,
        title: "nothing app",
        description: "wee",
        technologies: ["coding", "API disintegration"],
        githubUrl: "https://github.com/yourusername/weather-app",
        liveUrl: "https://weatherapp.yoursite.com",
        image: "/images/weather-app.png",
        date: "2025-04-9",
        featured: false
    },

];

export default projects;