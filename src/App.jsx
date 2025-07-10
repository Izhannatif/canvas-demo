import { useEffect } from "react"
import "./App.css"
import Lenis from "@studio-freight/lenis"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./assets/Pages/Home"
import PageTransitionWrapper from "./PixelTransitionWrapper"
import About from "./assets/Pages/About"
import { NavbarProvider } from "./NavbarContext"
import Navbar from "./Navbar"

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -5 * t)),
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      smoothTouch: true,
      touchMultiplier: 2,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }, [])

  return (
    <Router>
      <NavbarProvider>
        <Navbar />
        <PageTransitionWrapper>
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/about" Component={About} />
          </Routes>
        </PageTransitionWrapper>
      </NavbarProvider>
    </Router>
  )
}

export default App
