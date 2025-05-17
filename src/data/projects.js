// projects.js
import leetcodeImage from '../assets/nelson.jpg'
const projects = [
    {
        id: 1,
        title: "Portfolio Website",
        description: "My personal portfolio built with React",
        technologies: ["React"],
        githubUrl: "https://github.com/nelsonfang117/PersonalWebsite",
        liveUrl: "na",
        image: leetcodeImage,
        date: "2025-05-17", // YYYY-MM-DD format for easy sorting
        categories: ["Web Development", "Full Stack"],
        featured: true
    },
    {
        id: 2,
        title: "Stand-in",
        description: "Admin dashboard for e-commerce platform",
        technologies: ["React", "Node.js", "MongoDB", "Chart.js"],
        githubUrl: "https://github.com/yourusername/ecommerce-dashboard",
        image: "../assets/leetcode.png",
        date: "2024-05-20",
        categories: ["Something", "Here"],
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
        featured: true
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
        featured: true
    },

];

export default projects;