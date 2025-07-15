// // import React, { useState, useEffect, useRef } from "react"
// // import { Stage, Layer, Line } from "react-konva"

// // const Hexagon = ({ points, isHovered, onHover, onLeave }) => (
// //   <Line
// //     points={points}
// //     closed
// //     stroke="white"
// //     strokeWidth={1}
// //     fill={isHovered ? "white" : "white"}
// //     onMouseEnter={onHover}
// //     onMouseLeave={onLeave}
// //   />
// // )

// // const getHexagonPoints = (cx, cy, size) => {
// //   const points = []
// //   for (let i = 0; i < 6; i++) {
// //     const angle = (Math.PI / 3) * i - Math.PI / 6 // 30° offset
// //     points.push(cx + size * Math.cos(angle))
// //     points.push(cy + size * Math.sin(angle))
// //   }
// //   return points
// // }

// // const Honeycomb = () => {
// //   const hexSize = 50
// //   const radius = 400 // Interaction radius
// //   const pushStrength = 0.25 // How much to push nearby hexes

// //   const [hoveredHexIndex, setHoveredHexIndex] = useState(null)
// //   const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 })

// //   const width = window.innerWidth
// //   const height = window.innerHeight

// //   const hexWidth = Math.sqrt(3) * hexSize
// //   const hexHeight = 2 * hexSize

// //   const horizDist = hexWidth * 1
// //   const vertDist = (3 / 4) * hexHeight

// //   const hexes = []
// //   let id = 0

// //   for (let y = -hexHeight / 2; y < height + hexHeight; y += vertDist) {
// //     for (let x = -hexWidth / 2; x < width + hexWidth; x += horizDist) {
// //       const offsetX = Math.round(y / vertDist) % 2 === 0 ? 0 : hexWidth / 2
// //       hexes.push({
// //         id: id++,
// //         baseX: x + offsetX,
// //         baseY: y,
// //       })
// //     }
// //   }

// //   const handleMouseMove = (e) => {
// //     const stage = e.target.getStage()
// //     const mousePos = stage.getPointerPosition()
// //     setMousePos(mousePos)
// //   }

// //   return (
// //     <Stage
// //       width={width}
// //       height={height}
// //       onMouseMove={handleMouseMove}
// //       onMouseLeave={() => setMousePos({ x: -1000, y: -1000 })}
// //     >
// //       <Layer>
// //         {hexes.map((hex, index) => {
// //           const dx = hex.baseX - mousePos.x
// //           const dy = hex.baseY - mousePos.y
// //           const dist = Math.sqrt(dx * dx + dy * dy)

// //           let offsetX = 0
// //           let offsetY = 0

// //           if (dist < radius) {
// //             const effect = ((radius - dist) / radius) * pushStrength
// //             offsetX = dx * effect
// //             offsetY = dy * effect
// //           }

// //           const points = getHexagonPoints(
// //             hex.baseX + offsetX,
// //             hex.baseY + offsetY,
// //             hexSize
// //           )

// //           return (
// //             <Hexagon
// //               key={hex.id}
// //               points={points}
// //               isHovered={hoveredHexIndex === index}
// //               onHover={() => setHoveredHexIndex(index)}
// //               onLeave={() => setHoveredHexIndex(null)}
// //             />
// //           )
// //         })}
// //       </Layer>
// //     </Stage>
// //   )
// // }

// // export default Honeycomb

// import React, { useState, useEffect, useRef } from "react"
// import { Stage, Layer, Line } from "react-konva"

// const Hexagon = ({ points, isHovered, onHover, onLeave }) => (
//   <Line
//     points={points}
//     closed
//     stroke="black"
//     strokeWidth={1}
//     fill={isHovered ? "black" : "black"}
//     onMouseEnter={onHover}
//     onMouseLeave={onLeave}
//   />
// )

// const getHexagonPoints = (cx, cy, size) => {
//   const points = []
//   for (let i = 0; i < 6; i++) {
//     const angle = (Math.PI / 3) * i - Math.PI / 6
//     points.push(cx + size * Math.cos(angle))
//     points.push(cy + size * Math.sin(angle))
//   }
//   return points
// }

// const lerp = (start, end, t) => start + (end - start) * t

// const Honeycomb = () => {
//   const hexSize = 50
//   const radius = 500
//   const pushStrength = 0.25
//   const smoothFactor = 0.1

//   const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 })

//   const width = window.innerWidth
//   const height = window.innerHeight

//   const hexWidth = Math.sqrt(3) * hexSize
//   const hexHeight = 2 * hexSize
//   const horizDist = hexWidth
//   const vertDist = (3 / 4) * hexHeight

//   const hexesRef = useRef([])

//   // Initialize hex positions only once
//   useEffect(() => {
//     const newHexes = []
//     let id = 0

//     for (let y = -hexHeight / 2; y < height + hexHeight; y += vertDist) {
//       for (let x = -hexWidth / 2; x < width + hexWidth; x += horizDist) {
//         const offsetX = Math.round(y / vertDist) % 2 === 0 ? 0 : hexWidth / 2
//         newHexes.push({
//           id: id++,
//           baseX: x + offsetX,
//           baseY: y,
//           currentX: x + offsetX,
//           currentY: y,
//         })
//       }
//     }

//     hexesRef.current = newHexes
//   }, [])

//   const [, setTick] = useState(0) // dummy state to trigger re-render

