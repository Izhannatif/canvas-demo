// // import React, { useEffect, useRef } from "react"
// // import { gsap } from "gsap"
// // import { ScrollTrigger } from "gsap/ScrollTrigger"

// // // Register ScrollTrigger plugin with GSAP
// // gsap.registerPlugin(ScrollTrigger)

// // const WorkSection = () => {
// //   const sectionRef = useRef(null)
// //   const cardsRef = useRef([])

// //   // Set up GSAP and ScrollTrigger for animations
// //   useEffect(() => {
// //     const ctx = gsap.context(() => {
// //       gsap.fromTo(
// //         cardsRef.current,
// //         { y: "100", opacity: 0 }, // Start off-screen (below) and invisible
// //         {
// //           y: 0, // Move cards to their final position (stacked on top of each other)
// //           opacity: 1, // Fade in
// //           stagger: 0.3, // Stagger the cards' appearance
// //           ease: "power2.out", // Ease for smooth transition
// //           scrollTrigger: {
// //             trigger: sectionRef.current, // When the section enters the viewport
// //             start: "top top", // Start when the top of the section hits the top of the viewport
// //             end: `+=1500`, // End when the section reaches the top of the viewport
// //             scrub: true, // Scrub the scroll position to the animation
// //             pin: true, // Pin the section while scrolling
// //             markers: false, // Disable markers (set to true if debugging)
// //           },
// //         }
// //       )
// //     }, sectionRef)

// //     // Clean up on unmount
// //     return () => ctx.revert()
// //   }, [])

// //   // Array of projects (adjust as necessary)
// //   const projects = [
// //     "Project Alpha",
// //     "Project Beta",
// //     "Project Gamma",
// //     "Project Delta",
// //   ]

// //   return (
// //     <section
// //       ref={sectionRef}
// //       className="relative bg-black h-screen flex flex-col items-center justify-center overflow-hidden py-20"
// //     >
// //       <h2 className="text-4xl font-bold text-gray-800 mb-12">My Work</h2>
// //       <div className="flex flex-col items-center space-y-8">
// //         {projects.map((project, index) => (
// //           <div
// //             key={index}
// //             ref={(el) => (cardsRef.current[index] = el)}
// //             className="bg-black shadow-xl rounded-lg w-[600px] h-[500px] opacity-0 transform translate-y-[100vh] flex items-center justify-center text-xl font-semibold border border-white text-white absolute"
// //           >
// //             {project}
// //           </div>
// //         ))}
// //       </div>
// //     </section>
// //   )
// // }

// // export default WorkSection

// import React, { useEffect, useRef } from "react"
// import { gsap } from "gsap"
// import { ScrollTrigger } from "gsap/ScrollTrigger"

// // Register ScrollTrigger plugin with GSAP
// gsap.registerPlugin(ScrollTrigger)

