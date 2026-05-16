import { useEffect } from "react"
import Hero from "./components/Hero"
import AOS from 'aos'
import 'aos/dist/aos.css'

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: 'ease-out-cubic',
      offset: 100,
    })
  })
  return (
    <div>
      <Hero />
    </div>
  )
}

export default App