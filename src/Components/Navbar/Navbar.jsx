import { Link } from "react-router-dom"
import "./Navbar.css"

function Navbar() {
    return (

        <div className="navbarContainer">

            <div className="navbarWrapper">
                <div className="navLeft">
                    <p>YASHVANT MAINKAR</p>
                </div>
                <div className="navMiddle">
                    <p>FRONT-END WEB DEVELOPER</p>
                </div>
                <div className="navMiddle-1">
                    <p>AVALABLE FOR REMOTE WORK</p>
                </div>
                <div className="navright">
                    <Link className="contactBtn" to="contact">CONTACT</Link>
                </div>
            </div>
        </div>
    )
}


export default Navbar
