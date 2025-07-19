// // // // // // // import React, { useEffect, useRef } from 'react';
// // // // // // // import { gsap } from 'gsap';
// // // // // // // import { ScrollTrigger } from 'gsap/ScrollTrigger';

// // // // // // // gsap.registerPlugin(ScrollTrigger);

// // // // // // // const CareerJourney = () => {
// // // // // // //   const containerRef = useRef(null);
// // // // // // //   const pathRef = useRef(null);

// // // // // // //   useEffect(() => {
// // // // // // //     const path = pathRef.current;
// // // // // // //     const pathLength = path.getTotalLength();

// // // // // // //     // Set initial styles
// // // // // // //     path.style.strokeDasharray = pathLength;
// // // // // // //     path.style.strokeDashoffset = pathLength;

// // // // // // //     const ctx = gsap.context(() => {
// // // // // // //       gsap.to(path, {
// // // // // // //         strokeDashoffset: 0,
// // // // // // //         scrollTrigger: {
// // // // // // //           trigger: containerRef.current,
// // // // // // //           start: 'top top',
// // // // // // //           end: '+=3000', // Adjust based on your scroll needs
// // // // // // //           scrub: true,
// // // // // // //           pin: true,
// // // // // // //         },
// // // // // // //         ease: 'none',
// // // // // // //       });
// // // // // // //     }, containerRef);

// // // // // // //     return () => ctx.revert();
// // // // // // //   }, []);

// // // // // // //   return (
// // // // // // //     <section className="career-journey-container" ref={containerRef}>
// // // // // // //       <svg
// // // // // // //         viewBox="0 0 100 1500"
// // // // // // //         className="career-path-svg"
// // // // // // //         xmlns="http://www.w3.org/2000/svg"
// // // // // // //       >
// // // // // // //         {/* Main path line */}
// // // // // // //         <path
// // // // // // //           ref={pathRef}
// // // // // // //           d="M50 0 L50 1500"
// // // // // // //           stroke="#4ade80"
// // // // // // //           strokeWidth="4"
// // // // // // //           fill="none"
// // // // // // //         />

// // // // // // //         {/* Career dots (example: 5 points) */}
// // // // // // //         {[0, 300, 600, 900, 1200].map((y, index) => (
// // // // // // //           <circle key={index} cx="50" cy={y} r="10" fill="#4ade80" />
// // // // // // //         ))}
// // // // // // //       </svg>

// // // // // // //       <div className="career-labels">
// // // // // // //         {/* Optional text labels per point */}
// // // // // // //         {['Start', 'Junior Dev', 'Mid Dev', 'Senior Dev', 'Lead'].map((label, i) => (
// // // // // // //           <div
// // // // // // //             key={i}
// // // // // // //             className="career-label"
// // // // // // //             style={{ top: `${[0, 300, 600, 900, 1200][i]}px` }}
// // // // // // //           >
// // // // // // //             {label}
// // // // // // //           </div>
// // // // // // //         ))}
// // // // // // //       </div>
// // // // // // //     </section>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default CareerJourney;
// // // // // // import React, { useRef, useEffect } from "react";
// // // // // // import { gsap } from "gsap";
// // // // // // import { ScrollTrigger } from "gsap/ScrollTrigger";

// // // // // // gsap.registerPlugin(ScrollTrigger);

// // // // // // const milestones = [
// // // // // //   {
// // // // // //     x: 0,
// // // // // //     label: "Started University",
// // // // // //     company: "SZABIST",
// // // // // //     year: "September 2020",
// // // // // //   },
// // // // // //   { x: 200, label: "Up's and Down's", company: "COVID", year: "Year 2021" },
// // // // // //   { x: 400, label: "Intern", company: "Jaffer Brothers", year: "July 2022" },
// // // // // //   {
// // // // // //     x: 600,
// // // // // //     label: "Contract Full Stack Developer",
// // // // // //     company: "EncoreMnD",
// // // // // //     year: "November 2022",
// // // // // //   },
// // // // // //   {
// // // // // //     x: 800,
// // // // // //     label: "Freelance Web Developer",
// // // // // //     company: "INT Digital",
// // // // // //     year: "June 2023",
// // // // // //   },
// // // // // //   { x: 1000, label: "Graduated", company: "SZABIST", year: "June 2024" },
// // // // // //   {
// // // // // //     x: 1000,
// // // // // //     label: "Started a Venture with EncoreMnD",
// // // // // //     company: "SwiftCoda",
// // // // // //     year: "July 2024",
// // // // // //   },
// // // // // //   {
// // // // // //     x: 1200,
// // // // // //     label: "Frontend Engineer",
// // // // // //     company: "Digitz Digitas",
// // // // // //     year: "December 2024",
// // // // // //   },
// // // // // // ];

// // // // // // const CareerJourney = () => {
// // // // // //   const containerRef = useRef(null);
// // // // // //   const horizontalRef = useRef(null);
// // // // // //   const pathRef = useRef(null);

// // // // // //   useEffect(() => {
// // // // // //     const path = pathRef.current;
// // // // // //     const totalLength = path.getTotalLength();

// // // // // //     path.style.strokeDasharray = totalLength;
// // // // // //     path.style.strokeDashoffset = totalLength;

// // // // // //     const scrollWidth = horizontalRef.current.scrollWidth;
// // // // // //     const scrollDistance = scrollWidth - window.innerWidth;

// // // // // //     const ctx = gsap.context(() => {
// // // // // //       // Horizontal scroll movement
// // // // // //       gsap.to(horizontalRef.current, {
// // // // // //         x: -scrollDistance,
// // // // // //         ease: "none",
// // // // // //         scrollTrigger: {
// // // // // //           trigger: containerRef.current,
// // // // // //           start: "top top",
// // // // // //           end: `+=${scrollDistance}`,
// // // // // //           scrub: true,
// // // // // //           pin: true,
// // // // // //           anticipatePin: 1,
// // // // // //         },
// // // // // //       });

// // // // // //       // SVG line drawing
// // // // // //       gsap.to(path, {
// // // // // //         strokeDashoffset: 0,
// // // // // //         ease: "none",
// // // // // //         scrollTrigger: {
// // // // // //           trigger: containerRef.current,
// // // // // //           start: "top top",
// // // // // //           end: `+=${scrollDistance}`,
// // // // // //           scrub: true,
// // // // // //         },
// // // // // //       });
// // // // // //     }, containerRef);

// // // // // //     return () => ctx.revert();
// // // // // //   }, []);

// // // // // //   return (
// // // // // //     <section
// // // // // //       ref={containerRef}
// // // // // //       className="relative h-screen w-full overflow-hidden bg-black"
// // // // // //     >
// // // // // //       <div
// // // // // //         ref={horizontalRef}
// // // // // //         className="flex items-center h-full w-[2000px] relative"
// // // // // //       >
// // // // // //         <svg
// // // // // //           viewBox="0 0 1600 100"
// // // // // //           className="absolute top-1/2 -translate-y-1/2 h-[4rem] w-[1600px]"
// // // // // //           xmlns="http://www.w3.org/2000/svg"
// // // // // //         >
// // // // // //           {/* Horizontal path */}
// // // // // //           <path
// // // // // //             ref={pathRef}
// // // // // //             d="M 0 50  H 2000"
// // // // // //             stroke="#4ade80"
// // // // // //             strokeWidth="4"
// // // // // //             fill="none"
// // // // // //           />

