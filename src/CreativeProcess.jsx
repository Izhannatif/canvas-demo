// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// export default function CreativeProcess() {
//   const sectionRef = useRef(null);
//   const circleRefs = useRef([]);
//   const textRefs = useRef([]);
//   const subTextRefs = useRef([]);
//   const data = [
//     { title: "Curiosity", sub: "Look. Think. Imagine.", color: "#fff" }, // pink
//     { title: "Structure", sub: `Clean. Scalable. Solid.`, color: "#fff" }, // blue
//     {
//       title: "Interaction",
//       sub: "Invisible threads that move people.",
//       color: "#fff",
//     }, // green
//   ];
//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top top",
//           end: `+=${data.length * 500}`,
//           scrub: true,
//           pin: true,
//         },
//       });

//       data.forEach((_, i) => {
//         const circle = circleRefs.current[i];
//         const text = textRefs.current[i];
//         const r = circle.getAttribute("r");
//         const circumference = 2 * Math.PI * r;

//         gsap.set(circle, {
//           strokeDasharray: circumference,
//           strokeDashoffset: circumference,
//         });

//         const draw = gsap.timeline();

//         draw.to(circle, {
//           strokeDashoffset: 0,
//           duration: 1,
//           ease: "none",
//         });

//         draw.fromTo(
//           text,
//           { opacity: 0, y: 20 },
//           { opacity: 1, y: 0, duration: 0.5 },
//           "-=0.5"
//         );

//         tl.add(draw);

//         // Subtext #0 after circle 1 is drawn
//         if (i === 1) {
//           tl.to(subTextRefs.current[0], {
//             opacity: 1,
//             y: 0,
//             duration: 0.5,
//             ease: "power2.out",
//           });
//         }

//         // Subtext #1 and #2 after circle 2 is drawn
//         if (i === 2) {
//           tl.to(
//             [subTextRefs.current[1], subTextRefs.current[2]],
//             {
//               opacity: 1,
//               y: 0,
//               duration: 0.5,
//               ease: "power2.out",
//               stagger: 0,
//             },
//             "+=0.2"
//           );
//         }
//       });

//       tl.to({}, { duration: 0.3 }); // pause
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);
//   return (
//     <section
//       ref={sectionRef}
//       className="relative h-screen w-full bg-black overflow-hidden"
//     >
//       <svg
//         className="absolute inset-0 w-full h-full"
//         viewBox="0 0 1000 1000"
//         preserveAspectRatio="xMidYMid meet"
//       >
//         {data.map((_, i) => {
//           // Layout as Venn-style overlaps
//           const positions = [
//             { cx: 325, cy: 400 }, // Left circle
//             { cx: 675, cy: 400 }, // Right circle
//             { cx: 500, cy: 645 }, // Bottom circle
//           ];

//           const { cx, cy } = positions[i];

//           return (
//             <circle
//               key={i}
//               ref={(el) => (circleRefs.current[i] = el)}
//               cx={cx}
//               cy={cy}
//               r={340}
//               fill="none"
//               stroke={data[i].color}
//               strokeWidth="2"
//             />
//           );
//         })}
//       </svg>

//       {/* Text for each circle */}
//       {data.map((item, i) => {
//         const positionsTitle = [
//           { left: "30%", top: "28%" },
//           { left: "62%", top: "28%" },
//           { left: "45%", top: "80%" },
//         ];
//         const posTitle = positionsTitle[i];

//         return (
//           <div
//             key={i}
//             ref={(el) => (textRefs.current[i] = el)}
//             className="absolute text-center text-white opacity-0 tracking-wider"
//             style={{
//               left: posTitle.left,
//               top: posTitle.top,
//             }}
//           >
//             <h2 className=" text-3xl font-bold">{item.title}</h2>
//           </div>
//         );
//       })}

//       {/* Center Overlap Text */}
//       <div className="absolute left-1/2 top-[49%] transform -translate-x-1/2 -translate-y-1/2 text-center z-10 pointer-events-none text-white font-normal">
//         <h3 className="text-2xl font-semibold">
//           My Creative <br /> Process
//         </h3>
//       </div>

//       <div className="absolute top-2/6 text-center w-full text-stone-900/30 text-[13vw] leading-none mix-blend-screen">
//         creative process
//       </div>
//       <div
//         ref={(el) => (subTextRefs.current[0] = el)}
//         className="absolute text-white text-md text-center opacity-0"
//         style={{
//           left: "50%",
//           top: "25%",
//           transform: "translate(-50%, -50%)", // center it visually
//         }}
//       >
//         Look, Think and <br />
//         Imagine.
//       </div>
//       <div
//         ref={(el) => (subTextRefs.current[1] = el)}
//         className="absolute text-white text-md text-center opacity-0"
//         style={{
//           left: "40%",
//           top: "63%",
//           transform: "translate(-50%, -50%)", // center it visually
//         }}
//       >
//         Invisible threads <br /> that move people.
//       </div>
//       <div
//         ref={(el) => (subTextRefs.current[2] = el)}
//         className="absolute text-white text-md text-center opacity-0"
//         style={{
//           left: "60%",
//           top: "63%",
//           transform: "translate(-50%, -50%)", // center it visually
//         }}
//       >
//         Clean, Scalable and <br /> Solid.
//       </div>
//     </section>
//   );
// }



