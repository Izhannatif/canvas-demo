// import { useEffect, useRef, useState, useCallback } from "react"
// import { gsap } from "gsap"
// import { Draggable } from "gsap/Draggable"
// import ProjectCard from "./ProjectCard"
// import { projects } from "./projects"
// import { CursorTarget } from "@izhann/react-cursor-fx"

// gsap.registerPlugin(Draggable)

// const CARD_SIZE = 350 // px
// const GRID_COLS_BUFFER = 2 // Extra columns on each side for seamless looping
// const GRID_ROWS_BUFFER = 2 // Extra rows on each side for seamless looping

// const InfiniteGridGSAP = () => {
//   const containerRef = useRef(null)
//   const draggableProxyRef = useRef(null) // A proxy element for Draggable to control
//   const animationFrameRef = useRef(null)
//   const velocityRef = useRef({ x: 0, y: 0 })
//   const lastPositionRef = useRef({ x: 0, y: 0 })
//   const isDraggingRef = useRef(false) // Declare the variable here
//   const [isDragging, setIsDragging] = useState(false)

//   const [gridDimensions, setGridDimensions] = useState({
//     cols: 0,
//     rows: 0,
//     totalWidth: 0,
//     totalHeight: 0,
//   })

//   // Calculate grid dimensions based on window size
//   const calculateGridDimensions = useCallback(() => {
//     if (!containerRef.current) return

//     const viewportWidth = window.innerWidth
//     const viewportHeight = window.innerHeight - 200

//     const visibleCols = Math.ceil(viewportWidth / CARD_SIZE)
//     const visibleRows = Math.ceil(viewportHeight / CARD_SIZE)

//     const totalCols = visibleCols + GRID_COLS_BUFFER * 2
//     const totalRows = visibleRows + GRID_ROWS_BUFFER * 2

//     const totalWidth = totalCols * CARD_SIZE
//     const totalHeight = totalRows * CARD_SIZE

//     setGridDimensions({
//       cols: totalCols,
//       rows: totalRows,
//       totalWidth,
//       totalHeight,
//     })
//   }, [])

//   useEffect(() => {
//     calculateGridDimensions()
//     window.addEventListener("resize", calculateGridDimensions)
//     return () => window.removeEventListener("resize", calculateGridDimensions)
//   }, [calculateGridDimensions])

//   useEffect(() => {
//     if (!containerRef.current || gridDimensions.cols === 0) return

//     // Create a proxy element for Draggable to control
//     draggableProxyRef.current = document.createElement("div")
//     gsap.set(draggableProxyRef.current, { x: 0, y: 0 })

//     const draggable = Draggable.create(draggableProxyRef.current, {
//       type: "x,y",
//       trigger: containerRef.current, // Make the whole container draggable
//       inertia: true,
//       onDragStart: () => {
//         setIsDragging(true)
//         isDraggingRef.current = true // Set the ref to true
//         cancelAnimationFrame(animationFrameRef.current) // Stop momentum
//       },
//       onDrag: () => {
//         const currentX = gsap.getProperty(draggableProxyRef.current, "x")
//         const currentY = gsap.getProperty(draggableProxyRef.current, "y")

//         velocityRef.current.x = currentX - lastPositionRef.current.x
//         velocityRef.current.y = currentY - lastPositionRef.current.y

//         lastPositionRef.current = { x: currentX, y: currentY }
//       },
//       onDragEnd: () => {
//         setIsDragging(false)
//         isDraggingRef.current = false // Set the ref to false
//         // Amplify velocity for momentum
//         velocityRef.current.x *= 2
//         velocityRef.current.y *= 2
//         animationFrameRef.current = requestAnimationFrame(applyMomentum)
//       },
//       onThrowUpdate: () => {
//         // Update velocity during inertia for continuous momentum
//         const currentX = gsap.getProperty(draggableProxyRef.current, "x")
//         const currentY = gsap.getProperty(draggableProxyRef.current, "y")

//         velocityRef.current.x = currentX - lastPositionRef.current.x
//         velocityRef.current.y = currentY - lastPositionRef.current.y

//         lastPositionRef.current = { x: currentX, y: currentY }
//       },
//       onRelease: () => {
//         // Ensure momentum starts if released without dragEnd (e.g., quick tap)
//         if (!isDraggingRef.current) {
//           animationFrameRef.current = requestAnimationFrame(applyMomentum)
//         }
//       },
//     })[0]

//     // Initial momentum start
//     animationFrameRef.current = requestAnimationFrame(applyMomentum)

//     return () => {
//       draggable.kill()
//       cancelAnimationFrame(animationFrameRef.current)
//       if (draggableProxyRef.current && draggableProxyRef.current.parentNode) {
//         draggableProxyRef.current.parentNode.removeChild(
//           draggableProxyRef.current
//         )
//       }
//     }
//   }, [gridDimensions])