// // // // // //           {/* Dots on the path */}
// // // // // //           {milestones.map((milestone, i) => (
// // // // // //             <circle key={i} cx={milestone.x} cy="50" r="8" fill="#4ade80" />
// // // // // //           ))}
// // // // // //         </svg>

// // // // // //         {/* Labels for milestones */}
// // // // // //         {milestones.map((milestone, i) => (
// // // // // //           <div
// // // // // //             key={i}
// // // // // //             className="absolute top-[calc(50%-2rem)] -translate-y-full text-sm font-semibold text-white"
// // // // // //             style={{ left: `${milestone.x}px` }}
// // // // // //           >
// // // // // //             {milestone.label}
// // // // // //           </div>
// // // // // //         ))}
// // // // // //       </div>
// // // // // //     </section>
// // // // // //   );
// // // // // // };

// // // // // // export default CareerJourney;


// // // // // import React, { useRef, useEffect } from 'react';
// // // // // import { gsap } from 'gsap';
// // // // // import { ScrollTrigger } from 'gsap/ScrollTrigger';

// // // // // gsap.registerPlugin(ScrollTrigger);

// // // // // const milestones = [
// // // // //   {
// // // // //     x: 0,
// // // // //     label: 'Started University',
// // // // //     company: 'SZABIST',
// // // // //     year: 'September 2020',
// // // // //   },
// // // // //   { x: 200, label: "Up's and Down's", company: 'COVID', year: 'Year 2021' },
// // // // //   { x: 400, label: 'Intern', company: 'Jaffer Brothers', year: 'July 2022' },
// // // // //   {
// // // // //     x: 600,
// // // // //     label: 'Contract Full Stack Developer',
// // // // //     company: 'EncoreMnD',
// // // // //     year: 'November 2022',
// // // // //   },
// // // // //   {
// // // // //     x: 800,
// // // // //     label: 'Freelance Web Developer',
// // // // //     company: 'INT Digital',
// // // // //     year: 'June 2023',
// // // // //   },
// // // // //   { x: 1000, label: 'Graduated', company: 'SZABIST', year: 'June 2024' },
// // // // //   {
// // // // //     x: 1100,
// // // // //     label: 'Started a Venture',
// // // // //     company: 'SwiftCoda',
// // // // //     year: 'July 2024',
// // // // //   },
// // // // //   {
// // // // //     x: 1300,
// // // // //     label: 'Frontend Engineer',
// // // // //     company: 'Digitz Digitas',
// // // // //     year: 'December 2024',
// // // // //   },
// // // // // ];

// // // // // const CareerJourney = () => {
// // // // //   const containerRef = useRef(null);
// // // // //   const horizontalRef = useRef(null);
// // // // //   const pathRef = useRef(null);

// // // // //   useEffect(() => {
// // // // //     const path = pathRef.current;
// // // // //     const totalLength = path.getTotalLength();

// // // // //     path.style.strokeDasharray = totalLength;
// // // // //     path.style.strokeDashoffset = totalLength;

// // // // //     const scrollWidth = horizontalRef.current.scrollWidth;
// // // // //     const scrollDistance = scrollWidth - window.innerWidth;

// // // // //     const ctx = gsap.context(() => {
// // // // //       // Horizontal scroll effect
// // // // //       gsap.to(horizontalRef.current, {
// // // // //         x: -scrollDistance,
// // // // //         ease: 'none',
// // // // //         scrollTrigger: {
// // // // //           trigger: containerRef.current,
// // // // //           start: 'top top',
// // // // //           end: `+=${scrollDistance}`,
// // // // //           scrub: true,
// // // // //           pin: true,
// // // // //         },
// // // // //       });

// // // // //       // SVG draw effect
// // // // //       gsap.to(path, {
// // // // //         strokeDashoffset: 0,
// // // // //         ease: 'none',
// // // // //         scrollTrigger: {
// // // // //           trigger: containerRef.current,
// // // // //           start: 'top top',
// // // // //           end: `+=${scrollDistance}`,
// // // // //           scrub: true,
// // // // //         },
// // // // //       });
// // // // //     }, containerRef);

// // // // //     return () => ctx.revert();
// // // // //   }, []);

// // // // //   return (
// // // // //     <section ref={containerRef} className="relative h-screen w-full overflow-hidden bg-black">
// // // // //       <div
// // // // //         ref={horizontalRef}
// // // // //         className="flex items-center h-full w-[2000px] relative px-10"
// // // // //       >
// // // // //         {/* Curved SVG */}
// // // // //         <svg
// // // // //           viewBox="0 0 1400 200"
// // // // //           className="absolute top-1/2 -translate-y-1/2 h-[200px] w-[1400px]"
// // // // //           xmlns="http://www.w3.org/2000/svg"
// // // // //         >
// // // // //           <path
// // // // //             ref={pathRef}
// // // // //             d="M 0 100 
// // // // //               C 150 50, 250 150, 300 100 
// // // // //               S 450 50, 500 100 
// // // // //               S 650 150, 700 100 
// // // // //               S 850 50, 900 100 
// // // // //               S 1050 150, 1100 100 
// // // // //               S 1250 50, 1300 100"
// // // // //             stroke="#22d3ee"
// // // // //             strokeWidth="5"
// // // // //             fill="none"
// // // // //           />

// // // // //           {/* Milestone Dots */}
// // // // //           {milestones.map((m, i) => (
// // // // //             <circle
// // // // //               key={i}
// // // // //               cx={m.x}
// // // // //               cy="100"
// // // // //               r="8"
// // // // //               fill="#22d3ee"
// // // // //               stroke="white"
// // // // //               strokeWidth="2"
// // // // //             />
// // // // //           ))}
// // // // //         </svg>

// // // // //         {/* Milestone Labels */}
// // // // //         {milestones.map((m, i) => (
// // // // //           <div
// // // // //             key={i}
// // // // //             className="absolute -translate-y-[140%] text-white text-sm text-center max-w-[160px]"
// // // // //             style={{ left: `${m.x}px`, top: '50%' }}
// // // // //           >
// // // // //             <div className="font-semibold">{m.label}</div>
// // // // //             <div className="text-xs text-gray-300">{m.company}</div>
// // // // //             <div className="text-xs text-gray-400">{m.year}</div>
// // // // //           </div>
// // // // //         ))}
// // // // //       </div>
// // // // //     </section>
// // // // //   );
// // // // // };

// // // // // export default CareerJourney;



// // // // import React, { useEffect, useRef } from 'react';
// // // // import { gsap } from 'gsap';
// // // // import { ScrollTrigger } from 'gsap/ScrollTrigger';

