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
          <Link className="allLinks"><p className="gmail">yashwantmainkr64@gmail.com</p></Link>
        </div>

        <div className="rightBigDiv">
          <div className="middleOne">
            <p> NAVIGATION</p>
            <div className="alllLink">
              <Link className="allLinks">CONTACT</Link>
              <Link className="allLinks">PROJECTS</Link>
              <Link className="allLinks">ABOUT ME</Link>
            </div>

          </div>
          <div className="middletwo">
            <p>SOCIAL</p>
            <Link className="allLinks">LINKDIN</Link>
            <Link className="allLinks">GITHUB</Link>
            <Link className="allLinks">GMAIL</Link>
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
