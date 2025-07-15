import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import PixelPageTransition from "./PixelTransition"

const PageTransitionWrapper = ({ children }) => {
  const location = useLocation()
  const [displayChildren, setDisplayChildren] = useState(children)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    setIsAnimating(true)
    const timer = setTimeout(() => {
      setDisplayChildren(children)
      setIsAnimating(false)
    }, 1500) // slightly longer than animationDuration

    return () => clearTimeout(timer)
  }, [location])

  return (
    <>
      {isAnimating && <PixelPageTransition />}
      <div>{displayChildren}</div>
    </>
  )
}

export default PageTransitionWrapper