// const WorkSection = () => {
//   const sectionRef = useRef(null)
//   const cardsRef = useRef([])

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.fromTo(
//         cardsRef.current,
//         { y: "100vh", opacity: 0 }, // Start off-screen (below) and invisible
//         {
//           y: (index) => 50 * index, // Offset Y for each card to create a stacking effect
//           opacity: 1,
//           stagger: 0.3, // Stagger the cards' appearance
//           ease: "power2.out", // Ease for smooth transition
//           scrollTrigger: {
//             trigger: sectionRef.current, // When the section enters the viewport
//             start: "top top", // Start when the top of the section hits the top of the viewport
//             end: "bottom top", // End when the section reaches the top of the viewport
//             scrub: true, // Scrub the scroll position to the animation
//             pin: true, // Pin the section while scrolling
//             markers: false, // Disable markers (set to true for debugging)
//           },
//         }
//       )
//     }, sectionRef)

//     return () => ctx.revert()
//   }, [])

//   const projects = [
//     "Project Alpha",
//     "Project Beta",
//     "Project Gamma",
//     "Project Delta",
//   ]

//   return (
//     <section
//       ref={sectionRef}
//       className="relative bg-black h-screen  overflow-hidden  w-screen"
//     >
//       <h1 className="text-white px-2 text-9xl font-black pb-10 ">MY WORK</h1>
//       <div className="relative flex flex-col items-center w-full ">
//         {projects.map((project, index) => (
//           <div
//             key={index}
//             ref={(el) => (cardsRef.current[index] = el)}
//             className="bg-black shadow-xl rounded-lg w-[600px] h-[500px] opacity-0 transform absolute top-0 left-1/2 -translate-x-1/2 flex items-center justify-center text-xl font-semibold text-gray-700 border border-white"
//           >
//             {project}
//           </div>
//         ))}
//       </div>
//     </section>
//   )
// }

// export default WorkSection

import React, { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { CursorTarget } from "@izhann/react-cursor-fx"
import { Link } from "react-router-dom"

// Register ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger)

const WorkSection = () => {
  const sectionRef = useRef(null)
  const cardsRef = useRef([])
  const buttonRef = useRef(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Create a GSAP timeline for animations
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=2500",
          scrub: true,
          pin: true,
        },
      })

      // Animate the cards to move from below and stagger their appearance
      tl.fromTo(
        cardsRef.current,
        { y: "100vh", opacity: 0 }, // Start off-screen (below) and invisible
        {
          y: (index) => 50 * index,
          opacity: 1,
          stagger: 1, // Stagger the cards' appearance
          ease: "power2.out", // Ease for smooth transition
        }
      )

      tl.to(cardsRef.current, {
        duration: 1,
        // use a function to determine x and y for each card
        x: (index) =>
          index < 2
            ? index === 0
              ? "-250%"
              : "-230%"
            : index === 2
            ? "150%"
            : "130%",
      })
      tl.to(
        cardsRef.current[2],
        {
          duration: 1,
          y: 0,
        },
        "<"
      )
      tl.to(
        cardsRef.current[3],
        {
          duration: 1,
          y: 50,
        },
        "<"
      )
      tl.to(buttonRef.current, {
        display: "block",
        opacity: 1,
        duration: 0.5,
      })
      tl.to({}, { duration: 1 })
    }, sectionRef)

    return () => ctx.revert() // Clean up the GSAP context
  }, [])

  const projects = [
    { name: "1", bgColor: "#782738" },
    { name: "2", bgColor: "#sad231" },
    { name: "3", bgColor: "#errw32" },
    { name: "4", bgColor: "#214565" },
  ]

  return (
    <section
      ref={sectionRef}
      className="relative bg-black h-screen overflow-hidden w-screen"
    >
      <h1 className="text-white px-2 text-7xl md:text-9xl font-black pb-0 pt-16 md:pt-0">
        MY WORK
      </h1>
      <div className="relative flex flex-col justify-center h-full items-center w-full">
        {projects.map((project, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className="bg-black w-[400px] h-[400px] md:w-[30vw] md:h-[50vh] opacity-0 transform absolute top-10 left-1/2 right-0 -translate-x-1/2 flex flex-col items-start justify-between text-xl font-semibold text-gray-700 border border-white py-3 px-5"
          >
            <div className="h-3/4 w-full flex flex-col gap-3">
              <div
                className={`text-xl text-white uppercase font-normal bg-[${project.bgColor}] `}
              >
                Project {project.name}
              </div>
              <div className="h-full w-full border border-white"></div>
            </div>
            <div className="text-xl text-white font-normal text-right w-full">
              case study.
            </div>
          </div>
        ))}
        <CursorTarget variant="workButton">
          <Link to={"/work"}>
            <div
              ref={buttonRef}
              className="text-black bg-white px-10 py-3 opacity-0 hidden"
            >
              see all work.
            </div>
          </Link>
        </CursorTarget>
      </div>
    </section>
  )
}

export default WorkSection

//   tl.to(cardsRef.current[0], {
//     x: "-150%",
//     duration: 1,
//   })
//   tl.to(cardsRef.current[1], {
//     x: "-130%",
//     duration: 1,
//   })
//   tl.to(cardsRef.current[2], {
//     y: 0,
//     x: "150%",
//     duration: 1,
//   })
//   tl.to(cardsRef.current[3], {
//     y: 50,
//     x: "130%",
//     duration: 1,
//   })
