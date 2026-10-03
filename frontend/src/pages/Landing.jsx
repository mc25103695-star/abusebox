import Navbar from "../components/landing/Navbar"
import Hero from "../components/landing/Hero"
import Footer from "../components/landing/Footer"
import '../index.css';

const LandingPage = () => {
  return (
    <div className="landing min-h-screen flex flex-col justify-between">
      <Navbar/>
      <Hero/>
      <Footer/>
    </div>
  )
}

export default LandingPage;
