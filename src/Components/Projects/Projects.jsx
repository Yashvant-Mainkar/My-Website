import "./Projects.css"
import {Link} from "react-router-dom"

function Projects() {
  return (
    <div className="outer">
      <div className="topLeftText">
        <p className="projectText">Selected projects</p>
      </div>



      <div className="projects">


        <div className="light">
          <div className="projectContainer">
            <div className="ProjectImg">
            <Link to="eachproject"><img className="imgg" src="/Images/project-1.png" alt="" /></Link>
            </div>
          </div>
          <p className="textt">MILLIONAIRE QUIZ APP<br /><p className="textDiscription">DISCRIPTION IS GOOD </p></p>
        </div>

        <div className="light">
          <div className="projectContainer">
            <div className="ProjectImg">
              <img className="imgg" src="/Images/project-1.png" alt="" />
            </div>
          </div>
          <p className="textt">MILLIONAIRE QUIZ APP<br /><p className="textDiscription">DISCRIPTION IS GOOD </p></p>
        </div>
        <div className="light">
          <div className="projectContainer">
            <div className="ProjectImg">
            <Link to="eachproject"><img className="imgg" src="/Images/project-1.png" alt="" /></Link>  
            </div>
          </div>
          <p className="textt">MILLIONAIRE QUIZ APP<br /><span className="textDiscription">DISCRIPTION IS GOOD </span></p>
        </div>

      </div>




    </div>

  )
}

export default Projects
