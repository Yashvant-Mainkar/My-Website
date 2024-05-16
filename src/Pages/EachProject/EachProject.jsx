import "./EachProject.css"
import {Link} from "react-router-dom"

function EachProject() {
  return (
    <div className='eachProject'>
      <div className="eachBtnCont">
        <Link to=".."><button className="eachProjectBtn">Back</button></Link>
      </div>
      <div className="eachProjectWrapper">

        <div className="light">
          <div className="projectContainer">
            <div className="ProjectImg">
              <img className="imgg" src="/Images/project-1.png" alt="" />
            </div>
          </div>
          <p className="textt">MILLIONAIRE QUIZ APP<br /><p className="textDiscription">SEE IT OURSELF </p></p>
        </div>


      </div>

      <div className="eachBtnContainer">

          <button className="viewbtn">VIEW SOURCE</button>

        <button className="seeBtn">SEE IT YOURSELF</button>
        
      </div>


      <div className="projectDisription">
      <p className="bolder">DISRIPTION : </p>  
      <span className="projectInfoText">
        INTERMADIATE LEVEL REACT PROJECT BECAUSE THERE ARE LOT'S OF SMALL BUT TOO MANY FUNTIONALLITY, WHERE  EACH AND EVERY PROJECT 
        CONNECTS THE WHOLE APP. I MADE SOME LOCAL API OF Q&A.  AS YOU CAN SEE GAME WILL START WHEN YOU CLICK THE BUTTON.
         I USE GOOGLE EVERY TIME HONESTLY. AND TO GET KNOW DIFF HOOKS I USE YOUTUBE TOO. IT TOOK ME 1/5 WEEK TO COMPLETE. PLEASE FREE TO USE</span>
      </div>
      {/* <br /> */}
      <div className="goodPartText">
        <p className="bolder">GOODPART & BADPART:</p>
        <span className="projectInfoText">
         API CONCEPT, SETTIME OUT, USEEFFECT, USESTATE, NOT RESPONSIVE FULLY. VS CODE IS SUPPORTIVE. </span>
      </div>
      {/* <br /> */}
      {/* <div className="badPartText">
        BADPART : Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo officia quis sunt, quidem, aliquam perspiciatis illum quas expedita quia enim quos delectus incidunt minus. Accusamus commodi assumenda mollitia rem veritatis?
      </div>
      <br />
      <div className="projectScreenshot">
        <img src="" alt="" />
      </div> */}


    </div>
  )
}

export default EachProject
