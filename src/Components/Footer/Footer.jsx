import "./Footer.css"

function Footer() {
  return (
    <div className="footer">
      <div className="footerWrapper">

        <div className="dropLineBox">
          {/* <div className="dropLine">DROP ME A LINE</div> */}
          <img className="dropLineImg" src="/Images/Drop.png" alt="" />
        </div>

        <div className="footerSection">
          <div className="name">
            YASHVANT MAINKAR
          </div>
          <div className="place-Time">
            MAHARASHRA (GMT +5.30)
          </div>
          <div className="backbtn">
            <div>CLICK FOR BACK TO TOP</div>
          </div>
          <div className="rightsRight">
            @ 2024 All RIHTS RESERVED
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
