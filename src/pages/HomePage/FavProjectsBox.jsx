import projects from '../../data/projects.js'
import './FavProjectsBox.css'

export default function FavProjectsBox() {
    // Get featured projects, sort by date (newest first), then take first 3
    // const latestProjects = projects
    //     .filter(project => project.featured)
    //     .sort((a, b) => new Date(b.date) - new Date(a.date))
    //     .slice(0, 3);
    
    // This will show all featured
    const latestProjects = projects
        .filter(project => project.featured)
        .sort((a, b) => new Date(b.date) - new Date(a.date));
    
    return (
        <div className="fav-projects-container">
            <div className="fav-projects-header">
                <h3>Featured Projects</h3>
                <a href="/projects" className="view-all-link">View All Projects →</a>
            </div>
            <div className="fav-projects-grid">
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
        <div className="fav-project-card">            
            {project.image && (
                <img 
                    src={project.image} 
                    alt={project.title} 
                    className="fav-project-image"
                />
            )}
            
            <div className="fav-project-content">
                <h4 className="fav-project-title">{project.title}</h4>
                {/* <p className="project-date">{formattedDate}</p> */}
                {/* We do 'style={{ whiteSpace: 'pre-line' }}' to preserve \n in our text*/}
                <p className="fav-project-description" style={{ whiteSpace: 'pre-line' }}>
                    {project.description}
                </p>
                
                <div className="technologies-container">
                    {project.technologies.map(tech => (
                        <span key={tech} className="technology-tag">{tech}</span>
                    ))}
                </div>
            </div>
            
            {/* rel="noopener noreferrer" is for security, it prevents the new page from accessing your window obj and hides you */}
            {/* target="_blank" implies rel="noopener", but it's best practice to include it explicitly */}
            <div className="fav-project-links">
                <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="fav-project-link"
                >
                    GitHub
                </a>
                {project.liveUrl && (
                    <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="fav-project-link"
                    >
                        Demo
                    </a>
                )}
            </div>
        </div>
    );
}