// // // // gsap.registerPlugin(ScrollTrigger);

// // // // const milestones = [
// // // //   {
// // // //     label: 'Started University',
// // // //     company: 'SZABIST',
// // // //     year: 'September 2020',
// // // //   },
// // // //   { label: "Up's and Down's", company: 'COVID', year: 'Year 2021' },
// // // //   { label: 'Intern', company: 'Jaffer Brothers', year: 'July 2022' },
// // // //   {
// // // //     label: 'Contract Full Stack Developer',
// // // //     company: 'EncoreMnD',
// // // //     year: 'November 2022',
// // // //   },
// // // //   {
// // // //     label: 'Freelance Web Developer',
// // // //     company: 'INT Digital',
// // // //     year: 'June 2023',
// // // //   },
// // // //   { label: 'Graduated', company: 'SZABIST', year: 'June 2024' },
// // // //   {
// // // //     label: 'Started a Venture',
// // // //     company: 'SwiftCoda',
// // // //     year: 'July 2024',
// // // //   },
// // // //   {
// // // //     label: 'Frontend Engineer',
// // // //     company: 'Digitz Digitas',
// // // //     year: 'December 2024',
// // // //   },
// // // // ];

// // // // const CareerJourneyVertical = () => {
// // // //   const pathRef = useRef(null);
// // // //   const containerRef = useRef(null);

// // // //   useEffect(() => {
// // // //     const path = pathRef.current;
// // // //     const totalLength = path.getTotalLength();

// // // //     path.style.strokeDasharray = totalLength;
// // // //     path.style.strokeDashoffset = totalLength;

// // // //     const ctx = gsap.context(() => {
// // // //       gsap.to(path, {
// // // //         strokeDashoffset: 0,
// // // //         ease: 'none',
// // // //         scrollTrigger: {
// // // //           trigger: containerRef.current,
// // // //           start: 'top top',
// // // //           end: 'bottom bottom',
// // // //           scrub: true,
// // // //         },
// // // //       });
// // // //     }, containerRef);

// // // //     return () => ctx.revert();
// // // //   }, []);

// // // //   return (
// // // //     <section ref={containerRef} className="bg-black text-white py-20 relative">
// // // //       <div className="relative w-full max-w-4xl mx-auto flex">
// // // //         {/* SVG Path */}
// // // //         <div className="relative w-24">
// // // //           <svg
// // // //             viewBox="0 0 100 1000"
// // // //             className="h-full w-full"
// // // //             xmlns="http://www.w3.org/2000/svg"
// // // //             preserveAspectRatio="none"
// // // //           >
// // // //             <path
// // // //               ref={pathRef}
// // // //               d="
// // // //                 M 50 0
// // // //                 C 50 100, 50 100, 50 200
// // // //                 S 50 300, 50 400
// // // //                 S 50 500, 50 600
// // // //                 S 50 700, 50 800
// // // //                 S 50 900, 50 1000
// // // //               "
// // // //               stroke="#22d3ee"
// // // //               strokeWidth="4"
// // // //               fill="none"
// // // //             />
// // // //             {/* Dots */}
// // // //             {milestones.map((_, i) => (
// // // //               <circle
// // // //                 key={i}
// // // //                 cx="50"
// // // //                 cy={(i * 125) + 125}
// // // //                 r="6"
// // // //                 fill="#22d3ee"
// // // //                 stroke="white"
// // // //                 strokeWidth="2"
// // // //               />
// // // //             ))}
// // // //           </svg>
// // // //         </div>

// // // //         {/* Labels */}
// // // //         <div className="flex flex-col gap-32 pl-8">
// // // //           {milestones.map((m, i) => (
// // // //             <div key={i}>
// // // //               <div className="text-lg font-semibold">{m.label}</div>
// // // //               <div className="text-sm text-gray-400">{m.company}</div>
// // // //               <div className="text-xs text-gray-500">{m.year}</div>
// // // //             </div>
// // // //           ))}
// // // //         </div>
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // };

// // // // export default CareerJourneyVertical;



// // // import { useEffect, useRef, useCallback } from "react"
// // // import { gsap } from "gsap"
// // // import { ScrollTrigger } from "gsap/ScrollTrigger"
// // // import { CursorTarget } from "@izhann/react-cursor-fx" // Assuming this is available
// // // import useFontFamily from "./projectgrid/useFontFamily" // Reusing the font hook

// // // gsap.registerPlugin(ScrollTrigger)

// // // const milestones = [
// // //   { label: "Started University", company: "SZABIST", year: "September 2020", xOffset: -150 }, // Left
// // //   { label: "Up's and Down's", company: "COVID", year: "Year 2021", xOffset: 150 }, // Right
// // //   { label: "Intern", company: "Jaffer Brothers", year: "July 2022", xOffset: -180 }, // Left
// // //   { label: "Contract Full Stack Developer", company: "EncoreMnD", year: "November 2022", xOffset: 170 }, // Right
// // //   { label: "Freelance Web Developer", company: "INT Digital", year: "June 2023", xOffset: -160 }, // Left
// // //   { label: "Graduated", company: "SZABIST", year: "June 2024", xOffset: 150 }, // Right
// // //   { label: "Started a Venture", company: "SwiftCoda", year: "July 2024", xOffset: -170 }, // Left
// // //   { label: "Frontend Engineer", company: "Digitz Digitas", year: "December 2024", xOffset: 160 }, // Right
// // // ]

// // // const CareerJourneyVertical = () => {
// // //   const pathRef = useRef(null)
// // //   const containerRef = useRef(null)
// // //   const milestoneRefs = useRef([])
// // //   const dotRefs = useRef([])
// // //   const fontFamily = useFontFamily()

// // //   // Function to generate a curved path dynamically
// // //   const generateCurvedPath = useCallback(() => {
// // //     const pathPoints = []
// // //     const svgHeight = 1000 // Matches viewBox height
// // //     const svgWidth = 100 // Matches viewBox width
// // //     const centerY = svgWidth / 2 // Center X for the path

// // //     milestones.forEach((m, i) => {
// // //       const yPos = i * (svgHeight / milestones.length) + svgHeight / (milestones.length * 2) // Distribute dots evenly
// // //       const xPos = centerY + (m.xOffset > 0 ? 20 : -20) // Slight offset for path curve

// // //       pathPoints.push({ x: xPos, y: yPos })
// // //     })

// // //     let d = `M ${pathPoints[0].x} ${pathPoints[0].y}`

// // //     for (let i = 0; i < pathPoints.length - 1; i++) {
// // //       const p1 = pathPoints[i]
// // //       const p2 = pathPoints[i + 1]

// // //       // Control points for a smooth curve
// // //       const cp1x = p1.x
// // //       const cp1y = p1.y + (p2.y - p1.y) / 2
// // //       const cp2x = p2.x
// // //       const cp2y = p2.y - (p2.y - p1.y) / 2

// // //       d += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p2.x} ${p2.y}`
// // //     }
// // //     return d
// // //   }, [milestones])

