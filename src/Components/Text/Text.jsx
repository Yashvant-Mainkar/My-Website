import "./Text.css"
import { Link } from "react-router-dom"

function Text() {
  return (
    <div className="text">

      <div className="box1Contianer">
        <div className="box1Div">
          <div className="textPart1">
            WITH 8 MONTHS OF SELF-TAUGHT EXPERIENCE IN FRONT-END, I HAVE SOME EXPERTISE UNDER MY BELT. NEEDED TO DIVE DEEPER INTO THE WORLD OF WEB DEVE. HOWEVER, AS SLOWDOWN IN MY LEARNING JOURNEY. WHERE UPON REFLECTION, THE MISSING INGREDIENT IS LACK OF INTERACTION WITH EXCEPTIONAL TEAMS AND INDIVIDUALS.  NOW, LET'S LIGHTEN THE MOOD WITH A <p className="joke">JOKE :</p> <span className="jokeText">
              "WHY DID THE JAVASCRIPT DEVELOPER BREAK UP WITH THEIR GIRLFRIEND? BECAUSE SHE SAID, 'I LIKE YOU!' BUT MEANT 'undefined'!"</span>
          </div>
        </div>
      </div>

      <div className="box2Contianer">
        <div className="textLeft">THINGS I CAN HELP YOU WITH...</div>
        <div className="textMiddle">
          AS IF YOU GETTING KNOWN, YOU WILL REALIZE THAT THERE ARE MANY SMALL PROJECTS IN THIS WEBSITE. IF I KNEW WHAT IS GLOBLE SCOPE,
          THEN I WILL DEFINETLY KNOW WHERE FUNCTION DEFINATION SO I CAN USE ANYWHERE.
          <br /> <br />
          SO AFTER YOUR CONCLUSION, THERE ARE MANY WAY'S WHERE YOU CAN CONTACT TO ME. 
        </div>
        <div className="textRight">
          <Link className="Links">LINKDIN</Link>
          <Link className="Links">GITHUB</Link>
          <Link className="Links">GMAIL</Link>
        </div>

      </div>
    </div>
  )
}

export default Text