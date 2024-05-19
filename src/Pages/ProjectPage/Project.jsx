import "./Project.css"
import {Link} from "react-router-dom"
// import projectData from "../../LocalApi/Data"

// subPorfolioDiv
import { Listdata } from "../../LocalApi/Data"
import PortfolioList from "../../Components/PortfolioList/PortfolioList"
import { useEffect, useState } from "react"
import {
  featuredPortfolio,
  reactPortfolio,
  javascriptPortfolio,
  bigOnePortfolio,
  upcommingPortfolio
} from "../../LocalApi/Data"

function Project() {
  const [selected, setSelected] = useState("featured")
  const [data, setData] = useState([])

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "react":
        setData(reactPortfolio);
        break;
      case "javascript":
        setData(javascriptPortfolio);
        break;
      case "big one":
        setData(bigOnePortfolio);
        break;
      case "upcomming":
        setData(upcommingPortfolio);
        break;

    }
  }, [selected])

  return (
    <div className="main-container">
        <Link to=".."><button className="projectPageBackBtn">Back</button></Link>
    <div className='porfolio'>
      <div className="subPorfolio">

        <div className="box1Div">
          <div className="name1">PROJECTS PAGE</div>
        </div>

        <div className="box2Div">
          <div className="name2">
            <ul>
              {
                Listdata.map(item => (
                  <PortfolioList 
                  key={item.id} 
                  title={item.title} 
                  active={selected === item.id} 
                  setSelected={setSelected} 
                  id={item.id} 
                  className="projectDiffName"
                  />
                ))
              }
            </ul>
          </div>
          
          <div className="projectsss">
            {
              data.map(eachItem => (
                <div key={eachItem} className="lightt">
                <div className="projectContainerr">
                  <div className="ProjectImgg">
                   <Link to={`/eachproject/${eachItem.id}`}><img className="imggg" src={eachItem.img} alt="" /></Link>
                  </div>
                </div>
              </div>
                  ))
            }

          </div>


        </div>

      </div>
    </div>
    </div>
  )
}

export default Project
