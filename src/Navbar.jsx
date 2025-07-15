// import { useEffect, useRef } from "react";
// import { Link } from "react-router-dom";
// import { useNavbar } from "./NavbarContext";
// import gsap from "gsap";
// import PixelTransition from "./CardPixelTransition";
// import { ArrowUpRight } from "lucide-react";

// const Navbar = () => {
//   const { isNavbarVisible, setIsNavbarVisible, isNavbarOpen, setIsNavbarOpen } =
//     useNavbar();

//   const dropdownRef = useRef(null);
//   const overlayRef = useRef(null);
//   const dropdownWrapperRef = useRef(null);
//   const boxRefs = useRef([]);

//   const setBoxRef = (el, index) => {
//     if (el) {
//       boxRefs.current[index] = el;
//     }
//   };

//   // Prevent scroll when navbar is open
//   useEffect(() => {
//     document.body.style.overflow = isNavbarOpen ? "hidden" : "";
//   }, [isNavbarOpen]);

//   // Close navbar when clicking outside
//   useEffect(() => {
//     function handleClickOutside(event) {
//       if (
//         isNavbarOpen &&
//         dropdownWrapperRef.current &&
//         !dropdownWrapperRef.current.contains(event.target)
//       ) {
//         setIsNavbarOpen(false);
//       }
//     }

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [isNavbarOpen]);

//   // GSAP timeline animations
//   useEffect(() => {
//     if (
//       !dropdownRef.current ||
//       !overlayRef.current ||
//       boxRefs.current.length === 0
//     )
//       return;

//     const overlay = overlayRef.current;
//     const dropdown = dropdownRef.current;
//     const boxes = boxRefs.current;

//     if (isNavbarOpen) {
//       const openTl = gsap.timeline();

//       openTl
//         .fromTo(
//           overlay,
//           { opacity: 0 },
//           {
//             opacity: 0.9,
//             duration: 0.3,
//             ease: "power2.out",
//             onStart: () => {
//               overlay.style.pointerEvents = "auto";
//             },
//           }
//         )
//         .fromTo(
//           dropdown,
//           { scaleY: 0, opacity: 0, transformOrigin: "top center" },
//           {
//             scaleY: 1,
//             opacity: 1,
//             duration: 0.4,
//             ease: "power3.out",
//           },
//           "<"
//         )
//         .fromTo(
//           boxes,
//           {
//             y: 40,
//             opacity: 0,
//           },
//           {
//             y: 0,
//             opacity: 1,
//             duration: 0.4,
//             stagger: 0.1,
//             ease: "power2.out",
//           },
//           "-=0.2"
//         );
//     } else {
//       const closeTl = gsap.timeline();

//       closeTl
//         .to(boxes, {
//           y: -60,
//           opacity: 0,
//           duration: 0.3,
//           stagger: 0.1,
//           ease: "power2.in",
//         })
//         .to(
//           dropdown,
//           {
//             scaleY: 0,
//             opacity: 0,
//             duration: 0.3,
//             transformOrigin: "top center",
//             ease: "power2.inOut",
//           },
//           "-=0.1"
//         )
//         .to(
//           overlay,
//           {
//             opacity: 0,
//             duration: 0.2,
//             ease: "power2.in",
//             onComplete: () => {
//               overlay.style.pointerEvents = "none";
//             },
//           },
//           "-=0.2"
//         );
//     }
//   }, [isNavbarOpen]);

//   return (
//     <>
//       {/* Background overlay */}
//       <div
//         ref={overlayRef}
//         className="fixed top-0 left-0 w-full h-full  z-40 backdrop-blur-[100px]"
//         style={{ opacity: 0, pointerEvents: "none" }}
//       ></div>

//       {/* Top navbar */}
//       <section
//         ref={dropdownWrapperRef}
//         className={`fixed top-0 left-0 w-full z-50 border-b bg-white px-7 py-3 transition-opacity duration-500 ${
//           isNavbarVisible ? "opacity-100" : "opacity-0 pointer-events-none"
//         }`}
//       >
//         <div className="w-full flex justify-between items-center">
//           <Link to={"/"}>
//             <h1 className="text-2xl font-bold border w-max px-2 tracking-tighter ">
//               :  &nbsp;o
//             </h1>
//           </Link>
//           <div className="flex gap-5 font-black">
//             <div
//               className="cursor-pointer"
//               onClick={() => {
//                 setIsNavbarOpen(!isNavbarOpen);
//               }}
//             >
//               menu <span>{isNavbarOpen ? "-" : "+"}</span>
//             </div>
//           </div>
//         </div>

