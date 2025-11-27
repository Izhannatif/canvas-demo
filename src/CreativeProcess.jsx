import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < breakpoint : false
  )

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < breakpoint)
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [breakpoint])

  return isMobile
}

export default function CreativeProcess() {
  const sectionRef = useRef(null)
  const circleRefs = useRef([])
  const textRefs = useRef([])
  const subTextRefs = useRef([])
  const isMobile = useIsMobile()
  const centerRef = useRef(null)
  const contentRef = useRef(null)
  const mainHeadingRef = useRef(null)
  const data = [
    { title: "Curiosity", sub: "Look. Think. Imagine.", color: "#000" },
    { title: "Structure", sub: `Clean. Scalable. Solid.`, color: "#000" },
    {
      title: "Interaction",
      sub: "Invisible threads that move people.",
      color: "#000",
    },
  ]

  const positions = isMobile
    ? [
        { cx: 350, cy: 360 },
        { cx: 650, cy: 360 },
        { cx: 500, cy: 630 },
      ]
    : [
        { cx: 325, cy: 400 },
        { cx: 665, cy: 400 },
        { cx: 500, cy: 685 },
      ]

  const titlePositions = isMobile
    ? [
        { left: "14%", top: "37%" },
        { left: "70%", top: "37%" },
        { left: "40%", top: "61%" },
      ]
    : [
        { left: "33%", top: "30%" },
        { left: "60%", top: "30%" },
        { left: "46%", top: "76%" },
      ]

  const radius = isMobile ? 280 : 280

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
      })

      data.forEach((_, i) => {
        const circle = circleRefs.current[i]
        const text = textRefs.current[i]
        const r = circle.getAttribute("r")
        const circumference = 2 * Math.PI * r

        gsap.set(circle, {
          strokeDasharray: circumference,
          strokeDashoffset: circumference,
        })

        const draw = gsap.timeline()

        draw.to(circle, {
          strokeDashoffset: 0,
          duration: 1,
          ease: "none",
        })

        draw.fromTo(
          text,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5 },
          "-=0.5"
        )

        tl.add(draw)

        if (i === 1) {
          tl.to(subTextRefs.current[0], {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power2.out",
          })
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
          )
        }
      })

      tl.to({}, { duration: 0.3 })
      tl.to(
        contentRef.current,
        {
          scale: 16,
          duration: 1.5,
          ease: "power2.inOut",
          transformOrigin: "center center",
        },
        "+=0.3"
      )

      tl.to(
        [
          centerRef.current,
          mainHeadingRef.current,
          subTextRefs.current[0],
          subTextRefs.current[1],
          subTextRefs.current[2],
        ],
        {
          opacity: 0,
          duration: 1,
          ease: "power2.out",
        },
        "-=1.5"
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [isMobile])

  return (
    <section
      ref={sectionRef}
      className="relative h-screen min-w-screen bg-white overflow-hidden -mt-[50vh]"
    >
      <div ref={contentRef} className="w-full h-full origin-center">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1000 1000"
          preserveAspectRatio="xMidYMid meet"
        >
          {data.map((_, i) => {
            const { cx, cy } = positions[i]
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
            )
          })}

          {/* Title inside SVG */}
          <foreignObject
            x={isMobile ? "375" : "370"}
            y={isMobile ? "420" : "450"}
            width="250"
            height="100"
          >
            <div
              ref={centerRef}
              xmlns="http://www.w3.org/1999/xhtml"
              className="text-black text-center text-3xl leading-tight "
            >
              My Creativity Process
            </div>
          </foreignObject>

          <foreignObject
            x={isMobile ? "100" : "100"}
            y={isMobile ? "300" : "300"}
            width="250"
            height="100"
          >
            <div
              ref={(el) => (textRefs.current[0] = el)}
              xmlns="http://www.w3.org/1999/xhtml"
              className="text-black text-center text-5xl leading-tight opacity-0"
            >
              Curiosity
            </div>
          </foreignObject>

          <foreignObject
            x={isMobile ? "650" : "650"}
            y={isMobile ? "300" : "300"}
            width="250"
            height="100"
          >
            <div
              ref={(el) => (textRefs.current[1] = el)}
              xmlns="http://www.w3.org/1999/xhtml"
              className="text-black text-center text-5xl leading-tight opacity-0"
            >
              Structure
            </div>
          </foreignObject>

          <foreignObject
            x={isMobile ? "375" : "375"}
            y={isMobile ? "750" : "750"}
            width="250"
            height="100"
          >
            <div
              ref={(el) => (textRefs.current[2] = el)}
              xmlns="http://www.w3.org/1999/xhtml"
              className="text-black text-center text-5xl leading-tight opacity-0"
            >
              Interaction
            </div>
          </foreignObject>

          {/* Subtext labels inside SVG */}
          <foreignObject
            x={isMobile ? "430" : "425"}
            y={isMobile ? "220" : "290"}
            width="140"
            height="100"
          >
            <div
              ref={(el) => (subTextRefs.current[0] = el)}
              xmlns="http://www.w3.org/1999/xhtml"
              className="text-black text-center text-xl leading-tight opacity-0"
            >
              Look, Think
              <br />
              and Imagine.
            </div>
          </foreignObject>
          <foreignObject
            x={isMobile ? "240" : "250"}
            y={isMobile ? "520" : "570"}
            width="180"
            height="100"
          >
            <div
              ref={(el) => (subTextRefs.current[1] = el)}
              xmlns="http://www.w3.org/1999/xhtml"
              className="text-black text-center text-xl leading-tight opacity-0"
            >
              Invisible threads
              <br />
              that move people.
            </div>
          </foreignObject>
          <foreignObject
            x={isMobile ? "580" : "560"}
            y={isMobile ? "520" : "570"}
            width="180"
            height="100"
          >
            <div
              ref={(el) => (subTextRefs.current[2] = el)}
              xmlns="http://www.w3.org/1999/xhtml"
              className="text-black text-center text-xl leading-tight opacity-0"
            >
              Clean, Scalable
              <br />
              and Solid.
            </div>
          </foreignObject>
        </svg>

        <div
          ref={mainHeadingRef}
          className="seventy absolute top-10 -rotate-6 text-left w-full text-stone-900 text-[5vw] md:text-[5vw] leading-none mix-blend-screen tracking-wide px-10"
        >
          creative process
        </div>
      </div>
    </section>
  )
}
