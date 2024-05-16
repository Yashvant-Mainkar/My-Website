import Footer from '../Components/Footer/Footer'
import Hero from '../Components/Hero/Hero'
import Home from '../Components/Home/Home'
import HomeIndex from '../Components/HomeIndex/HomeIndex'
import Navbar from '../Components/Navbar/Navbar'
import Projects from '../Components/Projects/Projects'
import Text from '../Components/Text/Text'

function MainApp() {
  return (
    <div>
      <Navbar />
      <Home />
      <HomeIndex />
      <Text />
      <Projects />
      <Hero />
      <Footer />
    </div>
  )
}

export default MainApp
