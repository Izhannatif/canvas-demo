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

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Cursor, CursorTarget } from "@izhann/react-cursor-fx";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

// Register ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

const WorkSection = () => {
  const sectionRef = useRef(null);

  const projects = [
    {
      name: "Digital Sponge",
      bgColor: "#fff",
      imgSrc: "/Digitalsponge.png",
      webUrl: "https://digital-sponge2.vercel.app",
      type:'Design Agency'
    },
    {
      name: "Aarab Khan",
      bgColor: "#fff",
      imgSrc: "/aarabkhan.png",
      webUrl: "https://aarabkhan2.vercel.app",
      type:'Client Portfolio'
    },
    {
      name: "Taurus Renewable Energy",
      bgColor: "#fff",
      imgSrc: "/TaurusRenewable.png",
      webUrl: "https://darkslate-barracuda-899487.hostingersite.com",
      type:'Corporate'
    },
    {
      name: "777",
      bgColor: "#fff",
      imgSrc: "/nic777.png",
      webUrl: "https://nic777.vercel.app",
      type:'Product'
    },
    {
      name: "XIMM",
      bgColor: "#fff",
      imgSrc: "/ximm.png",
      webUrl: "https://ximm-official.vercel.app",
      type:'Branding'
    },
    {
      name: "Cursor FX",
      bgColor: "#fff",
      imgSrc: "/Digitalsponge.png",
      webUrl: "https://react-cursorfx.vercel.app/",
      type:'Open Source'
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative bg-white  overflow-hidden w-screen flex justify-between flex-col"
    >
      <h1 className="text-black px-2 text-7xl md:text-9xl  pb-0 pt-16 md:pt-0 seventy -rotate-6 mb-20">
        Recent work
      </h1>
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10 px-10">
        {projects &&
          projects.map((project, index) => (
            <div key={index}>
              <div className=" border rounded-3xl">
                <img className="rounded-3xl object-contain" src={project.imgSrc} alt="" />
                <div className="flex justify-between items-end p-5">
                  <div>
                    <p className=" text-2xl">{project.name}</p>
                    <p className="text-xs">Full case study coming soon.</p>
                  </div>
                  <CursorTarget variant="button">
                    <a href={project.webUrl} target="_blank" rel="noreferrer">
                      
                      <ArrowUpRight
                        size={35}
                        className="border rounded-full p-1"
                      />
                    </a>
                  </CursorTarget>
                </div>
              </div>
            </div>
          ))}
      </div> */}
      <div className="flex-col flex gap-10 py-10 px-10">
        {projects &&
          projects.map((project, index) => (
            <div className="h-max w-full border-b pb-10" key={index}>
              <div className="flex flex-col justify-between h-full">
                <div className="grid grid-cols-2">
                  <div className="flex justify-between items-end p-10">
                    <div>
                      <p className=" text-4xl uppercase">{project.name}</p>
                      <p className="text-xs">Full case study coming soon.</p>
                    </div>
                    <CursorTarget variant="button">
                      <a href={project.webUrl} target="_blank" rel="noreferrer">
                        <ArrowUpRight
                          size={35}
                          className="border rounded-full p-1"
                        />
                      </a>
                    </CursorTarget>
                  </div>
                  <div className="p-10">
                    <p className="text-xl">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Distinctio totam sunt aut quidem quos fugit, et similique.
                      Nisi debitis similique ratione doloribus asperiores sint
                      voluptatibus quo, repudiandae eum vero delectus?
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-2 ">
                  <div className="self-end p-10">
                    <p>Tech Stack:</p>
                    <p>React JSX</p>
                    <p>Headless Wordpress CMS</p>
                    <p>GSAP</p>
                    <p>Framer Motion</p>
                    <p>Vercel Deployment</p>
                  </div>

                  <img
                    className="rounded-3xl object-contain "
                    src={project.imgSrc}
                    alt=""
                  />
                </div>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default WorkSection;