// // //   useEffect(() => {
// // //     const path = pathRef.current
// // //     if (!path) return

// // //     const totalLength = path.getTotalLength()
// // //     path.style.strokeDasharray = totalLength
// // //     path.style.strokeDashoffset = totalLength

// // //     const ctx = gsap.context(() => {
// // //       const tl = gsap.timeline({
// // //         scrollTrigger: {
// // //           trigger: containerRef.current,
// // //           start: "top center", // Start when the top of the section hits the center of the viewport
// // //           end: "bottom top", // End when the bottom of the section leaves the top of the viewport
// // //           scrub: 1, // Smooth scrubbing
// // //           pin: false, // No pinning for this section
// // //           // markers: true, // For debugging
// // //         },
// // //       })

// // //       // Animate path drawing
// // //       tl.to(path, {
// // //         strokeDashoffset: 1,
// // //         ease: "none",
// // //         duration: 1, // Duration relative to scrollTrigger's end
// // //       })

// // //       // Animate dots and labels
// // //       milestones.forEach((m, i) => {
// // //         const dot = dotRefs.current[i]
// // //         const label = milestoneRefs.current[i]

// // //         // Calculate the scroll progress at which this dot should be fully drawn
// // //         const dotProgress = (i + 0.5) / milestones.length // 0.5 to center on the dot's segment

// // //         // Animate dot appearance
// // //         tl.fromTo(
// // //           dot,
// // //           { scale: 0, opacity: 0 },
// // //           { scale: 1, opacity: 1, ease: "back.out(1.7)", duration: 0.2 },
// // //           dotProgress, // Position animation on the main timeline
// // //         )

// // //         // Animate label appearance (from its offset position)
// // //         tl.fromTo(
// // //           label,
// // //           {
// // //             opacity: 0,
// // //             x: m.xOffset > 0 ? -50 : 50, // Start from opposite side
// // //             y: 20,
// // //           },
// // //           {
// // //             opacity: 1,
// // //             x: 0,
// // //             y: 0,
// // //             ease: "power2.out",
// // //             duration: 0.5,
// // //           },
// // //           dotProgress, // Position animation on the main timeline
// // //         )
// // //       })
// // //     }, containerRef)

// // //     return () => ctx.revert()
// // //   }, [milestones, generateCurvedPath]) // Re-run if milestones or path generation logic changes

// // //   const curvedPathD = generateCurvedPath()

// // //   return (
// // //     <section ref={containerRef} className="bg-black text-white py-20 relative min-h-[150vh] overflow-hidden">
// // //       <div className="relative w-full max-w-4xl mx-auto flex justify-center">
// // //         {/* SVG Path and Dots */}
// // //         <div className="absolute inset-0 flex justify-center items-start pt-20">
// // //           <svg
// // //             viewBox="0 0 100 1000"
// // //             className="h-full w-24" // Fixed width for SVG container
// // //             xmlns="http://www.w3.org/2000/svg"
// // //             preserveAspectRatio="xMidYMid slice" // Adjust to fill height while maintaining aspect ratio
// // //           >
// // //             <path ref={pathRef} d={curvedPathD} stroke="#22d3ee" strokeWidth="2" fill="none" />
// // //             {/* Dots */}
// // //             {milestones.map((m, i) => {
// // //               const yPos = i * (1000 / milestones.length) + 1000 / (milestones.length * 2)
// // //               const xPos = 50 + (m.xOffset > 0 ? 20 : -20) // Match path's general x-offset for dots
// // //               return (
// // //                 <circle
// // //                   key={i}
// // //                   ref={(el) => (dotRefs.current[i] = el)}
// // //                   cx={xPos}
// // //                   cy={yPos}
// // //                   r="4"
// // //                   fill="#22d3ee"
// // //                   stroke="white"
// // //                   strokeWidth="1"
// // //                   className="opacity- scale-" // Initial state for animation
// // //                 />
// // //               )
// // //             })}
// // //           </svg>
// // //         </div>

// // //         {/* Labels */}
// // //         <div className="relative w-full flex flex-col items-center">
// // //           {milestones.map((m, i) => {
// // //             const yOffset = i * (100 / milestones.length) + 100 / (milestones.length * 2) // Vertical position in percentage
// // //             const isRight = m.xOffset > 0

// // //             return (
// // //               <div
// // //                 key={i}
// // //                 ref={(el) => (milestoneRefs.current[i] = el)}
// // //                 className={`absolute w-64 p-4 rounded-lg text-white opacity-0 ${
// // //                   isRight ? "left-1/2 ml-16" : "right-1/2 mr-16 text-right"
// // //                 }`}
// // //                 style={{
// // //                   top: `${yOffset}vh`, // Position based on viewport height
// // //                   transform: `translateY(-50%) translateX(${isRight ? "0" : "0"})`, // Center vertically
// // //                   fontFamily: fontFamily,
// // //                 }}
// // //               >
// // //                 <CursorTarget variant="button">
// // //                   {" "}
// // //                   {/* Example cursor variant */}
// // //                   <div className="text-lg font-semibold">{m.label}</div>
// // //                   <div className="text-sm text-gray-400">{m.company}</div>
// // //                   <div className="text-xs text-gray-500">{m.year}</div>
// // //                 </CursorTarget>
// // //               </div>
// // //             )
// // //           })}
// // //         </div>
// // //       </div>
// // //     </section>
// // //   )
// // // }

// // // export default CareerJourneyVertical



// // "use client"

// // import { useEffect, useRef, useCallback, useState } from "react"
// // import { gsap } from "gsap"
// // import { ScrollTrigger } from "gsap/ScrollTrigger"
// // import { CursorTarget } from "@izhann/react-cursor-fx" // Assuming this is available
// // import useFontFamily from "./projectgrid/useFontFamily" // Reusing the font hook

// // gsap.registerPlugin(ScrollTrigger)

// // const milestones = [
// //   { label: "Started University", company: "SZABIST", year: "September 2020", xOffset: -200 }, // Left
// //   { label: "Up's and Down's", company: "COVID", year: "Year 2021", xOffset: 200 }, // Right
// //   { label: "Intern", company: "Jaffer Brothers", year: "July 2022", xOffset: -250 }, // Left
// //   { label: "Contract Full Stack Developer", company: "EncoreMnD", year: "November 2022", xOffset: 230 }, // Right
// //   { label: "Freelance Web Developer", company: "INT Digital", year: "June 2023", xOffset: -220 }, // Left
// //   { label: "Graduated", company: "SZABIST", year: "June 2024", xOffset: 210 }, // Right
// //   { label: "Started a Venture", company: "SwiftCoda", year: "July 2024", xOffset: -240 }, // Left
// //   { label: "Frontend Engineer", company: "Digitz Digitas", year: "December 2024", xOffset: 220 }, // Right
// // ]

// // const CareerJourneyVertical = () => {
// //   const pathRef = useRef(null)
// //   const containerRef = useRef(null)
// //   const milestoneRefs = useRef([])
// //   const dotRefs = useRef([])
// //   const fontFamily = useFontFamily()

