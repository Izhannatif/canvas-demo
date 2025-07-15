// // import React, { useEffect, useRef } from "react"
// // import { gsap } from "gsap"

// // const FlameTrail = () => {
// //   const containerRef = useRef(null)
// //   const images = [
// //     "https://assets.codepen.io/7558/cr-blurry-orange-small-001.jpg",
// //     "https://assets.codepen.io/7558/cr-blurry-orange-small-002.jpg",
// //     "https://assets.codepen.io/7558/cr-blurry-orange-small-003.jpg",
// //     "https://assets.codepen.io/7558/cr-blurry-orange-small-004.jpg",
// //   ]

// //   const config = {
// //     baseRotation: 30,
// //     maxRotationFactor: 3,
// //     minImageSize: 140,
// //     maxImageSize: 150,
// //     minMovement: 6,
// //     speedSmoothing: 0.25,
// //     imageLifespan: 800,
// //   }

// //   let mouseX = 0,
// //     mouseY = 0,
// //     prevMouseX = 0,
// //     prevMouseY = 0,
// //     smoothedSpeed = 0,
// //     lastMoveTime = Date.now(),
// //     imageIndex = 0

// //   const trail = useRef([])

// //   const getSpeed = () => {
// //     const now = Date.now()
// //     const dt = now - lastMoveTime
// //     if (dt === 0) return 0
// //     const dx = mouseX - prevMouseX
// //     const dy = mouseY - prevMouseY
// //     const distance = Math.hypot(dx, dy)
// //     const rawSpeed = distance / dt
// //     smoothedSpeed =
// //       smoothedSpeed * (1 - config.speedSmoothing) +
// //       rawSpeed * config.speedSmoothing
// //     lastMoveTime = now
// //     return smoothedSpeed
// //   }

// //   const createImage = (speed) => {
// //     const container = containerRef.current
// //     const img = document.createElement("img")
// //     img.className = "trail-img"
// //     img.src = images[imageIndex]
// //     imageIndex = (imageIndex + 1) % images.length

// //     const size =
// //       config.minImageSize + (config.maxImageSize - config.minImageSize) * speed
// //     const rotFactor = 1 + speed * (config.maxRotationFactor - 1)
// //     const rotation = (Math.random() - 0.5) * config.baseRotation * rotFactor

// //     const rect = container.getBoundingClientRect()
// //     const x = mouseX - rect.left
// //     const y = mouseY - rect.top

// //     img.style.position = "absolute"
// //     img.style.pointerEvents = "none"
// //     img.style.left = `${x}px`
// //     img.style.top = `${y}px`
// //     img.style.width = `${size}px`
// //     img.style.height = `${size}px`
// //     img.style.transform = `translate(-50%, -50%) rotate(${rotation}deg) scale(0)`
// //     img.style.transformOrigin = "center"

// //     container.appendChild(img)

// //     gsap.to(img, {
// //       scale: 1,
// //       duration: 0.6,
// //       ease: "power2.out",
// //     })

// //     trail.current.push({
// //       element: img,
// //       rotation,
// //       removeTime: Date.now() + config.imageLifespan,
// //     })
// //   }

// //   const removeOldImages = () => {
// //     const now = Date.now()
// //     while (trail.current.length && now >= trail.current[0].removeTime) {
// //       const { element, rotation } = trail.current.shift()
// //       gsap.to(element, {
// //         scale: 0,
// //         rotation: rotation + 360,
// //         duration: 0.8,
// //         ease: "power2.in",
// //         onComplete: () => {
// //           element.remove()
// //         },
// //       })
// //     }
// //   }

// //   useEffect(() => {
// //     const handleMouseMove = (e) => {
// //       prevMouseX = mouseX
// //       prevMouseY = mouseY
// //       mouseX = e.clientX
// //       mouseY = e.clientY

// //       const dx = mouseX - prevMouseX
// //       const dy = mouseY - prevMouseY
// //       const dist = Math.hypot(dx, dy)

