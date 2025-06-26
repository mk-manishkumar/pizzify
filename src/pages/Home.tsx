import { Carousel } from "../components/HomeComponents/Carousel"
import { PizzaSection } from "../components/HomeComponents/PizzaSection"
import { Footer } from "../components/SharedComponents/Footer"
import { Navbar } from "../components/SharedComponents/Navbar"

export const Home = () => {
  return (
    <div>
      <Navbar/>
      <Carousel/>
      <PizzaSection/>
      <Footer/>
    </div>
  )
}

