import experiences from "../../data/experiences";
import "./FavProjectsBox.css"
import "./ExpBox.css"
import "../ProjectsPage/ProjectsPage.css"
import "../../components/ui/TechTag.css"

export default function ExpBox() {
    const allExperiences = experiences
        .filter(experience => experience.featured);
    

    return (
        <div className="exp-container">
            <div className="exp-container-header">
                <h3>Experience</h3>
            </div>
            <div className="projects-list">
                {allExperiences.map(experience => (
                    <ExperienceRow key={experience.id} experience={experience} />
                ))}
            </div>
        </div>
    );
}

function ExperienceRow({ experience }) {
    return (
        <div className="exp-row"> 
            <div className="exp-first-line">
                <div className="company-container">
                    <h4>{experience.company}</h4>
                    <p>{experience.title}</p>
                </div>
                <p className="date">{experience.start} - {experience.end}</p>
            </div>
            <p>{experience.description}</p>
            <div className="technologies-container">
                {experience.technologies.map(tech => (
                    <span key={tech} className="technology-tag">{tech}</span>
                ))}
            </div>
        </div>
    );
}