// //       if (dist >= config.minMovement) {
// //         const speed = getSpeed()
// //         createImage(speed)
// //         prevMouseX = mouseX
// //         prevMouseY = mouseY
// //       }
// //     }

// //     const loop = () => {
// //       removeOldImages()
// //       requestAnimationFrame(loop)
// //     }

// //     document.addEventListener("mousemove", handleMouseMove)
// //     loop()

// //     return () => {
// //       document.removeEventListener("mousemove", handleMouseMove)
// //     }
// //   }, [])

// //   return <div ref={containerRef} className="hero-section relative h-screen w-screen overflow-hidden" />
// // }

// // export default FlameTrail

// import React, { useRef, useEffect } from "react"
// import { gsap } from "gsap"

// const images = [
//   "https://assets.codepen.io/7558/cr-blurry-orange-small-001.jpg",
//   "https://assets.codepen.io/7558/cr-blurry-orange-small-002.jpg",
//   "https://assets.codepen.io/7558/cr-blurry-orange-small-003.jpg",
//   "https://assets.codepen.io/7558/cr-blurry-orange-small-004.jpg",
// ]

// const config = {
//   imageLifespan: 600,
//   inDuration: 0.6,
//   outDuration: 0.8,
//   inEase: "cubic-bezier(.07,.5,.5,1)",
//   outEase: "cubic-bezier(.87,0,.13,1)",
//   minImageSize: 160,
//   maxImageSize: 340,
//   baseRotation: 30,
//   maxRotationFactor: 3,
//   minMovement: 8,
//   generationCooldown: 60, // ms between allowed generations
// }

// let maxSpeed = 0

// export default function FlameTrail() {
//   const container = useRef()
//   const trail = useRef([])
//   const mouse = useRef({ x: 0, y: 0, lastX: 0, lastY: 0 })
//   const lastTime = useRef(Date.now())
//   const lastGenerated = useRef(0)
//   const imgIndex = useRef(0)

//   const createFlame = (x, y, speed) => {
//     const img = document.createElement("img")
//     img.src = images[imgIndex.current++ % images.length]
//     img.style.position = "absolute"
//     img.style.pointerEvents = "none"
//     img.style.transformOrigin = "50% 50%"

//     const size =
//       config.minImageSize + speed * (config.maxImageSize - config.minImageSize)
//     img.width = img.height = size

//     const rot =
//       (Math.random() - 0.5) *
//       config.baseRotation *
//       (1 + speed * (config.maxRotationFactor - 1))
//     container.current.append(img)

//     gsap.set(img, { x, y, scale: 0, rotation: rot })
//     gsap.to(img, { scale: 1, duration: config.inDuration, ease: config.inEase })

//     setTimeout(() => {
//       gsap.to(img, {
//         scale: 0,
//         rotation: rot + 360,
//         duration: config.outDuration,
//         ease: config.outEase,
//         onComplete: () => img.remove(),
//       })
//     }, config.imageLifespan)
//   }

//   const calculateSpeed = (dx, dy, dt) => {
//     const raw = Math.hypot(dx, dy) / (dt || 1)
//     maxSpeed = Math.max(maxSpeed, raw)
//     return Math.min(raw / (maxSpeed || 1), 1)
//   }

//   const onMouseMove = (e) => {
//     const now = Date.now()
//     if (now - lastGenerated.current < config.generationCooldown) return

//     const rect = container.current.getBoundingClientRect()
//     const x = e.clientX - rect.left
//     const y = e.clientY - rect.top

//     const dx = x - mouse.current.lastX
//     const dy = y - mouse.current.lastY
//     const dist = Math.hypot(dx, dy)

//     if (dist >= config.minMovement) {
//       const dt = now - lastTime.current
//       lastTime.current = now
//       const speed = calculateSpeed(dx, dy, dt)

//       createFlame(x, y, speed)
//       mouse.current.lastX = x
//       mouse.current.lastY = y
//       lastGenerated.current = now
//     }
//   }

//   useEffect(() => {
//     document.addEventListener("mousemove", onMouseMove)
//     return () => document.removeEventListener("mousemove", onMouseMove)
//   }, [])

