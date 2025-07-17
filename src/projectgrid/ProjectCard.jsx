// import { Group, Rect, Text, Image } from "react-konva"
// import useImage from "./useImage"
// import useFontFamily from "./useFontFamily"
// // const ProjectCard = ({ project, x, y, onHover, isHovered }) => {
// //   const [image] = useImage(project.image)

// //   return (
// //     <Group x={x} y={y} onMouseEnter={() => onHover(project.id, true)} onMouseLeave={() => onHover(project.id, false)}>
// //       {/* Card background */}
// //       <Rect
// //         width={project.width}
// //         height={project.height}
// //         fill={project.bgColor}
// //         stroke={'white'}
// //         strokeWidth={1}
// //         cornerRadius={0}
// //         shadowColor="rgba(0,0,0,0)"
// //         shadowBlur={isHovered ? 20 : 10}
// //         shadowOffset={{ x: 0, y: isHovered ? 8 : 4 }}
// //       />

// //       {/* Image */}
// //       {image && (
// //         <Image image={image} width={project.width - 20} height={project.height - 40} x={10} y={10} cornerRadius={0} />
// //       )}

// //       {/* Title */}
// //       <Text
// //         text={project.title}
// //         x={10}
// //         y={project.height - 30}
// //         width={project.width - 20}
// //         fontSize={14}
// //         fontFamily="Arial, sans-serif"
// //         fontStyle="bold"
// //         fill="white"
// //         align="center"
// //       />
// //     </Group>
// //   )
// // }

// // export default ProjectCard


// const ProjectCard = ({ project, x, y, onHover, isHovered }) => {
//   const [image] = useImage(project.image)
//   const fontFamily = useFontFamily()

//   return (
//     <Group x={x} y={y} onMouseEnter={() => onHover(project.id, true)} onMouseLeave={() => onHover(project.id, false)}>
//       {/* Card background */}
//       <Rect
//         width={300}
//         height={300}
//         fill="black"
//         stroke="white"
//         strokeWidth={1}
//       />

//       {/* Image */}
//       {image && <Image image={image} width={380} height={340} x={10} y={10} />}

//       {/* Title */}
//       <Text
//         text={project.title}
//         x={-40}
//         y={260}
//         width={380}
//         fontSize={18}
//         fontFamily={fontFamily}
        
//         fill="white"
//         align="center"
//       />
//     </Group>
//   )
// }

// export default ProjectCard


import { useState } from "react"
import { motion } from "framer-motion" // Using framer-motion for simple hover effects
import useFontFamily from "./useFontFamily"
import { CursorTarget } from "@izhann/react-cursor-fx"

const ProjectCard = ({ project }) => {
  const fontFamily = useFontFamily()
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="relative w-[350px] h-[350px] bg-black border border-white flex flex-col items-center justify-between overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 0.95 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      {/* Placeholder for image if needed */}
      <img src={project.image || "https://picsum.photos/800?random=3"} alt={project.title} className=" w-5/6 h-2/3 object-cover p-5" />
      <div
        className=" flex items-center justify-center text-white text-center p-4"
        style={{ fontFamily: fontFamily }}
      >
        <span className="text-lg uppercase leading-tight">{project.title}</span>
      </div>
    </motion.div>
  )
}

export default ProjectCard