// //   const [svgWidth, setSvgWidth] = useState(0)
// //   const [svgHeight, setSvgHeight] = useState(0)

// //   // Update SVG dimensions on mount and resize
// //   useEffect(() => {
// //     const updateDimensions = () => {
// //       if (containerRef.current) {
// //         setSvgWidth(window.innerWidth) // SVG takes full window width
// //         // Use scrollHeight to ensure SVG covers the entire scrollable content area
// //         setSvgHeight(containerRef.current.scrollHeight)
// //       }
// //     }

// //     updateDimensions() // Initial set
// //     window.addEventListener("resize", updateDimensions)
// //     return () => window.removeEventListener("resize", updateDimensions)
// //   }, [])

// //   // Function to generate a curved path dynamically
// //   const generateCurvedPath = useCallback(() => {
// //     if (svgWidth === 0 || svgHeight === 0) return "" // Don't generate if dimensions are not set

// //     const pathPoints = []
// //     const centerX = svgWidth / 2

// //     // Calculate max absolute xOffset to normalize for path deviation
// //     const maxAbsXOffset = Math.max(...milestones.map((m) => Math.abs(m.xOffset)))
// //     // Scale factor to control how much the path deviates horizontally
// //     // Let's say max deviation is 30% of half screen width
// //     const pathDeviationScale = (svgWidth * 0.3) / maxAbsXOffset

// //     milestones.forEach((m, i) => {
// //       // Distribute points evenly along the full height of the SVG
// //       const yPos = (i / (milestones.length - 1)) * svgHeight
// //       const xPos = centerX + m.xOffset * pathDeviationScale
// //       pathPoints.push({ x: xPos, y: yPos })
// //     })

// //     let d = `M ${pathPoints[0].x} ${pathPoints[0].y}`

// //     for (let i = 0; i < pathPoints.length - 1; i++) {
// //       const p1 = pathPoints[i]
// //       const p2 = pathPoints[i + 1]

// //       // Control points for a smooth curve, adjusted for more aesthetic variation
// //       // These control points create a more organic, less uniform curve
// //       const cp1x = p1.x + (p2.x - p1.x) * 0.3
// //       const cp1y = p1.y + (p2.y - p1.y) * 0.5
// //       const cp2x = p2.x - (p2.x - p1.x) * 0.3
// //       const cp2y = p2.y - (p2.y - p1.y) * 0.5

// //       d += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p2.x} ${p2.y}`
// //     }
// //     return d
// //   }, [milestones, svgWidth, svgHeight])

// //   const curvedPathD = generateCurvedPath()

// //   useEffect(() => {
// //     const path = pathRef.current
// //     if (!path || !curvedPathD) return // Ensure path and D attribute are ready

// //     const totalLength = path.getTotalLength()
// //     path.style.strokeDasharray = totalLength
// //     path.style.strokeDashoffset = totalLength

// //     const ctx = gsap.context(() => {
// //       const tl = gsap.timeline({
// //         scrollTrigger: {
// //           trigger: containerRef.current,
// //           start: "top center", // Start when the top of the section hits the center of the viewport
// //           end: "bottom top", // End when the bottom of the section leaves the top of the viewport
// //           scrub: 1, // Smooth scrubbing
// //           // markers: true, // For debugging
// //         },
// //       })

// //       // Animate path drawing
// //       tl.to(path, {
// //         strokeDashoffset: 0,
// //         ease: "none",
// //         duration: 1, // Duration relative to scrollTrigger's end
// //       })

// //       // Animate dots and labels
// //       milestones.forEach((m, i) => {
// //         const dot = dotRefs.current[i]
// //         const label = milestoneRefs.current[i]

// //         // Calculate the scroll progress at which this dot should be fully drawn
// //         // Distribute animations evenly across the scroll duration
// //         const dotProgress = i / (milestones.length - 1)

// //         // Animate dot appearance
// //         tl.fromTo(
// //           dot,
// //           { scale: 0, opacity: 0 },
// //           { scale: 1, opacity: 1, ease: "back.out(1.7)", duration: 0.2 },
// //           dotProgress, // Position animation on the main timeline
// //         )

// //         // Animate label appearance (from its offset position)
// //         tl.fromTo(
// //           label,
// //           {
// //             opacity: 0,
// //             x: m.xOffset > 0 ? -50 : 50, // Start from opposite side
// //             y: 20,
// //           },
// //           {
// //             opacity: 1,
// //             x: 0,
// //             y: 0,
// //             ease: "power2.out",
// //             duration: 0.5,
// //           },
// //           dotProgress, // Position animation on the main timeline
// //         )
// //       })
// //     }, containerRef)

// //     return () => ctx.revert()
// //   }, [milestones, curvedPathD, svgWidth, svgHeight]) // Add dependencies for re-initialization

// //   return (
// //     <section ref={containerRef} className="bg-black text-white py-20 relative min-h-[250vh] overflow-hidden">
// //       <div className="absolute inset-0">
// //         {/* SVG Path and Dots */}
// //         {svgWidth > 0 && svgHeight > 0 && (
// //           <svg
// //             viewBox={`0 0 ${svgWidth} ${svgHeight}`}
// //             className="h-full w-full absolute top-0 left-0" // SVG fills its parent
// //             xmlns="http://www.w3.org/2000/svg"
// //             preserveAspectRatio="none" // Important: do not preserve aspect ratio to fill exactly
// //           >
// //             <path ref={pathRef} d={curvedPathD} stroke="#22d3ee" strokeWidth="2" fill="none" />
// //             {/* Dots */}
// //             {milestones.map((m, i) => {
// //               const yPos = (i / (milestones.length - 1)) * svgHeight
// //               const maxAbsXOffset = Math.max(...milestones.map((m) => Math.abs(m.xOffset)))
// //               const pathDeviationScale = (svgWidth * 0.3) / maxAbsXOffset
// //               const xPos = svgWidth / 2 + m.xOffset * pathDeviationScale

// //               return (
// //                 <circle
// //                   key={i}
// //                   ref={(el) => (dotRefs.current[i] = el)}
// //                   cx={xPos}
// //                   cy={yPos}
// //                   r="8" // Slightly larger dots for better visibility
// //                   fill="#22d3ee"
// //                   stroke="white"
// //                   strokeWidth="2"
// //                   className="opacity-0 scale-0" // Initial state for animation
// //                 />
// //               )
// //             })}
// //           </svg>
// //         )}

// //         {/* Labels */}
// //         {milestones.map((m, i) => {
// //           // Calculate y position relative to the container's scroll height
// //           const yOffsetPx = (i / (milestones.length - 1)) * (containerRef.current?.scrollHeight || 0)

// //           const isRight = m.xOffset > 0
// //           const labelOffsetPx = Math.abs(m.xOffset) // Use raw xOffset for pixel positioning