//   return <div ref={container} className="hero-section" />
// }

import React, { useRef, useEffect } from "react"
import { gsap } from "gsap"

const images = [
  "https://assets.codepen.io/7558/cr-blurry-orange-small-001.jpg",
  "https://assets.codepen.io/7558/cr-blurry-orange-small-002.jpg",
  "https://assets.codepen.io/7558/cr-blurry-orange-small-003.jpg",
  "https://assets.codepen.io/7558/cr-blurry-orange-small-004.jpg",
]

const config = {
  imageLifespan: 600,
  inDuration: 0.6,
  outDuration: 0.8,
  inEase: "cubic-bezier(.07,.5,.5,1)",
  outEase: "cubic-bezier(.87,0,.13,1)",
  minImageSize: 160,
  maxImageSize: 340,
  baseRotation: 30,
  maxRotationFactor: 3,
  mouseThreshold: 40,
  minMovement: 5,
  generationCooldown: 50,
}

let maxSpeed = 0

export default function FlameTrail() {
  const container = useRef()
  const trail = useRef([])
  const mouse = useRef({ x: 0, y: 0, lastX: 0, lastY: 0, prevX: 0, prevY: 0 })
  const lastTime = useRef(Date.now())
  const lastGenerated = useRef(0)
  const isMoving = useRef(false)
  const imgIndex = useRef(0)

  const calculateSpeed = (dx, dy, dt) => {
    const raw = Math.hypot(dx, dy) / (dt || 1)
    maxSpeed = Math.max(maxSpeed, raw)
    return Math.min(raw / (maxSpeed || 1), 1)
  }

  const createFlame = (x, y, speed) => {
    const img = document.createElement("img")
    img.src = images[imgIndex.current++ % images.length]
    img.style.position = "absolute"
    img.style.pointerEvents = "none"
    img.style.transformOrigin = "50% 50%"
    // img.classList.add(" z-[9999999999999]")

    const size =
      config.minImageSize + speed * (config.maxImageSize - config.minImageSize)
    img.width = img.height = size

    const rot =
      (Math.random() - 0.5) *
      config.baseRotation *
      (1 + speed * (config.maxRotationFactor - 1))
    container.current.append(img)

    gsap.set(img, { x, y, scale: 0, rotation: rot })
    gsap.to(img, { scale: 1, duration: config.inDuration, ease: config.inEase })

    setTimeout(() => {
      gsap.to(img, {
        scale: 0,
        rotation: rot + 360,
        duration: config.outDuration,
        ease: config.outEase,
        onComplete: () => img.remove(),
      })
    }, config.imageLifespan)
  }

  const handleMouseMove = (e) => {
    const rect = container.current.getBoundingClientRect()
    mouse.current.x = e.clientX - rect.left
    mouse.current.y = e.clientY - rect.top

    const dx = mouse.current.x - mouse.current.prevX
    const dy = mouse.current.y - mouse.current.prevY
    if (Math.hypot(dx, dy) > config.minMovement) {
      isMoving.current = true
      clearTimeout(window.moveTimeout)
      window.moveTimeout = setTimeout(() => {
        isMoving.current = false
      }, 100)
    }

    mouse.current.prevX = mouse.current.x
    mouse.current.prevY = mouse.current.y
  }

  const loop = () => {
    const now = Date.now()
    if (
      isMoving.current &&
      now - lastGenerated.current > config.generationCooldown
    ) {
      const dx = mouse.current.x - mouse.current.lastX
      const dy = mouse.current.y - mouse.current.lastY
      if (Math.hypot(dx, dy) >= config.mouseThreshold) {
        const dt = now - lastTime.current
        const speed = calculateSpeed(dx, dy, dt)

        createFlame(mouse.current.x, mouse.current.y, speed)
        mouse.current.lastX = mouse.current.x
        mouse.current.lastY = mouse.current.y
        lastTime.current = now
        lastGenerated.current = now
      }
    }
    requestAnimationFrame(loop)
  }

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove)
    loop()
    return () => document.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return <div ref={container} className="hero-section bg-black" />
}
