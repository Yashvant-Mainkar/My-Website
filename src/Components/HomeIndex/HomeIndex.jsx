import "./HomeIndex.css"
import { Link } from "react-router-dom"

function HomeIndex() {
    return (
        <div className="homeIndex">

            <div className="homeIndexWrapper">
                <div className="upperContainer">

                    <div className="textPart">"NICE TO MEET YOU! YASHVANT HERE, ASPIRING FRONT-END WEB DEVE. SKILLED IN JAVASCRIPT AND REACT,
                        I'M EAGER TO KICKSTART MY CAREER AND MAKE AN IMPACT." </div>
                    <img className="img" src="/Images/1715759566032.jpg" alt="" />

                </div>

                <div className="bottomContainer">
                    <Link className="links" to="/">HOME</Link>
                    <Link className="links" to="about">ABOUT</Link>
                    <Link className="links" to="contact">CONTACT</Link>
                    <Link className="links" to="project">PROJECTS</Link>
                </div>



            </div>
        </div>
    )
}

export default HomeIndex

