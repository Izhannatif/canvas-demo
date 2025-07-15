import React, { useEffect } from "react"
import { useNavbar } from "../../NavbarContext"

const About = () => {
  const { setIsNavbarVisible } = useNavbar()

  useEffect(() => {
    setIsNavbarVisible(true)
  }, [])

  return (
    <div className="h-screen w-screen bg-white px-5 pt-20">
      <p className="text-8xl font-black">About</p>
    </div>
  )
}

export default About
