import { useEffect, useRef } from "react"
import { gsap } from "gsap"

const PixelPageTransition = ({
  gridSize = 8,
  pixelColor = "#000",
  animationDuration = 0.8,
  onComplete = () => {},
}) => {
  const wrapperRef = useRef(null)
  const pixelsRef = useRef([])

  // Generate pixel positions
  useEffect(() => {
    const wrapper = wrapperRef.current
    if (!wrapper) return

    const size = 100 / gridSize
    const pixels = []

    for (let row = 0; row < gridSize; row++) {
      for (let col = 0; col < gridSize; col++) {
        const div = document.createElement("div")
        div.style.position = "absolute"
        div.style.width = `${size}vw`
        div.style.height = `${size}vh`
        div.style.left = `${col * size}%`
        div.style.top = `${row * size}%`
        div.style.backgroundColor = pixelColor
        div.style.display = "none"
        wrapper.appendChild(div)
        pixels.push(div)
      }
    }

    pixelsRef.current = pixels

    return () => {
      pixels.forEach((p) => p.remove())
    }
  }, [gridSize, pixelColor])

  // Animate in + out
  const playTransition = () => {
    const pixels = pixelsRef.current
    if (!pixels.length) return

    gsap.set(pixels, { display: "none" })
    const total = pixels.length
    const stagger = animationDuration / total

    // Show pixels
    gsap.to(pixels, {
      display: "block",
      duration: 0,
      stagger: { each: stagger, from: "random" },
    })

    // Hide pixels (reveal new page)
    gsap.to(pixels, {
      display: "none",
      duration: 0,
      delay: animationDuration,
      stagger: { each: stagger, from: "random" },
      onComplete,
    })
  }

  // Expose transition play method
  useEffect(() => {
    playTransition()
  }, [])

  return (
    <div
      ref={wrapperRef}
      style={{
        background: "white",
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        pointerEvents: "none",
        overflow: "hidden",
      }}
    />
  )
}

export default PixelPageTransition
