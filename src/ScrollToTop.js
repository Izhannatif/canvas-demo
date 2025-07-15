import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill()) // <-- kill triggers
    ScrollTrigger.refresh()
  }, [pathname])

  return null
}

export default ScrollToTop