import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < breakpoint : false
  );

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < breakpoint);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return isMobile;
}

export default function CreativeProcess() {
  const sectionRef = useRef(null);
  const circleRefs = useRef([]);
  const textRefs = useRef([]);
  const subTextRefs = useRef([]);
  const isMobile = useIsMobile();

  const data = [
    { title: "Curiosity", sub: "Look. Think. Imagine.", color: "#fff" },
    { title: "Structure", sub: `Clean. Scalable. Solid.`, color: "#fff" },
    {
      title: "Interaction",
      sub: "Invisible threads that move people.",
      color: "#fff",
    },
  ];

  const positions = isMobile
    ? [
        { cx: 350, cy: 360 },
        { cx: 650, cy: 360 },
        { cx: 500, cy: 600 },
      ]
    : [
        { cx: 325, cy: 400 },
        { cx: 675, cy: 400 },
        { cx: 500, cy: 645 },
      ];

  const titlePositions = isMobile
    ? [
        { left: "14%", top: "32%" },
        { left: "70%", top: "32%" },
        { left: "40%", top: "68%" },
      ]
    : [
        { left: "30%", top: "28%" },
        { left: "62%", top: "28%" },
        { left: "45%", top: "80%" },
      ];

  const radius = isMobile ? 280 : 340;

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${data.length * 500}`,
          scrub: true,
          pin: true,
        },
      });

      data.forEach((_, i) => {
        const circle = circleRefs.current[i];
        const text = textRefs.current[i];
        const r = circle.getAttribute("r");
        const circumference = 2 * Math.PI * r;

        gsap.set(circle, {
          strokeDasharray: circumference,
          strokeDashoffset: circumference,
        });

        const draw = gsap.timeline();

        draw.to(circle, {
          strokeDashoffset: 0,
          duration: 1,
          ease: "none",
        });

        draw.fromTo(
          text,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5 },
          "-=0.5"
        );

        tl.add(draw);

        if (i === 1) {
          tl.to(subTextRefs.current[0], {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power2.out",
          });
        }

        if (i === 2) {
          tl.to(
            [subTextRefs.current[1], subTextRefs.current[2]],
            {
              opacity: 1,
              y: 0,
              duration: 0.5,
              ease: "power2.out",
              stagger: 0,
            },
            "+=0.2"
          );
        }
      });

      tl.to({}, { duration: 0.3 });
    }, sectionRef);

    return () => ctx.revert();
  }, [isMobile]);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full bg-black overflow-hidden"
    >
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="xMidYMid meet"
      >
        {data.map((_, i) => {
          const { cx, cy } = positions[i];
          return (
            <circle
              key={i}
              ref={(el) => (circleRefs.current[i] = el)}
              cx={cx}
              cy={cy}
              r={radius}
              fill="none"
              stroke={data[i].color}
              strokeWidth="2"
            />
          );
        })}
      </svg>

      {data.map((item, i) => {
        const posTitle = titlePositions[i];
        return (
          <div
            key={i}
            ref={(el) => (textRefs.current[i] = el)}
            className="absolute text-center text-white opacity-0 tracking-wider"
            style={{
              left: posTitle.left,
              top: posTitle.top,
            }}
          >
            <h2 className="text-xl md:text-3xl font-bold">{item.title}</h2>
          </div>
        );
      })}

      {/* Center Overlap Text */}
      <div className="absolute left-1/2 top-[45%] md:top-[49%] transform -translate-x-1/2 -translate-y-1/2 text-center z-10 pointer-events-none text-white font-normal text-shadow-me px-4 md:backdrop-blur-none md:px-0">
        <h3 className="text-lg md:text-2xl font-semibold">
          My Creative <br /> Process
        </h3>
      </div>

      <div className="absolute top-2/6 text-center w-full text-stone-900/30 text-[12vw] md:text-[13vw] leading-none mix-blend-screen">
        creative process
      </div>

      {/* Subtexts */}
      <div
        ref={(el) => (subTextRefs.current[0] = el)}
        className="absolute text-white text-sm md:text-md text-center opacity-0 left-1/2 top-[33%] md:left-1/2 md:top-1/4 transform -translate-x-1/2 -translate-y-1/2 text-shadow-me px-4 md:backdrop-blur-none md:px-0"
      >
        Look, Think <br /> and 
        Imagine.
      </div>
      <div
        ref={(el) => (subTextRefs.current[1] = el)}
        className="absolute text-white text-sm md:text-md text-center opacity-0 left-[35%] top-[53%] md:left-[40%] md:top-[63%] transform -translate-x-1/2 -translate-y-1/2 text-shadow-me px-4 md:backdrop-blur-none md:px-0"
      >
        Invisible threads <br /> that move people.
      </div>
      <div
        ref={(el) => (subTextRefs.current[2] = el)}
        className="absolute text-white text-sm md:text-md text-center opacity-0 left-[65%] md:left-[60%] top-[53%] md:top-[63%] transform -translate-x-1/2 -translate-y-1/2 text-shadow-me px-4 md:px-0"
      >
        Clean, Scalable <br /> and  Solid.
      </div>
    </section>
  );
}

