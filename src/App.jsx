import './App.css'
import About from './components/about/about'
import Contact from './components/contact/contact'
import Experience from './components/experience/Experience'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import My from './components/my/my'
import Nav from './components/nav/nav'
import Portfolio from './components/Portfolio/portfolio'
import Services from './components/services/Services'
import Testimonial from './components/testimonial/Testimonial'

function App() {
 

  return (
    <>
    
      <Header/>
      <Nav/>
      <About/>
      <Experience/>
      <Services/>
      <Portfolio/>
      <Testimonial/>
     
     <My/>
      <Footer/>
  

    </>
  )
}

export default App
