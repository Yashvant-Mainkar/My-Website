import "./AboutPage.css"
import {Link} from "react-router-dom"
// "/My Website/public/Images/Logo"

function AboutPage() {
  return (
    <div className="mainABoutContainer">

      <Link to=".."><button className="aboutBackBtn">Back</button></Link>

    <div className="aboutPage">
      <div className="aboutUpperDiv">

        <div className="aboutUpperleftDiv">
          <div className="aboutUpperleftFirstDiv">
            <img className="htmlLogo" src="/Images/Logo/html-logo1.webp" alt="" />
          </div>
          <div className="aboutUpperleftSecondDiv">
            <img className="cssLogo" src="/Images/Logo/CSS3_logo.png" alt="" />
          </div>
        </div>
        <div className="aboutUpperMiddleDiv">
          <img className="jsLogo" src="/Images/Logo/js-logoo.jpg" alt="" />
        </div>
        <div className="aboutUpperRightDiv">
          <img className="reactLogo" src="/Images/Logo/React-logo.png" alt="" />
        </div>
      </div>

      <div className="aboutMiddleDiv">

        <div className="aboutMiddleUpperDiv">
          <p></p>
        </div>
        <div className="aboutMiddleMidleDiv">
          <div className="myPhoto">
            <img className="aboutMyPhoto" src="/Images/cartoon-character.jpg" alt="" />
          </div>
          <div className="aboutText">
            HI, MY NAME IS YASHVANT. SELF TAUGHT SOLID 8 MONTHS LEARNER. JAVASCRIPT IS MAIN THEN REACT. IF JAVASCRIPT IS BASE THEN REACT IS ROOF.
             I REALLY LIKE JAVASCRIPT, THERE IS NO STOP IN LEARING IN JS. I AM HERE TO CONNECT WITH CREATIVE PEOPLE, WHO CAN HELP ME TO GROW. 
             SOMEWHERE MY LEARING IS SLOWED. I BUILD THIS WEBSITE ONLY USING CSS AND REACT WITH SOME JS. I THINK I HAVE SOME SKILL TO GO FORWARD,
             TO CONTACT TO YOU
          </div>
        </div>

        <div className="aboutSecondlastDiv">
          <div className="learningProccessText">
            <p>MY LEARING PROCCESS</p>
          </div>

          <div className="learningMethods">
            <div className="learningMethodsBox1">
              <ul>
                <li className="listTitle">LANGUAGE</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>JAVASCRIPT</li>
                <li>REACT.JS</li>
                {/* <li></li> */}
              </ul>
            </div>
            <div className="learningMethodsBox1">
              <ul>
                <li className="listTitle">SOURCES</li>
                <li>GITHUB</li>
                <li>FREECODECAMP.COM</li>
                <li>LINKDIN</li>
                <li>COURSERA</li>
                <li>YOUTUBE</li>
              </ul>
            </div>
            <div className="learningMethodsBox1">
              <ul>
                <li className="listTitle">EQUIPMENT</li>
                <li>VS CODE</li>
                <li></li>
                <li>D</li>
                <li>E</li>
                <li>F</li>
              </ul>
            </div>
            <div className="learningMethodsBox1">
              <ul>
                <li className="listTitle">STRATERGY</li>
                <li>WATCH 1 TIME VIDEO</li>
                <li>BUILD PROJECTS</li>
                <li>GOOGLE IT</li>
                <li>NOTE DOWN</li>
                <li>BUILD ACTUAL PROJECTS</li>
              </ul>
            </div>


          </div>
        </div>

        {/* <div className="aboutLastDiv">
          <div className="certificateText">
            <p>SOME OF MY CERTIFICATION</p>
          </div>

          <div className="diffCertificate">
            <div className="learningMethodsBox2">
              <ul>
                <li className="listTitle">A</li>
                <li>FREE</li>
                <li>CODE</li>
                <li>CAMP</li>
                <li></li>
                <li>F</li>
              </ul>
            </div>
          </div>
        </div> */}
        
      </div>
    </div>
    </div>
  )
}

export default AboutPage
