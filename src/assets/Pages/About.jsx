// import React, { useEffect } from "react"
// import { useNavbar } from "../../NavbarContext"
// import Footer from "../../Footer"

// const About = () => {
//   const { setIsNavbarVisible } = useNavbar()

//   useEffect(() => {
//     setIsNavbarVisible(true)
//   }, [])

//   return (
//     <>
//       <div className="bg-white h-max  min-w-screen border-x flex gap-0">
//         <div className="w-1/2 h-screen bg-red-100"></div>
//         <div className="w-1/2 h-screen bg-yellow-100"></div>
//       </div>
//     </>
//   )
// }

// export default About

// {
//   /* <Footer /> */
// }

import React, { useEffect, useRef } from "react"
import { useNavbar } from "../../NavbarContext"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import Footer from "../../Footer"
import ScrollLetterReveal from "../../AnimatedText"

gsap.registerPlugin(ScrollTrigger)

const About = () => {
  const { setIsNavbarVisible } = useNavbar()
  const sectionRef = useRef(null)
  const leftOverlay = useRef(null)
  const rightOverlay = useRef(null)

  useEffect(() => {
    setIsNavbarVisible(true)
  }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=1500`,
          scrub: true,
          pin: true,
        },
      })

      tl.fromTo(
        leftOverlay.current,
        { scaleY: 1 },
        {
          scaleY: 0,
          transformOrigin: "bottom",
          ease: "power2.out",
          duration: 1,
        }
      )
      tl.fromTo(
        rightOverlay.current,
        { scaleY: 1 },
        {
          scaleY: 0,
          transformOrigin: "bottom",
          ease: "power2.out",
          duration: 1,
        },
        "<=0.1"
      )
      tl.to({}, { duration: 0.2 })

      tl.fromTo(
        rightOverlay.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          transformOrigin: "top",
          ease: "power2.out",
          duration: 0.7,
        }
      )
      tl.fromTo(
        leftOverlay.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          transformOrigin: "top",
          ease: "power2.out",
          duration: 0.7,
        },
        "<=0.2"
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <>
      <div
        ref={sectionRef}
        className="relative bg-white min-h-screen min-w-screen overflow-hidden border-x flex flex-col md:flex-row gap-0 "
      >
        {/* Left Pane */}
        <div className="relative w-full flex items-center md:w-1/2 h-[50vh] md:h-screen bg-white overflow-hidden py-5 md:py-14">
          <div
            ref={leftOverlay}
            className="absolute inset-0 bg-black z-10"
            style={{ transformOrigin: "top", transform: "scaleY(1)" }}
          />
          <ScrollLetterReveal textClassName="text-xl md:text-2xl px-5 leading-[1.5rem] md:leading-none ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae magni
            perspiciatis praesentium tempora amet voluptas blanditiis veritatis
            omnis minus exercitationem? Obcaecati explicabo eaque quisquam rerum
            quia temporibus soluta commodi doloribus!
          </ScrollLetterReveal>
          <div className="absolute left-[60%] md:left-[88%] top-[85%] md:top-10  flex flex-col gap-5">
            <div className="text-lg">this is me, <span className="text-xl handwritten">in anime!</span></div>
            <div className="text-5xl leading-none relative -left-15 rotate-[-20deg]  md:rotate-[10deg]">⤿</div>
          </div>
        </div>

        {/* Right Pane */}
        <div className="relative w-full md:w-1/2 h-[50vh] md:h-screen bg-yellow-100 overflow-hidden">
          <div
            ref={rightOverlay}
            className="absolute inset-0 bg-black z-10"
            style={{ transformOrigin: "bottom", transform: "scaleY(1)" }}
          />
          <img
            src="./me3.png"
            alt=""
            className="object-cover object-top w-full h-full"
          />
        </div>
      </div>
    </>
  )
}

export default About
