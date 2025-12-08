// import React from "react";

// const TextSection = () => {
//   return (
//     <div className="h-screen w-screen flex justify-center items-center flex-col bg-white relative bottom-[20vh] gap-5 ">
//       <p className="text-5xl w-1/2 text-center leading-tight">
//         Working full-time 👨🏻‍💻, building for clients <br /> after hours 🕓, and
//         keeping room for projects <br /> that challenge me in the right ways💡
//       </p>
//       <div className="text-5xl w-1/2 text-center">
//         If you’re looking to collaborate, I’m{" "}
//         <span className="available-text px-4 rounded-full border-green-500 text-green-500 border-2 text-4xl relative bottom-1">
//           Available
//         </span>
//       </div>
//     </div>
//   );
// };

// export default TextSection;


import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TextSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    const lines = section.querySelectorAll(".line");

    // Set initial states
    gsap.set(lines, {
      opacity: 0,
      filter: "blur(20px)",
      y: 20,
    });

    // Create timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "+=150%", // controls scroll length during pinning
        scrub: true,
        pin: true,
        pinSpacing: true,
      },
    });
    // Animate lines one by one
    tl.to(lines, {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      duration: 1.2,
      ease: "power3.out",
      stagger: 0.5, // each line reveals sequentially on scroll
    });
  }, []);

  return (
    <div
      ref={sectionRef}
      className="h-screen w-screen flex justify-center items-center flex-col bg-white gap-5 mt-[-20vh]"
    >
      <p className="text-2xl md:text-5xl w-full md:w-1/2 text-center leading-tight">
        <span className="line block">Working full-time 👨🏻‍💻, building for clients</span>
        <span className="line block">after hours 🕓, and keeping room for projects</span>
        <span className="line block">that challenge me in the right ways 💡</span>
      </p>

      <div className="text-2xl md:text-5xl w-full md:w-1/2 text-center">
        <span className="line block">
          If you’re looking to collaborate, I’m{" "}
          <span className="available-text px-4 rounded-full border-green-500 text-green-500 border-2 text-2xl md:text-4xl relative bottom-1">
            Available
          </span>
        </span>
      </div>
    </div>
  );
};

export default TextSection;
