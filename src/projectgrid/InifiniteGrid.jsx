import { useState, useEffect, useCallback, useRef } from "react";
import { Stage, Layer } from "react-konva";
import ProjectCard from "./ProjectCard";
import { projects } from "./projects";
import { CursorTarget } from "@izhann/react-cursor-fx";

// const GRID_SIZE = 220; // Size of each grid cell
// const VIEWPORT_BUFFER = 500; // Extra rendering buffer

// const InfiniteGrid = () => {
//   const [stagePos, setStagePos] = useState({ x: 0, y: 0 });
//   const [stageDimensions, setStageDimensions] = useState({
//     width: window.innerWidth,
//     height: window.innerHeight,
//   });
//   const [hoveredCard, setHoveredCard] = useState(null);
//   const [isDragging, setIsDragging] = useState(false);
//   const stageRef = useRef();
//   const animationRef = useRef();
//   const velocityRef = useRef({ x: 0, y: 0 });
//   const lastPosRef = useRef({ x: 0, y: 0 });

//   // Handle window resize
//   useEffect(() => {
//     const handleResize = () => {
//       setStageDimensions({
//         width: window.innerWidth,
//         height: window.innerHeight,
//       });
//     };

//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   // Smooth momentum scrolling
//   const applyMomentum = useCallback(() => {
//     if (isDragging) return;

//     const friction = 0;
//     const minVelocity = 0.5;

//     velocityRef.current.x *= friction;
//     velocityRef.current.y *= friction;

//     if (
//       Math.abs(velocityRef.current.x) > minVelocity ||
//       Math.abs(velocityRef.current.y) > minVelocity
//     ) {
//       setStagePos((prev) => ({
//         x: prev.x + velocityRef.current.x,
//         y: prev.y + velocityRef.current.y,
//       }));
//       animationRef.current = requestAnimationFrame(applyMomentum);
//     }
//   }, [isDragging]);

//   // Handle drag events
//   const handleDragStart = () => {
//     setIsDragging(true);
//     if (animationRef.current) {
//       cancelAnimationFrame(animationRef.current);
//     }
//   };

//   const handleDragMove = (e) => {
//     const stage = e.target.getStage();
//     const newPos = stage.position();

//     // Calculate velocity for momentum
//     velocityRef.current.x = newPos.x - lastPosRef.current.x;
//     velocityRef.current.y = newPos.y - lastPosRef.current.y;
//     lastPosRef.current = newPos;

//     setStagePos(newPos);
//   };

//   const handleDragEnd = () => {
//     setIsDragging(false);
//     // Start momentum animation
//     animationRef.current = requestAnimationFrame(applyMomentum);
//   };

//   // Generate visible cards based on viewport
//   const getVisibleCards = useCallback(() => {
//     const cards = [];
//     const { width, height } = stageDimensions;

//     // Calculate visible grid bounds with buffer
//     const startX = Math.floor((-stagePos.x - VIEWPORT_BUFFER) / GRID_SIZE);
//     const endX = Math.ceil((-stagePos.x + width + VIEWPORT_BUFFER) / GRID_SIZE);
//     const startY = Math.floor((-stagePos.y - VIEWPORT_BUFFER) / GRID_SIZE);
//     const endY = Math.ceil(
//       (-stagePos.y + height + VIEWPORT_BUFFER) / GRID_SIZE
//     );

//     // Generate cards for visible area
//     for (let gridX = startX; gridX <= endX; gridX++) {
//       for (let gridY = startY; gridY <= endY; gridY++) {
//         const projectIndex =
//           (Math.abs(gridX) + Math.abs(gridY)) % projects.length;
//         const project = projects[projectIndex];
//         const uniqueId = `${gridX}-${gridY}-${project.id}`;

//         cards.push({
//           ...project,
//           id: uniqueId,
//           x: gridX * GRID_SIZE,
//           y: gridY * GRID_SIZE,
//         });
//       }
//     }

//     return cards;
//   }, [stagePos, stageDimensions]);

//   const handleCardHover = (cardId, isHovered) => {
//     setHoveredCard(isHovered ? cardId : null);
//   };

//   const visibleCards = getVisibleCards();

//   return (
//     <CursorTarget variant="dragText">
//       <div className="w-full min-h-screen bg-black overflow-hidden">
//         <Stage
//           ref={stageRef}
//           width={stageDimensions.width}
//           height={stageDimensions.height}
//           draggable
//           x={stagePos.x}
//           y={stagePos.y}
//           onDragStart={handleDragStart}
//           onDragMove={handleDragMove}
//           onDragEnd={handleDragEnd}
//         >
//           <Layer>
//             {visibleCards.map((card) => (
//               <ProjectCard
//                 key={card.id}
//                 project={card}
//                 x={card.x}
//                 y={card.y}
//                 onHover={handleCardHover}
//                 isHovered={hoveredCard === card.id}
//               />
//             ))}
//           </Layer>
//         </Stage>
//       </div>
//     </CursorTarget>
//   );
// };

