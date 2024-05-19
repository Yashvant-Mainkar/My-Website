import {BrowserRouter,Routes,Route} from "react-router-dom"
import "./App.css"
import MainApp from "./Main/MainApp"
import Contact from "./Pages/ContactPage/Contact"
import Project from "./Pages/ProjectPage/Project"
import EachProject from "./Pages/EachProject/EachProject"
import AboutPage from "./Pages/AboutPage/AboutPage"
function App() {
  return (
    <div className="app">
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainApp/>}/>
          <Route path="contact" element={<Contact/>}/>
          <Route path="project" element={<Project/>}/>
          <Route path="eachproject/:id" element={<EachProject/>}/>
          <Route path="about" element={<AboutPage/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
