import React, { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useNavbar } from "./NavbarContext"
import { CursorTarget } from "@izhann/react-cursor-fx"
import ContactForm from "./ContactForm"
import { ArrowUpRight } from "lucide-react"

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
          end: "+=150%", // Longer scroll = slower animation
          scrub: true,
          pin: true,
          toggleActions: "play reverse play reverse", // <-- key line
          onUpdate: (self) => {
            if (self.progress > 0) {
              setIsNavbarVisible(false)
              setIsNavbarOpen(false)
            } else if (self.progress <= 0) {
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
      video.currentTime = 0
    }
  }, [])

  return (
    <div
      className="w-screen"
      ref={containerRef}
      style={{
        height: "250vh",
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
      <div className="absolute bottom-0 left-0 w-screen h-[90vh] flex flex-col justify-around items-start z-10 bg-black/20 backdrop-blur-xl border-t border-stone-200">
        <div className="w-full">
          <div className="w-full px-10 pt-10 flex flex-col md:flex-row justify-between">
            <div className="text-white/80 text-5xl md:text-8xl cal w-full md:w-1/2">
              ready to <br />
              collaborate?
            </div>
            <ContactForm />
          </div>
        </div>
        {/* <div className="w-full flex gap-5 justify-end items-center h-max px-10 text-white">
          <div className="flex gap-3 items-center">
            Email <ArrowUpRight />
          </div>
          <div className="flex gap-3 items-center">
            LinkedIn <ArrowUpRight />
          </div>
          <div className="flex gap-3 items-center">
            Instagram <ArrowUpRight />
          </div>
        </div> */}
        <div className="w-full flex gap-5 justify-end items-center h-max px-10 text-white">
          {["Email", "LinkedIn", "Instagram"].map((text) => (
            <CursorTarget variant="button" key={text}>
              <a
                href="#"
                className="relative group flex gap-3 items-center overflow-hidden"
              >
                <span className="relative z-10">{text}</span>
                <ArrowUpRight className="z-10" />
                <span
                  className="absolute bottom-0 left-0 w-full h-[2px] bg-current transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-bottom-right group-hover:origin-bottom-left"
                  aria-hidden="true"
                />
              </a>
            </CursorTarget>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ScrollGsapVideo
