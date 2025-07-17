// import { useEffect, useRef } from "react"
// import gsap from "gsap"
// import { Draggable } from "gsap/Draggable"
// import { InertiaPlugin } from "gsap/InertiaPlugin"

// gsap.registerPlugin(Draggable, InertiaPlugin)

// const projects = Array.from({ length: 12 }, (_, i) => ({
//   id: i,
//   title: `Project ${i + 1}`,
//   image: `https://picsum.photos/400/400?random=${i + 1}`,
// }))

// export default function ProjectGridCanvas() {
//   const wrapperRef = useRef(null)

//   const repeatX = 4 // columns of repeated grids
//   const repeatY = 4 // rows of repeated grids
//   const cardSize = 300 // px

//   useEffect(() => {
//     const wrapper = wrapperRef.current
//     const totalWidth = repeatX * projects.length * cardSize
//     const totalHeight = repeatY * cardSize

//     const wrapX = gsap.utils.wrap(-totalWidth / 2, totalWidth / 2)
//     const wrapY = gsap.utils.wrap(-totalHeight / 2, totalHeight / 2)

//     gsap.set(wrapper, {
//       x: -totalWidth / 4,
//       y: -totalHeight / 4,
//     })

//     Draggable.create(wrapper, {
//       type: "x,y",
//       inertia: true,
//       edgeResistance: 0.75,
//       onDrag() {
//         gsap.set(wrapper, {
//           x: wrapX(this.x),
//           y: wrapY(this.y),
//         })
//       },
//       onThrowUpdate() {
//         gsap.set(wrapper, {
//           x: wrapX(this.x),
//           y: wrapY(this.y),
//         })
//       },
//     })
//   }, [])

//   const tiledGrid = []

//   for (let row = 0; row < repeatY; row++) {
//     for (let col = 0; col < repeatX; col++) {
//       projects.forEach((project, i) => {
//         tiledGrid.push({
//           ...project,
//           key: `${row}-${col}-${i}`,
//           x: (i + projects.length * col) * cardSize,
//           y: row * cardSize,
//         })
//       })
//     }
//   }

//   return (
//     <div className="min-h-screen w-screen overflow-hidden bg-black relative">
//       <div
//         ref={wrapperRef}
//         className="absolute top-0 left-0"
//         style={{ willChange: "transform" }}
//       >
//         {tiledGrid.map((proj) => (
//           <div
//             key={proj.key}
//             className="absolute bg-black text-white shadow-md overflow-hidden border-[0.5px]  transition-transform duration-300 flex flex-col items-center py-5"
//             style={{
//               width: `${cardSize}px`,
//               height: `${cardSize}px`,
//               left: `${proj.x}px`,
//               top: `${proj.y}px`,
//             }}
//           >
//             <img
//               src={proj.image}
//               alt={proj.title}
//               className="w-4/5 h-2/3 object-cover"
//             />
//             <div className="p-4 text-center text-sm">{proj.title}</div>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }



import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { Draggable } from "gsap/Draggable"

// Register GSAP plugins
gsap.registerPlugin(Draggable)