//   // Momentum animation loop
//   const applyMomentum = useCallback(() => {
//     if (isDragging) {
//       animationFrameRef.current = requestAnimationFrame(applyMomentum) // Keep looping if dragging starts mid-momentum
//       return
//     }

//     const friction = 0.9 // Small friction for 1-2 second momentum
//     const minVelocity = 0.5 // Minimum velocity threshold

//     velocityRef.current.x *= friction
//     velocityRef.current.y *= friction

//     if (
//       Math.abs(velocityRef.current.x) > minVelocity ||
//       Math.abs(velocityRef.current.y) > minVelocity
//     ) {
//       gsap.set(draggableProxyRef.current, {
//         x: `+=${velocityRef.current.x}`,
//         y: `+=${velocityRef.current.y}`,
//       })
//       lastPositionRef.current = {
//         x: gsap.getProperty(draggableProxyRef.current, "x"),
//         y: gsap.getProperty(draggableProxyRef.current, "y"),
//       }
//       animationFrameRef.current = requestAnimationFrame(applyMomentum)
//     } else {
//       // Stop animation if velocity is too low
//       cancelAnimationFrame(animationFrameRef.current)
//     }
//   }, [isDragging])

//   // Generate grid items
//   const renderGridItems = useCallback(() => {
//     const items = []
//     const { cols, rows, totalWidth, totalHeight } = gridDimensions

//     if (cols === 0 || rows === 0) return items

//     const wrapX = gsap.utils.wrap(-totalWidth / 2, totalWidth / 2)
//     const wrapY = gsap.utils.wrap(-totalHeight / 2, totalHeight / 2)

//     for (let i = 0; i < cols * rows; i++) {
//       const col = i % cols
//       const row = Math.floor(i / cols)

//       // Calculate initial position in the grid
//       const initialX = col * CARD_SIZE - totalWidth / 2 + CARD_SIZE / 2
//       const initialY = row * CARD_SIZE - totalHeight / 2 + CARD_SIZE / 2

//       items.push(
//         <GridItem
//           key={i}
//           initialX={initialX}
//           initialY={initialY}
//           draggableProxy={draggableProxyRef.current}
//           wrapX={wrapX}
//           wrapY={wrapY}
//           totalWidth={totalWidth}
//           totalHeight={totalHeight}
//           project={projects[i % projects.length]} // Loop through projects data
//         />
//       )
//     }
//     return items
//   }, [gridDimensions])

//   return (
//     <div
//       ref={containerRef}
//       className="w-screen h-[80vh] bg-black overflow-hidden relative cursor-grab"
//       style={{ cursor: isDragging ? "grabbing" : "grab" }}
//     >
//       {renderGridItems()}
//     </div>
//   )
// }

// // Individual grid item component
// const GridItem = ({
//   initialX,
//   initialY,
//   draggableProxy,
//   wrapX,
//   wrapY,
//   totalWidth,
//   totalHeight,
//   project,
// }) => {
//   const itemRef = useRef(null)

//   useEffect(() => {
//     if (!itemRef.current || !draggableProxy) return

//     const updatePosition = () => {
//       const proxyX = gsap.getProperty(draggableProxy, "x")
//       const proxyY = gsap.getProperty(draggableProxy, "y")

//       // Calculate wrapped position
//       let newX = wrapX(initialX + proxyX)
//       let newY = wrapY(initialY + proxyY)

//       // Adjust position to ensure it stays within the visible loop range
//       // This is crucial for seamless wrapping
//       if (newX - CARD_SIZE / 2 > window.innerWidth / 2) {
//         newX -= totalWidth
//       } else if (newX + CARD_SIZE / 2 < -window.innerWidth / 2) {
//         newX += totalWidth
//       }

//       if (newY - CARD_SIZE / 2 > window.innerHeight / 2) {
//         newY -= totalHeight
//       } else if (newY + CARD_SIZE / 2 < -window.innerHeight / 2) {
//         newY += totalHeight
//       }

//       gsap.set(itemRef.current, {
//         x: newX,
//         y: newY,
//         // Use transform for GPU acceleration
//         transformOrigin: "center center",
//       })
//     }

//     // Use GSAP's ticker for smooth updates
//     gsap.ticker.add(updatePosition)

//     return () => {
//       gsap.ticker.remove(updatePosition)
//     }
//   }, [
//     initialX,
//     initialY,
//     draggableProxy,
//     wrapX,
//     wrapY,
//     totalWidth,
//     totalHeight,
//   ])

//   return (
//     <>
//       <div
//         ref={itemRef}
//         className="h-screen w-screen absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-y border-white bg-white" // Center the item
//         style={{ width: CARD_SIZE, height: CARD_SIZE }}
//       >
//         <ProjectCard project={project} />
//       </div>
//     </>
//   )
// }

