import projects from '../../data/projects.js'
import './FavProjectsBox.css'

export default function FavProjectsBox() {
    // Get featured projects, sort by date (newest first), then take first 3
    const latestProjects = projects
        .filter(project => project.featured)
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, 3);
    
    return (
        <div className="projects-container">
            <div className="projects-header">
                <h3>Latest Projects</h3>
                <a href="/projects" className="view-all-link">View All Projects →</a>
            </div>
            <div className="projects-grid">
                {latestProjects.map(project => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </div>
    );
}

function ProjectCard({ project }) {
    // const formattedDate = new Date(project.date).toLocaleDateString('en-US', {
    //     year: 'numeric',
    //     month: 'long',
    //     day: 'numeric'
    // });
    
    return (
        <div className="project-card">            
            {project.image && (
                <img 
                    src={project.image} 
                    alt={project.title} 
                    className="project-image"
                />
            )}
            
            <div className="project-content">
                <h4 className="project-title">{project.title}</h4>
                {/* <p className="project-date">{formattedDate}</p> */}
                <p className="project-description">{project.description}</p>
                
                <div className="technologies-container">
                    {project.technologies.map(tech => (
                        <span key={tech} className="technology-tag">{tech}</span>
                    ))}
                </div>
            </div>
            
            {/* rel="noopener noreferrer" is for security, it prevents the new page from accessing your window obj and hides you */}
            {/* target="_blank" implies rel="noopener", but it's best practice to include it explicitly */}
            <div className="project-links">
                <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link"
                >
                    GitHub
                </a>
                {project.liveUrl && (
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
    );
}