// //           return (
// //             <div
// //               key={i}
// //               ref={(el) => (milestoneRefs.current[i] = el)}
// //               className={`absolute w-64 p-4 rounded-lg text-white opacity-0`}
// //               style={{
// //                 top: `${yOffsetPx}px`,
// //                 left: isRight ? `calc(50% + ${labelOffsetPx + 30}px)` : "auto", // Add margin from center
// //                 right: !isRight ? `calc(50% + ${labelOffsetPx + 30}px)` : "auto",
// //                 transform: `translateY(-50%) translateX(${isRight ? "0" : "-100%"})`, // Adjust for text alignment
// //                 fontFamily: fontFamily,
// //                 textAlign: isRight ? "left" : "right",
// //               }}
// //             >
// //               <CursorTarget variant="button">
// //                 <div className="text-lg font-semibold">{m.label}</div>
// //                 <div className="text-sm text-gray-400">{m.company}</div>
// //                 <div className="text-xs text-gray-500">{m.year}</div>
// //               </CursorTarget>
// //             </div>
// //           )
// //         })}
// //       </div>
// //     </section>
// //   )
// // }

// // export default CareerJourneyVertical


// import { useEffect, useRef, useCallback, useState } from "react"
// import { gsap } from "gsap"
// import { ScrollTrigger } from "gsap/ScrollTrigger"
// import { CursorTarget } from "@izhann/react-cursor-fx"
// import useFontFamily from "./projectgrid/useFontFamily"

// gsap.registerPlugin(ScrollTrigger)

// // Helper function to generate a smooth horizontal spline path
// const getHorizontalSplinePath = (points, tension = 0.6) => {
//   if (points.length < 2) return ""

//   let d = `M ${points[0].x} ${points[0].y}`

//   for (let i = 0; i < points.length - 1; i++) {
//     const p0 = i > 0 ? points[i - 1] : points[0]
//     const p1 = points[i]
//     const p2 = points[i + 1]
//     const p3 = i < points.length - 2 ? points[i + 2] : points[points.length - 1]

//     // Calculate control points for smooth horizontal curves
//     const cp1x = p1.x + ((p2.x - p0.x) / 6) * tension
//     const cp1y = p1.y + ((p2.y - p0.y) / 6) * tension

//     const cp2x = p2.x - ((p3.x - p1.x) / 6) * tension
//     const cp2y = p2.y - ((p3.y - p1.y) / 6) * tension

//     d += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p2.x} ${p2.y}`
//   }
//   return d
// }

// const milestones = [
//   {
//     label: "Started University",
//     company: "SZABIST",
//     year: "September 2020",
//     yOffset: -80, // Above the line
//   },
//   {
//     label: "Up's and Down's",
//     company: "COVID",
//     year: "Year 2021",
//     yOffset: 100, // Below the line
//   },
//   {
//     label: "Intern",
//     company: "Jaffer Brothers",
//     year: "July 2022",
//     yOffset: -120, // Above the line, further out
//   },
//   {
//     label: "Contract Full Stack Developer",
//     company: "EncoreMnD",
//     year: "November 2022",
//     yOffset: 90, // Below the line
//   },
//   {
//     label: "Freelance Web Developer",
//     company: "INT Digital",
//     year: "June 2023",
//     yOffset: -100, // Above the line
//   },
//   {
//     label: "Graduated",
//     company: "SZABIST",
//     year: "June 2024",
//     yOffset: 110, // Below the line, further out
//   },
//   {
//     label: "Started a Venture",
//     company: "SwiftCoda",
//     year: "July 2024",
//     yOffset: -90, // Above the line
//   },
//   {
//     label: "Frontend Engineer",
//     company: "Digitz Digitas",
//     year: "December 2024",
//     yOffset: 95, // Below the line
//   },
// ]

// const CareerJourneyHorizontal = () => {
//   const pathRef = useRef(null)
//   const containerRef = useRef(null)
//   const scrollContainerRef = useRef(null)
//   const milestoneRefs = useRef([])
//   const dotRefs = useRef([])
//   const fontFamily = useFontFamily()

//   const [viewportDimensions, setViewportDimensions] = useState({
//     width: typeof window !== "undefined" ? window.innerWidth : 0,
//     height: typeof window !== "undefined" ? window.innerHeight : 0,
//   })

//   // Update viewport dimensions on mount and resize
//   useEffect(() => {
//     const updateDimensions = () => {
//       setViewportDimensions({
//         width: window.innerWidth,
//         height: window.innerHeight,
//       })
//     }

//     updateDimensions()
//     window.addEventListener("resize", updateDimensions)
//     return () => window.removeEventListener("resize", updateDimensions)
//   }, [])

//   // Function to generate a curved horizontal path
//   const generateHorizontalPath = useCallback(() => {
//     if (viewportDimensions.width === 0 || viewportDimensions.height === 0) return ""

//     // Create a wider canvas for horizontal scrolling
//     const totalWidth = viewportDimensions.width * 3 // 3x viewport width for scrolling
//     const centerY = viewportDimensions.height / 2

//     const pathPoints = milestones.map((m, i) => {
//       // Distribute points evenly along the total width
//       const xPos = (i / (milestones.length - 1)) * (totalWidth * 0.8) + totalWidth * 0.1 // 10% margin on each side
//       // Add some vertical variation to make the path more organic
//       const yVariation = Math.sin(i * 0.8) * 30 // Subtle wave effect
//       const yPos = centerY + yVariation
//       return { x: xPos, y: yPos }
//     })

//     return getHorizontalSplinePath(pathPoints, 0.7)
//   }, [milestones, viewportDimensions])

//   const curvedPathD = generateHorizontalPath()

//   useEffect(() => {
//     const path = pathRef.current
//     const scrollContainer = scrollContainerRef.current
//     if (!path || !curvedPathD || !scrollContainer) return

//     const totalLength = path.getTotalLength()
//     path.style.strokeDasharray = totalLength
//     path.style.strokeDashoffset = totalLength

//     const ctx = gsap.context(() => {
//       // Horizontal scroll animation
//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: containerRef.current,
//           start: "top top",
//           end: `+=6000`, // Extended scroll distance
//           scrub: 1,
//           pin: true,
//           // markers: true, // For debugging
//         },
//       })

//       // Animate the horizontal scroll of the container
//       tl.to(scrollContainer, {
//         x: -(viewportDimensions.width * 1.3), // Scroll 2x viewport width
//         ease: "none",
//         duration: 1,
//       })

//       // Animate path drawing in sync with horizontal scroll
//       tl.to(
//         path,
//         {
//           strokeDashoffset: 0,
//           ease: "none",
//           duration: 1,
//         },
//         0,
//       ) // Start at the same time as horizontal scroll

//       // Animate dots and labels
//       milestones.forEach((m, i) => {
//         const dot = dotRefs.current[i]
//         const label = milestoneRefs.current[i]

//         // Calculate when each milestone should appear based on horizontal position
//         const appearProgress = (i / (milestones.length - 1)) * 0.8 + 0.1 // Stagger across 80% of the timeline