//         {/* Full-width dropdown */}
//         <div
//           ref={dropdownRef}
//           className="absolute top-full right-0 w-full md:w-max bg-white border-t border-l border-b p-5 h-[50vh] z-50 origin-top"
//           style={{ transformOrigin: "top center" }}
//         >
//           <div className="flex gap-5 px-2 items-end">
//             <div className="flex flex-col h-[45vh]">
//               <div
//                 ref={(el) => setBoxRef(el, 0)}
//                 className="h-1/2 w-3/4 md:w-full aspect-square border border-white mb-1"
//               >
//                 <PixelTransition
//                   firstContent={
//                     <Link
//                       to="/"
//                       onClick={() => setIsNavbarOpen(false)}
//                       className="w-full h-full flex items-end justify-end px-5 py-3"
//                     >
//                       <span className="text-2xl cal">home.</span>
//                     </Link>
//                   }
//                   secondContent={<SecondContent link={"/"} name={"home"} />}
//                 />
//               </div>

//               <div
//                 ref={(el) => setBoxRef(el, 1)}
//                 className="h-1/2 w-3/4 md:w-full aspect-square border-t-0 border border-white"
//               >
//                 <PixelTransition
//                   firstContent={
//                     <Link
//                       to="/about"
//                       onClick={() => {
//                         setIsNavbarOpen(false);
//                         setIsNavbarVisible(true);
//                       }}
//                       className="w-full h-full flex items-end justify-end px-5 py-3"
//                     >
//                       <span className="text-2xl cal">about.</span>
//                     </Link>
//                   }
//                   secondContent={
//                     <SecondContent link={"/about"} name={"about"} />
//                   }
//                 />
//               </div>
//             </div>

//             <div className="flex flex-col h-[45vh]">
//               <div
//                 ref={(el) => setBoxRef(el, 2)}
//                 className="h-full w-2/3 md:w-full aspect-square border border-white pb-1"
//               >
//                 <PixelTransition
//                   firstContent={
//                     <Link
//                       to="/contact"
//                       onClick={() => setIsNavbarOpen(false)}
//                       className="w-full h-full flex items-end justify-end px-5 py-3"
//                     >
//                       <span className="text-2xl cal">contact.</span>
//                     </Link>
//                   }
//                   secondContent={
//                     <SecondContent link={"/contact"} name={"contact"} />
//                   }
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Navbar;

// const SecondContent = ({ link, name }) => {
//   return (
//     <Link
//       to={link}
//       onClick={() => {
//         setIsNavbarOpen(false);
//         setIsNavbarVisible(true);
//       }}
//       className="w-full h-full flex flex-col items-start justify-between px-5 py-3 bg-black text-white"
//     >
//       <ArrowUpRight size={40} />
//       <p className="text-2xl cal w-full text-right">{name}.</p>
//     </Link>
//   );
// };

import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useNavbar } from "./NavbarContext";
import gsap from "gsap";
import PixelTransition from "./CardPixelTransition";
import { ArrowUpRight } from "lucide-react";

