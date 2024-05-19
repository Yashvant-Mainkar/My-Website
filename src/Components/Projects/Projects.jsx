import "./Projects.css"
import { Link } from "react-router-dom"
import projectData from '../../LocalApi/MainProjectData';

function Projects() {
  return (
    <div className="outer">
      <div className="topLeftText">
        <p className="projectText">Selected projects</p>
      </div>
      <div className="projects">

        {projectData.map(project => (
          <div key={project.id} className="light">
            <div className="projectContainer"
              style={{ backgroundImage: `${project.backgroundImage}`, }}>
              <div className="ProjectImg">
                <Link to={`eachproject/${project.id}`}>
                  <img className="imgg" src={project.imgSrc} alt={project.title} />
                </Link>
              </div>
            </div>
            <p className="textt">
              {project.title}
              <br />
              <span className="textDiscription">CLICK TO CHECH MORE</span>
            </p>
          </div>
        ))}

      </div>
    </div>

  )
}

export default Projects
