import React, { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useNavbar } from "./NavbarContext"
import AnimatedText from "./AnimatedText"
import ScrollLetterReveal from "./AnimatedText"
import { CursorTarget } from "@izhann/react-cursor-fx"
gsap.registerPlugin(ScrollTrigger)

const PinnedScaleBox = () => {
  const sectionRef = useRef(null)
  const boxRef = useRef(null)

  const topRefs = useRef([])
  const middleLeftRef = useRef([])
  const middleRightRef = useRef([])
  const bottomRefs = useRef([])

  const collectRefs = (refArray) => (el) => {
    if (el && !refArray.current.includes(el)) {
      refArray.current.push(el)
    }
  }
  const { setIsNavbarVisible, setIsNavbarOpen } = useNavbar()
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=100%", // Longer scroll = slower animation
          scrub: true,
          pin: true,
          toggleActions: "play reverse play reverse", // <-- key line
          onUpdate: (self) => {
            if (self.progress >= 1) {
              setIsNavbarVisible(true)
            } else {
              setIsNavbarVisible(false)
              setIsNavbarOpen(false)
            }
          },
        },
      })

      // Main scale animation (slower due to longer scroll range)
      tl.fromTo(
        boxRef.current,
        { scale: 0.25 },
        { scale: 1, ease: "none" },
        0 // Start at beginning
      )

      tl.to(
        topRefs.current,
        {
          y: -100,
          opacity: 0,
          scale: 0.5,
          filter: "blur(20px)",
          stagger: 0,
          ease: "none",
        },
        0 // Same as start
      )

      tl.to(
        middleLeftRef.current,
        {
          x: -100,
          opacity: 0,
          scale: 0.5,
          filter: "blur(20px)",
          stagger: 0,
          ease: "none",
        },
        0 // Slight delay
      )
      tl.to(
        middleRightRef.current,
        {
          x: 100,
          opacity: 0,
          scale: 0.5,
          filter: "blur(20px)",
          stagger: 0,
          ease: "none",
        },
        0 // Slight delay
      )
      tl.to(
        bottomRefs.current,
        {
          y: 100,
          opacity: 0,
          scale: 0.5,
          filter: "blur(20px)",
          stagger: 0,
          ease: "none",
        },
        0 // Further delay
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <div>
      <section
        ref={sectionRef}
        className="h-screen w-screen flex flex-col items-center justify-center relative overflow-hidden bg-white border-none"
      >
        {/* Scaling box */}
        <div
          ref={boxRef}
          className="h-screen w-screen bg-[#fff] relative z-10 flex items-end p-10 border-[1px]"
          style={{
            transformOrigin: "center center",
          }}
        >
          <CursorTarget variant="waveText">
            <p className="text-7xl md:text-9xl font-black">Hello.</p>
          </CursorTarget>
        </div>

        <div className="absolute w-full top-10 px-10 flex gap-10 z-0 justify-between">
          <div
            ref={collectRefs(topRefs)}
            className="w-1/5 h-40 overflow-hidden  bg-gray-200"
          >
            <img
              src="https://picsum.photos/800?random=1"
              className="w-full h-full object-cover"
              alt="Nature"
              loading="lazy"
            />
          </div>
          <div
            ref={collectRefs(topRefs)}
            className="w-1/5 h-40 overflow-hidden  bg-gray-200"
          >
            <img
              src="https://picsum.photos/800?random=2"
              className="w-full h-full object-cover"
            />
          </div>
          <div
            ref={collectRefs(topRefs)}
            className="w-1/5 h-40 overflow-hidden  bg-gray-200"
          >
            <img
              src="https://picsum.photos/800?random=3"
              className="w-full h-full object-cover"
              alt="River"
              loading="lazy"
            />
          </div>
        </div>

        {/* Middle Row */}
        <div className="absolute w-full top-1/2 px-10 flex gap-10 z-0 justify-between -translate-y-1/2">
          <div
            ref={collectRefs(middleLeftRef)}
            className="w-1/5 h-40 overflow-hidden  bg-gray-200"
          >
            <img
              src="https://picsum.photos/800?random=4"
              className="w-full h-full object-cover"
            />
          </div>
          <div
            ref={collectRefs(middleRightRef)}
            className="w-1/5 h-40 overflow-hidden  bg-gray-200"
          >
            <img
              src="https://picsum.photos/800?random=5"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Bottom Row */}
        <div className="absolute w-full bottom-10 px-10 flex gap-10 z-0 justify-between">
          <div
            ref={collectRefs(bottomRefs)}
            className="w-1/5 h-40 overflow-hidden  bg-gray-200"
          >
            <img
              src="https://picsum.photos/800?random=6"
              className="w-full h-full object-cover"
            />
          </div>
          <div
            ref={collectRefs(bottomRefs)}
            className="w-1/5 h-40 overflow-hidden  bg-gray-200"
          >
            <img
              src="https://picsum.photos/800?random=7"
              className="w-full h-full object-cover"
            />
          </div>
          <div
            ref={collectRefs(bottomRefs)}
            className="w-1/5 h-40 overflow-hidden  bg-gray-200"
          >
            <img
              src="https://picsum.photos/800?random=8"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default PinnedScaleBox