const InfiniteProjectsGrid = () => {
  const containerRef = useRef(null)
  const gridRef = useRef(null)
  const [isDragging, setIsDragging] = useState(false)

  // Sample project data
  const projects = [
    { id: 1, title: "UXU", category: "Branding", bgColor: "#FF6B9D", size: "normal" },
    { id: 2, title: "Travel Hacker", category: "Web Design", bgColor: "#4ECDC4", size: "wide" },
    { id: 3, title: "Stop and Search", category: "Campaign", bgColor: "#FFE66D", size: "normal" },
    { id: 4, title: "Own The Blank Page", category: "Editorial", bgColor: "#00D9FF", size: "large" },
    { id: 5, title: "Portrait", category: "Photography", bgColor: "#FF8C42", size: "tall" },
    { id: 6, title: "Pinballer", category: "Game Design", bgColor: "#6C5CE7", size: "normal" },
    { id: 7, title: "Drifting", category: "Art Direction", bgColor: "#FD79A8", size: "normal" },
    { id: 8, title: "Character Design", category: "Illustration", bgColor: "#FDCB6E", size: "wide" },
    { id: 9, title: "Product Shot", category: "Photography", bgColor: "#E17055", size: "normal" },
    { id: 10, title: "Architecture", category: "Photography", bgColor: "#74B9FF", size: "normal" },
    { id: 11, title: "Minimalist", category: "Design", bgColor: "#A29BFE", size: "normal" },
    { id: 12, title: "Branding", category: "Identity", bgColor: "#FD79A8", size: "tall" },
  ]

  // Create multiple copies for infinite effect
  const infiniteProjects = [...projects, ...projects, ...projects, ...projects]

  useEffect(() => {
    const container = containerRef.current
    const grid = gridRef.current

    if (!container || !grid) return

    // Set up draggable
    const draggable = Draggable.create(grid, {
      type: "x,y",
      bounds: container,
      inertia: true,
      onDragStart: () => setIsDragging(true),
      onDragEnd: () => {
        setIsDragging(false)
        // Check if we need to loop the position
        checkBounds()
      },
      onThrowUpdate: checkBounds,
    })[0]

    function checkBounds() {
      const gridRect = grid.getBoundingClientRect()
      const containerRect = container.getBoundingClientRect()

      // Reset position when dragged too far to create infinite effect
      if (gridRect.right < containerRect.left) {
        gsap.set(grid, { x: 0 })
      } else if (gridRect.left > containerRect.right) {
        gsap.set(grid, { x: -gridRect.width / 2 })
      }

      if (gridRect.bottom < containerRect.top) {
        gsap.set(grid, { y: 0 })
      } else if (gridRect.top > containerRect.bottom) {
        gsap.set(grid, { y: -gridRect.height / 2 })
      }
    }

    // Auto-scroll animation when not dragging
    let autoScroll
    const startAutoScroll = () => {
      if (!isDragging) {
        autoScroll = gsap.to(grid, {
          x: "-=1",
          y: "-=0.5",
          duration: 0.1,
          repeat: -1,
          ease: "none",
          onRepeat: checkBounds,
        })
      }
    }

    const stopAutoScroll = () => {
      if (autoScroll) {
        autoScroll.kill()
      }
    }

    // Start auto-scroll after a delay
    const autoScrollTimer = setTimeout(startAutoScroll, 2000)

    // Stop auto-scroll on interaction
    container.addEventListener("mouseenter", stopAutoScroll)
    container.addEventListener("mouseleave", startAutoScroll)

    return () => {
      draggable.kill()
      stopAutoScroll()
      clearTimeout(autoScrollTimer)
      container.removeEventListener("mouseenter", stopAutoScroll)
      container.removeEventListener("mouseleave", startAutoScroll)
    }
  }, [isDragging])

  return (
    <div className="w-full h-screen bg-black overflow-hidden relative">
   
      {/* Infinite Grid Container */}
      <div
        ref={containerRef}
        className="w-full h-full relative cursor-grab active:cursor-grabbing"
        style={{ cursor: isDragging ? "grabbing" : "grab" }}
      >
        <div
          ref={gridRef}
          className="absolute grid grid-cols-8 gap-4 p-6"
          style={{
            width: "200vw",
            height: "200vh",
            gridTemplateRows: "repeat(auto-fit, minmax(150px, 1fr))",
          }}
        >
          {infiniteProjects.map((project, index) => (
            <ProjectCard key={`${project.id}-${index}`} project={project} index={index} />
          ))}
        </div>
      </div>
    </div>
  )

}

export default InfiniteProjectsGrid

const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null)

  useEffect(() => {
    const card = cardRef.current
    if (!card) return

    // Add hover animation
    const handleMouseEnter = () => {
      gsap.to(card, {
        scale: 1.05,
        duration: 0.3,
        ease: "power2.out",
      })
    }

    const handleMouseLeave = () => {
      gsap.to(card, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      })
    }

    card.addEventListener("mouseenter", handleMouseEnter)
    card.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      card.removeEventListener("mouseenter", handleMouseEnter)
      card.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return (
    <div
      ref={cardRef}
      className={`relative overflow-hidden rounded-lg cursor-pointer group ${
        project.size === "large"
          ? "col-span-2 row-span-2"
          : project.size === "wide"
            ? "col-span-2"
            : project.size === "tall"
              ? "row-span-2"
              : ""
      }`}
      style={{ backgroundColor: project.bgColor }}
    >
      <div className="aspect-square w-full h-full flex items-center justify-center p-4">
        {project.image ? (
          <img
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            className="w-full h-full object-cover rounded-md"
          />
        ) : (
          <div className="text-center">
            <h3 className="text-white font-bold text-lg mb-2">{project.title}</h3>
            <p className="text-white/80 text-sm">{project.category}</p>
          </div>
        )}
      </div>

      {/* Overlay with project info */}
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <div className="text-center text-white">
          <h3 className="font-bold text-lg mb-1">{project.title}</h3>
          <p className="text-sm opacity-80">{project.category}</p>
        </div>
      </div>
    </div>
  )
}