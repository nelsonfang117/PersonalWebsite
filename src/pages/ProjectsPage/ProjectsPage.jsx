import '../HomePage/HomePage.css';
import './ProjectsPage.css';
import Box from '../../components/ui/Box.jsx';
import projects from '../../data/projects.js';

export default function ProjectsPage() {
    const allProjects = projects
        .filter(project => project.featured)
        .sort((a, b) => new Date(b.date) - new Date(a.date));

    return (
        <div className="homepage-container">
            <Box className="large-box">
                <div className="projects-container">
                    <div className="projects-header">
                        <h3>All Projects</h3>
                    </div>
                    <div className="projects-list">
                        {allProjects.map(project => (
                            <ProjectRow key={project.id} project={project} />
                        ))}
                    </div>
                </div>
            </Box>
        </div>
    );
}

function ProjectRow({ project }) {
    return (
        <div className="project-row">
            <div className="project-content">
                <h4 className="project-title">{project.title}</h4>
                <p className="project-description">{project.description}</p>
                
                <div className="technologies-container">
                    {project.technologies.map(tech => (
                        <span key={tech} className="technology-tag">{tech}</span>
                    ))}
                </div>
                
                <div className="project-links">
                    <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link"
                    >
                        GitHub
                    </a>
                    {project.liveUrl && project.liveUrl !== "na" && (
                        <a 
                            href={project.liveUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="project-link"
                        >
                            Demo
                        </a>
                    )}
                </div>
            </div>
            
            {project.image && (
                <img 
                    src={project.image} 
                    alt={project.title} 
                    className="project-image"
                />
            )}
        </div>
    );
}