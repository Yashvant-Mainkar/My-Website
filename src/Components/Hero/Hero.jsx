import "./Hero.css"
import { Link } from "react-router-dom"

function Hero() {
  return (
    <div className="heroDiv">
      <div className="imgDivv">
        <img className="iimg" src="/Images/aa.jpg" alt="" />
      </div>
      <div className="textArea">
        <div className="leftBigDiv">
          <div className="leftText">
            WORKING ON LIKE HTML, JAVASCRIPT, CSS, STYLED COMPONENT, SCSS, REACT && REACT-ROUTER & MORE LEARINGS LIKE REDUX, TAILWIND, RENDER COMPONENT.
            YOU WILL WONDER AFTER YOU SEE THAT THIS WHOLE WEBSITE IS ONLY USING CSS.
          </div>
          <br />
          <p className="gmail">yashwantmainkr64@gmail.com</p>
        </div>

        <div className="rightBigDiv">
          <div className="middleOne">
            <p> NAVIGATION</p>
            <div className="alllLink">
              <Link to="contact" className="allLinks">CONTACT</Link>
              <Link to="project" className="allLinks">PROJECTS</Link>
              <Link to="about" className="allLinks">ABOUT ME</Link>
            </div>

          </div>
          <div className="middletwo">
            <p>SOCIAL</p>
            <Link className="allLinks">LINKDIN</Link>
            <a className="allLinks" href="https://github.com/Yashvant-Mainkar" target="_blank">GITHUB</a>
            <a className="allLinks" href="mailto:yashwantmainkr64@gmail.com">GMAIL</a>
          </div>
          <div className="righttext">
            <p>LANGUAGE</p>
            <p>C</p>
            <p>JAVASCIPT</p>
            <p>REACT.JS</p>
            <p>CSS</p>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Hero