//   useEffect(() => {
//     let animationFrame
//     const animate = () => {
//       hexesRef.current.forEach((hex) => {
//         const dx = hex.baseX - mousePos.x
//         const dy = hex.baseY - mousePos.y
//         const dist = Math.sqrt(dx * dx + dy * dy)

//         let targetX = hex.baseX
//         let targetY = hex.baseY

//         if (dist < radius) {
//           const effect = ((radius - dist) / radius) * pushStrength
//           targetX = hex.baseX + dx * effect
//           targetY = hex.baseY + dy * effect
//         }

//         // Smooth interpolation
//         hex.currentX = lerp(hex.currentX, targetX, smoothFactor)
//         hex.currentY = lerp(hex.currentY, targetY, smoothFactor)
//       })

//       setTick((tick) => tick + 1) // force re-render
//       animationFrame = requestAnimationFrame(animate)
//     }

//     animate()

//     return () => cancelAnimationFrame(animationFrame)
//   }, [mousePos])

//   const handleMouseMove = (e) => {
//     const stage = e.target.getStage()
//     const pointer = stage.getPointerPosition()
//     setMousePos(pointer)
//   }

//   return (
//     <Stage
//       width={width}
//       height={height}
//       onMouseMove={handleMouseMove}
//       onMouseLeave={() => setMousePos({ x: -1000, y: -1000 })}
//     >
//       <Layer>
//         {hexesRef.current.map((hex) => {
//           const points = getHexagonPoints(hex.currentX, hex.currentY, hexSize)
//           return <Hexagon key={hex.id} points={points} isHovered={false} />
//         })}
//       </Layer>
//     </Stage>
//   )
// }

// export default Honeycomb

import React, { useState, useEffect, useRef } from "react"
import { Stage, Layer, Line } from "react-konva"

const Hexagon = ({ points, isHovered }) => (
  <Line
    points={points}
    closed
    stroke="white"
    strokeWidth={1}
    fill={isHovered ? "white" : "white"}
  />
)

const getHexagonPoints = (cx, cy, size) => {
  const points = []
  for (let i = 0; i < 6; i++) {
    const angle = (Math.PI / 3) * i - Math.PI / 6
    points.push(cx + size * Math.cos(angle))
    points.push(cy + size * Math.sin(angle))
  }
  return points
}

const lerp = (start, end, t) => start + (end - start) * t

const Honeycomb = () => {
  const hexSize = 50
  const radius = 500
  const pushStrength = 0.1
  const smoothFactor = 0.1
  const breathingAmplitude = 0 // how much size changes
  const breathingSpeed = 0.5 // speed of pulsing

  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 })
  const width = window.innerWidth
  const height = window.innerHeight

  const hexWidth = Math.sqrt(3) * hexSize
  const hexHeight = 2 * hexSize
  const horizDist = hexWidth
  const vertDist = (3 / 4) * hexHeight

  const hexesRef = useRef([])
  const startTimeRef = useRef(Date.now())

  // Initialize hexes once
  useEffect(() => {
    const newHexes = []
    let id = 0

    for (let y = -hexHeight / 2; y < height + hexHeight; y += vertDist) {
      for (let x = -hexWidth / 2; x < width + hexWidth; x += horizDist) {
        const offsetX = Math.round(y / vertDist) % 2 === 0 ? 0 : hexWidth / 2
        newHexes.push({
          id: id++,
          baseX: x + offsetX,
          baseY: y,
          currentX: x + offsetX,
          currentY: y,
          phaseOffset: Math.random() * Math.PI * 2, // for desynced breathing
        })
      }
    }

    hexesRef.current = newHexes
  }, [])

  const [, setTick] = useState(0) // dummy state to trigger re-render

  useEffect(() => {
    let animationFrame

    const animate = () => {
      const now = (Date.now() - startTimeRef.current) / 1000

      hexesRef.current.forEach((hex) => {
        const dx = hex.baseX - mousePos.x
        const dy = hex.baseY - mousePos.y
        const dist = Math.sqrt(dx * dx + dy * dy)

        let targetX = hex.baseX
        let targetY = hex.baseY

        if (dist < radius) {
          const effect = ((radius - dist) / radius) * pushStrength
          targetX = hex.baseX + dx * effect
          targetY = hex.baseY + dy * effect
        }

        // Lerp toward pushed position
        hex.currentX = lerp(hex.currentX, targetX, smoothFactor)
        hex.currentY = lerp(hex.currentY, targetY, smoothFactor)

        // Add breathing effect if NOT close to cursor
        hex.breatheSize =
          dist > radius
            ? hexSize +
              breathingAmplitude *
                Math.sin(now * breathingSpeed + hex.phaseOffset)
            : hexSize
      })

      setTick((tick) => tick + 1) // trigger render
      animationFrame = requestAnimationFrame(animate)
    }

    animate()

    return () => cancelAnimationFrame(animationFrame)
  }, [mousePos])

  const handleMouseMove = (e) => {
    const stage = e.target.getStage()
    const pointer = stage.getPointerPosition()
    setMousePos(pointer)
  }

  return (
    <Stage
      width={width}
      height={height}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setMousePos({ x: -1000, y: -1000 })}
      draggable
    >
      <Layer>
        {hexesRef.current.map((hex) => {
          const points = getHexagonPoints(
            hex.currentX,
            hex.currentY,
            hex.breatheSize
          )
          return <Hexagon key={hex.id} points={points} isHovered={false} />
        })}
      </Layer>
    </Stage>
  )
}

export default Honeycomb