// export default InfiniteGrid;

const GRID_SIZE = 300; // No gap between cards - each card is 400px
const VIEWPORT_BUFFER = 1000; // Extra rendering buffer

const InfiniteGrid = () => {
  const [stagePos, setStagePos] = useState({ x: 0, y: 0 });
  const [stageDimensions, setStageDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight + window.innerHeight / 2,
  });
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const stageRef = useRef();
  const animationRef = useRef();
  const velocityRef = useRef({ x: 0, y: 0 });
  const lastPosRef = useRef({ x: 0, y: 0 });

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setStageDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Smooth momentum scrolling with no friction
  const applyMomentum = useCallback(() => {
    if (isDragging) return;

    const friction = 1; // No friction - momentum continues indefinitely
    const minVelocity = 1; // Higher minimum velocity threshold

    velocityRef.current.x *= 4 - friction;
    velocityRef.current.y *= 4 - friction;

    if (
      Math.abs(velocityRef.current.x) > minVelocity ||
      Math.abs(velocityRef.current.y) > minVelocity
    ) {
      setStagePos((prev) => ({
        x: prev.x + velocityRef.current.x,
        y: prev.y + velocityRef.current.y,
      }));
      animationRef.current = requestAnimationFrame(applyMomentum);
    }
  }, [isDragging]);

  // Handle drag events
  const handleDragStart = () => {
    setIsDragging(true);
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
  };

  const handleDragMove = (e) => {
    const stage = e.target.getStage();
    const newPos = stage.position();

    // Calculate velocity for momentum
    velocityRef.current.x = newPos.x - lastPosRef.current.x;
    velocityRef.current.y = newPos.y - lastPosRef.current.y;
    lastPosRef.current = newPos;

    setStagePos(newPos);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    // Start momentum animation
    animationRef.current = requestAnimationFrame(applyMomentum);
  };

  // Generate visible cards based on viewport
  const getVisibleCards = useCallback(() => {
    const cards = [];
    const { width, height } = stageDimensions;

    // Calculate visible grid bounds with buffer
    const startX = Math.floor((-stagePos.x - VIEWPORT_BUFFER) / GRID_SIZE);
    const endX = Math.ceil((-stagePos.x + width + VIEWPORT_BUFFER) / GRID_SIZE);
    const startY = Math.floor((-stagePos.y - VIEWPORT_BUFFER) / GRID_SIZE);
    const endY = Math.ceil(
      (-stagePos.y + height + VIEWPORT_BUFFER) / GRID_SIZE
    );

    // Generate cards for visible area
    for (let gridX = startX; gridX <= endX; gridX++) {
      for (let gridY = startY; gridY <= endY; gridY++) {
        const projectIndex =
          (Math.abs(gridX) + Math.abs(gridY)) % projects.length;
        const project = projects[projectIndex];
        const uniqueId = `${gridX}-${gridY}-${project.id}`;

        cards.push({
          ...project,
          id: uniqueId,
          x: gridX * GRID_SIZE,
          y: gridY * GRID_SIZE,
        });
      }
    }

    return cards;
  }, [stagePos, stageDimensions]);

  const handleCardHover = (cardId, isHovered) => {
    setHoveredCard(isHovered ? cardId : null);
  };

  const visibleCards = getVisibleCards();

  return (
    <>
      <h1 className="text-white px-2 text-9xl font-black">MY WORK</h1>
      <CursorTarget variant="dragText">
        <div className="w-full h-screen bg-black overflow-hidden border-y border-white">
          <Stage
            ref={stageRef}
            width={stageDimensions.width}
            height={stageDimensions.height}
            draggable
            x={stagePos.x}
            y={stagePos.y}
            onDragStart={handleDragStart}
            onDragMove={handleDragMove}
            onDragEnd={handleDragEnd}
          >
            <Layer>
              {visibleCards.map((card) => (
                <ProjectCard
                  key={card.id}
                  project={card}
                  x={card.x}
                  y={card.y}
                  onHover={handleCardHover}
                  isHovered={hoveredCard === card.id}
                />
              ))}
            </Layer>
          </Stage>
        </div>
      </CursorTarget>
    </>
  );
};

export default InfiniteGrid;