//         // Animate dot appearance
//         tl.fromTo(
//           dot,
//           { scale: 0, opacity: 0 },
//           { scale: 1, opacity: 1, ease: "back.out(1.7)", duration: 0.1 },
//           appearProgress,
//         )

//         // Animate label appearance
//         tl.fromTo(
//           label,
//           {
//             opacity: 0,
//             y: m.yOffset > 0 ? 30 : -30, // Start from opposite direction
//             scale: 0.8,
//           },
//           {
//             opacity: 1,
//             y: 0,
//             scale: 1,
//             ease: "power2.out",
//             duration: 0.2,
//           },
//           appearProgress,
//         )
//       })
//     }, containerRef)

//     return () => ctx.revert()
//   }, [milestones, curvedPathD, viewportDimensions])

//   return (
//     <section ref={containerRef} className="bg-black text-white relative h-screen overflow-hidden">
//       {/* Background text */}
//       <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
//         <div className="text-[15vw] font-black text-stone-900/10 select-none">JOURNEY</div>
//       </div>

//       {/* Scrollable container */}
//       <div
//         ref={scrollContainerRef}
//         className="absolute inset-0 flex items-center"
//         style={{ width: `${viewportDimensions.width * 3}px` }}
//       >
//         {/* SVG Path and Dots */}
//         {viewportDimensions.width > 0 && viewportDimensions.height > 0 && (
//           <svg
//             viewBox={`0 0 ${viewportDimensions.width * 3} ${viewportDimensions.height}`}
//             className="h-full w-full absolute top-0 left-0"
//             xmlns="http://www.w3.org/2000/svg"
//             preserveAspectRatio="none"
//           >
//             {/* Glow effect for the path */}
//             <defs>
//               <filter id="glow">
//                 <feGaussianBlur stdDeviation="3" result="coloredBlur" />
//                 <feMerge>
//                   <feMergeNode in="coloredBlur" />
//                   <feMergeNode in="SourceGraphic" />
//                 </feMerge>
//               </filter>
//             </defs>

//             <path ref={pathRef} d={curvedPathD} stroke="#22d3ee" strokeWidth="4" fill="none" filter="url(#glow)" />

//             {/* Dots */}
//             {milestones.map((m, i) => {
//               const totalWidth = viewportDimensions.width * 3
//               const centerY = viewportDimensions.height / 2
//               const xPos = (i / (milestones.length - 1)) * (totalWidth * 0.8) + totalWidth * 0.1
//               const yVariation = Math.sin(i * 0.8) * 30
//               const yPos = centerY + yVariation

//               return (
//                 <circle
//                   key={i}
//                   ref={(el) => (dotRefs.current[i] = el)}
//                   cx={xPos}
//                   cy={yPos}
//                   r="10"
//                   fill="#22d3ee"
//                   stroke="white"
//                   strokeWidth="3"
//                   className="opacity-0 scale-0"
//                   filter="url(#glow)"
//                 />
//               )
//             })}
//           </svg>
//         )}

//         {/* Labels */}
//         {milestones.map((m, i) => {
//           const totalWidth = viewportDimensions.width * 3
//           const centerY = viewportDimensions.height / 2
//           const xPos = (i / (milestones.length - 1)) * (totalWidth * 0.8) + totalWidth * 0.1
//           const yVariation = Math.sin(i * 0.8) * 30
//           const dotY = centerY + yVariation
//           const labelY = dotY + m.yOffset

//           const isAbove = m.yOffset < 0

//           return (
//             <div
//               key={i}
//               ref={(el) => (milestoneRefs.current[i] = el)}
//               className={`absolute w-64 p-4 rounded-lg text-white opacity-0 z-10 backdrop-blur-sm bg-black/20 border border-white/10`}
//               style={{
//                 left: `${xPos}px`,
//                 top: `${labelY}px`,
//                 transform: `translateX(-50%) translateY(${isAbove ? "0" : "-100%"})`,
//                 fontFamily: fontFamily,
//                 textAlign: "center",
//                 textShadow: "0 0 10px rgba(0,0,0,0.8)",
//               }}
//             >
//               <CursorTarget variant="button">
//                 <div className="text-lg font-semibold mb-1">{m.label}</div>
//                 <div className="text-sm text-cyan-300 mb-1">{m.company}</div>
//                 <div className="text-xs text-gray-400">{m.year}</div>
//               </CursorTarget>
//             </div>
//           )
//         })}

//         {/* Connection lines from dots to labels */}
//         {milestones.map((m, i) => {
//           const totalWidth = viewportDimensions.width * 3
//           const centerY = viewportDimensions.height / 2
//           const xPos = (i / (milestones.length - 1)) * (totalWidth * 0.8) + totalWidth * 0.1
//           const yVariation = Math.sin(i * 0.8) * 30
//           const dotY = centerY + yVariation
//           const labelY = dotY + m.yOffset

//           return (
//             <div
//               key={`line-${i}`}
//               className="absolute w-0.5 bg-white/30 z-5"
//               style={{
//                 left: `${xPos}px`,
//                 top: `${Math.min(dotY, labelY + (m.yOffset < 0 ? 0 : -64))}px`,
//                 height: `${Math.abs(m.yOffset) - 10}px`,
//                 transform: "translateX(-50%)",
//               }}
//             />
//           )
//         })}
//       </div>
//     </section>
//   )
// }

// export default CareerJourneyHorizontal



import { useEffect, useRef, useCallback, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { MotionPathPlugin } from "gsap/MotionPathPlugin"
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin"
import { CursorTarget } from "@izhann/react-cursor-fx"
import useFontFamily from "./projectgrid/useFontFamily"

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin, DrawSVGPlugin)

const milestones = [
  {
    id: 1,
    label: "Started University",
    company: "SZABIST",
    year: "September 2020",
    x: 200,
    y: 300,
  },
  {
    id: 2,
    label: "Up's and Down's",
    company: "COVID",
    year: "Year 2021",
    x: 600,
    y: 150,
  },
  {
    id: 3,
    label: "Intern",
    company: "Jaffer Brothers",
    year: "July 2022",
    x: 1000,
    y: 400,
  },
  {
    id: 4,
    label: "Contract Full Stack Developer",
    company: "EncoreMnD",
    year: "November 2022",
    x: 1400,
    y: 200,
  },
  {
    id: 5,
    label: "Freelance Web Developer",
    company: "INT Digital",
    year: "June 2023",
    x: 1800,
    y: 350,
  },
  {
    id: 6,
    label: "Graduated",
    company: "SZABIST",
    year: "June 2024",
    x: 2200,
    y: 180,
  },
  {
    id: 7,
    label: "Started a Venture",
    company: "SwiftCoda",
    year: "July 2024",
    x: 2600,
    y: 320,
  },
  {
    id: 8,
    label: "Frontend Engineer",
    company: "Digitz Digitas",
    year: "December 2024",
    x: 3000,
    y: 250,
  },
]