// export default InfiniteGridGSAP

"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import { gsap } from "gsap"
import { Draggable } from "gsap/Draggable"
import ProjectCard from "./ProjectCard"
import { projects } from "./projects"

gsap.registerPlugin(Draggable)

const CARD_SIZE = 350 // px
const GRID_COLS_BUFFER = 2 // Extra columns on each side for seamless looping
const GRID_ROWS_BUFFER = 2 // Extra rows on each side for seamless looping

const InfiniteGridGSAP = () => {
  const containerRef = useRef(null)
  const draggableProxyRef = useRef(null) // A proxy element for Draggable to control
  const animationFrameRef = useRef(null)
  const velocityRef = useRef({ x: 0, y: 0 })
  const lastPositionRef = useRef({ x: 0, y: 0 })
  const isDraggingRef = useRef(false) // Declare the variable here
  const [isDragging, setIsDragging] = useState(false)
  const [isInitialized, setIsInitialized] = useState(false) // Add initialization state

  const [gridDimensions, setGridDimensions] = useState({
    cols: 0,
    rows: 0,
    totalWidth: 0,
    totalHeight: 0,
  })

  // Calculate grid dimensions based on window size
  const calculateGridDimensions = useCallback(() => {
    if (!containerRef.current) return

    const viewportWidth = window.innerWidth
    const viewportHeight = window.innerHeight - 200

    const visibleCols = Math.ceil(viewportWidth / CARD_SIZE)
    const visibleRows = Math.ceil(viewportHeight / CARD_SIZE)

    const totalCols = visibleCols + GRID_COLS_BUFFER * 2
    const totalRows = visibleRows + GRID_ROWS_BUFFER * 2

    const totalWidth = totalCols * CARD_SIZE
    const totalHeight = totalRows * CARD_SIZE

    setGridDimensions({
      cols: totalCols,
      rows: totalRows,
      totalWidth,
      totalHeight,
    })
  }, [])

  // Initialize proxy element immediately
  useEffect(() => {
    // Create proxy element immediately on mount
    draggableProxyRef.current = document.createElement("div")
    gsap.set(draggableProxyRef.current, { x: 0, y: 0 })
    setIsInitialized(true)

    return () => {
      if (draggableProxyRef.current && draggableProxyRef.current.parentNode) {
        draggableProxyRef.current.parentNode.removeChild(
          draggableProxyRef.current
        )
      }
    }
  }, [])

  useEffect(() => {
    calculateGridDimensions()
    window.addEventListener("resize", calculateGridDimensions)
    return () => window.removeEventListener("resize", calculateGridDimensions)
  }, [calculateGridDimensions])

  useEffect(() => {
    if (
      !containerRef.current ||
      gridDimensions.cols === 0 ||
      !draggableProxyRef.current
    )
      return

    const draggable = Draggable.create(draggableProxyRef.current, {
      type: "x,y",
      trigger: containerRef.current, // Make the whole container draggable
      inertia: true,
      onDragStart: () => {
        setIsDragging(true)
        isDraggingRef.current = true // Set the ref to true
        cancelAnimationFrame(animationFrameRef.current) // Stop momentum
      },
      onDrag: () => {
        const currentX = gsap.getProperty(draggableProxyRef.current, "x")
        const currentY = gsap.getProperty(draggableProxyRef.current, "y")

        velocityRef.current.x = currentX - lastPositionRef.current.x
        velocityRef.current.y = currentY - lastPositionRef.current.y

        lastPositionRef.current = { x: currentX, y: currentY }
      },
      onDragEnd: () => {
        setIsDragging(false)
        isDraggingRef.current = false // Set the ref to false
        // Amplify velocity for momentum
        velocityRef.current.x *= 2
        velocityRef.current.y *= 2
        animationFrameRef.current = requestAnimationFrame(applyMomentum)
      },
      onThrowUpdate: () => {
        // Update velocity during inertia for continuous momentum
        const currentX = gsap.getProperty(draggableProxyRef.current, "x")
        const currentY = gsap.getProperty(draggableProxyRef.current, "y")

        velocityRef.current.x = currentX - lastPositionRef.current.x
        velocityRef.current.y = currentY - lastPositionRef.current.y

        lastPositionRef.current = { x: currentX, y: currentY }
      },
      onRelease: () => {
        // Ensure momentum starts if released without dragEnd (e.g., quick tap)
        if (!isDraggingRef.current) {
          animationFrameRef.current = requestAnimationFrame(applyMomentum)
        }
      },
    })[0]

    // Initial momentum start
    animationFrameRef.current = requestAnimationFrame(applyMomentum)

    return () => {
      draggable.kill()
      cancelAnimationFrame(animationFrameRef.current)
    }
  }, [gridDimensions, isInitialized]) // Add isInitialized dependency

  // Momentum animation loop
  const applyMomentum = useCallback(() => {
    if (isDragging) {
      animationFrameRef.current = requestAnimationFrame(applyMomentum) // Keep looping if dragging starts mid-momentum
      return
    }

    const friction = 0.9 // Small friction for 1-2 second momentum
    const minVelocity = 0.5 // Minimum velocity threshold

    velocityRef.current.x *= friction
    velocityRef.current.y *= friction

    if (
      Math.abs(velocityRef.current.x) > minVelocity ||
      Math.abs(velocityRef.current.y) > minVelocity
    ) {
      gsap.set(draggableProxyRef.current, {
        x: `+=${velocityRef.current.x}`,
        y: `+=${velocityRef.current.y}`,
      })
      lastPositionRef.current = {
        x: gsap.getProperty(draggableProxyRef.current, "x"),
        y: gsap.getProperty(draggableProxyRef.current, "y"),
      }
      animationFrameRef.current = requestAnimationFrame(applyMomentum)
    } else {
      // Stop animation if velocity is too low
      cancelAnimationFrame(animationFrameRef.current)
    }
  }, [isDragging])

  // Generate grid items
  const renderGridItems = useCallback(() => {
    const items = []
    const { cols, rows, totalWidth, totalHeight } = gridDimensions

    // Only render if we have dimensions and proxy is initialized
    if (cols === 0 || rows === 0 || !isInitialized) return items

    const wrapX = gsap.utils.wrap(-totalWidth / 2, totalWidth / 2)
    const wrapY = gsap.utils.wrap(-totalHeight / 2, totalHeight / 2)

    for (let i = 0; i < cols * rows; i++) {
      const col = i % cols
      const row = Math.floor(i / cols)

      // Calculate initial position in the grid
      const initialX = col * CARD_SIZE - totalWidth / 2 + CARD_SIZE / 2
      const initialY = row * CARD_SIZE - totalHeight / 2 + CARD_SIZE / 2

      items.push(
        <GridItem
          key={i}
          initialX={initialX}
          initialY={initialY}
          draggableProxy={draggableProxyRef.current}
          wrapX={wrapX}
          wrapY={wrapY}
          totalWidth={totalWidth}
          totalHeight={totalHeight}
          project={projects[i % projects.length]} // Loop through projects data
        />
      )
    }
    return items
  }, [gridDimensions, isInitialized]) // Add isInitialized dependency

  return (
    <div
      ref={containerRef}
      className="w-screen h-screen bg-black overflow-hidden relative cursor-grab"
      style={{ cursor: isDragging ? "grabbing" : "grab" }}
    >
      {renderGridItems()}
    </div>
  )
}

