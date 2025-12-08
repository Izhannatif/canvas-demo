import React, { useEffect, useRef } from "react";
import { useNavbar } from "../../NavbarContext";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollLetterReveal from "../../AnimatedText";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const { setIsNavbarVisible } = useNavbar();
  const sectionRef = useRef(null);
  const leftOverlay = useRef(null);
  const rightOverlay = useRef(null);

  useEffect(() => {
    setIsNavbarVisible(true);
  }, []);

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
      });

      tl.fromTo(
        leftOverlay.current,
        { scaleY: 1 },
        {
          scaleY: 0,
          transformOrigin: "bottom",
          ease: "power2.out",
          duration: 1,
        }
      );
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
      );
      tl.to({}, { duration: 0.3 });

      tl.fromTo(
        rightOverlay.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          transformOrigin: "top",
          ease: "power2.out",
          duration: 0.7,
        }
      );
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
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div
        ref={sectionRef}
        className="relative bg-white min-h-screen min-w-screen overflow-hidden border-x flex flex-col md:flex-row gap-0 "
      >
        <div className="relative w-full flex items-center md:w-1/2 h-[50vh] md:h-screen bg-white overflow-hidden py-5 md:py-14">
          <div
            ref={leftOverlay}
            className="absolute inset-0 bg-white z-10"
            style={{ transformOrigin: "top", transform: "scaleY(1)" }}
          />
          <div className="flex flex-col gap-4">
            <p className="seventy opacity-30 text-3xl px-5 origin-center mb-5 -rotate-6">something about me</p>
          <p className="text-xl md:text-2xl px-5 leading-[1.5rem] md:leading-none ">
            I’m Izhan. I make things because it’s fun, frustrating, and oddly
            addictive. Some days everything works, some days nothing does, and
            both are equally entertaining in their own miserable way.
          </p>
          <p className="text-xl md:text-2xl px-5 leading-[1.5rem] md:leading-none ">
            I enjoy the process more than the outcome. Late night debugging,
            accidental solutions, and tiny wins that feel way bigger than they
            actually are. It's messy, unpredictable, and occasionally
            infuriating, which makes it perfect for someone like me who likes to
            poke at things until they behave.
          </p>
          <p className="text-xl md:text-2xl px-5 leading-[1.5rem] md:leading-none ">
            At the end of the day, I’m just a builder, a learner, and someone
            who occasionally breaks his own creations and calls it <i>work</i>.
          </p>
          </div>
          <div className="absolute left-[60%] md:left-[88%] top-[85%] md:top-10  flex flex-row-reverse md:flex-col gap-0 md:gap-0">
            <div className="text-lg">
              this is me, <br />
              <span className="text-xl handwritten">in anime!</span>
            </div>
            <div className="text-5xl relative -left-4 md:left-10 rotate-[90deg]  md:rotate-[10deg]">
              ⤿
            </div>
          </div>
        </div>

        <div className="relative w-full md:w-1/2 h-[50vh] md:h-screen bg-yellow-100 overflow-hidden">
          <div
            ref={rightOverlay}
            className="absolute inset-0 bg-white z-10"
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
  );
};

export default About;
