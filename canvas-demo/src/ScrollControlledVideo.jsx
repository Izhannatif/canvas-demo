import React, { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useNavbar } from "./NavbarContext"

gsap.registerPlugin(ScrollTrigger)

const ScrollGsapVideo = () => {
  const videoRef = useRef(null)
  const containerRef = useRef(null)
  const { setIsNavbarVisible, setIsNavbarOpen } = useNavbar()

  useEffect(() => {
    const video = videoRef.current
    const container = containerRef.current

    if (!video || !container) return

    // Ensure video metadata is loaded before setting up ScrollTrigger
    const handleLoadedMetadata = () => {
      const duration = 6 // Get the video duration dynamically

      if (!isFinite(duration) || duration === 0) {
        console.warn("Invalid video duration:", duration)
        return
      }

      gsap.to(video, {
        currentTime: duration,
        ease: "none",
        scrollTrigger: {
          trigger: videoRef.current,
          start: "top top",
          end: "+=200%", // Longer scroll = slower animation
          scrub: true,
          pin: true,
          toggleActions: "play reverse play reverse", // <-- key line
          onUpdate: (self) => {
            if (self.progress >= 0) {
              setIsNavbarVisible(false)
            } else {
              setIsNavbarVisible(true)
              setIsNavbarOpen(false)
            }
          },
        },
      })
    }

    if (video.readyState >= 0) {
      handleLoadedMetadata() // If already ready
    } else {
      video.addEventListener("loadedmetadata", handleLoadedMetadata)
    }

    return () => {
      video.removeEventListener("loadedmetadata", handleLoadedMetadata)
      ScrollTrigger.killAll(true) // Cleanup on unmount
    }
  }, [])

  return (
    <div
      ref={containerRef}
      style={{
        height: "300vh",
        position: "relative",
      }}
    >
      <video
        ref={videoRef}
        className="z-0 w-screen h-screen object-cover"
        src="/www4_smooth.webm"
        muted
        playsInline
        preload="auto"
      />
      <div className="absolute bottom-0 left-0  w-screen h-[80vh] flex items-start z-10 bg-black/20 backdrop-blur-2xl  border-t border-stone-200">
        <div className="w-full px-10 pt-20 flex justify-between">
          <div className="text-white/80 text-5xl md:text-9xl cal w-1/2">
            lets work <br />
            together.
          </div>
          <div className="flex flex-col gap-10  w-1/2 pt-10 text-white outfit">
            <div className="flex gap-5 w-full">
              <input
                className="placeholder:text-stone-600 py-3 border-b border-white w-full  outline-0"
                type="text"
                placeholder="Name"
              />
              <input
                className="placeholder:text-stone-600 py-3 border-b border-white w-full outline-0"
                type="email"
                placeholder="Email"
              />
            </div>
            <input
              className="placeholder:text-stone-600 py-3 border-b border-white w-full outline-0"
              type="text"
              placeholder="I'm interested in ..."
            />
            <textarea
              className="placeholder:text-stone-600 py-3 border-b border-white w-full outline-0"
              type="text"
              placeholder="About your project"
              rows={5}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ScrollGsapVideo
