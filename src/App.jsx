import { useEffect } from "react"
import "./App.css"
import Lenis from "@studio-freight/lenis"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./assets/Pages/Home"
import PageTransitionWrapper from "./PixelTransitionWrapper"
import About from "./assets/Pages/About"
import { NavbarProvider } from "./NavbarContext"
import Navbar from "./Navbar"
import { Cursor, CursorProvider } from "@izhann/react-cursor-fx"
import Footer from "./Footer"
import ScrollToTop from "./ScrollToTop"
import Work from "./assets/Pages/Work"

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1,
      easing: (t) => Math.min(1, 1.1 - Math.pow(1.5, -5 * t)),
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
      <ScrollToTop />
      <CursorProvider config={config} hideNativeCursor={false}>
        <NavbarProvider>
          <div className="grain"></div>
          <Cursor />
          <Navbar />
          <PageTransitionWrapper>
            <Routes>
              <Route path="/" Component={Home} />
              <Route path="/about" Component={About} />
              <Route path="/work" Component={Work} />
            </Routes>
          </PageTransitionWrapper>
        </NavbarProvider>
      </CursorProvider>
    </Router>
  )
}

export default App

const config = {
  default: {
    width: 20,
    height: 20,
    shape: "circle",
    color: "rgba(255, 255, 255, 1)",
    mixBlendMode: "difference",
    transition: {
      stiffness: 800,
      damping: 50,
      mass: 0.5,
    },
  },
  button: {
    width: 40,
    height: 40,
    shape: "circle",
    color: "rgba(255, 255, 255, 1)",
    mixBlendMode: "difference",
  },
  workButton: {
    width: 60,
    height: 60,
    shape: "circle",
    color: "rgba(255, 255, 255, 1)",
    mixBlendMode: "difference",
  },
  waveText: {
    width: 60,
    height: 60,
    shape: "circle",
    color: "rgba(255, 255, 255, 0)",
    label: "👋🏻",
    fontSize: 50,
  },

  submitText: {
    width: 100,
    height: 100,
    shape: "circle",
    color: "rgba(255, 255, 255, 0)",
    label: "lessgooo ⌯⌲",
    labelColor: "white",
    fontSize: 18,
    fontWeight: "200",
  },
  dragText: {
    width: 70,
    height: 70,
    shape: "circle",
    color: "#ffffff",
    label: "[ DRAG ]",
    labelColor: "black",
    fontSize: 12,
    fontWeight: "500",
    transition: {
      stiffness: 800,
      damping: 50,
      mass: 0.5,
    },
  },
}
