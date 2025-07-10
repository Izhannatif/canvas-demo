import { useEffect, useRef, useMemo } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollLetterReveal = ({
  children,
  scrollContainerRef,
  baseColor = '#ccc',      // Light gray
  revealColor = '#000',    // Final black color
  containerClassName = "",
  textClassName = "",
  stagger = 0.05,
  scrub = true,
  triggerStart = '20% bottom',
  triggerEnd = 'bottom center',
}) => {
  const containerRef = useRef(null);

//   const splitLetters = useMemo(() => {
//     const text = typeof children === 'string' ? children : '';
//     return text.split('').map((char, index) => (
//       <span
//         className="inline-block letter"
//         key={index}
//         style={{ color: baseColor }}
//       >
//         {char === ' ' ? '\u00A0' : char}
//       </span>
//     ));
//   }, [children, baseColor]);
const splitLetters = useMemo(() => {
  const text = typeof children === 'string' ? children : '';
  return text.split(' ').map((word, wordIndex) => (
    <span
      key={wordIndex}
      style={{ whiteSpace: 'nowrap', display: 'inline-block' }}
    >
      {word.split('').map((char, charIndex) => (
        <span
          className="inline-block letter"
          key={`${wordIndex}-${charIndex}`}
          style={{ color: baseColor }}
        >
          {char}
        </span>
      ))}
      {/* Add space between words */}
      <span className="inline-block letter" style={{ color: baseColor }}>
        {'\u00A0'}
      </span>
    </span>
  ));
}, [children, baseColor]);
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scroller =
      scrollContainerRef && scrollContainerRef.current
        ? scrollContainerRef.current
        : window;

    const letters = el.querySelectorAll('.letter');

    gsap.fromTo(
      letters,
      { color: baseColor },
      {
        color: revealColor,
        ease: 'none',
        stagger,
        scrollTrigger: {
          trigger: el,
          scroller,
          start: triggerStart,
          end: triggerEnd,
          scrub,
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [scrollContainerRef, baseColor, revealColor, stagger, scrub, triggerStart, triggerEnd]);

  return (
    <div
      ref={containerRef}
      className={` ${containerClassName}`}
    >
      <p
        className={` ${textClassName}`}
      >
        {splitLetters}
      </p>
    </div>
  );
};

export default ScrollLetterReveal;
