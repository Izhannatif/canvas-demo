import { useState } from "react"
import { motion } from "framer-motion" // Using framer-motion for simple hover effects
import useFontFamily from "./useFontFamily"
import { CursorTarget } from "@izhann/react-cursor-fx"
import { ArrowUpRight } from "lucide-react"

const ProjectCard = ({ project }) => {
  const fontFamily = useFontFamily()
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className={`relative w-[350px] h-[350px] bg-black flex flex-col items-center justify-between overflow-hidden p-5 `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 0.95 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      {/* Placeholder for image if needed */}
      <img
        src={project.image || "https://picsum.photos/800?random=3"}
        alt={project.title}
        className=" w-full h-2/3 object-cover border-2 border-white"
      />
      <div
        className="w-full flex items-center justify-between text-white text-center p-2"
        style={{ fontFamily: fontFamily }}
      >
        <span className="text-lg uppercase leading-tight">{project.title}</span>

        <a
          href="#"
          className="relative group flex gap-3 items-center overflow-hidden"
        >
          <span className="relative z-10">case study</span>
          <ArrowUpRight className="z-10" />
          <span
            className="absolute bottom-0 left-0 w-full h-[2px] bg-current transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-bottom-right group-hover:origin-bottom-left"
            aria-hidden="true"
          />
        </a>
      </div>
    </motion.div>
  )
}

export default ProjectCard
