import "./EachProject.css";
import { Link, useParams } from "react-router-dom";
import EachProjectData from "../../LocalApi/EachProjectData";

function EachProject() {
  const { id } = useParams();  
  const projectId = parseInt(id, 10); // Convert id to integer

  const project = EachProjectData.find(proj => proj.id === projectId);

  if (!project) {
    return <>
    <h1>THAT PROJECT PAGE IS NOT CREATED!.</h1>
    <h2>MAY I PROVIED YOU TO GO BACK <Link to="/">GO BACK</Link></h2>
    </>
  }
  function handleFn(){
    if (!project.link) {
      alert('PROJECT IS NOT DONE YET BUT SOON');
    }
  }

  return (
    <div className='eachProject'>
      <div className="eachBtnCont">
        <Link to=".."><button className="eachProjectBtn">Back</button></Link>
      </div>
      <div className="eachProjectWrapper">
        <div key={project.id} className="light">
          <div className="projectContainer"
          style={
            {
              backgroundImage: `${project.backgroundImage}`,
                
            }
          }
          >
            <div className="ProjectImg">
              <img className="imgg" src={project.imgSrc} alt={project.title} />
            </div>
          </div>
          <p className="textt">
            {project.title}
            <br />
            <span className="textDiscription">DESCRIPTION IS GOOD</span>
          </p>
        </div>
      </div>
      <div className="eachBtnContainer">
       <a target="_blank" href={project.source}><button className="viewbtn">VIEW SOURCE</button></a>
       {project.link ?(<a target="_blank" href={project.link}><button className="seeBtn">SEE IT YOURSELF</button></a>)
            : (<a target="_blank" href={project.link}><button onClick={handleFn} className="seeBtn">SEE IT YOURSELF</button></a>)}
      </div>
      <div className="projectDisription">
        <p className="bolder">DISRIPTION : {project.language} </p>
        <span className="projectInfoText">{project.projectInfoText}</span>
      </div>
      <div className="goodPartText">
        <p className="bolder">GOODPART & BADPART:</p>
        <span className="projectInfoText">{project.projectInfoText1}</span>
      </div>
    </div>
  );
}

export default EachProject;