// Individual grid item component
const GridItem = ({
  initialX,
  initialY,
  draggableProxy,
  wrapX,
  wrapY,
  totalWidth,
  totalHeight,
  project,
}) => {
  const itemRef = useRef(null)

  useEffect(() => {
    if (!itemRef.current || !draggableProxy) return

    const updatePosition = () => {
      const proxyX = gsap.getProperty(draggableProxy, "x")
      const proxyY = gsap.getProperty(draggableProxy, "y")

      // Calculate wrapped position
      let newX = wrapX(initialX + proxyX)
      let newY = wrapY(initialY + proxyY)

      // Adjust position to ensure it stays within the visible loop range
      // This is crucial for seamless wrapping
      if (newX - CARD_SIZE / 2 > window.innerWidth / 2) {
        newX -= totalWidth
      } else if (newX + CARD_SIZE / 2 < -window.innerWidth / 2) {
        newX += totalWidth
      }

      if (newY - CARD_SIZE / 2 > window.innerHeight / 2) {
        newY -= totalHeight
      } else if (newY + CARD_SIZE / 2 < -window.innerHeight / 2) {
        newY += totalHeight
      }

      gsap.set(itemRef.current, {
        x: newX,
        y: newY,
        // Use transform for GPU acceleration
        transformOrigin: "center center",
      })
    }

    // Use GSAP's ticker for smooth updates
    gsap.ticker.add(updatePosition)

    return () => {
      gsap.ticker.remove(updatePosition)
    }
  }, [
    initialX,
    initialY,
    draggableProxy,
    wrapX,
    wrapY,
    totalWidth,
    totalHeight,
  ])

  return (
    <>
      <div
        ref={itemRef}
        className="h-screen w-screen absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-white bg-black" // Center the item
        style={{ width: CARD_SIZE, height: CARD_SIZE }}
      >
        <ProjectCard project={project} />
      </div>
    </>
  )
}

export default InfiniteGridGSAP