const Navbar = () => {
  const { isNavbarVisible, setIsNavbarVisible, isNavbarOpen, setIsNavbarOpen } =
    useNavbar();

  const dropdownRef = useRef(null);
  const overlayRef = useRef(null);
  const dropdownWrapperRef = useRef(null);
  const boxRefs = useRef([]);

  const setBoxRef = (el, index) => {
    if (el) {
      boxRefs.current[index] = el;
    }
  };

  // Prevent scroll when navbar is open
  // useEffect(() => {
  //   document.body.style.overflow = isNavbarOpen ? "hidden" : "";
  // }, [isNavbarOpen]);

  // Close navbar when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        isNavbarOpen &&
        dropdownWrapperRef.current &&
        !dropdownWrapperRef.current.contains(event.target)
      ) {
        setIsNavbarOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isNavbarOpen]);

  // GSAP timeline animations
  useEffect(() => {
    if (
      !dropdownRef.current ||
      !overlayRef.current ||
      boxRefs.current.length === 0
    )
      return;

    const overlay = overlayRef.current;
    const dropdown = dropdownRef.current;
    const boxes = boxRefs.current;

    if (isNavbarOpen) {
      const openTl = gsap.timeline();

      openTl
        .fromTo(
          overlay,
          { opacity: 0 },
          {
            opacity: 0.9,
            duration: 0.3,
            ease: "power2.out",
            onStart: () => {
              overlay.style.pointerEvents = "auto";
            },
          }
        )
        .fromTo(
          dropdown,
          { scaleY: 0, opacity: 0, transformOrigin: "top center" },
          {
            scaleY: 1,
            opacity: 1,
            duration: 0.4,
            ease: "power3.out",
          },
          "<"
        )
        .fromTo(
          boxes,
          {
            y: 40,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.4,
            stagger: 0.1,
            ease: "power2.out",
          },
          "-=0.2"
        );
    } else {
      const closeTl = gsap.timeline();

      closeTl
        .to(boxes, {
          y: -60,
          opacity: 0,
          duration: 0.3,
          stagger: 0.1,
          ease: "power2.in",
        })
        .to(
          dropdown,
          {
            scaleY: 0,
            opacity: 0,
            duration: 0.3,
            transformOrigin: "top center",
            ease: "power2.inOut",
          },
          "-=0.1"
        )
        .to(
          overlay,
          {
            opacity: 0,
            duration: 0.2,
            ease: "power2.in",
            onComplete: () => {
              overlay.style.pointerEvents = "none";
            },
          },
          "-=0.2"
        );
    }
  }, [isNavbarOpen]);

  return (
    <>
      {/* Background overlay */}
      <div
        ref={overlayRef}
        className="fixed top-0 left-0 w-full h-full  z-40 backdrop-blur-[100px]"
        style={{ opacity: 0, pointerEvents: "none" }}
      ></div>

      {/* Top navbar */}
      <section
        ref={dropdownWrapperRef}
        className={`fixed top-0 right-0 w-max z-50 px-7 py-3 mix-blend-difference  ${
          isNavbarVisible ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="w-full flex justify-between items-center">
          <div className="flex gap-5 ">
            <div
              className="cursor-pointer text-lg flex items-center text-white mix-blend-exclusion"
              onClick={() => {
                setIsNavbarOpen(!isNavbarOpen);
              }}
            >
              <div className="mix-blend-exclusion ">menu &nbsp;</div>
              <div
                className={`text-xl transform transition-transform duration-300 ease-in-out ${
                  isNavbarOpen ? "-rotate-45" : "rotate-0"
                }`}
              >
                +
              </div>
            </div>
          </div>
        </div>

        {/* Full-width dropdown */}
      </section>
      <div
        ref={dropdownRef}
        className="fixed top-12 right-0 w-full md:w-max bg- border-t border-l border-b p-5 h-[50vh] origin-top bg-white z-50"
        style={{ transformOrigin: "top center" }}
      >
        <div className="flex gap-5 px-2 items-end">
          <div className="flex flex-col h-[45vh]">
            <div
              ref={(el) => setBoxRef(el, 0)}
              className="h-1/2 w-3/4 md:w-full aspect-square border border-white bg-white "
            >
              <PixelTransition
                firstContent={
                  <Link
                    to="/"
                    onClick={() => setIsNavbarOpen(false)}
                    className="w-full h-full flex items-end justify-end px-5 py-3"
                  >
                    <span className="text-2xl cal">home.</span>
                  </Link>
                }
                secondContent={<SecondContent link={"/"} name={"home"} />}
              />
            </div>

            <div
              ref={(el) => setBoxRef(el, 1)}
              className="h-1/2 w-3/4 md:w-full aspect-square border border-white bg-white"
            >
              <PixelTransition
                firstContent={
                  <Link
                    to="/about"
                    onClick={() => {
                      setIsNavbarOpen(false);
                      setIsNavbarVisible(true);
                    }}
                    className="w-full h-full flex items-end justify-end px-5 py-3"
                  >
                    <span className="text-2xl cal">about.</span>
                  </Link>
                }
                secondContent={<SecondContent link={"/about"} name={"about"} />}
              />
            </div>
          </div>

          <div className="flex flex-col h-[45vh]">
            <div
              ref={(el) => setBoxRef(el, 2)}
              className="h-full w-2/3 md:w-full aspect-square border border-white pb-1"
            >
              <PixelTransition
                firstContent={
                  <Link
                    to="/contact"
                    onClick={() => setIsNavbarOpen(false)}
                    className="w-full h-full flex items-end justify-end px-5 py-3"
                  >
                    <span className="text-2xl cal">contact.</span>
                  </Link>
                }
                secondContent={
                  <SecondContent link={"/contact"} name={"contact"} />
                }
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

const SecondContent = ({ link, name }) => {
  return (
    <Link
      to={link}
      onClick={() => {
        setIsNavbarOpen(false);
        setIsNavbarVisible(true);
      }}
      className="w-full h-full flex flex-col items-start justify-between px-5 py-3 bg-black text-white"
    >
      <ArrowUpRight size={40} />
      <p className="text-2xl cal w-full text-right">{name}.</p>
    </Link>
  );
};
