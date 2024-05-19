import "./Footer.css"
import {useState,useEffect} from "react"

function Footer() {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const updateDate = () => {
      const date = new Date();
      const formattedDate = date.toLocaleDateString('en-IN', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      });
      setCurrentDate(formattedDate);
    };

    updateDate(); // Set initial date
  }, []);

  function goToTop(){
    window.scrollTo({top : 0, left : 0 , behavior : "smooth"})

  }

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
            MAHARASHRA (GMT +5.30) || {currentDate}
          </div>
          <div onClick={goToTop} className="backbtn">
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
