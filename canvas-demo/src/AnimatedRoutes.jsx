import { Routes, Route, useLocation } from "react-router-dom"
import { useEffect } from "react"
import PageTransitionWrapper from "./PixelTransitionWrapper"
import Home from "./assets/Pages/Home"
import About from "./assets/Pages/About"

function AnimatedRoutes() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <PageTransitionWrapper>
      <Routes location={location} key={location.pathname}>
        <Route path="/" Component={Home} />
        <Route path="/about" Component={About} />
      </Routes>
    </PageTransitionWrapper>
  )
}

export default AnimatedRoutes