const CareerJourneyHorizontal = () => {
  const scrollDistRef = useRef(null)
  const containerRef = useRef(null)
  const mapRef = useRef(null)
  const pathRef = useRef(null)
  const routeRef = useRef(null)
  const pointRef = useRef(null)
  const milestoneRefs = useRef([])
  const fontFamily = useFontFamily()

  const [isInitialized, setIsInitialized] = useState(false)

  // Generate smooth path through all milestones
  const generatePath = useCallback(() => {
    if (milestones.length < 2) return ""

    let path = `M ${milestones[0].x} ${milestones[0].y}`

    for (let i = 1; i < milestones.length; i++) {
      const prev = milestones[i - 1]
      const curr = milestones[i]
      const next = milestones[i + 1]

      if (i === 1) {
        // First curve
        const cp1x = prev.x + (curr.x - prev.x) * 0.5
        const cp1y = prev.y
        const cp2x = curr.x - (curr.x - prev.x) * 0.3
        const cp2y = curr.y
        path += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${curr.x} ${curr.y}`
      } else if (i === milestones.length - 1) {
        // Last curve
        const cp1x = prev.x + (curr.x - prev.x) * 0.3
        const cp1y = prev.y
        const cp2x = curr.x - (curr.x - prev.x) * 0.5
        const cp2y = curr.y
        path += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${curr.x} ${curr.y}`
      } else {
        // Middle curves
        const cp1x = prev.x + (curr.x - prev.x) * 0.4
        const cp1y = prev.y + (curr.y - prev.y) * 0.2
        const cp2x = curr.x - (next.x - prev.x) * 0.2
        const cp2y = curr.y - (next.y - prev.y) * 0.1
        path += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${curr.x} ${curr.y}`
      }
    }

    return path
  }, [])

  const pathData = generatePath()

  useEffect(() => {
    if (!isInitialized) {
      setIsInitialized(true)
      return
    }

    const scrollDist = scrollDistRef.current
    const container = containerRef.current
    const map = mapRef.current
    const path = pathRef.current
    const route = routeRef.current
    const point = pointRef.current

    if (!scrollDist || !container || !map || !path || !route || !point) return

    // Set scroll distance
    const scrollMultiplier = 15
    gsap.set(scrollDist, {
      width: "100%",
      height: () => window.innerHeight * (scrollMultiplier + 3),
    })

    // Get map dimensions
    const mapWidth = 3200 // Fixed width for our path
    const mapHeight = 600 // Fixed height for our path

    // Set container properties
    gsap.set(container, {
      position: "fixed",
      width: mapWidth,
      height: mapHeight,
      left: "50%",
      top: "50%",
      xPercent: -50,
      yPercent: -50,
      visibility: "visible",
    })

    // Set initial point rotation
    gsap.set(point, {
      rotation: 0,
      transformOrigin: "center",
    })

    // Stagger times for milestone reveals
    const staggerTimes = milestones.map((_, i) => (i + 1) / milestones.length)

    // Main timeline
    const tl = gsap.timeline({
      defaults: { duration: 1, ease: "none" },
      scrollTrigger: {
        trigger: scrollDist,
        start: "top top",
        end: () => window.innerHeight * scrollMultiplier,
        scrub: 0.5,
        onUpdate: ({ progress }) => {
          console.log("Progress:", progress)
        },
      },
    })

    // Animate point along path
    tl.to(
      point,
      {
        motionPath: {
          path: route,
          align: route,
          alignOrigin: [0.5, 0.5],
          autoRotate: true,
        },
      },
      0,
    )

    // Draw the route
    tl.from(route, { drawSVG: "0 0" }, 0)

    // Reveal milestones
    tl.from(
      milestoneRefs.current,
      {
        autoAlpha: 0,
        y: "-=50",
        scale: 0.8,
        duration: 0.01,
        stagger: (index) => staggerTimes[index],
      },
      0,
    )

    // Camera follow system
    const povDelay = 0.1 // Smooth following
    const pos = { x: -mapWidth / 2, y: -mapHeight / 2 }
    const xSet = gsap.quickSetter(container, "x", "px")
    const ySet = gsap.quickSetter(container, "y", "px")

    const ticker = () => {
      const pointX = gsap.getProperty(point, "x")
      const pointY = gsap.getProperty(point, "y")

      pos.x += (-pointX - pos.x) * povDelay
      pos.y += (-pointY - pos.y) * povDelay

      xSet(pos.x)
      ySet(pos.y)
    }

    gsap.ticker.add(ticker)

    // Resize handler
    const handleResize = () => {
      gsap.set(scrollDist, {
        width: "100%",
        height: () => window.innerHeight * (scrollMultiplier + 3),
      })
    }

    window.addEventListener("resize", handleResize)

    return () => {
      gsap.ticker.remove(ticker)
      window.removeEventListener("resize", handleResize)
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [isInitialized, pathData])

  if (!isInitialized) {
    return <div className="h-screen bg-black" />
  }

  return (
    <>
      {/* Scroll distance element */}
      <div ref={scrollDistRef} className="w-full" />

      {/* Main container */}
      <div ref={containerRef} className="invisible">
        <svg ref={mapRef} width="3200" height="600" className="overflow-visible" style={{ background: "transparent" }}>
          {/* Background path */}
          <path ref={pathRef} fill="none" stroke="#404040" strokeWidth="8" d={pathData} opacity="0.3" />

          {/* Animated route */}
          <path ref={routeRef} fill="none" stroke="#22d3ee" strokeWidth="4" d={pathData} filter="url(#glow)" />

          {/* Glow filter */}
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Moving point */}
          <circle
            ref={pointRef}
            cx={milestones[0].x}
            cy={milestones[0].y}
            r="12"
            fill="#22d3ee"
            stroke="white"
            strokeWidth="3"
            filter="url(#glow)"
          />

          {/* Milestone markers */}
          {milestones.map((milestone, index) => (
            <g key={milestone.id}>
              <circle cx={milestone.x} cy={milestone.y} r="8" fill="#ffffff" stroke="#22d3ee" strokeWidth="2" />
            </g>
          ))}

          {/* Milestone labels */}
          {milestones.map((milestone, index) => (
            <g key={`label-${milestone.id}`} ref={(el) => (milestoneRefs.current[index] = el)}>
              <foreignObject x={milestone.x - 120} y={milestone.y - 80} width="240" height="60">
                <CursorTarget variant="button">
                  <div
                    className="text-white text-center p-3 rounded-lg backdrop-blur-sm bg-black/40 border border-white/20"
                    style={{ fontFamily }}
                  >
                    <div className="text-sm font-semibold">{milestone.label}</div>
                    <div className="text-xs text-cyan-300">{milestone.company}</div>
                    <div className="text-xs text-gray-400">{milestone.year}</div>
                  </div>
                </CursorTarget>
              </foreignObject>
            </g>
          ))}
        </svg>
      </div>

      {/* Background */}
      <div className="fixed inset-0 bg-black -z-10" />

      {/* Background text */}
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none -z-5">
        <div className="text-[15vw] font-black text-stone-900/5 select-none">JOURNEY</div>
      </div>
    </>
  )
}

export default CareerJourneyHorizontal